import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import ImageCarousel from '../ImageCarousel';
import TextImageSection from '../TextImageSection';
import ImageTextSection from '../ImageTextSection';

interface HomePageProps {
  onNavigateToWork?: () => void;
}

export default function HomePage({ onNavigateToWork }: HomePageProps) {
  return (
    <div className="pt-16 lg:pt-20">
      <ImageCarousel />
      
      {/* View Our Work Button Section */}
      <motion.section 
        className="w-full py-16 bg-secondary/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 text-foreground" style={{ fontFamily: 'Cinzel, serif' }}>
              Ready to See More?
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our complete portfolio of wedding & Pre-Wedding photography, portraits, and special moments captured with passion and artistry.
            </p>
            <motion.button
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 flex items-center gap-3 shadow-xl mx-auto"
              onClick={onNavigateToWork}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium">View Our Work</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <TextImageSection />
      <ImageTextSection />
    </div>
  );
}