# 🌟 Portofolio Website - Devita Fahliza Ulfa

Website portofolio profesional, responsif, dan interaktif untuk **Devita Fahliza Ulfa** — **SAP Software Developer di PT Kayu Mebel Indonesia** (Enterprise & Full-Stack Software Developer | Spesialis SAP ABAP, RICEF, & Web-based Systems).

Website ini dirancang dengan standar internasional (default bahasa Inggris) serta dilengkapi fitur **Bilingual Switcher (EN / ID)** sehingga pengunjung dapat beralih ke bahasa Indonesia kapan saja dengan satu klik.

---

## ✨ Fitur-Fitur Unggulan

1. **🌐 Bilingual Support (English Default & Indonesian Switcher)**:
   - Tampilan utama default menggunakan **Bahasa Inggris (EN)** standar internasional, siap untuk recruiter global/multinasional.
   - Tombol toggle bahasa di navbar (`🇬🇧 EN` / `🇮🇩 ID`) yang secara instan menerjemahkan seluruh teks, fakta singkat, timeline pengalaman kerja, dan 17 showcase proyek.
   - Pilihan bahasa tersimpan otomatis di `localStorage`.

2. **🔍 Live Project Search & Category Filtering**:
   - Kolom pencarian interaktif yang mencari proyek secara *real-time* berdasarkan kata kunci, judul, maupun nama teknologi (contoh: *ABAP, PostgreSQL, Flutter, ALV, Dialog*).
   - Filter kategori cepat:
     - 📌 *All Projects* (17 Proyek)
     - ⚡ *SAP ABAP & Enterprise* (6 Proyek: ZPPR_CLOSING, ZMMRP_CONVERSION, CM Deduction, QC Final Dialog Programming, KPI Monitoring, Vendor Interface)
     - 🌐 *Web & Database Systems* (4 Proyek: Hospital Smartlink, Employee Management, Database Manager, Salary Payroll)
     - 📱 *Mobile & UI/UX* (4 Proyek: ExBook Flutter, Fleksi Ride, Raih Juara, iRent)
     - 💻 *Desktop & Games* (3 Proyek: Java OOP Cashier, Visual Basic, Flappy Bird)

3. **📋 Interactive Project Detail Modal**:
   - Klik tombol **"View Architecture & Details"** pada setiap kartu proyek untuk membuka jendela modal lengkap berisi latar belakang proyek, fitur arsitektur, dan badge teknologi.

4. **💼 Career Timeline & Quick Facts**:
   - Kartu fakta singkat (*Degree, GPA 3.81, Current Position, Company, Certification, Location*).
   - Timeline pengalaman kerja profesional yang lengkap:
     - 💼 **PT Kayu Mebel Indonesia** (SAP Software Developer — Current Role / Posisi Aktif)
     - 🏥 **RS Arafah Anwar Medika** (IT Programmer Intern)
     - 🏭 **PT Pan Brothers Tbk & Group** (SAP ABAP Programmer Intern — MSIB Batch 7)
     - 🎓 **UPN "Veteran" Jawa Timur** (Assistant Lecturer / Asisten Dosen Pemrograman)
     - 🛍️ **Glamgirl92** (E-Commerce Admin)
     - 🎨 **Kriya Kreasi** (E-Commerce Admin)

5. **🌓 Dark / Light Mode Toggle**:
   - Desain modern bernuansa *Slate, Teal & Indigo* dengan dukungan tema gelap dan terang otomatis.

6. **⚡ Direct Action & Copy Utility**:
   - Tombol sekali klik salin Email dan nomor WhatsApp dengan animasi notifikasi *Toast*.

---

## 🚀 Cara Melihat Portofolio di Komputer Anda

1. Buka File Explorer di laptop/PC Anda.
2. Masuk ke folder: `C:\Users\devita fahliza\MySystem\portofolio`
3. **Klik ganda file `index.html`** — website akan langsung terbuka di browser favorit Anda!

---

## 🌐 Cara Deploy ke GitHub Pages (Domain Gratis `DevitaFahliza.github.io`)

Karena Anda sudah memiliki akun GitHub di `https://github.com/DevitaFahliza`, Anda bisa langsung menjadikannya website online publik:

1. Buka [GitHub](https://github.com) dan buat repositori baru bernama: `DevitaFahliza.github.io`
2. Jalankan perintah git pada terminal di folder ini:
   ```bash
   git init
   git add .
   git commit -m "feat: bilingual enterprise portfolio website"
   git branch -M main
   git remote add origin https://github.com/DevitaFahliza/DevitaFahliza.github.io.git
   git push -u origin main
   ```
3. Buka tab **Settings** di repositori GitHub -> klik menu **Pages** di sebelah kiri.
4. Pada bagian *Build and deployment*, pilih Branch: `main` dan folder: `/(root)`, lalu klik **Save**.
5. Tunggu 1–2 menit, portofolio Anda langsung aktif online di alamat **`https://DevitaFahliza.github.io`**!

---

## 📂 Struktur File

```text
portofolio/
├── index.html       # Struktur HTML5 responsif, data-i18n tags, quick facts & modal
├── style.css        # Custom CSS, glassmorphism, glowing badges, scrollbar & theme styles
├── script.js        # Kamus i18n (EN/ID), 17 projects bilingual database, search, filter, modal
└── README.md        # Dokumentasi dan panduan deploy
```
