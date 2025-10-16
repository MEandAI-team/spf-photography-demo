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
    <div className="min-h-screen bg-white text-black">

      {/* Top Spacer */}
      <div className="h-32 md:h-40 lg:h-48"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-16">

        {/* Header */}
        <motion.header
          className="flex flex-col items-center justify-center text-center py-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.4em] text-sm text-neutral-600">Monochrome Portfolio</p>
          <div className="w-24 h-px bg-neutral-400 mt-4 mb-4" />
          <h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-[0.1em] leading-none"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Ratnesha
          </h1>
        </motion.header>

        {/* Image Grid */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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

          {[1,2,3,4,5].map((i) => (
            <div
              key={i}
              className="bg-neutral-100 rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <ImageWithFallback
                src={galleryImages[i]?.src || ''}
                alt={galleryImages[i]?.alt || `Gallery image ${i+1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.section>

        {/* Text Caption Block */}
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-4 mx-auto bg-neutral-200 rounded-3xl p-10 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.5em] text-neutral-900">
            <span>Nature 🌳</span>
            <span>•</span>
            <span>Calm 🍃</span>
            <span>•</span>
            <span>Beauty ❤️</span>
          </div>
          <p className="text-neutral-900 text-sm max-w-md">
            "Where the soul meets the serene embrace of the wild. 🌲"
          </p>
          <p className="text-2xl font-semibold tracking-wide mt-2">
            Harmony ❤️
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
