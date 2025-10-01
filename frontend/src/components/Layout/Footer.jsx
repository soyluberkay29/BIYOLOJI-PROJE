import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, BookOpen, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-green-900 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Fotosentez Lab</span>
            </div>
            <p className="text-green-100 mb-4 max-w-md">
              10. sınıf öğrencileri için interaktif fotosentez öğrenme platformu. 
              Moleküler düzeyde fotosentez süreçlerini keşfedin ve öğrenin.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-green-200 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-green-200 hover:text-white transition-colors duration-200"
                aria-label="External Link"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Öğrenme Modülleri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Öğrenme Modülleri</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/process" className="text-green-200 hover:text-white transition-colors duration-200">
                  Fotosentez Süreci
                </Link>
              </li>
              <li>
                <Link to="/molecules" className="text-green-200 hover:text-white transition-colors duration-200">
                  Molekül Modelleri
                </Link>
              </li>
              <li>
                <Link to="/reactions" className="text-green-200 hover:text-white transition-colors duration-200">
                  Işık & Karanlık Reaksiyonları
                </Link>
              </li>
              <li>
                <Link to="/lab" className="text-green-200 hover:text-white transition-colors duration-200">
                  Sanal Laboratuvar
                </Link>
              </li>
            </ul>
          </div>

          {/* Araçlar */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Araçlar & Testler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/quiz" className="text-green-200 hover:text-white transition-colors duration-200">
                  İnteraktif Quiz
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-green-200 hover:text-white transition-colors duration-200">
                  Hesaplama Araçları
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-green-200 hover:text-white transition-colors duration-200">
                  Eğitim Videoları
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bölüm */}
        <div className="border-t border-green-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 text-sm">
            © {currentYear} Fotosentez Lab. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <BookOpen className="h-4 w-4 text-green-300" />
            <span className="text-green-200 text-sm">10. Sınıf Biyoloji Eğitimi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;