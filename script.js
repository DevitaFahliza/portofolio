// Devita Fahliza Ulfa Portfolio - Core JavaScript
// Bilingual Support (EN default, ID toggle), Project Filtering & Search, Interactive Modals, Theme Toggle, ScrollSpy

// 1. BILINGUAL DICTIONARY (English as default, Indonesian supported)
const translations = {
  en: {
    // Nav
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_organization: "Leadership",
    nav_education: "Education",
    nav_contact: "Contact",
    nav_cta: "Get in Touch",

    // Hero & Profile
    hero_status: "Currently Employed",
    avatar_status_badge: "Active SAP Developer",
    hero_title_pre: "Architecting Robust Enterprise Solutions with",
    hero_title_highlight: "SAP ABAP & Full-Stack Systems",
    hero_subtitle: "Software Developer at PT Kayu Mebel Indonesia, specializing in SAP-based enterprise systems and modern web application development.",
    hero_cta_projects: "Explore Projects",
    hero_cta_contact: "Contact Me",
    hero_cta_copy_email: "Copy Email",
    stat_gpa_label: "GPA / IPK",
    stat_cert_label: "Certification",
    stat_e2e_label: "Development",
    scroll_cue: "Scroll to explore technical capabilities & projects",

    // About
    about_tag: "Professional Profile",
    about_title: "Devita Fahliza Ulfa",
    about_subtitle: "SAP Software Developer • System Analyst • Web Developer",
    about_p1: "Information Systems graduate from UPN “Veteran” Jawa Timur. Currently working as a Software Developer at PT Kayu Mebel Indonesia, specializing in SAP-based enterprise systems and modern web applications. Experienced in analyzing business processes, identifying operational needs, and translating complex requirements into structured technology solutions. Capable of managing end-to-end system development, from requirement analysis and system design to implementation, testing, and user training.",
    about_badge_degree: "🎓 B.S. in Information Systems • UPN Veteran Jatim",
    about_badge_bnsp: "🏆 BNSP Certified Programmer",

    about_card1_title: "Enterprise SAP ABAP",
    about_card1_desc: "Mastery of custom ABAP programming, RICEF objects, Dialog Programming (PBO/PAI), ALV Grids, SmartForms, Transport Request (TR) releases, and functional integration.",
    about_card2_title: "Web & High-Throughput DB",
    about_card2_desc: "Architecting relational PostgreSQL & MySQL databases, executing complex query optimization, role-based access security, and hospital information systems (HIS).",
    about_card3_title: "Leadership & Academic Mentorship",
    about_card3_desc: "Former Assistant Lecturer for Programming Languages guiding hundreds of students, coupled with leading the Entrepreneurship Department at HIMASIFO.",

    // Quick Facts
    quick_facts_title: "Quick Facts",
    fact_degree: "Degree",
    fact_degree_val: "B.S. in Information Systems",
    fact_gpa: "GPA",
    fact_gpa_val: "3.81 / 4.00 (Cum Laude Track)",
    fact_current_role: "Current Position",
    fact_current_role_val: "SAP Software Developer",
    fact_company: "Company",
    fact_company_val: "PT Kayu Mebel Indonesia",
    fact_cert: "Certification",
    fact_cert_val: "Junior Web Programmer (BNSP)",
    fact_location: "Location",
    fact_location_val: "Surabaya, East Java, Indonesia",

    // Skills
    skills_tag: "Technical Competencies",
    skills_title: "Tech Stack & Core Capabilities",
    skills_subtitle: "Categorized by battle-tested industry domains and production-grade technologies",
    skill_cat_sap_title: "SAP & Enterprise ERP",
    skill_cat_sap_desc: "Custom ABAP modules, analytical reporting, and manufacturing process integration.",
    skill_cat_web_title: "Web & Backend Systems",
    skill_cat_web_desc: "REST APIs, server-side business logic, authentication, and responsive web apps.",
    skill_cat_db_title: "Database Engineering",
    skill_cat_db_desc: "Relational schema design, high-volume query joins, indexing, and data validation.",
    skill_cat_mobile_title: "Mobile & Desktop",
    skill_cat_mobile_desc: "Cross-platform mobile apps with Flutter and desktop POS cashier systems.",
    skill_cat_tools_title: "Dev Tools & Environment",
    skill_cat_tools_desc: "Collaborative development, version control, IDEs, and UI/UX prototyping.",
    skill_cat_soft_title: "Professional & Soft Skills",
    skill_cat_soft_desc: "Interpersonal communication, analytical thinking, and team leadership.",

    // Experience
    experience_tag: "Career Trajectory",
    experience_title: "Work & Industry Experience",
    experience_subtitle: "Track record of technical contributions across manufacturing enterprises, healthcare, and academia",

    // Organization
    org_tag: "Leadership & Community",
    org_title: "Organizational & Committee Leadership",
    org_subtitle: "Proven leadership in budget allocation, team coordination, and national tech seminar execution",

    // Projects
    projects_tag: "Portfolio Showcase",
    projects_title: "Featured Engineering Projects",
    projects_subtitle: "Filter or search through enterprise SAP programs, web systems, mobile apps, and desktop utilities",
    projects_search_placeholder: "Search projects by title, technology, or keywords (e.g. ABAP, PostgreSQL, Flutter)...",
    filter_all: "All Projects",
    filter_sap: "SAP ABAP & Enterprise",
    filter_web: "Web & Database Systems",
    filter_mobile: "Mobile & UI/UX",
    filter_desktop: "Desktop & Games",
    btn_view_details: "View Architecture & Details",
    no_projects_found: "No projects match your search criteria.",

    // Modal
    modal_overview_title: "Project Overview",
    modal_features_title: "Core Responsibilities & Technical Highlights",
    modal_tech_title: "Technologies & Tools Used",
    modal_close: "Close",

    // Education & Certs
    education_tag: "Qualifications",
    education_title: "Education & Certifications",
    edu_formal_badge: "Formal Education",
    edu_univ_name: "Universitas Pembangunan Nasional “Veteran” Jawa Timur",
    edu_degree_name: "Bachelor of Information Systems (S1 Sistem Informasi)",
    edu_gpa_label: "Cumulative Grade Point Average (GPA):",
    edu_gpa_note: "Graduated with High Academic Distinction (Cum Laude Track), focusing on Enterprise Architecture & Information Systems.",
    cert_badge: "National Certification",
    cert_name: "Junior Web Programmer",
    cert_issuer: "National Professional Certification Agency (BNSP)",
    cert_desc: "Compliant with Indonesian National Work Competency Standards (SKKNI). Formally validates structured web coding, server-side development, relational database integration, and software security best practices.",
    cert_verify: "Officially Certified Competency Standard",

    // Contact
    contact_tag: "Let's Connect",
    contact_title: "Interested in Working Together or Discussing Opportunities?",
    contact_desc: "I am always open to discussing enterprise software engineering, SAP ABAP development, backend systems, or innovative technology projects. Feel free to reach out directly via email or WhatsApp.",
    contact_email_label: "Direct Email",
    contact_phone_label: "Phone & WhatsApp",
    contact_linkedin_link: "LinkedIn Profile",
    contact_github_link: "GitHub Repository",
    contact_blog_link: "Personal Blog",

    // Toast
    toast_copied_email: "Email copied to clipboard!",
    toast_copied_phone: "Phone number copied to clipboard!"
  },

  id: {
    // Nav
    nav_about: "Tentang",
    nav_skills: "Keahlian",
    nav_experience: "Pengalaman",
    nav_projects: "Proyek",
    nav_organization: "Organisasi",
    nav_education: "Pendidikan",
    nav_contact: "Kontak",
    nav_cta: "Hubungi Saya",

    // Hero
    // Hero & Profile
    hero_status: "Currently Employed",
    avatar_status_badge: "Active SAP Developer",
    hero_title_pre: "Membangun Solusi Enterprise yang Efektif dengan",
    hero_title_highlight: "SAP ABAP & Full-Stack Web",
    hero_subtitle: "Software Developer di PT Kayu Mebel Indonesia, berspesialisasi dalam sistem enterprise berbasis SAP dan pengembangan aplikasi web modern.",
    hero_cta_projects: "Lihat Showcase Proyek",
    hero_cta_contact: "Hubungi Saya",
    hero_cta_copy_email: "Salin Email",
    stat_gpa_label: "GPA / IPK",
    stat_cert_label: "Certification",
    stat_e2e_label: "Development",
    scroll_cue: "Gulir ke bawah untuk melihat keahlian teknis & showcase proyek",

    // About
    about_tag: "Profil Profesional",
    about_title: "Devita Fahliza Ulfa",
    about_subtitle: "SAP Software Developer • System Analyst • Web Developer",
    about_p1: "Lulusan Sistem Informasi dari UPN “Veteran” Jawa Timur. Saat ini berkarier sebagai Software Developer di PT Kayu Mebel Indonesia, dengan spesialisasi pada pengembangan sistem enterprise berbasis SAP dan aplikasi web modern. Berpengalaman dalam menganalisis proses bisnis, mengidentifikasi kebutuhan operasional, serta menerjemahkan kebutuhan kompleks menjadi solusi teknologi yang terstruktur. Mampu mengelola pengembangan sistem secara end-to-end, mulai dari analisis kebutuhan dan perancangan sistem hingga implementasi, pengujian, dan pelatihan pengguna.",
    about_badge_degree: "🎓 S1 Sistem Informasi • UPN Veteran Jatim",
    about_badge_bnsp: "🏆 BNSP Certified Programmer",

    about_card1_title: "Enterprise SAP ABAP",
    about_card1_desc: "Menguasai pemrograman ABAP kustom, objek RICEF, Dialog Programming (PBO/PAI), ALV Grid, SmartForms, Transport Request (TR) release, dan integrasi modul.",
    about_card2_title: "Web & Database Berkecepatan Tinggi",
    about_card2_desc: "Arsitektur basis data relasional PostgreSQL & MySQL, optimasi query kompleks, kontrol keamanan hak akses (RBAC), dan Sistem Informasi Rumah Sakit (SIMRS).",
    about_card3_title: "Kepemimpinan & Bimbingan Akademik",
    about_card3_desc: "Mantan Asisten Dosen Bahasa Pemrograman yang membimbing ratusan mahasiswa, serta memimpin Departemen Kewirausahaan HIMASIFO.",

    // Quick Facts
    quick_facts_title: "Fakta Singkat",
    fact_degree: "Gelar",
    fact_degree_val: "Sarjana Sistem Informasi (S.Kom)",
    fact_gpa: "IPK",
    fact_gpa_val: "3.81 / 4.00 (Cum Laude Track)",
    fact_current_role: "Posisi Saat Ini",
    fact_current_role_val: "SAP Software Developer",
    fact_company: "Perusahaan",
    fact_company_val: "PT Kayu Mebel Indonesia",
    fact_cert: "Sertifikasi",
    fact_cert_val: "Junior Web Programmer (BNSP)",
    fact_location: "Domisili",
    fact_location_val: "Surabaya, Jawa Timur, Indonesia",

    // Skills
    skills_tag: "Kompetensi Teknis",
    skills_title: "Tech Stack & Spesialisasi",
    skills_subtitle: "Dikelompokkan berdasarkan domain keahlian yang teruji di industri dan teknologi tingkat produksi",
    skill_cat_sap_title: "SAP & Enterprise ERP",
    skill_cat_sap_desc: "Pengembangan modul SAP kustom, pelaporan analitik, dan integrasi proses bisnis manufaktur.",
    skill_cat_web_title: "Web & Backend Systems",
    skill_cat_web_desc: "REST API, logika server, autentikasi, serta aplikasi web yang tangguh dan responsif.",
    skill_cat_db_title: "Database Management",
    skill_cat_db_desc: "Perancangan skema relasional, optimasi query join kompleks, indeks, dan integritas data.",
    skill_cat_mobile_title: "Mobile & Desktop",
    skill_cat_mobile_desc: "Pengembangan aplikasi mobile Flutter dan aplikasi kasir desktop terstruktur.",
    skill_cat_tools_title: "Tools & Environment",
    skill_cat_tools_desc: "Alat kolaborasi, version control Git, SAP GUI, IDE, dan desain antarmuka Figma.",
    skill_cat_soft_title: "Soft Skills & Bahasa",
    skill_cat_soft_desc: "Komunikasi teknis, pemecahan masalah kritis, kepemimpinan tim, dan adaptabilitas.",

    // Experience
    experience_tag: "Perjalanan Karier",
    experience_title: "Pengalaman Kerja & Industri",
    experience_subtitle: "Rekam jejak kontribusi di bidang IT perumahsakitan, manufaktur nasional, hingga akademis",

    // Organization
    org_tag: "Kepemimpinan & Organisasi",
    org_title: "Pengalaman Organisasi & Kepanitiaan",
    org_subtitle: "Membuktikan kepemimpinan, manajemen anggaran, koordinasi tim, dan pelaksanaan program berskala nasional",

    // Projects
    projects_tag: "Koleksi Portofolio",
    projects_title: "Featured Projects",
    projects_subtitle: "Filter atau cari proyek enterprise SAP ABAP, sistem web, mobile, atau desktop",
    projects_search_placeholder: "Cari proyek berdasarkan judul, teknologi, atau kata kunci (contoh: ABAP, PostgreSQL, Flutter)...",
    filter_all: "Semua Proyek",
    filter_sap: "SAP ABAP & Enterprise",
    filter_web: "Web & Sistem Informasi",
    filter_mobile: "Mobile & UI/UX",
    filter_desktop: "Desktop & Lainnya",
    btn_view_details: "Lihat Arsitektur & Detail",
    no_projects_found: "Tidak ada proyek yang sesuai dengan kata kunci pencarian Anda.",

    // Modal
    modal_overview_title: "Ringkasan Proyek",
    modal_features_title: "Fitur Utama & Arsitektur Teknis",
    modal_tech_title: "Teknologi & Tools yang Digunakan",
    modal_close: "Tutup",

    // Education & Certs
    education_tag: "Kredensial & Kualifikasi",
    education_title: "Pendidikan & Sertifikasi",
    edu_formal_badge: "Pendidikan Formal",
    edu_univ_name: "Universitas Pembangunan Nasional “Veteran” Jawa Timur",
    edu_degree_name: "S1 Sistem Informasi (Bachelor of Information Systems)",
    edu_gpa_label: "Indeks Prestasi Kumulatif (IPK):",
    edu_gpa_note: "Predikat Sangat Memuaskan (Cum Laude Track) dengan fokus pada Arsitektur Enterprise & Sistem Informasi.",
    cert_badge: "Sertifikasi Nasional",
    cert_name: "Junior Web Programmer",
    cert_issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    cert_desc: "Standar Kompetensi Kerja Nasional Indonesia (SKKNI). Memvalidasi kemampuan pengkodean terstruktur, implementasi logika server, basis data relasional, dan praktik keamanan web standar industri.",
    cert_verify: "Standar Uji Kompetensi Nasional Resmi",

    // Contact
    contact_tag: "Mari Terhubung",
    contact_title: "Tertarik Bekerja Sama atau Berdiskusi?",
    contact_desc: "Saya sangat terbuka untuk mendiskusikan rekayasa perangkat lunak enterprise, pengembangan SAP ABAP, sistem web backend, maupun peluang kolaborasi teknologi. Hubungi saya langsung melalui email atau WhatsApp.",
    contact_email_label: "Email Langsung",
    contact_phone_label: "Telepon & WhatsApp",
    contact_linkedin_link: "Profil LinkedIn",
    contact_github_link: "GitHub Repository",
    contact_blog_link: "Blog Pribadi",

    // Toast
    toast_copied_email: "Email berhasil disalin ke clipboard!",
    toast_copied_phone: "Nomor telepon berhasil disalin ke clipboard!"
  }
};

