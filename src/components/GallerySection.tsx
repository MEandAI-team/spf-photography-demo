import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import PhotoGalleryModal from './PhotoGalleryModal';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1727374703451-c0a912a31ae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NTU0NTc2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Outdoor Wedding Couple',
    category: 'Wedding'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1738669469338-801b4e9dbccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1NDU3NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Wedding Reception',
    category: 'Reception'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1622580627463-b03d48e305d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1NDEzNjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Bride and Groom Portrait',
    category: 'Portrait'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1696238173596-554e92268051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBjaHVyY2h8ZW58MXx8fHwxNzU1MzY2NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Church Wedding Ceremony',
    category: 'Ceremony'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1730116309939-10a01fdf1edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb3VwbGV8ZW58MXx8fHwxNzU1MzI0NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Wedding Photography Couple',
    category: 'Photography'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1742980772407-683eda14c08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmUlMjB3ZWRkaW5nJTIwcGhvdG9zaG9vdHxlbnwxfHx8fDE3NTUzNjYwODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Pre-Wedding Photoshoot',
    category: 'Pre-Wedding'
  }
];

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageClick = (image: GalleryImage) => {
    setIsGalleryOpen(true);
  };

  const selectedImage = galleryImages[selectedImageIndex];

  return (
    <motion.section 
      className="w-full min-h-screen bg-primary py-16 lg:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground mb-4 lg:mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Our Portfolio
          </h2>
          <p className="text-base lg:text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Explore our collection of memorable moments captured with passion and precision. 
            Each image tells a unique story of love, joy, and celebration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8 items-center min-h-[500px] lg:min-h-[600px]">
          {/* Thumbnail Gallery */}
          <motion.div 
            className="lg:col-span-1 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-4">
              {galleryImages.map((image, index) => (
                <motion.button
                  key={image.id}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                    index === selectedImageIndex 
                      ? 'ring-4 ring-accent scale-105' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  whileHover={{ scale: index === selectedImageIndex ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                  
                  {/* Category label */}
                  <div className="absolute bottom-1 lg:bottom-2 left-1 lg:left-2">
                    <span className="text-xs text-primary-foreground bg-primary/50 px-1 lg:px-2 py-1 rounded">
                      {image.category}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Main Image Display */}
          <motion.div 
            className="lg:col-span-3 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div 
                className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                onClick={() => handleImageClick(selectedImage)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Image overlay with info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-4 lg:p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-lg lg:text-2xl text-primary-foreground mb-1 lg:mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                        {selectedImage.alt}
                      </h3>
                      <span className="text-primary-foreground/80 bg-accent/20 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm">
                        {selectedImage.category}
                      </span>
                    </div>
                    <div className="text-primary-foreground/70 text-xs lg:text-sm">
                      {selectedImageIndex + 1} / {galleryImages.length}
                    </div>
                  </div>
                </div>

                {/* Click to view indicator */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-primary-foreground bg-primary/50 px-2 py-1 rounded">
                    Click to view gallery
                  </span>
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <motion.button
                onClick={goToPrevious}
                className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-accent/20 backdrop-blur-sm hover:bg-accent/30 text-primary-foreground p-2 lg:p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-4 lg:w-6 h-4 lg:h-6" />
              </motion.button>

              <motion.button
                onClick={goToNext}
                className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-accent/20 backdrop-blur-sm hover:bg-accent/30 text-primary-foreground p-2 lg:p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Next image"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-4 lg:w-6 h-4 lg:h-6" />
              </motion.button>
            </div>

            {/* Gallery Info */}
            <motion.div 
              className="mt-6 lg:mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl lg:text-2xl text-primary-foreground mb-3 lg:mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                Professional Wedding Photography
              </h3>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-4 lg:mb-6 text-sm lg:text-base">
                From intimate moments to grand celebrations, we capture every detail that makes your special day unique. 
                Our portfolio showcases the diversity and artistry that defines our work.
              </p>
              <motion.button 
                className="bg-accent text-accent-foreground px-6 lg:px-8 py-2 lg:py-3 rounded-lg hover:bg-accent/90 transition-colors duration-200 text-sm lg:text-base"
                onClick={() => handleImageClick(selectedImage)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Full Gallery
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <PhotoGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialPhoto={{
          src: selectedImage.src,
          alt: selectedImage.alt,
          category: selectedImage.category
        }}
      />
    </motion.section>
  );
}