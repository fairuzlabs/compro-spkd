export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'cards'; items: { id: string; title: string; desc: string }[] }
  | { type: 'quote'; text: string }

export interface Article {
  slug: string  
  category: string
  title: string
  topic: 'kebijakan' | 'teknologi' | 'layanan'
  featured?: boolean
  date: string // format ISO: 2026-09-26
  source: string
  readMinutes: number
  image: { src: string; alt: string }
  excerpt: string // dipakai di kartu "Wawasan terkait" dan meta description
  summary: string // kotak "Ringkasan"
  toc: { id: string; label: string }[]
  blocks: Block[]
  related: string[] // slug artikel lain
}

export const articles: Article[] = [
  {
    slug: 'interoperabilitas-bukan-sekadar-integrasi',
    category: 'Wawasan',
    topic: 'teknologi',
    title: 'Interoperabilitas bukan sekadar integrasi: membangun makna data yang konsisten',
    date: '2026-09-26',
    source: 'Tim Interoperabilitas SPKD',
    readMinutes: 8,
    image: {
      src: '/images/beranda-berita.svg',
      alt: 'Presentasi peta jaringan data kesehatan di ruang rapat',
    },
    excerpt:
      'Integrasi menghubungkan sistem. Interoperabilitas memastikan data tetap memiliki identitas, struktur, dan makna yang sama.',
    summary:
      'Integrasi menghubungkan sistem. Interoperabilitas memastikan data yang berpindah tetap memiliki identitas, struktur, dan makna yang sama bagi pengirim maupun penerima.',
    toc: [
      { id: 'tiga-lapisan', label: 'Tiga lapisan' },
      { id: 'konektivitas', label: 'Konektivitas' },
      { id: 'struktur', label: 'Struktur' },
      { id: 'semantik', label: 'Semantik' },
      { id: 'memulai-roadmap', label: 'Memulai roadmap' },
    ],
    blocks: [
      {
        type: 'p',
        text: 'Ketika dua aplikasi berhasil bertukar data, pekerjaan belum tentu selesai. Tanpa kesepakatan tentang identitas pasien, kode klinis, waktu kejadian, dan status transaksi, informasi dapat hadir tetapi tetap sulit dipercaya.',
      },
      { type: 'h2', id: 'tiga-lapisan', text: 'Tiga lapisan yang perlu dijaga' },
      {
        type: 'p',
        text: 'Pertama adalah konektivitas: kemampuan sistem mengirim dan menerima. Kedua adalah struktur: kesepakatan mengenai bentuk, elemen wajib, serta relasi antardata. Ketiga adalah semantik: jaminan bahwa istilah dan kode dipahami dengan makna yang sama.',
      },
      {
        type: 'cards',
        items: [
          { id: 'konektivitas', title: 'Konektivitas', desc: 'Pastikan API, keamanan, antrean, dan monitoring bekerja stabil.' },
          { id: 'struktur', title: 'Struktur', desc: 'Gunakan profil data yang jelas agar setiap elemen memiliki tempat.' },
          { id: 'semantik', title: 'Semantik', desc: 'Selaraskan terminologi seperti ICD, SNOMED CT, LOINC, dan KFA.' },
        ],
      },
      { type: 'h2', id: 'memulai-roadmap', text: 'Mulai dari keputusan yang ingin diperbaiki' },
      {
        type: 'p',
        text: 'Roadmap interoperabilitas sebaiknya tidak dimulai dari daftar API. Mulailah dari keputusan pelayanan yang membutuhkan konteks lebih baik: rujukan, pengobatan, hasil penunjang, klaim, atau perencanaan kapasitas. Dengan begitu, kualitas data memiliki tujuan yang nyata.',
      },
      {
        type: 'quote',
        text: 'Data yang terhubung baru bernilai ketika dapat dipahami dan dipercaya oleh orang yang menggunakannya.',
      },
      {
        type: 'p',
        text: 'Evaluasi berkala perlu melihat bukan hanya tingkat keberhasilan pengiriman, tetapi juga kelengkapan, konsistensi, ketepatan waktu, dan dampaknya pada pekerjaan pengguna. Di sinilah interoperabilitas bergerak dari proyek teknis menjadi kapabilitas organisasi.',
      },
    ],
    related: [
      'lima-pertanyaan-modernisasi-simrs',
      'tele-ekg-memperpendek-jarak-pasien-tenaga-ahli',
      'menerjemahkan-standar-data-kesehatan',
    ],
  },

  // Artikel terkait: isi blocks menyusul, halaman tetap jalan walau kosong
  {
    slug: 'lima-pertanyaan-modernisasi-simrs',
    category: 'Implementasi',
    topic: 'teknologi',
    title: 'Lima pertanyaan sebelum memulai modernisasi SIMRS',
    date: '2026-09-18',
    source: 'Tim Implementasi SPKD',
    readMinutes: 6,
    image: {
      src: '/images/beranda-berita.svg',
      alt: 'Tim manajemen rumah sakit berdiskusi di ruang rapat',
    },
    excerpt: 'Cara menyelaraskan target manajemen, kesiapan proses, dan kebutuhan pengguna sejak awal.',
    summary: 'Cara menyelaraskan target manajemen, kesiapan proses, dan kebutuhan pengguna sejak awal.',
    toc: [],
    blocks: [],
    related: ['interoperabilitas-bukan-sekadar-integrasi', 'tele-ekg-memperpendek-jarak-pasien-tenaga-ahli', 'menerjemahkan-standar-data-kesehatan'],
  },
  {
    slug: 'tele-ekg-memperpendek-jarak-pasien-tenaga-ahli',
    category: 'Tele-Health',
    topic: 'layanan',
    title: 'Tele-EKG memperpendek jarak antara pasien dan tenaga ahli',
    date: '2026-09-10',
    source: 'Tim Tele-Health SPKD',
    readMinutes: 5,
    image: {
      src: '/images/beranda-berita.svg',
      alt: 'Dokter berkonsultasi jarak jauh lewat layar video',
    },
    excerpt: 'Desain layanan, perangkat, dan tata kelola klinis yang perlu dipersiapkan.',
    summary: 'Desain layanan, perangkat, dan tata kelola klinis yang perlu dipersiapkan.',
    toc: [],
    blocks: [],
    related: ['interoperabilitas-bukan-sekadar-integrasi', 'lima-pertanyaan-modernisasi-simrs', 'menerjemahkan-standar-data-kesehatan'],
  },
  {
    slug: 'menerjemahkan-standar-data-kesehatan',
    category: 'Kepatuhan',
    topic: 'kebijakan',
    title: 'Menerjemahkan standar data kesehatan ke pekerjaan sehari-hari',
    date: '2026-09-02',
    source: 'Tim Kepatuhan SPKD',
    readMinutes: 7,
    image: {
      src: '/images/beranda-berita.svg',
      alt: 'Profesional kesehatan meninjau dashboard data di meja kerja',
    },
    excerpt: 'Penjelasan ringkas tentang FHIR, terminologi, dan citra medis untuk pemimpin non-teknis.',
    summary: 'Penjelasan ringkas tentang FHIR, terminologi, dan citra medis untuk pemimpin non-teknis.',
    toc: [],
    blocks: [],
    related: ['interoperabilitas-bukan-sekadar-integrasi', 'lima-pertanyaan-modernisasi-simrs', 'tele-ekg-memperpendek-jarak-pasien-tenaga-ahli'],
  },

  // Artikel baru untuk halaman /berita
  {
    slug: 'integrasi-rme-satusehat-tata-kelola-klaim-jkn',
    category: 'Interoperabilitas',
    topic: 'teknologi',
    featured: true,
    title: 'Integrasi RME dengan SATUSEHAT untuk Tata Kelola Klaim JKN',
    date: '2026-09-12',
    source: 'Tim Interoperabilitas SPKD',
    readMinutes: 6,
    image: {
      src: '/images/beranda-berita.svg',
      alt: 'Dua staf rumah sakit meninjau data klaim di layar komputer',
    },
    excerpt:
      'Bagaimana kualitas rekam medis elektronik, terminologi klinis, dan validasi dokumen dapat mempercepat klaim tanpa mengurangi akurasi pelayanan.',
    summary:
      'Bagaimana kualitas rekam medis elektronik, terminologi klinis, dan validasi dokumen dapat mempercepat klaim tanpa mengurangi akurasi pelayanan.',
    toc: [],
    blocks: [],
    related: [
      'interoperabilitas-bukan-sekadar-integrasi',
      'lima-pertanyaan-modernisasi-simrs',
      'menerjemahkan-standar-data-kesehatan',
    ],
  },
  {
    slug: 'mobile-clinic-rsud-banten',
    category: 'Inovasi Layanan',
    topic: 'layanan',
    title: 'Mobile Clinic RSUD Banten: Membawa Layanan Lebih Dekat',
    date: '2026-08-28',
    source: 'Tim Lapangan SPKD',
    readMinutes: 5,
    image: {
      src: '/images/beranda-berita.svg',
      alt: 'Petugas kesehatan menyapa ibu dan anak di depan puskesmas',
    },
    excerpt:
      'Catatan lapangan tentang layanan bergerak, konektivitas perangkat, dan pengalaman pasien di wilayah yang membutuhkan akses lebih dekat.',
    summary:
      'Catatan lapangan tentang layanan bergerak, konektivitas perangkat, dan pengalaman pasien di wilayah yang membutuhkan akses lebih dekat.',
    toc: [],
    blocks: [],
    related: [
      'tele-ekg-memperpendek-jarak-pasien-tenaga-ahli',
      'lima-pertanyaan-modernisasi-simrs',
      'interoperabilitas-bukan-sekadar-integrasi',
    ],
  },
  {
    slug: 'indikator-kinerja-rs-vertikal-kepdirjen-768',
    category: 'Kebijakan & Kinerja',
    topic: 'kebijakan',
    title: 'Indikator Kinerja RS Vertikal dalam Kepdirjen Yankes No. 768/2023',
    date: '2026-08-14',
    source: 'Tim Kebijakan SPKD',
    readMinutes: 7,
    image: {
      src: '/images/beranda-berita.svg',
      alt: 'Rapat manajemen rumah sakit membahas indikator kinerja',
    },
    excerpt:
      'Menerjemahkan indikator kinerja menjadi dashboard, ritme evaluasi, dan keputusan operasional yang dapat ditindaklanjuti setiap hari.',
    summary:
      'Menerjemahkan indikator kinerja menjadi dashboard, ritme evaluasi, dan keputusan operasional yang dapat ditindaklanjuti setiap hari.',
    toc: [],
    blocks: [],
    related: [
      'menerjemahkan-standar-data-kesehatan',
      'integrasi-rme-satusehat-tata-kelola-klaim-jkn',
      'lima-pertanyaan-modernisasi-simrs',
    ],
  },
]

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug)