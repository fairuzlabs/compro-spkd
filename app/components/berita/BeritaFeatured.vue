<script setup lang="ts">
import type { Article } from '~/data/artikel'
import { formatDate } from '~/utils/format'

defineProps<{ article: Article }>()
</script>

<template>
  <article class="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
    <NuxtLink
      :to="`/berita/${article.slug}`"
      class="block overflow-hidden rounded-3xl"
      tabindex="-1"
    >
      <img
        :src="article.image.src"
        :alt="article.image.alt"
        width="720"
        height="480"
        fetchpriority="high"
        class="aspect-[4/3] w-full object-cover lg:aspect-[3/2]"
      />
    </NuxtLink>

    <div>
      <div class="flex items-center justify-between text-[11px]">
        <span class="font-bold uppercase tracking-wide text-brand">{{ article.category }}</span>
        <time :datetime="article.date" class="text-muted">{{ formatDate(article.date) }}</time>
      </div>
      <h2 class="mt-4 text-3xl font-normal leading-[1.15] text-navy md:text-4xl lg:text-[40px]">
        {{ article.title }}
      </h2>
      <p class="mt-5 text-sm leading-relaxed text-ink md:text-base">
        {{ article.excerpt }}
      </p>
      <NuxtLink
        :to="`/berita/${article.slug}`"
        class="mt-7 inline-flex items-center gap-2 rounded-full border border-brand px-5 py-3 text-sm font-medium text-[#08756f] transition hover:bg-brand hover:text-white"
      >
        Baca artikel
        <Icon name="lucide:arrow-up-right" class="size-4" />
      </NuxtLink>
    </div>
  </article>
</template>