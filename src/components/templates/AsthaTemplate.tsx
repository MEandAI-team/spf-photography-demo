import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getRandomImages } from '../../data/imageData';

interface AsthaTemplateProps {
  coupleNames: string;
  images?: ImageData[];
}

export default function AsthaTemplate({ coupleNames, images = [] }: AsthaTemplateProps) {
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
    <div className="min-h-screen bg-gray-900 relative">
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between py-16">
        {/* Main Photo Strips */}
        <div className="flex-1 flex items-center justify-center px-8">
          <motion.div 
            className="flex space-x-4 max-w-6xl w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Strip 1 - Wide */}
            <div 
              className="flex-1 h-[600px] bg-gray-700 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(0)}
            >
              <ImageWithFallback
                src={galleryImages[0]?.src || ''}
                alt="Gallery image 1"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>

            {/* Strip 2 - Narrow */}
            <div 
              className="w-32 h-[600px] bg-gray-700 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(1)}
            >
              <ImageWithFallback
                src={typeof galleryImages[1] === 'string' ? galleryImages[1] : galleryImages[1].src}
                alt="Gallery image 2"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>

            {/* Strip 3 - Medium */}
            <div 
              className="w-48 h-[600px] bg-gray-700 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(2)}
            >
              <ImageWithFallback
                src={typeof galleryImages[2] === 'string' ? galleryImages[2] : galleryImages[2].src}
                alt="Gallery image 3"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>

            {/* Strip 4 - Narrow */}
            <div 
              className="w-32 h-[600px] bg-gray-700 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(3)}
            >
              <ImageWithFallback
                src={typeof galleryImages[3] === 'string' ? galleryImages[3] : galleryImages[3].src}
                alt="Gallery image 4"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>

            {/* Strip 5 - Wide */}
            <div 
              className="flex-1 h-[600px] bg-gray-700 overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(4)}
            >
              <ImageWithFallback
                src={typeof galleryImages[4] === 'string' ? galleryImages[4] : galleryImages[4].src}
                alt="Gallery image 5"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* Footer - ASTHA Text */}
        <motion.div 
          className="text-center pb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h1 
            className="text-6xl lg:text-8xl text-white tracking-[0.3em] mb-4" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            ASTHA
          </h1>
          <p className="text-gray-400 text-sm tracking-wider">
            {coupleNames}
          </p>
          <p className="text-gray-500 text-xs mt-2 tracking-wider">
            The bride who stole the show and our hearts
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