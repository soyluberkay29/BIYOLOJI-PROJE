import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, Lightbulb, Moon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { photosynthesisSteps } from '../data/mockData';

const PhotosynthesisProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentStep(current => {
              if (current < photosynthesisSteps.length - 1) {
                return current + 1;
              } else {
                setIsPlaying(false);
                return current;
              }
            });
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const handleStepClick = (index) => {
    setCurrentStep(index);
    setProgress(0);
    setIsPlaying(false);
  };

  const currentStepData = photosynthesisSteps[currentStep];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fotosentez Süreci
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fotosentez sürecini adım adım takip edin. Her aşamada hangi moleküllerin 
            rol aldığını ve nasıl etkileştiklerini görsel animasyonlarla öğrenin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Animation Area */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    {currentStepData.phase === 'light' ? (
                      <Lightbulb className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <Moon className="h-5 w-5 text-blue-500" />
                    )}
                    {currentStepData.title}
                  </CardTitle>
                  <Badge variant={currentStepData.phase === 'light' ? 'default' : 'secondary'}>
                    {currentStepData.phase === 'light' ? 'Işık Reaksiyonu' : 'Karanlık Reaksiyonu'}
                  </Badge>
                </div>
                <Progress value={progress} className="mt-2" />
              </CardHeader>
              <CardContent>
                {/* Animated Process Area */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-8 mb-6 min-h-64 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 grid-rows-4 h-full">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="border border-green-300"></div>
                      ))}
                    </div>
                  </div>

                  {/* Animated Elements */}
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {currentStepData.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{currentStepData.description}</p>
                    </div>

                    {/* Molecule Animation */}
                    <div className="flex justify-center items-center space-x-8">
                      {currentStepData.molecules.map((molecule, index) => (
                        <div 
                          key={molecule}
                          className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold text-sm transition-all duration-1000 ${
                            isPlaying ? 'animate-pulse scale-110' : ''
                          }`}
                          style={{
                            backgroundColor: molecule === 'klorofil' ? '#228B22' :
                                           molecule === 'su' ? '#4169E1' :
                                           molecule === 'karbondioksit' ? '#DC143C' :
                                           molecule === 'oksigen' ? '#FF6347' :
                                           molecule === 'ATP' ? '#FF6347' :
                                           molecule === 'NADPH' ? '#4169E1' :
                                           molecule === 'glukoz' ? '#FFD700' :
                                           molecule === 'elektron' ? '#9370DB' :
                                           molecule === 'RuBP' ? '#32CD32' :
                                           molecule === 'RuBisCO' ? '#8B4513' :
                                           '#6B7280',
                            animationDelay: `${index * 0.2}s`
                          }}
                        >
                          {molecule.slice(0, 3).toUpperCase()}
                        </div>
                      ))}
                    </div>

                    {/* Chemical Equation */}
                    <div className="mt-8 p-4 bg-white/70 rounded-lg text-center">
                      <p className="font-mono text-lg text-gray-800">
                        {currentStepData.equation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex justify-center space-x-4">
                  <Button onClick={handlePlay} variant={isPlaying ? "destructive" : "default"}>
                    {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                    {isPlaying ? 'Durdur' : 'Başlat'}
                  </Button>
                  <Button onClick={handleReset} variant="outline">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Sıfırla
                  </Button>
                </div>

                {/* Details */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Detaylı Açıklama:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {currentStepData.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Steps Sidebar */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Süreç Adımları</h3>
            {photosynthesisSteps.map((step, index) => (
              <Card 
                key={step.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  currentStep === index 
                    ? 'ring-2 ring-green-500 bg-green-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => handleStepClick(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white ${
                      currentStep === index ? 'bg-green-500' : 'bg-gray-400'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-800 text-sm">{step.title}</h4>
                        {step.phase === 'light' ? (
                          <Lightbulb className="h-4 w-4 text-yellow-500" />
                        ) : (
                          <Moon className="h-4 w-4 text-blue-500" />
                        )}
                      </div>
                      <p className="text-xs text-gray-600">{step.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="outline" className="text-xs">
                          {step.duration} saniye
                        </Badge>
                        {currentStep === index && (
                          <ChevronRight className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosynthesisProcess;