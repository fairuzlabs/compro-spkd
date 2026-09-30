import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      titleTemplate: '%s | SPKD',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  fonts: {
   families: [
      { name: 'Open Sans', provider: 'google', weights: [400, 500, 600, 700, 800] },
      { name: 'DM Sans', provider: 'google', weights: [400, 700, 800, 900] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
     ],
   },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/fonts','@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})
