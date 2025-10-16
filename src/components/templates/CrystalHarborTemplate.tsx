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

export default function CrystalHarborTemplate({ coupleNames, portfolioId, images = [] }: CrystalHarborTemplateProps) {
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
    <div className="min-h-screen bg-gradient-to-b from-[#eaf7ff] via-[#dff1ff] to-[#c7e7ff] text-[#1d3b53]">

      {/* Top Spacer */}
      <div className="h-32 md:h-40 lg:h-48"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-16 space-y-16">
        {/* Header Section - BlissTemplate CSS for Name & Caption */}
        <motion.header
          className="text-center mb-12 bliss-template-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* One Word Caption */}
          <p className="bliss-template-caption mb-4">Nurture 🤍</p>

          {/* Couple Name */}
          <h1 className="bliss-template-name">{coupleNames}</h1>
        </motion.header>

        {/* Image Grid */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="lg:col-span-2 lg:row-span-2 rounded-[2.5rem] bg-white/60 backdrop-blur overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            <ImageWithFallback
              src={galleryImages[0]?.src || ''}
              alt={galleryImages[0]?.alt || 'Gallery image 1'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div
            className="lg:col-span-2 rounded-[2.5rem] bg-white/60 backdrop-blur overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(1)}
          >
            <ImageWithFallback
              src={galleryImages[1]?.src || ''}
              alt={galleryImages[1]?.alt || 'Gallery image 2'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-[2.5rem] bg-white/60 backdrop-blur overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(2)}
          >
            <ImageWithFallback
              src={galleryImages[2]?.src || ''}
              alt={galleryImages[2]?.alt || 'Gallery image 3'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-[2.5rem] bg-white/60 backdrop-blur overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(3)}
          >
            <ImageWithFallback
              src={galleryImages[3]?.src || ''}
              alt={galleryImages[3]?.alt || 'Gallery image 4'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-[2.5rem] bg-white/60 backdrop-blur overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(4)}
          >
            <ImageWithFallback
              src={galleryImages[4]?.src || ''}
              alt={galleryImages[4]?.alt || 'Gallery image 5'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.section>

        <motion.section
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="rounded-[2.5rem] bg-white/60 backdrop-blur overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(5)}
          >
            <ImageWithFallback
              src={galleryImages[5]?.src || ''}
              alt={galleryImages[5]?.alt || 'Gallery image 6'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.section>

        {/* Sentence Caption Block */}
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-4 mx-auto bg-white/30 rounded-3xl p-10 max-w-lg bliss-template-caption-block"
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
