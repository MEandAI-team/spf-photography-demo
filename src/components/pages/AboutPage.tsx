import React from 'react';
import { Award, Camera, Heart, Star, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AboutPageProps {
  onNavigateToContact?: () => void;
}

export default function AboutPage({ onNavigateToContact }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/images/About/akshay-potdar.JPG"
                  alt="SPF - Professional Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/50 rounded-full -z-10"></div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6 leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
                  About SPF Photography
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Passionate storyteller behind the lens, dedicated to capturing the authentic beauty and emotion of your most precious moments.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 8 years of experience in wedding and portrait photography, I believe that every love story deserves to be told with artistry, authenticity, and attention to detail. My journey began with a simple fascination for light and shadow, which has evolved into a deep passion for capturing the fleeting moments that matter most.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in creating timeless imagery that reflects the unique personality and style of each couple I work with. From intimate ceremonies to grand celebrations, my goal is to preserve the genuine emotions and connections that make your day extraordinary.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Award-Winning</span>
                </div>
                <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Passionate</span>
                </div>
                <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full">
                  <Camera className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                500+
              </div>
              <div className="text-muted-foreground">Weddings Captured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                8+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                50+
              </div>
              <div className="text-muted-foreground">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                1000+
              </div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-foreground mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
              My Photography Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every photograph should tell a story, evoke emotion, and preserve memories that last a lifetime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'Cinzel, serif' }}>
                Authentic Moments
              </h3>
              <p className="text-muted-foreground">
                I believe in capturing genuine emotions and spontaneous moments that reflect your true personality and the love you share.
              </p>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'Cinzel, serif' }}>
                Artistic Excellence
              </h3>
              <p className="text-muted-foreground">
                Each image is crafted with careful attention to composition, lighting, and artistic vision to create timeless works of art.
              </p>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'Cinzel, serif' }}>
                Personal Connection
              </h3>
              <p className="text-muted-foreground">
                Building trust and rapport with my clients ensures comfort and natural expressions throughout your special day.
              </p>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'Cinzel, serif' }}>
                Creative Innovation
              </h3>
              <p className="text-muted-foreground">
                Constantly evolving my techniques and style to bring fresh, creative perspectives to every session.
              </p>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'Cinzel, serif' }}>
                Professional Standards
              </h3>
              <p className="text-muted-foreground">
                Committed to delivering exceptional quality, reliability, and professionalism in every aspect of my service.
              </p>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Camera className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'Cinzel, serif' }}>
                Technical Mastery
              </h3>
              <p className="text-muted-foreground">
                Using state-of-the-art equipment and advanced techniques to ensure perfect results in any lighting condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl text-foreground mb-8" style={{ fontFamily: 'Cinzel, serif' }}>
            My Journey
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              My photography journey began during my college years when I first picked up a camera to document life around me. 
              What started as a hobby quickly became a passion, and eventually, my calling. After graduating with a degree in 
              Fine Arts, I dedicated myself entirely to photography, specializing in weddings and portraits.
            </p>
            <p>
              Over the years, I've been honored to capture hundreds of love stories, each unique and beautiful in its own way. 
              From intimate backyard ceremonies to lavish destination weddings, I've learned that the most precious moments 
              often happen in the quiet spaces between the grand gestures.
            </p>
            <p>
              Today, I continue to evolve my craft, always seeking new ways to tell your story with authenticity, 
              artistry, and heart. Because at the end of the day, it's not just about taking pictures – 
              it's about preserving the moments that matter most to you.
            </p>
          </div>
          
          <div className="mt-12">
            <button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg transition-colors duration-200"
              onClick={onNavigateToContact}
            >
              Let's Create Something Beautiful Together
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}