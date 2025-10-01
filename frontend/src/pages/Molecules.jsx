import React, { useState } from 'react';
import { RotateCcw, ZoomIn, ZoomOut, Info, Palette, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { molecules } from '../data/mockData';

const Molecules = () => {
  const [selectedMolecule, setSelectedMolecule] = useState(molecules[0]);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const handleRotate = (direction) => {
    setRotation(prev => ({
      x: direction === 'up' ? prev.x + 15 : direction === 'down' ? prev.x - 15 : prev.x,
      y: direction === 'left' ? prev.y - 15 : direction === 'right' ? prev.y + 15 : prev.y
    }));
  };

  const handleZoom = (type) => {
    setZoom(prev => type === 'in' ? Math.min(prev + 0.2, 3) : Math.max(prev - 0.2, 0.5));
  };

  const resetView = () => {
    setRotation({ x: 0, y: 0 });
    setZoom(1);
  };

  const getMoleculeTypeColor = (type) => {
    switch (type) {
      case 'pigment': return 'bg-green-100 text-green-800';
      case 'product': return 'bg-yellow-100 text-yellow-800';
      case 'energy': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            3D Molekül Modelleri
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fotosentezde rol alan molekülleri üç boyutlu olarak inceleyin. 
            Yapılarını, özelliklerini ve fonksiyonlarını keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 3D Viewer */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{selectedMolecule.name}</span>
                  <Badge className={getMoleculeTypeColor(selectedMolecule.type)}>
                    {selectedMolecule.type}
                  </Badge>
                </CardTitle>
                <CardDescription>{selectedMolecule.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* 3D Molecule Display */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg mb-6 min-h-96 flex items-center justify-center relative overflow-hidden">
                  <div 
                    className="relative transition-all duration-300 ease-in-out"
                    style={{
                      transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${zoom})`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* 3D Molecule Representation */}
                    <div className="relative w-64 h-64">
                      {/* Central Core */}
                      <div 
                        className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full border-4 shadow-xl"
                        style={{ 
                          backgroundColor: selectedMolecule.color,
                          borderColor: selectedMolecule.color,
                          transform: 'translate(-50%, -50%)',
                          boxShadow: `0 0 30px ${selectedMolecule.color}50`
                        }}
                      >
                        <div className="absolute inset-2 rounded-full bg-white/20"></div>
                      </div>

                      {/* Orbital Rings */}
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div
                          key={index}
                          className="absolute top-1/2 left-1/2 border border-white/30 rounded-full animate-spin"
                          style={{
                            width: `${120 + index * 40}px`,
                            height: `${120 + index * 40}px`,
                            transform: 'translate(-50%, -50%)',
                            animationDuration: `${10 + index * 5}s`,
                            animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
                          }}
                        >
                          {/* Electron nodes */}
                          {Array.from({ length: index + 2 }).map((_, nodeIndex) => (
                            <div
                              key={nodeIndex}
                              className="absolute w-3 h-3 bg-white rounded-full shadow-lg"
                              style={{
                                top: '50%',
                                left: `${nodeIndex * (100 / (index + 2))}%`,
                                transform: 'translate(-50%, -50%)'
                              }}
                            ></div>
                          ))}
                        </div>
                      ))}

                      {/* Formula Display */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white font-mono text-sm bg-black/50 px-3 py-1 rounded">
                        {selectedMolecule.formula}
                      </div>
                    </div>
                  </div>

                  {/* Controls Overlay */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <Button size="sm" variant="outline" onClick={() => handleZoom('in')} className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleZoom('out')} className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={resetView} className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Rotation Controls */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <Button size="sm" variant="outline" onClick={() => handleRotate('left')} className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      ←
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleRotate('up')} className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      ↑
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleRotate('down')} className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      ↓
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleRotate('right')} className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      →
                    </Button>
                  </div>
                </div>

                {/* Molecule Info Tabs */}
                <Tabs defaultValue="structure" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="structure">Yapı</TabsTrigger>
                    <TabsTrigger value="function">İşlev</TabsTrigger>
                    <TabsTrigger value="properties">Özellikler</TabsTrigger>
                  </TabsList>
                  <TabsContent value="structure" className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-3">
                          <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Moleküler Yapı</h4>
                            <p className="text-gray-600 text-sm mb-3">{selectedMolecule.structure}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">{selectedMolecule.formula}</Badge>
                              <Badge variant="outline">{selectedMolecule.type}</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="function" className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Konum & İşlev</h4>
                            <p className="text-gray-600 text-sm mb-2"><strong>Konum:</strong> {selectedMolecule.location}</p>
                            <p className="text-gray-600 text-sm">{selectedMolecule.function}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="properties" className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-3">
                          <Palette className="h-5 w-5 text-purple-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Özellikler</h4>
                            <p className="text-gray-600 text-sm">{selectedMolecule.absorption}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Molecule List */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Moleküller</h3>
            {molecules.map((molecule) => (
              <Card 
                key={molecule.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedMolecule.id === molecule.id 
                    ? 'ring-2 ring-green-500 bg-green-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedMolecule(molecule)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div 
                      className="w-12 h-12 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                      style={{ backgroundColor: molecule.color }}
                    >
                      <span className="text-white font-bold text-xs">
                        {molecule.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm">{molecule.name}</h4>
                      <p className="text-xs text-gray-600 mb-2">{molecule.formula}</p>
                      <Badge className={getMoleculeTypeColor(molecule.type)} variant="outline">
                        {molecule.type}
                      </Badge>
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

export default Molecules;