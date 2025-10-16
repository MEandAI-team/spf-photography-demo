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
        <div className="w-full h-full bg-white flex items-center justify-center">
          <span className="text-white">Background Image Placeholder</span>
        </div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.div 
          className="pt-24 pb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-6xl lg:text-8xl text-black tracking-[0.3em]" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Eternal
          </h1>
          {/* Decorative line */}
          <div className="w-24 h-px bg-gray-300 mx-auto mt-4" />
          {/* 🔥 Updated couple name styling */}
          <p className="uppercase tracking-[0.4em] text-sm sm:text-base md:text-lg lg:text-xl text-violet-700 mt-2">
            {coupleNames}
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4 max-w-6xl w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <GalleryTile index={0} aspectRatio="aspect-[5/4]" spanClasses="col-span-2 md:col-span-4 lg:col-span-4" />
            <GalleryTile index={1} aspectRatio="aspect-[2/3]" spanClasses="col-span-1 md:col-span-1" />
            <GalleryTile index={2} aspectRatio="aspect-[2/3]" spanClasses="col-span-1 row-span-2 md:col-span-1" />
            <GalleryTile index={3} aspectRatio="aspect-[2/3]" spanClasses="col-span-1 md:col-span-1" />
            <GalleryTile index={4} aspectRatio="aspect-[2/3]" spanClasses="col-span-1 md:col-span-1" />
            <GalleryTile index={5} aspectRatio="aspect-[2/3]" spanClasses="col-span-1 md:col-span-1" />
            <GalleryTile index={6} aspectRatio="aspect-[2/3]" spanClasses="col-span-1 md:col-span-1" />
            <GalleryTile index={7} aspectRatio="aspect-[2/3]" spanClasses="col-span-1 md:col-span-1" />
            <GalleryTile index={8} aspectRatio="aspect-[2/3]" spanClasses="col-span-1 md:col-span-1" />
            <GalleryTile index={9} aspectRatio="aspect-[2/3]" spanClasses="col-span-1 md:col-span-1" />
          </motion.div>
        </div>

        {/* Center Quote Block */}
        <motion.div 
          className="flex flex-col items-center justify-center text-center space-y-4 mx-auto bg-white/5 rounded-3xl p-10 mt-10 mb-16 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.5em] text-zinc-400">
            <span>Love ❤️</span>
            <span>•</span>
            <span>Laughter 😄</span>
            <span>•</span>
            <span>Legacy 🌿</span>
          </div>
          <p className="text-zinc-300 text-sm max-w-md">
            Where forever begins 💍 in a single frame 📸.
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
