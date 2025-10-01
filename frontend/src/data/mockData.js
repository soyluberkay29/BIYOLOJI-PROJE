// Mock data for the photosynthesis education platform

export const photosynthesisSteps = [
  {
    id: 1,
    title: "Işık Enerjisinin Emilimi",
    description: "Klorofil molekülleri güneş ışığını emer ve enerjiyi kimyasal enerjiye dönüştürür.",
    phase: "light",
    duration: 3,
    molecules: ["klorofil", "su", "karbondioksit"],
    equation: "6CO₂ + 6H₂O + ışık enerjisi → C₆H₁₂O₆ + 6O₂",
    details: "Tilakoid zarlarındaki klorofil-a ve klorofil-b molekülleri ışık fotonlarını yakalar."
  },
  {
    id: 2,
    title: "Su Moleküllerinin Parçalanması",
    description: "Fotosistem II'de su molekülleri elektron, proton ve oksijen olarak ayrılır.",
    phase: "light",
    duration: 2,
    molecules: ["su", "oksigen", "elektron"],
    equation: "2H₂O → 4H⁺ + 4e⁻ + O₂",
    details: "Fotosentezin oksijen üreten aşaması. Elektron transfer zinciri başlar."
  },
  {
    id: 3,
    title: "ATP ve NADPH Üretimi",
    description: "Elektron taşıma zinciri boyunca ATP ve NADPH molekülleri üretilir.",
    phase: "light",
    duration: 4,
    molecules: ["ATP", "NADPH", "elektron"],
    equation: "ADP + Pi + enerji → ATP",
    details: "Kemiosmotik fosforilasyon ile ATP sentezi gerçekleşir."
  },
  {
    id: 4,
    title: "Calvin Döngüsü Başlangıcı",
    description: "CO₂ molekülleri RuBP ile birleşerek karbon fiksasyonu gerçekleşir.",
    phase: "dark",
    duration: 3,
    molecules: ["karbondioksit", "RuBP", "RuBisCO"],
    equation: "3CO₂ + 3RuBP → 6 3-PGA",
    details: "RuBisCO enzimi CO₂'yi organik moleküllere bağlar."
  },
  {
    id: 5,
    title: "Glukoz Sentezi",
    description: "ATP ve NADPH kullanılarak 3-PGA molekülleri glukoza dönüştürülür.",
    phase: "dark",
    duration: 5,
    molecules: ["ATP", "NADPH", "glukoz"],
    equation: "6 3-PGA + 6ATP + 6NADPH → C₆H₁₂O₆",
    details: "Calvin döngüsünün redüksiyon aşaması ile şeker üretimi tamamlanır."
  }
];

export const molecules = [
  {
    id: 1,
    name: "Klorofil-a",
    formula: "C₅₅H₇₂MgN₄O₅",
    type: "pigment",
    color: "#228B22",
    description: "Fotosentezde ışık enerjisini yakalayan ana pigment molekül",
    structure: "Porfirin halkası ve magnezyum iyonu içeren kompleks molekül",
    location: "Tilakoid zarları",
    function: "Işık enerjisini kimyasal enerjiye dönüştürme",
    absorption: "430nm ve 663nm dalga boyları"
  },
  {
    id: 2,
    name: "Klorofil-b",
    formula: "C₅₅H₇₀MgN₄O₆",
    type: "pigment",
    color: "#32CD32",
    description: "Yardımcı ışık toplama pigmenti",
    structure: "Klorofil-a'ya benzer ancak farklı yan gruplar içerir",
    location: "Tilakoid zarları",
    function: "Ek ışık enerjisi yakalama ve klorofil-a'ya aktarma",
    absorption: "453nm ve 642nm dalga boyları"
  },
  {
    id: 3,
    name: "Glukoz",
    formula: "C₆H₁₂O₆",
    type: "product",
    color: "#FFD700",
    description: "Fotosentezin ana ürünü olan şeker molekül",
    structure: "Altı karbonlu aldehit şeker",
    location: "Stroma",
    function: "Enerji depolama ve bitkisel metabolizma",
    absorption: "Üretilen ürün - ışık absorbe etmez"
  },
  {
    id: 4,
    name: "ATP",
    formula: "C₁₀H₁₆N₅O₁₃P₃",
    type: "energy",
    color: "#FF6347",
    description: "Adenozin trifosfat - hücresel enerji para birimi",
    structure: "Adenozin + 3 fosfat grubu",
    location: "Stroma",
    function: "Calvin döngüsünde enerji kaynağı",
    absorption: "Enerji taşıyıcı molekül"
  },
  {
    id: 5,
    name: "NADPH",
    formula: "C₂₁H₂₈N₇O₁₇P₃",
    type: "energy",
    color: "#4169E1",
    description: "Nikotinamid adenin dinükleotid fosfat - elektron taşıyıcı",
    structure: "NAD+ + fosfat grubu + hidrojen",
    location: "Stroma",
    function: "Calvin döngüsünde elektron donörü",
    absorption: "İndirgen haldeki elektron taşıyıcı"
  }
];

