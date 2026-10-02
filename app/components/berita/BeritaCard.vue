<script setup lang="ts">
import type { Article } from '~/data/artikel'
import { formatDate } from '~/utils/format'

defineProps<{ article: Article }>()
</script>

<template>
  <NuxtLink :to="`/berita/${article.slug}`" class="group block">
    <img
      :src="article.image.src"
      :alt="article.image.alt"
      width="640"
      height="400"
      loading="lazy"
      class="aspect-[16/10] w-full rounded-3xl object-cover"
    />
    <div class="mt-5 flex items-center justify-between text-[11px]">
      <span class="font-bold text-brand">{{ article.category }}</span>
      <time :datetime="article.date" class="text-muted">{{ formatDate(article.date) }}</time>
    </div>
    <h3
      class="mt-3 text-2xl font-normal leading-snug text-navy transition group-hover:text-brand md:text-[28px]"
    >
      {{ article.title }}
    </h3>
    <p class="mt-3 line-clamp-2 text-xs leading-relaxed text-ink md:text-[13px]">
      {{ article.excerpt }}
    </p>
    <span class="mt-4 inline-flex items-center gap-2 text-xs font-bold text-brand">
      Baca selengkapnya
      <Icon name="lucide:arrow-right" class="size-4 transition group-hover:translate-x-1" />
    </span>
  </NuxtLink>
</template>