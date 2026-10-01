<template>
  <section class="overflow-hidden bg-gradient-to-br from-[#e9f5f4] via-[#f3f9f9] to-white">
    <div class="grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-0 lg:py-[72px]">
      <div
        class="px-5 sm:px-8 lg:pl-[72px] lg:pr-12"
      >
        <p class="text-[11px] font-bold uppercase tracking-wider text-brand">
          Ekosistem Digital Kesehatan Indonesia
        </p>
        <h1
          class="mt-4 text-4xl font-normal leading-[1.1] tracking-tight text-navy md:text-5xl lg:text-[64px]"
        >
          Transforming Healthcare Through Smart Data &amp; Modern Technology
        </h1>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-ink md:text-lg">
          Solusi ekosistem digital terintegrasi untuk mempercepat transformasi
          layanan, efisiensi operasional, dan kepatuhan regulasi di fasilitas
          kesehatan Anda.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <NuxtLink
            to="/kontak"
            class="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand/90"
          >
            Diskusikan Kebutuhan Faskes Anda
            <Icon name="lucide:arrow-up-right" class="size-4" />
          </NuxtLink>
          <NuxtLink
            to="/solusi"
            class="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-brand"
          >
            Jelajahi solusi
            <Icon name="lucide:arrow-right" class="size-4" />
          </NuxtLink>
        </div>
      </div>

      <!-- Gambar: mepet kanan di desktop, tetap ada padding di mobile -->
      <div class="relative px-5 sm:px-8 lg:px-0">
        <img
          src="~/assets/images/hero-beranda.svg"
          alt="Tenaga kesehatan berdiskusi dengan pasien memakai tablet"
          width="720"
          height="576"
          fetchpriority="high"
          class="aspect-[5/4] w-full rounded-3xl object-cover lg:rounded-r-none"
        />
      </div>
    </div>
  </section>
</template>