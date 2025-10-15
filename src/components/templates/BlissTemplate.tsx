import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface BlissTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function BlissTemplate({ coupleNames, portfolioId, images = [] }: BlissTemplateProps) {
  // Use provided images, or get portfolio-specific images, or fallback to empty array
  const galleryImages = images.length > 0 
    ? images 
    : portfolioId 
      ? getPortfolioImages(portfolioId) 
      : [];
      
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    // Only open if the image index is within the actual number of images available
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
  
  // Helper component for repeated image divs
  const GalleryTile = ({ index, aspectRatio, spanClasses = '' }: { index: number, aspectRatio: string, spanClasses?: string }) => (
    <div 
      className={`${aspectRatio} bg-white/90 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 ${spanClasses}`}
      onClick={() => openLightbox(index)}
    >
      <ImageWithFallback
        src={galleryImages[index]?.src || ''}
        alt={`Gallery image ${index + 1}`}
        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-600 relative overflow-hidden">
      {/* Large Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gray-400 flex items-center justify-center">
          <span className="text-gray-600">Background Image Placeholder</span>
        </div>
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header - BLISS Text */}
        <motion.div 
          className="pt-24 pb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-6xl lg:text-8xl text-white tracking-[0.3em]" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            BLISS
          </h1>
        </motion.div>

        {/* Main Photo Grid - Redesigned for 2 Landscape and 8 Vertical images */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4 max-w-6xl w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            
            {/* 1. Landscape (Index 0) - Using 5:4 ratio (960x768) */}
            <GalleryTile 
              index={0} 
              aspectRatio="aspect-[5/4]" 
              spanClasses="col-span-2 md:col-span-4 lg:col-span-4" 
            />

            {/* 2. Vertical (Index 1) - Using 2:3 ratio (768x1154) */}
            <GalleryTile 
              index={1} 
              aspectRatio="aspect-[2/3]" 
              spanClasses="col-span-1 md:col-span-1"
            />
            
            {/* 3. Vertical (Index 2) - Using 2:3 ratio (768x1154), Tall, spans 2 rows */}
            <GalleryTile 
              index={2} 
              aspectRatio="aspect-[2/3]" 
              spanClasses="col-span-1 row-span-2 md:col-span-1"
            />

            {/* 4. Vertical (Index 3) - Using 2:3 ratio (768x1154) */}
            <GalleryTile 
              index={3} 
              aspectRatio="aspect-[2/3]" 
              spanClasses="col-span-1 md:col-span-1"
            />

            {/* 5. Vertical (Index 4) - Using 2:3 ratio (768x1154) */}
            <GalleryTile 
              index={4} 
              aspectRatio="aspect-[2/3]" 
              spanClasses="col-span-1 md:col-span-1"
            />
            
            {/* Middle Row - Ewww Text Block (Index 5 placeholder) - Spans 4 columns*/}
            <div className="col-span-2 md:col-span-4 flex items-center justify-center bg-white/10 backdrop-blur-sm h-32 lg:h-48">
              <h2 
                className="text-4xl lg:text-6xl text-white tracking-[0.2em]" 
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Ewww
              </h2>
            </div>

            {/* 6. Vertical (Index 5) - Using 2:3 ratio (768x1154) */}
            <GalleryTile 
              index={5} 
              aspectRatio="aspect-[2/3]" 
              spanClasses="col-span-1 md:col-span-1"
            />

            {/* 7. Vertical (Index 6) - Using 2:3 ratio (768x1154) */}
            <GalleryTile 
              index={6} 
              aspectRatio="aspect-[2/3]" 
              spanClasses="col-span-1 md:col-span-1"
            />

            {/* 8. Vertical (Index 7) - Using 2:3 ratio (768x1154) */}
            <GalleryTile 
              index={7} 
              aspectRatio="aspect-[2/3]" 
              spanClasses="col-span-1 md:col-span-1"
            />

            {/* 9. Vertical (Index 8) - Using 2:3 ratio (768x1154) */}
            <GalleryTile 
              index={8} 
              aspectRatio="aspect-[2/3]" 
              spanClasses="col-span-1 md:col-span-1"
            />
            
            {/* 10. Landscape (Index 9) - Using 5:4 ratio (960x768) */}
            <GalleryTile 
              index={9} 
              aspectRatio="aspect-[5/4]" 
              spanClasses="col-span-2 md:col-span-4 lg:col-span-6" 
            />

          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          className="pb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white text-lg tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
            {coupleNames}
          </p>
        </motion.div>
      </div>
      
      {/* Lightbox */}
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
