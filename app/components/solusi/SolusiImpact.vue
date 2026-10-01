<script setup lang="ts">
import type { Solusi } from '~/data/solusi'

defineProps<{ data: Solusi['impact'] }>()
</script>

<template>
  <section class="bg-white py-12 md:py-16 lg:py-20">
    <div class="container-x">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div>
          <p class="text-[11px] font-bold uppercase tracking-wider text-brand">
            {{ data.eyebrow }}
          </p>
          <h2
            class="font-display mt-4 max-w-lg text-2xl font-medium leading-tight text-navy md:text-3xl"
          >
            {{ data.heading }}
          </h2>
        </div>
        <p class="max-w-sm text-xs leading-relaxed text-ink md:text-[13px]">
          {{ data.desc }}
        </p>
      </div>

      <ul class="mt-8 grid grid-cols-2 gap-4 md:mt-10 lg:grid-cols-4">
        <li
          v-for="m in data.metrics"
          :key="m.value"
          class="rounded-xl border border-gray-200 p-4 md:p-5"
        >
          <p class="font-display text-xl font-medium text-brand md:text-2xl">
            {{ m.value }}
          </p>
          <p class="mt-1 text-[11px] leading-snug text-ink md:text-xs">
            {{ m.label }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>