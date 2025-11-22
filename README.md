# 🚀 Selamat Datang di Z.ai Code Scaffold

Sebuah kerangka aplikasi web modern yang siap produksi, ditenagai oleh teknologi-teknologi terdepan, yang dirancang untuk mempercepat pengembangan Anda dengan bantuan *coding* berbasis AI dari **Z.ai**.

---

## ✨ Tumpukan Teknologi (Technology Stack)

Kerangka ini menyediakan fondasi yang kuat yang dibangun dengan:

### 🎯 Kerangka Kerja Inti (Core Framework)
- **⚡ Next.js 15** - Kerangka kerja React untuk produksi dengan App Router
- **📘 TypeScript 5** - JavaScript yang aman tipe (type-safe) untuk pengalaman pengembang yang lebih baik
- **🎨 Tailwind CSS 4** - Kerangka kerja CSS berbasis utilitas (*utility-first*) untuk pengembangan UI yang cepat

### 🧩 Komponen UI & Gaya (Styling)
- **🧩 shadcn/ui** - Komponen berkualitas tinggi dan aksesibel yang dibangun di atas Radix UI
- **🎯 Lucide React** - Pustaka ikon yang indah & konsisten
- **🌈 Framer Motion** - Pustaka gerak (*motion*) siap produksi untuk React
- **🎨 Next Themes** - *Dark mode* sempurna dalam 2 baris kode

### 📋 Formulir & Validasi
- **🎣 React Hook Form** - Formulir berkinerja tinggi dengan validasi yang mudah
- **✅ Zod** - Validasi skema yang mengutamakan TypeScript (*TypeScript-first*)

### 🔄 Manajemen Status & Pengambilan Data (Data Fetching)
- **🐻 Zustand** - Manajemen status yang sederhana dan terukur (*scalable*)
- **🔄 TanStack Query** - Sinkronisasi data yang kuat untuk React
- **🌐 Axios** - Klien HTTP berbasis *Promise*

### 🗄️ Basis Data & Backend
- **🗄️ Prisma** - ORM Node.js dan TypeScript generasi berikutnya
- **🔐 NextAuth.js** - Solusi otentikasi *open-source* yang lengkap

### 🎨 Fitur UI Lanjutan (Advanced UI Features)
- **📊 TanStack Table** - UI tanpa kepala (*Headless UI*) untuk membangun tabel dan *datagrid*
- **🖱️ DND Kit** - *Toolkit* *drag and drop* modern untuk React
- **📊 Recharts** - Pustaka *chart* yang didefinisikan ulang, dibangun dengan React dan D3
- **🖼️ Sharp** - Pemrosesan gambar berkinerja tinggi

### 🌍 Internasionalisasi & Utilitas
- **🌍 Next Intl** - Pustaka internasionalisasi untuk Next.js
- **📅 Date-fns** - Pustaka utilitas tanggal JavaScript modern
- **🪝 ReactUse** - Kumpulan *hook* React penting untuk pengembangan modern

---

## 🎯 Mengapa Kerangka Ini?

- **🏎️ Pengembangan Cepat** - *Tooling* dan praktik terbaik yang telah dikonfigurasi sebelumnya
- **🎨 UI yang Indah** - Pustaka komponen shadcn/ui lengkap dengan interaksi canggih
- **🔒 Keamanan Tipe (Type Safety)** - Konfigurasi TypeScript penuh dengan validasi Zod
- **📱 Responsif** - Prinsip desain mengutamakan seluler (*mobile-first*) dengan animasi halus
- **🗄️ Siap Basis Data** - Prisma ORM dikonfigurasi untuk pengembangan *backend* yang cepat
- **🔐 Otentikasi Disertakan** - NextAuth.js untuk alur otentikasi yang aman
- **📊 Visualisasi Data** - *Chart*, tabel, dan fungsionalitas *drag-and-drop*
- **🌍 Siap i18n** - Dukungan multi-bahasa dengan Next Intl
- **🚀 Siap Produksi** - Pengaturan *build* dan *deployment* yang dioptimalkan
- **🤖 Ramah AI** - Basis kode terstruktur yang sempurna untuk bantuan AI

---

## 🚀 Mulai Cepat (Quick Start)

```bash
# Instal dependensi
npm install

# Mulai server pengembangan
npm run dev

# Bangun untuk produksi
npm run build

# Mulai server produksi
npm start
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi Anda berjalan.

## 🤖 Ditenagai oleh Z.ai

Kerangka ini dioptimalkan untuk digunakan dengan [Z.ai](https://chat.z.ai) - asisten AI Anda untuk:

- **💻 Pembuatan Kode (Code Generation)** - Buat komponen, halaman, dan fitur secara instan.
- **🎨 Pengembangan UI** - Buat antarmuka yang indah dengan bantuan AI.
- **🔧 Perbaikan Bug** - Identifikasi dan selesaikan masalah dengan saran cerdas.
- **📝 Dokumentasi** - Hasilkan dokumentasi komprehensif secara otomatis.
- **🚀 Optimasi** - Peningkatan kinerja dan praktik terbaik.

Siap membangun sesuatu yang luar biasa? Mulai berbincang dengan **Z.ai** di [chat.z.ai](https://chat.z.ai) dan rasakan masa depan pengembangan bertenaga AI!

## 📁 Struktur Proyek

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Komponen React yang dapat digunakan kembali
│   └── ui/             # shadcn/ui components
├── hooks/              # Hook React kustom
└── lib/                # Fungsi utilitas dan konfigurasi
```

---

## 🎨 Fitur & Komponen yang Tersedia

Kerangka ini mencakup serangkaian lengkap alat pengembangan web modern:

### 🧩 Komponen UI (shadcn/ui)
- **Tata Letak**: Card, Separator, Aspect Ratio, Resizable Panels
- **Formulir**: Input, Textarea, Select, Checkbox, Radio Group, Switch
- **Umpan Balik**: Alert, Toast (Sonner), Progress, Skeleton
- **Navigasi**: Breadcrumb, Menubar, Navigation Menu, Pagination
- **Overlay**: Dialog, Sheet, Popover, Tooltip, Hover Card
- **Tampilan Data**: Badge, Avatar, Calendar

### 📊 Fitur Data Lanjutan
- **Tabel**: Tabel data yang kuat dengan penyortiran (sorting), pemfilteran (filtering), paginasi (TanStack Table)
- **Chart**: Visualisasi yang indah dengan Recharts
- **Formulir**: Formulir yang aman tipe (type-safe) dengan React Hook Form + validasi Zod

### 🎨 Fitur Interaktif
- **Animasi**: Mikro-interaksi halus dengan Framer Motion
- **Drag & Drop**: Fungsionalitas drag-and-drop modern dengan DND Kit
- **Pengalihan Tema**: Dukungan dark/light mode bawaan

### 🔐 Integrasi Backend
- **Otentikasi**: Alur otentikasi yang siap digunakan dengan NextAuth.js
- **Basis Data**: Operasi basis data yang aman tipe (type-safe) dengan Prisma
- **Klien API**: HTTP requests with Axios + TanStack Query
- **Manajemen Status**: Simple and scalable with Zustand