// 2. WORK EXPERIENCE DATA (Bilingual)
const experiencesData = [
  {
    company: "PT Kayu Mebel Indonesia",
    roleEn: "SAP Software Developer",
    roleId: "SAP Software Developer",
    badgeEn: "Current Role",
    badgeId: "Posisi Saat Ini",
    periodEn: "Present (Active)",
    periodId: "Saat Ini (Aktif)",
    isCurrent: true,
    descEn: "Responsible for designing, programming custom solutions, integrating, and maintaining SAP ERP applications to support and optimize wood and furniture manufacturing operations.",
    descId: "Bertanggung jawab dalam perancangan, pengembangan program kustom, integrasi, dan pemeliharaan aplikasi SAP ERP untuk mendukung optimalisasi alur proses bisnis serta operasional manufaktur mebel dan perkayuan.",
    bulletsEn: [
      "Analyze cross-functional business requirements and translate them into technical specifications and structured <strong>SAP ABAP</strong> program logic.",
      "Develop and maintain <strong>RICEF</strong> objects (Reports, Interfaces, Conversions, Enhancements, Forms) to drive process automation and ERP efficiency.",
      "Build high-performance custom analytical reports and interactive <strong>ALV Grids</strong> with database query optimization for real-time management reporting.",
      "Perform rigorous debugging, error log analysis, and code tuning to guarantee ERP system stability and reliability.",
      "Collaborate closely with SAP functional consultants and key business users during feature testing, User Acceptance Testing (UAT), and system documentation."
    ],
    bulletsId: [
      "Menganalisis kebutuhan proses bisnis operasional manufaktur dan menerjemahkannya ke dalam arsitektur teknis serta logika program <strong>SAP ABAP</strong>.",
      "Merancang dan mengembangkan objek <strong>RICEF</strong> (Reports, Interfaces, Conversions, Enhancements, Forms) untuk menunjang otomatisasi dan efisiensi sistem ERP.",
      "Membangun modul pelaporan kustom dan <strong>ALV Grid</strong> interaktif dengan optimasi query database SAP untuk mendukung pelaporan manajemen secara real-time.",
      "Melakukan <i>troubleshooting</i>, debugging mendalam, penanganan *error logs*, serta optimasi kode program guna menjamin stabilitas dan reliabilitas sistem.",
      "Berkolaborasi intensif dengan konsultan fungsional SAP dan *business users* dalam validasi fungsionalitas, user acceptance testing (UAT), dan penyusunan dokumentasi teknis."
    ],
    tags: ["SAP ABAP", "SAP ERP", "RICEF", "ALV Grid", "Database Optimization", "Manufacturing ERP"]
  },
  {
    company: "RS Arafah Anwar Medika",
    roleEn: "IT Programmer Intern",
    roleId: "IT Programmer Intern",
    badgeEn: "Internship",
    badgeId: "Magang",
    periodEn: "Aug 2026 – Present",
    periodId: "Agu 2026 – Sekarang",
    isCurrent: false,
    descEn: "Contributed to the development and maintenance of Hospital Information Systems (HIS) to support digital healthcare transformation and improve hospital operational throughput.",
    descId: "Berkontribusi aktif dalam pengembangan dan pemeliharaan Sistem Informasi Rumah Sakit (SIMRS) untuk mendukung transformasi digital dan meningkatkan efisiensi operasional pelayanan kesehatan.",
    bulletsEn: [
      "Analyzed clinical and administrative business requirements to engineer reliable system solutions aligned with hospital daily workflows.",
      "Developed and enhanced web-based modules by implementing new features, refactoring existing functions, and integrating frontend, backend, and relational databases.",
      "Managed <strong>PostgreSQL</strong> databases: developed data schemas, authored complex queries, performed data validation, and optimized query execution times.",
      "Implemented security controls including multi-level authentication, Role-Based Access Control (RBAC), and patient medical data protection.",
      "Conducted extensive system testing, feature validation, and produced technical documentation for continuous maintainability."
    ],
    bulletsId: [
      "Menganalisis kebutuhan pengguna dan proses bisnis rumah sakit untuk merancang solusi sistem yang selaras dengan alur operasional klinis maupun administratif.",
      "Mengembangkan dan meningkatkan aplikasi berbasis web dengan mengimplementasikan fitur baru, refactoring fungsionalitas, dan integrasi full-stack.",
      "Mengelola database <strong>PostgreSQL</strong>: struktur tabel, pembuatan query kompleks, validasi data transaksi medis, dan optimasi performa query.",
      "Mengimplementasikan mekanisme keamanan sistem: autentikasi multi-level, kontrol hak akses (RBAC), serta proteksi kerahasiaan data pasien.",
      "Melakukan pengujian fitur (system testing), debugging masalah teknis, serta menyusun dokumentasi teknis sistem."
    ],
    tags: ["PostgreSQL", "Web Systems", "Healthcare HIS", "RBAC Security", "Query Optimization"]
  },
  {
    company: "PT Pan Brothers Tbk & Group",
    roleEn: "SAP ABAP Programmer Intern (MSIB Batch 7)",
    roleId: "SAP ABAP Programmer Intern (MSIB Batch 7)",
    badgeEn: "Certified Internship",
    badgeId: "MSIB Kampus Merdeka",
    periodEn: "Sep – Dec 2024",
    periodId: "Sep – Des 2024",
    isCurrent: false,
    descEn: "Completed the Certified Internship & Independent Study (MSIB) Batch 7 focusing on developing, debugging, testing, and maintaining mission-critical SAP ERP applications for one of Indonesia's largest apparel manufacturers.",
    descId: "Menyelesaikan program Magang dan Studi Independen Bersertifikat (MSIB) Batch 7 dengan fokus pada analisis, pengembangan modul, pengujian, dan pemeliharaan aplikasi SAP ERP untuk proses manufaktur garmen terkemuka.",
    bulletsEn: [
      "Engineered custom ABAP programs based on functional specifications provided by SAP Functional teams.",
      "Identified and rectified runtime bottlenecks, syntax errors, and debugging issues across development and quality assurance environments.",
      "Architected interactive <strong>Dialog Programming</strong> features, incorporating Module Pools, Screen Painter, GUI statuses, PBO (Process Before Output), and PAI (Process After Input).",
      "Constructed reusable RICEF objects: custom ALV Grid reports, enhancements, exits, and forms using <strong>SmartForms / SAPscript</strong>.",
      "Administered SAP database objects in the <strong>ABAP Dictionary</strong> (custom tables, views, data elements, domains, structures, and table maintenance generators).",
      "Managed Transport Request (TR) packaging, documentation, and release for programs passing user acceptance validation."
    ],
    bulletsId: [
      "Mengembangkan program ABAP kustom berdasarkan spesifikasi teknis dan fungsional dari tim SAP Functional Consultant.",
      "Menganalisis performa program, melakukan debugging intensif, serta memperbaiki kesalahan teknis (syntax/runtime errors).",
      "Merancang dan mengimplementasikan fitur <strong>Dialog Programming</strong> (Module Pool, Screen Painter, GUI Status/Title, PBO & PAI).",
      "Membangun objek RICEF: Reports (ALV Grid), Enhancements, Exits, dan Forms menggunakan <strong>SmartForms / SAPscript</strong>.",
      "Mengelola objek kamus data SAP (ABAP Dictionary): tabel kustom, domain, tipe data elemen, views, dan table maintenance generator.",
      "Menangani pembuatan dan perilisan Transport Request (TR) untuk program yang telah lolos verifikasi UAT."
    ],
    tags: ["SAP ABAP", "MSIB Batch 7", "ALV Grid", "Dialog Programming", "SmartForms", "Transport Request"]
  },
  {
    company: "UPN \"Veteran\" Jawa Timur",
    roleEn: "Assistant Lecturer (Programming Languages)",
    roleId: "Asisten Dosen (Bahasa Pemrograman)",
    badgeEn: "Academic Role",
    badgeId: "Akademik",
    periodEn: "Jan – Mar 2024",
    periodId: "Jan – Mar 2024",
    isCurrent: false,
    descEn: "Appointed as an Assistant Lecturer to instruct undergraduate students in programming fundamentals, algorithm logic, and software debugging practices.",
    descId: "Dipercaya sebagai Asisten Dosen untuk mengajar dasar-dasar pemrograman, logika algoritma, dan praktik debugging perangkat lunak kepada mahasiswa sarjana.",
    bulletsEn: [
      "Prepared comprehensive course materials, practical lab worksheets, interactive slides, and clear code demonstration repositories.",
      "Led weekly hands-on laboratory sessions and interactive programming tutorials.",
      "Graded assignments and practical examination code, providing constructive individual feedback.",
      "Mentored student teams through their final programming course projects."
    ],
    bulletsId: [
      "Menyiapkan materi ajar, modul praktikum, slide presentasi, dan contoh kode pemrograman interaktif.",
      "Memimpin sesi laboratorium praktikum dan tutorial pemrograman untuk mahasiswa.",
      "Memberikan penilaian komprehensif, evaluasi kode, serta feedback konstruktif pada tugas dan ujian.",
      "Membimbing mahasiswa dalam penyelesaian proyek akhir mata kuliah pemrograman."
    ],
    tags: ["Programming Instruction", "Mentorship", "Algorithms", "Code Review", "Academic Teaching"]
  },
  {
    company: "Glamgirl92",
    roleEn: "E-Commerce Admin",
    roleId: "Admin E-Commerce",
    badgeEn: "E-Commerce",
    badgeId: "E-Commerce",
    periodEn: "Jan 2025 – Jul 2026",
    periodId: "Jan 2025 – Jul 2026",
    isCurrent: false,
    descEn: "Supervised online marketplace storefronts, promotional ad campaigns, stock inventory coordination, customer relations, and brand packaging design.",
    descId: "Mengelola toko marketplace digital, optimasi iklan promosi berbayar, koordinasi inventaris stok, layanan pelanggan, dan desain visual kemasan produk.",
    bulletsEn: [
      "Executed daily e-commerce operations: product catalog updates, pricing, stock reconciliation, and prompt customer order fulfillment.",
      "Managed targeted marketplace ad campaigns using Shopee Ads and TikTok promotional tools, continuously tweaking parameters to improve ROAS.",
      "Designed visual packaging labels and marketing branding collateral."
    ],
    bulletsId: [
      "Mengelola operasional e-commerce harian: listing produk, penetapan harga, sinkronisasi stok, dan pemrosesan pesanan pelanggan.",
      "Mengelola kampanye periklanan marketplace berbayar (Shopee Ads & TikTok tools) serta menyesuaikan parameter targeting.",
      "Merancang desain label kemasan produk dan materi visual branding."
    ],
    tags: ["E-Commerce Management", "Shopee Ads", "TikTok Marketing", "Inventory Tracking", "Branding Design"]
  },
  {
    company: "Kriya Kreasi",
    roleEn: "E-Commerce Admin",
    roleId: "Admin E-Commerce",
    badgeEn: "E-Commerce",
    badgeId: "E-Commerce",
    periodEn: "Jan 2023 – Sep 2024",
    periodId: "Jan 2023 – Sep 2024",
    isCurrent: false,
    descEn: "Managed customer communications across multi-channel social media and marketplace platforms, inventory logs, and accurate order fulfillment.",
    descId: "Mengelola komunikasi pelanggan lintas platform media sosial dan marketplace, pembukuan inventaris barang, dan pemenuhan pesanan.",
    bulletsEn: [
      "Processed and monitored incoming customer souvenir orders with high accuracy and tight turnaround deadlines.",
      "Handled inquiries, custom requests, and post-purchase customer satisfaction across chat platforms.",
      "Maintained structured inventory records and assisted in restocking supplies."
    ],
    bulletsId: [
      "Memproses dan memantau pesanan souvenir pelanggan secara cepat, teliti, dan tepat waktu.",
      "Menjawab pertanyaan, pesanan khusus kustomisasi, dan kebutuhan pelanggan di media sosial.",
      "Mengelola pembukuan tingkat persediaan stok barang dan membantu penataan persediaan."
    ],
    tags: ["Customer Service", "Order Fulfillment", "Inventory Control", "Marketplace Operations"]
  }
];

