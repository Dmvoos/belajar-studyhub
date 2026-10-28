window.DATA_STATISTIKA_BISNIS = {
  id:"statistika-bisnis",
  title:"Statistika Bisnis",
  eyebrow:"Business Statistics · PTM · Lind, Marchal & Wathen (2018)",
  summary:"Fondasi statistika bisnis: definisi, tipe variabel & level pengukuran, distribusi frekuensi & grafik, hingga ukuran pemusatan, dispersi, empirical rule, dan data location. Peta lengkap + kuis + kartu wawancara.",
  pertemuan:[
  {
    label:"Pertemuan 1", sub:"Introduction to Business Statistics",
    cards:[
      {icon:"📊",h:"Definisi Statistik",lvl:"KONSEP",p:"Ilmu mengumpulkan, mengorganisasi, menyajikan, menganalisis, & menginterpretasi data untuk membantu pengambilan keputusan yang lebih efektif (Lind, Marchal, Wathen)."},
      {icon:"🧮",h:"Descriptive vs Inferential",lvl:"TIPE",p:"Descriptive = mengorganisasi/merangkum/menyajikan data. Inferential = mengestimasi sifat populasi berdasarkan sampel."},
      {icon:"👥",h:"Population vs Sample",lvl:"SASARAN",p:"Population = seluruh individu/objek yang diminati. Sample = bagian/portion dari population."},
      {icon:"🏷️",h:"Variabel & Level Pengukuran",lvl:"DATA",p:"Kualitatif vs Kuantitatif (discrete/continuous); empat level: Nominal, Ordinal, Interval, Ratio."}
    ],
    blocks:[
      {icon:"🎯",h:"Kegunaan Statistik",lvl:"FUNGSI",items:[
        "Describe (mendeskripsikan), Forecasting (peram), Interpreting (menafsirkan)",
        "Ditemukan di: laporan ekonomi (inflasi, GDP, suku bunga), kependudukan, anggaran",
        "Untuk business decision making (pricing, strategi, pemasaran, anggaran) & riset bisnis"]},
      {icon:"🧮",h:"Descriptive vs Inferential",lvl:"DUA CABANG",items:[
        "Descriptive: metode mengorganisasi, merangkum, menyajikan data secara informatif",
        "Inferential: metode mengestimasi sifat populasi berdasarkan sampel"]},
      {icon:"👥",h:"Population vs Sample",lvl:"SASARAN",items:[
        "Population: seluruh set individu/objek yang diminati (atau pengukurannya)",
        "Sample: portion/part dari population yang diminati"]},
      {icon:"🏷️",h:"Tipe Variabel",lvl:"VARIABEL",items:[
        "Qualitative (contoh: warna)",
        "Quantitative: Discrete (contoh: jumlah kamar hotel) & Continuous (contoh: berat)"]},
      {icon:"📏",h:"Level Pengukuran",lvl:"4 LEVEL",items:[
        "Nominal — label/nama, hanya diklasifikasikan & dihitung",
        "Ordinal — peringkat/ranking relatif",
        "Interval — jarak antar nilai bermakna (skala unit diketahui)",
        "Ratio — punya zero bermakna & rasio antar nilai"]}
    ],
    table:{
      title:"Empat Level Pengukuran",
      note:"Menentukan metode analisis & grafik yang tepat untuk setiap data.",
      first:"Level",
      low:"▸ Karakteristik", diff:"▸ Contoh",
      rows:[
        ["Nominal","Hanya diklasifikasikan (label/nama)","Warna mobil, nomor jersey"],
        ["Ordinal","Diperingkat/ranking","Class rank, peringkat tim"],
        ["Interval","Selisih antar nilai bermakna; zero tidak bermakna","Suhu, ukuran baju"],
        ["Ratio","Zero bermakna & rasio antar nilai","Jumlah penjualan, jarak ke kampus"]
      ]
    },
    quiz:[
      {c:"Definisi",q:"Statistics didefinisikan sebagai…",o:["Seni mengolah data secara acak","Ilmu mengumpulkan, mengorganisasi, menyajikan, menganalisis, & menginterpretasi data untuk keputusan lebih efektif","Nama lain untuk rata-rata","Metode menghitung pajak"],a:1,x:"<b>Statistics</b> = science of collecting, organizing, presenting, analyzing, and interpreting data to assist effective decisions."},
      {c:"Descriptive",q:"Descriptive statistics adalah…",o:["Metode mengorganisasi, merangkum, & menyajikan data dengan informatif","Metode mengestimasi sifat populasi dari sampel","Cara memprediksi masa depan saja","Nama lain inferensi"],a:0,x:"<b>Descriptive</b> = mengorganisasi, merangkum, menyajikan data secara informatif."},
      {c:"Inferential",q:"Inferential statistics adalah…",o:["Menyajikan data dalam diagram","Mengelompokkan data kualitatif","Metode mengestimasi sifat populasi berdasarkan sampel","Merangkum data mentah"],a:2,x:"<b>Inferential</b> = methods used to estimate a property of a population on the basis of a sample."},
      {c:"Population",q:"Population dalam statistik adalah…",o:["Bagian dari data yang diteliti","Seluruh himpunan individu/objek yang diminati atau pengukuran dari semuanya","Konsumen yang disurvei saja","Sampel acak"],a:1,x:"<b>Population</b> = the entire set of individuals or objects of interest (atau pengukuran dari semuanya)."},
      {c:"Sample",q:"Sample adalah…",o:["Bagian/portion dari population yang diminati","Seluruh populasi","Data yang dihapus","Nilai rata-rata"],a:0,x:"<b>Sample</b> = a portion, or part, of the population of interest."},
      {c:"Variabel",q:"Manakah yang termasuk variabel kualitatif (qualitative)?",o:["Jumlah kamar hotel","Berat badan","Warna","Umur"],a:2,x:"<b>Qualitative</b> = kategori (contoh: warna). Jumlah kamar & umur = quantitative; berat = quantitative continuous."},
      {c:"Discrete",q:"Jumlah kamar di hotel adalah contoh variabel…",o:["Continuous","Discrete","Nominal","Interval"],a:1,x:"<b>Discrete</b> = terhitung (jumlah kamar). Continuous = terukur (berat)."},
      {c:"Nominal",q:"Data yang hanya berupa label/nama dan bisa diklasifikasikan & dihitung berada pada level…",o:["Nominal","Ordinal","Interval","Ratio"],a:0,x:"<b>Nominal</b> = label/nama, hanya diklasifikasikan & dihitung (warna mobil, nomor jersey)."},
      {c:"Ordinal",q:"Class rank dan team standing termasuk level pengukuran…",o:["Nominal","Ordinal","Interval","Ratio"],a:1,x:"<b>Ordinal</b> = berdasarkan relative ranking/rating (class rank, peringkat tim)."},
      {c:"Ratio",q:"Level pengukuran yang punya zero bermakna & rasio antar nilai (misal jumlah penjualan, jarak) adalah…",o:["Nominal","Ordinal","Interval","Ratio"],a:3,x:"<b>Ratio</b> = skala dengan unit diketahui + interpretasi zero yang bermakna (penjualan, jarak)."},
      {c:"Interval",q:"Suhu (temperature) adalah contoh data level…",o:["Nominal","Ratio","Interval","Kualitatif diskrit"],a:2,x:"<b>Interval</b>: jarak antar nilai bermakna, tapi zero tidak bermakna (suhu 0°C bukan 'tidak ada panas')."}
    ],
    wawancara:[
      {t:"Laporan Inflasi",c:"Descriptive vs Inferential Statistics",q:[
        ["Konsep apa yang relevan?","Descriptive (mengorganisasi/merangkum/sajikan) vs inferential (estimasi sifat populasi dari sampel)."],
        ["Kapan pakai descriptive?","Saat menyajikan data yang sudah terkumpul (inflasi, GDP) secara informatif."],
        ["Kapan pakai inferential?","Saat mengestimasi karakteristik populasi dari sampel (misal survei)."]]},
      {t:"Survei Kepuasan",c:"Population vs Sample",q:[
        ["Konsep apa yang relevan?","Population = seluruh objek yang diminati; sample = bagiannya."],
        ["Mengapa sering pakai sample bukan populasi?","Praktis & hemat ketika populasi besar atau pengukuran merusak."],
        ["Syarat sample agar inferensi valid?","Representatif (idealnya random) agar mencerminkan populasi."]]},
      {t:"Klasifikasi Data",c:"Level of Measurement",q:[
        ["Konsep apa yang relevan?","Empat level: nominal (label), ordinal (peringkat), interval (jarak bermakna, zero tidak bermakna), ratio (zero bermakna & rasio)."],
        ["Mengapa suhu termasuk interval bukan ratio?","Zero pada suhu tidak berarti 'tidak ada panas'; rasio tidak bermakna."],
        ["Contoh data ratio?","Jumlah penjualan, jarak, berat — punya zero bermakna."]]},
      {t:"Variabel Riset Pasar",c:"Types of Variables",q:[
        ["Konsep apa yang relevan?","Kualitatif (kategori: warna) vs kuantitatif (angka: discrete terhitung, continuous terukur)."],
        ["Bedakan 'warna mobil' dan 'berat paket'.","Warna = kualitatif; berat = kuantitatif continuous; jumlah paket = kuantitatif discrete."],
        ["Mengapa klasifikasi ini penting?","Menentukan metode analisis & grafik yang tepat."]]}
    ]
  },
  {
    label:"Pertemuan 2", sub:"Descriptive Statistics — Frequency & Grafik",
    cards:[
      {icon:"📋",h:"Frequency Table",lvl:"TABEL",p:"Pengelompokan data kualitatif ke dalam class yang saling eksklusif & kolektif ekshaustif, menunjukkan jumlah observasi tiap class."},
      {icon:"📐",h:"Relative Frequency",lvl:"PROPORSI",p:"Frekuensi tiap class dibagi total (misal 62/200). Menunjukkan proporsi/persentase."},
      {icon:"📶",h:"Frequency Distribution",lvl:"KUANTITATIF",p:"4 langkah: tentukan jumlah class (2^k rule), class interval ((Max–Min)/k), batas class, dan tally."},
      {icon:"📈",h:"Grafik",lvl:"VISUAL",p:"Kualitatif: bar chart & pie chart. Kuantitatif: histogram, frequency polygon, cumulative frequency polygon (CFP)."}
    ],
    blocks:[
      {icon:"📋",h:"Frequency Table",lvl:"KUALITATIF",items:[
        "Grouping data kualitatif ke class mutually exclusive & collectively exhaustive",
        "Contoh: jumlah mobil terjual per lokasi (Jakarta 62, Tangerang 40, Bogor 55, Bandung 43; total 200)"]},
      {icon:"📐",h:"Relative Frequency",lvl:"PROPORSI",items:[
        "Frekuensi class / total frekuensi",
        "Contoh: Jakarta 62/200 = 0,31 (31%)"]},
      {icon:"📊",h:"Grafik Kualitatif",lvl:"BAR & PIE",items:[
        "Bar chart: kelas di sumbu horizontal, frekuensi di vertikal; tinggi proporsional frekuensi",
        "Pie chart: proporsi/persentase tiap class dari total"]},
      {icon:"📶",h:"4 Langkah Frequency Distribution",lvl:"KUANTITATIF",items:[
        "1 · Jumlah class: '2 to the k rule' — pilih k sehingga 2^k ≥ n (n=180 → 2^8=256 → 8 class)",
        "2 · Class interval = (Max – Min) / k, dibulatkan ke atas",
        "3 · Batas class yang jelas (hindari tumpang tindih, misal 1300–1400 & 1400–1500)",
        "4 · Tally: hitung observasi tiap class"]},
      {icon:"📈",h:"Grafik Distribusi",lvl:"VISUAL",items:[
        "Histogram: class di horizontal, frekuensi di vertikal, batang bersebelahan",
        "Frequency polygon: menghubungkan titik tengah class pada frekuensinya",
        "Cumulative frequency polygon (CFP): frekuensi kumulatif sepanjang class"]}
    ],
    table:{
      title:"Pilihan Grafik berdasarkan Jenis Data",
      note:"Pakai grafik yang sesuai agar pola data tampak tepat & menarik.",
      first:"Jenis Data",
      low:"▸ Grafik Utama", diff:"▸ Menunjukkan",
      rows:[
        ["Kualitatif","Bar chart","Frekuensi tiap kelas"],
        ["Kualitatif","Pie chart","Proporsi/persentase tiap kelas"],
        ["Kuantitatif berkelompok","Histogram","Frekuensi per class (batang bersebelahan)"],
        ["Kuantitatif berkelompok","Frequency polygon","Tren frekuensi via titik tengah class"],
        ["Kuantitatif berkelompok","Cumulative frequency polygon","Akumulasi frekuensi (berapa ≤ batas tertentu)"]]
    },
    quiz:[
      {c:"Frequency Table",q:"Frequency table adalah…",o:["Grafik lingkaran","Pengelompokan data kualitatif ke dalam class yang saling eksklusif & kolektif ekshaustif, menunjukkan jumlah observasi tiap class","Rata-rata data","Standar deviasi"],a:1,x:"<b>Frequency table</b> = grouping qualitative data into mutually exclusive & collectively exhaustive classes showing counts per class."},
      {c:"Relative",q:"Jika Jakarta menjual 62 dari total 200 mobil, relative frequency-nya adalah…",o:["62/200 = 0,31","62","200/62","0,62"],a:0,x:"<b>Relative frequency</b> = frekuensi class / total = 62/200 = 0,31 (31%)."},
      {c:"Bar Chart",q:"Bar chart digunakan untuk menampilkan…",o:["Data kuantitatif berkelompok","Distribusi frekuensi kumulatif","Data kualitatif (kelas di horizontal, frekuensi di vertikal)","Hubungan sebab-akibat"],a:2,x:"<b>Bar chart</b> untuk data kualitatif: kelas di sumbu horizontal, frekuensi di vertikal."},
      {c:"Pie Chart",q:"Pie chart menunjukkan…",o:["Nilai rata-rata","Proporsi/persentase tiap class dari total frekuensi","Nilai maksimum","Standar deviasi"],a:1,x:"<b>Pie chart</b> = proporsi/persentase tiap class dari total."},
      {c:"2^k Rule",q:"Dengan '2 to the k rule', untuk n=180 data, jumlah class yang dipakai adalah…",o:["5","6","7","8 (karena 2^8=256 > 180)"],a:3,x:"<b>2^k rule</b>: pilih k sehingga 2^k ≥ n. 2^8 = 256 > 180 → 8 class."},
      {c:"Interval",q:"Class interval ditentukan dengan rumus…",o:["(Max – Min) / k, biasanya dibulatkan ke atas","Max + Min","n / 2","k × 2"],a:0,x:"<b>Class interval</b> = (Max – Min) / k, biasanya dibulatkan ke atas."},
      {c:"Histogram",q:"Histogram (batang bersebelahan, class di horizontal, frekuensi di vertikal) digunakan untuk data…",o:["Kualitatif","Kuantitatif berkelompok (frequency distribution)","Nominal","Label"],a:1,x:"<b>Histogram</b> untuk data kuantitatif berkelompok; batang digambar bersebelahan."},
      {c:"Polygon",q:"Frequency polygon dibuat dengan menghubungkan…",o:["Potongan pie","Batang histogram secara acak","Titik tengah class pada frekuensinya, membentuk garis","Data kualitatif"],a:2,x:"<b>Frequency polygon</b> menghubungkan titik tengah class pada frekuensinya."},
      {c:"Cumulative",q:"Cumulative frequency polygon (CFP) menampilkan…",o:["Frekuensi kumulatif (akumulasi) sepanjang class","Hanya frekuensi per class","Persentase pie","Nilai mode"],a:0,x:"<b>CFP</b> = frekuensi kumulatif (akumulasi) sepanjang class."},
      {c:"Sifat Class",q:"Class dalam frequency table harus mutually exclusive & collectively exhaustive, artinya…",o:["Bisa tumpang tindih dan tidak perlu lengkap","Setiap observasi masuk tepat satu class dan semua observasi tercakup","Hanya untuk data kuantitatif","Bebas tumpang tindih"],a:1,x:"<b>Mutually exclusive</b> (tiap observasi tepat satu class) & <b>collectively exhaustive</b> (semua observasi tercakup)."}
    ],
    wawancara:[
      {t:"Data Profit Penjualan",c:"Frequency Distribution (4 Langkah)",q:[
        ["Konsep apa yang relevan?","Frequency distribution: 4 langkah — jumlah class (2^k rule), class interval ((Max–Min)/k), batas class, tally."],
        ["Untuk n=180, berapa class menurut 2^k rule?","2^8 = 256 > 180, jadi 8 class."],
        ["Mengapa batas class tidak boleh tumpang tindih?","Agar setiap observasi masuk tepat satu class (mutually exclusive)."]]},
      {t:"Menentukan Jumlah Class",c:"2 to the k Rule",q:[
        ["Konsep apa yang relevan?","Aturan 2^k: pilih k sehingga 2^k ≥ n (jumlah data)."],
        ["Jika n=50, berapa class?","2^6 = 64 ≥ 50, jadi 6 class."],
        ["Apa risiko terlalu banyak/sedikit class?","Terlalu banyak: pola kabur; terlalu sedikit: detail hilang."]]},
      {t:"Laporan Penjualan Mobil",c:"Bar Chart vs Pie Chart",q:[
        ["Konsep apa yang relevan?","Keduanya untuk data kualitatif: bar chart menampilkan frekuensi, pie chart menampilkan proporsi/persentase."],
        ["Kapan pilih pie chart?","Saat ingin menekankan kontribusi tiap kategori terhadap total."],
        ["Kapan pilih bar chart?","Saat ingin membandingkan besaran antar kategori dengan presisi."]]},
      {t:"Distribusi Profit",c:"Histogram & Frequency Distribution",q:[
        ["Konsep apa yang relevan?","Histogram untuk data kuantitatif berkelompok; batang bersebelahan, horizontal = class, vertikal = frekuensi."],
        ["Apa yang bisa dibaca dari bentuk histogram?","Pusat data, sebaran, dan kemiripan dengan distribusi normal."],
        ["Bedanya dengan frequency polygon?","Polygon menghubungkan titik tengah class; histogram memakai batang."]]}
    ]
  },
  {
    label:"Pertemuan 3", sub:"Numerical Description — Pemusatan, Dispersi, Lokasi",
    cards:[
      {icon:"🎯",h:"Parameter vs Statistic",lvl:"KONSEP",p:"Parameter = karakteristik populasi (population mean). Statistic = karakteristik sampel (sample mean)."},
      {icon:"📍",h:"Mean, Median, Mode",lvl:"PEMUSATAN",p:"Mean (rata-rata), Median (titik tengah setelah diurutkan), Mode (paling sering muncul). Median tidak terpengaruh outlier."},
      {icon:"📏",h:"Dispersi",lvl:"SEBARAN",p:"Range, variance, standard deviation. Standard deviation paling sering dipakai. Dispersion mengukur variasi/sebaran data."},
      {icon:"🔔",h:"Empirical Rule & Chebyshev",lvl:"ATURAN",p:"Empirical rule (normal): ±1 SD≈68%, ±2 SD≈95%, ±3 SD≈99,7%. Chebyshev: minimal 1–1/k² dalam k SD (berlaku untuk segala distribusi)."}
    ],
    blocks:[
      {icon:"🎯",h:"Parameter vs Statistic",lvl:"KONSEP",items:[
        "Parameter = karakteristik populasi (contoh: population mean)",
        "Statistic = karakteristik sampel (contoh: sample mean)"]},
      {icon:"📍",h:"Mean, Median, Mode",lvl:"PEMUSATAN",items:[
        "Median = titik tengah nilai setelah diurutkan min→max; tidak dipengaruhi nilai ekstrem; bisa untuk ordinal+",
        "Mode = nilai yang muncul paling sering",
        "Relative position: symmetrical (ketiganya berimpit), +skewed, -skewed",
        "Weighted mean & geometric mean (untuk growth rate/rasio)"]},
      {icon:"📏",h:"Mengapa Dispersion?",lvl:"SEBARAN",items:[
        "Mengukur variasi/sebaran; rata-rata bisa menipu tanpa sebaran",
        "Analogi: mau menyeberangi sungai dengan kedalaman 30cm–4m?",
        "Ukuran: range, variance, standard deviation (paling sering dipakai)",
        "Lokasi: quartiles (4 bagian), deciles (10), percentiles (100)"]},
      {icon:"🔔",h:"Chebyshev & Empirical Rule",lvl:"ATURAN",items:[
        "Chebyshev: minimal 1–1/k² nilai dalam k SD (k>1), berlaku untuk segala bentuk distribusi",
        "Empirical rule (simetris bell): ±1 SD≈68%, ±2 SD≈95%, ±3 SD≈99,7%",
        "Contoh: mean $1000, SD $50 → 68% di $950–$1050; 95% di $900–$1100",
        "Grouped data: mean = Σ(f·midpoint)/Σf; std dev dari varians grouped"]},
      {icon:"📊",h:"Data Location",lvl:"VISUAL",items:[
        "Stem & leaf plot — menjaga bentuk data & menampilkan nilai",
        "Dot plot — setiap observasi sebagai titik",
        "Box plot — menampilkan median, quartile, dan outlier"]}
    ],
    table:{
      title:"Ukuran Pemusatan",
      note:"Pilih ukuran yang sesuai bentuk distribusi data.",
      first:"Ukuran",
      low:"▸ Definisi", diff:"▸ Sifat Penting",
      rows:[
        ["Mean","Jumlah nilai dibagi banyaknya observasi","Peka terhadap outlier; cocok untuk data simetris"],
        ["Median","Titik tengah setelah diurutkan min→max","Tidak terpengaruh nilai ekstrem; bisa untuk ordinal+"],
        ["Mode","Nilai yang muncul paling sering","Bisa tidak unik/tidak ada; kurang stabil"]]
    },
    quiz:[
      {c:"Parameter",q:"Parameter adalah…",o:["Karakteristik dari populasi (misal population mean)","Karakteristik dari sampel","Nama lain statistik deskriptif","Nilai median"],a:0,x:"<b>Parameter</b> = a characteristic of a population (contoh: population mean)."},
      {c:"Statistic",q:"Statistic adalah…",o:["Karakteristik populasi","Karakteristik sampel (misal sample mean)","Seluruh data","Zero bermakna"],a:1,x:"<b>Statistic</b> = a characteristic of a sample (contoh: sample mean)."},
      {c:"Median",q:"Median adalah…",o:["Nilai yang muncul paling sering","Jumlah semua nilai dibagi banyaknya","Titik tengah nilai setelah diurutkan dari minimum ke maksimum","Selisih max dan min"],a:2,x:"<b>Median</b> = the midpoint of the values after ordering from minimum to maximum."},
      {c:"Mode",q:"Mode adalah…",o:["Nilai observasi yang muncul paling sering","Titik tengah data","Rata-rata tertimbang","Standar deviasi"],a:0,x:"<b>Mode</b> = the value of observation that appears most frequently."},
      {c:"Median Sifat",q:"Sifat penting median adalah…",o:["Selalu sama dengan mean","Tidak dipengaruhi nilai ekstrem (outlier besar/kecil)","Hanya untuk data nominal","Tidak bisa untuk data ordinal"],a:1,x:"Median <b>tidak dipengaruhi nilai ekstrem</b> dan dapat dihitung untuk data ordinal ke atas."},
      {c:"Dispersi",q:"Range, variance, dan standard deviation termasuk ukuran…",o:["Pemusatan (central tendency)","Level pengukuran","Dispersi (sebaran data)","Kualitatif"],a:2,x:"Ketiganya = <b>measures of dispersion</b> (sebaran). Standard deviation yang paling sering dipakai."},
      {c:"Empirical 68",q:"Menurut Empirical Rule, sekitar 68% observasi berada dalam…",o:["±1 standar deviasi dari mean","±2 standar deviasi","±3 standar deviasi","±0,5 standar deviasi"],a:0,x:"<b>Empirical rule</b>: ±1 SD ≈ 68%, ±2 SD ≈ 95%, ±3 SD ≈ 99,7% (distribusi simetris bell-shaped)."},
      {c:"Empirical 95",q:"Sekitar 95% observasi berada dalam…",o:["±1 SD","±2 SD","±3 SD","±4 SD"],a:1,x:"±2 SD ≈ 95% (contoh: mean $1000, SD $50 → $900–$1100)."},
      {c:"Chebyshev",q:"Chebyshev's Theorem menyatakan proporsi nilai dalam k SD dari mean minimal…",o:["68%","95%","99,7%","1 – 1/k² (untuk k > 1), berlaku untuk segala bentuk distribusi"],a:3,x:"<b>Chebyshev</b>: minimal 1 – 1/k² dalam k SD (k>1); berlaku untuk SEMUA distribusi (tidak harus normal)."},
      {c:"Quartile",q:"Quartiles membagi sekumpulan observasi menjadi…",o:["Empat bagian sama besar","Dua bagian","Sepuluh bagian","Seratus bagian"],a:0,x:"<b>Quartiles</b> = 4 bagian sama besar; <b>Deciles</b> = 10; <b>Percentiles</b> = 100."},
      {c:"Percentile",q:"Percentiles membagi observasi menjadi…",o:["Empat bagian","Sepuluh bagian","Seratus bagian","Dua bagian"],a:2,x:"<b>Percentiles</b> = divide observations into HUNDRED equal parts."}
    ],
    wawancara:[
      {t:"Gaji Karyawan",c:"Mean vs Median untuk Data Miring",q:[
        ["Konsep apa yang relevan?","Relative position mean-median-mode: pada data skewed, median lebih representatif karena tidak dipengaruhi outlier."],
        ["Untuk data gaji dengan beberapa gaji sangat besar, ukur mana?","Median — tidak terpengaruh nilai ekstrem."],
        ["Kapan mean cocok?","Data simetris tanpa outlier ekstrem."]]},
      {t:"Menyeberangi Sungai",c:"Why Study Dispersion",q:[
        ["Konsep apa yang relevan?","Dispersion (range/variance/SD) mengukur variasi/sebaran data."],
        ["Apa maksud analogi 'menyeberangi sungai kedalaman 30cm–4m'?","Rata-rata bisa menipu; sebaran penting untuk keputusan."],
        ["Ukuran dispersi mana yang paling sering dipakai?","Standard deviation."]]},
      {t:"Pengeluaran Katering",c:"Empirical Rule",q:[
        ["Konsep apa yang relevan?","Empirical rule (normal/simetris bell): ±1 SD≈68%, ±2 SD≈95%, ±3 SD≈99,7%."],
        ["Jika mean $1000, SD $50, 68% pengeluaran berada di mana?","$950–$1050 (mean ±1 SD)."],
        ["95% berada di mana?","$900–$1100 (mean ±2 SD)."]]},
      {t:"Pilihan Ukuran Pemusatan",c:"Mean, Median, Mode",q:[
        ["Konsep apa yang relevan?","Tiga ukuran pemusatan: mean (rata-rata), median (titik tengah), mode (paling sering)."],
        ["Mengapa posisi mean-median-mode berguna?","Menunjukkan simetris (ketiganya berimpit) atau skewed (+/-)."],
        ["Apa kelemahan mode?","Bisa tidak unik/tidak ada; kurang stabil."]]},
      {t:"Mean Data Berkelompok",c:"Grouped Data Mean & Std Dev",q:[
        ["Konsep apa yang relevan?","Untuk data berkelompok, mean = Σ(f·midpoint)/Σf; std dev dari varians grouped."],
        ["Apa itu midpoint class?","Titik tengah tiap class (rata-rata batas bawah & atas)."],
        ["Mengapa perlu frekuensi?","Sebagai bobot tiap midpoint dalam perhitungan."]]}
    ]
  }
  ]
};
