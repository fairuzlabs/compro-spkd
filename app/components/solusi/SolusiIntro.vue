<script setup lang="ts">
import type { Solusi } from '~/data/solusi'

defineProps<{ data: Solusi ['intro'] }>()
</script>

<template>
  <section class="bg-white py-12 md:py-16 lg:py-20">
    <div class="container-x grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
      <div>
        <p class="text-[11px] font-bold uppercase tracking-wider text-brand">
          {{ data.eyebrow }}
        </p>
        <h2
          class="font-display mt-4 max-w-md text-2xl font-medium leading-tight text-navy md:text-3xl"
        >
          {{ data.heading }}
        </h2>
      </div>

      <div>
        <p class="text-sm leading-relaxed text-ink md:text-[15px]">
          {{ data.body }}
        </p>
        <ul class="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          <li
            v-for="tag in data.tags"
            :key="tag"
            class="inline-flex items-center gap-2 text-xs font-semibold text-navy"
          >
            <span class="size-1.5 rounded-full bg-brand" />
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>