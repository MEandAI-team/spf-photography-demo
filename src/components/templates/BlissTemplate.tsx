import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getRandomImages } from '../../data/imageData';

interface BlissTemplateProps {
  coupleNames: string;
  images?: ImageData[];
}

export default function BlissTemplate({ coupleNames, images = [] }: BlissTemplateProps) {
  // Use provided images or get random ones from data
  const galleryImages = images.length > 0 ? images : getRandomImages(5);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
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
    <div className="min-h-screen bg-gray-600 relative overflow-hidden">
      {/* Large Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gray-400 flex items-center justify-center">
          <span className="text-gray-600">Background Image Placeholder</span>
        </div>
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header - BLISS Text */}
        <motion.div 
          className="pt-24 pb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-6xl lg:text-8xl text-white tracking-[0.3em]" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            BLISS
          </h1>
        </motion.div>

        {/* Main Photo Grid */}
        <div className="flex-1 flex items-center justify-center px-8">
          <motion.div 
            className="grid grid-cols-3 gap-4 max-w-4xl w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Top Row - 3 images */}
            <div 
              className="aspect-[4/3] bg-white/90 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(0)}
            >
              <ImageWithFallback
                src={galleryImages[0]?.src || ''}
                alt="Gallery image 1"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <div 
              className="aspect-[3/4] bg-white/90 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(1)}
            >
              <ImageWithFallback
                src={galleryImages[1]?.src || ''}
                alt="Gallery image 2"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <div 
              className="aspect-[4/3] bg-white/90 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(2)}
            >
              <ImageWithFallback
                src={galleryImages[2]?.src || ''}
                alt="Gallery image 3"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>

            {/* Middle Row - EUPHORIC Text and Image */}
            <div className="col-span-2 flex items-center justify-center bg-white/10 backdrop-blur-sm">
              <h2 
                className="text-4xl lg:text-6xl text-white tracking-[0.2em]" 
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                EUPHORIC
              </h2>
            </div>
            <div 
              className="aspect-square bg-white/90 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(3)}
            >
              <ImageWithFallback
                src={galleryImages[3]?.src || ''}
                alt="Gallery image 4"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>

            {/* Bottom Row - 1 centered image */}
            <div 
              className="col-start-2 aspect-[4/3] bg-white/90 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(4)}
            >
              <ImageWithFallback
                src={galleryImages[4]?.src || ''}
                alt="Gallery image 5"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          className="pb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white text-lg tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
            {coupleNames}
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