// 3. COMPLETE PROJECTS DATA REPOSITORY (17 Projects, Bilingual)
const projectsData = [
  {
    id: "sap-zppr-closing",
    category: "sap",
    icon: "file-spreadsheet",
    titleEn: "SAP Finished Goods Monitoring (ZPPR_CLOSING)",
    titleId: "SAP Monitoring Barang Jadi (ZPPR_CLOSING)",
    subtitleEn: "SAP ABAP • Custom ALV Report • Database Drill-Down",
    subtitleId: "SAP ABAP • Custom ALV Report • Database Query",
    badgeEn: "SAP Enterprise",
    badgeId: "SAP Enterprise",
    descEn: "Custom SAP ABAP analytical program engineered to monitor finished goods production realization in real time, comparing planned quantity against actual output, unit of measure (UOM), and Goods Issue (GI) completion percentage.",
    descId: "Program laporan kustom SAP ABAP yang dikembangkan untuk memonitor realisasi barang jadi (finished goods) secara real-time berdasarkan planned quantity, actual quantity, unit of measure (UOM), dan persentase Goods Issue (GI).",
    featuresEn: [
      "Engineered an interactive custom SAP report to track daily manufacturing realization against master production orders.",
      "Integrated clickable interactive fields (drill-down capability) allowing plant supervisors to instantly inspect underlying document lines.",
      "Streamlined decision-making for production managers by unifying distribution and output metrics into an intuitive ALV Grid.",
      "Optimized internal database queries to maintain sub-second report generation across tens of thousands of production lines."
    ],
    featuresId: [
      "Mengembangkan dan menyempurnakan report kustom SAP untuk monitoring realisasi produksi.",
      "Menambahkan fitur clickable detail fields untuk memudahkan drill-down data pendukung pada setiap baris laporan.",
      "Membantu manajemen memantau data produksi dan alur distribusi secara akurat untuk pengambilan keputusan operasional strategis.",
      "Optimasi query database internal SAP untuk memastikan laporan dapat memuat volume data besar tanpa jeda."
    ],
    tech: ["SAP ABAP", "ALV Grid", "Custom Report", "Database Query", "Dialog Logic", "SAP GUI"]
  },
  {
    id: "sap-zmmrp-conversion",
    category: "sap",
    icon: "file-text",
    titleEn: "SAP Imported Material Usage Report (ZMMRP_CONVERSION)",
    titleId: "SAP Laporan Penggunaan Material Impor (ZMMRP_CONVERSION)",
    subtitleEn: "SAP ABAP • Customs Compliance • Material Tracking",
    subtitleId: "SAP ABAP • Kepatuhan Bea Cukai • Validasi Data",
    badgeEn: "SAP Enterprise",
    badgeId: "SAP Enterprise",
    descEn: "Specialized SAP ABAP reporting module built to monitor imported raw material utilization, directly mapped to statutory customs documents, tariff regulations, and corporate financial statements.",
    descId: "Laporan SAP ABAP untuk memonitor penggunaan material baku impor yang terkait erat dengan dokumen kepabeanan dan regulasi bea cukai.",
    featuresEn: [
      "Processed complex raw material consumption metrics alongside customs document numbers, HS Codes, CIF valuations, and duties paid.",
      "Established multi-table data integrity checks to eliminate discrepancies between warehouse consumption logs and customs declarations.",
      "Substantially elevated data transparency and audit preparedness for regulatory customs inspections and internal financial audits."
    ],
    featuresId: [
      "Memproses kalkulasi konsumsi material, nomor dokumen kepabeanan, HS Code, CIF value, perpajakan, dan sisa stok material.",
      "Meningkatkan transparansi dan akurasi data untuk pelaporan operasional, administrasi legal, dan audit keuangan.",
      "Mengintegrasikan validasi data multi-tabel SAP untuk mencegah inkonsistensi saldo material impor."
    ],
    tech: ["SAP ABAP", "ABAP Dictionary", "Customs Compliance", "Data Validation", "Custom Report"]
  },
  {
    id: "sap-cm-deduction",
    category: "sap",
    icon: "calculator",
    titleEn: "SAP CM Deduction Management (ZPPR_CM_DEDUCTION)",
    titleId: "SAP Manajemen Potongan CM (ZPPR_CM_DEDUCTION)",
    subtitleEn: "SAP ABAP • Custom Table • Transaction Maintenance",
    subtitleId: "SAP ABAP • Custom Table • Create/Change Program",
    badgeEn: "SAP Enterprise",
    badgeId: "SAP Enterprise",
    descEn: "SAP transactional program designed to record, calculate, update, and report Cut-and-Make (CM) production cost deductions across plant facilities.",
    descId: "Program SAP untuk mencatat, memperbarui (create/change), dan melaporkan data potongan biaya produksi (production cost deduction).",
    featuresEn: [
      "Created structured entry interfaces for key parameters: Plant ID, Posting Date, KP, Style Code, and deduction figures.",
      "Stored entries into a custom-designed SAP database table with automated audit trails and input validation checks.",
      "Generated analytical reporting views enabling plant controllers to monitor operational margin adjustments."
    ],
    featuresId: [
      "Merancang antarmuka input data terstruktur untuk Plant, Posting Date, KP, Style, dan nominal CM Deduction.",
      "Menyimpan data secara terpusat pada custom table SAP dan menampilkan laporan analitik evaluasi biaya manajemen.",
      "Menerapkan validasi logika bisnis untuk memastikan integritas data potongan biaya antar pabrik/divisi."
    ],
    tech: ["SAP ABAP", "Custom Table", "Create/Change Program", "Report", "Cost Accounting"]
  },
  {
    id: "sap-kpi-monitoring",
    category: "sap",
    icon: "trending-up",
    titleEn: "SAP Production KPI Monitoring (ZSDR_KP_MONITORING)",
    titleId: "SAP Monitoring KPI Produksi (ZSDR_KP_MONITORING)",
    subtitleEn: "SAP ABAP • Query Performance Optimization • High Volume",
    subtitleId: "SAP ABAP • Optimasi Query • Volume Data Tinggi",
    badgeEn: "SAP Enterprise",
    badgeId: "SAP Enterprise",
    descEn: "High-performance SAP report that calculates and visualizes manufacturing Key Performance Indicator (KPI) statuses in real time across active assembly lines.",
    descId: "Pengembangan dan optimasi laporan SAP untuk memantau status capaian dan progres KPI produksi lini manufaktur secara real-time.",
    featuresEn: [
      "Refactored heavy SQL SELECT queries using optimized JOIN operations and index-friendly WHERE clauses to handle massive production records without UI freezing.",
      "Rendered metrics via an interactive ALV Grid equipped with customizable sorting, dynamic subtotaling, and export functionality.",
      "Provided shop-floor managers with instantaneous visibility into target vs. actual factory outputs."
    ],
    featuresId: [
      "Mengoptimalkan query SELECT dan JOIN kompleks untuk memproses data produksi bervolume tinggi dengan waktu eksekusi minimal.",
      "Menyajikan hasil monitoring menggunakan ALV Grid yang interaktif, mendukung sorting, filtering, dan export.",
      "Meningkatkan keterbacaan data kinerja produksi bagi pimpinan pabrik dan pengawas operasional."
    ],
    tech: ["SAP ABAP", "ALV Grid", "SELECT Query Optimization", "Table JOIN", "Performance Tuning"]
  },
  {
    id: "sap-qc-final",
    category: "sap",
    icon: "check-square",
    titleEn: "SAP QC Final Inspection & Audit (ZQMPR_PQC_FINAL)",
    titleId: "SAP QC Final & Audit Kualitas (ZQMPR_PQC_FINAL)",
    subtitleEn: "SAP ABAP • Dialog Programming • PBO / PAI • Module Pool",
    subtitleId: "SAP ABAP • Dialog Programming • PBO / PAI • Module Pool",
    badgeEn: "SAP Enterprise",
    badgeId: "SAP Enterprise",
    descEn: "Quality Control (QC) final audit application engineered using SAP Dialog Programming to capture product inspection verdicts, defect categorization, and defect rate calculations.",
    descId: "Program audit kontrol mutu (QC) untuk mencatat hasil inspeksi produk, kategori defect (cacat), perhitungan defect rate, dan penetapan status kelulusan audit.",
    featuresEn: [
      "Developed two-tiered reporting structures featuring Summary and Granular Detail views for executive quality reviews.",
      "Engineered responsive screen flow logic employing Dialog Programming principles: Screen Painter, GUI Title, PBO (Process Before Output), and PAI (Process After Input).",
      "Significantly minimized manual inspection logging errors, enforcing mandatory parameter validation before saving."
    ],
    featuresId: [
      "Membangun laporan analitik dengan tampilan Summary View dan Detail View untuk kemudahan evaluasi manajemen kualitas.",
      "Menerapkan konsep Dialog Programming (Screen Painter, Flow Logic, PBO dan PAI) untuk pengalaman interaksi layar yang dinamis.",
      "Mengurangi tingkat kesalahan manual staf QC saat inspeksi akhir pakaian jadi."
    ],
    tech: ["SAP ABAP", "Dialog Programming", "PBO / PAI", "Module Pool", "Quality Management"]
  },
  {
    id: "sap-vendor-interface",
    category: "sap",
    icon: "network",
    titleEn: "SAP Vendor Web Interface Enhancement",
    titleId: "Peningkatan Antarmuka Web Vendor SAP",
    subtitleEn: "SAP ABAP • Interface Debugging • Parameter Validation",
    subtitleId: "SAP ABAP • Integrasi Antarmuka • Validasi Parameter",
    badgeEn: "SAP Enterprise",
    badgeId: "SAP Enterprise",
    descEn: "End-to-end testing, parameter debugging, and enhancement of SAP web interface integrations powering automated Purchase Order (PO) and Purchase Invoice transactions with external vendors.",
    descId: "Penyempurnaan dan pengujian fitur integrasi antarmuka SAP untuk pertukaran dokumen Purchase Order (PO) dan Purchase Invoice dengan vendor eksternal.",
    featuresEn: [
      "Conducted extensive debugging sessions to pinpoint and resolve parameter mismatch anomalies in web communication channels.",
      "Introduced strict input validation boundaries preventing payload transmission failures and data corruption.",
      "Enhanced vendor communication turnaround time, accelerating automated procurement processing."
    ],
    featuresId: [
      "Melakukan debugging intensif untuk mengidentifikasi isu invalid parameter pada alur komunikasi antarmuka.",
      "Menambahkan logika validasi parameter input untuk mencegah kegagalan transmisi data pesanan pembelian.",
      "Meningkatkan efisiensi komunikasi antar-sistem dan memangkas waktu pemrosesan data pengadaan."
    ],
    tech: ["SAP ABAP", "Interface Integration", "PO & Invoice Processing", "Debugging", "Validation Logic"]
  },
  {
    id: "web-hospital-smartlink",
    category: "web",
    icon: "hospital",
    titleEn: "Hospital Smartlink Centralized Portal",
    titleId: "Platform Smartlink Terpusat RS Arafah Anwar Medika",
    subtitleEn: "Healthcare Web Platform • PostgreSQL • Dynamic CMS",
    subtitleId: "Portal Web Rumah Sakit • PostgreSQL • Panel Admin Dinamis",
    badgeEn: "Healthcare Web",
    badgeId: "Sistem Rumah Sakit",
    descEn: "Centralized smartlink web platform built for RS Arafah Anwar Medika to provide patients, visitors, and hospital staff with seamless, instantaneous access to healthcare services, clinic schedules, and hospital info.",
    descId: "Platform smartlink terpusat yang dirancang untuk mempermudah akses pasien dan staf medis terhadap layanan informasi dan alur pelayanan rumah sakit.",
    featuresEn: [
      "Analyzed clinical service workflows to design an intuitive frontend UI paired with a high-reliability backend API.",
      "Engineered a dynamic administrative portal empowering hospital IT operators to update department schedules and announcement banners on the fly.",
      "Connected to a secure PostgreSQL database with connection pooling for rapid page loads on mobile devices."
    ],
    featuresId: [
      "Menganalisis kebutuhan operasional rumah sakit dan merancang alur sistem terpadu pada frontend dan backend.",
      "Mengembangkan modul sistem administratif dinamis agar pihak rumah sakit dapat memperbarui data layanan secara mandiri.",
      "Menjaga keandalan koneksi database dan kecepatan rendering portal layanan di berbagai perangkat."
    ],
    tech: ["PostgreSQL", "Full-Stack Web", "Backend API", "Healthcare Portal", "Administrative Panel"]
  },
  {
    id: "web-employee-management",
    category: "web",
    icon: "users",
    titleEn: "Enterprise Employee Management & Shift System",
    titleId: "Sistem Manajemen Pegawai & Penjadwalan Shift",
    subtitleEn: "Full-Stack Web • HR Digitalization • Approval Workflows",
    subtitleId: "Aplikasi Web Full-Stack • Digitalisasi HR • Alur Persetujuan",
    badgeEn: "Enterprise Web",
    badgeId: "Web Enterprise",
    descEn: "Enterprise human resource platform built to digitize employee records, automate dynamic hospital shift schedules, and manage multi-tier leave and overtime approval workflows.",
    descId: "Sistem manajemen pegawai komprehensif untuk mendukung digitalisasi data kepegawaian, penjadwalan kerja, pembagian shift dinamis, pengajuan izin/cuti, serta alur approval lembur.",
    featuresEn: [
      "Designed an automated roster generator accounting for rotating shift requirements and maximum weekly hour regulations.",
      "Implemented multi-level authorization workflows where supervisors review, reject, or approve overtime and leave requests with instant notifications.",
      "Constructed a secure relational database schema enforcing referential integrity and strict Role-Based Access Control (RBAC)."
    ],
    featuresId: [
      "Menganalisis proses operasional HR dan merancang alur persetujuan (approval workflow) bertingkat.",
      "Mengimplementasikan modul pembagian shift dan kalender jadwal kerja otomatis.",
      "Menguji sistem secara menyeluruh untuk memastikan keandalan data kehadiran dan perhitungan lembur."
    ],
    tech: ["Web Architecture", "PostgreSQL/MySQL", "Approval Workflows", "Shift Engine", "Role-Based Access"]
  },
  {
    id: "web-db-manager",
    category: "web",
    icon: "database",
    titleEn: "Internal Database Manager & Monitor",
    titleId: "Aplikasi Internal Database Manager",
    subtitleEn: "Database Navigation • Schema Explorer • Security Layer",
    subtitleId: "Navigasi Database • Eksplorasi Skema • Keamanan Sistem",
    badgeEn: "Dev Tool",
    badgeId: "Alat Developer",
    descEn: "Proprietary internal database management dashboard created to assist software development and operations teams in exploring, navigating, and inspecting relational database assets safely.",
    descId: "Aplikasi manajemen basis data internal yang dibangun untuk membantu tim IT mengakses, menavigasi, dan memonitor sumber daya database organisasi secara efisien dan aman.",
    featuresEn: [
      "Provides intuitive visual exploration across databases, relational schemas, tables, constraints, and indexes.",
      "Embedded an authenticated communication protocol between UI clients and the backend database connection pool.",
      "Incorporated query execution profiling to catch slow-running transactions before deployment to production."
    ],
    featuresId: [
      "Menyediakan fitur navigasi visual untuk memantau database, skema, tabel, serta relasi data.",
      "Menerapkan mekanisme komunikasi aman antara frontend dan backend guna mencegah kebocoran data.",
      "Optimasi query pemantauan performa database untuk memastikan respon sistem yang cepat."
    ],
    tech: ["PostgreSQL", "Database Schema", "Security & Encryption", "Data Validation", "Query Optimization"]
  },
  {
    id: "web-salary-system",
    category: "web",
    icon: "wallet",
    titleEn: "Employee Salary Management Web App",
    titleId: "Aplikasi Web Penggajian Pegawai (Payroll)",
    subtitleEn: "PHP • MySQL • JavaScript • Automated Payroll Engine",
    subtitleId: "PHP • MySQL • JavaScript • Kalkulasi Gaji Otomatis",
    badgeEn: "Web Application",
    badgeId: "Aplikasi Web",
    descEn: "Web-based payroll system engineered to calculate gross salaries, deductions, tax withholdings, and bonus incentives, generating downloadable pay slips for enterprise staff.",
    descId: "Aplikasi berbasis web untuk mengelola proses penggajian (payroll) karyawan secara terstruktur, menghitung gaji pokok, tunjangan, potongan, dan mencetak slip gaji.",
    featuresEn: [
      "Designed a responsive user interface with vanilla HTML5, CSS3, and modern JavaScript.",
      "Built clean backend calculation logic in PHP coupled with a normalized MySQL database schema.",
      "Conducted extensive multi-scenario unit testing to confirm mathematical precision across tiered tax rates and overtime scales."
    ],
    featuresId: [
      "Merancang antarmuka pengguna responsif (UI/UX) dengan HTML, CSS, dan JavaScript.",
      "Membangun logika backend kalkulasi payroll menggunakan PHP dan basis data relasional MySQL.",
      "Melakukan pengujian berbagai skenario transaksi untuk menjamin akurasi perhitungan tanpa selisih."
    ],
    tech: ["PHP", "MySQL", "JavaScript", "HTML5 & CSS3", "Payroll Calculation"]
  },
  {
    id: "mobile-exbook",
    category: "mobile",
    icon: "book-open",
    titleEn: "ExBook Mobile Application",
    titleId: "Aplikasi Mobile ExBook (Flutter)",
    subtitleEn: "Flutter • Dart • REST API Integration • Clean Architecture",
    subtitleId: "Flutter • Dart • Integrasi REST API • Arsitektur Bersih",
    badgeEn: "Mobile App",
    badgeId: "Aplikasi Mobile",
    descEn: "Cross-platform mobile application developed using Flutter and Dart, connecting to remote RESTful endpoints to facilitate book catalog browsing, borrowing, and user profile management.",
    descId: "Aplikasi mobile multiplatform yang dikembangkan menggunakan Flutter dan Dart, terintegrasi dengan RESTful API untuk pengelolaan katalog buku dan data pengguna.",
    featuresEn: [
      "Integrated secure REST API endpoints for user authentication, book availability checks, and real-time transaction updates.",
      "Crafted an aesthetic, responsive UI adhering to modern Material Design guidelines.",
      "Produced technical architectural documentation outlining state management patterns and endpoint contracts."
    ],
    featuresId: [
      "Integrasi API untuk pertukaran data buku, sistem login pengguna, dan riwayat transaksi.",
      "Perancangan UI/UX yang modern, estetik, dan interaktif dengan respons navigasi mulus.",
      "Dokumentasi teknis lengkap mencakup arsitektur state management dan integrasi endpoint."
    ],
    tech: ["Flutter", "Dart", "REST API", "Mobile UI/UX", "Cross-Platform"]
  },
  {
    id: "mobile-fleksi-ride",
    category: "mobile",
    icon: "car",
    titleEn: "Fleksi Ride Mobile App (UI/UX Design)",
    titleId: "Desain UI/UX Aplikasi Mobile Fleksi Ride",
    subtitleEn: "Figma Prototype • Vehicle Rental Experience • User Research",
    subtitleId: "Prototipe Figma • Pengalaman Sewa Kendaraan • Riset Pengguna",
    badgeEn: "UI/UX & Product",
    badgeId: "UI/UX Produk",
    descEn: "End-to-end product design and interactive high-fidelity Figma prototype for an on-demand vehicle rental platform, backed by user research and market gap analysis.",
    descId: "Rancangan antarmuka dan pengalaman pengguna untuk platform rental kendaraan fleksibel, mencakup riset preferensi penyewa dan alur pemesanan mudah.",
    featuresEn: [
      "Conducted qualitative user interviews and competitive benchmarking within the vehicle rental sector.",
      "Built interactive high-fidelity prototypes showcasing seamless booking flows, vehicle filtering, and verification steps.",
      "Documented design tokens, components, and user persona journeys in a complete product design system."
    ],
    featuresId: [
      "Melakukan riset kebutuhan pengguna (user research) dan analisis kompetitor pasar penyewaan kendaraan.",
      "Membangun prototipe high-fidelity interaktif menggunakan Figma.",
      "Menyusun dokumentasi kebutuhan sistem dan laporan metodologi desain."
    ],
    tech: ["Figma", "UI/UX Research", "Wireframing", "Interactive Prototyping", "Design System"]
  },
  {
    id: "mobile-raih-juara",
    category: "mobile",
    icon: "trophy",
    titleEn: "Raih Juara App (UI/UX Prototype)",
    titleId: "Prototipe UI/UX Aplikasi Raih Juara",
    subtitleEn: "Figma • Student Competition Matcher • Usability Tested",
    subtitleId: "Figma • Platform Penemu Lomba Mahasiswa • Uji Usabilitas",
    badgeEn: "UI/UX & Product",
    badgeId: "UI/UX Produk",
    descEn: "Digital concept and interactive prototype aimed at helping high school and university students discover, bookmark, and register for national competitions matched to their specific talents.",
    descId: "Konsep dan prototipe aplikasi untuk mempermudah pelajar dan mahasiswa menemukan berbagai kompetisi akademik maupun non-akademik sesuai minat dan bakat.",
    featuresEn: [
      "Synthesized user interviews into actionable information architecture and category filters.",
      "Created intuitive search heuristics and a deadline notification badge system.",
      "Executed usability testing with student cohorts to refine button tap targets and navigation clarity."
    ],
    featuresId: [
      "Analisis kebutuhan audiens muda dalam mengakses informasi kompetisi terverifikasi.",
      "Perancangan antarmuka intuitif dengan sistem filter kategori dan bookmark lomba favorit.",
      "Pelaksanaan usability testing prototipe dan penyusunan rekomendasi perbaikan."
    ],
    tech: ["Figma", "User Journey", "Usability Testing", "UI Prototyping"]
  },
  {
    id: "mobile-irent",
    category: "mobile",
    icon: "repeat",
    titleEn: "iRent Mobile App (Concept & Strategy)",
    titleId: "Konsep & Strategi Bisnis Mobile App iRent",
    subtitleEn: "Figma • P2P Rental Platform • Business Analysis",
    subtitleId: "Figma • Platform Sewa Online • Analisis Model Bisnis",
    badgeEn: "UI/UX & Product",
    badgeId: "UI/UX Produk",
    descEn: "Innovative peer-to-peer item rental platform concept, unifying digital UI/UX prototyping with in-depth business model canvas, market segmentation, and revenue stream projections.",
    descId: "Inovasi platform persewaan barang online yang menyederhanakan alur sewa menyewa barang antara pemilik dan penyewa secara aman.",
    featuresEn: [
      "Conceptualized safe deposit escrow mechanisms and verified renter identity models.",
      "Designed an interactive Figma prototype featuring item search, booking calendars, and user ratings.",
      "Authored a comprehensive business proposal analyzing market share, customer acquisition costs, and monetization models."
    ],
    featuresId: [
      "Konseptualisasi alur pencarian, verifikasi identitas, dan penyewaan barang yang aman.",
      "Perancangan prototipe UI di Figma dengan hierarki visual yang jelas.",
      "Analisis bisnis menyeluruh: segmentasi pasar, strategi pemasaran, dan proyeksi model pendapatan."
    ],
    tech: ["Figma", "Business Analysis", "Market Segmentation", "UI/UX Design"]
  },
  {
    id: "desktop-cashier-java",
    category: "desktop",
    icon: "monitor",
    titleEn: "Simple Cashier POS (Java OOP)",
    titleId: "Sistem Kasir Desktop (Java OOP)",
    subtitleEn: "Java • Object-Oriented Architecture • Java Swing GUI",
    subtitleId: "Java • Arsitektur OOP • Antarmuka Java Swing GUI",
    badgeEn: "Desktop Software",
    badgeId: "Aplikasi Desktop",
    descEn: "Desktop point-of-sale cashier system strictly applying Object-Oriented Programming (OOP) paradigms (encapsulation, polymorphism, inheritance) with a custom Java Swing graphical interface.",
    descId: "Aplikasi kasir desktop yang menerapkan arsitektur Object-Oriented Programming (OOP) secara ketat dengan antarmuka grafis Java Swing.",
    featuresEn: [
      "Enforced separation of concerns across Model, View, and Controller OOP layers.",
      "Implemented item cataloging, automated tax calculations, stock deduction, and printed receipt formatting.",
      "Delivered a lightweight, dependable desktop application requiring no external runtime dependencies beyond the standard JRE."
    ],
    featuresId: [
      "Penerapan pilar OOP: encapsulation, inheritance, polymorphism, dan modular code.",
      "Fitur katalog produk, kalkulasi diskon/pajak otomatis, dan pembuatan struk belanja.",
      "Tampilan GUI intuitif dan mudah dioperasikan pengguna awam berbasis Java Swing."
    ],
    tech: ["Java", "OOP Principles", "Java Swing GUI", "Desktop Architecture"]
  },
  {
    id: "desktop-cashier-vb",
    category: "desktop",
    icon: "shopping-cart",
    titleEn: "Cashier Desktop Application (Visual Basic)",
    titleId: "Aplikasi Kasir Ritel (Visual Basic)",
    subtitleEn: "Visual Basic • Transaction Engine • Inventory Control",
    subtitleId: "Visual Basic • Pemrosesan Transaksi • Manajemen Stok",
    badgeEn: "Desktop Software",
    badgeId: "Aplikasi Desktop",
    descEn: "Complete retail cashier software built from scratch utilizing Visual Basic, designed for rapid counter transactions, inventory level management, and sales summaries.",
    descId: "Aplikasi kasir desktop yang dibangun dari awal menggunakan bahasa Visual Basic untuk transaksi ritel, inventaris, dan rekapitulasi penjualan.",
    featuresEn: [
      "Engineered straightforward cashier transaction workflows enabling fast barcode lookup and receipt printing.",
      "Linked with an embedded local database for stock level tracking and low-inventory warnings.",
      "Subjected to multi-scenario stress tests to verify application responsiveness during high customer checkout rushes."
    ],
    featuresId: [
      "Pencatatan data produk, kalkulasi transaksi cepat, dan rekonsiliasi kas harian.",
      "Manajemen inventaris stok barang dan database produk terintegrasi.",
      "Pengujian skenario multi-transaksi untuk memastikan keandalan sistem tanpa lag atau error."
    ],
    tech: ["Visual Basic", "Transaction Recording", "Inventory Management", "GUI"]
  },
  {
    id: "game-flappy-bird",
    category: "desktop",
    icon: "gamepad-2",
    titleEn: "Flappy Bird Web Game Engine",
    titleId: "Game Web Flappy Bird (Vanilla JS)",
    subtitleEn: "HTML5 Canvas • Pure JavaScript Physics • 60 FPS",
    subtitleId: "HTML5 Canvas • Fisika Game JavaScript Murni • Animasi CSS3",
    badgeEn: "Web Game",
    badgeId: "Game Web",
    descEn: "Faithful recreation of the iconic Flappy Bird arcade game coded entirely with pure vanilla JavaScript, HTML5 Canvas rendering, and procedural collision mathematics.",
    descId: "Implementasi ulang game Flappy Bird yang legendaris menggunakan teknologi web standar tanpa framework eksternal.",
    featuresEn: [
      "Implemented realistic game physics from scratch: gravity acceleration, tap impulse velocity, and bounding-box collision detection.",
      "Dynamic obstacle spacing algorithm with procedural difficulty scaling as score increments.",
      "Fluid 60 FPS animation loop with responsive canvas sizing adapting to mobile and desktop screens."
    ],
    featuresId: [
      "Kalkulasi fisika game murni (gravitasi, akselerasi, deteksi tabrakan pipa berbasis koordinat matriks).",
      "Penyesuaian tingkat kesulitan dinamis dan efek audio visual yang responsif di berbagai perangkat."
    ],
    tech: ["JavaScript (ES6)", "HTML5 Canvas", "CSS3 Animations", "Game Physics"]
  }
];

