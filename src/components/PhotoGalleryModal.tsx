import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Download, Share2, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PhotoGallery {
  id: string;
  title: string;
  category: string;
  description: string;
  images: {
    id: string;
    src: string;
    alt: string;
    description?: string;
  }[];
}

// Unique gallery collections for each photo type
const galleryCollections: PhotoGallery[] = [
  {
    id: 'wedding-outdoor',
    title: 'Garden Romance Wedding',
    category: 'Wedding',
    description: 'A magical outdoor wedding celebration in a beautiful garden setting with intimate moments and joyful celebrations.',
    images: [
      {
        id: '1',
        src: 'https://images.unsplash.com/photo-1727374703451-c0a912a31ae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NTU0NTc2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Couple walking in garden',
        description: 'The bride and groom sharing a peaceful moment in the garden'
      },
      {
        id: '2',
        src: 'https://images.unsplash.com/photo-1627364155535-9ed50e63aece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc1NTQ1OTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Wedding ceremony setup',
        description: 'Beautiful outdoor ceremony decoration with floral arrangements'
      },
      {
        id: '3',
        src: 'https://images.unsplash.com/photo-1730116309939-10a01fdf1edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb3VwbGV8ZW58MXx8fHwxNzU1MzI0NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Couple portrait',
        description: 'Romantic couple portrait in natural lighting'
      },
      {
        id: '4',
        src: 'https://images.unsplash.com/photo-1696238173596-554e92268051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBjaHVyY2h8ZW58MXx8fHwxNzU1MzY2NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Wedding aisle',
        description: 'The beautiful wedding aisle decorated with flowers'
      },
      {
        id: '5',
        src: 'https://images.unsplash.com/photo-1738669469338-801b4e9dbccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1NDU3NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Reception celebration',
        description: 'Joyful moments during the wedding reception'
      },
      {
        id: '6',
        src: 'https://images.unsplash.com/photo-1622580627463-b03d48e305d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1NDEzNjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Intimate portrait',
        description: 'A tender moment between the newlyweds'
      }
    ]
  },
  {
    id: 'pre-wedding-session',
    title: 'Romantic Pre-Wedding Session',
    category: 'Pre-Wedding',
    description: 'A beautiful pre-wedding photoshoot capturing the love and excitement before the big day.',
    images: [
      {
        id: '1',
        src: 'https://images.unsplash.com/photo-1742980772407-683eda14c08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmUlMjB3ZWRkaW5nJTIwcGhvdG9zaG9vdHxlbnwxfHx8fDE3NTUzNjYwODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Pre-wedding couple',
        description: 'Romantic engagement session in a natural setting'
      },
      {
        id: '2',
        src: 'https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc1NTQ1OTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Studio portrait',
        description: 'Elegant studio portrait session'
      },
      {
        id: '3',
        src: 'https://images.unsplash.com/photo-1631225866082-8150132a7473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBkZXRhaWx8ZW58MXx8fHwxNzU1MzY2NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Wedding rings',
        description: 'Beautiful detail shot of wedding rings'
      },
      {
        id: '4',
        src: 'https://images.unsplash.com/photo-1664312696723-173130983e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYm91cXVldCUyMGZsb3dlcnN8ZW58MXx8fHwxNzU1MzY2NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Bridal bouquet',
        description: 'Artistic shot of the bridal bouquet'
      }
    ]
  },
  {
    id: 'portrait-session',
    title: 'Professional Portrait Session',
    category: 'Portrait',
    description: 'Stunning professional portraits that capture personality and style.',
    images: [
      {
        id: '1',
        src: 'https://images.unsplash.com/photo-1622580627463-b03d48e305d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1NDEzNjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Couple portrait',
        description: 'Professional couple portrait with perfect lighting'
      },
      {
        id: '2',
        src: 'https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc1NTQ1OTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Individual portrait',
        description: 'Elegant individual portrait session'
      },
      {
        id: '3',
        src: 'https://images.unsplash.com/photo-1638171682944-0e6272465930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTUzNjYwODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Fashion portrait',
        description: 'Stylish fashion portrait with creative lighting'
      }
    ]
  },
  {
    id: 'event-photography',
    title: 'Event Photography Collection',
    category: 'Event',
    description: 'Capturing the energy and excitement of special events and celebrations.',
    images: [
      {
        id: '1',
        src: 'https://images.unsplash.com/photo-1724285169095-25360774b205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1MzY5NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Event celebration',
        description: 'Vibrant moments from a corporate event'
      },
      {
        id: '2',
        src: 'https://images.unsplash.com/photo-1738669469338-801b4e9dbccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1NDU3NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Party celebration',
        description: 'Energetic party atmosphere captured perfectly'
      },
      {
        id: '3',
        src: 'https://images.unsplash.com/photo-1589337067949-7fb044eea122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlb2dyYXBoeSUyMGNhbWVyYSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU1MzY2MDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        alt: 'Behind the scenes',
        description: 'Professional event coverage setup'
      }
    ]
  }
];

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPhoto?: {
    src: string;
    alt: string;
    category: string;
  };
}

