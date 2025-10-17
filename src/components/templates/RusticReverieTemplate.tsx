import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface RusticReverieTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function RusticReverieTemplate({ coupleNames, portfolioId, images = [] }: RusticReverieTemplateProps) {
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

  const GalleryTile = ({ index, isVertical, spanClasses = '' }: { index: number, isVertical: boolean, spanClasses?: string }) => {
    const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';
    if (!galleryImages[index]) return null;

    return (
      <div
        className={`${aspectRatio} ${spanClasses} rounded-[2rem] bg-white shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300`}
        onClick={() => openLightbox(index)}
      >
        <ImageWithFallback
          src={galleryImages[index]?.src || ''}
          alt={galleryImages[index]?.alt || `Gallery image ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-100 to-rose-50 text-stone-700">

      {/* Top Spacer */}
      <div className="h-20 lg:h-24" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 lg:px-14 py-20 space-y-16">

        {/* Header */}
        <motion.div
          className="pt-24 pb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-6xl lg:text-8xl text-black tracking-[0.3em]"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Vows
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto mt-4" />
          <p className="uppercase tracking-[0.4em] text-sm sm:text-base md:text-lg lg:text-xl text-violet-700 mt-2">
            {coupleNames}
          </p>
        </motion.div>

        {/* Gallery Layout */}
        <motion.section
          className="grid grid-cols-2 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 1H */}
          <GalleryTile index={0} isVertical={false} spanClasses="col-span-2 lg:col-span-1" />
          <GalleryTile index={1} isVertical={false} spanClasses="col-span-2 lg:col-span-1" />

          {/* 2H */}
          <GalleryTile index={2} isVertical={false} spanClasses="col-span-2 lg:col-span-1" />
          <GalleryTile index={3} isVertical={false} spanClasses="col-span-2 lg:col-span-1" />

          {/* 2H */}
          <GalleryTile index={4} isVertical={false} spanClasses="col-span-2 lg:col-span-1" />
          <GalleryTile index={5} isVertical={false} spanClasses="col-span-2 lg:col-span-1" />

          {/* 2H */}
          <GalleryTile index={6} isVertical={false} spanClasses="col-span-2 lg:col-span-1" />
          <GalleryTile index={7} isVertical={false} spanClasses="col-span-2 lg:col-span-1" />

          {/* 2H */}
          <GalleryTile index={8} isVertical={false} spanClasses="col-span-2 lg:col-span-1" />
          <GalleryTile index={9} isVertical={false} spanClasses="col-span-2 lg:col-span-1" />

          {/* 2H */}
          <GalleryTile index={10} isVertical={false} spanClasses="col-span-2 lg:col-span-1" />
          <GalleryTile index={11} isVertical={false} spanClasses="col-span-2 lg:col-span-1" />
        </motion.section>

        {/* Spacer above footer */}
        <div className="h-32 lg:h-40" aria-hidden="true" />

        {/* Quote Block */}
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-4 mx-auto bg-white/5 rounded-3xl p-10 mt-20 mb-16 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.5em] text-zinc-400">
            <span>Joyful 😄</span>
            <span>•</span>
            <span>Intimate 🤫</span>
            <span>•</span>
            <span>Timeless 🕰️</span>
          </div>
          <p className="text-zinc-300 text-sm max-w-md">
            Every stolen glance, every happy tear—perfectly preserved. 🤍
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
