import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ImageTextSection() {
  return (
    <motion.section 
      className="w-full min-h-screen bg-secondary/30 py-16 lg:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[600px]">
          {/* Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
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
                src=""
                alt="Wedding Celebration"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-6 lg:-top-8 -right-6 lg:-right-8 w-16 lg:w-20 h-16 lg:h-20 bg-accent/30 rounded-full -z-10"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute -bottom-3 lg:-bottom-4 -left-3 lg:-left-4 w-8 lg:w-12 h-8 lg:h-12 bg-secondary rounded-full -z-10"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
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
                Your Story, Beautifully Told
              </motion.h2>
              <motion.p 
                className="text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Photography is more than just taking pictures – it's about storytelling, emotion, and creating lasting memories. With years of experience and a keen eye for detail, we transform ordinary moments into extraordinary memories that you'll treasure forever.
              </motion.p>
              <motion.p 
                className="text-base lg:text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Our approach combines traditional elegance with contemporary creativity, ensuring that your photographs reflect your unique personality and style. Whether it's the subtle glance between partners or the joyous celebration with family and friends, we capture it all with artistic flair.
              </motion.p>
            </div>

            <motion.div 
              className="bg-card p-4 lg:p-6 rounded-xl shadow-lg border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3 lg:mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Why Choose Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                {[
                  { title: 'Professional Quality', desc: 'High-end equipment and years of expertise' },
                  { title: 'Quick Delivery', desc: 'Fast turnaround without compromising quality' },
                  { title: 'Personalized Packages', desc: 'Tailored to fit your specific needs and budget' },
                  { title: '24/7 Support', desc: 'We\'re here whenever you need us' }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-5 lg:w-6 h-5 lg:h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-accent-foreground rounded-full"></div>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm lg:text-base">{feature.title}</h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 lg:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-primary text-primary-foreground px-6 lg:px-8 py-3 lg:py-4 rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
              <motion.button 
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 lg:px-8 py-3 lg:py-4 rounded-lg transition-colors duration-200 text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}