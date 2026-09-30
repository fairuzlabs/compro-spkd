<script setup lang="ts">
useSeoMeta({
  title: 'Kepatuhan & Standar',
  description:
    'Landasan regulasi, standar interoperabilitas, dan kontrol keamanan data dalam ekosistem digital kesehatan SPKD.',
})

const regulations = [
  {
    year: '2022',
    category: 'Rekam Medis',
    title: 'Permenkes No. 24/2022',
    description:
      'Landasan penyelenggaraan rekam medis elektronik, keamanan, kerahasiaan, dan interoperabilitas data kesehatan.',
  },
  {
    year: '2023',
    category: 'Kesehatan',
    title: 'UU No. 17/2023',
    description:
      'Kerangka hukum kesehatan nasional dan transformasi sistem kesehatan berbasis data.',
  },
  {
    year: '2023',
    category: 'Kinerja RS Vertikal',
    title: 'Kepdirjen Yankes HK.02.02/D/768/2023',
    description:
      'Indikator kinerja yang menuntut visibilitas klinis, operasional, mutu, dan keuangan.',
  },
  {
    year: '2026',
    category: 'Tata Kelola Digital',
    title: 'Permenkes No. 6/2026',
    description:
      'Penguatan penyelenggaraan sistem elektronik kesehatan dan standardisasi pertukaran data.',
  },
  {
    year: 'Aktif',
    category: 'Ekosistem Klaim',
    title: 'SEB JKN',
    description:
      'Sinkronisasi kebutuhan layanan JKN, kelengkapan dokumen, dan integrasi kanal BPJS Kesehatan.',
  },
]

const standards = [
  ['HL7 FHIR', 'Pertukaran sumber daya data kesehatan'],
  ['SNOMED CT', 'Terminologi klinis terstruktur'],
  ['ICD-9-CM', 'Klasifikasi tindakan medis'],
  ['ICD-10', 'Klasifikasi diagnosis'],
  ['LOINC', 'Identifikasi observasi laboratorium'],
  ['DICOM', 'Pertukaran citra medis'],
  ['KFA', 'Kamus Farmasi dan Alat Kesehatan'],
]

const governanceControls = [
  'Kontrol akses berbasis peran',
  'Audit trail & monitoring',
  'Enkripsi & kontinuitas layanan',
]
</script>

