<script setup lang="ts">
useSeoMeta({
  title: 'Solusi Digital Kesehatan',
  description:
    'Jelajahi ekosistem solusi digital SPKD untuk operasional rumah sakit, rekam medis, tele-health, klaim, dan rantai pasok.',
})

const solutionLinks = [
  { label: 'SIMRS–ERP', id: 'simrs-erp' },
  { label: 'TransIRME', id: 'transirme' },
  { label: 'Smart Emergency', id: 'tele-health' },
  { label: 'TransECA-X', id: 'transeca-x' },
  { label: 'TransLOG-X', id: 'translog-x' },
]

const solutions = [
  {
    number: '01',
    eyebrow: 'SIMRS–ERP & Revenue Cycle',
    id: 'simrs-erp',
    title: 'Kendalikan operasi rumah sakit dan pendapatan secara real-time.',
    description:
      '68 modul klinis dan non-klinis terhubung dengan Executive Information System untuk memberi gambaran menyeluruh dari pelayanan hingga arus pendapatan.',
    features: [
      '68 modul terintegrasi & EIS real-time',
      'INA-CBGs Alert sebelum klaim',
      'Revenue cycle dari admission hingga collection',
      'Analitik BOR, ALOS, TOI, dan cashflow',
    ],
    mockupTitle: 'SPKD SIMRS–ERP',
    metric: 'Rp 12,8 M',
    metricLabel: 'Revenue terpantau bulan ini',
    dark: false,
  },
  {
    number: '02',
    eyebrow: 'Trans RME & PHR',
    id: 'transirme',
    title: 'Rekam medis yang bergerak aman bersama pasien.',
    description:
      'Lapisan interoperabilitas untuk pertukaran data klinis terstandar, Personal Health Record, serta orkestrasi panduan klinis dan critical patient response.',
    features: [
      'HL7 FHIR, SNOMED CT, LOINC & DICOM',
      'KFA, ICD-9-CM, dan ICD-10',
      'Personal Health Record terkontrol pasien',
      'TransCPG-X & TransCPR-X',
    ],
    mockupTitle: 'TRANSIRME',
    metric: '1.284',
    metricLabel: 'Dokumen klinis tersinkron',
    dark: true,
  },
]

const telehealthFeatures = [
  'Telemedicine & Tele-Visit',
  'Tele-EKG & Tele-ICU',
  'IoT Ambulance / Mobile Clinic',
  'Emergency Call Button',
]

const laterSolutions = [
  {
    number: '04',
    eyebrow: 'TransECA-X',
    id: 'transeca-x',
    title: 'Sinkronisasi regulasi dan klaim tanpa kerja berulang.',
    description:
      'TransECA-X membantu fasilitas kesehatan menjaga kualitas RME sekaligus mempercepat proses administrasi JKN dalam satu alur audit yang transparan.',
    features: [
      'Sinkronisasi RME dengan SATUSEHAT',
      'Audit coding dan clinical documentation',
      'Validasi dokumen klaim',
      'Integrasi e-Apotek & Mobile JKN',
    ],
    mockupTitle: 'TRANSECA-X',
    metric: '98,6%',
    metricLabel: 'Kelengkapan dokumen klaim',
    dark: true,
  },
  {
    number: '05',
    eyebrow: 'TransLOG-X',
    id: 'translog-x',
    title: 'Rantai pasok kesehatan yang terlihat, terukur, dan lebih sehat.',
    description:
      'Dari farmasi hingga alat kesehatan, TransLOG-X memberi visibilitas persediaan real-time serta opsi pembiayaan rantai pasok yang berkelanjutan.',
    features: [
      'Stok real-time lintas lokasi',
      'Lot / batch & expiry tracking',
      'Predictive analytics kebutuhan',
      'KSM Logistik & Supply Chain Financing',
    ],
    mockupTitle: 'TRANSLOG-X',
    metric: '14 hari',
    metricLabel: 'Proyeksi kebutuhan stok',
    dark: false,
  },
]

const chartBars = [44, 68, 52, 88, 72, 94, 78, 100, 82]
</script>

