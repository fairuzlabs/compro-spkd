<script setup lang="ts">
import type { Article } from '~/data/artikel'

defineProps<{ items: Article[] }>()
</script>

<template>
  <section class="bg-[#f1f7f7] py-12 md:py-16 lg:py-20">
    <div class="container-x">
      <p class="text-[11px] font-bold uppercase tracking-wider text-brand">Baca selanjutnya</p>
      <h2 class="mt-3 text-3xl font-normal text-navy md:text-4xl">Wawasan terkait</h2>

      <ul class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="a in items" :key="a.slug">
          <NuxtLink
            :to="`/berita/${a.slug}`"
            class="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
          >
            <img
              :src="a.image.src"
              :alt="a.image.alt"
              width="600"
              height="260"
              loading="lazy"
              class="h-44 w-full object-cover"
            />
            <div class="flex flex-1 flex-col p-5">
              <div class="flex items-center justify-between text-[10px]">
                <span class="font-semibold uppercase tracking-wide text-brand">{{ a.category }}</span>
                <time :datetime="a.date" class="text-muted">{{ formatDate(a.date) }}</time>
              </div>
              <h3 class="mt-3 text-base font-bold leading-snug text-navy">{{ a.title }}</h3>
              <p class="mt-2 line-clamp-2 text-xs leading-relaxed text-ink">{{ a.excerpt }}</p>
              <span class="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-bold text-brand">
                Baca artikel
                <Icon name="lucide:arrow-right" class="size-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>