import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronLeft, ChevronRight, X, Pause, Volume2, Heart, Camera, Music, Users } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  videoUrl?: string; // For now we'll use placeholder
}

interface VideographyType {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  icon: React.ReactNode;
  video: Video;
}

const videos: Video[] = [
  {
    id: 1,
    title: 'CINEMATIC SOULMATES',
    description: 'In a world of fleeting moments, you are my eternal epic. Every time our eyes meet, its the most profound scene in the film of my life. 🎬❤️',
    thumbnail: '',
    duration: '',
    videoUrl: '/videos/SIDDHI & DURVANKUR.webm'
  },
  {
    id: 2,
    title: 'Starbucks Kolhapur',
    description: 'A simple start, an iconic legacy. Tap to see the decades of craft, culture, and community that built Starbucks. An American classic. 🚀❤️"',
    thumbnail: '/images/starbucks/main.jpg',
    duration: '',
    videoUrl: '/videos/starbucks.webm'
  },
  {
    id: 3,
    title: 'THE PROMISE',
    description: '"Forget the fantasy—this love is real, its cinematic, and its the most beautiful fairy tale we could have ever dreamed up. Encore, please. 🥂👑"',
    thumbnail: '/images/wedding/RIYA & ASHISH/main.jpg',
    duration: '',
    videoUrl: '/videos/riya & ashish.webm'
  }
];

const videographyTypes: VideographyType[] = [
  {
    id: 'prewedding',
    title: 'Pre-Wedding',
    description: 'Capture your love story before the big day with cinematic pre-wedding films that showcase your unique bond.',
    thumbnail: '/images/video.png',
    icon: <Heart className="w-6 h-6" />,
    video: {
      id: 101,
      title: 'Pre-Wedding Cinematic Story',
      description: 'A romantic journey capturing the essence of love before the wedding day. Shot in beautiful outdoor locations with natural lighting.',
      thumbnail: '/images/video.png',
      duration: '',
      videoUrl: '/videos/prewedding.webm'
    }
  },
  {
    id: 'wedding',
    title: 'Wedding',
    description: 'Complete wedding day coverage from preparations to celebration, creating a timeless record of your special day.',
    thumbnail: '/images/wedding/SUSHANT & RADHIKA/main.jpg',
    icon: <Camera className="w-6 h-6" />,
    video: {
      id: 102,
      title: 'Wedding Day Highlights',
      description: 'A comprehensive coverage of the wedding ceremony and reception, capturing every precious moment from vows to the first dance.',
      thumbnail: '/images/wedding/SUSHANT & RADHIKA/main.jpg',
      duration: '',
      videoUrl: '/videos/Sushant & Radhika.webm'
    }
  },
  {
    id: 'festivals',
    title: 'Festivals',
    description: 'Vibrant coverage of cultural festivals and celebrations, capturing the energy and traditions of special events.',
    thumbnail: '',
    icon: <Music className="w-6 h-6" />,
    video: {
      id: 103,
      title: 'Cultural Festival Celebration',
      description: 'Dynamic videography showcasing the colors, music, and traditions of cultural festivals with multiple camera angles.',
      thumbnail: '',
      duration: '',
      videoUrl: ''
    }
  },
  {
    id: 'Cinematic',
    title: 'Modeling',
    description: 'Professional fashion and portrait videography that showcases style, personality, and creative vision.',
    thumbnail: '',
    icon: <Users className="w-6 h-6" />,
    video: {
      id: 104,
      title: 'Fashion & Portrait Videography',
      description: 'Creative videography for fashion shoots and portrait sessions, emphasizing style, movement, and artistic expression.',
      thumbnail: '',
      duration: '',
      videoUrl: ''
    }
  }
];

interface VideographyPageProps {
  onNavigateToContact?: () => void;
}

const SWIPE_THRESHOLD = 50; // Minimum distance in pixels to count as a swipe

