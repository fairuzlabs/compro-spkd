<script setup lang="ts">
import { getSolution } from '~/data/solusi'

const route = useRoute()
const solution = getSolution(route.params.slug as string)

if (!solution) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Solusi tidak ditemukan',
    fatal: true,
  })
}

useSeoMeta({
  title: solution.name,
  description: solution.hero.desc,
  ogTitle: solution.name,
  ogDescription: solution.hero.desc,
  ogImage: solution.hero.image.src,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div v-if="solution">
    <SolusiHero :data="solution.hero" />
    <SolusiIntro :data="solution.intro" />
    <SolusiFeatures :data="solution.features" />
    <SolusiImpact :data="solution.impact" />
    <SolusiFlow :data="solution.flow" />
    <SolusiCta :data="solution.cta" />
  </div>
</template>