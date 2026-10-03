import type { Article } from '~/data/artikel'

type ApiNews = {
  slug: string
  title: string
  excerpt: string | null
  featured_image: string | null
  author: string | null
  reading_time: number | null
  is_featured: boolean
  published_at: string | null
  category?: { name: string } | null
}

// Ambil berita dari API Laravel, bentuknya disamakan dengan `Article`
// supaya komponen kartu dan halaman yang sudah ada tidak perlu diubah.
export const useNewsList = async () => {
  const {
    public: { apiBase },
  } = useRuntimeConfig()

  const imageUrl = (path: string | null) => {
    if (!path) return ''

    // Kalau API sudah mengirim URL lengkap
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path
    }

    // Kalau API mengirim path seperti "news/xxx.png"
    return `${apiBase.replace('/api', '')}/storage/${path}`
  }

  // Terima {data: [...]} maupun {data: {data: [...]}} (paginasi)
  const { data: res, status, error } = await useFetch<{
    data: ApiNews[] | { data: ApiNews[] }
  }>(`${apiBase}/news`, {
    key: 'news-list',
  })

  const articles = computed(() => {
    const raw = res.value?.data
    const list = Array.isArray(raw) ? raw : (raw?.data ?? [])

    return [...list]
      .sort((a, b) =>
        (b.published_at ?? '').localeCompare(a.published_at ?? ''),
      )
      .map((n) => ({
        slug: n.slug,
        title: n.title,
        excerpt: (n.excerpt ?? '').replace(/<[^>]*>/g, ''),
        date: n.published_at ?? '',
        category: n.category?.name ?? '',
        topic: n.category?.name ?? '',
        featured: n.is_featured,
        source: n.author ?? '',
        readMinutes: n.reading_time ?? 1,
        image: {
          src: imageUrl(n.featured_image),
          alt: n.title,
        },
      })) as unknown as Article[]
  })

  return { articles, status, error }
}