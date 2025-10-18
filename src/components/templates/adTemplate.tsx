import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Lightbox from '../Lightbox';
import { ImageData, getPortfolioImages } from '../../data/imageData';

// The interface for the template props
interface AdTemplateProps { 
  coupleNames: string;
  portfolioId?: number;
  images?: ImageData[];
}

// Reusing the GalleryTile component
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
  // Use aspect ratios for vertical or horizontal images
  const aspectRatio = isVertical ? 'aspect-[2/3]' : 'aspect-[3/2]';

  // CRITICAL: Only render a tile if the image data actually exists (index < 8)
  if (index >= galleryImages.length) {
    // Return null to completely skip rendering this tile, ensuring a clean 8-tile layout
    return null; 
  }

  return (
    <motion.div
      className={`${aspectRatio} ${spanClasses} rounded-3xl overflow-hidden cursor-pointer bg-white shadow-xl transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl`}
      onClick={() => openLightbox(index)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <ImageWithFallback
        src={galleryImages[index]?.src || ''}
        alt={galleryImages[index]?.alt || `Gallery image ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </motion.div>
  );
};

// Main component optimized for 8 images
export default function ad8Template({
  coupleNames,
  portfolioId,
  images = [],
}: AdTemplateProps) {
  const galleryImages =
    images.length > 0
      ? images
      : portfolioId
      ? getPortfolioImages(portfolioId)
      : [];
      
  // Ensure we stop if there are fewer than 8 images to prevent layout issues on mobile
  // Note: For a fixed 8-image layout, it's generally best practice to ensure you have 8 images.
  if (galleryImages.length === 0) {
      return <div>No images found for this portfolio.</div>;
  }

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    if (index < galleryImages.length) {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => setLightboxOpen(false);

  // Navigation loops only through the available images (up to 8)
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  const previousImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );

  // Define the 8 indices needed for the layout
  const tileIndices = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20 space-y-16">
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
            Passion
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto mt-4" />
          <p className="uppercase tracking-[0.4em] text-sm sm:text-base md:text-lg lg:text-xl text-pink-700 mt-2">
            {coupleNames}
          </p>
        </motion.header>

        {/* Spacer */}
        <div className="h-16 lg:h-24" aria-hidden="true" />

        {/* Image Grid - Optimized 8-Tile Layout (Total 8 tiles) */}
        <motion.section
          className="grid grid-cols-2 lg:grid-cols-12 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Row 1: Three Vertical Tiles (Images 0, 1, 2) */}
          {tileIndices.slice(0, 3).map((i) => (
            <GalleryTile
              key={i}
              index={i}
              isVertical={true}
              spanClasses="col-span-1 lg:col-span-4" // 4+4+4 = 12 columns
              galleryImages={galleryImages}
              openLightbox={openLightbox}
            />
          ))}

          {/* Row 2: Two Horizontal Tiles (Images 3, 4) */}
          {tileIndices.slice(3, 5).map((i) => (
            <GalleryTile
              key={i}
              index={i}
              isVertical={false}
              spanClasses="col-span-2 lg:col-span-6" // 6+6 = 12 columns
              galleryImages={galleryImages}
              openLightbox={openLightbox}
            />
          ))}

          {/* Row 3: Three Vertical Tiles (Images 5, 6, 7) */}
          {tileIndices.slice(5, 8).map((i) => (
            <GalleryTile
              key={i}
              index={i}
              isVertical={true}
              spanClasses="col-span-1 lg:col-span-4" // 4+4+4 = 12 columns
              galleryImages={galleryImages}
              openLightbox={openLightbox}
            />
          ))}
          
          {/* Note: No more mapping needed, as indices stop at 7. The GalleryTile 
               component ensures nothing is rendered if galleryImages.length is exceeded. */}
          
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
              Where every moment is a piece of art. 🎨
            </p>
            <div className="flex justify-center items-center space-x-3 uppercase text-sm tracking-[0.4em] text-stone-600">
              <span>Joy ✨</span>
              <span>·</span>
              <span>Elegance 💍</span>
              <span>·</span>
              <span>Story 📖</span>
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