// 4. CURRENT STATE
let currentLang = localStorage.getItem("devita_lang") || "en";
let currentCategory = "all";
let searchQuery = "";

// 5. INITIALIZATION ON DOM READY
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initExperiences();
  initProjects();
  initMobileMenu();
  initNavScrollSpy();
  initModalListeners();
  initSpotlightCards();
  initSkillFilterIntegration();
  initClickSpark();
  initKeyboardShortcuts();
  initBackToTop();
  initScrollReveal();
  initStatCounter();
  lucide.createIcons();
});

// 6. THEME TOGGLE (Dark / Light with localStorage)
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("devita_theme");

  if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("devita_theme", isDark ? "dark" : "light");
      lucide.createIcons();
    });
  }
}

// 7. BILINGUAL LANGUAGE SYSTEM
function initLanguage() {
  const langToggleBtn = document.getElementById("lang-toggle");

  // Apply default or stored language
  applyLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const newLang = currentLang === "en" ? "id" : "en";
      setLanguage(newLang);
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("devita_lang", lang);
  applyLanguage(lang);
  renderExperiences();
  renderProjects();
  updateProjectCounts();
  lucide.createIcons();
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Update elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholder inputs with data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Update language toggle button text and indicator
  const langCurrentLabel = document.getElementById("lang-current-label");
  if (langCurrentLabel) {
    langCurrentLabel.textContent = lang === "en" ? "EN" : "ID";
  }

  const langFlag = document.getElementById("lang-flag");
  if (langFlag) {
    langFlag.textContent = lang === "en" ? "🇬🇧" : "🇮🇩";
  }

  document.documentElement.setAttribute("lang", lang);
}

