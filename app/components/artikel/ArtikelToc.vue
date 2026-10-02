<script setup lang="ts">
defineProps<{ items: { id: string; label: string }[] }>()
</script>

<template>
  <nav aria-label="Dalam artikel ini" class="rounded-xl bg-[#eef5f5] p-4">
    <p class="text-[11px] font-semibold text-navy">Dalam artikel ini</p>
    <ul class="mt-3 space-y-2.5">
      <li v-for="item in items" :key="item.id">
        <a :href="`#${item.id}`" class="text-xs text-ink transition hover:text-brand">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>