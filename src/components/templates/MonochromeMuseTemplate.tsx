import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface MonochromeMuseTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function MonochromeMuseTemplate({ coupleNames, portfolioId, images = [] }: MonochromeMuseTemplateProps) {
  const galleryImages = images.length > 0
    ? images
    : portfolioId
      ? getPortfolioImages(portfolioId)
      : [];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
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
    // 1. Changed background to white
    <div className="min-h-screen bg-white text-black">
      {/* 💡 Applied pt-[40rem] for guaranteed clearance from the fixed navigation bar */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-[40rem] py-20">
        
        {/* --- Adjusted Header Structure for Ratnesha Title --- */}
        <motion.div
          className="flex flex-col items-center justify-center text-center py-16" // Added py-16 for margin
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Secondary Text and Divider adjusted */}
          <div className="w-full mb-8">
            {/* Context Text */}
            <p className="uppercase tracking-[0.4em] text-sm text-neutral-600">Monochrome Portfolio</p>
            <div className="w-24 h-px bg-neutral-400 mx-auto mt-4 mb-4" />
          </div>
          
          {/* Main Title: Size adjusted to be large but fit cleanly, similar to "PERFECTION" */}
          <h1
            // Size changed from [16rem]/[20rem] to a large but contained size
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-[0.1em] drop-shadow-lg leading-none" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Ratnesha
          </h1>
          
          
          
        </motion.div>
        {/* --- End Header Structure --- */}

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Container backgrounds changed to a light gray or white for contrast */}
          <div
            className="lg:col-span-2 lg:row-span-2 bg-neutral-100 rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            <ImageWithFallback
              src={galleryImages[0]?.src || ''}
              alt={galleryImages[0]?.alt || 'Gallery image 1'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="bg-neutral-100 rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(1)}
          >
            <ImageWithFallback
              src={galleryImages[1]?.src || ''}
              alt={galleryImages[1]?.alt || 'Gallery image 2'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="bg-neutral-100 rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(2)}
          >
            <ImageWithFallback
              src={galleryImages[2]?.src || ''}
              alt={galleryImages[2]?.alt || 'Gallery image 3'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="bg-neutral-100 rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(3)}
          >
            <ImageWithFallback
              src={galleryImages[3]?.src || ''}
              alt={galleryImages[3]?.alt || 'Gallery image 4'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="bg-neutral-100 rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(4)}
          >
            <ImageWithFallback
              src={galleryImages[4]?.src || ''}
              alt={galleryImages[4]?.alt || 'Gallery image 5'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          {/* Text block adjusted for light background */}
          <div className="lg:col-span-3 bg-neutral-200 rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Text colors updated to black/dark gray */}
            <p className="uppercase tracking-[0.4em] text-xs text-neutral-700">NATURE & BEAUTY</p>
            <p className="text-neutral-900 text-sm lg:text-base max-w-xl text-center lg:text-left">
            </p>
            {/* Button styling adjusted for black text on light background */}
            <button
              className="uppercase tracking-[0.5em] text-xs text-black border border-white rounded-full px-6 py-3 hover:bg-black hover:text-white transition"
              onClick={() => openLightbox(0)}
            >
              _
            </button>
          </div>
        </motion.div>
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