// 8. WORK EXPERIENCE TIMELINE RENDERING
function initExperiences() {
  renderExperiences();
}

function renderExperiences() {
  const container = document.getElementById("experience-timeline");
  if (!container) return;

  container.innerHTML = "";
  const isEn = currentLang === "en";

  experiencesData.forEach((exp, idx) => {
    const item = document.createElement("div");
    item.className = "relative pl-6 sm:pl-8 group";

    // Pin indicator
    const pinClass = exp.isCurrent
      ? "bg-emerald-500 animate-pulse border-4 border-white dark:border-slate-950"
      : "bg-brand-500 border-4 border-white dark:border-slate-950";

    const cardBorder = exp.isCurrent
      ? "border-2 border-emerald-500/50 dark:border-emerald-500/40 shadow-lg"
      : "border border-slate-200/80 dark:border-slate-800/80 shadow-sm";

    const currentBadge = exp.isCurrent
      ? `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 uppercase tracking-wide border border-emerald-300 dark:border-emerald-700">
           <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
           ${isEn ? exp.badgeEn : exp.badgeId}
         </span>`
      : "";

    const bullets = isEn ? exp.bulletsEn : exp.bulletsId;
    const bulletsHtml = bullets.map(b => `<li>${b}</li>`).join("");
    const tagsHtml = exp.tags.map(t => `<span class="skill-tag">${t}</span>`).join("");

    item.innerHTML = `
      <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ${pinClass} group-hover:scale-125 transition-transform"></div>
      
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 ${cardBorder} hover:shadow-md transition-all">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2.5">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">${exp.company}</h3>
            ${currentBadge}
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-mono font-semibold ${exp.isCurrent ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}">
            ${isEn ? exp.periodEn : exp.periodId}
          </span>
        </div>

        <div class="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4 flex items-center gap-1.5">
          <i data-lucide="${exp.isCurrent ? 'cpu' : 'briefcase'}" class="w-4 h-4"></i>
          <span>${isEn ? exp.roleEn : exp.roleId}</span>
        </div>

        <p class="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
          ${isEn ? exp.descEn : exp.descId}
        </p>

        <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-outside ml-4 mb-4 leading-relaxed">
          ${bulletsHtml}
        </ul>

        <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
          ${tagsHtml}
        </div>
      </div>
    `;

    container.appendChild(item);
  });
}

