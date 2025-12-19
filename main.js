const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOptions,
  delay: 500,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 500,
});

// price container
ScrollReveal().reveal(".price__card", {
  ...scrollRevealOptions,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const langData = {
    id: {
      nav_home: "Beranda",
      nav_about: "Tentang",
      nav_service: "Layanan",
      nav_price: "Harga",
      nav_client: "Klien",
      nav_contact: "Hubungi Kami",

      header_title: "Kami Berkualitas & Profesional",

      banner_h4: "Kepuasan Dijamin atau Uang Kembali.",
      banner2_h4: "Merawat Mobil Anda Seperti yang Anda Inginkan.",

      about_sub: "SIAPA KAMI",
      about_title: "Kami Memiliki 25 Tahun Pengalaman",
      about_desc: "Dengan pengalaman lebih dari 25 tahun...",
      about2_desc:
        "Dengan warisan yang kaya selama 25 tahun, komitmen kami terhadap keunggulan dalam pelayanan perawatan mobil tetap kokoh.",

      button_about: "Selengkapnya",

      service_sub: "MENGAPA KAMI",
      service_title: "Layanan Mobil Terbaik",
      service_desc:
        "Percayakan kepada kami untuk menjaga mobil anda tetap prima.",

      srv1_title: "Pelurusan Ban",
      srv1_desc: "Mengemudi lebih mulus dan ban lebih awet.",
      srv2_title: "Sistem Kelistrikan",
      srv2_desc: "Perbaikan sistem kelistrikan mobil.",
      srv3_title: "Servis Sistem",
      srv3_desc: "Pengecekan detail untuk kondisi optimal.",
      srv4_title: "Diagnostik Mesin",
      srv4_desc: "Analisa kondisi mesin Anda secara profesional.",

      cts1_subheader: "PENYESUAIAN KUSTOM KAMI",
      cts2_header: "Pelayanan Mobil dengan Kualitas Kerja Unggul",
      cts3_deskripsi:
        "Tim teknisi berpengalaman kami memberikan pelayanan terbaik dan profesional.",

      grid1_desc: "Total Projek",
      grid2_desc: "Transparansi",
      grid3_desc: "Projek Selesai",
      grid4_desc: "Penghargaan Didapatkan",

      price_sub: "PAKET TERBAIK",
      price_title: "Paket Harga Kami",
      price_desc:
        "Kami menawarkan berbagai pilihan harga yang terjangkau dan fleksibel.",

      price_sub: "PAKET TERBAIK",
      price_title: "Paket Harga Kami",
      price_desc:
        "Kami menawarkan berbagai pilihan harga yang terjangkau dan fleksibel.",

      price_basic: "Paket Basic",
      price_basic_1: "Cuci Mobil",
      price_basic_2: "Cek Oli",
      price_basic_3: "Cek Tekanan Ban",

      price_standard: "Paket Standard",
      price_standard_1: "Cuci & Wax",
      price_standard_2: "Ganti Oli",
      price_standard_3: "Tune Up Ringan",
      price_standard_4: "Cek Rem",

      price_premium: "Paket Premium",
      price_premium_1: "Full Service",
      price_premium_2: "Detailing Interior",
      price_premium_3: "Diagnostik Mesin",
      price_premium_4: "Garansi Servis",

      price_btn: "Pilih Paket",
      price_recommend: "Rekomendasi",

      contact_sub: "HUBUNGI KAMI",
      contact_title: "Bayangkan Mobil Anda Kembali Baru",
      contact_desc: "Rasakan mobil Anda kembali seperti baru.",
      contact_btn: "Hubungi Kami",

      ttm1_subheader: "ULASAN PELANGGAN",
      ttm2_header: "100% Direkomendasikan oleh Pelanggan",

      ttm_name1: "Andi Pratama",
      ttm_role1: "Pelanggan",
      ttm_text1:
        "Pelayanan sangat profesional dan cepat. Mobil terasa seperti baru.",

      ttm_name2: "Siti Rahma",
      ttm_role2: "Pelanggan",
      ttm_text2: "Teknisi ramah, penjelasan jelas, dan hasil servis memuaskan.",

      ttm_name3: "Budi Santoso",
      ttm_role3: "Pelanggan",
      ttm_text3:
        "Sangat puas dengan kualitas pelayanan. Pasti akan kembali lagi.",

      fb_sub: "KRITIK & SARAN",
      fb_title: "Bantu Kami Menjadi Lebih Baik",
      fb_desc:
        "Silakan isi kuesioner singkat berikut untuk memberikan kritik dan saran Anda.",

      fb_name_label: "Nama",
      fb_name_ph: "Masukkan nama Anda",

      fb_email_label: "Type Mobil Yang Diservice",
      fb_email_ph: "Masukkan Type Mobil Anda",

      fb_rating_label: "Penilaian Layanan",
      fb_rating_opt0: "-- Pilih Penilaian --",
      fb_rating_opt5: "Sangat Puas",
      fb_rating_opt4: "Puas",
      fb_rating_opt3: "Cukup",
      fb_rating_opt2: "Kurang Puas",
      fb_rating_opt1: "Tidak Puas",

      fb_msg_label: "Kritik & Saran",
      fb_msg_ph: "Tulis kritik dan saran Anda di sini...",

      fb_submit: "Kirim",

      about_title: "Kami Memiliki 25 Tahun Pengalaman",
      about_desc_1:
        "Dengan pengalaman lebih dari 25 tahun di bidang perawatan dan layanan otomotif, kami telah menjadi mitra terpercaya bagi banyak pelanggan dalam menjaga performa dan kenyamanan kendaraan mereka. Kepercayaan ini dibangun melalui konsistensi pelayanan, hasil kerja yang rapi, serta komitmen kami terhadap kualitas terbaik.",

      about_desc_2:
        "Dengan warisan yang kaya selama 25 tahun, komitmen kami terhadap keunggulan dalam pelayanan perawatan mobil tetap kokoh. Didukung oleh tim teknisi yang berpengalaman dan profesional, kami selalu memastikan setiap kendaraan mendapatkan penanganan terbaik sesuai standar tinggi yang kami terapkan.",

      about_desc_3:
        "Kami memahami bahwa setiap kendaraan memiliki karakteristik dan kebutuhan yang berbeda. Oleh karena itu, kami selalu melakukan pemeriksaan secara menyeluruh sebelum memberikan rekomendasi layanan, sehingga solusi yang kami berikan benar-benar sesuai dengan kondisi kendaraan dan kebutuhan pelanggan.",

      about_desc_4:
        "Dalam menghadapi perkembangan teknologi otomotif yang semakin pesat, kami terus berinvestasi pada peralatan modern serta pelatihan berkelanjutan bagi teknisi kami. Hal ini memungkinkan kami untuk menangani berbagai jenis kendaraan, mulai dari mobil konvensional hingga kendaraan dengan sistem teknologi terbaru.",

      about_desc_5:
        "Kepuasan pelanggan merupakan prioritas utama kami. Kami percaya bahwa pelayanan yang jujur, transparan, dan profesional akan menciptakan hubungan jangka panjang dengan pelanggan. Oleh karena itu, kami berkomitmen untuk selalu memberikan pengalaman layanan terbaik di setiap kunjungan.",

      vision_title: "Visi Kami",
      vision_desc:
        "Menjadi penyedia layanan perawatan mobil terpercaya yang mengutamakan kualitas, keamanan, dan kepuasan pelanggan.",

      mission_title: "Misi Kami",
      mission_1: "Memberikan pelayanan profesional dan berkualitas tinggi",
      mission_2: "Menggunakan teknologi dan peralatan modern",
      mission_3: "Menjaga kepercayaan pelanggan melalui transparansi",
      mission_4: "Mengembangkan sumber daya manusia yang kompeten",

      footer_about: "Dengan pengalaman 25 tahun, kami selalu menjaga kualitas.",
      footer_header: "Layanan Kami",
      footer_link1: "Mekanik berpengalaman",
      footer_link2: "Pemeliharaan Rutin",
      footer_link3: "Informasi Kontak",
      footer_link4: "Telepon: +62 813-8707-0518",
      footer_link5: "Email: TugasWeb1@gmail.com",

      wa_title: "Pelurusan Ban (Wheel Alignment)",
      wa_intro:
        "Pelurusan ban adalah proses penyesuaian sudut roda mobil agar sesuai dengan spesifikasi pabrik. Tujuannya adalah memastikan ban menapak sempurna di jalan saat mobil bergerak lurus.",
      wa_benefits_title: "Manfaat Pelurusan Ban:",
      wa_benefit1:
        "Mengemudi Lebih Mulus – Mobil akan lebih stabil, tidak terasa miring atau “tarik ke kiri/kanan” saat dikendarai.",
      wa_benefit2:
        "Ban Lebih Awet – Karena ban menapak rata, keausan ban menjadi lebih merata sehingga umur pakainya lebih panjang.",
      wa_benefit3:
        "Hemat Bahan Bakar – Roda yang lurus membuat mesin bekerja lebih efisien, sehingga konsumsi bahan bakar bisa lebih hemat.",
      wa_benefit4:
        "Keselamatan Meningkat – Mobil yang stabil lebih mudah dikendalikan, terutama saat menikung atau rem mendadak.",
      wa_process_title: "Proses Pelurusan:",
      wa_process1: "Mekanik memeriksa sudut roda depan dan belakang.",
      wa_process2:
        "Disesuaikan dengan alat khusus sehingga roda lurus ke arah yang benar.",
      wa_process3:
        "Mobil diuji di jalan atau mesin simulasi untuk memastikan setelan tepat.",

      es_title: "Sistem Kelistrikan Mobil",
      es_intro:
        "Sistem kelistrikan mobil merupakan komponen vital yang berfungsi mengatur dan mendukung hampir seluruh fitur kendaraan, mulai dari proses starter, pengapian, penerangan, hingga sistem keamanan dan kenyamanan.",

      es_desc_1:
        "Gangguan kecil pada sistem kelistrikan dapat menyebabkan mobil sulit dihidupkan, performa menurun, bahkan mogok di jalan. Oleh karena itu, pemeriksaan dan perbaikan sistem kelistrikan perlu dilakukan secara menyeluruh dan profesional.",

      es_desc_2:
        "Layanan perbaikan sistem kelistrikan mobil meliputi pemeriksaan dan penanganan berbagai komponen seperti aki, alternator, starter, kabel, sekring, relay, sensor, hingga sistem elektronik modern.",

      es_scope_title: "Ruang Lingkup Layanan",

      es_scope_1_title: "Pemeriksaan Aki & Sistem Pengisian",
      es_scope_1_desc:
        "Mengecek kondisi aki, tegangan, arus listrik, serta kinerja alternator untuk memastikan daya listrik stabil dan pengisian berjalan optimal.",

      es_scope_2_title: "Perbaikan Starter & Pengapian",
      es_scope_2_desc:
        "Menangani starter yang lemah atau tidak berfungsi serta memastikan sistem pengapian bekerja normal agar mesin mudah dihidupkan.",

      es_scope_3_title: "Diagnosa Kabel & Jalur Kelistrikan",
      es_scope_3_desc:
        "Menelusuri kabel putus, aus, korsleting, atau sambungan longgar yang dapat memicu gangguan listrik dan kerusakan lanjutan.",

      es_scope_4_title: "Pengecekan Lampu & Aksesori",
      es_scope_4_desc:
        "Memperbaiki lampu utama, lampu rem, sein, klakson, power window, wiper, audio, dan aksesori listrik lainnya agar berfungsi optimal.",

      es_scope_5_title: "Diagnosa Sistem Elektronik & Sensor",
      es_scope_5_desc:
        "Menggunakan alat diagnostik modern untuk membaca kesalahan pada ECU, sensor, dan modul elektronik sehingga perbaikan lebih akurat.",

      es_benefits_title: "Manfaat Layanan Sistem Kelistrikan",

      es_benefit_1: "Mobil lebih mudah dihidupkan dan tidak mudah mogok",
      es_benefit_2: "Kinerja mesin dan fitur elektronik tetap optimal",
      es_benefit_3: "Mencegah kerusakan lanjutan akibat korsleting listrik",
      es_benefit_4: "Meningkatkan kenyamanan dan keselamatan berkendara",

      es_closing:
        "Dengan perawatan dan perbaikan sistem kelistrikan yang tepat, mobil akan berfungsi lebih stabil, aman, dan andal dalam berbagai kondisi penggunaan, baik untuk perjalanan harian maupun jarak jauh.",

      css_title: "Servis Sistem Mobil",
      css_intro:
        "Servis sistem mobil adalah layanan perawatan menyeluruh yang bertujuan untuk memastikan seluruh sistem utama kendaraan bekerja secara optimal, aman, dan sesuai standar pabrikan.",

      css_desc_1:
        "Servis ini tidak hanya berfokus pada satu komponen tertentu, tetapi mencakup pemeriksaan detail berbagai sistem penting yang saling terhubung dalam mendukung performa kendaraan secara keseluruhan.",
      css_desc_2:
        "Melalui pengecekan yang teliti dan terstruktur, potensi kerusakan dapat dideteksi sejak dini sehingga dapat mencegah masalah yang lebih besar, biaya perbaikan yang tinggi, serta risiko gangguan saat berkendara.",

      css_scope_title: "Ruang Lingkup Pengecekan Servis Sistem",

      css_scope_1_title: "Sistem Mesin & Performa",
      css_scope_1_desc:
        "Pemeriksaan suara mesin, getaran, kebocoran oli, dan kinerja pembakaran untuk memastikan mesin bekerja halus, responsif, dan efisien.",

      css_scope_2_title: "Sistem Pelumasan & Cairan",
      css_scope_2_desc:
        "Pengecekan oli mesin, oli transmisi, minyak rem, air radiator, dan cairan lainnya agar volumenya cukup dan kualitasnya masih layak pakai.",

      css_scope_3_title: "Sistem Pendingin",
      css_scope_3_desc:
        "Memastikan radiator, kipas pendingin, selang, dan thermostat bekerja dengan baik agar suhu mesin tetap stabil.",

      css_scope_4_title: "Sistem Rem & Keselamatan",
      css_scope_4_desc:
        "Pemeriksaan kampas rem, cakram, minyak rem, dan respon pengereman untuk menjamin keselamatan berkendara.",

      css_scope_5_title: "Sistem Kelistrikan & Elektronik",
      css_scope_5_desc:
        "Mengecek aki, sistem pengisian, lampu, sensor, dan modul elektronik agar kendaraan berfungsi normal.",

      css_scope_6_title: "Sistem Suspensi & Kemudi",
      css_scope_6_desc:
        "Pemeriksaan suspensi dan kemudi untuk menjaga kestabilan serta kenyamanan berkendara.",

      css_scope_7_title: "Sistem Ban & Kaki-Kaki",
      css_scope_7_desc:
        "Pengecekan kondisi ban, tekanan udara, dan keseimbangan roda demi keamanan berkendara.",

      css_benefits_title: "Manfaat Servis Sistem Mobil",
      css_benefit_1: "Menjaga kondisi mobil tetap prima dan siap digunakan",
      css_benefit_2: "Mendeteksi kerusakan sejak dini",
      css_benefit_3: "Meningkatkan umur pakai komponen",
      css_benefit_4: "Memberikan kenyamanan dan rasa aman",
      css_benefit_5: "Menjaga nilai jual mobil",

      css_closing:
        "Servis sistem mobil sangat dianjurkan dilakukan secara berkala agar kendaraan selalu berada dalam kondisi optimal.",

      diagnostic_title: "Diagnostik Mesin",
      diagnostic_intro:
        "Diagnostik mesin merupakan layanan analisa mendalam untuk mengetahui kondisi sebenarnya dari mesin kendaraan tanpa harus langsung membongkar komponen.",

      diagnostic_desc_1:
        "Proses ini bertujuan mengidentifikasi sumber masalah secara akurat, baik yang sudah terasa oleh pengemudi maupun gangguan tersembunyi yang belum menimbulkan gejala serius.",

      diagnostic_desc_2:
        "Mesin diperiksa dari berbagai aspek, mulai dari performa, respon kerja, hingga data elektronik yang dihasilkan oleh sistem kontrol mesin dengan peralatan diagnostik modern.",

      diagnostic_process: "Proses Analisa Diagnostik",

      process_1_title: "Pembacaan Data Mesin",
      process_1_desc:
        "Sistem komputer kendaraan dipindai untuk membaca kode kesalahan, parameter kerja mesin, serta data sensor yang mempengaruhi efisiensi pembakaran.",

      process_2_title: "Evaluasi Performa Mesin",
      process_2_desc:
        "Analisa dilakukan berdasarkan suara mesin, getaran, respon akselerasi, konsumsi bahan bakar, serta kestabilan putaran mesin.",

      process_3_title: "Pemeriksaan Sistem Pendukung",
      process_3_desc:
        "Meliputi sistem bahan bakar, udara, pengapian, pendinginan, dan emisi agar seluruh sistem bekerja selaras.",

      process_4_title: "Identifikasi Potensi Kerusakan",
      process_4_desc:
        "Mendeteksi komponen yang mulai melemah sebelum menimbulkan kerusakan serius di kemudian hari.",

      process_5_title: "Rekomendasi Teknis Profesional",
      process_5_desc:
        "Hasil diagnostik disajikan dalam laporan kondisi mesin beserta saran perawatan atau perbaikan sesuai tingkat urgensi.",

      diagnostic_benefits: "Nilai Tambah Layanan Diagnostik Mesin",

      benefit_1:
        "Menghindari perbaikan yang tidak perlu dan pembongkaran berlebihan",
      benefit_2:
        "Menghemat waktu dan biaya karena sumber masalah teridentifikasi jelas",
      benefit_3: "Menjaga performa mesin tetap optimal dan stabil",
      benefit_4:
        "Membantu pemilik kendaraan memahami kondisi mesin secara objektif",

      diagnostic_closing:
        "Dengan layanan diagnostik mesin yang dilakukan secara profesional, pemilik kendaraan memperoleh gambaran nyata mengenai kesehatan mesin sehingga keputusan perawatan dapat dilakukan secara tepat dan terencana.",
    },
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_service: "Service",
      nav_price: "Price",
      nav_client: "Client",
      nav_contact: "Contact Us",

      header_title: "We Are Qualified & Professional",

      banner_h4: "Satisfaction Guaranteed or Your Money Back.",
      banner2_h4: "Take Care of Your Car the Way You Want.",

      about_sub: "WHO WE ARE",
      about_title: "We Have 25 Years Of Experience",
      about_desc: "With over 25 years of experience...",
      about2_desc:
        "With a rich 25-year legacy, our commitment to excellence in car care remains strong.",

      button_about: "Read More",

      service_sub: "WHY CHOOSE US",
      service_title: "Great Car Service",
      service_desc: "Trust us to keep your automobile running well.",

      srv1_title: "Wheel Alignment",
      srv1_desc: "Smoother rides and longer tire life.",
      srv2_title: "Electrical System",
      srv2_desc: "Peak electrical performance.",
      srv3_title: "System Service",
      srv3_desc: "Detailed diagnostics for best condition.",
      srv4_title: "Engine Diagnostics",
      srv4_desc: "Understand your car's performance.",

      cts1_subheader: "OUR CUSTOM SERVICES",
      cts2_header: "Car Services With Superior Work Quality",
      cts3_deskripsi:
        "Our dedicated team of experienced technicians provides high-quality service.",
      price_sub: "BEST PACKAGES",
      price_title: "Our Pricing Plans",
      price_desc: "We offer affordable and flexible pricing options.",

      price_basic: "Basic Package",
      price_basic_1: "Car Wash",
      price_basic_2: "Oil Check",
      price_basic_3: "Tire Pressure Check",

      price_standard: "Standard Package",
      price_standard_1: "Wash & Wax",
      price_standard_2: "Oil Change",
      price_standard_3: "Light Tune Up",
      price_standard_4: "Brake Check",

      price_premium: "Premium Package",
      price_premium_1: "Full Service",
      price_premium_2: "Interior Detailing",
      price_premium_3: "Engine Diagnostics",
      price_premium_4: "Service Warranty",

      price_btn: "Choose Plan",
      price_recommend: "Recommended",

      grid1_desc: "Total Projects",
      grid2_desc: "Transparency",
      grid3_desc: "Completed Projects",
      grid4_desc: "Awards Won",

      price_sub: "BEST PACKAGES",
      price_title: "Our Pricing Plans",
      price_desc: "We offer affordable and flexible pricing options.",

      contact_sub: "CONTACT US",
      contact_title: "Imagine Your Car Feeling New Again",
      contact_desc: "Your car will feel brand new.",
      contact_btn: "Contact Us",

      ttm1_subheader: "CUSTOMER REVIEWS",
      ttm2_header: "100% Recommended by Customers",

      ttm_name1: "Andi Pratama",
      ttm_role1: "Customer",
      ttm_text1: "Very professional and fast service. My car feels brand new.",

      ttm_name2: "Siti Rahma",
      ttm_role2: "Customer",
      ttm_text2:
        "Friendly technicians with clear explanations and great results.",

      ttm_name3: "Budi Santoso",
      ttm_role3: "Customer",
      ttm_text3:
        "Very satisfied with the service quality. I will definitely return.",

      fb_sub: "FEEDBACK",
      fb_title: "Help Us Improve",
      fb_desc:
        "Please fill out the short questionnaire below to share your feedback.",

      fb_name_label: "Name",
      fb_name_ph: "Enter your name",

      fb_email_label: "type of car serviced",
      fb_email_ph: "Enter Your Car Type",

      fb_rating_label: "Service Rating",
      fb_rating_opt0: "-- Select Rating --",
      fb_rating_opt5: "Very Satisfied",
      fb_rating_opt4: "Satisfied",
      fb_rating_opt3: "Fair",
      fb_rating_opt2: "Dissatisfied",
      fb_rating_opt1: "Very Dissatisfied",

      fb_msg_label: "Feedback",
      fb_msg_ph: "Write your feedback here...",

      fb_submit: "Submit",

      about_title: "We Have 25 Years of Experience",
      about_desc_1:
        "With over 25 years of experience in automotive maintenance and services, we have become a trusted partner for many customers in maintaining their vehicle performance and comfort. This trust is built through consistent service quality, meticulous workmanship, and our commitment to excellence.",

      about_desc_2:
        "With a rich 25-year legacy, our commitment to excellence in car care services remains strong. Supported by experienced and professional technicians, we ensure that every vehicle receives the best treatment according to high service standards.",

      about_desc_3:
        "We understand that every vehicle has unique characteristics and needs. Therefore, we always perform thorough inspections before providing service recommendations, ensuring solutions that truly match the condition of the vehicle and customer requirements.",

      about_desc_4:
        "As automotive technology continues to evolve, we continuously invest in modern equipment and ongoing training for our technicians. This enables us to handle various types of vehicles, from conventional cars to those equipped with the latest technologies.",

      about_desc_5:
        "Customer satisfaction is our top priority. We believe that honest, transparent, and professional service builds long-term relationships. Therefore, we are committed to delivering the best service experience on every visit.",

      vision_title: "Our Vision",
      vision_desc:
        "To become a trusted automotive care service provider that prioritizes quality, safety, and customer satisfaction.",

      mission_title: "Our Mission",
      mission_1: "Providing professional and high-quality services",
      mission_2: "Using modern technology and equipment",
      mission_3: "Maintaining customer trust through transparency",
      mission_4: "Developing competent human resources",

      footer_about: "With 25 years of experience, excellence is our priority.",
      footer_header: "Our Services",
      footer_link1: "Experienced Mechanics",
      footer_link2: "Routine Maintenance",
      footer_link3: "Contact Information",
      footer_link4: "Phone: +62 813-8707-0518",
      footer_link5: "Email: TugasWeb1@gmail.com",

      wa_title: "Wheel Alignment",
      wa_intro:
        "Wheel alignment is the process of adjusting the angles of a car's wheels to match factory specifications. The goal is to ensure the tires sit perfectly on the road when the car moves straight.",
      wa_benefits_title: "Benefits of Wheel Alignment:",
      wa_benefit1:
        "Smoother Driving – The car will be more stable, and won’t pull to the left or right while driving.",
      wa_benefit2:
        "Longer Tire Life – Tires wear evenly because they sit flat, increasing their lifespan.",
      wa_benefit3:
        "Fuel Efficiency – Straight wheels allow the engine to work more efficiently, saving fuel.",
      wa_benefit4:
        "Improved Safety – A stable car is easier to control, especially when cornering or braking suddenly.",
      wa_process_title: "Alignment Process:",
      wa_process1: "Mechanics inspect the front and rear wheel angles.",
      wa_process2:
        "Adjusted with special tools so the wheels are perfectly aligned.",
      wa_process3:
        "The car is tested on the road or a simulator to ensure proper alignment.",

      es_title: "Car Electrical System",
      es_intro:
        "The car electrical system is a vital component that supports almost all vehicle functions, from starting, ignition, and lighting to safety and comfort systems.",

      es_desc_1:
        "Even minor electrical issues can make the car hard to start, reduce performance, or cause breakdowns. Therefore, electrical inspections and repairs must be carried out thoroughly and professionally.",

      es_desc_2:
        "Car electrical services include inspection and repair of batteries, alternators, starters, wiring, fuses, relays, sensors, and modern electronic systems.",

      es_scope_title: "Service Scope",

      es_scope_1_title: "Battery & Charging System Inspection",
      es_scope_1_desc:
        "Checking battery condition, voltage, current, and alternator performance to ensure stable power and optimal charging.",

      es_scope_2_title: "Starter & Ignition Repair",
      es_scope_2_desc:
        "Handling weak or faulty starters and ensuring the ignition system works properly for smooth engine starting.",

      es_scope_3_title: "Wiring & Electrical Path Diagnosis",
      es_scope_3_desc:
        "Tracing damaged, worn, short-circuited, or loose wiring that may cause electrical failures and further damage.",

      es_scope_4_title: "Lights & Electrical Accessories Check",
      es_scope_4_desc:
        "Repairing headlights, brake lights, turn signals, horns, power windows, wipers, audio systems, and other electrical accessories.",

      es_scope_5_title: "Electronic System & Sensor Diagnostics",
      es_scope_5_desc:
        "Using modern diagnostic tools to detect ECU, sensor, and electronic module errors accurately.",

      es_benefits_title: "Benefits of Electrical System Service",

      es_benefit_1: "Easier engine starting and fewer breakdowns",
      es_benefit_2: "Optimal engine performance and electronic features",
      es_benefit_3:
        "Prevents further damage caused by electrical short circuits",
      es_benefit_4: "Improves driving comfort and safety",

      es_closing:
        "With proper electrical system maintenance and repairs, your car will operate more stably, safely, and reliably for both daily and long-distance driving.",

      css_title: "Car System Service",
      css_intro:
        "Car system service is a comprehensive maintenance service to ensure all main vehicle systems work optimally, safely, and according to manufacturer standards.",

      css_desc_1:
        "This service covers detailed inspections of various interconnected systems that support overall vehicle performance.",
      css_desc_2:
        "Through structured inspections, potential issues can be detected early to prevent major damage and high repair costs.",

      css_scope_title: "Service Inspection Scope",

      css_scope_1_title: "Engine & Performance System",
      css_scope_1_desc:
        "Inspection of engine sound, vibration, oil leaks, and combustion performance.",

      css_scope_2_title: "Lubrication & Fluids System",
      css_scope_2_desc:
        "Checking engine oil, transmission oil, brake fluid, and coolant condition.",

      css_scope_3_title: "Cooling System",
      css_scope_3_desc:
        "Ensuring radiator, cooling fan, hoses, and thermostat function properly.",

      css_scope_4_title: "Brake & Safety System",
      css_scope_4_desc:
        "Brake pad, disc, and braking response inspection for safety.",

      css_scope_5_title: "Electrical & Electronic System",
      css_scope_5_desc:
        "Checking battery, charging system, lights, sensors, and electronic modules.",

      css_scope_6_title: "Suspension & Steering System",
      css_scope_6_desc:
        "Inspection of suspension and steering components for stability.",

      css_scope_7_title: "Tires & Undercarriage",
      css_scope_7_desc:
        "Checking tire condition, air pressure, and wheel balance.",

      css_benefits_title: "Service Benefits",
      css_benefit_1: "Keeps vehicle in optimal condition",
      css_benefit_2: "Detects problems early",
      css_benefit_3: "Extends component lifespan",
      css_benefit_4: "Improves comfort and safety",
      css_benefit_5: "Maintains resale value",

      css_closing:
        "Regular car system service ensures reliability and safety in all driving conditions.",

      diagnostic_title: "Engine Diagnostics",
      diagnostic_intro:
        "Engine diagnostics is an in-depth analysis service to determine the actual condition of a vehicle engine without dismantling components.",

      diagnostic_desc_1:
        "This process aims to accurately identify problem sources, both those already felt by the driver and hidden issues that have not yet shown serious symptoms.",

      diagnostic_desc_2:
        "The engine is examined from various aspects, including performance, responsiveness, and electronic data generated by the engine control system using modern diagnostic tools.",

      diagnostic_process: "Diagnostic Analysis Process",

      process_1_title: "Engine Data Reading",
      process_1_desc:
        "Vehicle computer systems are scanned to read fault codes, engine parameters, and sensor data affecting combustion efficiency.",

      process_2_title: "Engine Performance Evaluation",
      process_2_desc:
        "Analysis based on engine sound, vibration, acceleration response, fuel consumption, and engine speed stability.",

      process_3_title: "Supporting System Inspection",
      process_3_desc:
        "Includes fuel, air intake, ignition, cooling, and emission systems to ensure proper operation.",

      process_4_title: "Potential Issue Identification",
      process_4_desc:
        "Detecting components that are weakening before causing serious future damage.",

      process_5_title: "Professional Technical Recommendations",
      process_5_desc:
        "Diagnostic results are delivered in an engine condition report along with maintenance or repair recommendations based on urgency.",

      diagnostic_benefits: "Benefits of Engine Diagnostic Service",

      benefit_1: "Avoid unnecessary repairs and excessive dismantling",
      benefit_2: "Save time and cost with clear problem identification",
      benefit_3: "Maintain optimal and stable engine performance",
      benefit_4: "Help vehicle owners understand engine condition objectively",

      diagnostic_closing:
        "With professional engine diagnostics, vehicle owners gain a clear understanding of engine health, enabling accurate and well-planned maintenance decisions.",
    },
  };

  // === Apply language ===
  window.changeLanguage = function (select) {
    const lang = select.value;
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-lang]").forEach((el) => {
      const key = el.getAttribute("data-lang");
      if (langData[lang][key]) {
        el.innerHTML = langData[lang][key];
      }
    });

    document.querySelectorAll("[data-lang-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-lang-placeholder");
      if (langData[lang][key]) {
        el.placeholder = langData[lang][key];
      }
    });
  };

  // === Load saved language ===
  const saved = localStorage.getItem("lang") || "id";
  document.getElementById("language").value = saved;
  changeLanguage({ value: saved });
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".testimonial__swiper", {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
});

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    Swal.fire({
      title: "Berhasil Mengisi Form!",
      text: "Terima kasih atas kritik dan saran Anda.",
      icon: "success",
      confirmButtonText: "OK",
    });

    this.reset();
  });
