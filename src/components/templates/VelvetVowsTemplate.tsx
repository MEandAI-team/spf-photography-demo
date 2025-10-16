import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface VelvetVowsTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

// Helper component for image tiles, adapted for this structure
const GalleryTile = ({ index, isVertical, spanClasses = '', galleryImages, openLightbox }: { index: number, isVertical: boolean, spanClasses?: string, galleryImages: ImageData[], openLightbox: (index: number) => void }) => {
    // Aspect Ratios: Landscape (3:2) or Vertical (2:3)
    const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';
    
    if (index >= galleryImages.length) return null;

    return (
      <div
        // Changed bg-white/10 to bg-white shadow-lg for light theme
        className={`${aspectRatio} ${spanClasses} rounded-3xl bg-white shadow-lg overflow-hidden cursor-pointer group`}
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


export default function VelvetVowsTemplate({ coupleNames, portfolioId, images = [] }: VelvetVowsTemplateProps) {
  const galleryImages = images.length > 0
    ? images
    : portfolioId
      ? getPortfolioImages(portfolioId)
      : [];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    // Check for valid index before opening lightbox
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

  return (
    // Outer container: Sets light gradient background and default black text color
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-20 space-y-16">
        
        {/* Empty Div Spacer: Pushes content down to clear a fixed navigation bar */}
        <div className="h-20 lg:h-24" aria-hidden="true" />
        
        <motion.header
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Text colors changed to dark neutrals */}
          <p className="uppercase tracking-[0.6em] text-xs text-violet-700">.</p>
          <h1 className="text-5xl lg:text-6xl tracking-[0.35em] text-violet-900" style={{ fontFamily: 'Cinzel, serif' }}>
            Sports
          </h1>
          {/* ⭐ FIX APPLIED: Added mb-8 (margin-bottom) to create space above the images ⭐ */}
          <p className="text-violet-800 tracking-[0.35em] uppercase text-xs mb-8">Eat dust and mud, leave none behind. 💨</p>
        </motion.header>

        {/* --- IMAGE GRID: 3V, 2L, 3V Structure (Indices 0-7) --- */}
        <motion.section
          className="grid grid-cols-2 lg:grid-cols-12 gap-6" // Using 12-col desktop grid for 3V side-by-side
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 1. START: 3 Vertical Images (Indices 0, 1, 2) - 4 columns each */}
          <GalleryTile index={0} isVertical={true} spanClasses="col-span-1 lg:col-span-4" galleryImages={galleryImages} openLightbox={openLightbox} />
          <GalleryTile index={1} isVertical={true} spanClasses="col-span-1 lg:col-span-4" galleryImages={galleryImages} openLightbox={openLightbox} />
          <GalleryTile index={2} isVertical={true} spanClasses="col-span-2 lg:col-span-4" galleryImages={galleryImages} openLightbox={openLightbox} />
          
          {/* 2. MIDDLE: 2 Landscape Images (Indices 3, 4) - 6 columns each */}
          <GalleryTile index={3} isVertical={false} spanClasses="col-span-2 lg:col-span-6" galleryImages={galleryImages} openLightbox={openLightbox} />
          <GalleryTile index={4} isVertical={false} spanClasses="col-span-2 lg:col-span-6" galleryImages={galleryImages} openLightbox={openLightbox} />
          
          {/* 3. END: 3 Vertical Images (Indices 5, 6, 7) - 4 columns each */}
          <GalleryTile index={5} isVertical={true} spanClasses="col-span-2 lg:col-span-4" galleryImages={galleryImages} openLightbox={openLightbox} />
          <GalleryTile index={6} isVertical={true} spanClasses="col-span-1 lg:col-span-4" galleryImages={galleryImages} openLightbox={openLightbox} />
          <GalleryTile index={7} isVertical={true} spanClasses="col-span-1 lg:col-span-4" galleryImages={galleryImages} openLightbox={openLightbox} />
          <GalleryTile index={8} isVertical={true} spanClasses="col-span-1 lg:col-span-4" galleryImages={galleryImages} openLightbox={openLightbox} />
          <GalleryTile index={9} isVertical={false} spanClasses="col-span-2 lg:col-span-6" galleryImages={galleryImages} openLightbox={openLightbox} />

        </motion.section>

        {/* This section remains empty, but needs spacing below it */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Content that was previously here has been removed */}
          
        </motion.section>
        
        {/* FINAL FIX: LARGE BOTTOM SPACER DIV 
           Guarantees generous padding below the last visible content.
        */}
        <div className="h-24 lg:h-32" aria-hidden="true" />
        
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