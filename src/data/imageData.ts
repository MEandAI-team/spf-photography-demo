// Image data structure for easy management
// Each image has its own unique details and metadata

export interface ImageData {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: string;
  title: string;
  description: string;
  location?: string;
  date?: string;
  photographer?: string;
  settings?: {
    camera?: string;
    lens?: string;
    aperture?: string;
    shutter?: string;
    iso?: string;
  };
}

// Wedding Photography Images
export const weddingImages: ImageData[] = [
  {
    id: 'wedding-001',
    src: '/images/wedding/SRUSHTI & PIYUSH -2025/img8.webp',
    alt: 'Wedding couple romantic moment',
    caption: 'A tender moment between the bride and groom during their sunset photoshoot',
    category: 'wedding',
    title: 'Sunset Romance',
    description: 'Beautiful intimate moment captured during golden hour, showcasing the love and connection between the couple.',
    location: 'Garden Valley Resort',
    date: '2024-03-15',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Canon EOS R5',
      lens: '85mm f/1.4',
      aperture: 'f/2.8',
      shutter: '1/500s',
      iso: '400'
    }
  },
  {
    id: 'wedding-002',
    src: '/images/wedding/SRUSHTI & PIYUSH -2025/img11.webp',
    alt: 'Wedding ceremony exchange of vows',
    caption: 'The sacred moment of exchanging vows, surrounded by loved ones',
    category: 'wedding',
    title: 'Sacred Vows',
    description: 'The emotional exchange of wedding vows captured in perfect timing with natural lighting.',
    location: 'St. Mary\'s Cathedral',
    date: '2024-02-20',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Sony A7IV',
      lens: '70-200mm f/2.8',
      aperture: 'f/3.5',
      shutter: '1/250s',
      iso: '800'
    }
  }
];

// Pre-wedding Photography Images
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

// Portrait Photography Images
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

// Event Photography Images
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

// Festival Photography Images
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

// Calligraphy Photography Images
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

// Collection of all images
export const allImages: ImageData[] = [
  ...weddingImages,
  ...preWeddingImages,
  ...portraitImages,
  ...eventImages,
  ...festivalImages,
  ...calligraphyImages
];

// Helper functions
export const getImagesByCategory = (category: string): ImageData[] => {
  return allImages.filter(image => image.category === category);
};

export const getImageById = (id: string): ImageData | undefined => {
  return allImages.find(image => image.id === id);
};

export const getRandomImages = (count: number): ImageData[] => {
  const shuffled = [...allImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};