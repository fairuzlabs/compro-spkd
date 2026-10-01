<template>
  <div class="contact-page contact-thank-you-page">
    <section class="contact-thank-you" aria-labelledby="thank-you-title">
      <div class="contact-thank-you-content">
        <div class="contact-thank-you-icon" aria-hidden="true">
          <Icon name="lucide:check" class="size-9" />
        </div>

        <p class="contact-eyebrow">Permohonan terkirim</p>
        <h1 id="thank-you-title">Terima kasih telah menghubungi SPKD.</h1>
        <p class="contact-thank-you-message">
          Tim kami akan meninjau kebutuhan Anda dan menghubungi kembali dalam 1x24 jam kerja untuk
          mengatur diskusi awal.
        </p>

        <div class="contact-thank-you-response">
          <Icon name="lucide:clock-3" class="size-5 shrink-0 text-brand" aria-hidden="true" />
          <p>Silakan periksa email atau telepon yang Anda cantumkan.</p>
        </div>

        <div class="contact-thank-you-actions">
          <NuxtLink to="/" class="contact-thank-you-home">
            <Icon name="lucide:arrow-left" class="size-4" aria-hidden="true" />
            Kembali ke Beranda
          </NuxtLink>
          <NuxtLink to="/solusi" class="contact-thank-you-solutions">
            Lihat Solusi
            <Icon name="lucide:arrow-up-right" class="size-4" aria-hidden="true" />
          </NuxtLink>
        </div>
        <a class="contact-thank-you-email" href="mailto:halo@spkd.co.id">
          <Icon name="lucide:mail" class="size-4" aria-hidden="true" />
          halo@spkd.co.id
        </a>
      </div>
    </section>
  </div>
</template>