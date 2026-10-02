export interface SolusiFeature {
  title: string
  desc: string
  bullets: string[]
}

export interface Solusi {
  slug: string
  name: string // untuk <title> SEO
  hero: {
    eyebrow: string
    title: string
    desc: string
    button: string
    image: { src: string; alt: string }
  }
  intro: {
    eyebrow: string
    heading: string
    body: string
    tags: string[]
  }
  features: {
    eyebrow: string
    heading: string
    items: SolusiFeature[]
  }
  impact: {
    eyebrow: string
    heading: string
    desc: string
    metrics: { value: string; label: string }[]
  }
  flow: {
    eyebrow: string
    heading: string
    steps: { title: string; desc: string }[]
  }
  cta: {
    heading: string
    desc: string
    button: string
  }
}

export const solutions: Solusi[] = [
  // 01 SIMRS-ERP
  {
    slug: 'simrs-erp',
    name: 'SIMRS-ERP Terpadu',
    hero: {
      eyebrow: 'Solusi SIMRS-ERP Terpadu',
      title: 'Pengelolaan Rumah Sakit Terpadu dari Operasional hingga Keuangan',
      desc: 'Satu ekosistem ERP medis modular yang merasionalisasi alur klinis, logistik, dan akuntansi real-time guna mendongkrak efisiensi faskes.',
      button: 'Diskusikan Kebutuhan SIMRS-ERP',
      image: {
        src: '/images/beranda-berita.svg',
        alt: 'Petugas rumah sakit mengoperasikan sistem SIMRS-ERP di meja layanan',
      },
    },
    intro: {
      eyebrow: 'Pengantar Solusi',
      heading: 'Digitalisasi Tanpa Sekat: Hubungkan Medis dengan Akunting',
      body: 'SIMRS-ERP SPKD menyingkirkan fragmentasi data klinis dan administratif. Dengan 68 modul modular yang bekerja sebagai satu single entry system, seluruh alur medis dari pendaftaran hingga klaim asuransi langsung tersinkronisasi tanpa input ganda.',
      tags: ['68 Modul Modular', 'Kepatuhan INA-CBGs'],
    },
    features: {
      eyebrow: 'Kapabilitas Unggulan',
      heading: 'Operasional Lancar dengan Fitur Cerdas',
      items: [
        {
          title: '68 Modul Terintegrasi',
          desc: 'Mengintegrasikan pendaftaran, rekam medis klinis, instalasi farmasi, RIS/PACS, kepegawaian hingga akuntansi keuangan secara otomatis.',
          bullets: ['Integrasi RIS/PACS', 'Sistem Payroll & SDM', 'Inventaris Logistik Medis'],
        },
        {
          title: 'Executive Information System (EIS)',
          desc: 'Layanan visual dashboard analitik eksekutif real-time bagi para direksi untuk pemantauan BOR, ALOS, TOI, serta arus kas secara langsung.',
          bullets: ['BOR & ALOS Tracker', 'Analitik Cashflow Medis', 'Monitoring Kinerja Unit'],
        },
        {
          title: 'INA-CBGs Alert System',
          desc: 'Sistem notifikasi dini sebelum penagihan klaim guna mencegah pembengkakan pembiayaan layanan di luar paket plafon tarif BPJS.',
          bullets: ['Pra-Validasi Coding', 'Notifikasi Plafon Tarif', 'Saran Optimasi Klaim'],
        },
        {
          title: 'Revenue Cycle Management (RCM)',
          desc: 'Optimalisasi arus pendapatan dari scheduling pasien, manajemen coding rekam medis, validasi billing, hingga penagihan piutang faskes.',
          bullets: ['Scheduling Otomatis', 'Automated Billing Audit', 'Lacak Unbilled Services'],
        },
      ],
    },
    impact: {
      eyebrow: 'Dampak Terukur',
      heading: 'Meningkatkan Efisiensi Finansial & Mutu Layanan RS',
      desc: 'Implementasi di ratusan rumah sakit membuktikan reduksi penolakan klaim BPJS secara drastis serta menghemat waktu administratif operasional harian.',
      metrics: [
        { value: '68 Modul', label: 'Terintegrasi dalam Single Entry System' },
        { value: '500+ RS', label: 'Telah Mempercayakan Solusi Operasional' },
        { value: '98%', label: 'Akurasi Deteksi INA-CBGs Alert' },
        { value: 'Real-time', label: 'Dashboard Keuangan & Manajemen Unit' },
      ],
    },
    flow: {
      eyebrow: 'Alur Integrasi',
      heading: 'Siklus Integrasi RCM & SIMRS',
      steps: [
        {
          title: 'Registrasi Pasien',
          desc: 'Data masuk faskes langsung membuka lembar rekam medis dan memicu asuransi / billing.',
        },
        {
          title: 'Pelayanan Medis',
          desc: 'Tindakan dokter, laboratorium & e-resep tercatat di lembar rekam medis digital secara otomatis.',
        },
        {
          title: 'Validasi Plafon INA-CBGs',
          desc: 'Sistem memvalidasi total biaya tindakan dan memberi alert jika melebihi plafon tarif BPJS.',
        },
        {
          title: 'Billing & Klaim',
          desc: 'Satu klik menghasilkan klaim tagihan bersih siap audit dan meminimalisir unbilled services.',
        },
      ],
    },
    cta: {
      heading: 'Siap Mengoptimalkan Operasional Rumah Sakit?',
      desc: 'Beri faskes Anda fondasi digital yang andal demi kepatuhan regulasi dan stabilitas arus pendapatan.',
      button: 'Diskusikan Kebutuhan SIMRS-ERP',
    },
  },

  // 02 Interoperabilitas RME
  {
    slug: 'interoperabilitas-rme',
    name: 'Interoperabilitas Rekam Medis Elektronik',
    hero: {
      eyebrow: 'Solusi Interoperabilitas RME',
      title: 'Rekam Medis Elektronik Standar Internasional Terhubung Tanpa Hambatan',
      desc: 'Menyelaraskan data klinis menggunakan format standar HL7 FHIR dan SNOMED CT demi integrasi tanpa cela dengan Kementerian Kesehatan SATUSEHAT.',
      button: 'Diskusikan Kebutuhan EMR',
      image: {
        src: '/images/beranda-berita.svg',
        alt: 'Dokter menjelaskan data rekam medis elektronik kepada pasien lewat tablet',
      },
    },
    intro: {
      eyebrow: 'Deskripsi Modul',
      heading: 'Kemudahan Pertukaran Data Medis Demi Keselamatan Pasien',
      body: 'TransIRME memfasilitasi pertukaran rekam medis klinis secara andal antar unit kerja di dalam rumah sakit hingga ekosistem SATUSEHAT nasional. Data mengalir akurat dari laboratorium, radiologi, poliklinik, hingga aplikasi Personal Health Record (PHR) pasien.',
      tags: ['HL7 FHIR Interoperability', 'Personal Health Record (PHR)'],
    },
    features: {
      eyebrow: 'Fitur TransIRME',
      heading: 'Interoperabilitas & Akses Pasien Mandiri',
      items: [
        {
          title: 'Interoperabilitas Standar Global',
          desc: 'Mengadopsi pemetaan data terstandardisasi internasional HL7 FHIR, SNOMED CT, LOINC, DICOM, KFA, serta kodefikasi penyakit ICD-9-CM & ICD-10.',
          bullets: ['Sesuai Regulasi Kemenkes', 'Standar HL7 FHIR v4', 'Kamus Farmasi Alat Kesehatan'],
        },
        {
          title: 'Personal Health Record (PHR)',
          desc: 'Aplikasi pendukung pasien terintegrasi untuk mengakses diagnosis, memantau riwayat pengobatan, alergi, dan tren vital signs mandiri.',
          bullets: ['User-friendly Interface', 'Lacak Alergi & Imunisasi', 'Booking Jadwal Dokter'],
        },
        {
          title: 'TransCPG-X & TransCPR-X',
          desc: 'Digitalisasi Clinical Pathway terintegrasi untuk panduan klinis dokter di samping tempat tidur serta pemantauan critical response pasien.',
          bullets: ['Clinical Pathway Otomatis', 'Sistem Keputusan Medis', 'Critical Response Alarm'],
        },
      ],
    },
    impact: {
      eyebrow: 'Metrik Kepatuhan',
      heading: 'Data Terstandarisasi, Faskes Terkoneksi Nasional',
      desc: 'Satu standar integrasi meminimalkan risiko malpraktik karena ketidaklengkapan data medis saat rujukan antar-rumah sakit.',
      metrics: [
        { value: 'HL7 FHIR', label: 'Standar Pertukaran Data Medis' },
        { value: '100%', label: 'Kompatibel Kemenkes SATUSEHAT' },
        { value: 'ICD-9/10', label: 'Terkodefikasi Otomatis' },
        { value: 'Secure API', label: 'Perlindungan Data Enkripsi End-to-End' },
      ],
    },
    flow: {
      eyebrow: 'Arsitektur Data',
      heading: 'Bagaimana TransIRME Mengalirkan Data',
      steps: [
        {
          title: 'Input Rekam Medis',
          desc: 'Data dimasukkan oleh dokter di SIMRS lokal dalam antarmuka terstandarisasi.',
        },
        {
          title: 'Konversi FHIR Engine',
          desc: 'Mesin TransIRME menerjemahkan data mentah lokal menjadi sumber daya berstandar HL7 FHIR.',
        },
        {
          title: 'Sinkronisasi SATUSEHAT',
          desc: 'Secara aman data langsung terkirim ke platform SATUSEHAT melalui API Kemenkes.',
        },
        {
          title: 'Akses PHR Pasien',
          desc: 'Pasien dapat melihat hasil lab, e-resep, dan diagnosis melalui portal PHR mereka sendiri.',
        },
      ],
    },
    cta: {
      heading: 'Siap Menjadi Bagian Faskes Interoperabel Masa Depan?',
      desc: 'Penuhi syarat regulasi PMK Rekam Medis Elektronik sekaligus tingkatkan mutu keselamatan pasien faskes Anda.',
      button: 'Diskusikan Kebutuhan EMR',
    },
  },

  // 03 Tele-Health & Smart Emergency
  {
    slug: 'tele-health-smart-emergency',
    name: 'Tele-Health & Smart Emergency',
    hero: {
      eyebrow: 'Solusi Tele-Health & Emergency',
      title: 'Pelayanan Kesehatan Jarak Jauh Terpadu Tanpa Batas Ruang & Waktu',
      desc: 'Menyatukan telemedicine, pemantauan EKG & ICU jarak jauh, hingga IoT ambulans canggih dalam satu orkestrasi koordinasi tanggap darurat yang cepat.',
      button: 'Diskusikan Kebutuhan Tele-Health',
      image: {
        src: '/images/beranda-berita.svg',
        alt: 'Paramedis menangani pasien di dalam ambulans yang dilengkapi peralatan medis',
      },
    },
    intro: {
      eyebrow: 'Ruang Jangkauan',
      heading: 'Perluas Jangkauan Klinis Spesialis Hingga Titik Layanan',
      body: 'Kami membawa keahlian dokter spesialis rumah sakit rujukan utama langsung ke faskes daerah terpencil, rumah pasien, hingga ambulans yang sedang melaju. Melalui integrasi telekomunikasi aman dan perangkat diagnostik IoT, keputusan klinis kritis dapat diambil lebih cepat.',
      tags: ['Telemedicine Terpadu', 'Smart Emergency & IoT Ambulance'],
    },
    features: {
      eyebrow: 'Fitur Tele-Health',
      heading: 'Teknologi Penyelamat Nyawa di Setiap Detik',
      items: [
        {
          title: 'Telemedicine & Tele-Visit',
          desc: 'Konsultasi tatap muka video terintegrasi, resep elektronik langsung dikirim ke e-apotek, serta sistem penjadwalan mandiri pasien.',
          bullets: ['Video Tele-Konsultasi Enkripsi', 'e-Resep Langsung Apotek', 'Rujukan Berkas Digital'],
        },
        {
          title: 'Tele-EKG & Tele-ICU',
          desc: 'Transmisi sinyal EKG real-time dari faskes tingkat pertama atau ambulans ke dashboard spesialis jantung pusat untuk keputusan penanganan.',
          bullets: ['Sinyal EKG Real-Time', 'Pemantauan ICU Terdistribusi', 'Notifikasi Kondisi Kritis'],
        },
        {
          title: 'IoT Ambulance & Mobile Clinic',
          desc: 'Armada ambulans canggih yang dilengkapi alat medis terkoneksi internet untuk mengirimkan tanda vital pasien di perjalanan menuju RS rujukan.',
          bullets: ['Live Telemetry Tracker', 'Komunikasi Video Paramedis', 'Koneksi Alat Defibrilator'],
        },
        {
          title: 'Emergency Call Button',
          desc: 'Integrasi tombol darurat pasien dengan pusat komando PSC 119 terdekat demi mempercepat rujukan dan kedatangan tim medis penolong.',
          bullets: ['Lacak Lokasi GPS Instan', 'Integrasi Komando PSC 119', 'Log Kejadian Terstruktur'],
        },
      ],
    },
    impact: {
      eyebrow: 'Metrik Respon',
      heading: 'Memangkas Waktu Respon Darurat Secara Drastis',
      desc: 'Integrasi sistem koordinasi tim darurat PSC dan ambulans digital menyelamatkan nyawa pasien stroke dan jantung saat golden hour.',
      metrics: [
        { value: '24/7', label: 'Pusat Pemantauan Klinis Aktif' },
        { value: '-35%', label: 'Penurunan Response Time Darurat' },
        { value: 'IoT Connected', label: 'Alat EKG, Defibrilator, & Monitor' },
        { value: 'Real-time Alert', label: 'Sistem Notifikasi Kejadian Kritis' },
      ],
    },
    flow: {
      eyebrow: 'Alur Penanganan',
      heading: 'Siklus Cepat Tanggap Darurat Pintar',
      steps: [
        {
          title: 'Panggilan Darurat',
          desc: 'Pasien memicu tombol emergency atau call center meluncurkan tim ambulans terdekat.',
        },
        {
          title: 'Penanganan Lapangan',
          desc: 'Paramedis di ambulans memasang alat monitor EKG IoT ke tubuh pasien.',
        },
        {
          title: 'Tele-Diagnosis',
          desc: 'Data vital dan sinyal EKG terpantau real-time oleh dokter spesialis di pusat komando.',
        },
        {
          title: 'Persiapan Ruang ICU',
          desc: 'Rumah sakit tujuan rujukan menyiapkan ruang tindakan sebelum ambulans tiba.',
        },
      ],
    },
    cta: {
      heading: 'Ingin Menghubungkan Ambulans & Layanan Spesialis Faskes Anda?',
      desc: 'Integrasikan teknologi Tele-Health & Smart Emergency demi memperluas wilayah pengabdian medis rumah sakit Anda.',
      button: 'Diskusikan Kebutuhan Tele-Health',
    },
  },

  // 04 SATUSEHAT & BPJS
  {
    slug: 'satusehat-bpjs',
    name: 'Integrasi SATUSEHAT & BPJS',
    hero: {
      eyebrow: 'Integrasi & Kepatuhan Regulasi',
      title: 'Otomatisasi Klaim JKN & Kepatuhan Regulasi Kesehatan Nasional',
      desc: 'Menjembatani sistem internal rumah sakit Anda dengan Platform SATUSEHAT Kemenkes serta sistem vClaim BPJS Kesehatan secara real-time guna mempercepat administrasi dan audit klaim.',
      button: 'Diskusikan Kebutuhan Integrasi',
      image: {
        src: '/images/beranda-berita.svg',
        alt: 'Dashboard kepatuhan dan interoperabilitas RME pada layar komputer',
      },
    },
    intro: {
      eyebrow: 'Solusi Kepatuhan Nasional',
      heading: 'Kurangi Penolakan Klaim JKN & Penuhi Regulasi Tanpa Hambatan',
      body: 'TransECA-X merupakan modul integrasi khusus yang menjembatani Rekam Medis Elektronik (RME) faskes Anda dengan ekosistem kesehatan nasional. Dengan standarisasi data otomatis, sistem memvalidasi kelengkapan dokumen klaim BPJS serta sinkronisasi platform SATUSEHAT secara instan.',
      tags: ['SATUSEHAT API v4', 'JKN E-Claim Analytics'],
    },
    features: {
      eyebrow: 'Modul TransECA-X',
      heading: 'Fitur Integrasi & Validasi Otomatis',
      items: [
        {
          title: 'SATUSEHAT Direct Sync',
          desc: 'Sinkronisasi rekam medis otomatis sesuai amanat Permenkes No. 24/2022 dan SEB JKN langsung ke Server Kementerian Kesehatan Indonesia.',
          bullets: ['FHIR Resource Mapping', 'Kepatuhan Regulasi Pemerintah'],
        },
        {
          title: 'E-Claim Analytics (TransECA-X)',
          desc: 'Audit koding medis otomatis dengan algoritma validasi kelengkapan berkas guna mencegah penundaan pembayaran dari pihak BPJS.',
          bullets: ['Deteksi Potensi Unclaimed Billing', 'Integrasi vClaim BPJS Instan'],
        },
        {
          title: 'Integrasi Apotek & JKN',
          desc: 'Integrasi penuh dengan modul pelayanan obat (e-Apotek) dan Mobile JKN guna menyelaraskan rujukan medis dan alur pelayanan farmasi.',
          bullets: ['E-Resep JKN Kompatibel', 'Sinkronisasi Antrean Online'],
        },
      ],
    },
    impact: {
      eyebrow: 'Dampak Terukur',
      heading: 'Meminimalkan Risiko Administrasi Klaim Nasional',
      desc: 'Meningkatkan akurasi berkas klaim dan memastikan kepatuhan regulasi secara penuh terhadap regulasi SATUSEHAT Kemenkes RI.',
      metrics: [
        { value: '100%', label: 'Kepatuhan Permenkes 24/2022' },
        { value: 'SATUSEHAT', label: 'Terintegrasi Langsung & Teruji' },
        { value: 'Zero', label: 'Unclaimed Billing Terabaikan' },
        { value: 'Real-time', label: 'Analitik Potensi Piutang BPJS' },
      ],
    },
    flow: {
      eyebrow: 'Alur Kerja',
      heading: 'Proses Integrasi & Validasi Berkas Klaim JKN',
      steps: [
        {
          title: 'Entri Data RME',
          desc: 'Seluruh rekam medis klinis diinput dokter/perawat pada sistem SIMRS-ERP secara digital.',
        },
        {
          title: 'E-Claim Pre-Audit',
          desc: 'Sistem TransECA-X memverifikasi kelengkapan berkas rujukan dan coding penyakit BPJS.',
        },
        {
          title: 'SATUSEHAT Push',
          desc: 'Data klinis terstandar FHIR otomatis disinkronkan ke platform nasional Kemenkes.',
        },
        {
          title: 'Klaim Dikirim',
          desc: 'Satu klik untuk meluncurkan klaim JKN bersih siap verifikasi oleh BPJS Kesehatan.',
        },
      ],
    },
    cta: {
      heading: 'Siap Menyelaraskan Faskes Anda dengan Regulasi Nasional?',
      desc: 'Wujudkan digitalisasi rekam medis terpadu sesuai standar SATUSEHAT dan minimalisir penolakan klaim BPJS hari ini.',
      button: 'Diskusikan Kebutuhan Integrasi',
    },
  },

  // 05 Cash & Supply Chain
  {
    slug: 'cash-supply-chain',
    name: 'Cash & Supply Chain',
    hero: {
      eyebrow: 'Logistik & Solusi Finansial',
      title: 'Efisiensi Pengadaan Obat & Penjaminan Arus Kas Rumah Sakit',
      desc: 'Solusi cerdas tata kelola rantai pasok medis (TransLOG-X) yang terhubung langsung dengan distributor farmasi terpercaya dan program pendanaan talangan arus kas faskes.',
      button: 'Diskusikan Kebutuhan Supply Chain',
      image: {
        src: '/images/beranda-berita.svg',
        alt: 'Petugas gudang farmasi memeriksa stok obat di rak logistik',
      },
    },
    intro: {
      eyebrow: 'Solusi Manajemen Logistik',
      heading: 'Kendali Penuh Rantai Pasok Tanpa Risiko Kekosongan Obat',
      body: 'Melalui TransLOG-X, kami menghadirkan transparansi logistik faskes dari level depo farmasi hingga jaringan prinsipal obat. Dipadukan dengan Supply Chain Financing (SCF), rumah sakit Anda dapat menjaga ketersediaan barang medis habis pakai (BMHP) sembari mengamankan arus kas operasional dari jatuh tempo tagihan vendor.',
      tags: ['Lot & Expiry Tracker', 'Supply Chain Financing'],
    },
    features: {
      eyebrow: 'Modul TransLOG-X & SCF',
      heading: 'Layanan Logistik & Keuangan Cerdas',
      items: [
        {
          title: 'TransLOG-X (e-Logistic)',
          desc: 'Sistem inventarisasi obat & BMHP multi-lokasi yang mendeteksi nomor lot, tanggal kedaluwarsa secara dinamis, dan analisis prediksi konsumsi.',
          bullets: ['Predictive stock analytics', 'Expiry Warning System'],
        },
        {
          title: 'Kerja Sama Logistik Farmasi',
          desc: 'Kemitraan strategis penjaminan pasokan obat & alat kesehatan langsung dengan prinsipal industri guna menghalau risiko out-of-stock.',
          bullets: ['Zero Stockout Assurance', 'Konsinyasi Terautomasi'],
        },
        {
          title: 'Supply Chain Financing (SCF)',
          desc: 'Dukungan modal kerja talangan terintegrasi perbankan untuk meringankan beban finansial pembelian pasokan logistik faskes.',
          bullets: ['Kemitraan Bank Terpercaya', 'Pengajuan Talangan Cepat'],
        },
      ],
    },
    impact: {
      eyebrow: 'Hasil Operasional',
      heading: 'Transparansi Alokasi & Optimalisasi Finansial Depo Farmasi',
      desc: 'Solusi logistik cerdas yang mendatangkan nilai hemat operasional faskes Anda sekaligus menjamin kontinuitas pelayanan medis.',
      metrics: [
        { value: 'Zero', label: 'Kasus Stockout Obat Utama' },
        { value: 'Predictive', label: 'Analitik Kebutuhan Cerdas' },
        { value: 'Real-time', label: 'Pelacakan Lot & Expiry' },
        { value: 'Multi Bank', label: 'Kemitraan Pendanaan Rantai Pasok' },
      ],
    },
    flow: {
      eyebrow: 'Alur Integrasi',
      heading: 'Proses Pemesanan & Talangan SCF Medis',
      steps: [
        {
          title: 'Deteksi Kebutuhan',
          desc: 'Sistem TransLOG-X menganalisis batas aman minimum stok obat di gudang faskes.',
        },
        {
          title: 'E-Procurement',
          desc: 'Pemesanan otomatis diajukan langsung kepada jaringan PBF mitra faskes Anda.',
        },
        {
          title: 'Pembiayaan SCF',
          desc: 'Mitra perbankan melakukan pembayaran talangan PO logistik farmasi rumah sakit.',
        },
        {
          title: 'Pengiriman & Penerimaan',
          desc: 'Barang dikirim oleh distributor dan tercatat instan di inventaris menggunakan QR/Barcode.',
        },
      ],
    },
    cta: {
      heading: 'Ingin Menjamin Keberlanjutan Arus Kas Pengadaan Obat?',
      desc: 'Hubungkan sistem inventaris rumah sakit Anda dengan program Supply Chain Financing terpercaya dari SPKD sekarang juga.',
      button: 'Diskusikan Kebutuhan Supply Chain',
    },
  },
]

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug)