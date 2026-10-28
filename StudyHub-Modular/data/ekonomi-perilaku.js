window.DATA_EKONOMI_PERILAKU = {
  id:"ekonomi-perilaku",
  title:"Ekonomi Perilaku",
  eyebrow:"Ekonomi Perilaku / Pengambilan Keputusan",
  summary:"Bias kognitif yang memengaruhi keputusan: framing effect, mental accounting, sunk cost fallacy, anchoring, loss aversion, dan bias tambahan lainnya.",
  pertemuan:[
  {
    label:"Pertemuan 1", sub:"Bias Utama",
    cards:[
      {icon:"🖼️",h:"Framing Effect",lvl:"BIAS",p:"Cara menyajikan informasi (bingkai rugi vs cuan) mengubah pilihan, meski isi numeriknya sama."},
      {icon:"💰",h:"Mental Accounting",lvl:"BIAS",p:"Uang dipilah ke 'rekening' psikologis; orang memperlakukan uang seolah tidak fungible meski secara ekonomi setara."},
      {icon:"⏳",h:"Sunk Cost Fallacy",lvl:"BIAS",p:"Terus melanjutkan karena biaya yang sudah dikeluarkan, meski secara rasional seharusnya berhenti."},
      {icon:"⚓",h:"Anchoring & Loss Aversion",lvl:"BIAS",p:"Tergantung pada angka pertama (anchor); kerugian terasa sekitar 2x lebih menyakitkan dibanding keuntungan setara."}
    ],
    blocks:[
      {icon:"🖼️",h:"Framing Effect",lvl:"KONSEP",items:[
        "Rangka 'rugi' vs 'cuan' mengubah preferensi risiko",
        "Gain → risk-averse; Loss → risk-seeking (prospect theory)"]},
      {icon:"💰",h:"Mental Accounting",lvl:"KONSEP",items:[
        "Uang punya 'label' (uang makan vs uang hadiah)",
        "Memicu pemborosan di satu rekening, hemat di rekening lain"]},
      {icon:"⏳",h:"Sunk Cost Fallacy",lvl:"KONSEP",items:[
        "Biaya yang sudah keluar memengaruhi keputusan ke depan",
        "Rasional: abaikan sunk cost, lihat manfaat marginal ke depan"]},
      {icon:"⚓",h:"Anchoring & Loss Aversion",lvl:"KONSEP",items:[
        "Anchor: estimasi/angka pertama mengunci penilaian berikutnya",
        "Loss aversion: rasa sakit rugi ≈ 2x rasa senang cuan setara"]}
    ],
    quiz:[
      {c:"Framing",q:"Framing effect adalah…",o:["Kecenderungan memilih opsi berdasarkan cara penyajian informasi","Kesalahan menghitung probabilitas","Ketergantungan pada angka pertama","Ketidakmampuan mengingat masa lalu"],a:0,x:"<b>Framing</b> = cara menyajikan (bingkai) informasi mengubah pilihan, meski isi numeriknya sama."},
      {c:"Framing Gain",q:"Menurut prospect theory, ketika sebuah pilihan dibingkai sebagai gain (cuan), orang cenderung…",o:["Risk-seeking (mencari risiko)","Risk-averse (menghindari risiko)","Netral terhadap risiko","Impulsif"],a:1,x:"Gain → <b>risk-averse</b>; Loss → risk-seeking. Bingkai berbeda → preferensi risiko berlawanan."},
      {c:"Mental Accounting",q:"Mental accounting menjelaskan bahwa orang…",o:["Menganggap semua uang setara dan fungible","Memperlakukan uang sebagai bagian dari 'rekening' psikologis terpisah","Selalu memaksimalkan utilitas ekonomi","Mengabaikan pajak sepenuhnya"],a:1,x:"<b>Mental accounting</b> = uang dipilah ke kategori psikologis; diperlakukan tidak fungible meski setara."},
      {c:"Sunk Cost",q:"Sunk cost fallacy terjadi ketika…",o:["Seseorang terus melanjutkan karena biaya yang sudah dikeluarkan","Seseorang mengabaikan seluruh biaya","Seseorang selalu memilih opsi termurah","Seseorang menghitung opportunity cost"],a:0,x:"<b>Sunk cost fallacy</b> = keputusan dipengaruhi biaya tak dapat dikembalikan. Rasional: abaikan sunk cost, lihat manfaat ke depan."},
      {c:"Sunk Cost Contoh",q:"Manakah yang merupakan contoh sunk cost fallacy?",o:["Tetap nonton film buruk sampai selesai karena sudah beli tiket","Memilih restoran yang lebih murah","Menghitung biaya peluang dengan cermat","Menyimpan uang di rekening terpisah"],a:0,x:"Nonton film buruk karena <b>sudah beli tiket</b> (biaya tak kembali) adalah contoh klasik sunk cost fallacy."},
      {c:"Anchoring",q:"Anchoring adalah…",o:["Ketergantungan berlebihan pada angka/estimasi pertama","Ketakutan terhadap kerugian","Pembagian uang ke kategori mental","Bingkai informasi agar terlihat menarik"],a:0,x:"<b>Anchoring</b> = penilaian tertambat pada angka/estimasi pertama yang muncul."},
      {c:"Loss Aversion",q:"Loss aversion berarti…",o:["Rasa sakit karena kerugian jauh lebih besar daripada rasa senang karena keuntungan setara","Orang selalu menghindari semua risiko","Orang menyukai kerugian","Uang bersifat tidak fungible"],a:0,x:"<b>Loss aversion</b>: rasa sakit rugi ≈ <b>2x</b> rasa senang cuan setara."},
      {c:"Rasio",q:"Secara umum, kerugian dirasakan sekitar…",o:["Sama besarnya dengan keuntungan","Setengah dari keuntungan","Sekitar 2x lebih kuat daripada keuntungan setara","10x lebih kuat"],a:2,x:"Estimasi umum: <b>rugi terasa ~2x</b> lebih menyakitkan dibanding cuan setara."},
      {c:"Aplikasi",q:"Seorang manajer terus mendanai proyek yang jelas gagal hanya karena sudah mengeluarkan banyak dana. Ini contoh…",o:["Framing effect","Anchoring","Sunk cost fallacy","Mental accounting"],a:2,x:"Meneruskan karena <b>biaya yang sudah keluar</b> = sunk cost fallacy."},
      {c:"Aplikasi Framing",q:"Proyek disebut '80% peluang sukses' vs '20% peluang gagal' memberi kesan berbeda meski nilainya sama. Ini contoh…",o:["Framing effect","Mental accounting","Sunk cost fallacy","Escalation of commitment"],a:0,x:"<b>Framing</b>: 80% sukses (cuan) vs 20% gagal (rugi) — kesan & pilihan berbeda meski numeriknya identik."},
      {c:"Aplikasi Anchoring",q:"Dalam negosiasi, angka pertama Rp500 juta membuat tawar berikutnya cenderung berkisar di sekitarnya. Ini…",o:["Framing effect","Mental accounting","Sunk cost fallacy","Escalation of commitment"],a:1,x:"<b>Anchoring</b>: angka pertama (Rp500 juta) menjadi jangkar penilaian tawar-menawar berikutnya."},
      {c:"Mitigasi",q:"Cara paling tepat mengurangi bias dalam pengambilan keputusan adalah…",o:["Sengaja berpatokan pada angka pertama","Mengabaikan semua data yang ada","Evaluasi ulang dengan manfaat marginal ke depan, abaikan sunk cost","Selalu ikuti emosi saat itu"],a:2,x:"Abaikan <b>sunk cost</b>, evaluasi <b>manfaat marginal ke depan</b>; untuk anchoring, kumpulkan data independen sebelum terpapar angka pertama."}
    ],
    wawancara:[
      {t:"Rumah Impian",c:"Framing Effect",q:[
        ["Konsep apa yang paling relevan?","Framing effect: bingkai 'rugi' vs 'cuan' mengubah pilihan, meski nilai uang sama."],
        ["Jelaskan mengapa Q1 dan Q2 menghasilkan keputusan berbeda.","Q1 (cuan) membuat orang risk-averse; Q2 (rugi) membuat orang risk-seeking. Bingkai berbeda → preferensi risiko berbeda."],
        ["Jika Anda manajer, bagaimana menyajikan info agar tim tidak terjebak bingkai?","Sajikan kedua bingkai (cuan & rugi) secara bersamaan dengan angka yang sama agar keputusan berbasis nilai, bukan bingkai."]]},
      {t:"Dana Liburan vs Belanja",c:"Mental Accounting",q:[
        ["Konsep apa yang relevan?","Mental accounting: uang dipilah ke 'rekening' psikologis dan diperlakukan tidak fungible."],
        ["Mengapa uang bonus dan uang gaji sering diperlakukan berbeda?","Keduanya setara secara ekonomi, tapi bonus masuk 'rekening hiburan' sehingga lebih mudah dibelanjakan."],
        ["Jika mental accounting dihapus, apakah orang akan selalu alokasikan uang secara rasional?","Tidak otomatis — sistem 1 tetap memberi 'label' pada uang; desain anggaran eksplisit membantu, bukan menghapus bias."]]},
      {t:"Nonton Film Buruk",c:"Sunk Cost Fallacy",q:[
        ["Konsep apa yang paling relevan?","Sunk cost fallacy: biaya tak dapat dikembalikan (tiket) memengaruhi keputusan melanjutkan."],
        ["Mengapa orang tetap menyelesaikan hal yang sudah tidak menyenangkan?","Merasakan berhenti = 'membuang' biaya yang sudah dikeluarkan, meski biaya itu sudah hilang apa pun keputusannya."],
        ["Jika biaya tiket bisa dikembalikan 100%, apakah orang masih tetap nonton?","Banyak yang akan pergi — membuktikan keputusan dipandu sunk cost, bukan kesenangan saat ini."]]},
      {t:"Harga Coret",c:"Anchoring Effect",q:[
        ["Konsep apa yang relevan?","Anchoring: angka pertama (harga coret) menjadi jangkar penilaian nilai."],
        ["Jelaskan peran angka Rp500.000 dalam keputusan pembeli.","Angka itu mengunci persepsi 'mahal', sehingga Rp350.000 terasa seperti diskon besar meski nilai sebenarnya bisa berbeda."],
        ["Jika harga coret dihapus, apakah persepsi nilai akan objektif?","Tidak sepenuhnya — tanpa jangkar, pembeli memakai referensi internal yang juga bias."]]},
      {t:"Rugi vs Cuan",c:"Loss Aversion",q:[
        ["Konsep apa yang paling relevan?","Loss aversion: kerugian terasa sekitar 2x lebih menyakitkan dibanding keuntungan setara."],
        ["Mengapa orang lebih sulit melepas kerugian daripada meraih keuntungan?","Sistem evaluatif memberi bobot emosional lebih besar pada perubahan negatif daripada positif."],
        ["Jika rasa rugi dan rasa senang sama kuatnya, apakah keputusan menjadi netral?","Bisa lebih netral, tapi bias lain (status quo, endowment) tetap mendorong pilihan."]]},
      {t:"Status Quo",c:"Status Quo Bias",q:[
        ["Konsep apa yang relevan?","Status quo bias: kecenderungan mempertahankan keadaan saat ini meski ada alternatif lebih baik."],
        ["Mengapa orang enggan berpindah dari opsi yang sudah dikenal?","Berpindah dirasakan sebagai potensi kerugian dan menuntut usaha kognitif."],
        ["Jika tidak ada biaya untuk berpindah, apakah status quo bias hilang?","Tidak sepenuhnya — inersia dan preferensi implisit tetap menahan perubahan."]]},
      {t:"Efek Endowment",c:"Endowment Effect",q:[
        ["Konsep apa yang paling relevan?","Endowment effect: orang menilai barang yang dimiliki lebih tinggi daripada saat belum memiliki."],
        ["Mengapa pemilik meminta harga jual lebih tinggi dari harga beli?","Memiliki meningkatkan nilai subjektif; melepas dirasakan sebagai kerugian."],
        ["Jika barang belum dimiliki, apakah kesenjangan harga jual-beli tetap ada?","Bias berkurang tajam — kesenjangan muncul karena efek kepemilikan."]]},
      {t:"Averaging",c:"Averaging Bias",q:[
        ["Konsep apa yang relevan?","Averaging: penilaian dipengaruhi rata-rata konteks, bukan nilai absolut."],
        ["Mengapa sebuah opsi terlihat baik hanya karena berada di antara opsi ekstrem?","Otak membandingkan secara relatif terhadap rata-rata lokal, bukan nilai intrinsik."],
        ["Jika semua opsi dinilai secara terpisah, apakah averaging bias tetap kuat?","Bias melemah karena tidak ada konteks rata-rata yang terbentuk."]]}
    ]
  },
  {
    label:"Pertemuan 2", sub:"Bias Tambahan & Aplikasi",
    cards:[
      {icon:"🕳️",h:"Fundamental Attribution Error",lvl:"BIAS",p:"Tendensi menyalahkan disposisi/orang atas suatu peristiwa, sambil meremehkan faktor situasional."},
      {icon:"✨",h:"Halo Effect",lvl:"BIAS",p:"Kesan positif pada satu atribut (misal penampilan) mewarnai penilaian atribut lain (misal kompetensi)."},
      {icon:"🔍",h:"Confirmation Bias",lvl:"BIAS",p:"Mencari, menafsirkan, dan mengingat informasi yangconfirm/keyakinan yang sudah ada."},
      {icon:"🗺️",h:"Choice Architecture",lvl:"APLIKASI",p:"Cara memilih disajikan membentuk keputusan. Design yang etis (nudge) memandu tanpa menghilangkan kebebasan."}
    ],
    blocks:[
      {icon:"📰",h:"Availability Heuristic",lvl:"KONSEP",items:[
        "Menilai probabilitas dari kemudahan contoh muncul di pikiran",
        "Berita dramatis membuat orang overestimasi risiko"]},
      {icon:"🎯",h:"Representativeness Heuristic",lvl:"KONSEP",items:[
        "Menilai berdasarkan kesamaan dengan stereotip",
        "Mengabaikan probabilitas dasar (base rate)"]},
      {icon:"⚖️",h:"Atribusi & Bukti",lvl:"KRITIS",items:[
        "Pisahkan dugaan dari fakta: klaim keterlibatan masih dalam penyidikan",
        "Tunggu verifikasi sebelum menyimpulkan"]},
      {icon:"🧭",h:"Mitigasi Bias",lvl:"SOLUSI",items:[
        "Kumpulkan data independen sebelum terpapar angka pertama",
        "Wajib cari bukti berlawanan untuk lawan confirmation bias",
        "Sajikan kedua bingkai secara seimbang"]}
    ],
    quiz:[
      {c:"Availability",q:"Availability heuristic adalah…",o:["Menilai probabilitas dari kemudahan contoh muncul di pikiran","Menyalahkan orang atas peristiwa","Mengabaikan base rate","Menilai berdasarkan stereotip"],a:0,x:"<b>Availability</b>: kita menilai seberapa sering sesuatu terjadi berdasarkan betapa mudahnya contoh muncul di pikiran."},
      {c:"Availability Contoh",q:"Seseorang takut naik pesawat karena sering lihat berita kecelakaan, padahal statistik menunjukkan mobil lebih berbahaya. Ini contoh…",o:["Availability heuristic","Anchoring","Sunk cost fallacy","Mental accounting"],a:0,x:"Berita kecelakaan mudah diingat → membuat orang <b>overestimasi</b> risiko pesawat. Ini availability heuristic."},
      {c:"Representativeness",q:"Representativeness heuristic menyebabkan orang…",o:["Menilai berdasarkan kesamaan dengan stereotip, mengabaikan base rate","Selalu mengikuti data statistik","Mengabaikan stereotip sepenuhnya","Hanya percaya pada angka"],a:0,x:"<b>Representativeness</b>: menilai berdasarkan kesamaan dengan stereotip, sering mengabaikan probabilitas dasar."},
      {c:"Base Rate",q:"Mengabaikan probabilitas dasar saat menilai kemungkinan disebut kesalahan…",o:["Availability","Representativeness","Anchoring","Framing"],a:1,x:"Klasik <b>base rate neglect</b> — terkait erat dengan representativeness heuristic."},
      {c:"Confirmation Bias",q:"Confirmation bias adalah…",o:["Mencari dan memprioritaskan informasi yang sesuai keyakinan","Mengabaikan semua informasi","Selalu berpikir objektif","Mencari hanya bukti yang bertentangan"],a:0,x:"<b>Confirmation bias</b>: kita mencari & mengingat hal yang mendukung keyakinan, mengabaikan yang bertentangan."},
      {c:"Confirmation Mitigasi",q:"Cara paling efektif mengurangi confirmation bias adalah…",o:["Hanya percaya pada intuisi","Mewajibkan pencarian bukti yang bertentangan","Menghindari semua data","Ikut arus utama"],a:1,x:"Prosedur wajib mencari <b>diskonfirmasi</b> secara aktif terbukti efektif mengurangi confirmation bias."},
      {c:"Halo Effect",q:"Ketika penampilan menarik membuat orang langsung dinilai lebih kompeten, itu disebut…",o:["Halo effect","Availability heuristic","Anchoring","Sunk cost"],a:0,x:"<b>Halo effect</b>: kesan positif pada satu atribut menyebar ke penilaian atribut lain tanpa dasar bukti."},
      {c:"Atribusi",q:"Fundamental attribution error adalah kecenderungan untuk…",o:["Menyalahkan disposisi orang dan meremehkan faktor situasional","Selalu menyalahkan situasi","Tidak membuat atribusi sama sekali","Hanya menyalahkan diri sendiri"],a:0,x:"<b>Fundamental attribution error</b>: menyalahkan karakter/orang, meremehkan konteks situasi."},
      {c:"Dugaan vs Fakta",q:"Mengapa penting membedakan 'dugaan' dengan 'fakta terbukti' sebelum menyebarkan informasi?",o:["Karena kesimpulan dini memperkuat confirmation bias & menyebarkan misinformasi","Tidak penting, semua sama","Karena semua berita pasti benar","Karena tidak ada penyidikan"],a:0,x:"Menyimpulkan dari dugaan sebagai fakta memperkuat <b>confirmation bias</b> dan menyebarkan misinformasi."},
      {c:"Choice Architecture",q:"Choice architecture yang etis (nudge) sebaiknya…",o:["Menyajikan pilihan secara jujur & seimbang tanpa menghilangkan kebebasan","Memaksa satu pilihan","Menyembunyikan opsi lain","Manipulasi tanpa transparansi"],a:0,x:"Nudge yang etis: arahkan pilihan dengan <b>transparansi</b>, tetap pertahankan kebebasan memilih."}
    ],
    wawancara:[
      {t:"Keterlibatan Dugaan",c:"Atribusi & Bukti",q:[
        ["Konsep apa yang relevan?","Pisahkan dugaan dari fakta: klaim keterlibatan masih dalam penyidikan, bukan kebenaran final."],
        ["Mengapa penting menunggu verifikasi sebelum menyimpulkan?","Kesimpulan dini memperkuat confirmation bias dan menyebarkan misinformasi."],
        ["Jika bukti awal kuat tapi belum final, bagaimana menyajikannya?","Sajikan sebagai dugaan terverifikasi parsial dengan sumber & status proses, bukan sebagai fakta terbukti."]]},
      {t:"Desain Choice Architecture",c:"Aplikasi Bias",q:[
        ["Konsep apa yang paling relevan?","Choice architecture: mengatur cara pilihan disajikan untuk memandu keputusan tanpa menghilangkan kebebasan."],
        ["Bagaimana menggunakan framing secara etis?","Sajikan bingkai yang jujur & seimbang; hindari memanipulasi dengan menyembunyikan bingkai lawan."],
        ["Jika choice architecture diatur, apakah individu kehilangan otonomi?","Tidak selama opsi tetap tersedia (nudge), tapi perlu transparansi agar tidak menjadi manipulasi."]]},
      {t:"Berita Viral",c:"Availability Heuristic",q:[
        ["Konsep apa yang relevan?","Availability heuristic: menilai probabilitas dari kemudahan contoh muncul di pikiran."],
        ["Mengapa berita dramatis membuat orang overestimasi risiko?","Contoh emosional & baru lebih mudah diingat, jadi terasa lebih sering terjadi."],
        ["Jika data statistik dasar diberikan, apakah heuristik ini hilang?","Bisa dikoreksi, tapi kesan emosional sering tetap dominan tanpa data yang menonjol."]]},
      {t:"Kandidat Menarik",c:"Halo Effect",q:[
        ["Konsep apa yang relevan?","Halo effect: kesan positif pada satu atribut mewarnai penilaian atribut lain."],
        ["Mengapa penampilan menarik sering dinilai lebih kompeten?","Kesan pertama positif 'menyebar' ke penilaian kemampuan tanpa dasar bukti."],
        ["Jika penilaian berbasis data kinerja, apakah halo effect hilang?","Bisa ditekan, tapi bias tetap bekerja di bawah sadar pada penilaian cepat."]]},
      {t:"Tim yang Salah",c:"Fundamental Attribution Error",q:[
        ["Konsep apa yang relevan?","Fundamental attribution error: menyalahkan disposisi orang, meremehkan faktor situasional."],
        ["Mengapa orang cepat menyimpulkan karakter dari satu perilaku?","Kognitif lebih murah menyalahkan individu daripada menganalisis faktor situasional."],
        ["Jika informasi situasional diberikan lengkap, apakah bias ini hilang?","Bisa berkurang, tapi kecenderungan awal tetap muncul sebelum informasi diproses."]]},
      {t:"Riset yang Separatis",c:"Confirmation Bias",q:[
        ["Konsep apa yang relevan?","Confirmation bias: mencari & memprioritaskan informasi yang sesuai keyakinan."],
        ["Mengapa orang sulit menerima bukti yang bertentangan?","Bukti bertentangan menimbulkan ketidaknyamanan kognitif dan ancaman identitas."],
        ["Jika dipaksa mencari bukti berlawanan, apakah bias ini hilang?","Bisa dikurangi secara signifikan dengan prosedur wajib mencari diskonfirmasi."]]},
      {t:"Kasus yang Mirip Stereotip",c:"Representativeness Heuristic",q:[
        ["Konsep apa yang paling relevan?","Representativeness: menilai berdasarkan kesamaan dengan stereotip, mengabaikan probabilitas dasar."],
        ["Mengapa orang mengabaikan base rate dalam penilaian?","Kesamaan stereotip lebih mencolok daripada statistik abstrak."],
        ["Jika base rate ditekankan, apakah heuristik ini hilang?","Bisa diperbaiki, tapi representasi stereotip tetap menarik perhatian pertama."]]}
    ]
  }
  ]
};
