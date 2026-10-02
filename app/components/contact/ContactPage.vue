<script setup lang="ts">
async function handleSubmit() {
  await navigateTo('/terimakasih')
}

function validatePhone(event: Event) {
  const input = event.target as HTMLInputElement
  const value = input.value.trim()

  if (!value) {
    input.setCustomValidity('')
    return
  }

  const normalized = value.replace(/[\s().-]/g, '')
  const nationalNumber = normalized.startsWith('+62')
    ? `0${normalized.slice(3)}`
    : normalized.startsWith('62')
      ? `0${normalized.slice(2)}`
      : normalized
  const isValid = /^08[1-9]\d{7,10}$/.test(nationalNumber)

  input.setCustomValidity(
    isValid
      ? ''
      : 'Masukkan nomor ponsel yang valid.',
  )
}
</script>

<template>
  <div class="contact-page">
    <section class="contact-hero">
      <div class="container-x contact-hero-grid">
        <div class="contact-hero-copy">
          <p class="contact-eyebrow">Mulai percakapan</p>
          <h1>Mulai Transformasi Digital Fasilitas Kesehatan Anda Sekarang</h1>
        </div>

        <div class="contact-hero-note">
          <p>
            Ceritakan tantangan yang sedang dihadapi. Tim kami akan membantu memetakan kebutuhan,
            kesiapan, dan langkah awal yang realistis.
          </p>
          <span class="contact-response-time">
            <Icon name="lucide:circle" class="size-2 fill-current" aria-hidden="true" />
            Respons dalam 1x24 jam kerja
          </span>
        </div>
      </div>
    </section>

    <section id="kontak" class="container-x contact-workspace">
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="contact-form-heading">
          <h2>Permohonan diskusi</h2>
          <p>Kolom bertanda * wajib diisi agar kami dapat menghubungkan Anda dengan tim yang tepat.</p>
        </div>

        <div class="contact-form-row">
          <label class="contact-field">
            <span>Nama Lengkap <b aria-hidden="true">*</b></span>
            <input name="name" type="text" placeholder="Nama Anda" autocomplete="name" required />
          </label>
          <label class="contact-field">
            <span>Institusi / RS / Klinik <b aria-hidden="true">*</b></span>
            <input name="institution" type="text" placeholder="Nama institusi" required />
          </label>
        </div>

        <div class="contact-form-row">
          <label class="contact-field">
            <span>Jabatan</span>
            <input name="role" type="text" placeholder="Jabatan Anda" autocomplete="organization-title" />
          </label>
          <label class="contact-field">
            <span>Email Resmi <b aria-hidden="true">*</b></span>
            <input
              name="email"
              type="email"
              placeholder="nama@institusi.go.id"
              autocomplete="email"
              required
            />
          </label>
        </div>

        <label class="contact-field">
          <span>Telepon / WhatsApp <b aria-hidden="true">*</b></span>
          <input
            name="phone"
            type="tel"
            placeholder="08xx-xxxx-xxxx"
            autocomplete="tel"
            aria-describedby="contact-phone-hint"
            required
            @input="validatePhone"
          />
          <small id="contact-phone-hint" class="contact-field-hint">
            Masukkan nomor ponsel aktif.
          </small>
        </label>

        <label class="contact-field">
          <span>Kebutuhan Solusi / Pesan <b aria-hidden="true">*</b></span>
          <textarea
            name="message"
            placeholder="Ceritakan tantangan, prioritas, atau solusi yang ingin didiskusikan..."
            rows="5"
            required
          />
        </label>

        <div class="contact-form-action">
          <p>
            Dengan mengirim formulir, Anda menyetujui pemrosesan data untuk keperluan tindak lanjut
            permohonan.
          </p>
          <button type="submit">
            Kirim Permohonan Diskusi
            <Icon name="lucide:arrow-right" class="size-[17px]" aria-hidden="true" />
          </button>
        </div>

      </form>

      <aside class="contact-information" aria-label="Informasi kontak SPKD">
        <section class="contact-company-card">
          <div class="contact-company-heading">
            <p>PT SPKD</p>
            <h2>PT Sistem Pelayanan Kesehatan dan Data</h2>
          </div>
          <hr />
          <dl>
            <div>
              <dt>Email</dt>
              <dd><a href="mailto:halo@spkd.co.id">halo@spkd.co.id</a></dd>
            </div>
            <div>
              <dt>Telepon</dt>
              <dd><a href="tel:+622150882026">+62 21 5088 2026</a></dd>
            </div>
            <div>
              <dt>Jam kerja</dt>
              <dd>Senin–Jumat, 08.30–17.30 WIB</dd>
            </div>
            <div>
              <dt>Lokasi</dt>
              <dd>Jakarta, Indonesia</dd>
            </div>
          </dl>
        </section>

        <section class="contact-response-card">
          <Icon name="lucide:clock-3" class="size-7 text-brand" aria-hidden="true" />
          <h2>Apa yang terjadi setelah Anda mengirim?</h2>
          <p>
            Tim kami meninjau kebutuhan, menunjuk spesialis yang relevan, lalu menghubungi Anda
            dalam 1x24 jam kerja untuk mengatur diskusi awal.
          </p>
        </section>
      </aside>
    </section>
  </div>
</template>