<template>
  <div class="w-full bg-[#f7faf9] text-navy">
    <section class="bg-navy text-white">
  <div
    class="container-x grid items-center gap-10 py-12 md:gap-12 md:py-16 lg:min-h-[600px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 lg:py-20"
  >
    <!-- Teks -->
    <div class="flex flex-col items-start gap-5 md:gap-6">
      <p class="text-xs font-bold uppercase tracking-[0.04em] text-white">
        Ekosistem solusi
      </p>

      <h1
        class="max-w-[640px] text-[36px] font-normal leading-[1.1] tracking-[-0.02em] sm:text-[44px] md:text-5xl lg:text-[58px]"
      >
        Ekosistem Digital Kesehatan yang Bekerja sebagai Satu Kesatuan
      </h1>

      <p class="max-w-[610px] text-base leading-[1.75] text-[#ddf5f1] md:text-lg">
        Dari registrasi pasien hingga rekonsiliasi klaim dan logistik, setiap modul SPKD
        mengalirkan data yang aman, dapat ditindaklanjuti, dan sesuai regulasi.
      </p>
    </div>

    <!-- Gambar perangkat -->
    <div class="min-w-0">
      <img
        src="~/assets/images/hero-solusi.svg"
        alt="Dashboard SPKD di laptop, tablet, dan smartwatch"
        width="700"
        height="420"
        class="mx-auto h-auto w-full max-w-[480px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-none"
        loading="eager"
        fetchpriority="high"
      />
    </div>
  </div>
