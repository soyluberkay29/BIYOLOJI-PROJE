import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import { Toaster } from './components/ui/toaster';
import './App.css';

// Import pages (will be created next)
const PhotosynthesisProcess = React.lazy(() => import('./pages/PhotosynthesisProcess'));
const Molecules = React.lazy(() => import('./pages/Molecules'));
const Reactions = React.lazy(() => import('./pages/Reactions'));
const Quiz = React.lazy(() => import('./pages/Quiz'));
const Lab = React.lazy(() => import('./pages/Lab'));
const Calculator = React.lazy(() => import('./pages/Calculator'));
const Videos = React.lazy(() => import('./pages/Videos'));

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <React.Suspense fallback={
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/process" element={<PhotosynthesisProcess />} />
              <Route path="/molecules" element={<Molecules />} />
              <Route path="/reactions" element={<Reactions />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/lab" element={<Lab />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/videos" element={<Videos />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;