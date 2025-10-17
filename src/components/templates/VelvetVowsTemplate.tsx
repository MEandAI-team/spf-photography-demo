import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface VelvetVowsTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

// GalleryTile with smooth hover effect
const GalleryTile = ({
  index,
  isVertical,
  spanClasses = '',
  galleryImages,
  openLightbox,
}: {
  index: number;
  isVertical: boolean;
  spanClasses?: string;
  galleryImages: ImageData[];
  openLightbox: (index: number) => void;
}) => {
  const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';

  if (index >= galleryImages.length) return null;

  return (
    <div
      className={`${aspectRatio} ${spanClasses} rounded-3xl overflow-hidden cursor-pointer bg-white shadow-lg transform transition duration-300 hover:scale-105 hover:brightness-110`}
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

export default function VelvetVowsTemplate({
  coupleNames,
  portfolioId,
  images = [],
}: VelvetVowsTemplateProps) {
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

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  const previousImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-20 space-y-16">
        <div className="h-20 lg:h-24" aria-hidden="true" />

        {/* Header */}
        <motion.header
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-6xl lg:text-8xl text-black tracking-[0.3em]"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Adrenaline
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto mt-4" />
          <p className="uppercase tracking-[0.4em] text-sm sm:text-base md:text-lg lg:text-xl text-violet-700 mt-2">
            {coupleNames}
          </p>
        </motion.header>

        {/* Spacer to prevent overlap on hover */}
        <div className="h-16 lg:h-24" aria-hidden="true" />

        {/* Image Grid */}
        <motion.section
          className="grid grid-cols-2 lg:grid-cols-12 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[0, 1, 2].map((i) => (
            <GalleryTile
              key={i}
              index={i}
              isVertical={true}
              spanClasses="col-span-1 lg:col-span-4"
              galleryImages={galleryImages}
              openLightbox={openLightbox}
            />
          ))}
          {[3, 4].map((i) => (
            <GalleryTile
              key={i}
              index={i}
              isVertical={false}
              spanClasses="col-span-2 lg:col-span-6"
              galleryImages={galleryImages}
              openLightbox={openLightbox}
            />
          ))}
          {[5, 6, 7, 8, 9].map((i) => (
            <GalleryTile
              key={i}
              index={i}
              isVertical={true}
              spanClasses="col-span-1 lg:col-span-4"
              galleryImages={galleryImages}
              openLightbox={openLightbox}
            />
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
              Where the limit is just the next crest. 🚧
            </p>
            <div className="flex justify-center items-center space-x-3 uppercase text-sm tracking-[0.4em] text-stone-600">
              <span>Grit 💯</span>
              <span>·</span>
              <span>Speed ⚡</span>
              <span>·</span>
              <span>Thrill 🤩</span>
            </div>
            
          </div>
        </motion.section>

        <div className="h-24 lg:h-32" aria-hidden="true" />
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
