<script setup lang="ts">
const columns = [
  {
    heading: 'Perusahaan',
    links: [
      { label: 'Tentang Kami', to: '/tentang-kami' },
      { label: 'Kerja Sama', to: '/kerja-sama' },
      { label: 'Berita', to: '/berita' },
    ],
  },
  {
    heading: 'Solusi',
    links: [
      { label: 'SIMRS & RCM', to: '/solusi/simrs-erp' },
      { label: 'Interoperabilitas RME', to: '/solusi/interoperabilitas-rme' },
      { label: 'Tele-Health', to: '/solusi/tele-health-smart-emergency' },
      { label: 'Supply Chain', to: '/solusi/cash-supply-chain' },
    ],
  },
  {
    heading: 'Kepercayaan',
    links: [
      { label: 'Kepatuhan & Standar', to: '/kepatuhan-standar' },
      { label: 'Keamanan Data', to: '/keamanan-informasi' },
      { label: 'Kontak', to: '/kontak' },
    ],
  },
]

const legal = [
  { label: 'Privasi', to: '/privasi' },
  { label: 'Ketentuan', to: '/ketentuan' },
  { label: 'Keamanan Informasi', to: '/keamanan-informasi' },
]
</script>

<template>
  <footer class="w-full bg-[#0a2942] px-5 pb-8 pt-12 sm:px-8 md:pt-16 lg:px-[72px] lg:pt-[72px]">
    <div class="flex flex-col justify-between gap-10 pb-12 md:pb-[54px] lg:flex-row">
      <div class="flex flex-col gap-5 lg:w-[420px]">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="relative h-[38px] w-[43px] shrink-0 md:h-[45px] md:w-[51px]">
            <img
              src="~/assets/images/logo-spkd-white.svg"
              alt="Logo SPKD"
              class="absolute inset-0 h-full w-full object-contain"
            />
          </div>
          <div class="flex flex-col leading-normal text-white">
            <p class="text-[20px] font-black md:text-[24px]">PT SPKD</p>
            <p class="text-[8px] font-semibold uppercase tracking-[0.15em] md:text-[9px]">
              Sistem Pelayanan Kesehatan &amp; Data
            </p>
          </div>
        </NuxtLink>

        <p class="text-[14px] leading-[1.65] text-[#ddf5f1] md:text-[15px]">
          Mitra teknologi kesehatan Indonesia untuk layanan yang terintegrasi, aman, efisien, dan
          berorientasi pada pengalaman manusia.
        </p>

        <p class="text-[13px] leading-[1.7] text-white md:text-[14px]">
          <a href="mailto:halo@spkd.co.id" class="hover:text-[#ddf5f1]">halo@spkd.co.id</a>
          &nbsp;·&nbsp;
          <a href="tel:+622150882026" class="hover:text-[#ddf5f1]">+62 21 5088 2026</a>
        </p>
      </div>

      <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-[68px]">
        <nav v-for="col in columns" :key="col.heading" :aria-label="col.heading" class="flex flex-col gap-3">
          <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9b91] md:text-[12px]">
            {{ col.heading }}
          </p>
          <NuxtLink
            v-for="link in col.links"
            :key="link.to"
            :to="link.to"
            class="text-[13px] text-white transition-colors hover:text-[#ddf5f1] md:text-[14px]"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </div>

    <div class="mb-6 h-px w-full bg-[#315167]" />
    <div class="flex flex-col justify-between gap-3 text-[11px] text-[#738893] sm:flex-row md:text-[12px]">
      <p>© 2026 PT Sistem Pelayanan Kesehatan dan Data. Seluruh hak dilindungi.</p>
      <p class="flex flex-wrap gap-x-4 gap-y-1">
        <NuxtLink v-for="l in legal" :key="l.to" :to="l.to" class="hover:text-white">
          {{ l.label }}
        </NuxtLink>
      </p>
    </div>
  </footer>
</template>