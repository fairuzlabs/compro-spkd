<script setup lang="ts">
const metrics = [
  { value: 'No', label: 'CapEx, tanpa investasi awal' },
  { value: 'No', label: 'OpEx, tanpa beban operasional' },
  { value: '5 th', label: 'Kontrak kerja sama' },
  { value: '100%', label: 'Aset menjadi milik rumah sakit' },
]
</script>

<template>
  <section id="model" class="partnership-section partnership-model">
    <div class="partnership-summary">
      <div class="partnership-section-intro">
        <p class="partnership-eyebrow">Model berkelanjutan</p>
        <h2>Kapasitas digital sekarang, nilai aset untuk rumah sakit di masa depan.</h2>
        <p>
          Kolaborasi SPKD bersama Bank BTN memungkinkan percepatan implementasi tanpa
          investasi awal dan tanpa biaya operasional tambahan.
        </p>
      </div>
      <div class="partnership-bank-badge">
        <small>Mitra pembiayaan</small>
        <strong>Bank BTN</strong>
      </div>
    </div>
    <div class="partnership-metrics">
      <article v-for="metric in metrics" :key="metric.label" class="partnership-metric">
        <strong>{{ metric.value }}</strong>
        <p>{{ metric.label }}</p>
      </article>
    </div>
  </section>
</template>