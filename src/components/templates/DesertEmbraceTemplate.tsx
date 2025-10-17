import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface DesertEmbraceTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function DesertEmbraceTemplate({
  coupleNames,
  portfolioId,
  images = [],
}: DesertEmbraceTemplateProps) {
  const galleryImages =
    images.length > 0 ? images : portfolioId ? getPortfolioImages(portfolioId) : [];

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
  const previousImage = () =>
    setCurrentImageIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length);

  const RenderTile = ({
    index,
    aspect = 'aspect-[2/3]',
    extraClass = '',
  }: {
    index: number;
    aspect?: string;
    extraClass?: string;
  }) => {
    const img = galleryImages[index];
    return (
      <div
        className={`w-full ${aspect} rounded-[2.5rem] bg-white/60 backdrop-blur overflow-hidden cursor-pointer group ${extraClass}`}
        onClick={() => openLightbox(index)}
        aria-hidden={!img}
      >
        {img ? (
          <ImageWithFallback
            src={img.src}
            alt={img.alt || `Gallery image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-white/10" />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fbe9d7] via-[#f9d8b3] to-[#f6cfa1] text-[#5c3d2e] relative overflow-hidden">
      {/* Top spacer */}
      <div className="h-32 md:h-40 lg:h-48" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          className="pt-10 pb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl lg:text-8xl text-black tracking-[0.3em]" style={{ fontFamily: 'Cinzel, serif' }}>
            Iconic
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto mt-4" />
          <p className="uppercase tracking-[0.4em] text-sm sm:text-base md:text-lg lg:text-xl text-violet-700 mt-2">
            {coupleNames}
          </p>
        </motion.div>

        {/* ======================
            IMAGE GROUPS (each group separated for vertical spacing)
            ====================== */}

        {/* Group 1: 2 Vertical images */}
        <div className="w-full py-8 mb-8">
          <motion.div className="grid grid-cols-2 gap-6">
            <RenderTile index={0} aspect="aspect-[2/3]" />
            <RenderTile index={1} aspect="aspect-[2/3]" />
          </motion.div>
        </div>

        {/* Group 2: 2 Vertical images */}
        <div className="w-full py-8 mb-8">
          <motion.div className="grid grid-cols-2 gap-6">
            <RenderTile index={2} aspect="aspect-[2/3]" />
            <RenderTile index={3} aspect="aspect-[2/3]" />
          </motion.div>
        </div>

        {/* Group 3: 1 Horizontal image */}
        <div className="w-full py-8 mb-8">
          <motion.div className="grid grid-cols-1 gap-6">
            <RenderTile index={4} aspect="aspect-[3/2]" />
          </motion.div>
        </div>

        {/* Group 4: 2 Vertical images */}
        <div className="w-full py-8 mb-8">
          <motion.div className="grid grid-cols-2 gap-6">
            <RenderTile index={5} aspect="aspect-[2/3]" />
            <RenderTile index={6} aspect="aspect-[2/3]" />
          </motion.div>
        </div>

        {/* Group 5: 2 Vertical images */}
        <div className="w-full py-8 mb-12">
          <motion.div className="grid grid-cols-2 gap-6">
            <RenderTile index={7} aspect="aspect-[2/3]" />
            <RenderTile index={8} aspect="aspect-[2/3]" />
          </motion.div>
        </div>

        {/* Optional: full-width image for index 9 */}
        {galleryImages[9] && (
          <div className="w-full py-8 mb-12">
            <motion.div className="grid grid-cols-1 gap-6">
              <RenderTile index={9} aspect="aspect-[3/2]" />
            </motion.div>
          </div>
        )}

        {/* Caption block with extra bottom padding for footer spacing */}
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-4 mx-auto bg-white/30 rounded-3xl p-10 mt-6 mb-48 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48 }}
        >
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.5em] text-[#b66a3f]">
            <span>Regal 👸</span>
            <span>•</span>
            <span>Heritage 🪷</span>
            <span>•</span>
            <span>Radiance ✨</span>
          </div>
          <p className="text-[#5c3d2e] text-sm max-w-md">
            “Where the spotlight meets timeless Indian artistry.💎”
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