// 9. PROJECT SHOWCASE, SEARCH & FILTER
function initProjects() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("project-search");

  updateProjectCounts();
  renderProjects();

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active-filter"));
      btn.classList.add("active-filter");
      currentCategory = btn.getAttribute("data-filter");
      renderProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }
}

function updateProjectCounts() {
  const counts = {
    all: projectsData.length,
    sap: projectsData.filter(p => p.category === "sap").length,
    web: projectsData.filter(p => p.category === "web").length,
    mobile: projectsData.filter(p => p.category === "mobile").length,
    desktop: projectsData.filter(p => p.category === "desktop").length,
  };

  if (document.getElementById("count-all")) document.getElementById("count-all").textContent = counts.all;
  if (document.getElementById("count-sap")) document.getElementById("count-sap").textContent = counts.sap;
  if (document.getElementById("count-web")) document.getElementById("count-web").textContent = counts.web;
  if (document.getElementById("count-mobile")) document.getElementById("count-mobile").textContent = counts.mobile;
  if (document.getElementById("count-desktop")) document.getElementById("count-desktop").textContent = counts.desktop;
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";
  const isEn = currentLang === "en";

  // Filter by category
  let list = currentCategory === "all"
    ? projectsData
    : projectsData.filter(p => p.category === currentCategory);

  // Filter by search query
  if (searchQuery) {
    list = list.filter(p => {
      const title = (isEn ? p.titleEn : p.titleId).toLowerCase();
      const subtitle = (isEn ? p.subtitleEn : p.subtitleId).toLowerCase();
      const desc = (isEn ? p.descEn : p.descId).toLowerCase();
      const tech = p.tech.join(" ").toLowerCase();
      return title.includes(searchQuery) || subtitle.includes(searchQuery) || desc.includes(searchQuery) || tech.includes(searchQuery);
    });
  }

  // Handle empty state
  if (list.length === 0) {
    const emptyMsg = translations[currentLang].no_projects_found;
    grid.innerHTML = `
      <div class="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 px-4">
        <div class="w-14 h-14 mx-auto mb-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center">
          <i data-lucide="search-x" class="w-6 h-6"></i>
        </div>
        <p class="text-sm font-medium text-slate-500 dark:text-slate-400">${emptyMsg}</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  list.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card spotlight-card p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between hover:border-brand-500/60 dark:hover:border-brand-500/60 transition-all";

    // Category Badge Styling
    let badgeClass = "bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800";
    if (project.category === "web") {
      badgeClass = "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800";
    } else if (project.category === "mobile") {
      badgeClass = "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800";
    } else if (project.category === "desktop") {
      badgeClass = "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700";
    }

    const title = isEn ? project.titleEn : project.titleId;
    const subtitle = isEn ? project.subtitleEn : project.subtitleId;
    const desc = isEn ? project.descEn : project.descId;
    const badgeText = isEn ? project.badgeEn : project.badgeId;
    const ctaText = translations[currentLang].btn_view_details;

    const techPills = project.tech.slice(0, 4).map(t => 
      `<span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300">${t}</span>`
    ).join("");

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${badgeClass}">
            ${badgeText}
          </span>
          <div class="text-slate-400 dark:text-slate-500">
            <i data-lucide="${project.icon || 'folder'}" class="w-4 h-4"></i>
          </div>
        </div>

        <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-1">
          ${title}
        </h3>
        
        <p class="text-xs text-brand-600 dark:text-brand-400 font-mono mb-3">
          ${subtitle}
        </p>

        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
          ${desc}
        </p>
      </div>

      <div>
        <div class="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
          ${techPills}
          ${project.tech.length > 4 ? `<span class="text-[10px] font-mono text-slate-400 self-center">+${project.tech.length - 4}</span>` : ""}
        </div>

        <button onclick="openProjectModal('${project.id}')" class="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-700 dark:bg-slate-800/70 dark:hover:bg-slate-800 dark:text-slate-200 dark:hover:text-brand-300 text-xs font-semibold transition-all">
          <span>${ctaText}</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  initSpotlightCards();
  lucide.createIcons();
}

