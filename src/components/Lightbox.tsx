import React, { useEffect, useCallback, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LightboxImage {
  src: string;
  caption?: string;
}

interface LightboxProps {
  images: string[] | LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious
}: LightboxProps) {
  // State for slideshow
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Helper function to get image data
  const getCurrentImage = () => {
    const image = images[currentIndex];
    if (typeof image === 'string') {
      return { src: image, caption: undefined };
    }
    return image;
  };



  // Slideshow functionality
  useEffect(() => {
    if (isPlaying && isOpen) {
      intervalRef.current = setInterval(() => {
        onNext();
      }, 3000); // 3 seconds per image
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isOpen, onNext]);

  // Stop slideshow when lightbox closes
  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
    }
  }, [isOpen]);

  // Auto-hide controls
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const resetTimeout = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }, 2000);
    };

    if (isOpen) {
      resetTimeout();
      
      const handleMouseMove = () => resetTimeout();
      document.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        clearTimeout(timeout);
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isOpen, isPlaying]);
  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowRight':
        onNext();
        break;
      case 'ArrowLeft':
        onPrevious();
        break;
      case ' ':
        e.preventDefault();
        setIsPlaying(!isPlaying);
        break;
    }
  }, [isOpen, onClose, onNext, onPrevious, isPlaying]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  const currentImageData = getCurrentImage();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        {/* Top Controls Bar */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-4"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Counter */}
              <div className="px-3 py-2 rounded-full bg-black/20 backdrop-blur-sm text-white text-sm">
                {currentIndex + 1} / {images.length}
              </div>

              {/* Control Buttons */}
              <div className="flex items-center gap-2">
                {/* Slideshow Toggle */}
                <motion.button
                  className="p-3 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(!isPlaying);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </motion.button>

                {/* Close Button */}
                <motion.button
                  className="p-3 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Controls */}
        <AnimatePresence>
          {showControls && (
            <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none z-20">
              {/* Previous Button */}
              <motion.button
                className="pointer-events-auto p-3 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrevious();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              {/* Next Button */}
              <motion.button
                className="pointer-events-auto p-3 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          )}
        </AnimatePresence>

        {/* Main Image Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pb-20">
          <motion.div
            key={currentImageData.src}
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={currentImageData.src}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-w-screen max-h-screen object-contain rounded-lg shadow-2xl select-none"
              draggable={false}
            />
          </motion.div>
        </div>

        {/* Image Caption */}
        {currentImageData.caption && (
          <AnimatePresence>
            {showControls && (
              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-4 py-2 rounded-lg bg-black/40 backdrop-blur-sm text-white text-center max-w-md">
                  <p className="text-sm">{currentImageData.caption}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Touch/Swipe Areas for Mobile */}
        <div 
          className="absolute left-0 top-0 w-1/3 h-full cursor-pointer z-10"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
        />
        <div 
          className="absolute right-0 top-0 w-1/3 h-full cursor-pointer z-10"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        />

        {/* Keyboard Shortcuts Help */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              className="absolute bottom-4 right-4 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="px-3 py-2 rounded-lg bg-black/20 backdrop-blur-sm text-white text-xs">
                <div className="space-y-1">
                  <div>← → Navigate</div>
                  <div>Space: Play/Pause</div>
                  <div>Esc: Close</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}