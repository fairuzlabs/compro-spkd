<script setup lang="ts">
const items = [
  { no: '01', title: 'Integrated', desc: 'Satu alur data lintas layanan' },
  { no: '02', title: 'Secure', desc: 'Privasi dan keamanan sejak desain' },
  { no: '03', title: 'Innovative', desc: 'Teknologi yang berdampak nyata' },
]
</script>

<template>
  <section class="border-y border-gray-200 bg-white">
    <ul class="container-x grid gap-6 py-8 sm:grid-cols-3">
      <li v-for="item in items" :key="item.no" class="flex items-start gap-3">
        <span class="mt-1.5 text-xs font-bold text-brand">{{ item.no }}</span>
        <div>
          <p class="text-lg text-navy">{{ item.title }}</p>
          <p class="text-xs text-muted">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>