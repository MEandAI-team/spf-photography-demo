import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface LuminousWhisperTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function LuminousWhisperTemplate({ coupleNames, portfolioId, images = [] }: LuminousWhisperTemplateProps) {
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
  
  const GalleryTile = ({ index, isVertical, spanClasses = '', customClasses = '' }: { index: number, isVertical: boolean, spanClasses?: string, customClasses?: string }) => {
    const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';
    return (
      <div
        className={`bg-white shadow-2xl rounded-xl overflow-hidden cursor-pointer group transition-transform duration-500 hover:scale-[1.01] ${aspectRatio} ${spanClasses} ${customClasses}`}
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

  const gridLayout = [
    { index: 0, isVertical: true, spanClasses: "lg:col-span-1 lg:row-span-2" },
    { index: 1, isVertical: false, spanClasses: "lg:col-span-3" },
    { index: 2, isVertical: false, spanClasses: "lg:col-span-2" },
    { index: 3, isVertical: false, spanClasses: "lg:col-span-1" },
    { index: 4, isVertical: false, spanClasses: "lg:col-span-2" },
    { index: 5, isVertical: true, spanClasses: "lg:col-span-1 lg:row-span-2" },
    { index: 6, isVertical: false, spanClasses: "lg:col-span-1" },
    { index: 7, isVertical: false, spanClasses: "lg:col-span-1" },
    { index: 8, isVertical: false, spanClasses: "lg:col-span-2" },
    { index: 9, isVertical: false, spanClasses: "lg:col-span-2" },
    { index: 10, isVertical: false, spanClasses: "lg:col-span-1" },
    { index: 11, isVertical: false, spanClasses: "lg:col-span-1" },
  ];

  return (
    <div className="min-h-screen bg-[#f6f0ff]">

      {/* Top Spacer */}
      <div className="h-32 md:h-40 lg:h-48"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-16 space-y-16">

        {/* Header Section - One Word + Couple Name */}
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-3xl lg:text-5xl tracking-[0.4em] text-gray-800 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Storyline 🧡
          </p>
          <h1 className="text-5xl lg:text-6xl tracking-[0.3em] font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
            {coupleNames}
          </h1>
        </motion.header>

        {/* Image Grid */}
        <motion.section
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {gridLayout.map((item) => (
            <GalleryTile 
              key={item.index}
              index={item.index}
              isVertical={item.isVertical}
              spanClasses={item.spanClasses}
            />
          ))}
        </motion.section>

        {/* Sentence Caption Block */}
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-4 mx-auto bg-white/30 rounded-3xl p-10 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.5em] text-gray-800">
            <span>Motion 🎬</span>
            <span>•</span>
            <span>Emotion 💓</span>
            <span>•</span>
            <span>Story 📖</span>
          </div>
          <p className="text-gray-800 text-sm max-w-md">
            “Turning your love story 💑 into cinematic art 🎥.”
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
