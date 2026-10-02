<script setup lang="ts">
import hero1 from '~/assets/images/hero-beranda.svg'
import hero2 from '~/assets/images/hero-solusi.svg'
// import hero3 from '~/assets/images/hero-beranda-3.jpg'

const slides = [
  { src: hero1, alt: 'Tenaga kesehatan berdiskusi dengan pasien memakai tablet' },
  { src: hero2, alt: 'Tenaga kesehatan berdiskusi dengan pasien memakai tablet' },
  { src: hero1, alt: 'Tenaga kesehatan berdiskusi dengan pasien memakai tablet' },

  // { src: hero2, alt: 'Deskripsi gambar kedua' },
  // { src: hero3, alt: 'Deskripsi gambar ketiga' },
]

const INTERVAL = 5000 // jeda antar geser (ms)
const DURATION = 600 // lama animasi geser (ms)

// gambar pertama diduplikasi di akhir supaya loop terus meluncur ke kiri
const track = slides.length > 1 ? [...slides, slides[0]!] : slides

const index = ref(0)
const animate = ref(true)
const paused = ref(false)
let timer: ReturnType<typeof setInterval> | undefined

const active = computed(() => index.value % slides.length)

const goTo = (i: number) => {
  animate.value = true
  index.value = i
}

const next = () => goTo(index.value + 1)

// sudah sampai duplikat di akhir: lompat diam-diam ke gambar pertama
const onTransitionEnd = () => {
  if (index.value === slides.length) {
    animate.value = false
    index.value = 0
  }
}

// swipe di HP
let startX = 0
const onTouchStart = (e: TouchEvent) => {
  startX = e.touches[0]!.clientX
  paused.value = true
}
const onTouchEnd = (e: TouchEvent) => {
  const dx = e.changedTouches[0]!.clientX - startX
  if (Math.abs(dx) > 40) {
    if (dx < 0) next()
    else goTo((active.value - 1 + slides.length) % slides.length)
  }
  paused.value = false
}

onMounted(() => {
  if (slides.length < 2) return
  timer = setInterval(() => {
    if (!paused.value) next()
  }, INTERVAL)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

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

      <!-- Carousel: mepet kanan di desktop, tetap ada padding di mobile -->
      <div
        class="relative px-5 sm:px-8 lg:px-0"
        role="region"
        aria-roledescription="carousel"
        aria-label="Galeri SPKD"
        @mouseenter="paused = true"
        @mouseleave="paused = false"
        @focusin="paused = true"
        @focusout="paused = false"
        @touchstart.passive="onTouchStart"
        @touchend="onTouchEnd"
      >
        <div class="overflow-hidden rounded-3xl lg:rounded-r-none">
          <div
            class="flex ease-in-out"
            :style="{
              transform: `translateX(-${index * 100}%)`,
              transitionProperty: 'transform',
              transitionDuration: animate ? `${DURATION}ms` : '0ms',
            }"
            @transitionend="onTransitionEnd"
          >
            <img
              v-for="(slide, i) in track"
              :key="i"
              :src="slide.src"
              :alt="slide.alt"
              :aria-hidden="i === slides.length"
              width="720"
              height="576"
              :fetchpriority="i === 0 ? 'high' : 'auto'"
              class="aspect-[5/4] w-full shrink-0 object-cover"
            />
          </div>
        </div>

        <!-- Titik navigasi: bawah tengah, tampil kalau gambar lebih dari satu -->
        <div
          v-if="slides.length > 1"
          class="absolute inset-x-0 bottom-4 flex justify-center px-5 sm:px-8 lg:px-0"
        >
          <div class="flex items-center gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-sm">
            <button
              v-for="(_, i) in slides"
              :key="i"
              type="button"
              :aria-label="`Ke gambar ${i + 1}`"
              :aria-current="active === i"
              class="h-2 rounded-full transition-all duration-300"
              :class="active === i ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white/90'"
              @click="goTo(i)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>