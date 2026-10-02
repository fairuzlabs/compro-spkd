<script setup lang="ts">
import { articles } from '~/data/artikel'
import { formatDate } from '~/utils/format'

// 3 artikel terbaru
const posts = [...articles]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3)
</script>

<template>
  <section class="bg-[#f6f6fd] py-14 md:py-20">
    <div class="container-wide">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="max-w-xl">
          <p class="text-[11px] font-bold uppercase tracking-wider text-brand">
            Wawasan &amp; Regulasi
          </p>
          <h2 class="mt-3 text-2xl font-bold text-navy md:text-4xl">
            Berita &amp; Wawasan Kebijakan Kesehatan
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-ink md:text-base">
            Pembaruan regulasi, studi kasus implementasi, dan perkembangan
            teknologi kesehatan digital di Indonesia.
          </p>
        </div>
        <NuxtLink
          to="/berita"
          class="inline-flex w-fit items-center gap-2 rounded-lg bg-[#e8e9fb] px-5 py-3 text-xs font-semibold text-deep transition hover:bg-[#dcdef8]"
        >
          Lihat Semua Artikel
          <Icon name="lucide:arrow-right" class="size-4" />
        </NuxtLink>
      </div>

      <ul class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="p in posts" :key="p.slug">
          <NuxtLink
            :to="`/berita/${p.slug}`"
            class="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
          >
            <div class="relative">
              <img
                :src="p.image.src"
                :alt="p.image.alt"
                width="600"
                height="260"
                loading="lazy"
                class="h-44 w-full object-cover md:h-48"
              />
              <span
                class="absolute left-3 top-3 rounded-full bg-deep/90 px-2.5 py-1 text-[10px] font-bold text-white"
              >
                {{ p.category }}
              </span>
            </div>
            <div class="flex flex-1 flex-col p-5">
              <time :datetime="p.date" class="text-xs text-muted">
                {{ formatDate(p.date) }}
              </time>
              <h3 class="mt-3 text-base font-bold leading-snug text-navy">{{ p.title }}</h3>
              <p class="mt-3 line-clamp-3 text-xs leading-relaxed text-ink">{{ p.excerpt }}</p>
              <div class="mt-auto flex items-center justify-between pt-5 text-[11px] font-semibold text-navy">
                <span>{{ p.source }} • {{ p.readMinutes }} min read</span>
                <Icon name="lucide:arrow-right" class="size-4 transition group-hover:translate-x-1" />
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>