import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface SlideData {
  id: number;
  title: string;
  image: string;
  category: string;
}

interface ImageCarouselProps {
  onViewMore?: () => void;
}

// ✅ Slides with local images
const slides: SlideData[] = [
  {
    id: 1,
    title: 'Wedding',
    image: '/images/slideshow/wedding.webp',
    category: 'wedding ',
  },
  {
    id: 2,
    title: 'Pre-Wedding',
    image: '/images/slideshow/prewedding.webp',
    category: 'pre-wedding',
  },
  {
    id: 3,
    title: 'Celebrity',
    image: '/images/slideshow/celebrity.webp',
    category: 'Celebrity',
  },
  {
    id: 4,
    title: 'Portraits',
    image: '/images/slideshow/portraits.webp',
    category: 'Modeling',
  },
  {
    id: 5,
    title: 'Baby Shoot',
    image: '/images/slideshow/babyshoot.webp',
    category: 'babyshoot',
  },
  {
    id: 6,
    title: 'Bride Shoot',
    image: '/images/slideshow/brideshoot.webp',
    category: 'Bride Shoot',
  },
];

export default function ImageCarousel({ onViewMore }: ImageCarouselProps = {}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Mobile Swipe Functionality: State for swipe tracking
  const [touchStartX, setTouchStartX] = useState(0); 
  const SWIPE_THRESHOLD = 50; 

  // Auto-Play Management: Functions DO NOT stop auto-play on manual navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Keyboard navigation 
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
        setIsAutoPlaying(false);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextSlide();
        setIsAutoPlaying(false);
      } else if (event.key === 'Escape') {
        setIsAutoPlaying(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  // Auto-slide functionality 
  useEffect(() => {
    if (!isAutoPlaying) return;

    const autoNextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const interval = setInterval(autoNextSlide, 2000); 
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]); 

  // Handlers for auto-play on hover are defined but not used in JSX
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);
  
  // Mobile Swipe Functionality: Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === 0) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        // Swipe left (next slide)
        nextSlide();
      } else {
        // Swipe right (previous slide)
        prevSlide();
      }
    }
    setTouchStartX(0); 
  };

  return (
    // Apply swipe handlers to the section
    <section 
      className="relative w-full h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] bg-background overflow-hidden"
      onTouchStart={handleTouchStart} 
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        // Auto-play on hover intentionally removed
      >
        {/* Image Container */}
        <div 
          // CRITICAL FIX: Increased negative Y-translation to -translate-y-32/-40 
          // to achieve the minimal spacing shown in your latest screenshot.
          className="relative w-full max-w-7xl h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 transform -translate-y-32 sm:-translate-y-40 lg:translate-y-0"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              const halfLength = slides.length / 2;
              
              // Infinite Sliding Loop Fix: Circular Index Calculation
              let circularOffset = index - currentSlide;
              if (circularOffset > halfLength) {
                circularOffset -= slides.length;
              } else if (circularOffset < -halfLength) {
                circularOffset += slides.length;
              }

              let transform = '';
              let zIndex = 1;
              let opacity = 0;

              // Infinite Sliding Loop Fix: Corrected Positioning Logic
              if (isActive) {
                transform = 'translateX(0) scale(1)';
                zIndex = 10;
                opacity = 1;
              } else if (circularOffset === 1) { // Next
                transform = 'translateX(50%) scale(0.85)';
                zIndex = 5;
                opacity = 0.6;
              } else if (circularOffset === -1) { // Previous
                transform = 'translateX(-50%) scale(0.85)';
                zIndex = 5;
                opacity = 0.6;
              } else if (circularOffset === 2) { // Next-Next
                transform = 'translateX(100%) scale(0.7)';
                zIndex = 2;
                opacity = 0.3;
              } else if (circularOffset === -2) { // Previous-Previous
                transform = 'translateX(-100%) scale(0.7)';
                zIndex = 2;
                opacity = 0.3;
              } else {
                // Far away or hidden slides
                transform = circularOffset > 0 ? 'translateX(150%) scale(0.5)' : 'translateX(-150%) scale(0.5)';
                zIndex = 1;
                opacity = 0;
              }

              return (
                <div
                  key={slide.id}
                  className="absolute transition-all duration-700 ease-in-out cursor-pointer"
                  style={{
                    transform,
                    zIndex,
                    opacity,
                  }}
                  onClick={() => goToSlide(index)}
                >
                  <div
                    // Mobile/Tablet Image Height Increased, Desktop Kept Same
                    className={`relative w-72 h-[500px] sm:w-80 sm:h-[600px] lg:w-96 lg:h-[500px] xl:w-[420px] xl:h-[540px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                      !isActive ? 'blur-sm' : ''
                    } ${isActive ? 'hover:shadow-3xl' : ''}`}
                  >
                    <ImageWithFallback
                      src={slide.image}
                      alt={slide.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                        isActive ? 'hover:scale-110' : ''
                      }`}
                    />

                    {/* Overlay with title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-4 sm:p-6">
                      <h3
                        className="text-primary-foreground text-lg sm:text-xl lg:text-2xl font-semibold"
                        style={{ fontFamily: 'Cinzel, serif' }}
                      >
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-primary/80 backdrop-blur-sm hover:bg-primary/90 text-primary-foreground p-3 sm:p-4 rounded-full transition-all duration-200 hover:scale-110 border-2 border-primary-foreground/30 shadow-lg focus:outline-none focus:ring-4 focus:ring-accent/50"
            aria-label="Previous slide (Left Arrow Key)"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-primary/80 backdrop-blur-sm hover:bg-primary/90 text-primary-foreground p-3 sm:p-4 rounded-full transition-all duration-200 hover:scale-110 border-2 border-primary-foreground/30 shadow-lg focus:outline-none focus:ring-4 focus:ring-accent/50"
            aria-label="Next slide (Right Arrow Key)"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                index === currentSlide
                  ? 'bg-accent scale-125 shadow-lg'
                  : 'bg-accent/50 hover:bg-accent/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-secondary/20 pointer-events-none" />
      </div>
    </section>
  );
}