<script setup lang="ts">
const audiences = ['RS Umum', 'RS Khusus', 'RS Pendidikan', 'Rujukan Nasional']
</script>

<template>
  <section class="partnership-section partnership-impact">
    <div class="partnership-impact-metric">
      <strong>37</strong>
      <p>potensi RS Vertikal Kementerian Kesehatan</p>
    </div>
    <div class="partnership-impact-copy">
      <p class="partnership-eyebrow">Skala dampak</p>
      <h2>Satu kerangka kolaborasi, dapat direplikasi sesuai karakter tiap rumah sakit.</h2>
      <p>
        Standardisasi fondasi tidak berarti menyeragamkan pelayanan. Arsitektur modular
        SPKD memungkinkan kebutuhan lokal, kelas rumah sakit, kesiapan SDM, dan prioritas
        klinis tetap menjadi pusat implementasi.
      </p>
      <ul class="partnership-tags" aria-label="Jenis rumah sakit">
        <li v-for="audience in audiences" :key="audience">{{ audience }}</li>
      </ul>
    </div>
  </section>
</template>