import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, FlaskConical, Thermometer, Lightbulb, Droplets, LineChart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Slider } from '../components/ui/slider';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { labExperiments } from '../data/mockData';

const Lab = () => {
  const [selectedExperiment, setSelectedExperiment] = useState(labExperiments[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [lightIntensity, setLightIntensity] = useState([50]);
  const [temperature, setTemperature] = useState([25]);
  const [co2Level, setCo2Level] = useState([400]);
  const [oxygenProduced, setOxygenProduced] = useState([]);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
        
        // Simulate oxygen production based on light intensity, temperature, and CO2
        const baseProduction = (lightIntensity[0] / 100) * (temperature[0] / 30) * (co2Level[0] / 500);
        const production = Math.max(0, baseProduction * (0.8 + Math.random() * 0.4));
        
        setOxygenProduced(prev => [...prev.slice(-19), production]);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, lightIntensity, temperature, co2Level]);

  const startExperiment = () => {
    setIsRunning(true);
    setTimeElapsed(0);
    setOxygenProduced([]);
  };

  const pauseExperiment = () => {
    setIsRunning(false);
  };

  const resetExperiment = () => {
    setIsRunning(false);
    setTimeElapsed(0);
    setOxygenProduced([]);
    setLightIntensity([50]);
    setTemperature([25]);
    setCo2Level([400]);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Kolay': return 'bg-green-100 text-green-800';
      case 'Orta': return 'bg-yellow-100 text-yellow-800';
      case 'Zor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sanal Laboratuvar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Güvenli bir ortamda fotosentez deneylerini gerçekleştirin. 
            Değişkenleri kontrol edin ve sonuçları gözlemleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Experiment Selection */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Deneyler</h3>
            {labExperiments.map((experiment) => (
              <Card 
                key={experiment.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedExperiment.id === experiment.id 
                    ? 'ring-2 ring-green-500 bg-green-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedExperiment(experiment)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <FlaskConical className="h-5 w-5 text-green-600 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 text-sm mb-1">{experiment.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">{experiment.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge className={getDifficultyColor(experiment.difficulty)} variant="outline">
                          {experiment.difficulty}
                        </Badge>
                        <span className="text-xs text-gray-500">{experiment.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Experiment Area */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{selectedExperiment.title}</span>
                  <Badge className={getDifficultyColor(selectedExperiment.difficulty)}>
                    {selectedExperiment.difficulty}
                  </Badge>
                </CardTitle>
                <CardDescription>{selectedExperiment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="setup" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="setup">Kurulum</TabsTrigger>
                    <TabsTrigger value="experiment">Deney</TabsTrigger>
                    <TabsTrigger value="results">Sonuçlar</TabsTrigger>
                    <TabsTrigger value="analysis">Analiz</TabsTrigger>
                  </TabsList>

                  <TabsContent value="setup" className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Gerekli Malzemeler</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedExperiment.materials.map((material, index) => (
                          <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm">{material}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Deney Prosedürü</h4>
                      <ol className="space-y-2">
                        {selectedExperiment.procedure.map((step, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <span className="text-sm text-gray-700 flex-1">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </TabsContent>

                  <TabsContent value="experiment" className="space-y-6">
                    {/* Control Panel */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <FlaskConical className="h-5 w-5 mr-2" />
                        Kontrol Paneli
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Light Intensity */}
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Lightbulb className="h-4 w-4 text-yellow-500" />
                            <label className="text-sm font-medium">Işık Şiddeti: {lightIntensity[0]}%</label>
                          </div>
                          <Slider
                            value={lightIntensity}
                            onValueChange={setLightIntensity}
                            max={100}
                            step={5}
                            className="w-full"
                          />
                        </div>

                        {/* Temperature */}
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Thermometer className="h-4 w-4 text-red-500" />
                            <label className="text-sm font-medium">Sıcaklık: {temperature[0]}°C</label>
                          </div>
                          <Slider
                            value={temperature}
                            onValueChange={setTemperature}
                            min={10}
                            max={40}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        {/* CO2 Level */}
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Droplets className="h-4 w-4 text-blue-500" />
                            <label className="text-sm font-medium">CO₂: {co2Level[0]} ppm</label>
                          </div>
                          <Slider
                            value={co2Level}
                            onValueChange={setCo2Level}
                            min={200}
                            max={800}
                            step={50}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Experiment Controls */}
                    <div className="flex items-center justify-between p-4 bg-white border-2 border-dashed border-gray-300 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl font-mono">{formatTime(timeElapsed)}</div>
                        <div className="text-sm text-gray-600">
                          Geçen Süre
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        {!isRunning ? (
                          <Button onClick={startExperiment} className="bg-green-500 hover:bg-green-600">
                            <Play className="h-4 w-4 mr-2" />
                            Başlat
                          </Button>
                        ) : (
                          <Button onClick={pauseExperiment} variant="destructive">
                            <Pause className="h-4 w-4 mr-2" />
                            Durdur
                          </Button>
                        )}
                        <Button onClick={resetExperiment} variant="outline">
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Sıfırla
                        </Button>
                      </div>
                    </div>

                    {/* Live Visualization */}
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 min-h-64">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <LineChart className="h-5 w-5 mr-2" />
                        Canlı Oksijen Üretimi
                      </h4>
                      
                      <div className="relative h-48 bg-white rounded border">
                        {/* Chart simulation */}
                        <div className="absolute inset-4">
                          <div className="h-full flex items-end space-x-1">
                            {oxygenProduced.map((value, index) => (
                              <div
                                key={index}
                                className="bg-green-500 w-3 rounded-t animate-pulse"
                                style={{
                                  height: `${Math.max(5, value * 100)}%`,
                                  opacity: 0.8 + (value * 0.2)
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Y-axis label */}
                        <div className="absolute left-2 top-2 text-xs text-gray-500 transform -rotate-90 origin-top-left">
                          O₂ Üretimi (ml/min)
                        </div>
                        
                        {/* Current value display */}
                        <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded text-sm font-mono">
                          {oxygenProduced.length > 0 ? oxygenProduced[oxygenProduced.length - 1].toFixed(2) : '0.00'} ml/min
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="results" className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-4">Beklenen Sonuçlar</h4>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-gray-700">{selectedExperiment.expectedResults}</p>
                      </div>
                    </div>

                    {oxygenProduced.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Deneysel Sonuçlar</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="p-4 bg-white rounded-lg border">
                            <div className="text-2xl font-bold text-green-600">
                              {(oxygenProduced.reduce((a, b) => a + b, 0) / oxygenProduced.length).toFixed(2)}
                            </div>
                            <div className="text-sm text-gray-600">Ortalama O₂ (ml/min)</div>
                          </div>
                          <div className="p-4 bg-white rounded-lg border">
                            <div className="text-2xl font-bold text-blue-600">
                              {Math.max(...oxygenProduced, 0).toFixed(2)}
                            </div>
                            <div className="text-sm text-gray-600">Maksimum O₂ (ml/min)</div>
                          </div>
                          <div className="p-4 bg-white rounded-lg border">
                            <div className="text-2xl font-bold text-purple-600">
                              {timeElapsed}
                            </div>
                            <div className="text-sm text-gray-600">Toplam Süre (s)</div>
                          </div>
                          <div className="p-4 bg-white rounded-lg border">
                            <div className="text-2xl font-bold text-orange-600">
                              {oxygenProduced.length}
                            </div>
                            <div className="text-sm text-gray-600">Veri Noktası</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="analysis" className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-4">Değişkenler</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="font-medium text-gray-800 mb-2">Bağımsız Değişken</div>
                          <p className="text-gray-600 text-sm">{selectedExperiment.variables.independent}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="font-medium text-gray-800 mb-2">Bağımlı Değişken</div>
                          <p className="text-gray-600 text-sm">{selectedExperiment.variables.dependent}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="font-medium text-gray-800 mb-2">Kontrol Değişkenleri</div>
                          <div className="flex flex-wrap gap-2">
                            {selectedExperiment.variables.controlled.map((variable, index) => (
                              <Badge key={index} variant="outline">{variable}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Lab;