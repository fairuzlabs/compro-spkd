<script setup lang="ts">
import type { Article } from '~/data/artikel'
import { formatDate } from '~/utils/format'

defineProps<{ article: Article }>()
</script>

<template>
  <header class="bg-white">
    <div class="container-x pb-10 pt-12 text-center md:pb-12 md:pt-16">
      <span
        class="inline-block rounded-full bg-[#dff5f0] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand"
      >
        {{ article.category }}
      </span>
      <h1
        class="mx-auto mt-5 max-w-3xl text-3xl font-normal leading-[1.15] text-navy sm:text-4xl lg:text-[48px]"
      >
        {{ article.title }}
      </h1>
      <p
        class="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted"
      >
        <time :datetime="article.date">{{ formatDate(article.date) }}</time>
        <span aria-hidden="true">•</span>
        <span>Sumber: {{ article.source }}</span>
        <span aria-hidden="true">•</span>
        <span>{{ article.readMinutes }} menit baca</span>
      </p>
    </div>

    <div class="container-x">
      <img
        :src="article.image.src"
        :alt="article.image.alt"
        width="1296"
        height="640"
        fetchpriority="high"
        class="aspect-[16/9] w-full rounded-3xl object-cover lg:aspect-[2/1]"
      />
    </div>
  </header>
</template>