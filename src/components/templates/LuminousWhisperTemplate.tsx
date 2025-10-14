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
    <div className="min-h-screen bg-[#f6f0ff]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-20 space-y-16">
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="uppercase tracking-[0.5em] text-xs text-purple-400">{coupleNames}</p>
            <h1
              className="text-5xl lg:text-6xl text-purple-700 tracking-[0.3em] mt-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              LUMINOUS WHISPER
            </h1>
          </div>
          <div className="w-32 h-px bg-purple-200" />
        </motion.div>

        <motion.div
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
          <div className="lg:col-span-2 rounded-[2.5rem] bg-white shadow-xl p-8 space-y-4 text-purple-700">
            <p className="uppercase tracking-[0.4em] text-xs text-purple-300">softly spoken</p>
            <p className="text-sm leading-relaxed text-purple-500">
              A gallery woven with gentle light, whispered promises, and the radiant glow of beginnings.
            </p>
          </div>
          <div
            className="rounded-[2.5rem] bg-white shadow-xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(2)}
          >
            <ImageWithFallback
              src={galleryImages[2]?.src || ''}
              alt={galleryImages[2]?.alt || 'Gallery image 3'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div
            className="rounded-[2.5rem] bg-white shadow-xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(3)}
          >
            <ImageWithFallback
              src={galleryImages[3]?.src || ''}
              alt={galleryImages[3]?.alt || 'Gallery image 4'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div
            className="rounded-[2.5rem] bg-white shadow-xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(4)}
          >
            <ImageWithFallback
              src={galleryImages[4]?.src || ''}
              alt={galleryImages[4]?.alt || 'Gallery image 5'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex-1 lg:text-left text-center">
            <p className="uppercase tracking-[0.5em] text-xs text-purple-300">Storyline</p>
            <p className="text-purple-500 text-sm max-w-xl mx-auto lg:mx-0">
              Illuminated by lilac dusk, this sequence celebrates tender exchanges and the quiet harmony shared between two hearts.
            </p>
          </div>
          <button
            className="uppercase tracking-[0.4em] text-xs text-purple-600 border border-purple-300 rounded-full px-8 py-3 hover:bg-purple-100 transition"
            onClick={() => openLightbox(0)}
          >
            View Collection
          </button>
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