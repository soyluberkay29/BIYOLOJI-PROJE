import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Atom, FlaskConical, BookOpen, Trophy, Play, Calculator } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const features = [
    {
      icon: Leaf,
      title: "İnteraktif Fotosentez Süreci",
      description: "Adım adım animasyonlarla fotosentez sürecini keşfedin",
      link: "/process",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Atom,
      title: "3D Molekül Modelleri",
      description: "Klorofil, ATP ve diğer molekülleri 3D olarak inceleyin",
      link: "/molecules",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: FlaskConical,
      title: "Sanal Laboratuvar",
      description: "Güvenli ortamda deneyler yapın ve hipotezlerinizi test edin",
      link: "/lab",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Trophy,
      title: "İnteraktif Quizler",
      description: "Bilginizi test edin ve ilerlemenizi takip edin",
      link: "/quiz",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Calculator,
      title: "Hesaplama Araçları",
      description: "Fotosentez verimini ve molekül miktarlarını hesaplayın",
      link: "/calculator",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Play,
      title: "Eğitim Videoları",
      description: "Uzmanların anlattığı detaylı eğitim videoları",
      link: "/videos",
      color: "from-teal-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1526797072-6f5b4aec8421?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxwaG90b3N5bnRoZXNpc3xlbnwwfHx8Z3JlZW58MTc1OTMzOTkxNXww&ixlib=rb-4.1.0&q=85')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-800/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <Badge className="mb-6 bg-green-500/20 text-green-100 border-green-300/30 text-lg px-4 py-2">
            10. Sınıf Biyoloji
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Fotosentez 
            <span className="block text-green-300">Laboratuvarı</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
            Moleküler düzeyde fotosentez süreçlerini keşfedin. İnteraktif modeller, 
            animasyonlar ve sanal deneylerle öğrenin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/process">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Öğrenmeye Başla
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/molecules">
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-300 text-green-100 hover:bg-green-500/20 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
              >
                <Atom className="mr-2 h-5 w-5" />
                Molekülleri Keşfet
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-400 rounded-full opacity-70 animate-bounce delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-300 rounded-full opacity-60 animate-bounce delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-200 rounded-full opacity-50 animate-bounce delay-3000"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            İnteraktif Öğrenme Modülleri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fotosentez süreçlerini detaylı olarak anlayabilmeniz için tasarlanmış 
            modern öğrenme araçları
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 shadow-lg bg-gradient-to-br from-white to-green-50/30">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors">
                    Keşfetmeye Başla
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-green-100">İnteraktif Animasyon</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-100">3D Molekül Modeli</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Quiz Sorusu</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-green-100">Sanal Deney</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Fotosentez Yolculuğunuza Başlayın
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Molekülerden ekosistemlere, fotosentezin tüm boyutlarını 
            interaktif öğrenme deneyimi ile keşfedin.
          </p>
          <Link to="/process">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Hemen Başla
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;