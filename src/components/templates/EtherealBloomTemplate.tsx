import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface EtherealBloomTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function EtherealBloomTemplate({ coupleNames, portfolioId, images = [] }: EtherealBloomTemplateProps) {
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
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf5] via-[#fdf2ff] to-[#f5faff]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-20 space-y-16">
        <motion.header
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.4em] text-xs text-rose-400">{coupleNames}</p>
          <h1
            className="text-5xl lg:text-6xl tracking-[0.3em] text-rose-600"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            ETHEREAL BLOOM
          </h1>
          <p className="uppercase tracking-[0.35em] text-xs text-rose-300">Botanical devotion</p>
        </motion.header>

        <motion.section
          className="grid grid-cols-1 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="lg:col-span-3 lg:row-span-2 rounded-[2.5rem] bg-white shadow-xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            <ImageWithFallback
              src={galleryImages[0]?.src || ''}
              alt={galleryImages[0]?.alt || 'Gallery image 1'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div
            className="lg:col-span-2 rounded-[2.5rem] bg-white shadow-xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(1)}
          >
            <ImageWithFallback
              src={galleryImages[1]?.src || ''}
              alt={galleryImages[1]?.alt || 'Gallery image 2'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-[2.5rem] bg-white shadow-xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(2)}
          >
            <ImageWithFallback
              src={galleryImages[2]?.src || ''}
              alt={galleryImages[2]?.alt || 'Gallery image 3'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-[2.5rem] bg-white shadow-xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(3)}
          >
            <ImageWithFallback
              src={galleryImages[3]?.src || ''}
              alt={galleryImages[3]?.alt || 'Gallery image 4'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-[2.5rem] bg-white shadow-xl overflow-hidden cursor-pointer group"
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
          <div className="rounded-[2.5rem] bg-white shadow-xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(5)}
          >
            <ImageWithFallback
              src={galleryImages[5]?.src || ''}
              alt={galleryImages[5]?.alt || 'Gallery image 6'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-[2.5rem] bg-rose-100/60 shadow-xl p-10 space-y-6 text-rose-600">
            <p className="uppercase tracking-[0.4em] text-xs text-rose-400">Blooming promise</p>
            <p className="text-sm leading-relaxed">
              Petal-soft focus, glowing botanicals, and delicate whispers of newly exchanged vows.
            </p>
          </div>
          <div className="rounded-[2.5rem] bg-white shadow-xl p-10 flex flex-col items-center justify-center space-y-4 text-rose-500">
            <p className="uppercase tracking-[0.4em] text-xs text-rose-400">Everlasting blossom</p>
            <button
              className="uppercase tracking-[0.4em] text-xs border border-rose-300 rounded-full px-8 py-3 hover:bg-rose-100/80 transition"
              onClick={() => openLightbox(0)}
            >
              View Bloom Story
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