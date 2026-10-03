<script setup lang="ts">
const route = useRoute()

const { article, related } = await useNewsDetail(
  route.params.slug as string
)

console.log('ARTICLE:', article)
console.log('IMAGE:', article?.image)
console.log('IMAGE SRC:', article?.image?.src)

if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Artikel tidak ditemukan',
    fatal: true,
  })
}

useSeoMeta({
  title: article.title,
  description: article.excerpt,
  ogTitle: article.title,
  ogDescription: article.excerpt,
  ogImage: article.image?.src,
  ogType: 'article',
  twitterCard: 'summary_large_image',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        image: article.image?.src,
        datePublished: article.date,
        author: {
          '@type': 'Organization',
          name: article.source,
        },
        publisher: {
          '@type': 'Organization',
          name: 'PT SPKD',
        },
      }),
    },
  ],
})
</script>

<template>
  <article v-if="article">
    <ArtikelHero :article="article" />
    <ArtikelBody :article="article" />
    <ArtikelRelated
      v-if="related.length"
      :items="related"
    />
  </article>
</template>