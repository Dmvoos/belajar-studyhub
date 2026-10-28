window.DATA_MANAJEMEN_PROYEK = {
  id:"manajemen-proyek",
  title:"Manajemen Proyek",
  eyebrow:"Manajemen Bisnis · Pinto, PM: Achieving Competitive Advantage, 6th ed.",
  summary:"Fondasi manajemen proyek: proyek vs proses, definisi PMI, siklus hidup, dan kriteria sukses. Bab 2 membahas konteks organisasi — strategi, struktur, budaya, dan stakeholder.",
  pertemuan:[
  {
    label:"Pertemuan 1", sub:"Bab 1 · Fondasi Manajemen Proyek",
    cards:[
      {icon:"⚖️",h:"Proyek vs Proses",lvl:"FONDASI",p:"Proyek = temporary & unique (sekali jalan, hasil baru). Proses = repetitif & berkelanjutan. Ini fondasi seluruh mata kuliah."},
      {icon:"📐",h:"Definisi PMI",lvl:"KONSEP",p:"A temporary endeavor to create a unique product, service, or result. Dua kata kunci: TEMPORARY (ada awal & akhir) + UNIQUE (bukan pengulangan)."},
      {icon:"🔄",h:"Siklus Hidup Proyek",lvl:"TAHAP",p:"Empat tahap: Conceptualization → Planning → Execution → Termination. Porsi anggaran terbesar (man-hours) terserap di fase execution."},
      {icon:"🎯",h:"Kriteria Sukses",lvl:"UKURAN",p:"Bertambah dari Triple (waktu · anggaran · performance) ke Quadruple constraint (+ client acceptance)."}
    ],
    table:{
      title:"Proses vs Proyek",
      note:"Proses dan proyek berjalan dengan logika yang berbeda — proyek sulit justru karena melanggar praktik yang sudah mapan.",
      first:"Aspek",
      low:"▸ Proses", diff:"▸ Proyek",
      rows:[
        ["Produk","Berulang (produk/proses yang sama)","Baru (produk/proses baru)"],
        ["Tujuan","Banyak tujuan sekaligus","Satu tujuan"],
        ["Durasi","Berkelanjutan","Sekali jalan, umur terbatas"],
        ["Anggota tim","Relatif homogen","Lebih heterogen"],
        ["Biaya & jadwal","Kepastian lebih tinggi","Ketidakpastian lebih tinggi"],
        ["Dampak","Menopang status quo","Mengganggu status quo"]
      ]
    },
    blocks:[
      {icon:"5️⃣",h:"Lima Elemen Definisi Proyek",lvl:"PMI",items:[
        "1 · Kompleks dan sekali jalan",
        "2 · Dibatasi anggaran, jadwal, dan sumber daya",
        "3 · Punya tujuan yang jelas",
        "4 · Berorientasi pelanggan",
        "5 · Lintas fungsi dalam organisasi"]},
      {icon:"💨",h:"Lima Tekanan (Cleland)",lvl:"MENDESAK",items:[
        "Siklus hidup produk memendek",
        "Jendela peluncuran sempit — telat sedikit jadi kelas dua",
        "Produk makin kompleks, tuntutan teknis naik",
        "Pasar global — pesaing & pelanggan baru sekaligus",
        "Inflasi rendah — laba dicari dari efisiensi"]},
      {icon:"📈",h:"Kurva Lima Variabel",lvl:"DINAMIKA",items:[
        "Uncertainty — tertinggi di awal proyek",
        "Creativity — tinggi di awal, turun setelah tujuan mengeras",
        "Resources — naik terus seiring komitmen dana",
        "Project stake — naik terus (makin lama makin besar investasi)",
        "Client interest — kurva U (antusias → turun → naik di serah terima)"]},
      {icon:"🏆",h:"Triple → Quadruple Constraint",lvl:"KRITERIA",items:[
        "Triple: waktu · anggaran · performance",
        "Quadruple: tambah client acceptance",
        "Kasus klinik: triple 'sukses' tapi quadruple 'gagal' — 12/300 pasien yang pakai",
        "Kesimpulan: doing the wrong things well"]},
      {icon:"📊",h:"Studi KPMG",lvl:"ANGKA",items:[
        "65% proyek software & hardware gagal (300+ perusahaan besar)",
        "1 dari 2 manajer menganggap kegagalan itu normal",
        "> 1/3 biaya rekonstruksi Afghanistan hilang (pemborosan & perencanaan buruk) — SIGAR"]}
    ],
    quiz:[
      {c:"Definisi PMI",q:"Menurut PMI, proyek adalah…",o:["A temporary endeavor to create a unique product, service, or result","Proses operasional berulang yang berkelanjutan","Kegiatan rutin harian organisasi","Rencana anggaran perusahaan tahunan"],a:0,x:"Definisi PMI: <b>sebuah usaha temporary</b> untuk menciptakan produk/jasa/hasil yang <b>unik</b>. Dua kata kunci: temporary + unique."},
      {c:"Temporary & Unique",q:"Dua kata kunci dalam definisi proyek menurut PMI adalah…",o:["Efficient & effective","Temporary & unique","Complex & costly","Global & local"],a:1,x:"<b>Temporary</b> (ada titik awal & akhir) + <b>unique</b> (bukan pengulangan). Sisanya turunan dari dua kata kunci ini."},
      {c:"5 Elemen",q:"Yang <b>bukan</b> termasuk lima elemen definisi proyek adalah…",o:["Kompleks dan sekali jalan","Dibatasi anggaran, jadwal, sumber daya","Bersifat repetitif dan berkelanjutan","Lintas fungsi dalam organisasi"],a:2,x:"Lima elemen: kompleks sekali jalan, dibatasi anggaran/jadwal/sumber daya, tujuan jelas, berorientasi pelanggan, lintas fungsi. <b>Repetitif & berkelanjutan = proses, bukan proyek.</b>"},
      {c:"Proyek vs Proses",q:"Manakah di bawah ini yang termasuk PROSES, bukan proyek?",o:["Migrasi sistem akademik kampus ke platform baru","Menyusun laporan keuangan bulanan","Menyiapkan audit ISO pertama perusahaan","Membuka gerai ke-51 sebuah jaringan"],a:1,x:"Laporan keuangan bulanan = <b>proses</b> (siklus berulang). Migrasi sistem, audit pertama, buka gerai baru = <b>proyek</b> (sekali jalan, unik)."},
      {c:"Tabel",q:"Salah satu perbedaan proses dan proyek adalah proses bersifat…",o:["Sekali jalan","Berkelanjutan","Mengganggu status quo","Anggota tim heterogen"],a:1,x:"Proses: berulang, banyak tujuan, <b>berkelanjutan</b>, anggota homogen, menopang status quo. Proyek: baru, satu tujuan, sekali jalan, mengganggu status quo."},
      {c:"Tekanan Cleland",q:"Yang <b>bukan</b> termasuk lima tekanan yang mendorong organisasi ke arah proyek adalah…",o:["Siklus hidup produk memendek","Jendela peluncuran yang sempit","Produk makin sederhana dan murah","Pasar global"],a:2,x:"Lima tekanan Cleland: siklus hidup memendek, jendela peluncuran sempit, <b>produk makin kompleks</b> (bukan sederhana), pasar global, inflasi rendah."},
      {c:"Studi KPMG",q:"Menurut studi KPMG atas 300+ perusahaan besar, berapa persen proyek software & hardware yang gagal?",o:["25%","45%","65%","90%"],a:2,x:"<b>65%</b> proyek software & hardware gagal; 1 dari 2 manajer menganggap itu normal; >1/3 biaya rekonstruksi Afghanistan hilang (SIGAR)."},
      {c:"Siklus Hidup",q:"Urutan empat tahap siklus hidup proyek yang benar adalah…",o:["Planning, Execution, Conceptualization, Termination","Conceptualization, Planning, Execution, Termination","Execution, Planning, Termination, Conceptualization","Conceptualization, Execution, Planning, Termination"],a:1,x:"<b>Conceptualization → Planning → Execution → Termination</b>."},
      {c:"Fase Terbesar",q:"Porsi anggaran terbesar (dalam man-hours) umumnya terserap di fase…",o:["Conceptualization","Planning","Execution","Termination"],a:2,x:"Fase <b>execution</b> menyerap porsi anggaran/man-hours terbesar — pekerjaan sesungguhnya berlangsung di sini."},
      {c:"Kurva",q:"Pada kurva siklus hidup proyek, tingkat uncertainty (ketidakpastian) paling tinggi di…",o:["Akhir proyek","Awal proyek","Fase execution","Setelah serah terima"],a:1,x:"<b>Uncertainty tertinggi di awal</b> karena tantangan belum teridentifikasi. Creativity juga tinggi di awal lalu turun setelah tujuan mengeras."},
      {c:"Kurva Client",q:"Bentuk kurva client interest sepanjang proyek adalah…",o:["Naik terus","Turun terus","Kurva U","Tetap datar"],a:2,x:"<b>Kurva U</b>: antusias di awal → turun saat pengerjaan → naik lagi mendekati serah terima. Pelanggan yang menghilang lalu muncul di akhir = sumber kejutan penolakan."},
      {c:"Triple",q:"Triple constraint terdiri dari…",o:["Waktu, anggaran, performance","Efisiensi, dampak, bisnis, kesiapan","Visi, misi, dan strategi","Stakeholder internal, eksternal, intervenor"],a:0,x:"<b>Triple constraint = waktu · anggaran · performance.</b> Quadruple menambah client acceptance."},
      {c:"Quadruple",q:"Quadruple constraint menambahkan elemen…",o:["Client acceptance","Manajemen risiko proyek","Sumber daya manusia","Teknologi informasi"],a:0,x:"Quadruple constraint = triple + <b>client acceptance</b>."},
      {c:"Kasus Klinik",q:"Kasus klinik antrean digital dinilai 'sukses' oleh triple constraint tapi 'gagal' oleh quadruple constraint karena…",o:["Melebihi anggaran yang ditetapkan","Tidak tepat waktu diselesaikan","Client acceptance tidak terpenuhi (12/300 pasien yang pakai)","Spesifikasi awal tidak lengkap"],a:2,x:"Triple: tepat waktu, under budget, sesuai spesifikasi = sukses. Quadruple: <b>client acceptance gagal</b> — cuma 12/300 pasien pakai. Doing the wrong things well."}
    ],
    wawancara:[
      {t:"Gerai Kopi ke-51",c:"Proyek vs Proses",q:[
        ["Konsep apa yang relevan?","Proyek vs proses: buka gerai ke-51 = proyek (unik di lokasi & perizinan); seduh kopi harian = proses (repetitif)."],
        ["Mengapa buka gerai baru proyek tapi buka kopi harian bukan?","Gerai baru sekali jalan, punya awal & akhir, lintas fungsi; seduh kopi berulang tiap hari tanpa titik akhir."],
        ["Jika buka gerai ke-51 ternyata repetitif tiap minggu tanpa akhir, apakah masih proyek?","Tidak lagi — menjadi proses rutin. Proyek harus temporary & unique."]]},
      {t:"Kasus Klinik Antrean",c:"Triple vs Quadruple Constraint",q:[
        ["Konsep apa yang relevan?","Triple constraint (waktu · anggaran · performance) vs quadruple (+ client acceptance)."],
        ["Nilai proyek klinik dengan triple dan quadruple constraint?","Triple: sukses (tepat waktu, under budget, sesuai spesifikasi). Quadruple: gagal (client acceptance — 12/300 pasien pakai)."],
        ["Mengapa kedua penilaian bisa berbeda?","Triple hanya ukur efisiensi internal vs spesifikasi awal; spesifikasi awal bisa keliru — doing the wrong things well."]]},
      {t:"Bus Wisata (McKain)",c:"Kriteria Sukses & Tanya Dulu",q:[
        ["Konsep apa yang relevan?","Proyek sempurna bisa tetap salah proyek — tanyakan kebutuhan sebelum mulai."],
        ["Apa pelajaran dari kasus renovasi interior bus wisata?","Faktor terpenting ternyata sopir, bukan interior. Proyek renovasi dibatalkan, diganti program pelatihan sopir."],
        ["Bagaimana memastikan kriteria sukses ditetapkan dengan benar?","Riset kebutuhan pemangku kepentingan di awal; kriteria ditetapkan sebelum proyek — what gets measured gets managed."]]}
    ]
  },
  {
    label:"Pertemuan 2", sub:"Bab 2 · Konteks Organisasi",
    cards:[
      {icon:"🪜",h:"Strategi = Batu Loncatan",lvl:"STRATEGI",p:"Strategi hanya bisa mengartikulasikan; proyek yang mewujudkan. Proyek adalah batu loncatan strategi."},
      {icon:"🏛️",h:"Tiga Struktur Organisasi",lvl:"STRUKTUR",p:"Functional (jelas, efisien), Project (fokus, tapi boros sumber daya), Matrix (dua bos, fleksibel tapi banyak negosiasi)."},
      {icon:"🌐",h:"Budaya & Aturan Tak Tertulis",lvl:"BUDAYA",p:"Norma tak tertulis yang memandu perilaku. Tujuh faktor pembentuk: lingkungan, lokasi, teknologi, sistem imbalan, aturan/prosedur, tokoh kunci, critical incidents."},
      {icon:"👥",h:"Stakeholder & Intervenors",lvl:"PEMANGKU","p":"Semua pihak yang kepentingannya harus diseimbangkan. Intervenor groups (lingkungan/politik/sosial) bisa menyela proyek."}
    ],
    blocks:[
      {icon:"🏛️",h:"Konteks Organisasi",lvl:"STRATEGI·STRUKTUR·BUDAYA",items:[
        "Strategi: proyek mewujudkan apa yang strategi hanya bisa ucapkan",
        "Struktur: fungsional, proyek, atau matriks — masing-masing punya harga",
        "Budaya: aturan tak tertulis yang menentukan perilaku sebenarnya",
        "Stakeholder: semua pihak yang kepentingannya harus diseimbangkan"]},
      {icon:"🧭",h:"TOWS & PMO",lvl:"ALAT",items:[
        "TOWS: SO (maxi-maxi), ST (maxi-mini), WO (mini-maxi), WT (mini-mini) → turunkan proyek konkret",
        "Spektrum matriks: weak → balanced → strong → heavyweight",
        "PMO: weather station (pengamat), control tower (penjaga mutu), resource pool (penyedia orang)"]},
      {icon:"🌊",h:"Escalation of Commitment",lvl:"JERATAN",items:[
        "Organisasi terus mendanai proyek yang jelas gagal karena tak sanggup mengakui kegagalan",
        "Contoh nyata: Airbus A380 dan Bandara Kertajati"]}
    ],
    quiz:[
      {c:"Strategi",q:"Dalam konteks organisasi (Bab 2), proyek berfungsi sebagai…",o:["Akhir dari sebuah strategi","Batu loncatan / wujud nyata strategi","Pengganti struktur organisasi","Penghalang inovasi"],a:1,x:"<b>Proyek adalah batu loncatan strategi</b>: strategi hanya bisa mengartikulasikan, proyek yang mewujudkan."},
      {c:"Stakeholder",q:"Kelompok eksternal yang punya kemampuan menyela proyek dan memaksa kepentingannya masuk disebut…",o:["Top management","Manajer fungsional","Intervenor groups","Anggota tim proyek"],a:2,x:"<b>Intervenor groups</b> = kelompok lingkungan/politik/sosial/komunitas yang bisa menyela proyek. Contoh: Cape Wind dibatalkan setelah 14 tahun litigasi."},
      {c:"Struktur",q:"Struktur organisasi yang memberi anggota tim 'dua bos' adalah…",o:["Functional","Project","Matrix","Heavyweight"],a:2,x:"<b>Matrix</b> = dua bos (manajer fungsional & manajer proyek). Cocok lingkungan dinamis, tapi waktu habis untuk negosiasi."},
      {c:"PMO",q:"PMO yang hanya memantau dan melaporkan status proyek tanpa berusaha mengendalikannya disebut…",o:["Control tower","Resource pool","Weather station","Directive office"],a:2,x:"<b>Weather station</b> = peran pengamat (memantau & melaporkan). Control tower = penjaga mutu; resource pool = penyedia orang."},
      {c:"Budaya",q:"Budaya organisasi didefinisikan sebagai…",o:["Aturan tertulis resmi perusahaan","Aturan/norma tak tertulis yang memandu perilaku","Struktur hierarki jabatan formal","Kebijakan gaji dan tunjangan"],a:1,x:"Budaya = <b>aturan/norma tak tertulis</b> yang membentuk & memandu perilaku. Tujuh faktor pembentuk: lingkungan, lokasi, teknologi, sistem imbalan, aturan/prosedur, tokoh kunci, critical incidents."},
      {c:"Escalation",q:"Kecenderungan organisasi terus mendanai proyek yang jelas gagal karena tak sanggup mengakui kegagalan disebut…",o:["Triple constraint","Escalation of commitment","Client acceptance","Project termination"],a:1,x:"<b>Escalation of commitment</b> = terus mendanai proyek gagal melewati titik objektif penghentian. Contoh: A380 dan Kertajati."}
    ],
    wawancara:[
      {t:"Airbus A380 vs Boeing 787",c:"Strategi → Proyek",q:[
        ["Konsep apa yang relevan?","Proyek adalah batu loncatan strategi; strategi menentukan proyek yang lahir (Tabel 2.1)."],
        ["Apa perbedaan keyakinan strategi Airbus dan Boeing?","Airbus: masa depan megacity & hub → pesawat raksasa (A380). Boeing: penerbangan langsung antar kota menengah → pesawat efisien (787)."],
        ["Kegagalan proyek atau kegagalan strategi?","Pertanyaan kunci: jika strategi salah memetakan masa depan, proyek yang dieksekusi sempurna pun bisa gagal."]]},
      {t:"Bandara Kertajati",c:"Stakeholder & Benturan Kepentingan",q:[
        ["Konsep apa yang relevan?","Stakeholder internal/eksternal dan benturan kepentingan; analisis permintaan & akses di fase awal."],
        ["Sebutkan dua pasang stakeholder yang tujuannya bertabrakan.","Maskapai (mau rute menguntungkan) vs bandara (mau isi kapasitas); subsidi operasional vs kebutuhan anggaran daerah."],
        ["Pada fase siklus hidup mana analisis permintaan & akses harus dilakukan?","Fase conceptualization/planning — bukan setelah konstruksi selesai (jaga agar tidak escalation of commitment)."]]},
      {t:"Dua Bos",c:"Struktur Matriks",q:[
        ["Konsep apa yang relevan?","Struktur matriks: anggota punya dua bos (fungsional & proyek); cocok lingkungan dinamis tapi waktu habis untuk negosiasi."],
        ["Apa kelebihan dan kekurangan struktur matriks?","Kelebihan: koordinasi lintas fungsi, sumber daya terbagi, responsif. Kekurangan: dua bos, anggota terjepit, waktu untuk negosiasi."],
        ["Jika negosiasi antardua bos makin boros waktu, ke struktur mana sebaiknya bergeser?","Menuju projectized (otoritas penuh di manajer proyek) atau kembali ke functional, tergantung kebutuhan."]]},
      {t:"Estimasi Dipotong 20%",c:"Budaya & Escalation of Commitment",q:[
        ["Konsep apa yang relevan?","Budaya = aturan tak tertulis; estimasi yang dipadatkan & escalation of commitment."],
        ["Apa dampak budaya 'semua estimasi otomatis dipotong 20%'?","Informasi jadi tidak jujur, perencanaan rusak, kabar buruk tak sampai ke pengambil keputusan — seperti Boeing's Fatal Flaw."],
        ["Apa yang harus berubah agar kabar buruk bisa naik lebih cepat?","Sistem imbalan & norma yang menghargai estimasi jujur; mekanisme escalation berbasis penilaian objektif."]]}
    ]
  },
  {
    label:"Pertemuan 3", sub:"Bab 3 · Project Selection & Portfolio Management",
    cards:[
      {icon:"🎯",h:"6 Kriteria Model",lvl:"KRITERIA",p:"Realism, Capability, Flexibility, Ease of Use, Cost, Comparability. Model yang baik harus realistis dan murah dioperasikan."},
      {icon:"💰",h:"Model Finansial",lvl:"FINANSIAL",p:"Payback (kecepatan), NPV (nilai waktu uang), Discounted Payback, dan IRR. NPV adalah 'gold standard' dalam seleksi proyek."},
      {icon:"📊",h:"Matriks Portofolio",lvl:"STRATEGI",p:"Memetakan proyek ke dalam 4 kategori: Pearls, Oysters, Bread & Butter, dan White Elephants untuk menjaga keseimbangan investasi."},
      {icon:"🐘",h:"White Elephants",lvl:"RISIKO",p:"Proyek teknis sulit dengan hasil kecil. Sering dipertahankan karena 'Escalation of Commitment' atau dukungan politik."}
    ],
    blocks:[
      {icon:"🔍",h:"6 Kriteria Screening",lvl:"KONSEP",items:[
        "Realism: Mencerminkan kendala nyata & risiko",
        "Capability: Bisa membandingkan jenis proyek berbeda",
        "Flexibility: Mudah diubah saat kondisi berubah",
        "Ease of Use: Sederhana & cepat digunakan",
        "Cost: Biaya model rendah (tidak mahal)",
        "Comparability: Bisa bandingkan banyak proyek sekaligus"]},
      {icon:"📉",h:"Metode Finansial",lvl:"KUANTITATIF",items:[
        "Payback: Seberapa cepat uang kembali (abaikan nilai waktu uang)",
        "NPV: Nilai sekarang dari arus kas (paling akurat)",
        "IRR: Tingkat diskonto saat NPV = 0",
        "GIGO: Garbage In, Garbage Out (angka palsu = keputusan buruk)"]},
      {icon:"🔮",h:"Matriks Portofolio",lvl:"PEMETAAN",items:[
        "Pearls: Teknis mudah, komersial besar (Aplikasi baru teknologi mapan)",
        "Oysters: Teknis sulit, komersial besar (Teknologi baru revolusioner)",
        "Bread & Butter: Teknis mudah, komersial sedang (Perbaikan bertahap)",
        "White Elephants: Teknis sulit, komersial kecil (Harus diburu/dibuang)"]}
    ],
    table:{
      title:"Payback vs NPV",
      note:"Berdasarkan simulasi Proyek Melati (menang di Payback) vs Proyek Kenanga (menang di NPV).",
      first:"Aspek",
      low:"▸ Payback Period", diff:"▸ NPV (Net Present Value)",
      rows:[
        ["Fokus Utama","Kecepatan balik modal","Besaran nilai tambah ekonomi"],
        ["Nilai Waktu Uang","Diabaikan (Simple Payback)","Dipertimbangkan sepenuhnya"],
        ["Arus Kas Lanjutan","Diabaikan setelah titik impas","Seluruh arus kas dihitung"],
        ["Risiko Likuiditas","Sangat relevan saat uang ketat","Kurang menonjolkan likuiditas"]
      ]
    },
    quiz:[
      {c:"Kriteria Model",q:"Kriteria 'Realism' dalam model screening berarti…",o:["Model harus sangat mahal harganya","Mencerminkan tujuan, kendala nyata, dan risiko proyek","Hanya bisa digunakan oleh ahli statistik","Tidak bisa diubah-ubah"],a:1,x:"<b>Realism</b>: Model harus mencerminkan realitas organisasi (tujuan, biaya, risiko)."},
      {c:"Payback",q:"Kelemahan utama metode Payback Period adalah…",o:["Terlalu sulit dihitung","Mengabaikan nilai waktu uang dan arus kas setelah payback","Selalu menghasilkan angka negatif","Hanya untuk proyek pemerintah"],a:1,x:"<b>Payback</b> mengabaikan <i>time value of money</i> dan tidak peduli apa yang terjadi setelah modal kembali."},
      {c:"NPV",q:"Mengapa NPV dianggap lebih unggul daripada Payback?",o:["Karena lebih cepat dihitung","Karena mempertimbangkan seluruh arus kas dan nilai waktu uang","Karena tidak butuh data biaya","Karena hasilnya selalu dalam bentuk persentase"],a:1,x:"<b>NPV</b> adalah standar emas karena menghitung nilai sekarang dari seluruh manfaat ekonomi proyek."},
      {c:"Matriks",q:"Proyek yang secara teknis sulit namun memiliki potensi komersial besar disebut…",o:["Pearls","Bread & Butter","Oysters","White Elephants"],a:2,x:"<b>Oysters</b>: Proyek revolusioner yang teknisnya sulit (belum terbukti) tapi hadiahnya besar jika berhasil."},
      {c:"White Elephant",q:"White Elephant sering dipertahankan meskipun gagal karena alasan…",o:["Keuntungan yang terlalu besar","Escalation of commitment (sudah terlanjur keluar banyak biaya)","Teknis yang terlalu mudah","Dukungan dari pelanggan baru"],a:1,x:"<b>White Elephants</b> sering bertahan karena faktor politik atau ketidakmampuan mengakui kegagalan (Escalation of Commitment)."},
      {c:"Portfolio",q:"Tujuan utama manajemen portofolio proyek adalah…",o:["Hanya mencari satu proyek terbesar","Menyeimbangkan risiko dan return dari berbagai jenis proyek","Menghabiskan seluruh anggaran perusahaan","Menambah jumlah karyawan"],a:1,x:"Manajemen portofolio bertujuan <b>menyeimbangkan</b> investasi agar tidak bertaruh pada satu proyek saja."}
    ],
    wawancara:[
      {t:"Melati vs Kenanga",c:"Seleksi Proyek (Payback vs NPV)",q:[
        ["Mengapa Melati menang di Payback tapi kalah di NPV?","Melati memberikan uang lebih cepat di awal, tapi Kenanga menghasilkan total nilai jauh lebih besar dalam jangka panjang."],
        ["Kapan perusahaan tetap memilih Melati (Payback)?","Saat likuiditas sedang ketat atau masa depan pasar sangat tidak pasti (butuh uang kembali secepatnya)."],
        ["Mengapa NPV tetap menjadi rujukan utama?","Karena NPV mengukur penciptaan nilai nyata yang sudah didiskon ke nilai saat ini."]]},
      {t:"Otopsi Quibi",c:"Kegagalan Kriteria Seleksi",q:[
        ["Apa kesalahan utama Quibi menurut kriteria screening?","Gagal dalam aspek 'Realism' — asumsi pasar tidak mencerminkan kebutuhan nyata (The app nobody wanted)."],
        ["Pelajaran apa yang didapat dari kegagalan investasi $1,75 M ini?","Memilih proyek yang salah dengan metode yang rapi (investor besar, CEO top) tetap menghasilkan proyek yang salah."],
        ["Kriteria apa yang seharusnya lebih ditekankan?","Customer acceptance dan validasi kebutuhan pasar sebelum pendanaan masif."]]},
      {t:"Berburu Gajah Putih",c:"Portfolio & Escalation of Commitment",q:[
        ["Mengapa White Elephant sulit dihentikan?","Karena sudah terlanjur banyak biaya keluar (Sunk Cost) dan sering didukung orang penting."],
        ["Bagaimana cara mengidentifikasi White Elephant dalam organisasi?","Cek proyek dengan kelayakan teknis rendah tapi terus menyedot dana tanpa potensi komersial yang jelas."],
        ["Apa kaitan Bab 3 ini dengan Bab 2?","Konsep 'Escalation of Commitment' dari konteks organisasi (Bab 2) menjadi alasan utama lahirnya White Elephant (Bab 3)."]]}
    ]
  },
  {
    label:"Pertemuan 4", sub:"Bab 4 · Leadership and the Project Manager",
    cards:[
      {icon:"🧭",h:"Pemimpin vs Manajer",lvl:"KONSEP",p:"Pemimpin: melakukan hal yang benar (fokus orang, perubahan, efektivitas, kepercayaan, jangka panjang). Manajer: melakukan hal dengan benar (fokus sistem, status quo, efisiensi, kepatuhan, jangka pendek). Proyek butuh keduanya — bukan satu, tapi keduanya berpadu."},
      {icon:"🤝",h:"Empat Syarat Kemitraan",lvl:"BLOC",p:"1) Exchange of purpose: visi dibangun melalui dialog, bukan diumumkan. 2) A right to say no: kalah dalam perdebatan diperbolehkan. 3) Joint accountability: hasil proyek milik bersama. 4) Absolute honesty: semua informasi jadi milik bersama. Kepemimpinan bisa dipelajari, bukan bakat bawaan."},
      {icon:"💡",h:"Emotional Intelligence",lvl:"EI",p:"Lima unsur: 1) Self-awareness: pahami kekuatan & kelemahan. 2) Self-regulation: berpikir sebelum bertindak. 3) Motivation: terdorong potensi maksimal. 4) Empathy: kenali perbedaan tim. 5) Social skill: kemampuan menggerakkan orang dengan tujuan."},
      {icon:"⚡",h:"Empat Perilaku Inti",lvl:"PERILUH",p:"1) Memotivasi & membangun tim (5 sebab: tujuan kabur, tak ada motivasi, kebutuhan dikecilkan, terlalu banyak proyek, saling tidak percaya). 2) Mendapatkan sumber daya. 3) Visi & memadamkan kebakaran. 4) Berkomunikasi. Tabel: 31,5% kegagalan proyek karena kurangnya dukungan manajemen puncak."},
      {icon:"🏆",h:"Empat Tipe Champion",lvl:"CHAMPION",p:"1) Creative originator: penemu ide asli. 2) Entrepreneur: jual ide ke seluruh org. 3) Godfather/sponsor: lindungi, danai, tenangkan. 4) Project manager. Traditional: teknis, koordinasi, kontrol. Non-traditional: visionary, politician. 16/17 proyek sukses punya champion."},
      {icon:"⚖️",h:"Empat Bentuk Tidak Etis",lvl:"ETIKA",p:"1) Korupsi & penyuapan: Odebrecht bayar US$800j suap di 15+ negara. 2) Penipuan: menawar rendah, naikkan via change order. 3) Kickback: gelembubungkan biaya subkontrak. 4) Pemerasan: blokir kerja sampai bayaran tak resmi. Sulit membedakan 'baksheesh' budaya dari suap ilegal."}
    ],
    blocks:[
      {icon:"🎯",h:"Empat Perilaku Inti Pemimpin",lvl:"RISET",items:[
        "Mendapatkan sumber daya: lima sebab proyek kekurangan dana — (1) tujuan kabur, (2) tak ada motivasi, (3) kebutuhan dikecilkan, (4) terlalu banyak proyek, (5) saling tidak percaya.",
        "Memotivasi & membangun tim: motivasi harus dari dalam diri, tidak bisa dipaksakan oleh sponsor atau bonus ekstrinsik."]},
      {icon:"🔥",h:"Visi & Memadamkan Kebakaran",lvl:"MANAJEMEN",items:[
        "Lihat hutan, tapi tahu tiap pohon: jangan sampai kehilangan gambaran penuh dan detail.",
        "Komunikasikan: jika mereka tak tahu apa yang kamu kerjakan, hasilnya dianggap tidak ada."]},
      {icon:"💡",h:"Lima Unsur Emotional Intelligence",lvl:"EMOSI",items:[
        "Self-awareness: pahami kekuatan, kelemahan, dan dorongan diri sendiri.",
        "Self-regulation: berpikir sebelum bertindak, hindari impulsif.",
        "Motivation: terdorong mencapai potensi maksimal, sukai ukuran kemajuan yang jelas.",
        "Empathy: kenali perbedaan tiap anggota tim dan sesuaikan perlakuan.",
        "Social skill: kemampuan menggerakkan orang dengan ramah namun tuju."]}
    ],
    table:{
      title:"Pemimpin vs Manajer",
      note:"Bukan daftar 'pemimpin baik, manajer buruk'. Proyek butuh keduanya.",
      first:"Aspek",
      low:"▸ Pemimpin", diff:"▸ Manajer",
      rows:[
        ["Melakukan hal yang benar","Melakukan hal dengan benar"],
        ["Berfokus pada orang","Berfokus pada sistem"],
        ["Memeluk perubahan","Mempertahankan status quo"],
        ["Mengejar efektivitas","Mengejar efisiensi"],
        ["Mendapatkan kepercayaan","Menuntur kepatuhan"],
        ["Berpandangan jangka panjang","Berpandang jangka pendek"]
      ]
    },
    quiz:[
      {c:"Pemimpin vs Manajer",q:"Apa yang membedakan pemimpin dan manajer menurut Bab 4?",o:["Pemimpin fokus orang, manajer fokus sistem","Pemimpin selalu benar, manajer selalu salah","Pemimpin tidak perlu tim, manajer bekerja sendiri","Pemimpin tidak butuh visi"],a:0,x:"<b>Pemimpin</b> fokus orang, perubahan, efektivitas, kepercayaan, jangka panjang. <b>Manajer</b> fokus sistem, status quo, efisiensi, kepatuhan, jangka pendek. Proyek butuh keduanya."},
      {c:"Block Partnership",q:"Syarat kemitraan Block mana yang paling sulit di org. hierarkis?",o:["Exchange of purpose","A right to say no","Joint accountability","Absolute honesty"],a:1,x:"<b>A right to say no</b> justru paling sulit: karyawan harus bisa menolak dalam perdebatan, tapi otoritas formal sering menolak ini di org tradisional."},
      {c:"Emotional Intelligence",q:"Pada kasus Kathy Smith, unsur EI apa yang paling kurang?",o:["Self-awareness","Self-regulation","Motivation","Empathy"],a:3,x:"<b>Empathy</b>: Kathy tidak mengenali perbedaan anggota tim lokal. Timnya merasa dibenci karena gaya manajemen tak menyesuaikan budaya."},
      {c:"Champion",q:"Dari 17 proyek, 16 sukses karena champion. Tipe champion tradisional mana paling krusial?",o:["Creative originator","Entrepreneur","Godfather/sponsor","Project manager"],a:2,x:"<b>Godfather/sponsor</b>: melindungi, mendanai, menenangkan. Tanpa dukungan ini, ide akan mati."},
      {c:"Etika",q:"Volkswagen Dieselgate termasuk praktik tidak etis mana?",o:["Korupsi & penyuapan","Penipuan","Kickback","Pemerasan"],a:1,x:"<b>Penipuan yang disengaja</b>: Dieselgate melibatkan manipulasi software untuk menyembunyikan emisi. Menawar rendah untuk menang, lalu mengubah nilai kontrak."},
      {c:"Leadership Gap",q:"Manajer proyek tanpa otoritas memecat — strategi paling efektif?",o:["Beri bonus besar","Kenakan sanksi keras","Gunakan pengaruh: visi, kepercayaan, joint accountability","Promosikan diri","Biarkan saja"],a:2,x:"<b>Pengaruh bukan otoritas</b>: jadwalkan dialog tentang visi bersama, ciptakan safety culture, ikuti 'right to say no' untuk konstruktivitas."}
    ],
    wawancara:[
      {t:"Simon Sinek: Why Good Leaders Make You Feel Safe",c:"Safety and Team Psychology",q:[
        ["Apa yang membuat karyawan merasa aman melaporkan kabar buruk?","Safety budaya, bukan proses semata. Leader yang membuat tim aman akan menerima kabar buruk terbuka, bukan menyalahkan."],
        ["Authority vs kepercayaan — peranannya?","Authority tidak menjamin kepercayaan. Orang yang paling kamu ikuti mungkin tidak punya jabatan resmi, namun jadi model yang paling ditiru."],
        ["Mengapa 'just culture' krusial di proyek?","Tanpa safety, kecemasan membuat orang menyembunyikan kesalahan justru pada fase wajib dilaporkan — meningkatkan risiko proyek."]]},
      {t:"Daniel Goleman: Emotional Intelligence in Leadership",c:"Diagnosis Kathy Smith",q:[
        ["Unsur EI apa yang paling kurang dimiliki Kathy?","Empathy — Kathy mengutamakan ritmenya, tak menyesuaikan budaya tim lokal di Asia Tenggara."],
        ["Ini kesalahan manajerial atau kepemimpinan?","Keduanya: manajerial (gagal kelola sumber daya manusia lintas budaya) dan kepemimpinan (kehilangan empati serta social skill)."],
        ["Bagaimana Kathy perbaiki situasinya?","Jadwalkan pertemuan satu per satu dengan stakeholder lokal; dengarkan sebelum memimpin. Leadership bukan hanya motivasi, tapi juga mendengarkan aktif."]]},
      {t:"3M Post-it: The Accidental Billion Dollar Invention",c:"Berburu Champion",q:[
        ["Apa peran champion dalam inovasi proyek?","Champion adalah orang yang bertaruh pada ide — walau risiko gagal tinggi. 16/17 produk sukses punya champion."],
        ["Creative originator vs entrepreneur — bedanya?","Originator ciptakan ide asli; entrepreneur kemas dan jual ke seluruh org. Keduanya diperlukan agar ide bisa berkembang."],
        ["Traditional vs non-traditional champion?","Traditional: pemahaman teknis, koordinasi, kontrol. Non-traditional: visionary, politician, cheerleader — membangun dukungan di luar tim."]]},
      {t:"Dieselgate: The Volkswagen Emissions Scandal",c:"Etika vs Keuntungan",q:[
        ["Di titik manakah Dieselgate seharusya berhenti?","Setiap tahap keputusan etis: engineering, middle management, board — semua punya kesempatan menghentikan, tapi tidak berbuat apa-apa."],
        ["Bagaimana 'absolute honesty' Block dilanggar?","Software dimanipulasi untuk menyembunyikan emisi sebenarnya. Visi dibungkam, bukan didialogkan melalui proses Block partnership."],
        ["Mengapa menghentikan lebih sulit dibanding membiayai?","Ini escalation of commitment level ekstram — sudah terlalu jalan. Setiap langkah memperdalam 'sunk cost' yang sudah ada."]]},
      {t:"Leadership Gap: Kewenangan vs Tanggung Jawab",c:"Human Resource Constraints",q:[
        ["Bagaimana memotivasi tim tanpa otoritas memecat/bonus?","Gunakan pengaruh, bukan otoritas: visi bersama, kepercayaan, dan 'right to say no' untuk menjaga konstruktivitas."],
        ["Apakah pengakuan lebih kuat dari insentif formal?","Ya — ketika otoritas terbatas, pengakuan atas kontribusi kongkret jauh lebih kuat karena tidak terikat budget formal."],
        ["Tim teknis VW tak bisa memecat: apa yang harus dilakukan?","Dorong budaya etis (whistleblower protection), jangan ikut menyelesaikan masalah teknis. Fokus pada safety culture agar kabar buram tak tersembunyi."]]}
    ]
  },
  {
    label:"Pertemuan 5", sub:"Bab 5 · Scope Management",
    cards:[
      {icon:"🧭",h:"Scope Management Fundamentals",lvl:"KONSEP",p:"Project scope = segala sesuatu tentang proyek: work content, expected outcomes, quality standards. Six scope management activities: (1) conceptual development, (2) scope statement, (3) work authorization, (4) scope reporting, (5) control systems, (6) project closeout."},
      {icon:"🎯",h:"Conceptual Development",lvl:"FASILITAS",p:"Problem/need statement, requirements gathering (product/quality/performance), information gathering, constraints, alternative analysis, project objectives, business case. Contoh: Freefield Township health grant proposal."},
      {icon:"📋",h:"Statement of Work",lvl:"DOKUMEN",p:"SOW = deskripsi naratif rinci pekerjaan. Elemen: intro/background, technical description, timeline/milestones, objectives, scope, tasks, selection criteria, deliverables, security, place of performance. 1908 Wright Brothers (1 hal) vs F-35 (100 hal)."},
      {icon:"🔨",h:"Work Breakdown Structure",lvl:"WBS",p:"Hierarchical decomposition of total scope. Level 1 (Project) → Level 2 (Deliverable) → Level 3 (Subdeliverable) → Level 4 (Work Package). 6 purposes: echo objectives, org chart, cost/schedule tracking, communication, control, scope baseline."},
      {icon:"🔄",h:"Control Systems & Config Mgmt",lvl:"CONTROL",p:"6 control systems: configuration control, design control, trend monitoring, document control, acquisition control, specification control. Config Management 4 stages: identification, review, control, status accounting."},
      {icon:"♻️",h:"Project Closeout & Sustainability",lvl:"SUSTAIN",p:"Closeout: historical records, post-project analysis, financial closeout. Sustainability triple bottom line: economic, social, environmental. Prinsip: 'doing well by doing right'."}
    ],
    blocks:[
      {icon:"📊",h:"WBS Hierarchy & Work Package",lvl:"STRUKTUR",items:[
        "Hierarchy: Level 1 (Project) → Level 2 (Deliverable) → Level 3 (Subdeliverable) → Level 4 (Work Package). Work package = unit terkecil yang assignable.",
        "7 points: (1) lowest level in WBS, (2) has deliverable, (3) one owner, (4) mini-project, (5) may include milestones, (6) fits org culture, (7) trackable by labor hours/cost/time/risk.",
        "WBS codes (1.0, 1.1, 1.1.1, etc.) assigned by accounting untuk cost allocation dan financial control."]},
      {icon:"⚙️",h:"Configuration Management Stages",lvl:"PROSES",items:[
        "Stage 1 - Identification: develop WBS to activity level, analyze component specifications.",
        "Stage 2 - Review: meet stakeholders, agree on current project definition & component specs.",
        "Stage 3 - Control: refine breakdown, resolve disagreements by cycling back to original scope/WBS.",
        "Stage 4 - Status accounting: maintain memory of all configurations, cycle back to previous versions if needed."]},
      {icon:"🌱",h:"Triple Bottom Line Sustainability",lvl:"ETHICS",items:[
        "Economic: profit, revenue, cost efficiency — proyek harus feasible secara finansial.",
        "Social: fair labor, community impact, stakeholder wellbeing — Qatar World Cup contoh kegagalan.",
        "Environmental: carbon footprint, waste reduction, resource conservation — minimize negative impact."]}
    ],
    table:{
      title:"WBS vs OBS",
      note:"WBS = struktur logis proyek; OBS = struktur organisasi biaya. Keduanya saling melengkapi untuk cost control.",
      first:"Aspek",
      low:"▸ WBS", diff:"▸ OBS",
      rows:[
        ["Fokus","Dekomposisi scope kerja","Assign work ke departemen/orang"],
        ["Struktur","Hierarchy deliverable → work package","Hierarchy departemen → cost account"],
        ["Output","Identifikasi semua elemen proyek","Link work packages ke cost accounts"],
        ["Komunikasi","Bagaimana pieces fit together","Siapa yang bertanggung jawab"],
        ["Kontrol","Scope baseline & activity tracking","Budget & cost control per department"],
        ["Contoh","IT Installation: 11 deliverables","3 departments: IT, Procurement, HR"]
      ]
    },
    quiz:[
      {c:"Scope Management",q:"Apa perbedaan project scope dan scope management?",o:["Scope = apa yang dilakukan; Management = proses mengontrol scope","Scope = timeline; Management = budget","Scope = hasil; Management = proses","Scope = resources; Management = team"]},
      {c:"Conceptual Development",q:"Langkah ke-3 dalam conceptual development adalah?",o:["Problem/need statement","Requirements gathering","Information gathering","Constraints"]},
      {c:"WBS",q:"Apa tingkatan terendah dari Work Breakdown Structure?",o:["Deliverable","Subdeliverable","Work package","Task"]},
      {c:"Config Management",q:"Tahap ke-3 dalam Configuration Management adalah?",o:["Configuration identification","Configuration review","Configuration control","Status accounting"]},
      {c:"Project Closeout",q:"Apa tiga elemen penting project closeout?",o:["Historical records, post-project analysis, financial closeout","Budget, schedule, scope","Documentation, testing, handover","Lessons learned, audit, termination"]},
      {c:"Sustainability",q:"Apa isi dari 'triple bottom line' sustainability?",o:["Economic, social, environmental","Cost, time, scope","Quality, risk, communication","Planning, execution, closeout"]}
    ],
    wawancara:[
      {t:"Berlin Brandenburg Airport: A Scope Management Catastrophe",c:"Scope Failure",q:[
        ["Apa perkiraan biaya awal vs biaya akhir?","Awal $2.1 miliar, akhirnya naik jadi $7+ miliar — scope tak terkontrol."],
        ["Apa penyebab utama delay?", "Politisi mengganti CEO berulang kali, bukan ahli infrastruktur. 800 fire spotter menggantikan sistem pemadam yang bermasalah."],
        ["Pelajaran utama?", "Scope management harus dimulai dengan perencanaan matang. Political interference & keputungan personal = resep bencana."]]},
      {t:"Death March Projects: IT Project Nightmare",c:"Box 5.1",q:[
        ["Apa definisi death march project?", "Proyek yang parameters melebihi norma setidaknya 50% — jadwal setengah, tim setengah, budget setengah."],
        ["Mengapa death march umum?", "Politik, naive promises, naive optimism, start-up mentality, Marine Corps attitude — semua sumber rasa lelah."],
        ["Bagaimana mencegah?", "Start with the end in mind: pastikan budget, personil, jadwal mendukung keberhasilan proyek."]]},
      {t:"Statement of Work Evolution: 1908 vs 2001",c:"SOW Complexity",q:[
        ["Berapa halaman SOW Wright Brothers 1908?", "Hanya 1 halaman — ringkas: bisa dilepas, dirakit dalam 1 jam, portabel di kereta."],
        ["Berapa halaman SOW F-35 2001?", "Hampir 100 halaman dengan 300+ paragraf requirements — jauh lebih kompleks."],
        ["Apa pelajaran evolusi SOW?", "SOW semakin kompleks seiring produk canggih & regulasi legal ketat. Detail penting tapi harus readable."]]},
      {t:"Qatar World Cup 2022: Sustainability vs Labor Rights",c:"Triple Bottom Line",q:[
        ["Berapa jumlah pekerja asing impor di Qatar?", "Diperkirakan 1.8 juta pekerja asing untuk stadion construction."],
        ["Masalah sustainability apa?", "Social sustainability gagal: pekerja dibandingkan sebagai 'slave labor', estimated 7000 kematian."],
        ["Prinsip sustainability yang dilanggar?", "Values and ethics: etis sustainability harus prioritas, bukan sekadar 'doing well by doing right'."]]},
      {t:"Defining Project Work Package",c:"WBS Best Practice",q:[
        ["Work package harus memiliki berapa owner?", "Satu — satu orang yang 'directly answerable' untuk work package."],
        ["Work package bisa dianggap sebagai apa lagi?", "Mini-project sendiri — finite length, budget, deliverable tersedia."],
        ["Apa metrik untuk track work package?", "Labor hours, calendar time, cost, report period, risk — semua harus measurable."]]}
    ]
  }
  ]
};
