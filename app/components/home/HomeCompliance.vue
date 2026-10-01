<script setup lang="ts">
const partners = [
  { name: 'SATUSEHAT', sub: 'Ekosistem Kemenkes RI', logo: '/images/beranda-satusehat.svg' },
  { name: 'Kemenkes RI', sub: 'Regulator Kesehatan', logo: '/images/beranda-kemenkes.svg' },
  { name: 'Kominfo RI', sub: 'PSE Lingkup Publik', logo: '/images/beranda-kominfo.svg' },
  { name: 'BSSN Siber', sub: 'Standar Keamanan Siber', logo: '/images/beranda-bssn.svg' },
  { name: 'BPJS Kesehatan', sub: 'VClaim, PCare & Antrean', logo: '/images/beranda-bpjs.svg' },
]

const standards = [
  { label: 'HL7 FHIR Release 4', icon: 'lucide:code-xml' },
  { label: 'SNOMED CT Indonesian Edition', icon: 'lucide:languages' },
  { label: 'ICD-10 & ICD-9-CM Compliant', icon: 'lucide:list' },
  { label: 'LOINC Lab Coding Standard', icon: 'lucide:flask-conical' },
  { label: 'ISO 27001:2022 Certified', icon: 'lucide:lock' },
]
</script>

<template>
  <section class="relative overflow-hidden bg-deep text-white">
    <!-- Glow kiri atas -->
    <img
      src="/images/beranda-blur.svg"
      alt=""
      aria-hidden="true"
      width="414"
      height="414"
      class="pointer-events-none absolute left-0 top-0 w-[260px] -scale-x-100 select-none opacity-50 md:w-[414px]"
    />
    <!-- Glow kiri bawah -->
    <img
      src="/images/beranda-blur.svg"
      alt=""
      aria-hidden="true"
      width="414"
      height="414"
      class="pointer-events-none absolute bottom-0 left-0 w-[260px] -scale-100 select-none opacity-50 md:w-[414px]"
    />

    <div class="container-wide relative py-10 md:py-12">
      <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-[11px] font-bold uppercase tracking-wider text-mint">
            Kepatuhan Terakreditasi
          </p>
          <h2 class="mt-2 text-xl font-medium md:text-2xl">
            Dipercaya &amp; Terakreditasi Sesuai Regulasi Kesehatan Nasional
          </h2>
        </div>
        <p class="flex items-center gap-2 text-xs font-semibold text-white/90">
          <span class="size-1.5 rounded-full bg-mint" />
          Verified Government Cloud &amp; Health Architecture
        </p>
      </div>

      <ul class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <li
          v-for="p in partners"
          :key="p.name"
          class="flex items-center gap-3 rounded-xl bg-white/5 p-4"
        >
          <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white p-1.5">
            <img
              :src="p.logo"
              :alt="`Logo ${p.name}`"
              width="28"
              height="28"
              loading="lazy"
              class="size-full object-contain"
            />
          </span>
          <div class="min-w-0">
            <p class="truncate text-sm font-bold text-mint">{{ p.name }}</p>
            <p class="truncate text-xs text-white/80">{{ p.sub }}</p>
          </div>
        </li>
      </ul>

      <ul class="mt-6 flex flex-wrap justify-center gap-2">
        <li
          v-for="s in standards"
          :key="s.label"
          class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold"
        >
          <Icon :name="s.icon" class="size-3.5" />
          {{ s.label }}
        </li>
      </ul>
    </div>
  </section>
</template>