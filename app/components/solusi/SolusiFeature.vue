<script setup lang="ts">
import type { Solusi } from '~/data/solusi'

defineProps<{ data: Solusi['features'] }>()
</script>

<template>
  <section class="bg-[#f3f9f9] py-12 md:py-16 lg:py-20">
    <div class="container-x">
      <div class="text-center">
        <p class="text-[11px] font-bold uppercase tracking-wider text-brand">
          {{ data.eyebrow }}
        </p>
        <h2 class="font-display mt-3 text-2xl font-medium text-navy md:text-4xl">
          {{ data.heading }}
        </h2>
      </div>

      <ul
        class="mt-10 grid gap-5 md:mt-12 md:gap-6"
        :class="data.items.length === 4 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'"
      >
        <li
          v-for="(item, i) in data.items"
          :key="item.title"
          class="rounded-2xl border border-gray-200 bg-white p-6 md:p-7"
        >
          <p class="text-xs font-bold text-brand">
            {{ String(i + 1).padStart(2, '0') }}
          </p>
          <h3 class="font-display mt-4 text-lg font-medium text-navy md:text-xl">
            {{ item.title }}
          </h3>
          <p class="mt-3 text-xs leading-relaxed text-ink md:text-[13px]">
            {{ item.desc }}
          </p>
          <ul class="mt-4 space-y-2">
            <li
              v-for="b in item.bullets"
              :key="b"
              class="flex items-center gap-2 text-xs text-navy"
            >
              <span class="size-1.5 shrink-0 rounded-full bg-brand" />
              {{ b }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>