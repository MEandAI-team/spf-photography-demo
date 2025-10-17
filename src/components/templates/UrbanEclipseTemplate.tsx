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

export default function UrbanEclipseTemplate({ coupleNames, portfolioId, images = [] }: UrbanEclipseTemplateProps) {
  const galleryImages = (images.length > 0
    ? images
    : portfolioId
      ? getPortfolioImages(portfolioId)
      : []
  ).slice(0, 11); // Use only first 11 images

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

  // GalleryTile with smooth hover
  const GalleryTile = ({ index, aspectRatio, spanClasses = '' }: { index: number, aspectRatio: string, spanClasses?: string }) => (
    <div
      className={`${aspectRatio} ${spanClasses} group overflow-hidden rounded-[2rem] cursor-pointer bg-white shadow-lg transform transition duration-300 hover:scale-105 hover:brightness-110`}
      onClick={() => openLightbox(index)}
    >
      <ImageWithFallback
        src={galleryImages[index]?.src || ''}
        alt={galleryImages[index]?.alt || `Gallery image ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-neutral-100 to-white text-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 pt-20 pb-20 space-y-16">
        {/* Header */}
        <motion.header
          className="flex flex-col items-center justify-center gap-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 
            className="text-6xl lg:text-8xl text-black tracking-[0.3em]" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Legacy
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto mt-4" />
          <p className="uppercase tracking-[0.4em] text-sm sm:text-base md:text-lg lg:text-xl text-violet-700 mt-2">
            {coupleNames}
          </p>
        </motion.header>

        {/* Spacer to separate header and image grid */}
        <div className="h-16 lg:h-24" aria-hidden="true" />

        {/* Image Grid Rows - Only first 11 images */}
        <div className="space-y-6">
          {/* Row 1: 1L */}
          <div className="grid grid-cols-1 gap-6">
            <GalleryTile index={0} aspectRatio="aspect-[3/2]" />
          </div>

          {/* Row 2: 2L */}
          <div className="grid grid-cols-2 gap-6">
            <GalleryTile index={1} aspectRatio="aspect-[3/2]" />
            <GalleryTile index={2} aspectRatio="aspect-[3/2]" />
          </div>

          {/* Rows 3-7: 2V per row */}
          {[[3, 4], [5, 6], [7, 8], [9, 10]].map((pair, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-6">
              {pair.map((i) => galleryImages[i] && <GalleryTile key={i} index={i} aspectRatio="aspect-[2/3]" />)}
            </div>
          ))}
        </div>

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
          </div>
        </motion.section>
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
