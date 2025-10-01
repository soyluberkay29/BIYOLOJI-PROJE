import React, { useState } from 'react';
import { Calculator as CalcIcon, RotateCcw, Info, TrendingUp, Beaker } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { calculationTools } from '../data/mockData';

const Calculator = () => {
  const [selectedCalculator, setSelectedCalculator] = useState(calculationTools[0]);
  const [inputs, setInputs] = useState({});
  const [results, setResults] = useState(null);

  const handleInputChange = (fieldName, value) => {
    setInputs(prev => ({
      ...prev,
      [fieldName]: parseFloat(value) || 0
    }));
  };

  const calculateResults = () => {
    switch (selectedCalculator.id) {
      case 1: // Fotosentez Verimi
        const efficiency = ((inputs.lightIntensity || 0) * (inputs.duration || 0) * (inputs.leafArea || 0)) / 10000;
        const glucoseProduced = efficiency * 0.1; // Simplified calculation
        setResults({
          efficiency: efficiency.toFixed(2),
          glucoseProduced: glucoseProduced.toFixed(4),
          oxygenReleased: (glucoseProduced * 6).toFixed(4), // 6 O2 per glucose
          energyStored: (glucoseProduced * 686).toFixed(1) // kJ per mol glucose
        });
        break;

      case 2: // Calvin Döngüsü
        const glucoseMolecules = inputs.glucoseMolecules || 0;
        const atpRequired = glucoseMolecules * 18;
        const nadphRequired = glucoseMolecules * 12;
        const co2Required = glucoseMolecules * 6;
        setResults({
          atpRequired: atpRequired,
          nadphRequired: nadphRequired,
          co2Required: co2Required,
          cyclesTurns: glucoseMolecules * 6 // 6 turns per glucose
        });
        break;

      case 3: // Oksijen Üretim
        const glucoseInput = inputs.glucoseProduced || 0;
        const oxygenProduced = glucoseInput * 6;
        const waterUsed = glucoseInput * 6;
        setResults({
          oxygenProduced: oxygenProduced.toFixed(2),
          waterUsed: waterUsed.toFixed(2),
          volume: (oxygenProduced * 22.4).toFixed(2), // L at STP
          mass: (oxygenProduced * 32).toFixed(2) // g
        });
        break;

      default:
        setResults(null);
    }
  };

  const resetCalculator = () => {
    setInputs({});
    setResults(null);
  };

  const photosynthesisEquations = [
    {
      title: "Genel Fotosentez Denklemi",
      equation: "6CO₂ + 6H₂O + ışık enerjisi → C₆H₁₂O₆ + 6O₂",
      description: "Fotosentezin genel denklemi - karbondioksit ve su glukoz ve oksijene dönüşür"
    },
    {
      title: "Calvin Döngüsü",
      equation: "3CO₂ + 3RuBP + 9ATP + 6NADPH → G3P + 3RuBP",
      description: "Calvin döngüsünün net denklemi - CO₂ fiksasyonu ve glukoz üretimi"
    },
    {
      title: "Işık Reaksiyonları",
      equation: "2H₂O + 2NADP⁺ + 3ADP + 3Pi → O₂ + 2NADPH + 3ATP",
      description: "Tilakoidlerde gerçekleşen ışık bağımlı reaksiyonlar"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fotosentez Hesaplama Araçları
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fotosentez süreçlerindeki matematiksel hesaplamaları yapın. 
            Verim, molekül miktarları ve enerji dönüşümlerini hesaplayın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Calculator Selection */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Hesaplama Araçları</h3>
            {calculationTools.map((tool) => (
              <Card 
                key={tool.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedCalculator.id === tool.id 
                    ? 'ring-2 ring-green-500 bg-green-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => {
                  setSelectedCalculator(tool);
                  resetCalculator();
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <CalcIcon className="h-5 w-5 text-green-600 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 text-sm mb-1">{tool.name}</h4>
                      <p className="text-xs text-gray-600">{tool.description}</p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {tool.unit}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Calculator Interface */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalcIcon className="h-5 w-5" />
                  <span>{selectedCalculator.name}</span>
                </CardTitle>
                <CardDescription>{selectedCalculator.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="calculator" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="calculator">Hesaplama</TabsTrigger>
                    <TabsTrigger value="equations">Denklemler</TabsTrigger>
                    <TabsTrigger value="formulas">Formüller</TabsTrigger>
                  </TabsList>

                  <TabsContent value="calculator" className="space-y-6">
                    {/* Input Fields */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800 mb-3">Giriş Parametreleri</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedCalculator.inputFields.map((field) => (
                          <div key={field.name} className="space-y-2">
                            <Label htmlFor={field.name} className="text-sm font-medium">
                              {field.label}
                            </Label>
                            <Input
                              id={field.name}
                              type={field.type}
                              placeholder={`${field.label} girin...`}
                              value={inputs[field.name] || ''}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="w-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex space-x-4">
                      <Button onClick={calculateResults} className="bg-green-500 hover:bg-green-600">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Hesapla
                      </Button>
                      <Button onClick={resetCalculator} variant="outline">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Sıfırla
                      </Button>
                    </div>

                    {/* Results */}
                    {results && (
                      <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                          <Info className="h-5 w-5 mr-2" />
                          Hesaplama Sonuçları
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(results).map(([key, value]) => (
                            <div key={key} className="bg-white p-4 rounded-lg shadow-sm">
                              <div className="text-2xl font-bold text-green-600">{value}</div>
                              <div className="text-sm text-gray-600 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Formula Info */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Kullanılan Formül</h4>
                      <p className="text-gray-600 font-mono text-sm bg-white p-2 rounded">
                        {selectedCalculator.formula}
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="equations" className="space-y-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Fotosentez Denklemleri</h4>
                    <div className="space-y-4">
                      {photosynthesisEquations.map((eq, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <h5 className="font-semibold text-gray-800 mb-2">{eq.title}</h5>
                            <div className="bg-gray-100 p-3 rounded mb-3">
                              <p className="font-mono text-center text-gray-800">{eq.equation}</p>
                            </div>
                            <p className="text-sm text-gray-600">{eq.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="formulas" className="space-y-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Önemli Formüller ve Sabitler</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Constants */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Önemli Sabitler</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">Avogadro Sayısı</span>
                            <span className="font-mono text-sm">6.022 × 10²³</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">Molar Hacim (STP)</span>
                            <span className="font-mono text-sm">22.4 L/mol</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">Glukoz Molar Kütlesi</span>
                            <span className="font-mono text-sm">180 g/mol</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">O₂ Molar Kütlesi</span>
                            <span className="font-mono text-sm">32 g/mol</span>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Energy Values */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Enerji Değerleri</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">Glukoz Yanma Enerjisi</span>
                            <span className="font-mono text-sm">686 kcal/mol</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">ATP Hidrolizi</span>
                            <span className="font-mono text-sm">7.3 kcal/mol</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">NADPH Oksidasyonu</span>
                            <span className="font-mono text-sm">52.6 kcal/mol</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">Güneş Işığı Enerjisi</span>
                            <span className="font-mono text-sm">170 kJ/m²/s</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Conversion Formulas */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <Beaker className="h-5 w-5 mr-2" />
                          Dönüşüm Formülleri
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="p-3 bg-blue-50 rounded">
                          <p className="font-medium text-blue-800 mb-1">Fotosentez Verimi (%)</p>
                          <p className="font-mono text-sm text-blue-700">
                            Verim = (Depolanan Enerji / Gelen Işık Enerjisi) × 100
                          </p>
                        </div>
                        <div className="p-3 bg-green-50 rounded">
                          <p className="font-medium text-green-800 mb-1">Oksigen Üretim Hızı</p>
                          <p className="font-mono text-sm text-green-700">
                            O₂ Hızı = (Kabarcık Sayısı / Süre) × Kalibrasyon Faktörü
                          </p>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded">
                          <p className="font-medium text-yellow-800 mb-1">CO₂ Fiksasyon Hızı</p>
                          <p className="font-mono text-sm text-yellow-700">
                            CO₂ Hızı = (Glukoz Üretimi × 6) / Süre
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;