<script setup lang="ts">
import type { Article } from '~/data/artikel'

defineProps<{ article: Article }>()
</script>

<template>
  <section class="bg-white py-12 md:py-16">
    <div
      class="container-x grid gap-10 lg:grid-cols-[64px_minmax(0,1fr)_200px] lg:gap-12 xl:gap-16"
    >
      <!-- Share (desktop) -->
      <aside class="hidden lg:block">
        <div class="sticky top-28">
          <ArtikelShare :title="article.title" vertical />
        </div>
      </aside>

      <!-- Isi artikel -->
      <div class="mx-auto w-full max-w-[720px] min-w-0">
        <div class="rounded-xl bg-[#e4f6f3] p-5">
          <p class="text-[10px] font-bold uppercase tracking-wider text-brand">Ringkasan</p>
          <p class="mt-2 text-sm font-semibold leading-relaxed text-navy md:text-[15px]">
            {{ article.summary }}
          </p>
        </div>

        <div class="mt-8 space-y-5">
          <template v-for="(block, i) in article.blocks" :key="i">
            <p
              v-if="block.type === 'p'"
              class="text-[15px] leading-[1.8] text-ink"
            >
              {{ block.text }}
            </p>

            <h2
              v-else-if="block.type === 'h2'"
              :id="block.id"
              class="scroll-mt-28 pt-4 text-2xl font-normal leading-tight text-navy md:text-[28px]"
            >
              {{ block.text }}
            </h2>

            <ul v-else-if="block.type === 'cards'" class="space-y-3">
              <li
                v-for="(card, n) in block.items"
                :id="card.id"
                :key="card.id"
                class="scroll-mt-28 flex gap-4 rounded-xl border border-gray-200 p-4"
              >
                <span class="text-xs font-bold text-brand">
                  {{ String(n + 1).padStart(2, '0') }}
                </span>
                <div>
                  <h3 class="text-sm font-bold text-navy">{{ card.title }}</h3>
                  <p class="mt-1 text-xs text-muted">{{ card.desc }}</p>
                </div>
              </li>
            </ul>

            <blockquote
              v-else-if="block.type === 'quote'"
              class="border-l-4 border-brand py-1 pl-5 text-lg italic leading-snug text-navy md:text-xl"
            >
              “{{ block.text }}”
            </blockquote>
          </template>
        </div>

        <!-- Share (mobile) -->
        <div class="mt-10 border-t border-gray-200 pt-6 lg:hidden">
          <ArtikelShare :title="article.title" />
        </div>
      </div>

      <!-- Daftar isi (desktop) -->
      <aside v-if="article.toc.length" class="hidden lg:block">
        <div class="sticky top-28">
          <ArtikelToc :items="article.toc" />
        </div>
      </aside>
    </div>
  </section>
</template>