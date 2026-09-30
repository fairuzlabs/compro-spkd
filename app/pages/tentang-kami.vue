<template>
  <div class="min-h-screen w-full bg-[#f7faf9] text-[#0a2942]" style="font-family: 'Inter', sans-serif;">
    <section class="w-full px-5 pb-10 pt-12 sm:px-8 md:pt-16 lg:px-[72px] lg:pb-12 lg:pt-[82px]">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="flex flex-col gap-5 lg:max-w-[850px]">
          <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#08756f] md:text-[12px]">
            Tentang PT SPKD
          </p>
          <h1
            class="text-[38px] font-normal leading-[1.05] text-[#0a2942] sm:text-[48px] lg:text-[64px]"
            style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
          >
            Mitra Strategis Transformasi Digital Kesehatan Indonesia
          </h1>
        </div>

        <p class="text-[15px] leading-[1.7] text-[#425c69] lg:max-w-[340px] md:text-[16px]">
          Kami menghubungkan teknologi, pembiayaan, dan pendampingan agar fasilitas kesehatan dapat berubah
          secara menyeluruh, bukan sekadar mengganti sistem.
        </p>
      </div>

      <div class="mt-8 flex w-full flex-col gap-4 sm:flex-row md:gap-5">
        <div class="relative min-h-[260px] flex-1 overflow-hidden rounded-[24px] bg-[#c5d8d5] sm:min-h-[380px] lg:min-h-[540px] sm:rounded-[32px] lg:rounded-[40px]">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
            alt="Tim perawatan kesehatan"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div class="flex min-h-[220px] flex-col justify-between rounded-[24px] bg-[#0a2942] p-6 text-white sm:min-h-[380px] sm:w-[280px] sm:rounded-[32px] sm:p-7 lg:min-h-[540px] lg:w-[380px] lg:rounded-[40px] lg:p-9">
          <p
            class="text-[56px] font-medium leading-none text-[#0d9b91] lg:text-[68px]"
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

    <section class="w-full bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-[72px] lg:py-24">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[86px]">
        <div class="flex flex-col gap-4 lg:w-[300px] lg:shrink-0">
          <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#08756f] md:text-[12px]">
            Profil perusahaan
          </p>
          <p
            class="text-[24px] font-normal leading-[1.25] text-[#0a2942] md:text-[28px]"
            style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
          >
            PT Sistem Pelayanan Kesehatan dan Data
          </p>
        </div>

        <div class="flex flex-1 flex-col gap-5">
          <p
            class="text-[24px] font-normal leading-[1.28] text-[#0a2942] sm:text-[28px] lg:text-[34px]"
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

    <section class="w-full bg-[#f7faf9] px-5 py-14 sm:px-8 md:py-20 lg:px-[72px] lg:py-24">
      <div class="flex max-w-[720px] flex-col gap-4">
        <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#08756f] md:text-[12px]">
          Prinsip kerja
        </p>
        <p
          class="text-[28px] font-normal leading-[1.12] text-[#0a2942] sm:text-[34px] lg:text-[40px]"
          style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
        >
          Empat prinsip yang menjaga kami tetap dekat dengan kebutuhan layanan.
        </p>
      </div>

      <div class="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
        <div
          v-for="principle in principles"
          :key="principle.num"
          class="flex min-h-[200px] flex-col gap-5 rounded-[18px] border border-[#d9e7e6] bg-white p-6 shadow-[0px_16px_40px_0px_rgba(10,41,66,0.08)] md:min-h-[240px] md:p-[30px]"
        >
          <p
            class="text-[14px] font-bold text-[#0d9b91]"
            style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
          >
            {{ principle.num }}
          </p>
          <p
            class="text-[22px] font-normal text-[#0a2942] md:text-[28px]"
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

    <section class="relative overflow-hidden bg-gradient-to-b from-[#0a2942] to-[#00355f] px-5 py-14 sm:px-8 md:py-20 lg:px-[72px] lg:py-24">
      <div class="pointer-events-none absolute -left-[100px] -top-[51px] h-[360px] w-[360px] rounded-full bg-[rgba(15,74,121,0.35)] blur-[36px]" />
      <div class="pointer-events-none absolute right-[-100px] top-[96px] h-[360px] w-[360px] rounded-full bg-[rgba(15,74,121,0.35)] blur-[36px]" />

      <div class="relative flex flex-col items-center gap-12 lg:flex-row lg:gap-[72px]">
        <div class="flex flex-col gap-6 lg:w-[470px] lg:shrink-0">
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

          <div class="flex gap-8 md:gap-[30px]">
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
          <div class="relative h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] lg:h-[460px] lg:w-[460px]">
            <div class="absolute inset-0 rounded-full border border-[#5fb3b4]/50" />
            <div class="absolute inset-[12%] rounded-full border border-[#5fb3b4]/40" />
            <div class="absolute inset-[30%] rounded-full border border-[#5fb3b4]/30" />
            <div class="absolute left-[34%] top-[34%] flex h-[32%] w-[32%] items-center justify-center rounded-[70px] bg-[#0d9b91]">
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
              class="absolute rounded-full bg-white px-3 py-2 text-[11px] whitespace-nowrap text-[#0a2942] shadow-sm sm:text-[13px]"
              :style="node.style"
            >
              {{ node.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="flex w-full flex-col items-start justify-between gap-6 bg-[#f3feff] px-5 py-12 sm:flex-row sm:items-center sm:px-8 md:py-16 lg:px-[72px]">
      <p
        class="max-w-[760px] text-[26px] font-normal leading-[1.18] text-[#0a2942] sm:text-[32px] lg:text-[42px]"
        style="font-family: 'DM Sans', sans-serif; font-variation-settings: 'opsz' 14;"
      >
        Mari mulai dengan memahami kebutuhan fasilitas kesehatan Anda.
      </p>

      <button class="flex shrink-0 items-center gap-3 rounded-full border border-[#0d9b91] bg-[#0d9b91] px-5 py-3 text-white transition-colors hover:bg-[#0b8a81] md:px-6 md:py-[14px]">
        <span class="text-[15px] md:text-[18px] lg:text-[20px]">Diskusikan Kebutuhan Anda</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 17L17 7M8 7H17V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </section>

    <footer class="w-full bg-[#0a2942] px-5 pb-8 pt-12 sm:px-8 md:pt-16 lg:px-[72px] lg:pt-[72px]">
      <div class="flex flex-col justify-between gap-10 pb-12 md:pb-[54px] lg:flex-row">
        <div class="flex flex-col gap-5 lg:w-[420px]">
          <div class="flex items-center gap-3">
            <div class="relative h-[38px] w-[43px] shrink-0 md:h-[45px] md:w-[51px]">
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

        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-[68px]">
          <div v-for="column in footerColumns" :key="column.heading" class="flex flex-col gap-3">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d9b91] md:text-[12px]">
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
