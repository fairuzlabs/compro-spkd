<script setup lang="ts">
import type { Solusi } from '~/data/solusi'

defineProps<{ data: Solusi['flow'] }>()
</script>

<template>
  <section class="bg-[#eef8f6] py-12 md:py-16 lg:py-20">
    <div class="container-x">
      <div class="text-center">
        <p class="text-[11px] font-bold uppercase tracking-wider text-brand">
          {{ data.eyebrow }}
        </p>
        <h2 class="font-display mt-3 text-2xl font-medium text-navy md:text-4xl">
          {{ data.heading }}
        </h2>
      </div>

      <ol class="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
        <li
          v-for="(step, i) in data.steps"
          :key="step.title"
          class="rounded-xl bg-white p-5"
        >
          <div class="flex items-center justify-between">
            <span class="font-display text-2xl font-medium text-brand">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <Icon
              v-if="i < data.steps.length - 1"
              name="lucide:chevron-right"
              class="size-4 text-brand"
            />
          </div>
          <h3 class="mt-4 text-sm font-bold text-navy">{{ step.title }}</h3>
          <p class="mt-2 text-xs leading-relaxed text-ink">{{ step.desc }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>