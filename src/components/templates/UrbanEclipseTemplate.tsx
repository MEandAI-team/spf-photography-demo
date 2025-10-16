import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface UrbanEclipseTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

// Helper component for image tiles
const GalleryTile = ({ index, isVertical, spanClasses = '', galleryImages, openLightbox }: { index: number, isVertical: boolean, spanClasses?: string, galleryImages: ImageData[], openLightbox: (index: number) => void }) => {
    const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';
    
    if (index >= galleryImages.length) return null;

    return (
      <div
        className={`${aspectRatio} ${spanClasses} rounded-[2rem] bg-white shadow-lg overflow-hidden cursor-pointer group`}
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

export default function UrbanEclipseTemplate({ coupleNames, portfolioId, images = [] }: UrbanEclipseTemplateProps) {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-neutral-100 to-white text-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 pt-20 pb-20 space-y-16">
        <div className="h-20 lg:h-24" aria-hidden="true" />

        <motion.header
          className="flex flex-col items-center justify-center gap-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center w-full">
            <p className="uppercase tracking-[0.5em] text-xs text-neutral-600">.</p>
            <h1 className="text-5xl lg:text-6xl tracking-[0.3em] text-neutral-800" style={{ fontFamily: 'Cinzel, serif' }}>
              {coupleNames}
            </h1>
          </div>
        </motion.header>

        {/* Image Grid */}
        <motion.section
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 2V, 2V, 2L, 2V, 2V Structure */}
          {[0,1,2,3,6,7,8,9].map(i => (
            <GalleryTile key={i} index={i} isVertical={true} spanClasses="col-span-1 lg:col-span-2" galleryImages={galleryImages} openLightbox={openLightbox} />
          ))}
          {[4,5].map(i => (
            <GalleryTile key={i} index={i} isVertical={false} spanClasses="col-span-2 lg:col-span-4" galleryImages={galleryImages} openLightbox={openLightbox} />
          ))}
        </motion.section>

        {/* Caption Section */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="lg:col-span-3 text-center space-y-2">
            <p className="text-lg tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
              Where heritage meets grace in every fold and glance. ✨
            </p>
            <div className="flex justify-center items-center space-x-3 uppercase text-sm tracking-[0.4em] text-stone-600">
              <span>Tradition 🪷</span>
              <span>·</span>
              <span>Elegance 💖</span>
              <span>·</span>
              <span>Heritage 👑</span>
            </div>
            <p className="text-2xl font-semibold tracking-wide mt-2">Legacy 🌟</p>
          </div>
        </motion.section>

        <div className="h-24 lg:h-32" aria-hidden="true" />
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