export default function VideographyPage({ onNavigateToContact }: VideographyPageProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMainVideoOpen, setIsMainVideoOpen] = useState(false);
  const [isTypeVideoOpen, setIsTypeVideoOpen] = useState(false);
  const [selectedTypeVideo, setSelectedTypeVideo] = useState<Video | null>(null);
  // Removed isPlaying state as we will rely solely on native controls for the modal
  // const [isPlaying, setIsPlaying] = useState(false); 
  
  // NEW STATE for swipe
  const [touchStartX, setTouchStartX] = useState(0); 

  const mainVideoRef = useRef<HTMLVideoElement | null>(null);
  const typeVideoRef = useRef<HTMLVideoElement | null>(null);

  const currentVideo = videos[currentVideoIndex];

  // Modified nextVideo/prevVideo to be defined using useCallback
  const nextVideo = useCallback(() => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  }, []);

  const prevVideo = useCallback(() => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  }, []);

  // FIX: Separate useEffect for Keyboard Navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ignore key presses if any video modal is open
      if (isMainVideoOpen || isTypeVideoOpen) return;
      
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevVideo();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextVideo();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    // Cleanup function
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [prevVideo, nextVideo, isMainVideoOpen, isTypeVideoOpen]); // Dependencies ensure fresh functions are used


  const handleMainVideoClick = () => {
    setIsMainVideoOpen(true);
  };

  const handleTypeVideoClick = (videographyType: VideographyType) => {
    setSelectedTypeVideo(videographyType.video);
    setIsTypeVideoOpen(true);
  };

  const closeMainVideo = () => {
    setIsMainVideoOpen(false);
    // Pause video when closing
    if (mainVideoRef.current) {
        mainVideoRef.current.pause();
    }
  };

  const closeTypeVideo = () => {
    setIsTypeVideoOpen(false);
    setSelectedTypeVideo(null);
    // Pause video when closing
    if (typeVideoRef.current) {
        typeVideoRef.current.pause();
    }
  };
  
  // REMOVED togglePlay function as we rely on native controls

  const handleNavigateToContact = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    }
  };

  // HANDLERS: Touch/Swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    // Only allow swipe actions if a video modal is NOT open
    if (isMainVideoOpen || isTypeVideoOpen) return;
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isMainVideoOpen || isTypeVideoOpen || touchStartX === 0) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        // Swipe left (next video)
        nextVideo();
      } else {
        // Swipe right (previous video)
        prevVideo();
      }
    }
    setTouchStartX(0); // Reset touch start position
  };
  // END HANDLERS

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Video Section - Fixed header collision */}
      <section 
        className="relative h-screen overflow-hidden pt-16 lg:pt-20"
        // ADDED SWIPE HANDLERS HERE
        onTouchStart={handleTouchStart} 
        onTouchEnd={handleTouchEnd}
      >
        {/* Video Background */}
        <div className="absolute inset-0">
          {currentVideo.videoUrl ? (
            <video
              key={currentVideo.id}
              className="w-full h-full object-cover"
              src={currentVideo.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={currentVideo.thumbnail || undefined}
            />
          ) : (
            <ImageWithFallback
              src={currentVideo.thumbnail}
              alt={currentVideo.title}
              className="w-full h-full object-cover"
            />
          )}
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={prevVideo}
          className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 lg:w-16 lg:h-16 bg-black/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/40 transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
        </motion.button>

        <motion.button
          onClick={nextVideo}
          className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 lg:w-16 lg:h-16 bg-black/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/40 transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
        </motion.button>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight" 
            style={{ fontFamily: 'Cinzel, serif' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            key={currentVideo.id}
          >
            {currentVideo.title}
          </motion.h1>

          <motion.p 
            className="text-base lg:text-xl text-white/90 max-w-4xl mb-8 lg:mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            key={`${currentVideo.id}-desc`}
          >
            {currentVideo.description}
          </motion.p>

          {/* Play Button */}
          <motion.button
            onClick={handleMainVideoClick}
            className="w-20 h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Play className="w-8 h-8 lg:w-10 lg:h-10 ml-1" fill="currentColor" />
          </motion.button>
        </div>

        {/* Video Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {videos.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentVideoIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: index === currentVideoIndex ? 1.25 : 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            />
          ))}
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-4">
          <motion.div 
            className="flex items-center bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Volume2 className="w-4 h-4 mr-2" />
            <span className="text-sm">{currentVideo.duration}</span>
          </motion.div>
        </div>
      </section>

      {/* Videography Types Section */}
      <motion.section 
        className="py-16 lg:py-24 bg-background"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 lg:mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
              What Type of Videography We Do
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our range of professional videography services, each crafted to capture the unique essence of your special moments.
            </p>
          </motion.div>

          {/* Videography Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {videographyTypes.map((type, index) => (
              <motion.div
                key={type.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer bg-secondary/20"
                onClick={() => handleTypeVideoClick(type)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Background Image */}
                <ImageWithFallback
                  src={type.thumbnail}
                  alt={type.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-lg mb-4 text-accent">
                      {type.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-xl lg:text-2xl font-semibold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                      {type.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-sm mb-4 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {type.description}
                    </p>

                    {/* Play Button */}
        

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
        </motion.div>            <motion.div
                      className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="YOUR_YOUTUBE_LINK_HERE" // ⬅️ Change this to your YouTube link
            target="_blank"             // ⬅️ This opens the link in a new tab
            rel="noopener noreferrer"   // ⬅️ Security best practice for target="_blank"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          View More
          </motion.a>
        </motion.div>
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleNavigateToContact}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Main Video Fullscreen Modal */}
      <AnimatePresence>
        {isMainVideoOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMainVideo}
          >
            <motion.div
              className="relative w-full h-full max-w-6xl max-h-[80vh] bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeMainVideo}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Video Player Placeholder */}
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                {currentVideo.videoUrl ? (
                  <video
                    ref={mainVideoRef}
                    className="w-full h-full object-cover"
                    controls // Essential for mobile tap initiation
                    // FIX 1: Remove autoPlay from modal video
                    poster={currentVideo.thumbnail}
                    // FIX 2: Remove redundant state updates from events
                    onPlay={() => {}} 
                    onPause={() => {}}
                  >
                    <source src={currentVideo.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <ImageWithFallback
                    src={currentVideo.thumbnail}
                    alt={currentVideo.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* FIX 3: REMOVED custom Play/Pause Button overlay */}
                
                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                  <h3 className="text-white text-xl lg:text-2xl font-semibold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                    {currentVideo.title}
                  </h3>
                  <p className="text-white/80 mb-2">
                    {currentVideo.description}
                  </p>
                  <div className="flex items-center text-white/60 text-sm">
                    <Volume2 className="w-4 h-4 mr-1" />
                    {currentVideo.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Type Video Fullscreen Modal */}
      <AnimatePresence>
        {isTypeVideoOpen && selectedTypeVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeTypeVideo}
          >
            <motion.div
              className="relative w-full h-full max-w-6xl max-h-[80vh] bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeTypeVideo}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Video Player Placeholder */}
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                {selectedTypeVideo.videoUrl ? (
                  <video
                    ref={typeVideoRef}
                    className="w-full h-full object-cover"
                    controls // Essential for mobile tap initiation
                    // FIX 1: Remove autoPlay from modal video
                    poster={selectedTypeVideo.thumbnail}
                    // FIX 2: Remove redundant state updates from events
                    onPlay={() => {}} 
                    onPause={() => {}}
                  >
                    <source src={selectedTypeVideo.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <ImageWithFallback
                    src={selectedTypeVideo.thumbnail}
                    alt={selectedTypeVideo.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* FIX 3: REMOVED custom Play/Pause Button overlay */}

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                  <h3 className="text-white text-xl lg:text-2xl font-semibold mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                    {selectedTypeVideo.title}
                  </h3>
                  <p className="text-white/80 mb-2">
                    {selectedTypeVideo.description}
                  </p>
                  <div className="flex items-center text-white/60 text-sm">
                    <Volume2 className="w-4 h-4 mr-1" />
                    {selectedTypeVideo.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}