<script setup lang="ts">
const open = ref(false)
const route = useRoute()

const links = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Kami', to: '/tentang-kami' },
  { label: 'Solusi', to: '/solusi' },
  // { label: 'Kepatuhan & Standar', to: '/kepatuhan-standar' },
  { label: 'Kerja Sama', to: '/kerja-sama' },
  { label: 'Berita', to: '/berita' },
  { label: 'Kontak', to: '/kontak' },
]

const isActive = (to: string) =>
  to === '/' ? route.path === '/' : route.path.startsWith(to)

// tutup menu mobile tiap pindah halaman
watch(() => route.fullPath, () => (open.value = false))
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-gray-200 bg-white">
    <nav
      class="flex h-[64px] items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:h-[91px] lg:px-[72px]"
    >
      <!-- Logo + nama -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <img
          src="~/assets/images/logo-spkd.svg"
          alt="Logo SPKD"
          class="h-12 w-auto"
        />
        <div class="hidden leading-none sm:block">
          <p class="text-2xl font-bold text-navy">SPKD</p>
          <p class="hidden text-[9px] uppercase tracking-wide text-gray-500 sm:block">
            Sistem Pelayanan Kesehatan &amp; Data
          </p>
        </div>
      </NuxtLink>

      <!-- Menu desktop -->
      <ul class="hidden items-center gap-4 lg:flex xl:gap-[22px]">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="block whitespace-nowrap border-b-2 pb-2.5 text-sm font-medium transition-colors xl:text-[15px]"
            :class="
              isActive(link.to)
                ? 'border-brand text-brand'
                : 'border-transparent text-slate-600 hover:text-brand'
            "
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Hamburger (mobile & tablet) -->
      <button
        class="rounded-md p-2 text-navy hover:bg-gray-100 lg:hidden"
        aria-label="Toggle menu"
        :aria-expanded="open"
        @click="open = !open"
      >
        <svg v-if="!open" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </nav>

    <!-- Menu mobile -->
    <ul v-if="open" class="border-t border-gray-200 px-4 py-2 lg:hidden">
      <li v-for="link in links" :key="link.to">
        <NuxtLink
          :to="link.to"
          class="block rounded-md px-3 py-2.5 text-sm font-medium"
          :class="
            isActive(link.to)
              ? 'bg-brand/10 text-brand'
              : 'text-slate-700 hover:bg-gray-100'
          "
        >
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>