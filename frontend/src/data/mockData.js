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
    title: "Fotosenteze Giriş",
    description: "Fotosentezin temel prensipleri ve önemi",
    duration: "8:45",
    difficulty: "Başlangıç",
    topics: ["Fotosentez tanımı", "Genel denklem", "Önem"],
    thumbnail: "https://images.unsplash.com/photo-1416816901131-9e5eab64c1c1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxwbGFudCUyMHNjaWVuY2V8ZW58MHx8fGdyZWVufDE3NTkzMzk5MjJ8MA&ixlib=rb-4.1.0&q=85",
    url: "#video1"
  },
  {
    id: 2,
    title: "Işık Reaksiyonları Detayı",
    description: "Tilakoidlerde gerçekleşen ışık bağımlı reaksiyonlar",
    duration: "12:30",
    difficulty: "Orta",
    topics: ["Fotosistem I & II", "Elektron taşıma", "ATP sentezi"],
    thumbnail: "https://images.unsplash.com/photo-1540927550647-43699cb14916?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxwaG90b3N5bnRoZXNpc3xlbnwwfHx8Z3JlZW58MTc1OTMzOTkxNXww&ixlib=rb-4.1.0&q=85",
    url: "#video2"
  },
  {
    id: 3,
    title: "Calvin Döngüsü Animasyonu",
    description: "Karbon fiksasyonu ve şeker üretim süreci",
    duration: "10:15",
    difficulty: "İleri",
    topics: ["RuBisCO enzimi", "Karbon fiksasyonu", "Glukoz sentezi"],
    thumbnail: "https://images.unsplash.com/photo-1526797072-6f5b4aec8421?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxwaG90b3N5bnRoZXNpc3xlbnwwfHx8Z3JlZW58MTc1OTMzOTkxNXww&ixlib=rb-4.1.0&q=85",
    url: "#video3"
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