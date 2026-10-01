<script setup lang="ts">
import type { Solusi } from '~/data/solusi'

defineProps<{ data: Solusi['cta'] }>()
</script>

<template>
  <section class="bg-brand text-white">
    <div
      class="container-x flex flex-col gap-6 py-12 md:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16"
    >
      <div class="max-w-2xl">
        <h2 class="font-display text-2xl font-medium leading-tight md:text-3xl">
          {{ data.heading }}
        </h2>
        <p class="mt-3 text-xs leading-relaxed text-white/90 md:text-sm">
          {{ data.desc }}
        </p>
      </div>

      <NuxtLink
        to="/kontak"
        class="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy/90"
      >
        {{ data.button }}
        <Icon name="lucide:arrow-up-right" class="size-4" />
      </NuxtLink>
    </div>
  </section>
</template>