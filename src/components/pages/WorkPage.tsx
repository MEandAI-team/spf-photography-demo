import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PortfolioItem {
  id: number;
  coupleNames: string;
  image: string;
}

interface WorkPageProps {
  onGalleryOpen?: (portfolioId: number) => void;
  onNavigateToContact?: () => void;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    coupleNames: 'Riya & Ashish',
    image: '/images/wedding/RIYA & ASHISH/main.webp'
  },
  {
    id: 2,
    coupleNames: 'Mandar & Ashwini',
    image: '/images/prewedding/MANDAR & ASHWINI/main.webp'
  },
  {
    id: 3,
    coupleNames: 'Rana & Anajali',
    image: '/images/celebrity/RANA - ANJALI/main.webp'
  },
  {
    id: 4,
    coupleNames: 'Ashish & Anjuna',
    image: '/images/maternity/ASHISH & ANUJA/main.webp'
  },
  {
    id: 5,
    coupleNames: 'Swati Limaye',
    image: '/images/celebrity/SWATI LIMAYE/main.webp'
  },
  {
    id: 6,
    coupleNames: 'Samruddhi & Rohit',
    image: '/images/wedding/SAMRUDDHI & ROHIT/main.webp'
  },
  {
    id: 7,
    coupleNames: 'Harsh & Nishigandha',
    image: '/images/prewedding/HARSH & NISHIGANDHA/main.webp'
  },
  {
    id: 8,
    coupleNames: 'Ratnesha',
    image: '/images/portrait/RATNESHA/main.webp'
  },
  {
    id: 9,
    coupleNames: 'Vidija & Gurunath',
    image: '/images/prewedding/VIDIJA & GURUNATH/main.jpg'
  },
  {
    id: 10,
    coupleNames: 'Sushant & Radhika',
    image: '/images/wedding/SUSHANT & RADHIKA/main.webp'
  },
  {
    id: 11,
    coupleNames: 'Shruti',
    image: '/images/portrait/SHRUTI/main.webp'
  },
  {
    id: 12,
    coupleNames: 'Sports', mes: 'Sports',
    image: '/images/sports/main.webp'
  },
  {
    id: 13,
    coupleNames: 'starbucks',
    image: '/images/starbucks/main.webp'
  }
];

export default function WorkPage({ onGalleryOpen, onNavigateToContact }: WorkPageProps) {
  const handleImageClick = (item: PortfolioItem) => {
    if (onGalleryOpen) {
      onGalleryOpen(item.id);
    }
  };

  const handleNavigateToContact = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16 lg:pt-20">
      {/* Hero Section */}
      <motion.section
        className="py-12 lg:py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
            style={{ fontFamily: 'Cinzel, serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Work
          </motion.h1>
          <motion.p
            className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Every moments has a unique story. Here are some of the beautiful moments we've been privileged to capture.
          </motion.p>
        </div>
      </motion.section>

      {/* Portfolio Grid */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden cursor-pointer bg-secondary/20"
                style={{ width: '427px', height: '269px', maxWidth: '100%' }}
                onClick={() => handleImageClick(item)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image */}
                <ImageWithFallback
                  src={item.image}
                  alt={item.coupleNames}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ width: '427px', height: '269px' }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <h3
                      className="text-white text-xl lg:text-2xl mb-4"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      {item.coupleNames}
                    </h3>

                    <motion.button
                      className="bg-transparent border-2 border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-primary transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageClick(item);
                      }}
                    >
                      READ MORE
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 flex justify-center">
            <a
              href="https://shree-production-films-f13xvgx.gamma.site/?fbclid=PAdGRleANPexhleHRuA2FlbQIxMQABpz2dpgjhluJdMUfJx_Km2ryB1k5vhGd5m_zAeklfJhZQ_2NWcbvwQwmpmtbC_aem_fHhMdBzMdzIfsrA_-iZlwg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-200"
            >
              View More
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="py-16 lg:py-24 bg-secondary/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4 lg:mb-6"
            style={{ fontFamily: 'Cinzel, serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Tell Your Story?
          </motion.h2>
          <motion.p
            className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's create beautiful memories together. Every moments has a unique story worth capturing.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 transition-colors duration-200 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNavigateToContact}
            >
              Book a Session
            </motion.button>
            <motion.button
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 transition-colors duration-200 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNavigateToContact}
            >
              View Packages
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}