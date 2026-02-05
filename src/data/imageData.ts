import type { ImageData } from './types';
export type { ImageData };

// Import portfolios
import { portfolio1Images } from './portfolios/portfolio1';
import { portfolio2Images } from './portfolios/portfolio2';
import { portfolio3Images } from './portfolios/portfolio3';
import { portfolio4Images } from './portfolios/portfolio4';
import { portfolio5Images } from './portfolios/portfolio5';
import { portfolio6Images } from './portfolios/portfolio6';
import { portfolio7Images } from './portfolios/portfolio7';
import { portfolio8Images } from './portfolios/portfolio8';
import { portfolio9Images } from './portfolios/portfolio9';
import { portfolio10Images } from './portfolios/portfolio10';
import { portfolio11Images } from './portfolios/portfolio11';
import { portfolio12Images } from './portfolios/portfolio12';
import { portfolio13Images } from './portfolios/portfolio13';

export {
  portfolio1Images,
  portfolio2Images,
  portfolio3Images,
  portfolio4Images,
  portfolio5Images,
  portfolio6Images,
  portfolio7Images,
  portfolio8Images,
  portfolio9Images,
  portfolio10Images,
  portfolio11Images,
  portfolio12Images,
  portfolio13Images,
};

// ============================================
// LEGACY COLLECTIONS (for backward compatibility)
// ============================================

// Wedding Photography Images (Legacy)
export const weddingImages: ImageData[] = [...portfolio1Images];

// Pre-wedding Photography Images (Legacy)
export const preWeddingImages: ImageData[] = [
  {
    id: 'prewedding-001',
    src: '/images/wedding/SRUSHTI & PIYUSH -2025/img2.webp',
    alt: 'Pre-wedding couple photoshoot',
    caption: 'Romantic pre-wedding session capturing the anticipation of the big day',
    category: 'pre-wedding',
    title: 'Love\'s Beginning',
    description: 'A dreamy pre-wedding session showcasing the couple\'s chemistry and excitement.',
    location: 'Downtown City Park',
    date: '2024-01-10',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Canon EOS R6',
      lens: '50mm f/1.2',
      aperture: 'f/1.8',
      shutter: '1/400s',
      iso: '200'
    }
  }
];

// Portrait Photography Images (Legacy)
export const portraitImages: ImageData[] = [
  {
    id: 'portrait-001',
    src: '',
    alt: 'Fashion model portrait',
    caption: 'Striking portrait showcasing natural beauty and confidence',
    category: 'portrait',
    title: 'Natural Grace',
    description: 'A captivating portrait session emphasizing natural beauty and authentic expressions.',
    location: 'Studio Downtown',
    date: '2024-03-01',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Nikon Z9',
      lens: '105mm f/1.4',
      aperture: 'f/2.0',
      shutter: '1/320s',
      iso: '100'
    }
  }
];

// Event Photography Images (Legacy)
export const eventImages: ImageData[] = [
  {
    id: 'event-001',
    src: '',
    alt: 'Corporate event photography',
    caption: 'Professional event coverage capturing key moments and interactions',
    category: 'event',
    title: 'Corporate Excellence',
    description: 'Professional documentation of corporate events with focus on networking and presentations.',
    location: 'Convention Center',
    date: '2024-02-15',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Canon EOS R5',
      lens: '24-70mm f/2.8',
      aperture: 'f/4.0',
      shutter: '1/200s',
      iso: '1600'
    }
  }
];

// Festival Photography Images (Legacy)
export const festivalImages: ImageData[] = [
  {
    id: 'festival-001',
    src: '',
    alt: 'Cultural festival celebration',
    caption: 'Vibrant colors and traditions captured during the annual cultural festival',
    category: 'festival',
    title: 'Cultural Celebration',
    description: 'Dynamic photography showcasing the energy and traditions of cultural festivals.',
    location: 'City Cultural Center',
    date: '2024-04-01',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Sony A7III',
      lens: '35mm f/1.4',
      aperture: 'f/2.8',
      shutter: '1/400s',
      iso: '800'
    }
  }
];

// Calligraphy Photography Images (Legacy)
export const calligraphyImages: ImageData[] = [
  {
    id: 'calligraphy-001',
    src: '',
    alt: 'Elegant calligraphy writing',
    caption: 'Beautiful hand-lettered calligraphy showcasing artistic expression',
    category: 'calligraphy',
    title: 'Artistic Expression',
    description: 'Fine art calligraphy photography highlighting the beauty of handwritten letters.',
    location: 'Home Studio',
    date: '2024-03-20',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Canon EOS R6',
      lens: '100mm f/2.8 Macro',
      aperture: 'f/5.6',
      shutter: '1/125s',
      iso: '200'
    }
  }
];

// Collection of all images (Legacy)
export const allImages: ImageData[] = [
  ...weddingImages,
  ...preWeddingImages,
  ...portraitImages,
  ...eventImages,
  ...festivalImages,
  ...calligraphyImages
];

// ============================================
// PORTFOLIO MAPPING
// Map portfolio IDs to their image collections
// ============================================
export const portfolioImageMap: Record<number, ImageData[]> = {
  1: portfolio1Images,
  2: portfolio2Images,
  3: portfolio3Images,
  4: portfolio4Images,
  5: portfolio5Images,
  6: portfolio6Images,
  7: portfolio7Images,
  8: portfolio8Images,
  9: portfolio9Images,
  10: portfolio10Images,
  11: portfolio11Images,
  12: portfolio12Images,
  13: portfolio13Images,
};

// ============================================
// HELPER FUNCTIONS
// ============================================

// Get images by category (Legacy)
export const getImagesByCategory = (category: string): ImageData[] => {
  return allImages.filter(image => image.category === category);
};

// Get image by ID (Legacy)
export const getImageById = (id: string): ImageData | undefined => {
  return allImages.find(image => image.id === id);
};

// Get random images (Legacy - for backward compatibility)
export const getRandomImages = (count: number): ImageData[] => {
  const shuffled = [...allImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Get images for a specific portfolio
export const getPortfolioImages = (portfolioId: number): ImageData[] => {
  return portfolioImageMap[portfolioId] || [];
};

// Get random images from a specific portfolio
export const getRandomPortfolioImages = (portfolioId: number, count: number): ImageData[] => {
  const portfolioImages = getPortfolioImages(portfolioId);
  if (portfolioImages.length === 0) return [];

  const shuffled = [...portfolioImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, portfolioImages.length));
};