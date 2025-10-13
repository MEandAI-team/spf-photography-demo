import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function TextImageSection() {
  return (
    <motion.section 
      className="w-full min-h-screen bg-background py-16 lg:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[600px]">
          {/* Text Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 lg:space-y-6">
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-foreground" 
                style={{ fontFamily: 'Cinzel, serif' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Capturing Your Perfect Moments
              </motion.h2>
              <motion.p 
                className="text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Every wedding tells a unique story, and we're here to preserve those precious moments that make your day extraordinary. Our passionate approach to photography ensures that every smile, every tear of joy, and every heartfelt embrace is captured with artistic precision and emotional depth.
              </motion.p>
              <motion.p 
                className="text-base lg:text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                From intimate ceremonies to grand celebrations, we specialize in creating timeless imagery that reflects the authentic beauty and emotion of your special day. Our expertise spans across various photography styles, ensuring your memories are preserved exactly as you envision them.
              </motion.p>
            </div>
            
            <motion.div 
              className="space-y-3 lg:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg lg:text-xl font-semibold text-foreground" style={{ fontFamily: 'Cinzel, serif' }}>Our Services Include:</h3>
              <ul className="space-y-2 lg:space-y-3">
                {[
                  'Wedding Photography & Videography',
                  'Bride and Groom Portraits',
                  'Pre-Wedding & Engagement Sessions',
                  'Portrait & Family Photography',
                  'Maternity & Baby Photography',
                  'Special Events',
                  'Event Documentation'
                ].map((service, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-accent rounded-full"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-muted-foreground text-sm lg:text-base">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src="/images/home/home-page.jpg"
                alt="Wedding Photography"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
              />
            </motion.div>
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-4 lg:-bottom-6 -right-4 lg:-right-6 w-16 lg:w-24 h-16 lg:h-24 bg-secondary/50 rounded-full -z-10"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute -top-4 lg:-top-6 -left-4 lg:-left-6 w-12 lg:w-16 h-12 lg:h-16 bg-accent/30 rounded-full -z-10"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}