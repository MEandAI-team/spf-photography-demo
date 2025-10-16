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

export default function LuminousWhisperTemplate({ coupleNames, portfolioId, images = [] }: LuminousWhisperTemplateProps) {
  const galleryImages = images.length > 0
    ? images
    : portfolioId
      ? getPortfolioImages(portfolioId)
      : [];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    // Only proceed if the index is valid for the number of images provided
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
  
  // Helper component for repeating image tiles with the requested styles
  // Added customClasses prop for individual styling control
  const GalleryTile = ({ index, isVertical, spanClasses = '', customClasses = '' }: { index: number, isVertical: boolean, spanClasses?: string, customClasses?: string }) => {
    const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';
    
    // Applying shadow and hover effect for the "cool look"
    return (
      <div
        className={`bg-white shadow-2xl rounded-xl overflow-hidden cursor-pointer group transition-transform duration-500 hover:scale-[1.01] ${aspectRatio} ${spanClasses} ${customClasses}`}
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


  // --- Grid Index Mapping for 12 images (2V, 10L) ---
  // Added customClasses property to each item for maximum flexibility
  // V: 0, 5
  // L: 1, 2, 3, 4, 6, 7, 8, 9, 10, 11
  const gridLayout = [
    // Row 1 & 2: V(0) anchors the left side
    { index: 0, isVertical: true, spanClasses: "lg:col-span-1 lg:row-span-2", customClasses: "" }, // V (Anchor 1)
    { index: 1, isVertical: false, spanClasses: "lg:col-span-3", customClasses: "" },             // L
    // Row 2 continuation
    { index: 2, isVertical: false, spanClasses: "lg:col-span-2", customClasses: "" },             // L
    { index: 3, isVertical: false, spanClasses: "lg:col-span-1", customClasses: "" },             // L
    
    // Row 3 & 4: V(5) anchors the middle
    { index: 4, isVertical: false, spanClasses: "lg:col-span-2", customClasses: "" },             // L
    { index: 5, isVertical: true, spanClasses: "lg:col-span-1 lg:row-span-2", customClasses: "" },  // V (Anchor 2)
    { index: 6, isVertical: false, spanClasses: "lg:col-span-1", customClasses: "" },             // L
    
    // Row 4 continuation
    { index: 7, isVertical: false, spanClasses: "lg:col-span-1", customClasses: "" },             // L
    { index: 8, isVertical: false, spanClasses: "lg:col-span-2", customClasses: "" },             // L
    
    // Row 5: Large, final strips
    { index: 9, isVertical: false, spanClasses: "lg:col-span-2", customClasses: "" },             // L
    { index: 10, isVertical: false, spanClasses: "lg:col-span-1", customClasses: "" },            // L
    { index: 11, isVertical: false, spanClasses: "lg:col-span-1", customClasses: "" },            // L
  ];


  return (
    <div className="min-h-screen bg-[#f6f0ff]">
      {/* Increased padding to pt-[30rem] for maximum guaranteed clearance from the navigation bar */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 pt-[30rem] pb-20 space-y-16">
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            {/* Applied minimal gray text styling for secondary text */}
            <p className="uppercase tracking-[0.1em] text-xs text-gray-500">{coupleNames}</p>
            <h1
              // Applied sizing and color from YouTemplate (text-gray-800)
              className="text-6xl lg:text-8xl text-gray-800 tracking-[0.1em] mt-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
             
            </h1>
          </div>
          <div>
            {/* Applied minimal gray text styling for secondary text */}
            <p className="uppercase tracking-[0.1em] text-xs text-gray-500">{coupleNames}</p>
            <h1
              // Applied sizing and color from YouTemplate (text-gray-800)
              className="text-6xl lg:text-8xl text-gray-800 tracking-[0.1em] mt-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
             Pre-Wedding
            </h1>
          </div>
          {/* Adjusted divider color for better contrast with new text color */}
          <div className="w-32 h-px bg-gray-400" />
        </motion.div>

        {/* --- REDESIGNED PORTFOLIO GRID (10L, 2V) --- */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {gridLayout.map((item) => (
            <GalleryTile 
              key={item.index}
              index={item.index}
              isVertical={item.isVertical}
              spanClasses={item.spanClasses}
              customClasses={item.customClasses} // Passed the custom classes here
            />
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Footer content block can go here if needed */}
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
