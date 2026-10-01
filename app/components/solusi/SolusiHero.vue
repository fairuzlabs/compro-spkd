<script setup lang="ts">
import type { Solusi } from '~/data/solusi'

defineProps<{ data: Solusi['hero'] }>()
</script>

<template>
  <section class="bg-navy text-white">
    <div
      class="container-x grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20"
    >
      <div>
        <p class="text-[11px] font-bold uppercase tracking-wider">
          {{ data.eyebrow }}
        </p>
        <h1
          class="font-display mt-4 text-3xl font-medium leading-[1.15] sm:text-4xl lg:text-[44px]"
        >
          {{ data.title }}
        </h1>
        <p class="mt-5 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
          {{ data.desc }}
        </p>
        <NuxtLink
          to="/kontak"
          class="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand/90"
        >
          {{ data.button }}
          <Icon name="lucide:arrow-up-right" class="size-4" />
        </NuxtLink>
      </div>

      <img
        :src="data.image.src"
        :alt="data.image.alt"
        width="640"
        height="480"
        fetchpriority="high"
        class="aspect-[4/3] w-full rounded-3xl object-cover"
      />
    </div>
  </section>
</template>