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

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const GalleryTile = ({ index, isVertical, spanClasses = '' }: { index: number, isVertical: boolean, spanClasses?: string }) => {
    const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';
    if (!galleryImages[index]) return null;

    return (
      <div
        className={`${aspectRatio} ${spanClasses} rounded-[2rem] bg-white shadow-xl overflow-hidden cursor-pointer group`}
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

  const landscapeIndices = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-100 to-rose-50 text-stone-700">

      {/* Top Spacer */}
      <div className="h-20 lg:h-24" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 lg:px-14 py-20 space-y-16">

        {/* Header */}
        <motion.header
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="uppercase tracking-[0.45em] text-xs text-amber-500">.</p>
            <h1 className="text-5xl lg:text-6xl tracking-[0.3em]" style={{ fontFamily: 'Cinzel, serif' }}>
              {coupleNames}
            </h1>
          </div>
        </motion.header>

        {/* Image Grid */}
        <motion.section
          className="grid grid-cols-2 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Vertical Image */}
          <GalleryTile index={0} isVertical={true} spanClasses="col-span-2 lg:col-span-2 lg:col-start-3" />
          
          {/* Landscape Images */}
          {landscapeIndices.map((index) => (
            <GalleryTile key={index} index={index} isVertical={false} spanClasses="col-span-2 lg:col-span-3" />
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
              Every stolen glance, every happy tear—perfectly preserved. 🤍
            </p>
            <div className="flex justify-center items-center space-x-3 uppercase text-sm tracking-[0.4em] text-stone-600">
              <span>Joyful 😄</span>
              <span>·</span>
              <span>Intimate 🤫</span>
              <span>·</span>
              <span>Timeless 🕰️</span>
            </div>
            <p className="text-2xl font-semibold tracking-wide mt-2">Vows 🙏</p>
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
