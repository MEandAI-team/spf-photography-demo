import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface OceanicOathTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function OceanicOathTemplate({ coupleNames, portfolioId, images = [] }: OceanicOathTemplateProps) {
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

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  const previousImage = () => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  // GalleryTile with smooth hover like BlissTemplate
  const GalleryTile = ({ index, isVertical }: { index: number; isVertical: boolean }) => {
    const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';
    if (!galleryImages[index]) return null;

    return (
      <div className="mb-6">
        <div
          className={`overflow-hidden cursor-pointer group rounded-[2rem] shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:brightness-110 ${aspectRatio}`}
          onClick={() => openLightbox(index)}
        >
          <ImageWithFallback
            src={galleryImages[index]?.src || ''}
            alt={galleryImages[index]?.alt || `Gallery image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100">

      {/* Top Spacer */}
      <div className="h-32 lg:h-40" />

      <div className="max-w-6xl mx-auto px-6 lg:px-16 space-y-16">

        {/* Header */}
        <motion.header
          className="flex flex-col items-center text-center gap-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 
            className="text-6xl lg:text-8xl text-black tracking-[0.3em]" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Together
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto mt-4" />
          <p className="uppercase tracking-[0.4em] text-sm sm:text-base md:text-lg lg:text-xl text-violet-700 mt-2">
            {coupleNames}
          </p>
        </motion.header>

        {/* Image Grid: 2H - 2H - 2V - 2V - 1H - 1V */}
        <div className="space-y-12">

          {/* 1️⃣ 2H */}
          <div className="grid grid-cols-2 gap-6">
            <GalleryTile index={0} isVertical={false} />
            <GalleryTile index={1} isVertical={false} />
          </div>

          {/* 2️⃣ 2H */}
          <div className="grid grid-cols-2 gap-6">
            <GalleryTile index={2} isVertical={false} />
            <GalleryTile index={3} isVertical={false} />
          </div>

          {/* 3️⃣ 2V */}
          <div className="grid grid-cols-2 gap-6">
            <GalleryTile index={4} isVertical={true} />
            <GalleryTile index={5} isVertical={true} />
          </div>

          {/* 4️⃣ 2V */}
          <div className="grid grid-cols-2 gap-6">
            <GalleryTile index={6} isVertical={true} />
            <GalleryTile index={7} isVertical={true} />
          </div>

          {/* 5️⃣ 1H */}
          <GalleryTile index={8} isVertical={false} />

          {/* 6️⃣ 1V */}
          <GalleryTile index={9} isVertical={true} />

        </div>

        {/* Footer Caption */}
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-4 mx-auto bg-white/5 rounded-3xl p-10 mt-10 mb-16 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.5em] text-sky-400">
            <span>Romance 💕</span>
            <span>•</span>
            <span>Anticipation 🥂</span>
            <span>•</span>
            <span>Future 🏡</span>
          </div>
          <p className="text-sky-700 text-sm max-w-md">
            Finding our forever in every stolen glance and shared smile. 😊
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
