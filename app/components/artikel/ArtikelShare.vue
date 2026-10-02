<script setup lang="ts">
const props = defineProps<{ title: string; vertical?: boolean }>()

const url = useRequestURL().href
const copied = ref(false)

const copy = async () => {
  try {
    await navigator.clipboard.writeText(url)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    /* clipboard diblokir browser, abaikan */
  }
}

const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
const mail = `mailto:?subject=${encodeURIComponent(props.title)}&body=${encodeURIComponent(url)}`

const btn =
  'flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-navy transition hover:border-brand hover:text-brand'
</script>

<template>
  <div>
    <p class="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted">Bagikan</p>
    <div class="flex gap-3" :class="vertical ? 'flex-col' : 'flex-row'">
      <a :href="linkedin" target="_blank" rel="noopener noreferrer" aria-label="Bagikan ke LinkedIn" :class="btn">
        <svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
        </svg>
      </a>
      <button type="button" :aria-label="copied ? 'Tautan disalin' : 'Salin tautan'" :class="btn" @click="copy">
        <Icon :name="copied ? 'lucide:check' : 'lucide:link'" class="size-4" />
      </button>
      <a :href="mail" aria-label="Bagikan lewat email" :class="btn">
        <Icon name="lucide:mail" class="size-4" />
      </a>
    </div>
  </div>
</template>