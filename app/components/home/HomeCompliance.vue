<script setup lang="ts">
const partners = [
  { name: 'SATUSEHAT', sub: 'Ekosistem Kemenkes RI', icon: 'lucide:activity' },
  { name: 'Kemenkes RI', sub: 'Regulator Kesehatan', icon: 'lucide:square-plus' },
  { name: 'Kominfo RI', sub: 'PSE Lingkup Publik', icon: 'lucide:monitor-check' },
  { name: 'BSSN Siber', sub: 'Standar Keamanan Siber', icon: 'lucide:shield' },
  { name: 'BPJS Kesehatan', sub: 'VClaim, PCare & Antrean', icon: 'lucide:credit-card' },
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
  <section class="bg-deep text-white">
    <div class="container-wide py-10 md:py-12">
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
          <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-deep">
            <Icon :name="p.icon" class="size-5" />
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