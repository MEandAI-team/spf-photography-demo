import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getRandomImages } from '../../data/imageData';

interface YouTemplateProps {
  coupleNames: string;
  images?: ImageData[];
}

export default function YouTemplate({ coupleNames, images = [] }: YouTemplateProps) {
  // Use provided images or get random ones from data
  const galleryImages = images.length > 0 ? images : getRandomImages(6);
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
    <div className="min-h-screen bg-white">
      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Header - YOU Text */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-6xl lg:text-8xl text-gray-800 tracking-[0.1em]" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            YOU
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto mt-4" />
        </motion.div>

        {/* Photo Grid */}
        <motion.div 
          className="grid grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* First Row */}
          <div 
            className="aspect-square bg-gray-100 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
            onClick={() => openLightbox(0)}
          >
            <ImageWithFallback
              src={galleryImages[0]?.src || ''}
              alt={galleryImages[0]?.alt || 'Gallery image 1'}
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
          </div>
          <div 
            className="aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
            onClick={() => openLightbox(1)}
          >
            <ImageWithFallback
              src={galleryImages[1]?.src || ''}
              alt={galleryImages[1]?.alt || 'Gallery image 2'}
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
          </div>
          <div 
            className="aspect-square bg-gray-100 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
            onClick={() => openLightbox(2)}
          >
            <ImageWithFallback
              src={galleryImages[2]?.src || ''}
              alt={galleryImages[2]?.alt || 'Gallery image 3'}
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
          </div>

          {/* Second Row */}
          <div 
            className="aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
            onClick={() => openLightbox(3)}
          >
            <ImageWithFallback
              src={galleryImages[3]?.src || ''}
              alt={galleryImages[3]?.alt || 'Gallery image 4'}
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
          </div>
          <div 
            className="aspect-square bg-gray-100 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
            onClick={() => openLightbox(4)}
          >
            <ImageWithFallback
              src={galleryImages[4]?.src || ''}
              alt={galleryImages[4]?.alt || 'Gallery image 5'}
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
          </div>
          <div 
            className="aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
            onClick={() => openLightbox(5)}
          >
            <ImageWithFallback
              src={galleryImages[5]?.src || ''}
              alt={galleryImages[5]?.alt || 'Gallery image 6'}
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
          </div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
          <svg className="w-8 h-8 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-600 tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
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