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

export default function MonochromeMuseTemplate({
  coupleNames,
  portfolioId,
  images = [],
}: MonochromeMuseTemplateProps) {
  const galleryImages =
    images.length > 0
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

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((p) => (p + 1) % galleryImages.length);
  const previousImage = () => setCurrentImageIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length);

  // GalleryTile with smooth hover like BlissTemplate
  const GalleryTile = ({
    index,
    isVertical,
  }: {
    index: number;
    isVertical: boolean;
  }) => {
    const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';
    return (
      <div className="mb-6">
        <div
          className={`overflow-hidden cursor-pointer group rounded-[2rem] shadow-lg bg-neutral-100 transform transition duration-300 hover:scale-105 hover:brightness-110 ${aspectRatio}`}
          onClick={() => openLightbox(index)}
        >
          <ImageWithFallback
            src={galleryImages[index]?.src || ''}
            alt={galleryImages[index]?.alt || `Gallery image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top Spacer */}
      <div className="h-32 md:h-40 lg:h-48"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-16 space-y-24">
        {/* Header */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 
            className="text-6xl lg:text-8xl text-black tracking-[0.3em]" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Harmony
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto mt-4" />
          <p className="uppercase tracking-[0.4em] text-sm sm:text-base md:text-lg lg:text-xl text-violet-700 mt-2">
            {coupleNames}
          </p>
        </motion.header>

        {/* Image Sections */}
        <div className="space-y-12">
          {/* 1️⃣ 1H */}
          <GalleryTile index={0} isVertical={false} />

          {/* 2️⃣ 2V */}
          <div className="grid grid-cols-2 gap-6">
            <GalleryTile index={1} isVertical={true} />
            <GalleryTile index={2} isVertical={true} />
          </div>

          {/* 3️⃣ 1V */}
          <GalleryTile index={3} isVertical={true} />

          {/* 4️⃣ 2V */}
          <div className="grid grid-cols-2 gap-6">
            <GalleryTile index={4} isVertical={true} />
            <GalleryTile index={5} isVertical={true} />
          </div>

          {/* 5️⃣ 2H */}
          <div className="grid grid-cols-2 gap-6">
            <GalleryTile index={6} isVertical={false} />
            <GalleryTile index={7} isVertical={false} />
          </div>

          {/* 6️⃣ 1H */}
          <GalleryTile index={8} isVertical={false} />

          {/* 7️⃣ 1V */}
          <GalleryTile index={9} isVertical={true} />
        </div>

        {/* Footer Caption */}
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-4 mx-auto bg-white/5 rounded-3xl p-10 mt-10 mb-16 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.5em] text-zinc-400">
            <span>Nature 🌳</span>
            <span>•</span>
            <span>Calm 🍃</span>
            <span>•</span>
            <span>Beauty ❤️</span>
          </div>
          <p className="text-zinc-300 text-sm max-w-md">
            "Where the soul meets the serene embrace of the wild. 🌲"
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
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
