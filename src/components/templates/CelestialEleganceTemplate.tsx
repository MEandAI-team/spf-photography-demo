import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface CelestialEleganceTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function CelestialEleganceTemplate({ coupleNames, portfolioId, images = [] }: CelestialEleganceTemplateProps) {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-800 to-zinc-900 text-black">
      {/* Top Spacer to avoid navbar overlap */}
      <div className="h-32 md:h-40 lg:h-48"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header Section - Couple Name & One Word Caption */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* One Word Caption */}
          <p className="text-2xl lg:text-4xl text-zinc-300 tracking-[0.4em]">
            Shubh (Auspicious) 🙏
          </p>
          {/* Couple Name */}
          <h1 className="text-5xl lg:text-7xl font-semibold text-black tracking-[0.2em] mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            {coupleNames}
          </h1>

      
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="lg:col-span-3 lg:row-span-2 bg-white/5 rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            <ImageWithFallback
              src={galleryImages[0]?.src || ''}
              alt={galleryImages[0]?.alt || 'Gallery image 1'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div
              className="bg-white/5 rounded-3xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(1)}
            >
              <ImageWithFallback
                src={galleryImages[1]?.src || ''}
                alt={galleryImages[1]?.alt || 'Gallery image 2'}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Sentence Caption Block */}
            <div className="bg-white/5 rounded-3xl p-10 flex flex-col items-center justify-center text-center space-y-4">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.5em] text-zinc-400">
                <span>Tradition 🥻</span>
                <span>•</span>
                <span>Blessings 🙌</span>
                <span>•</span>
                <span>New Beginnings 🌅</span>
              </div>
              <p className="text-zinc-300 text-sm max-w-md">
                "The saffron sunrise of Gudi Padwa, framed by tradition and light. 💛"
              </p>
            </div>
          </div>

          <div
            className="lg:col-span-2 bg-white/5 rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(2)}
          >
            <ImageWithFallback
              src={galleryImages[2]?.src || ''}
              alt={galleryImages[2]?.alt || 'Gallery image 3'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="lg:col-span-3 flex flex-col lg:flex-row gap-6">
            <div
              className="flex-1 bg-white/5 rounded-3xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(3)}
            >
              <ImageWithFallback
                src={galleryImages[3]?.src || ''}
                alt={galleryImages[3]?.alt || 'Gallery image 4'}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div
              className="flex-1 bg-white/5 rounded-3xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(4)}
            >
              <ImageWithFallback
                src={galleryImages[4]?.src || ''}
                alt={galleryImages[4]?.alt || 'Gallery image 5'}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div
              className="flex-1 bg-white/5 rounded-3xl overflow-hidden cursor-pointer group hidden lg:block"
              onClick={() => openLightbox(5)}
            >
              <ImageWithFallback
                src={galleryImages[5]?.src || ''}
                alt={galleryImages[5]?.alt || 'Gallery image 6'}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:col-span-2 bg-white/5 rounded-3xl overflow-hidden cursor-pointer group lg:hidden"
            onClick={() => openLightbox(5)}
          >
            <ImageWithFallback
              src={galleryImages[5]?.src || ''}
              alt={galleryImages[5]?.alt || 'Gallery image 6'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
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