<template>
  <div class="compliance-page w-full overflow-hidden bg-[#f7faf9] text-navy">
      <section id="hero" class="bg-white">
        <div class="container-x compliance-hero-grid grid items-center">
          <div class="max-w-[690px]">
            <p class="text-xs font-bold uppercase tracking-[0.16em] text-brand">Trust by design</p>
            <h1 class="compliance-hero-title mt-5 font-normal leading-[1.05] text-navy lg:mt-[22px]">
              Jaminan Keamanan Data &amp; Kepatuhan Regulasi Kesehatan
            </h1>
            <p class="mt-5 max-w-[650px] text-base leading-[1.7] text-ink md:text-lg">
              Kepatuhan bukan dokumen di akhir proyek. Ia menjadi cara kami merancang arsitektur,
              alur kerja, kontrol akses, dan bukti audit sejak hari pertama.
            </p>
          </div>

          <div
            class="compliance-security-visual relative grid min-h-[290px] place-items-center overflow-hidden rounded-[40px] bg-navy max-[760px]:min-h-0"
            role="img"
            aria-label="Ilustrasi keamanan data"
          >
            <div class="absolute size-[min(78vw,340px)] rounded-full border border-[#7ff0d6]/25" />
            <div class="absolute size-[min(53vw,230px)] rounded-full border border-[#7ff0d6]/40" />
            <div class="absolute size-[min(34vw,145px)] rounded-full border border-[#7ff0d6]/20" />
            <div class="compliance-security-core relative grid size-[126px] place-items-center rounded-full bg-brand shadow-[0_0_70px_rgba(127,240,214,0.18)]">
              <Icon name="lucide:shield-check" class="size-12 text-white" />
            </div>
            <p class="absolute bottom-8 m-0 text-[10px] font-bold uppercase tracking-[0.14em] text-mint sm:bottom-12 sm:text-xs">
              Secure · Traceable · Compliant
            </p>
            <span class="absolute left-[18%] top-[26%] size-2 rounded-full bg-mint" />
            <span class="absolute right-[19%] top-[38%] size-1.5 rounded-full bg-brand" />
            <span class="absolute bottom-[27%] left-[24%] size-1.5 rounded-full bg-white/80" />
          </div>
        </div>
      </section>

      <section id="evidence" class="compliance-evidence scroll-mt-20 bg-white">
        <div class="container-wide compliance-evidence-grid grid items-start">
          <div class="max-w-[720px]">
            <p class="text-xs font-bold uppercase tracking-[0.16em] text-brand">Landasan regulasi</p>
            <h2 class="compliance-section-heading mt-4 font-normal leading-[1.12] text-navy">
              Bukti yang tenang, jelas, dan dapat ditelusuri.
            </h2>
            <p class="mt-4 text-base leading-[1.65] text-ink">
              Setiap perubahan regulasi diterjemahkan menjadi requirement sistem, kontrol proses,
              dan dokumentasi implementasi.
            </p>
          </div>

          <div>
            <article
              v-for="item in regulations"
              :key="item.title"
              class="grid grid-cols-[54px_minmax(0,1fr)_20px] items-start gap-3 border-b border-[#d9e7e6] py-5 first:pt-7 sm:grid-cols-[70px_minmax(0,1fr)_22px] sm:gap-6 sm:py-6 sm:first:pt-0"
            >
              <p class="m-0 pt-0.5 text-sm font-bold text-brand sm:text-base">{{ item.year }}</p>
              <div class="grid min-w-0 gap-2">
                <p class="m-0 text-[10px] font-bold uppercase tracking-[0.12em] text-muted sm:text-[11px]">
                  {{ item.category }}
                </p>
                <h3 class="compliance-display-font m-0 break-words text-lg font-normal leading-snug text-navy sm:text-[23px]">
                  {{ item.title }}
                </h3>
                <p class="m-0 text-[13px] leading-[1.6] text-ink sm:text-sm">{{ item.description }}</p>
              </div>
              <Icon name="lucide:arrow-up-right" class="mt-0.5 size-5 text-brand" aria-hidden="true" />
            </article>
          </div>
        </div>
      </section>

      <section id="standards" class="compliance-standards scroll-mt-20 bg-navy text-white">
        <div class="container-x">
          <div class="max-w-[720px]">
            <p class="text-xs font-bold uppercase tracking-[0.16em] text-mint">Standar interoperabilitas</p>
            <h2 class="compliance-section-heading mt-4 font-normal leading-[1.12] text-white">
              Bahasa bersama untuk data kesehatan.
            </h2>
            <p class="mt-4 text-base leading-[1.65] text-mint">
              Standar terbuka dan terminologi baku menjaga data tetap bermakna ketika berpindah
              antarsistem dan institusi.
            </p>
          </div>

          <div class="mt-10 md:mt-12">
            <article
              v-for="(standard, index) in standards"
              :key="standard[0]"
              class="grid grid-cols-[32px_minmax(0,1fr)] items-center gap-x-4 gap-y-2 border-b border-[#315167] py-5 sm:grid-cols-[44px_260px_minmax(0,1fr)] sm:gap-x-[22px]"
            >
              <p class="m-0 text-[11px] font-bold text-brand">{{ String(index + 1).padStart(2, '0') }}</p>
                <h3 class="compliance-display-font m-0 text-xl font-normal text-white sm:text-[25px]">{{ standard[0] }}</h3>
              <p class="col-start-2 m-0 text-[13px] leading-relaxed text-mint sm:col-start-auto sm:text-sm">
                {{ standard[1] }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="assurance" class="compliance-assurance scroll-mt-20 bg-[#effaf7]">
        <div class="container-x compliance-assurance-grid grid items-start">
          <img
            class="h-[min(78vw,460px)] w-full rounded-[28px] object-cover lg:h-[460px] lg:rounded-[40px]"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
            alt="Tim bekerja bersama di depan layar komputer"
            loading="lazy"
          />

          <div class="grid min-w-0 gap-7">
            <div class="max-w-[600px]">
              <p class="text-xs font-bold uppercase tracking-[0.16em] text-brand">Assurance &amp; governance</p>
              <h2 class="compliance-section-heading mt-4 font-normal leading-[1.12] text-navy">
                Keamanan yang dapat dipertanggungjawabkan.
              </h2>
              <p class="mt-4 text-base leading-[1.65] text-ink">
                Kontrol teknis berjalan berdampingan dengan tata kelola organisasi, dokumentasi,
                dan kesiapan audit.
              </p>
            </div>

            <ul aria-label="Institusi terkait" class="flex flex-wrap gap-2.5">
              <li class="rounded-full border border-[#d9e7e6] bg-white px-3.5 py-2 text-xs font-semibold text-[#08756f]">
                Terdaftar Kominfo
              </li>
              <li class="rounded-full border border-[#d9e7e6] bg-white px-3.5 py-2 text-xs font-semibold text-[#08756f]">
                Administrasi Kemenkumham
              </li>
              <li class="rounded-full border border-[#d9e7e6] bg-white px-3.5 py-2 text-xs font-semibold text-[#08756f]">
                Koordinasi BSSN
              </li>
            </ul>

            <div class="compliance-controls grid">
              <article
                v-for="(control, index) in governanceControls"
                :key="control"
                class="min-h-[116px] rounded-[10px] bg-white p-4 sm:p-[18px]"
              >
                <p class="m-0 mb-2.5 text-[13px] font-bold text-brand">
                  {{ String(index + 1).padStart(2, '0') }}
                </p>
                <h3 class="m-0 text-[13px] font-semibold leading-[1.4] text-navy">{{ control }}</h3>
              </article>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>