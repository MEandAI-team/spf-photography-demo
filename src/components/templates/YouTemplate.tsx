import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface YouTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function YouTemplate({ coupleNames, portfolioId, images = [] }: YouTemplateProps) {
  // Use provided images, or get portfolio-specific images, or fallback to empty array
  const galleryImages = images.length > 0 
    ? images 
    : portfolioId 
      ? getPortfolioImages(portfolioId) 
      : [];
      
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    // Only open if the image index is within the actual number of images available (0 to 7 for 8 images)
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
  // Vertical: 2:3 ratio (2800x4200)
  // Landscape: 16:9 ratio (4096x2304)
  const GalleryTile = ({ index, aspectRatio, spanClasses = '' }: { index: number, aspectRatio: string, spanClasses?: string }) => (
    <div 
      className={`bg-gray-100 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 ${aspectRatio} ${spanClasses}`}
      onClick={() => openLightbox(index)}
    >
      <ImageWithFallback
        src={galleryImages[index]?.src || ''}
        alt={galleryImages[index]?.alt || `Gallery image ${index + 1}`}
        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
      />
    </div>
  );
  
  // Image indices mapping for 6 Vertical (V: 0-5) and 2 Landscape (L: 6-7)

  return (
    <div className="min-h-screen bg-white">
      {/* Content Container */}
      {/* Increased py-16 to py-24 to push the content (and header) down */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-24">
        {/* Header - YOU Text */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-6xl lg:text-8xl text-gray-800 tracking-[0.1em]" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            *
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto mt-4" />
        </motion.div>

        {/* Photo Grid - REDESIGNED for 6 Vertical (2:3) and 2 Landscape (16:9) */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Row 1: V | V | L (L spans 2 rows) */}
          {/* 1. Vertical (Index 0) - 2:3 ratio */}
          <GalleryTile index={0} aspectRatio="aspect-[2/3]" spanClasses="col-span-1" />

          {/* 2. Vertical (Index 1) - 2:3 ratio */}
          <GalleryTile index={1} aspectRatio="aspect-[2/3]" spanClasses="col-span-1" />

          {/* 3. Landscape (Index 6) - 16:9 ratio, spans 1 column but 2 rows */}
          <GalleryTile 
            index={6} 
            aspectRatio="aspect-[9/16]" // Used inverse ratio for vertical space-filling 
            spanClasses="col-span-1 row-span-2" 
          />

          {/* Row 2: V | V (L is spanning down from Row 1) */}
          {/* 4. Vertical (Index 2) - 2:3 ratio */}
          <GalleryTile index={2} aspectRatio="aspect-[2/3]" spanClasses="col-span-1" />

          {/* 5. Vertical (Index 3) - 2:3 ratio */}
          <GalleryTile index={3} aspectRatio="aspect-[2/3]" spanClasses="col-span-1" />

          {/* Row 3: L | V | V (L spans 2 columns) */}
          {/* 6. Landscape (Index 7) - 16:9 ratio, spans 2 columns */}
          <GalleryTile 
            index={7} 
            aspectRatio="aspect-[16/9]" 
            spanClasses="col-span-2" 
          />
          
          {/* 7. Vertical (Index 4) - 2:3 ratio */}
          <GalleryTile index={4} aspectRatio="aspect-[2/3]" spanClasses="col-span-1" />

          {/* Row 4: V (single item for flow) */}
          {/* 8. Vertical (Index 5) - 2:3 ratio */}
          <GalleryTile index={5} aspectRatio="aspect-[2/3]" spanClasses="col-span-1 md:col-start-2" />

        </motion.div>

        {/* Decorative Element */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
          <svg className="w-8 h-8 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-600 tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
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