export const quizQuestions = [
  {
    id: 1,
    question: "Fotosentezin ışık reaksiyonları hangi organelde gerçekleşir?",
    options: [
      "Mitokondri",
      "Kloroplast tilakoidleri",
      "Çekirdek",
      "Ribozom"
    ],
    correct: 1,
    explanation: "Işık reaksiyonları kloroplastların tilakoid zarlarında gerçekleşir. Burada klorofil molekülleri ışık enerjisini yakalar.",
    difficulty: "easy",
    topic: "organeller"
  },
  {
    id: 2,
    question: "Calvin döngüsünün ana ürünü nedir?",
    options: [
      "Oksigen",
      "ATP",
      "Glukoz",
      "Karbondioksit"
    ],
    correct: 2,
    explanation: "Calvin döngüsü sonucunda CO₂'den glukoz üretilir. Bu karanlık reaksiyonların ana ürünüdür.",
    difficulty: "medium",
    topic: "calvin-cycle"
  },
  {
    id: 3,
    question: "RuBisCO enziminin görevi nedir?",
    options: [
      "ATP sentezi",
      "Karbondioksit fiksasyonu",
      "Oksigen üretimi",
      "NADPH oluşturma"
    ],
    correct: 1,
    explanation: "RuBisCO enzimi CO₂'yi RuBP ile birleştirerek karbon fiksasyonu gerçekleştirir. Bu Calvin döngüsünün ilk adımıdır.",
    difficulty: "hard",
    topic: "enzymes"
  },
  {
    id: 4,
    question: "Fotosentez denkleminde hangi molekül oksijenin kaynağıdır?",
    options: [
      "Karbondioksit (CO₂)",
      "Su (H₂O)",
      "Glukoz (C₆H₁₂O₆)",
      "ATP"
    ],
    correct: 1,
    explanation: "Fotosentez sırasında üretilen oksijen su moleküllerinin parçalanmasından gelir, CO₂'den değil.",
    difficulty: "medium",
    topic: "light-reactions"
  },
  {
    id: 5,
    question: "Klorofil hangi dalga boylarında en fazla ışık absorbe eder?",
    options: [
      "Yeşil ışık (550nm)",
      "Mavi ve kırmızı ışık (430nm, 663nm)",
      "Sarı ışık (580nm)",
      "Mor ötesi (UV) ışık"
    ],
    correct: 1,
    explanation: "Klorofil-a mavi (430nm) ve kırmızı (663nm) bölgelerde maksimum absorpsiyon gösterir. Yeşil ışığı yansıttığı için bitkiler yeşil görünür.",
    difficulty: "medium",
    topic: "pigments"
  }
];

export const labExperiments = [
  {
    id: 1,
    title: "Işık Şiddeti ve Fotosentez Hızı",
    description: "Farklı ışık şiddetlerinin fotosentez hızına etkisini inceleyin",
    duration: "15 dakika",
    difficulty: "Kolay",
    materials: ["Su bitkisi", "Işık kaynağı", "Beher", "Kronometre"],
    procedure: [
      "Su bitkisini beherin içine yerleştirin",
      "Işık kaynağını farklı uzaklıklara ayarlayın",
      "Her uzaklık için oksigen kabarcık sayısını sayın",
      "Sonuçları grafik halinde kaydedin"
    ],
    variables: {
      independent: "Işık şiddeti",
      dependent: "Oksigen üretim hızı",
      controlled: ["Sıcaklık", "CO₂ miktarı", "Bitki türü"]
    },
    expectedResults: "Işık şiddeti arttıkça oksijen üretimi artar, sonra plato yapar"
  },
  {
    id: 2,
    title: "Karbondioksit Konsantrasyonu Etkisi",
    description: "CO₂ miktarının fotosentez üzerindeki etkisini araştırın",
    duration: "20 dakika",
    difficulty: "Orta",
    materials: ["Elodea bitkisi", "NaHCO₃ çözeltisi", "Test tüpü", "pH indikatörü"],
    procedure: [
      "Farklı konsantrasyonlarda NaHCO₃ çözeltileri hazırlayın",
      "Her çözeltiye Elodea bitkisi ekleyin",
      "Sabit ışık altında inkübe edin",
      "pH değişimlerini gözlemleyin"
    ],
    variables: {
      independent: "CO₂ konsantrasyonu",
      dependent: "pH değişimi (CO₂ tüketimi)",
      controlled: ["Işık şiddeti", "Sıcaklık", "Bitki miktarı"]
    },
    expectedResults: "Optimal CO₂ konsantrasyonuna kadar artış, sonra plato"
  }
];

