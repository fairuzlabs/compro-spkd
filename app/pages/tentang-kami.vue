<template>
  <div class="min-h-screen w-full bg-[#f7faf9] text-navy" style="font-family: 'Inter', sans-serif;">
    <section class="w-full px-5 pb-10 pt-12 sm:px-8 md:pt-16 lg:px-18 lg:pb-12 lg:pt-20.5">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="flex flex-col gap-5 lg:max-w-212.5">
          <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#08756f] md:text-[12px]">
            Tentang PT SPKD
          </p>
          <h1
            class="text-[38px] font-normal leading-[1.05] text-navy sm:text-[48px] lg:text-[64px]"
            style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
          >
            Mitra Strategis Transformasi Digital Kesehatan Indonesia
          </h1>
        </div>

        <p class="text-[15px] leading-[1.7] text-[#425c69] lg:max-w-85 md:text-[16px]">
          Kami menghubungkan teknologi, pembiayaan, dan pendampingan agar fasilitas kesehatan dapat berubah
          secara menyeluruh, bukan sekadar mengganti sistem.
        </p>
      </div>

      <div class="mt-8 flex w-full flex-col gap-4 sm:flex-row md:gap-5">
        <div class="relative min-h-65 flex-1 overflow-hidden rounded-3xl bg-[#c5d8d5] sm:min-h-95 lg:min-h-135 sm:rounded-4xl lg:rounded-[40px]">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
            alt="Tim perawatan kesehatan"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div class="flex min-h-55 flex-col justify-between rounded-3xl bg-navy p-6 text-white sm:min-h-95 sm:w-70 sm:rounded-4xl sm:p-7 lg:min-h-135 lg:w-95 lg:rounded-[40px] lg:p-9">
          <p
            class="text-[56px] font-medium leading-none text-brand lg:text-[68px]"
            style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
          >
            "
          </p>
          <p
            class="text-[22px] font-normal leading-[1.32] text-white sm:text-[24px] lg:text-[29px]"
            style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
          >
            Mewujudkan ekosistem kesehatan digital yang terintegrasi, aman, dan berkelanjutan.
          </p>
          <p class="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#ddf5f1] lg:text-[13px]">
            Misi PT SPKD
          </p>
        </div>
      </div>
    </section>

    <section class="w-full bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-18 lg:py-24">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-21.5">
        <div class="flex flex-col gap-4 lg:w-75 lg:shrink-0">
          <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#08756f] md:text-[12px]">
            Profil perusahaan
          </p>
          <p
            class="text-[24px] font-normal leading-tight text-navy md:text-[28px]"
            style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
          >
            PT Sistem Pelayanan Kesehatan dan Data
          </p>
        </div>

        <div class="flex flex-1 flex-col gap-5">
          <p
            class="text-[24px] font-normal leading-[1.28] text-navy sm:text-[28px] lg:text-[34px]"
            style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
          >
            SPKD hadir untuk menjembatani kompleksitas transformasi digital dengan realitas operasional rumah
            sakit di Indonesia.
          </p>

          <div class="flex flex-col gap-6 text-[15px] leading-[1.75] text-[#425c69] sm:flex-row sm:gap-8">
            <p class="flex-1">
              Kami membangun ekosistem solusi yang mencakup SIMRS–ERP, interoperabilitas rekam medis,
              tele-health, integrasi klaim, dan rantai pasok. Seluruhnya dirancang agar data dapat mengalir
              secara aman dan berguna.
            </p>
            <p class="flex-1">
              Pendekatan kami menggabungkan assessment, implementasi, migrasi data, pelatihan, serta dukungan
              berkelanjutan. Tim SPKD bekerja berdampingan dengan tenaga kesehatan dan manajemen rumah sakit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full bg-[#f7faf9] px-5 py-14 sm:px-8 md:py-20 lg:px-18 lg:py-24">
      <div class="flex max-w-180 flex-col gap-4">
        <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#08756f] md:text-[12px]">
          Prinsip kerja
        </p>
        <p
          class="text-[28px] font-normal leading-[1.12] text-navy sm:text-[34px] lg:text-[40px]"
          style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
        >
          Empat prinsip yang menjaga kami tetap dekat dengan kebutuhan layanan.
        </p>
      </div>

      <div class="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
        <div
          v-for="principle in principles"
          :key="principle.num"
          class="flex min-h-50 flex-col gap-5 rounded-[18px] border border-[#d9e7e6] bg-white p-6 shadow-[0px_16px_40px_0px_rgba(10,41,66,0.08)] md:min-h-60 md:p-7.5"
        >
          <p
            class="text-[14px] font-bold text-brand"
            style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
          >
            {{ principle.num }}
          </p>
          <p
            class="text-[22px] font-normal text-navy md:text-[28px]"
            style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
          >
            {{ principle.title }}
          </p>
          <p class="text-[14px] leading-[1.65] text-[#425c69] md:text-[15px]">
            {{ principle.desc }}
          </p>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-linear-to-b from-navy to-[#00355f] px-5 py-14 sm:px-8 md:py-20 lg:px-18 lg:py-24">
      <div class="pointer-events-none absolute -left-25 -top-12.75 h-90 w-90 rounded-full bg-[rgba(15,74,121,0.35)] blur-[36px]" />
      <div class="pointer-events-none absolute -right-25 top-24 h-90 w-90 rounded-full bg-[rgba(15,74,121,0.35)] blur-[36px]" />

      <div class="relative flex flex-col items-center gap-12 lg:flex-row lg:gap-18">
        <div class="flex flex-col gap-6 lg:w-117.5 lg:shrink-0">
          <div class="flex flex-col gap-4">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ddf5f1] md:text-[12px]">
              Ekosistem kesehatan
            </p>
            <p
              class="text-[28px] font-normal leading-[1.12] text-white sm:text-[34px] lg:text-[40px]"
              style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
            >
              Satu data, banyak peran, satu tujuan pelayanan.
            </p>
            <p class="text-[15px] leading-[1.65] text-[#ddf5f1] md:text-[16px]">
              SPKD menyatukan pasien, tenaga kesehatan, fasilitas, pembayar, regulator, dan mitra pembiayaan
              dalam alur data yang terjaga.
            </p>
          </div>

          <div class="flex gap-8 md:gap-7.5">
            <div v-for="metric in ecosystemMetrics" :key="metric.label" class="flex flex-col gap-2">
              <p
                class="text-[44px] font-normal leading-none text-white sm:text-[52px] lg:text-[56px]"
                style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
              >
                {{ metric.num }}
              </p>
              <p class="text-[13px] leading-[1.45] text-[#ddf5f1] md:text-[14px]">
                {{ metric.label }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-1 items-center justify-center">
          <div class="relative h-80 w-[320px] sm:h-95 sm:w-95 lg:h-115 lg:w-115">
            <div class="absolute inset-0 rounded-full border border-[#5fb3b4]/50" />
            <div class="absolute inset-[12%] rounded-full border border-[#5fb3b4]/40" />
            <div class="absolute inset-[30%] rounded-full border border-[#5fb3b4]/30" />
            <div class="absolute left-[34%] top-[34%] flex h-[32%] w-[32%] items-center justify-center rounded-[70px] bg-brand">
              <p
                class="text-[18px] font-bold text-white sm:text-[22px] lg:text-[26px]"
                style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
              >
                SPKD
              </p>
            </div>

            <div
              v-for="node in ecosystemNodes"
              :key="node.label"
              class="absolute rounded-full bg-white px-3 py-2 text-[11px] whitespace-nowrap text-navy shadow-sm sm:text-[13px]"
              :style="node.style"
            >
              {{ node.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="flex w-full flex-col items-start justify-between gap-6 bg-[#f3feff] px-5 py-12 sm:flex-row sm:items-center sm:px-8 md:py-16 lg:px-18">
      <p
        class="max-w-190 text-[26px] font-normal leading-[1.18] text-navy sm:text-[32px] lg:text-[42px]"
        style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
      >
        Mari mulai dengan memahami kebutuhan fasilitas kesehatan Anda.
      </p>

      <button class="flex shrink-0 items-center gap-3 rounded-full border border-brand bg-brand px-5 py-3 text-white transition-colors hover:bg-[#0b8a81] md:px-6 md:py-3.5">
        <span class="text-[15px] md:text-[18px] lg:text-[20px]">Diskusikan Kebutuhan Anda</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 17L17 7M8 7H17V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </section>

    <footer class="w-full bg-navy px-5 pb-8 pt-12 sm:px-8 md:pt-16 lg:px-18 lg:pt-18">
      <div class="flex flex-col justify-between gap-10 pb-12 md:pb-13.5 lg:flex-row">
        <div class="flex flex-col gap-5 lg:w-105">
          <div class="flex items-center gap-3">
            <div class="relative h-9.5 w-10.75 shrink-0 md:h-11.25 md:w-12.75">
              <img src="~/assets/images/logo-spkd.svg" alt="SPKD logo" class="absolute inset-0 h-full w-full object-contain" />
            </div>
            <div class="flex flex-col leading-normal text-white">
              <p
                class="text-[20px] font-black md:text-[24px]"
                style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
              >
                PT SPKD
              </p>
              <p class="text-[8px] font-semibold uppercase tracking-[0.15em] md:text-[9px]">
                Sistem Pelayanan Kesehatan &amp; Data
              </p>
            </div>
          </div>

          <p class="text-[14px] leading-[1.65] text-[#ddf5f1] md:text-[15px]">
            Mitra teknologi kesehatan Indonesia untuk layanan yang terintegrasi, aman, efisien, dan berorientasi
            pada pengalaman manusia.
          </p>

          <p class="text-[13px] leading-[1.7] text-white md:text-[14px]">
            halo@spkd.co.id &nbsp;·&nbsp; +62 21 5088 2026
          </p>
        </div>

        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-17">
          <div v-for="column in footerColumns" :key="column.heading" class="flex flex-col gap-3">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-brand md:text-[12px]">
              {{ column.heading }}
            </p>
            <p v-for="link in column.links" :key="link" class="cursor-pointer text-[13px] text-white transition-colors hover:text-[#ddf5f1] md:text-[14px]">
              {{ link }}
            </p>
          </div>
        </div>
      </div>

      <div class="mb-6 h-px w-full bg-[#315167]" />
      <div class="flex flex-col justify-between gap-3 text-[11px] text-[#738893] sm:flex-row md:text-[12px]">
        <p>© 2026 PT Sistem Pelayanan Kesehatan dan Data. Seluruh hak dilindungi.</p>
        <p>Privasi &nbsp;·&nbsp; Ketentuan &nbsp;·&nbsp; Keamanan Informasi</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const principles = [
  { num: '01', title: 'Inovatif', desc: 'Memecahkan kebutuhan layanan dengan teknologi yang relevan, terukur, dan mudah diadopsi.' },
  { num: '02', title: 'Aman & Terpercaya', desc: 'Menempatkan privasi, keamanan data, dan kepatuhan sebagai fondasi setiap keputusan.' },
  { num: '03', title: 'Terintegrasi', desc: 'Menyatukan alur klinis, operasional, keuangan, dan ekosistem kesehatan nasional.' },
  { num: '04', title: 'Berorientasi Pelayanan', desc: 'Merancang dari pengalaman pasien, tenaga kesehatan, dan pengelola fasilitas kesehatan.' },
]

const ecosystemMetrics = [
  { num: '68', label: 'modul operasional' },
  { num: '37', label: 'Client' },
]

const ecosystemNodes = [
  { label: 'Pasien', style: { top: '12%', left: '-2%' } },
  { label: 'Faskes', style: { top: '8%', right: '5%' } },
  { label: 'Kemenkes', style: { top: '44%', right: '-6%' } },
  { label: 'BPJS', style: { bottom: '12%', right: '10%' } },
  { label: 'Mitra', style: { bottom: '16%', left: '0%' } },
]

const footerColumns = [
  { heading: 'Perusahaan', links: ['Tentang Kami', 'Kerja Sama', 'Berita'] },
  { heading: 'Solusi', links: ['SIMRS & RCM', 'Interoperabilitas RME', 'Tele-Health', 'Supply Chain'] },
  { heading: 'Kepercayaan', links: ['Kepatuhan & Standar', 'Keamanan Data', 'Kontak'] },
]
</script>
