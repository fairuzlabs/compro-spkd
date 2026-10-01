<script setup lang="ts">
const stages = [
  {
    number: '01',
    title: 'Assessment Digital TransDCA-X',
    description: 'Pemetaan maturity, proses, data, infrastruktur, risiko, dan prioritas transformasi.',
  },
  {
    number: '02',
    title: 'Implementasi & Migrasi Data',
    description: 'Konfigurasi modular, integrasi, pembersihan, migrasi, validasi, dan go-live bertahap.',
  },
  {
    number: '03',
    title: 'Pelatihan & Pendampingan',
    description: 'Pelatihan berbasis peran, champion unit, SOP, serta pendampingan on-site selama adopsi.',
  },
  {
    number: '04',
    title: 'Dukungan Berkelanjutan',
    description: 'Monitoring kinerja, optimasi berkala, support 24/7, dan pengembangan sesuai regulasi.',
  },
]
</script>

<template>
  <section class="partnership-section partnership-stages">
    <div class="partnership-section-intro">
      <p class="partnership-eyebrow">Alur kerja sama</p>
      <h2>Empat tahap menuju operasi yang stabil.</h2>
      <p>
        Setiap tahap memiliki keluaran, indikator adopsi, dan keputusan go / no-go yang
        transparan.
      </p>
    </div>
    <div class="partnership-stage-grid">
      <article v-for="stage in stages" :key="stage.number" class="partnership-stage">
        <span>{{ stage.number }}</span>
        <h3>{{ stage.title }}</h3>
        <p>{{ stage.description }}</p>
      </article>
    </div>
  </section>
</template>