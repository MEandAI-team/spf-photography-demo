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

  return (
    <div className="min-h-screen bg-white">
      {/* Top Spacer to avoid navbar overlap */}
      <div className="h-32 md:h-40 lg:h-48"></div>  {/* ✅ This pushes the header down */}

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 pb-24">
        
        {/* Header Section - One Word Caption + Couple Name */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* One Word Caption */}
          <h1 
            className="text-6xl lg:text-8xl text-gray-800 tracking-[0.2em]" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Chemistry
          </h1>

          {/* Decorative line */}
          <div className="w-24 h-px bg-gray-300 mx-auto mt-4" />

          {/* Couple Name */}
          <p className="uppercase tracking-[0.4em] text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-4">
            {coupleNames}
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <GalleryTile index={0} aspectRatio="aspect-[2/3]" spanClasses="col-span-1" />
          <GalleryTile index={1} aspectRatio="aspect-[2/3]" spanClasses="col-span-1" />
          <GalleryTile index={6} aspectRatio="aspect-[9/16]" spanClasses="col-span-1 row-span-2" />
          <GalleryTile index={2} aspectRatio="aspect-[2/3]" spanClasses="col-span-1" />
          <GalleryTile index={3} aspectRatio="aspect-[2/3]" spanClasses="col-span-1" />
          <GalleryTile index={7} aspectRatio="aspect-[16/9]" spanClasses="col-span-2" />
          <GalleryTile index={4} aspectRatio="aspect-[2/3]" spanClasses="col-span-1" />
          <GalleryTile index={5} aspectRatio="aspect-[2/3]" spanClasses="col-span-1 md:col-start-2" />
        </motion.div>

        {/* Sentence Caption - Centered Block */}
        <motion.div 
          className="flex flex-col items-center justify-center text-center space-y-4 mx-auto bg-gray-50 rounded-3xl p-8 mb-12 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.5em] text-gray-400">
            <span>Dream ☁️</span>
            <span>•</span>
            <span>Emotion 💖</span>
            <span>•</span>
            <span>Forever ⏳</span>
          </div>
          <p className="text-gray-600 text-sm max-w-md">
            “Before the vows, there’s magic ✨ in every glance 👀.”
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
