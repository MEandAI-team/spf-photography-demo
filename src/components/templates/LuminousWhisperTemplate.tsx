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

export default function LuminousWhisperTemplate({
  coupleNames,
  portfolioId,
  images = [],
}: LuminousWhisperTemplateProps) {
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
  const nextImage = () => setCurrentImageIndex((p) => (p + 1) % galleryImages.length);
  const previousImage = () => setCurrentImageIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length);

  // GalleryTile with smooth hover effect
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
          className={`overflow-hidden cursor-pointer group rounded-[2rem] shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:brightness-110 ${aspectRatio}`}
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
    <div className="min-h-screen bg-gradient-to-b from-[#f9f6ff] via-[#f3ebff] to-[#efe7ff]">
      {/* Top spacer */}
      <div className="h-32 md:h-40 lg:h-48" />

      <div className="max-w-6xl mx-auto px-6 lg:px-16 space-y-24">
        {/* Header */}
        <motion.header
          className="text-center mb-32" // <-- increased bottom margin for spacing
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-6xl lg:text-8xl text-rose-600 tracking-[0.3em]"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Luminous
          </h1>
          {/* Decorative lines */}
          <div className="w-24 h-px bg-gray-300 mx-auto mt-4" />
          <div className="w-24 h-px bg-rose-200 mx-auto mt-4" />
          <p className="uppercase tracking-[0.4em] text-sm sm:text-base md:text-lg lg:text-xl text-violet-700 mt-2">{coupleNames}</p>
        </motion.header>


        {/* Empty spacer div */}
        <div className="h-16"></div> {/* <-- adds space between header and images */}

        {/* Image Sections */}
        <div className="space-y-12">
          {/* 1H */}
          <GalleryTile index={0} isVertical={false} />

          {/* 2H */}
          <div className="grid grid-cols-2 gap-6">
            <GalleryTile index={1} isVertical={false} />
            <GalleryTile index={2} isVertical={false} />
          </div>

          {/* 2V */}
          <div className="grid grid-cols-2 gap-6">
            <GalleryTile index={3} isVertical={true} />
            <GalleryTile index={4} isVertical={true} />
          </div>

          {/* 2H */}
          <div className="grid grid-cols-2 gap-6">
            <GalleryTile index={5} isVertical={false} />
            <GalleryTile index={6} isVertical={false} />
          </div>

          {/* 2H */}
          <div className="grid grid-cols-2 gap-6">
            <GalleryTile index={7} isVertical={false} />
            <GalleryTile index={8} isVertical={false} />
          </div>

          {/* 1V */}
          <GalleryTile index={9} isVertical={true} />

          {/* 2H */}
          <div className="grid grid-cols-2 gap-6">
            <GalleryTile index={10} isVertical={false} />
            <GalleryTile index={11} isVertical={false} />
          </div>
        </div>

        {/* Footer Caption */}
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-4 mx-auto bg-white/5 rounded-3xl p-10 mt-10 mb-16 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.5em] text-zinc-400">
            <span>Love ❤️</span>
            <span>•</span>
            <span>Laughter 😄</span>
            <span>•</span>
            <span>Legacy 🌿</span>
          </div>
          <p className="text-zinc-300 text-sm max-w-md">
            Where forever begins 💍 in a single frame 📸.
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
