import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import WorkPage from './components/pages/WorkPage';
import VideographyPage from './components/pages/VideographyPage';
import ContactPage from './components/pages/ContactPage';
import GalleryPage from './components/pages/GalleryPage';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentGalleryId, setCurrentGalleryId] = useState<number | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Initialize page from URL on load
  useEffect(() => {
    if (showSplash) return;
    const getPageFromUrl = () => {
      const hash = window.location.hash.slice(1); // Remove #
      const urlParams = new URLSearchParams(window.location.search);
      const galleryId = urlParams.get('gallery');
      
      if (galleryId) {
        setCurrentGalleryId(parseInt(galleryId));
        return 'gallery';
      }
      
      return hash || 'home';
    };

    const initialPage = getPageFromUrl();
    setCurrentPage(initialPage);

    // Listen for browser back/forward
    const handlePopState = () => {
      const newPage = getPageFromUrl();
      setCurrentPage(newPage);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [showSplash]);

  // Update URL when page changes
  useEffect(() => {
    if (showSplash) return;
    if (currentPage === 'gallery' && currentGalleryId) {
      window.history.pushState({}, '', `?gallery=${currentGalleryId}#gallery`);
    } else {
      window.history.pushState({}, '', `#${currentPage}`);
    }
  }, [currentPage, currentGalleryId, showSplash]);

  // Scroll to top when page changes
  useEffect(() => {
    if (showSplash) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, currentGalleryId, showSplash]);

  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.98,
      transition: { duration: 0.4 }
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.98,
      transition: { 
        duration: 0.4,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  const handleGalleryOpen = (portfolioId: number) => {
    setCurrentGalleryId(portfolioId);
    setCurrentPage('gallery');
  };

  const handleBackToWork = () => {
    setCurrentGalleryId(null);
    setCurrentPage('work');
  };

  const handleNavigateToWork = () => {
    setCurrentPage('work');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigateToWork={handleNavigateToWork} />;
      case 'about':
        return <AboutPage />;
      case 'work':
        return <WorkPage onGalleryOpen={handleGalleryOpen} />;
      case 'videography':
        return <VideographyPage />;
      case 'contact':
        return <ContactPage />;
      case 'gallery':
        return currentGalleryId ? (
          <GalleryPage 
            portfolioId={currentGalleryId} 
            onBackToWork={handleBackToWork}
          />
        ) : <WorkPage onGalleryOpen={handleGalleryOpen} />;
      default:
        return <HomePage onNavigateToWork={handleNavigateToWork} />;
    }
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation currentPage={currentPage === 'gallery' ? 'work' : currentPage} onPageChange={setCurrentPage} />
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage + (currentGalleryId ? `-${currentGalleryId}` : '')}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}