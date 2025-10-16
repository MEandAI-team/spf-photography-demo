import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface RusticReverieTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function RusticReverieTemplate({ coupleNames, portfolioId, images = [] }: RusticReverieTemplateProps) {
  const galleryImages = images.length > 0
    ? images
    : portfolioId
      ? getPortfolioImages(portfolioId)
      : [];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    // Check for a valid index
    if (index < galleryImages.length) {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Helper component for image tiles
  const GalleryTile = ({ index, isVertical, spanClasses = '' }: { index: number, isVertical: boolean, spanClasses?: string }) => {
    // Aspect Ratios: Landscape (3:2) or Vertical (2:3)
    const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';
    
    // Check if image data exists before rendering
    if (!galleryImages[index]) return null;

    return (
      <div
        className={`${aspectRatio} ${spanClasses} rounded-[2rem] bg-white shadow-xl overflow-hidden cursor-pointer group`}
        onClick={() => openLightbox(index)}
      >
        <ImageWithFallback
          src={galleryImages[index]?.src || ''}
          alt={galleryImages[index]?.alt || `Gallery image ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  };
  
  // Array for 10 Landscape images (Indices 1 to 10)
  const landscapeIndices = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-100 to-rose-50 text-stone-700">
      {/* Container reverted to py-20 and includes the empty spacer div */}
      <div className="max-w-6xl mx-auto px-6 lg:px-14 py-20 space-y-16">
        
        {/* SPACER DIV ADDED HERE to push content below the fixed navbar */}
        <div className="h-20 lg:h-24" aria-hidden="true" />
        
        <motion.header
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="uppercase tracking-[0.45em] text-xs text-amber-500">.</p>
            <h1 className="text-5xl lg:text-6xl tracking-[0.3em]" style={{ fontFamily: 'Cinzel, serif' }}>
              Sushant and Radhika
            </h1>
          </div>
         
        </motion.header>

        {/* --- IMAGE GRID: 1 Vertical (Centered) + 10 Horizontal --- */}
        <motion.section
          // Using a 6-column grid on large screens for flexible centering
          className="grid grid-cols-2 lg:grid-cols-6 gap-6" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 1. Vertical Image (Index 0) - Centered on desktop */}
          <GalleryTile 
            index={0} 
            isVertical={true} 
            spanClasses="col-span-2 lg:col-span-2 lg:col-start-3" // Span 2 cols, Start at col 3 (out of 6) to center
          /> 
          
          {/* 2. Horizontal Images (Indices 1 to 10) - 5 rows of 2 images (L-R) */}
          {landscapeIndices.map((index, i) => (
            <GalleryTile 
              key={index}
              index={index} 
              isVertical={false} 
              // Span 2 columns on mobile, 3 columns on desktop (2 per row)
              spanClasses="col-span-2 lg:col-span-3" 
            />
          ))}

        </motion.section>

        {/* --- Text Section --- */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6" // Added pt-6 for separation from image grid
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Image 11 (If we need a place for a text-based element, we can reuse index 11 as a placeholder if 11 images are expected) */}
          <GalleryTile 
            index={11} // Placeholder index if you have an 11th image
            isVertical={false} 
            spanClasses="hidden lg:block rounded-[2rem] bg-white shadow-xl"
          />

          
        </motion.section>
      </div>

      <Lightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </div>
  );
}