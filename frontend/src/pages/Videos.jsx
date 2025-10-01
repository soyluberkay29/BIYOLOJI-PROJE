import React, { useState } from 'react';
import { Play, Clock, BookOpen, Filter, Search, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { educationalVideos } from '../data/mockData';

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos = educationalVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDifficulty = selectedDifficulty === 'all' || video.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Başlangıç': return 'bg-green-100 text-green-800';
      case 'Orta': return 'bg-yellow-100 text-yellow-800';
      case 'İleri': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Eğitim Videoları
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uzman eğitmenler tarafından hazırlanmış fotosentez konulu eğitim videolarını izleyin. 
            Her seviyeye uygun içerikler ve detaylı açıklamalar.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Video ara... (başlık, açıklama, konu)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger className="w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Zorluk seviyesi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tüm Seviyeler</SelectItem>
              <SelectItem value="Başlangıç">Başlangıç</SelectItem>
              <SelectItem value="Orta">Orta</SelectItem>
              <SelectItem value="İleri">İleri</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredVideos.map((video) => (
                <Card 
                  key={video.id} 
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-gray-800 ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className={getDifficultyColor(video.difficulty)}>
                        {video.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded">
                      <Clock className="h-3 w-3 inline mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight group-hover:text-green-600 transition-colors">
                      {video.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {video.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {video.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {video.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{video.topics.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Video Bulunamadı
                </h3>
                <p className="text-gray-500">
                  Arama kriterlerinize uygun video bulunmuyor. 
                  Lütfen farklı anahtar kelimeler deneyin.
                </p>
              </div>
            )}
          </div>

          {/* Video Player / Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {selectedVideo ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Play className="h-5 w-5" />
                      <span>Video Oynatıcı</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* YouTube Video Player */}
                    <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="200"
                        src={`https://www.youtube.com/embed/${selectedVideo.embedId}?rel=0&modestbranding=1&showinfo=0`}
                        title={selectedVideo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-48 rounded"
                      ></iframe>
                    </div>

                    {/* Video Info */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">{selectedVideo.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{selectedVideo.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={getDifficultyColor(selectedVideo.difficulty)}>
                          {selectedVideo.difficulty}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {selectedVideo.duration}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Kapsanan Konular:</h4>
                        <div className="flex flex-wrap gap-1">
                          {selectedVideo.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className="w-full bg-green-500 hover:bg-green-600"
                      onClick={() => window.open(selectedVideo.url, '_blank')}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Videoyu İzle
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Video Seçin
                    </h3>
                    <p className="text-gray-600 text-sm">
                      İzlemek istediğiniz video kartına tıklayın
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Quick Stats */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    İstatistikler
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Toplam Video</span>
                      <Badge variant="outline">{educationalVideos.length}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Başlangıç Seviyesi</span>
                      <Badge variant="outline">
                        {educationalVideos.filter(v => v.difficulty === 'Başlangıç').length}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Orta Seviye</span>
                      <Badge variant="outline">
                        {educationalVideos.filter(v => v.difficulty === 'Orta').length}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">İleri Seviye</span>
                      <Badge variant="outline">
                        {educationalVideos.filter(v => v.difficulty === 'İleri').length}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;