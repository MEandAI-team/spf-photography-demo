import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface OceanicOathTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function OceanicOathTemplate({ coupleNames, portfolioId, images = [] }: OceanicOathTemplateProps) {
  const galleryImages = images.length > 0
    ? images
    : portfolioId
      ? getPortfolioImages(portfolioId)
      : [];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
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
    const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';
    
    if (!galleryImages[index]) return null;

    return (
      <div
        className={`${aspectRatio} ${spanClasses} rounded-[2rem] bg-white/70 backdrop-blur-sm overflow-hidden cursor-pointer group`}
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100">
      {/* Revert main container padding to original py-20 */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-20"> 
        
        {/* ADDED EMPTY DIV SPACER HERE */}
        {/* Assuming the fixed navbar height is around 4-5rem (h-16 or h-20) */}
        <div className="h-20 lg:h-24" aria-hidden="true" />
        
        <motion.header
          // Removed previous mt-16, letting the empty div handle the spacing
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* This is the div that was being overlapped */}
          <div className="text-center w-full"> {/* ADDED text-center and w-full */}
            <p className="uppercase tracking-[0.5em] text-xs text-sky-500">.</p>
           <h1 className="text-5xl lg:text-6xl tracking-[0.3em] text-sky-900" style={{ fontFamily: 'Cinzel, serif' }}>
              Vidija & Gurunath
            </h1>
          </div>
          
        </motion.header>

        {/* Portfolio Grid - 3V, 2L, 2L, 3V structure */}
        <motion.section
          className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          
          {/* 1. START: 3 Vertical Images (Indices 0, 1, 2) */}
          <GalleryTile index={0} isVertical={true} spanClasses="col-span-1 lg:col-span-4" /> 
          <GalleryTile index={1} isVertical={true} spanClasses="col-span-1 lg:col-span-4" />
          <GalleryTile index={2} isVertical={true} spanClasses="col-span-2 lg:col-span-4" />
          

          {/* 2. MIDDLE: 2 Landscape Images (Indices 3, 4) */}
          <GalleryTile index={3} isVertical={false} spanClasses="col-span-2 lg:col-span-6" /> 
          <GalleryTile index={4} isVertical={false} spanClasses="col-span-2 lg:col-span-6" /> 


          {/* 3. MIDDLE-CONTINUED: 2 Landscape Images (Indices 5, 6) */}
          <GalleryTile index={5} isVertical={false} spanClasses="col-span-2 lg:col-span-6" /> 
          <GalleryTile index={6} isVertical={false} spanClasses="col-span-2 lg:col-span-6" /> 


          {/* 4. END: 3 Vertical Images (Indices 7, 8, 9) */}
          <GalleryTile index={7} isVertical={true} spanClasses="col-span-2 lg:col-span-4" /> 
          <GalleryTile index={8} isVertical={true} spanClasses="col-span-1 lg:col-span-4" />
          <GalleryTile index={9} isVertical={true} spanClasses="col-span-1 lg:col-span-4" />

        </motion.section>

        <motion.section
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="lg:col-span-3 text-center text-sky-800">
            <p className="text-lg tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
                A timeless story captured where the ocean meets the sky.
            </p>
          </div>
          
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