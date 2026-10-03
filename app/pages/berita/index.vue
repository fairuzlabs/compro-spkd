<script setup lang="ts">
useSeoMeta({
  title: 'Berita & Wawasan',
  description:
    'Perspektif praktis mengenai teknologi, kebijakan, interoperabilitas, dan perubahan layanan kesehatan Indonesia.',
  ogTitle: 'Pusat Informasi & Publikasi Digital Kesehatan | SPKD',
  ogDescription:
    'Perspektif praktis mengenai teknologi, kebijakan, interoperabilitas, dan perubahan layanan kesehatan Indonesia.',
  twitterCard: 'summary_large_image',
})

const { articles } = await useNewsList()

// Filter topik diambil dari kategori berita yang ada di CMS
const topics = computed(() => [
  { label: 'Semua', value: 'semua' },
  ...[...new Set(articles.value.map((a) => a.topic as string).filter(Boolean))].map((t) => ({
    label: t,
    value: t,
  })),
])

const active = ref('semua')

// terbaru di atas
const sorted = computed(() => [...articles.value].sort((a, b) => b.date.localeCompare(a.date)))
const featured = computed(() => sorted.value.find((a) => a.featured) ?? sorted.value[0])

const list = computed(() =>
  sorted.value.filter(
    (a) =>
      a.slug !== featured.value?.slug &&
      (active.value === 'semua' || a.topic === active.value),
  ),
)
</script>

<template>
  <div>
    <section class="bg-[#f3f8f8]">
      <div class="container-x py-12 md:py-16 lg:py-[72px]">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <p class="text-[11px] font-bold uppercase tracking-wider text-brand">
              Berita &amp; wawasan
            </p>
            <h1
              class="mt-4 max-w-2xl text-4xl font-normal leading-[1.1] text-navy md:text-5xl lg:text-[56px]"
            >
              Pusat Informasi &amp; Publikasi Digital Kesehatan
            </h1>
          </div>
          <p class="max-w-xs text-sm leading-relaxed text-ink lg:pb-2">
            Perspektif praktis mengenai teknologi, kebijakan, interoperabilitas, dan
            perubahan layanan kesehatan Indonesia.
          </p>
        </div>

        <BeritaFeatured v-if="featured" :article="featured" class="mt-10 md:mt-14" />
      </div>
    </section>

    <section class="bg-white py-12 md:py-16 lg:py-20">
      <div class="container-x">
        <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 class="text-2xl font-normal text-navy md:text-4xl">Terbaru dari lapangan</h2>

          <div role="group" aria-label="Filter topik" class="flex flex-wrap gap-2">
            <button
              v-for="t in topics"
              :key="t.value"
              type="button"
              :aria-pressed="active === t.value"
              class="rounded-full px-4 py-2 text-xs font-semibold transition"
              :class="
                active === t.value
                  ? 'bg-navy text-white'
                  : 'bg-[#eef5f5] text-navy hover:bg-[#dff0ee]'
              "
              @click="active = t.value"
            >
              {{ t.label }}
            </button>
          </div>
        </div>

        <ul v-if="list.length" class="mt-8 grid gap-x-6 gap-y-10 md:mt-10 md:grid-cols-2">
          <li v-for="a in list" :key="a.slug">
            <BeritaCard :article="a" />
          </li>
        </ul>
        <p v-else class="mt-10 text-sm text-muted">Belum ada artikel di topik ini.</p>
      </div>
    </section>
  </div>
</template>