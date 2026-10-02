<script setup lang="ts">
const solutions = [
  {
    no: '01',
    title: 'SIMRS–ERP & Revenue Cycle',
    desc: '68 modul terintegrasi untuk operasional klinis, keuangan, dan EIS real-time.',
    slug: 'simrs-erp',
  },
  {
    no: '02',
    title: 'Interoperabilitas RME',
    desc: 'Pertukaran data klinis berbasis HL7 FHIR melalui TransIRME dan Personal Health Record.',
    slug: 'interoperabilitas-rme',
  },
  {
    no: '03',
    title: 'Tele-Health & Smart Emergency',
    desc: 'Telemedicine, Tele-ICU, Tele-EKG, serta konektivitas ambulans dan mobile clinic.',
    slug: 'tele-health-smart-emergency',
  },
  {
    no: '04',
    title: 'SATUSEHAT & BPJS',
    desc: 'Sinkronisasi RME, audit coding, validasi klaim, e-Apotek, dan Mobile JKN.',
    slug: 'satusehat-bpjs',
  },
  {
    no: '05',
    title: 'Cash & Supply Chain',
    desc: 'Visibilitas stok, lot tracking, predictive analytics, KSM Logistik, dan SCF.',
    slug: 'cash-supply-chain',
  },
]
</script>

<template>
  <section class="bg-navy py-14 md:py-20 lg:py-24">
    <div class="container-x">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="max-w-xl">
          <p class="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-mint">
            <span class="size-1.5 rounded-full bg-mint" />
            Lima Solusi Utama
          </p>
          <h2 class="mt-4 text-3xl font-normal leading-tight text-mint md:text-4xl">
            Satu ekosistem, dari layanan klinis hingga arus kas.
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-white">
            Dirancang modular untuk memenuhi kesiapan digital tiap fasilitas
            kesehatan, sekaligus terhubung sebagai satu sumber data terpercaya.
          </p>
        </div>
        <NuxtLink
          to="/solusi"
          class="inline-flex w-fit items-center gap-2 rounded-full border border-brand px-5 py-3 text-xs font-medium text-mint transition hover:bg-brand hover:text-white"
        >
          Lihat semua solusi
          <Icon name="lucide:arrow-up-right" class="size-4" />
        </NuxtLink>
      </div>

      <ul class="mt-10 md:mt-14">
        <li v-for="s in solutions" :key="s.no" class="border-b border-gray-200 first:border-t-0">
          <NuxtLink
            :to="`/solusi/${s.slug}`"
            class="group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-1 py-5 md:grid-cols-[3rem_minmax(0,22rem)_1fr_auto] md:gap-x-6 md:py-6"
          >
            <span class="text-xs font-bold text-white">{{ s.no }}</span>
            <h3 class="text-lg font-medium text-mint md:text-xl">{{ s.title }}</h3>
            <Icon
              name="lucide:arrow-right"
              class="size-4 text-brand transition group-hover:translate-x-1 md:order-last"
            />
            <p class="col-span-3 text-xs leading-relaxed text-white md:col-span-1 md:col-start-3">
              {{ s.desc }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>