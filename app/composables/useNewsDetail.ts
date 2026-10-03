import type { Article, Block } from '~/data/artikel'

type ApiBlock = {
  type: string
  content?: string
  items?: { title: string; description?: string }[]
}

type ApiNewsDetail = {
  slug: string
  title: string
  excerpt: string | null
  content: ApiBlock[] | null
  featured_image?: string | null
  author: string | null
  reading_time: number | null
  is_featured: boolean
  published_at: string | null
  category?: { name: string } | null
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

// Ambil 1 berita dari API Laravel, bentuknya disamakan dengan `Article`
// supaya ArtikelHero, ArtikelBody, dan ArtikelRelated tidak perlu diubah.
export const useNewsDetail = async (slug: string) => {
  const { public: { apiBase } } = useRuntimeConfig()

  // Dua composable dipanggil sebelum `await` pertama (konteks Nuxt masih ada),
  // lalu ditunggu bersamaan. Jangan taruh `await` di antara keduanya.
  const [{ data: res }, { articles }] = await Promise.all([
    useFetch<{ data: ApiNewsDetail }>(`${apiBase}/news/${slug}`, {
      key: `news-${slug}`,
    }),
    useNewsList(),
  ])

  const n = res.value?.data
  if (!n) return { article: null, related: [] as Article[] }

  // id unik untuk anchor daftar isi
  const used = new Set<string>()
  const uid = (text: string) => {
    const base = slugify(text) || 'bagian'
    let id = base
    let i = 2
    while (used.has(id)) id = `${base}-${i++}`
    used.add(id)
    return id
  }

  const blocks: Block[] = []
  const toc: Article['toc'] = []
  let summary = ''

  for (const b of n.content ?? []) {
    switch (b.type) {
      case 'summary':
        summary = b.content ?? ''
        break
      case 'paragraph':
        blocks.push({ type: 'p', text: b.content ?? '' })
        break
      case 'heading': {
        const text = b.content ?? ''
        const id = uid(text)
        blocks.push({ type: 'h2', id, text })
        toc.push({ id, label: text })
        break
      }
      case 'points': {
        const items = (b.items ?? []).map((it) => {
          const id = uid(it.title)
          toc.push({ id, label: it.title })
          return { id, title: it.title, desc: it.description ?? '' }
        })
        blocks.push({ type: 'cards', items })
        break
      }
      case 'quote':
        blocks.push({ type: 'quote', text: b.content ?? '' })
        break
      // blok lain (mis. image) belum didukung ArtikelBody, dilewati
    }
  }

  const excerpt = (n.excerpt ?? '').replace(/<[^>]*>/g, '')
  const category = n.category?.name ?? ''
  const imageSrc = n.featured_image
  ? `${apiBase.replace('/api', '')}/storage/${n.featured_image}`
  : ''

  const article: Article = {
    slug: n.slug,
    category,
    topic: category as Article['topic'],
    featured: n.is_featured,
    title: n.title,
    date: n.published_at ?? '',
    source: n.author ?? '',
    readMinutes: n.reading_time ?? 1,
    image: { src: imageSrc, alt: n.title },
    excerpt,
    summary: summary || excerpt,
    toc,
    blocks,
    related: [],
  }
  console.log('IMAGE SRC FINAL:', imageSrc)

  // Terkait: kategori sama dulu, lalu yang terbaru, maksimal 3
  const others = articles.value.filter((a) => a.slug !== slug)
  const related = [
    ...others.filter((a) => a.category === category),
    ...others.filter((a) => a.category !== category),
  ].slice(0, 3)

  return { article, related }
}