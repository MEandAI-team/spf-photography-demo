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

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Helper component for image tiles
  const GalleryTile = ({ index, isVertical, spanClasses = '' }: { index: number, isVertical: boolean, spanClasses?: string }) => {
    const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';
    
    if (!galleryImages[index]) return null;

    return (
      <div
        className={`${aspectRatio} ${spanClasses} rounded-[2rem] bg-white/70 backdrop-blur-sm overflow-hidden cursor-pointer group`}
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100">

      {/* Top Spacer */}
      <div className="h-32 lg:h-40" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-20">

        {/* Header */}
        <motion.header
          className="flex flex-col items-center text-center gap-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.5em] text-xs text-sky-500">{coupleNames}</p>
          <h1 className="text-5xl lg:text-6xl tracking-[0.3em] text-sky-900" style={{ fontFamily: 'Cinzel, serif' }}>
            {coupleNames}
          </h1>
        </motion.header>

        {/* Portfolio Grid */}
        <motion.section
          className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 3 Vertical Images */}
          <GalleryTile index={0} isVertical={true} spanClasses="col-span-1 lg:col-span-4" /> 
          <GalleryTile index={1} isVertical={true} spanClasses="col-span-1 lg:col-span-4" />
          <GalleryTile index={2} isVertical={true} spanClasses="col-span-2 lg:col-span-4" />

          {/* 2 Landscape Images */}
          <GalleryTile index={3} isVertical={false} spanClasses="col-span-2 lg:col-span-6" /> 
          <GalleryTile index={4} isVertical={false} spanClasses="col-span-2 lg:col-span-6" /> 

          {/* 2 Landscape Images */}
          <GalleryTile index={5} isVertical={false} spanClasses="col-span-2 lg:col-span-6" /> 
          <GalleryTile index={6} isVertical={false} spanClasses="col-span-2 lg:col-span-6" /> 

          {/* 3 Vertical Images */}
          <GalleryTile index={7} isVertical={true} spanClasses="col-span-2 lg:col-span-4" /> 
          <GalleryTile index={8} isVertical={true} spanClasses="col-span-1 lg:col-span-4" />
          <GalleryTile index={9} isVertical={true} spanClasses="col-span-1 lg:col-span-4" />
        </motion.section>

        {/* Caption */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="lg:col-span-3 text-center text-sky-800 space-y-2">
            <p className="text-lg tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
              Finding our forever in every stolen glance and shared smile. 😊
            </p>
            <div className="flex justify-center items-center space-x-3 uppercase text-sm tracking-[0.4em] text-sky-700">
              <span>Romance 💕</span>
              <span>·</span>
              <span>Anticipation 🥂</span>
              <span>·</span>
              <span>Future 🏡</span>
            </div>
            <p className="text-2xl font-semibold tracking-wide mt-2">Together 🫂</p>
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
