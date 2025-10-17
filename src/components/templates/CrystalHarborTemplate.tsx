import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface CrystalHarborTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function CrystalHarborTemplate({
  coupleNames,
  portfolioId,
  images = [],
}: CrystalHarborTemplateProps) {
  const galleryImages =
    images.length > 0
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

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  const previousImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaf7ff] via-[#dff1ff] to-[#c7e7ff] text-[#1d3b53]">
      {/* Top Spacer */}
      <div className="h-32 md:h-40 lg:h-48" />

      <div className="max-w-6xl mx-auto px-6 lg:px-16 space-y-24 lg:space-y-32">
        {/* === Header Section === */}
        <motion.header
          className="text-center mb-12 bliss-template-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-6xl lg:text-8xl text-black tracking-[0.3em]"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Nurture
          </h1>
          {/* Decorative line */}
          <div className="w-24 h-px bg-gray-300 mx-auto mt-4" />
          <p className="uppercase tracking-[0.4em] text-sm sm:text-base md:text-lg lg:text-xl text-violet-700 mt-2">
            {coupleNames}
          </p>
        </motion.header>

        {/* === Image Groups === */}

        {/* 3 Vertical Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-[2/3] rounded-[2.5rem] bg-white/60 backdrop-blur overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <ImageWithFallback
                src={galleryImages[i]?.src || ''}
                alt={galleryImages[i]?.alt || `Gallery image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* 2 Landscape Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {[3, 4].map((i) => (
            <div
              key={i}
              className="aspect-[3/2] rounded-[2.5rem] bg-white/60 backdrop-blur overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <ImageWithFallback
                src={galleryImages[i]?.src || ''}
                alt={galleryImages[i]?.alt || `Gallery image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* 3 Vertical Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[5, 6, 7].map((i) => (
            <div
              key={i}
              className="aspect-[2/3] rounded-[2.5rem] bg-white/60 backdrop-blur overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <ImageWithFallback
                src={galleryImages[i]?.src || ''}
                alt={galleryImages[i]?.alt || `Gallery image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* 2 Vertical Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {[8, 9].map((i) => (
            <div
              key={i}
              className="aspect-[2/3] rounded-[2.5rem] bg-white/60 backdrop-blur overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <ImageWithFallback
                src={galleryImages[i]?.src || ''}
                alt={galleryImages[i]?.alt || `Gallery image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* === Caption Block === */}
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-4 mx-auto bg-white/30 rounded-3xl p-10 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.5em] text-[#3f7fb6]">
            <span>Softness 🕊️</span>
            <span>•</span>
            <span>Waiting ⏳</span>
            <span>•</span>
            <span>Sacred 🙏</span>
          </div>
          <p className="text-[#1d3b53] text-sm max-w-md">
            “Patience is a mother's first lesson, written in soft light. 💖”
          </p>
        </motion.div>

        {/* Bottom Spacer */}
        <div className="h-32 lg:h-48" />
      </div>

      {/* === Lightbox === */}
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
