import React, { useState } from 'react';
import { Lightbulb, Moon, ArrowRight, Zap, Droplets, Leaf, Sun } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Reactions = () => {
  const [activePhase, setActivePhase] = useState('light');

  const lightReactions = {
    title: "Işık Bağımlı Reaksiyonlar",
    location: "Tilakoid Zarları",
    duration: "Mikrosaniye",
    products: ["ATP", "NADPH", "O₂"],
    steps: [
      {
        id: 1,
        name: "Fotosistem II Aktivasyonu",
        description: "P680 klorofil molekülü ışık fotonlarını absorbe eder ve elektron kaybeder",
        equation: "P680 + ışık → P680* → P680⁺ + e⁻",
        details: "680 nm dalga boyundaki ışığı absorbe eden klorofil-a molekülü uyarılır"
      },
      {
        id: 2,
        name: "Su Moleküllerinin Ayrışması",
        description: "Elektron eksikliği su moleküllerinin parçalanmasıyla giderilir",
        equation: "2H₂O → 4H⁺ + 4e⁻ + O₂",
        details: "Oksijen kompleksi su moleküllerini parçalar ve oksijen açığa çıkar"
      },
      {
        id: 3,
        name: "Elektron Taşıma Zinciri",
        description: "Elektronlar plastokuinon, sitokrom kompleksi üzerinden taşınır",
        equation: "PQ → Cyt b₆f → PC → PS I",
        details: "Elektronlar yüksek enerjiden düşük enerjiye doğru taşınır"
      },
      {
        id: 4,
        name: "Fotosistem I ve NADPH Üretimi",
        description: "P700 klorofil molekülü aktive olur ve NADPH üretilir",
        equation: "NADP⁺ + H⁺ + 2e⁻ → NADPH",
        details: "700 nm ışığı absorbe eden fotosistem I devreye girer"
      },
      {
        id: 5,
        name: "ATP Sentezi",
        description: "Kemiosmotik gradyan kullanılarak ATP üretilir",
        equation: "ADP + Pi → ATP",
        details: "Proton gradyanı ATP sentaz enzimi ile ATP üretir"
      }
    ]
  };

  const darkReactions = {
    title: "Işık Bağımsız Reaksiyonlar (Calvin Döngüsü)",
    location: "Kloroplast Stroması",
    duration: "Saniye-Dakika",
    products: ["Glukoz", "Starch", "Selüloz"],
    steps: [
      {
        id: 1,
        name: "Karbon Fiksasyonu",
        description: "RuBisCO enzimi CO₂'yi RuBP ile birleştirir",
        equation: "3CO₂ + 3RuBP → 6 3-PGA",
        details: "En yavaş aşama - RuBisCO enzimi hem CO₂ hem O₂ ile reaksiyona girer"
      },
      {
        id: 2,
        name: "Redüksiyon",
        description: "ATP ve NADPH kullanılarak 3-PGA, G3P'ye dönüştürülür",
        equation: "6 3-PGA + 6ATP + 6NADPH → 6 G3P",
        details: "Işık reaksiyonlarından gelen enerji burada kullanılır"
      },
      {
        id: 3,
        name: "Glukoz Oluşumu",
        description: "G3P moleküllerinden glukoz sentezlenir",
        equation: "6 G3P → 1 Glukoz + 3 G3P",
        details: "Her 6 CO₂ molekülünden 1 glukoz molekülü üretilir"
      },
      {
        id: 4,
        name: "RuBP Rejenerasyonu",
        description: "Döngünün devam etmesi için RuBP yeniden oluşturulur",
        equation: "5 G3P + 3ATP → 3RuBP",
        details: "Calvin döngüsünün sürdürülebilir olması için gerekli"
      }
    ]
  };

  const currentReaction = activePhase === 'light' ? lightReactions : darkReactions;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fotosentez Reaksiyonları
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fotosentez sürecini iki ana aşamada inceleyin: Işık bağımlı ve 
            ışık bağımsız reaksiyonları detaylı olarak öğrenin.
          </p>
        </div>

        {/* Phase Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 flex space-x-1">
            <Button
              variant={activePhase === 'light' ? 'default' : 'ghost'}
              onClick={() => setActivePhase('light')}
              className="flex items-center space-x-2"
            >
              <Sun className="h-4 w-4" />
              <span>Işık Reaksiyonları</span>
            </Button>
            <Button
              variant={activePhase === 'dark' ? 'default' : 'ghost'}
              onClick={() => setActivePhase('dark')}
              className="flex items-center space-x-2"
            >
              <Moon className="h-4 w-4" />
              <span>Calvin Döngüsü</span>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Overview Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {activePhase === 'light' ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-blue-500" />
                  )}
                  <span>Genel Bilgi</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Konum</h4>
                  <Badge variant="outline" className="w-full justify-center">
                    {currentReaction.location}
                  </Badge>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Süre</h4>
                  <Badge variant="outline" className="w-full justify-center">
                    {currentReaction.duration}
                  </Badge>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Ana Ürünler</h4>
                  <div className="space-y-2">
                    {currentReaction.products.map((product, index) => (
                      <Badge key={index} variant="secondary" className="w-full justify-center">
                        {product}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Visual Indicator */}
                <div className={`p-4 rounded-lg ${
                  activePhase === 'light' 
                    ? 'bg-gradient-to-r from-yellow-100 to-orange-100' 
                    : 'bg-gradient-to-r from-blue-100 to-indigo-100'
                }`}>
                  <div className="text-center">
                    {activePhase === 'light' ? (
                      <Lightbulb className="h-12 w-12 mx-auto text-yellow-600 mb-2" />
                    ) : (
                      <Leaf className="h-12 w-12 mx-auto text-green-600 mb-2" />
                    )}
                    <p className="text-sm text-gray-700 font-medium">
                      {activePhase === 'light' ? 'Işık Gerekli' : 'Işık Gereksiz'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Steps */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>{currentReaction.title}</CardTitle>
                <CardDescription>
                  Her aşamada gerçekleşen moleküler olayları ve denklemleri inceleyin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {currentReaction.steps.map((step, index) => (
                    <div key={step.id} className="relative">
                      {/* Step Card */}
                      <Card className="transition-all duration-300 hover:shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            {/* Step Number */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                              activePhase === 'light' ? 'bg-yellow-500' : 'bg-blue-500'
                            }`}>
                              {step.id}
                            </div>
                            
                            {/* Step Content */}
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {step.name}
                              </h3>
                              <p className="text-gray-600 mb-3">
                                {step.description}
                              </p>
                              
                              {/* Chemical Equation */}
                              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                                <p className="font-mono text-sm text-gray-800 text-center">
                                  {step.equation}
                                </p>
                              </div>
                              
                              {/* Details */}
                              <div className={`p-3 rounded-lg ${
                                activePhase === 'light' 
                                  ? 'bg-yellow-50 border border-yellow-200' 
                                  : 'bg-blue-50 border border-blue-200'
                              }`}>
                                <p className="text-sm text-gray-700">
                                  <strong>Detay:</strong> {step.details}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      {/* Arrow */}
                      {index < currentReaction.steps.length - 1 && (
                        <div className="flex justify-center my-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            activePhase === 'light' ? 'bg-yellow-100' : 'bg-blue-100'
                          }`}>
                            <ArrowRight className={`h-5 w-5 ${
                              activePhase === 'light' ? 'text-yellow-600' : 'text-blue-600'
                            }`} />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Comparison Section */}
                <div className="mt-8 pt-8 border-t">
                  <Tabs defaultValue="comparison" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="comparison">Karşılaştırma</TabsTrigger>
                      <TabsTrigger value="integration">Entegrasyon</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="comparison" className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Light Reactions */}
                        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50">
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2 text-yellow-800">
                              <Sun className="h-5 w-5" />
                              <span>Işık Reaksiyonları</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Konum:</span>
                              <span className="text-sm font-medium">Tilakoid</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Işık:</span>
                              <span className="text-sm font-medium">Gerekli</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Ürünler:</span>
                              <span className="text-sm font-medium">ATP, NADPH, O₂</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Süre:</span>
                              <span className="text-sm font-medium">Çok hızlı</span>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Dark Reactions */}
                        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
                          <CardHeader>
                            <CardTitle className="flex items-center space-x-2 text-blue-800">
                              <Moon className="h-5 w-5" />
                              <span>Calvin Döngüsü</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Konum:</span>
                              <span className="text-sm font-medium">Stroma</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Işık:</span>
                              <span className="text-sm font-medium">Gereksiz</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Ürünler:</span>
                              <span className="text-sm font-medium">Glukoz</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Süre:</span>
                              <span className="text-sm font-medium">Yavaş</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="integration" className="mt-6">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                              Reaksiyonların Entegrasyonu
                            </h3>
                            <div className="flex items-center justify-center space-x-4 mb-6">
                              <div className="bg-yellow-100 p-3 rounded-lg">
                                <Lightbulb className="h-8 w-8 text-yellow-600" />
                                <p className="text-xs mt-1">Işık Reaksiyonları</p>
                              </div>
                              <ArrowRight className="h-6 w-6 text-gray-400" />
                              <div className="bg-green-100 p-3 rounded-lg">
                                <Zap className="h-8 w-8 text-green-600" />
                                <p className="text-xs mt-1">ATP + NADPH</p>
                              </div>
                              <ArrowRight className="h-6 w-6 text-gray-400" />
                              <div className="bg-blue-100 p-3 rounded-lg">
                                <Leaf className="h-8 w-8 text-blue-600" />
                                <p className="text-xs mt-1">Calvin Döngüsü</p>
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Işık reaksiyonlarında üretilen ATP ve NADPH, Calvin döngüsünde 
                              karbondioksiti glukoza dönüştürmek için enerji kaynağı olarak kullanılır. 
                              Bu iki aşama birlikte çalışarak güneş enerjisini kimyasal enerjiye çevirir.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reactions;