</section>

    <section id="arsitektur" class="scroll-mt-20 bg-white py-14 md:py-20 lg:py-[76px]">
      <div class="container-x flex flex-col gap-8">
        <div class="max-w-[720px]">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand">Arsitektur modular</p>
          <h2 class="mt-4 text-[30px] font-normal leading-[1.12] text-navy md:text-[40px]">
            Pilih titik awal. Tumbuh tanpa memutus alur.
          </h2>
          <p class="mt-4 text-base leading-[1.65] text-ink">
            Lima domain solusi dapat diterapkan bertahap sesuai tingkat kematangan digital fasilitas kesehatan.
          </p>
        </div>
        <nav aria-label="Navigasi solusi" class="flex flex-wrap gap-2.5">
          <a
            v-for="solution in solutionLinks"
            :key="solution.id"
            :href="`#${solution.id}`"
            class="rounded-full border border-[#d9e7e6] bg-[#effaf7] px-3.5 py-2 text-xs font-semibold text-[#08756f] transition hover:border-brand hover:bg-brand hover:text-white"
          >
            {{ solution.label }}
          </a>
        </nav>
      </div>
    </section>

    <section
      v-for="(solution, index) in solutions"
      :id="solution.id"
      :key="solution.id"
      class="scroll-mt-20 px-5 py-14 sm:px-8 md:py-20 lg:px-[72px] lg:py-[88px]"
      :class="index % 2 === 1 ? 'bg-[#effaf7]' : 'bg-[#f7faf9]'"
    >
      <div class="mx-auto flex max-w-[1440px] flex-col items-center gap-10 lg:flex-row lg:gap-[74px]" :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''">
        <div class="flex w-full shrink-0 flex-col items-start gap-6 lg:w-[min(42%,520px)]">
          <div class="flex items-center gap-3">
            <span class="text-[13px] font-bold text-brand">{{ solution.number }}</span>
            <span class="text-xs font-bold uppercase tracking-[0.12em] text-[#08756f]">{{ solution.eyebrow }}</span>
          </div>
          <h2 class="text-[30px] font-normal leading-[1.12] text-navy md:text-[42px]">
            {{ solution.title }}
          </h2>
          <p class="text-base leading-[1.7] text-ink">{{ solution.description }}</p>
          <ul class="flex w-full flex-col gap-3">
            <li v-for="feature in solution.features" :key="feature" class="flex items-center gap-3">
              <Icon name="lucide:circle-check" class="size-[18px] shrink-0 text-brand" />
              <span class="flex-1 text-sm text-navy">{{ feature }}</span>
            </li>
          </ul>
          <NuxtLink
            to="/kontak"
            class="inline-flex h-[50px] items-center justify-center gap-3 rounded-full border border-brand px-5 text-sm font-medium text-[#08756f] transition hover:bg-brand hover:text-white"
          >
            Pelajari kapabilitas
            <Icon name="lucide:arrow-up-right" class="size-[17px]" />
          </NuxtLink>
        </div>

        <div class="w-full min-w-0 flex-1">
          <div
            class="flex h-[300px] w-full flex-col gap-4 rounded-[22px] p-3 shadow-[0px_24px_56px_0px_rgba(6,29,48,0.14)] sm:h-[360px] sm:rounded-[28px] sm:p-4 lg:h-[420px]"
            :class="solution.dark ? 'bg-[#061d30]' : 'bg-white'"
          >
            <div class="flex h-[30px] shrink-0 items-center justify-between px-1">
              <div class="flex gap-1.5" aria-hidden="true">
                <span class="size-2 rounded-full bg-[#738893]" />
                <span class="size-2 rounded-full bg-[#738893]" />
                <span class="size-2 rounded-full bg-[#738893]" />
              </div>
              <p class="text-[9px] font-bold sm:text-[10px]" :class="solution.dark ? 'text-[#ddf5f1]' : 'text-[#738893]'">
                {{ solution.mockupTitle }}
              </p>
            </div>
            <div class="flex min-h-0 flex-1 gap-2.5 sm:gap-3">
              <div class="flex h-full w-10 shrink-0 flex-col items-center gap-3 rounded-lg py-3 sm:w-14" :class="solution.dark ? 'bg-[#11364e]' : 'bg-[#effaf7]'">
                <span class="h-1.5 w-5 rounded sm:w-7" :class="solution.dark ? 'bg-[#315167]' : 'bg-[#d9e7e6]'" />
                <span class="h-1.5 w-7 rounded bg-brand sm:w-9" />
                <span v-for="item in 4" :key="item" class="h-1.5 w-5 rounded sm:w-7" :class="solution.dark ? 'bg-[#315167]' : 'bg-[#d9e7e6]'" />
              </div>
              <div class="flex min-w-0 flex-1 flex-col gap-2.5 sm:gap-3">
                <div class="grid shrink-0 grid-cols-[minmax(0,1fr)_minmax(90px,0.72fr)] gap-2.5 sm:gap-3">
                  <div class="rounded-lg p-2.5 sm:p-3" :class="solution.dark ? 'bg-[#123b54]' : 'bg-[#eaf5f8]'">
                    <p class="text-lg font-bold text-navy sm:text-3xl" :class="solution.dark ? 'text-white' : ''">{{ solution.metric }}</p>
                    <p class="mt-1 text-[8px] sm:text-[10px]" :class="solution.dark ? 'text-[#ddf5f1]' : 'text-ink'">{{ solution.metricLabel }}</p>
                  </div>
                  <div class="rounded-lg p-2.5 sm:p-3" :class="solution.dark ? 'bg-[#123b54]' : 'bg-[#effaf7]'">
                    <p class="text-[9px] sm:text-[10px]" :class="solution.dark ? 'text-[#ddf5f1]' : 'text-ink'">Status integrasi</p>
                    <p class="mt-1 text-sm text-brand sm:text-lg">Aktif</p>
                  </div>
                </div>
                <div class="flex min-h-0 flex-1 flex-col rounded-lg p-3 sm:p-4" :class="solution.dark ? 'bg-[#123b54]' : 'bg-[#f7faf9]'">
                  <div class="flex items-start justify-between gap-2">
                    <p class="text-[10px] sm:text-[11px]" :class="solution.dark ? 'text-white' : 'text-navy'">Ringkasan operasional</p>
                    <p class="text-[9px] sm:text-[10px]" :class="solution.dark ? 'text-[#ddf5f1]' : 'text-[#738893]'">Hari ini</p>
                  </div>
                  <div class="mt-auto flex h-[100px] items-end gap-1.5 pt-3 sm:h-[160px] sm:gap-2">
                    <span
                      v-for="(height, barIndex) in chartBars"
                      :key="height + '-' + barIndex"
                      class="min-w-0 flex-1 rounded-t-[4px]"
                      :class="barIndex === 7 ? 'bg-brand' : solution.dark ? 'bg-[#315167]' : 'bg-[#d9e7e6]'"
                      :style="{ height: `${height}%` }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="tele-health" class="scroll-mt-20 bg-[#f7faf9] px-5 py-14 sm:px-8 md:py-20 lg:px-[72px] lg:py-[88px]">
      <div class="mx-auto flex max-w-[1440px] flex-col gap-10 lg:gap-[46px]">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div class="flex flex-col gap-[18px] lg:max-w-[630px]">
            <div class="flex items-center gap-3">
              <span class="text-[13px] font-bold text-brand">03</span>
              <span class="text-xs font-bold uppercase tracking-[0.12em] text-[#08756f]">Tele-Health & Smart Emergency</span>
            </div>
            <h2 class="text-[30px] font-normal leading-[1.12] text-navy md:text-[42px]">
              Perluas jangkauan klinis. Percepat respons kritis.
            </h2>
          </div>
          <p class="text-base leading-[1.7] text-ink lg:max-w-[420px]">
            Konektivitas klinis jarak jauh dan perangkat lapangan membawa keahlian spesialis ke titik layanan yang paling membutuhkan.
          </p>
        </div>

        <div class="flex flex-col gap-5 md:flex-row">
          <div class="relative min-h-[280px] flex-1 overflow-hidden rounded-[22px] bg-[#d7e8e7] sm:min-h-[360px] sm:rounded-[28px] lg:min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85"
              alt="Tenaga kesehatan melakukan konsultasi klinis"
              class="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
          </div>
          <div class="flex flex-col justify-between gap-8 rounded-[22px] bg-navy p-6 text-white sm:rounded-[28px] sm:p-8 md:w-[340px] md:gap-0 lg:min-h-[500px] lg:w-[420px] lg:p-9">
            <h3 class="text-2xl font-normal leading-[1.25] md:text-[27px]">
              Connected care, dari ruang ICU hingga jalan raya.
            </h3>
            <ul class="flex w-full flex-col">
              <li v-for="feature in telehealthFeatures" :key="feature" class="flex items-center gap-3 border-b border-[#315167] py-3.5 first:pt-0 last:border-0 last:pb-0">
                <Icon name="lucide:check" class="size-[18px] shrink-0 text-[#7ff0d6]" />
                <span class="flex-1 text-sm font-semibold">{{ feature }}</span>
              </li>
            </ul>
            <NuxtLink
              to="/kontak"
              class="inline-flex h-[50px] w-fit items-center justify-center gap-3 rounded-full border border-brand px-5 text-sm font-medium text-white transition hover:bg-brand"
            >
              Pelajari kapabilitas
              <Icon name="lucide:arrow-up-right" class="size-[17px]" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section
      v-for="(solution, index) in laterSolutions"
      :id="solution.id"
      :key="solution.id"
      class="scroll-mt-20 px-5 py-14 sm:px-8 md:py-20 lg:px-[72px] lg:py-[88px]"
      :class="index === 0 ? 'bg-[#effaf7]' : 'bg-[#f7faf9]'"
    >
      <div class="mx-auto flex max-w-[1440px] flex-col items-center gap-10 lg:flex-row lg:gap-[74px]" :class="index === 0 ? 'lg:flex-row-reverse' : ''">
        <div class="flex w-full shrink-0 flex-col items-start gap-6 lg:w-[min(42%,520px)]">
          <div class="flex items-center gap-3">
            <span class="text-[13px] font-bold text-brand">{{ solution.number }}</span>
            <span class="text-xs font-bold uppercase tracking-[0.12em] text-[#08756f]">{{ solution.eyebrow }}</span>
          </div>
          <h2 class="text-[30px] font-normal leading-[1.12] text-navy md:text-[42px]">{{ solution.title }}</h2>
          <p class="text-base leading-[1.7] text-ink">{{ solution.description }}</p>
          <ul class="flex w-full flex-col gap-3">
            <li v-for="feature in solution.features" :key="feature" class="flex items-center gap-3">
              <Icon name="lucide:circle-check" class="size-[18px] shrink-0 text-brand" />
              <span class="flex-1 text-sm text-navy">{{ feature }}</span>
            </li>
          </ul>
          <NuxtLink
            to="/kontak"
            class="inline-flex h-[50px] items-center justify-center gap-3 rounded-full border border-brand px-5 text-sm font-medium text-[#08756f] transition hover:bg-brand hover:text-white"
          >
            Pelajari kapabilitas
            <Icon name="lucide:arrow-up-right" class="size-[17px]" />
          </NuxtLink>
        </div>

        <div class="w-full min-w-0 flex-1">
          <div class="flex h-[300px] w-full flex-col gap-4 rounded-[22px] p-3 shadow-[0px_24px_56px_0px_rgba(6,29,48,0.14)] sm:h-[360px] sm:rounded-[28px] sm:p-4 lg:h-[420px]" :class="solution.dark ? 'bg-[#061d30]' : 'bg-white'">
            <div class="flex h-[30px] shrink-0 items-center justify-between px-1">
              <div class="flex gap-1.5" aria-hidden="true"><span class="size-2 rounded-full bg-[#738893]" /><span class="size-2 rounded-full bg-[#738893]" /><span class="size-2 rounded-full bg-[#738893]" /></div>
              <p class="text-[9px] font-bold sm:text-[10px]" :class="solution.dark ? 'text-[#ddf5f1]' : 'text-[#738893]'">{{ solution.mockupTitle }}</p>
            </div>
            <div class="flex min-h-0 flex-1 gap-2.5 sm:gap-3">
              <div class="flex h-full w-10 shrink-0 flex-col items-center gap-3 rounded-lg py-3 sm:w-14" :class="solution.dark ? 'bg-[#11364e]' : 'bg-[#effaf7]'">
                <span class="h-1.5 w-5 rounded sm:w-7" :class="solution.dark ? 'bg-[#315167]' : 'bg-[#d9e7e6]'" /><span class="h-1.5 w-7 rounded bg-brand sm:w-9" />
                <span v-for="item in 4" :key="item" class="h-1.5 w-5 rounded sm:w-7" :class="solution.dark ? 'bg-[#315167]' : 'bg-[#d9e7e6]'" />
              </div>
              <div class="flex min-w-0 flex-1 flex-col gap-2.5 sm:gap-3">
                <div class="grid shrink-0 grid-cols-[minmax(0,1fr)_minmax(90px,0.72fr)] gap-2.5 sm:gap-3">
                  <div class="rounded-lg p-2.5 sm:p-3" :class="solution.dark ? 'bg-[#123b54]' : 'bg-[#eaf5f8]'">
                    <p class="text-lg font-bold text-navy sm:text-3xl" :class="solution.dark ? 'text-white' : ''">{{ solution.metric }}</p>
                    <p class="mt-1 text-[8px] sm:text-[10px]" :class="solution.dark ? 'text-[#ddf5f1]' : 'text-ink'">{{ solution.metricLabel }}</p>
                  </div>
                  <div class="rounded-lg p-2.5 sm:p-3" :class="solution.dark ? 'bg-[#123b54]' : 'bg-[#effaf7]'">
                    <p class="text-[9px] sm:text-[10px]" :class="solution.dark ? 'text-[#ddf5f1]' : 'text-ink'">Status integrasi</p><p class="mt-1 text-sm text-brand sm:text-lg">Aktif</p>
                  </div>
                </div>
                <div class="flex min-h-0 flex-1 flex-col rounded-lg p-3 sm:p-4" :class="solution.dark ? 'bg-[#123b54]' : 'bg-[#f7faf9]'">
                  <div class="flex items-start justify-between gap-2"><p class="text-[10px] sm:text-[11px]" :class="solution.dark ? 'text-white' : 'text-navy'">Ringkasan operasional</p><p class="text-[9px] sm:text-[10px]" :class="solution.dark ? 'text-[#ddf5f1]' : 'text-[#738893]'">Hari ini</p></div>
                  <div class="mt-auto flex h-[100px] items-end gap-1.5 pt-3 sm:h-[160px] sm:gap-2">
                    <span v-for="(height, barIndex) in chartBars" :key="height + '-' + barIndex" class="min-w-0 flex-1 rounded-t-[4px]" :class="barIndex === 7 ? 'bg-brand' : solution.dark ? 'bg-[#315167]' : 'bg-[#d9e7e6]'" :style="{ height: `${height}%` }" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-brand px-5 py-14 text-white sm:px-8 md:py-[74px] lg:px-[72px]">
      <div class="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <h2 class="max-w-[760px] text-[30px] font-normal leading-[1.18] md:text-[42px]">
          Tentukan fondasi digital yang tepat untuk fase berikutnya.
        </h2>
        <NuxtLink
          to="/kontak"
          class="inline-flex h-[54px] shrink-0 items-center justify-center gap-3 rounded-full border border-white bg-white px-6 text-sm text-navy transition hover:bg-[#ddf5f1]"
        >
          Diskusikan kebutuhan solusi
          <Icon name="lucide:arrow-up-right" class="size-[17px]" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>