export const calculationTools = [
  {
    id: 1,
    name: "Fotosentez Verimi Hesaplayıcı",
    description: "Işık enerjisinden glukoz üretim verimini hesaplayın",
    inputFields: [
      { name: "lightIntensity", label: "Işık Şiddeti (μmol/m²/s)", type: "number" },
      { name: "duration", label: "Süre (saat)", type: "number" },
      { name: "leafArea", label: "Yaprak Alanı (cm²)", type: "number" }
    ],
    formula: "Verim = (Üretilen Glukoz / Alınan Işık Enerjisi) × 100",
    unit: "%"
  },
  {
    id: 2,
    name: "Calvin Döngüsü Hesaplayıcı",
    description: "Calvin döngüsü için gerekli ATP ve NADPH miktarını hesaplayın",
    inputFields: [
      { name: "glucoseMolecules", label: "Üretilecek Glukoz Molekül Sayısı", type: "number" }
    ],
    formula: "1 Glukoz için: 18 ATP + 12 NADPH gereklidir",
    unit: "molekül"
  },
  {
    id: 3,
    name: "Oksijen Üretim Hesaplayıcı",
    description: "Fotosentez sırasında üretilen oksijen miktarını hesaplayın",
    inputFields: [
      { name: "glucoseProduced", label: "Üretilen Glukoz (mol)", type: "number" }
    ],
    formula: "C₆H₁₂O₆ üretimi için 6 mol O₂ açığa çıkar",
    unit: "mol O₂"
  }
];

export const educationalVideos = [
  {
    id: 1,
    title: "Fotosentez - 10. Sınıf Biyoloji",
    description: "Fotosentezin temel prensipleri, ışık ve karanlık reaksiyonları detaylı anlatım",
    duration: "23:45",
    difficulty: "Başlangıç",
    topics: ["Fotosentez tanımı", "Genel denklem", "Kloroplast yapısı", "Temel süreçler"],
    thumbnail: "https://img.youtube.com/vi/LXg1Y79ZLEQ/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=LXg1Y79ZLEQ",
    embedId: "LXg1Y79ZLEQ",
    channel: "Selin Hoca"
  },
  {
    id: 2,
    title: "Fotosentez - Khan Academy Türkiye",
    description: "Işık reaksiyonları, ATP üretimi ve elektronların yolculuğu",
    duration: "8:32",
    difficulty: "Orta",
    topics: ["Fotosistem I & II", "Elektron taşıma", "ATP sentezi", "NADPH üretimi"],
    thumbnail: "https://img.youtube.com/vi/W9bWQswEWeY/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=W9bWQswEWeY",
    embedId: "W9bWQswEWeY",
    channel: "Khan Academy Türkiye"
  },
  {
    id: 3,
    title: "Fotosentez Detaylı Anlatım",
    description: "Karbon fiksasyonu, Calvin döngüsü ve moleküler mekanizmalar",
    duration: "15:20",
    difficulty: "İleri",
    topics: ["RuBisCO enzimi", "Calvin döngüsü", "Glukoz sentezi", "Karbon fiksasyonu"],
    thumbnail: "https://img.youtube.com/vi/uGp6LxAfIh0/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=uGp6LxAfIh0",
    embedId: "uGp6LxAfIh0",
    channel: "Biyoloji Dersleri"
  },
  {
    id: 4,
    title: "Fotosentez - Görsel Anlatım",
    description: "Animasyonlu fotosentez süreci, molekül hareketleri ve enerji dönüşümleri",
    duration: "11:45",
    difficulty: "Orta",
    topics: ["Moleküler animasyon", "Enerji dönüşümü", "Tilakoid yapısı"],
    thumbnail: "https://img.youtube.com/vi/axxwm4LroRo/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=axxwm4LroRo",
    embedId: "axxwm4LroRo",
    channel: "Bilim Videoları"
  },
  {
    id: 5,
    title: "Klorofil ve Pigmentler",
    description: "Işık yakalama, pigment çeşitleri ve fotosistem yapıları",
    duration: "9:18",
    difficulty: "İleri",
    topics: ["Klorofil türleri", "Pigment spektrumu", "Fotosistem yapısı"],
    thumbnail: "https://img.youtube.com/vi/r4vrh9Qp8OM/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=r4vrh9Qp8OM",
    embedId: "r4vrh9Qp8OM",
    channel: "Eğitim TV"
  },
  {
    id: 6,
    title: "Fotosentez Soru Çözümleri",
    description: "10. sınıf fotosentez konusu soru çözümleri ve örnekler",
    duration: "18:30",
    difficulty: "Orta",
    topics: ["Soru çözümü", "Örnek problemler", "Sınav hazırlığı"],
    thumbnail: "https://img.youtube.com/vi/EKGRs8q7HlA/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=EKGRs8q7HlA",
    embedId: "EKGRs8q7HlA",
    channel: "Matematik Rehberi"
  }
];

export const userProgress = {
  completedModules: ["intro", "light-reactions"],
  currentModule: "calvin-cycle",
  quizScores: {
    "intro-quiz": 85,
    "light-reactions-quiz": 92
  },
  labExperimentsCompleted: ["light-intensity"],
  totalProgress: 35
};