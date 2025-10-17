import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

interface EtherealBloomTemplateProps {
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

export default function EtherealBloomTemplate({
  coupleNames,
  portfolioId,
  images = [],
}: EtherealBloomTemplateProps) {
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
  }: {
    index: number;
    aspect?: string;
  }) => {
    const img = galleryImages[index];
    return (
      <motion.div
        whileHover={{ scale: 1.04, boxShadow: '0 12px 24px rgba(0,0,0,0.2)' }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className={`w-full ${aspect} rounded-[2.5rem] bg-white shadow-md overflow-hidden cursor-pointer`}
        onClick={() => openLightbox(index)}
        aria-hidden={!img}
      >
        {img ? (
          <ImageWithFallback
            src={img.src}
            alt={img.alt || `Gallery image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-white/10" />
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf5] via-[#fdf2ff] to-[#f5faff] text-rose-700 relative overflow-hidden">
      <div className="h-32 md:h-40 lg:h-48" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          className="pt-10 pb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.4em] text-xs text-rose-400">{coupleNames}</p>
          <h1
            className="text-6xl lg:text-8xl text-rose-600 tracking-[0.3em]"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Forever
          </h1>
          <div className="w-24 h-px bg-rose-200 mx-auto mt-4" />
          <p className="uppercase tracking-[0.35em] text-sm text-rose-300 mt-2">
            Samruddri & Rohit
          </p>
        </motion.div>

        {/* ================= IMAGE GROUPS ================= */}
        {/* 1️⃣ 1 Horizontal */}
        <div className="w-full py-8 mb-8">
          <motion.div className="grid grid-cols-1 gap-6">
            <RenderTile index={0} aspect="aspect-[3/2]" />
          </motion.div>
        </div>

        {/* 2️⃣ 2 Vertical */}
        <div className="w-full py-8 mb-8">
          <motion.div className="grid grid-cols-2 gap-8">
            <RenderTile index={1} />
            <RenderTile index={2} />
          </motion.div>
        </div>

        {/* 3️⃣ 1 Horizontal */}
        <div className="w-full py-8 mb-8">
          <motion.div className="grid grid-cols-1 gap-6">
            <RenderTile index={3} aspect="aspect-[3/2]" />
          </motion.div>
        </div>

        {/* 4️⃣ 2 Horizontal */}
        <div className="w-full py-8 mb-8">
          <motion.div className="grid grid-cols-2 gap-8">
            <RenderTile index={4} aspect="aspect-[3/2]" />
            <RenderTile index={5} aspect="aspect-[3/2]" />
          </motion.div>
        </div>

        {/* 5️⃣ 2 Vertical */}
        <div className="w-full py-8 mb-8">
          <motion.div className="grid grid-cols-2 gap-8">
            <RenderTile index={6} />
            <RenderTile index={7} />
          </motion.div>
        </div>

        {/* 6️⃣ 1 Vertical */}
        <div className="w-full py-8 mb-8">
          <motion.div className="grid grid-cols-1 gap-6">
            <RenderTile index={8} />
          </motion.div>
        </div>

        {/* 7️⃣ 2 Vertical */}
        <div className="w-full py-8 mb-20">
          <motion.div className="grid grid-cols-2 gap-8">
            <RenderTile index={9} />
            <RenderTile index={10} />
          </motion.div>
        </div>

        {/* Footer caption block */}
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-4 mx-auto bg-white/40 rounded-3xl px-10 py-16 mt-20 mb-60 max-w-lg backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48 }}
        >
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.5em] text-rose-400">
            <span>Grace 🌸</span>
            <span>•</span>
            <span>Elegance 🌷</span>
            <span>•</span>
            <span>Bloom 🌼</span>
          </div>
          <p className="text-rose-600 text-sm max-w-md">
            “Where love blossoms in ethereal hues of forever. 💖”
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
