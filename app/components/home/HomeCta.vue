<script setup lang="ts">
const perks = [
  'Tersedia pendampingan on-site',
  'Integrasi uji coba sandbox-ready',
  'Layanan teknis 24/7 SLA terjamin',
]
</script>

<template>
  <section class="bg-[#eaecfb] py-12 md:py-16">
    <div class="container-wide">
      <div
        class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep via-[#08476b] to-[#0a5c72] px-6 py-12 text-center text-white md:px-12 md:py-16"
      >
        <img
          src="/images/beranda-blur.svg"
          alt=""
          aria-hidden="true"
          width="414"
          height="414"
          class="pointer-events-none absolute right-0 top-0 w-[260px] select-none md:w-[414px]"
        />

        <div class="relative">
          <h2 class="text-3xl font-bold md:text-4xl">Siap Bertransformasi Digital?</h2>
          <p class="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#b9c7f2] md:text-base">
            Diskusikan kebutuhan digitalisasi fasilitas kesehatan Anda bersama tim
            konsultan arsitektur data medis kami. Dapatkan asesmen kesiapan sistem
            dan demo langsung gratis.
          </p>
          <NuxtLink
            to="/kontak"
            class="mt-8 inline-flex items-center gap-2 rounded-lg bg-mint px-6 py-3.5 text-sm font-bold text-deep shadow-lg shadow-mint/20 transition hover:brightness-95"
          >
            <Icon name="lucide:rocket" class="size-4" />
            Diskusikan Kebutuhan Faskes Anda Sekarang
          </NuxtLink>

          <ul class="mt-10 flex flex-col items-center justify-center gap-3 text-xs font-semibold text-[#b9c7f2] sm:flex-row sm:flex-wrap sm:gap-x-8">
            <li v-for="perk in perks" :key="perk" class="inline-flex items-center gap-2">
              <Icon name="lucide:circle-check" class="size-4 text-mint" />
              {{ perk }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>