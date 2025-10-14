import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface VelvetVowsTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function VelvetVowsTemplate({ coupleNames, portfolioId, images = [] }: VelvetVowsTemplateProps) {
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
    <div className="min-h-screen bg-[#130f2d] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,119,189,0.18), transparent 60%)' }} />
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(circle at 80% 30%, rgba(134,77,255,0.18), transparent 65%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-20 space-y-16">
        <motion.header
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.6em] text-xs text-violet-200">{coupleNames}</p>
          <h1 className="text-5xl lg:text-6xl tracking-[0.35em]" style={{ fontFamily: 'Cinzel, serif' }}>
            VELVET VOWS
          </h1>
          <p className="text-violet-100/80 tracking-[0.35em] uppercase text-xs">Where devotion meets midnight</p>
        </motion.header>

        <motion.section
          className="grid grid-cols-1 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="lg:col-span-3 lg:row-span-2 rounded-3xl bg-white/10 overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            <ImageWithFallback
              src={galleryImages[0]?.src || ''}
              alt={galleryImages[0]?.alt || 'Gallery image 1'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div
            className="lg:col-span-3 rounded-3xl bg-white/10 overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(1)}
          >
            <ImageWithFallback
              src={galleryImages[1]?.src || ''}
              alt={galleryImages[1]?.alt || 'Gallery image 2'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div
            className="lg:col-span-2 rounded-3xl bg-white/10 overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(2)}
          >
            <ImageWithFallback
              src={galleryImages[2]?.src || ''}
              alt={galleryImages[2]?.alt || 'Gallery image 3'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div
            className="lg:col-span-2 rounded-3xl bg-white/10 overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(3)}
          >
            <ImageWithFallback
              src={galleryImages[3]?.src || ''}
              alt={galleryImages[3]?.alt || 'Gallery image 4'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div
            className="lg:col-span-2 rounded-3xl bg-white/10 overflow-hidden cursor-pointer group"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="rounded-3xl bg-white/10 px-10 py-12 space-y-6">
            <p className="uppercase tracking-[0.5em] text-xs text-violet-200">Pure devotion</p>
            <p className="text-sm text-violet-100/80 leading-relaxed">
              Evoking the hush of midnight vows, each frame echoes with soft light, velvet textures, and lingering affection.
            </p>
          </div>
          <div
            className="rounded-3xl bg-white/10 overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(5)}
          >
            <ImageWithFallback
              src={galleryImages[5]?.src || ''}
              alt={galleryImages[5]?.alt || 'Gallery image 6'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-3xl bg-white/10 px-10 py-12 space-y-6 text-center">
            <p className="uppercase tracking-[0.5em] text-xs text-violet-200">Enchanted</p>
            <button
              className="uppercase tracking-[0.4em] text-xs text-white border border-white/40 rounded-full px-8 py-3 hover:bg-white/10 transition"
              onClick={() => openLightbox(0)}
            >
              Explore Story
            </button>
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