// 10. INTERACTIVE PROJECT DETAILS MODAL
function initModalListeners() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");
  const closeFooterBtn = document.getElementById("modal-close-btn");

  const closeModal = () => {
    modal.classList.remove("active");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (closeFooterBtn) closeFooterBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const isEn = currentLang === "en";
  const modal = document.getElementById("project-modal");
  const modalBadge = document.getElementById("modal-badge");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalDesc = document.getElementById("modal-desc");
  const modalFeatures = document.getElementById("modal-features");
  const modalTech = document.getElementById("modal-tech");

  modalBadge.textContent = isEn ? project.badgeEn : project.badgeId;
  modalTitle.textContent = isEn ? project.titleEn : project.titleId;
  modalSubtitle.textContent = isEn ? project.subtitleEn : project.subtitleId;
  modalDesc.textContent = isEn ? project.descEn : project.descId;

  const features = isEn ? project.featuresEn : project.featuresId;
  modalFeatures.innerHTML = features.map(f => `<li>${f}</li>`).join("");
  modalTech.innerHTML = project.tech.map(t => `<span class="skill-tag">${t}</span>`).join("");

  modal.classList.add("active");
  lucide.createIcons();
}

// 11. CLIPBOARD COPY UTILITY WITH TOAST NOTIFICATION
function copyToClipboard(text, type) {
  const isEn = currentLang === "en";
  let message = "";
  if (type === "email") {
    message = isEn ? translations.en.toast_copied_email : translations.id.toast_copied_email;
  } else if (type === "phone") {
    message = isEn ? translations.en.toast_copied_phone : translations.id.toast_copied_phone;
  } else {
    message = isEn ? "Copied to clipboard!" : "Tersalin ke clipboard!";
  }

  navigator.clipboard.writeText(text).then(() => {
    showToast(message);
  }).catch(() => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showToast(message);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  if (!toast) return;

  toastMessage.textContent = message;
  toast.classList.remove("translate-y-24", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.add("translate-y-24", "opacity-0");
    toast.classList.remove("translate-y-0", "opacity-100");
  }, 2800);
}