export default function PhotoGalleryModal({ isOpen, onClose, initialPhoto }: PhotoGalleryModalProps) {
  const [currentGallery, setCurrentGallery] = useState<PhotoGallery | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Find the gallery based on the initial photo
  useEffect(() => {
    if (initialPhoto && isOpen) {
      let foundGallery = null;
      
      // Try to match by category first
      if (initialPhoto.category.toLowerCase().includes('wedding')) {
        foundGallery = galleryCollections.find(g => g.category === 'Wedding');
      } else if (initialPhoto.category.toLowerCase().includes('pre-wedding')) {
        foundGallery = galleryCollections.find(g => g.category === 'Pre-Wedding');
      } else if (initialPhoto.category.toLowerCase().includes('portrait')) {
        foundGallery = galleryCollections.find(g => g.category === 'Portrait');
      } else {
        foundGallery = galleryCollections.find(g => g.category === 'Event');
      }
      
      // Fallback to first gallery if no match
      if (!foundGallery) {
        foundGallery = galleryCollections[0];
      }
      
      setCurrentGallery(foundGallery);
      
      // Try to find the specific image in the gallery
      const imageIndex = foundGallery.images.findIndex(img => img.src === initialPhoto.src);
      setCurrentImageIndex(imageIndex >= 0 ? imageIndex : 0);
    }
  }, [initialPhoto, isOpen]);

  const nextImage = () => {
    if (currentGallery) {
      setCurrentImageIndex((prev) => 
        prev === currentGallery.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (currentGallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? currentGallery.images.length - 1 : prev - 1
      );
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !currentGallery) return null;

  const currentImage = currentGallery.images[currentImageIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-0 left-0 right-0 z-10 bg-primary/80 backdrop-blur-sm p-4 md:p-6"
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-primary-foreground" style={{ fontFamily: 'Cinzel, serif' }}>
                {currentGallery.title}
              </h2>
              <p className="text-primary-foreground/80 text-sm md:text-base mt-1">
                {currentImageIndex + 1} of {currentGallery.images.length}
              </p>
            </div>
            
            {/* Actions */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isLiked ? 'bg-accent text-accent-foreground' : 'bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 rounded-full transition-colors duration-200">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 rounded-full transition-colors duration-200">
                <Download className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Image */}
        <div className="flex items-center justify-center min-h-screen pt-20 pb-24 px-4">
          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl w-full"
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10] max-h-[80vh] rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-contain bg-primary/20"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 backdrop-blur-sm hover:bg-primary/90 text-primary-foreground p-3 rounded-full transition-all duration-200 hover:scale-110 border-2 border-primary-foreground/30 shadow-lg focus:outline-none focus:ring-4 focus:ring-accent/50"
              aria-label="Previous image (Left Arrow Key)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 backdrop-blur-sm hover:bg-primary/90 text-primary-foreground p-3 rounded-full transition-all duration-200 hover:scale-110 border-2 border-primary-foreground/30 shadow-lg focus:outline-none focus:ring-4 focus:ring-accent/50"
              aria-label="Next image (Right Arrow Key)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-sm p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  {currentImage.alt}
                </h3>
                {currentImage.description && (
                  <p className="text-primary-foreground/80 text-sm md:text-base">
                    {currentImage.description}
                  </p>
                )}
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
                {currentGallery.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                      index === currentImageIndex
                        ? 'ring-2 ring-accent scale-105'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}