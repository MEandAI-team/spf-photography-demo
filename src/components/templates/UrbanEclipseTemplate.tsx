import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface UrbanEclipseTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

// Helper component for image tiles, simplified for this structure
const GalleryTile = ({ index, isVertical, spanClasses = '', galleryImages, openLightbox }: { index: number, isVertical: boolean, spanClasses?: string, galleryImages: ImageData[], openLightbox: (index: number) => void }) => {
    // Aspect Ratios: Landscape (3:2) or Vertical (2:3)
    const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';
    
    if (index >= galleryImages.length) return null;

    return (
      <div
        className={`${aspectRatio} ${spanClasses} rounded-[2rem] bg-white shadow-lg overflow-hidden cursor-pointer group`}
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


export default function UrbanEclipseTemplate({ coupleNames, portfolioId, images = [] }: UrbanEclipseTemplateProps) {
  // Determine which image array to use: passed via props or fetched via portfolioId
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

  // V images span 2 columns on a 4-column grid (2 + 2 = 4)
  // L images span 4 columns (1 image per row) or 2 columns each (2 + 2 = 4)

  return (
    // Outer container: Sets light gradient background and default black text color
    <div className="min-h-screen bg-gradient-to-b from-white via-neutral-100 to-white text-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 pt-20 pb-20 space-y-16">
        
        {/* Empty Div Spacer: Pushes content down to clear a fixed navigation bar */}
        <div className="h-20 lg:h-24" aria-hidden="true" />
        
        {/* Header Section: Title and couple names */}
        <motion.header
          className="flex flex-col items-center justify-center gap-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center w-full">
            <p className="uppercase tracking-[0.5em] text-xs text-neutral-600">.</p>
            <h1 className="text-5xl lg:text-6xl tracking-[0.3em] text-neutral-800" style={{ fontFamily: 'Cinzel, serif' }}>
              Shurti
            </h1>
          </div>
        </motion.header>

        {/* --- IMAGE GRID (2V, 2V, 2L, 2V, 2V Structure - 10 Images Total) --- */}
        <motion.section
          className="grid grid-cols-2 lg:grid-cols-4 gap-6" // Use 4-col desktop grid for V-image pairing
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 1. START: 2 Vertical Images (Indices 0, 1) */}
          <GalleryTile index={0} isVertical={true} spanClasses="col-span-1 lg:col-span-2" galleryImages={galleryImages} openLightbox={openLightbox} />
          <GalleryTile index={1} isVertical={true} spanClasses="col-span-1 lg:col-span-2" galleryImages={galleryImages} openLightbox={openLightbox} />
          
          {/* 2. NEXT: 2 Vertical Images (Indices 2, 3) */}
          <GalleryTile index={2} isVertical={true} spanClasses="col-span-1 lg:col-span-2" galleryImages={galleryImages} openLightbox={openLightbox} />
          <GalleryTile index={3} isVertical={true} spanClasses="col-span-1 lg:col-span-2" galleryImages={galleryImages} openLightbox={openLightbox} />

          {/* 3. MIDDLE: 2 Landscape Images (Indices 4, 5) - Full width on desktop */}
          <GalleryTile index={4} isVertical={false} spanClasses="col-span-2 lg:col-span-4" galleryImages={galleryImages} openLightbox={openLightbox} />
          <GalleryTile index={5} isVertical={false} spanClasses="col-span-2 lg:col-span-4" galleryImages={galleryImages} openLightbox={openLightbox} />

          {/* 4. NEXT: 2 Vertical Images (Indices 6, 7) */}
          <GalleryTile index={6} isVertical={true} spanClasses="col-span-1 lg:col-span-2" galleryImages={galleryImages} openLightbox={openLightbox} />
          <GalleryTile index={7} isVertical={true} spanClasses="col-span-1 lg:col-span-2" galleryImages={galleryImages} openLightbox={openLightbox} />

          {/* 5. END: 2 Vertical Images (Indices 8, 9) */}
          <GalleryTile index={8} isVertical={true} spanClasses="col-span-1 lg:col-span-2" galleryImages={galleryImages} openLightbox={openLightbox} />
          <GalleryTile index={9} isVertical={true} spanClasses="col-span-1 lg:col-span-2" galleryImages={galleryImages} openLightbox={openLightbox} />

        </motion.section>
        
        {/* FINAL FIX: LARGE BOTTOM SPACER DIV 
           Guarantees padding at the bottom of the page.
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