// 12. ACTIVE NAVIGATION SCROLL SPY
function initNavScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// 13. MOBILE MENU TOGGLE
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

// 14. CARD SPOTLIGHT EFFECT (Linear / Vercel style radial glow that tracks mouse)
function initSpotlightCards() {
  const cards = document.querySelectorAll(".spotlight-card, .project-card, #education .p-6, #organization .p-6, #skills .p-6");
  cards.forEach(card => {
    if (!card.classList.contains("spotlight-card")) {
      card.classList.add("spotlight-card");
    }
    card.removeEventListener("mousemove", handleSpotlight);
    card.addEventListener("mousemove", handleSpotlight);
  });
}

function handleSpotlight(e) {
  const rect = this.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  this.style.setProperty("--mouse-x", `${x}px`);
  this.style.setProperty("--mouse-y", `${y}px`);
}

// 15. SKILL TAG CLICK TO FILTER PROJECTS
function initSkillFilterIntegration() {
  document.addEventListener("click", (e) => {
    const tag = e.target.closest(".skill-tag");
    if (!tag) return;
    if (tag.closest("#project-modal")) return;

    const skill = tag.textContent.trim();
    if (skill.includes("English") || skill.includes("Bahasa")) return;

    const searchInput = document.getElementById("project-search");
    const projectsSection = document.getElementById("projects");

    if (searchInput && projectsSection) {
      currentCategory = "all";
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active-filter"));
      const allBtn = document.querySelector('[data-filter="all"]');
      if (allBtn) allBtn.classList.add("active-filter");

      searchInput.value = skill;
      searchQuery = skill.toLowerCase();
      renderProjects();

      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      const isEn = currentLang === "en";
      showToast(isEn ? `Showing projects matching "${skill}"` : `Menampilkan proyek dengan teknologi "${skill}"`);
    }
  });
}

// 16. SUBTLE TACTILE CLICK SPARK EFFECT (Canvas-based)
function initClickSpark() {
  const canvas = document.getElementById("click-spark-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let sparks = [];
  let animId = null;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  class Spark {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.angle = Math.random() * Math.PI * 2;
      this.speed = Math.random() * 2.8 + 1.2;
      this.radius = Math.random() * 1.8 + 0.9;
      this.alpha = 1;
      this.decay = Math.random() * 0.04 + 0.03;
    }
    update() {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      this.speed *= 0.94;
      this.alpha -= this.decay;
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function renderLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparks = sparks.filter(s => s.alpha > 0);
    sparks.forEach(s => {
      s.update();
      s.draw();
    });
    if (sparks.length > 0) {
      animId = requestAnimationFrame(renderLoop);
    } else {
      animId = null;
    }
  }

  document.addEventListener("pointerdown", (e) => {
    // Only fire on interactive controls to maintain subtlety and elegant feel
    const interactive = e.target.closest("button, a, .project-card, .skill-tag, .stat-card, input");
    if (!interactive) return;

    const isDark = document.documentElement.classList.contains("dark");
    const palette = isDark 
      ? ["#2dd4bf", "#5eead4", "#818cf8", "#38bdf8", "#34d399"] 
      : ["#0d9488", "#14b8a6", "#6366f1", "#0284c7", "#10b981"];

    const count = 7;
    for (let i = 0; i < count; i++) {
      const color = palette[Math.floor(Math.random() * palette.length)];
      sparks.push(new Spark(e.clientX, e.clientY, color));
    }
    if (!animId) {
      animId = requestAnimationFrame(renderLoop);
    }
  });
}

// 17. DEVELOPER KEYBOARD SHORTCUTS
function initKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea") return;

    // Press '/' to jump to project search
    if (e.key === "/") {
      e.preventDefault();
      const input = document.getElementById("project-search");
      if (input) {
        input.focus();
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    // Press 'T' to toggle theme
    if (e.key.toLowerCase() === "t") {
      const themeToggle = document.getElementById("theme-toggle");
      if (themeToggle) themeToggle.click();
    }

    // Press 'L' to toggle language
    if (e.key.toLowerCase() === "l") {
      const langToggle = document.getElementById("lang-toggle");
      if (langToggle) langToggle.click();
    }
  });
}

// 18. FLOATING BACK TO TOP BUTTON
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
      btn.classList.add("opacity-100", "pointer-events-auto", "translate-y-0");
    } else {
      btn.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
      btn.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 19. SCROLL REVEAL (SUBTLE STAGGERED FADE-UP)
function initScrollReveal() {
  const elements = document.querySelectorAll("#education .p-6, #experience-timeline > div, #organization .p-6, #skills .p-6, #projects-grid > div");
  elements.forEach(el => el.classList.add("reveal-item"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.08
  });

  elements.forEach(el => observer.observe(el));
}

// 20. STAT COUNTER ANIMATION
function initStatCounter() {
  const gpaEl = document.getElementById("stat-gpa-val");
  if (!gpaEl) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      const target = 3.81;
      const duration = 1200;
      const start = performance.now();

      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const val = (ease * target).toFixed(2);
        gpaEl.textContent = val;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          gpaEl.textContent = "3.81";
        }
      }
      requestAnimationFrame(step);
      observer.disconnect();
    }
  }, { threshold: 0.5 });

  observer.observe(gpaEl);
}
