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

// ============================================
// PORTFOLIO-SPECIFIC IMAGE COLLECTIONS
// Each portfolio item (1-12) has its own unique gallery
// ============================================

// Portfolio 1: Riya & Ashish
export const portfolio1Images: ImageData[] = [
  {
    id: 'portfolio1-001',
    src: '/images/wedding/RIYA & ASHISH/img1.jpg',
    alt: 'Srushti & Piyush - Romantic moment',
    caption: 'A tender moment between the bride and groom during their sunset photoshoot',
    category: 'wedding',
    title: 'Sunset Romance',
    description: 'Beautiful intimate moment captured during golden hour, showcasing the love and connection between the couple.',
    location: 'Garden Valley Resort',
    date: '2025-01-15',
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
    id: 'portfolio1-002',
    src: '/images/wedding/RIYA & ASHISH/img2.jpg',
    alt: 'Srushti & Piyush - Wedding ceremony',
    caption: 'The sacred moment of exchanging vows, surrounded by loved ones',
    category: 'wedding',
    title: 'Sacred Vows',
    description: 'The emotional exchange of wedding vows captured in perfect timing with natural lighting.',
    location: 'Garden Valley Resort',
    date: '2025-01-15',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Sony A7IV',
      lens: '70-200mm f/2.8',
      aperture: 'f/3.5',
      shutter: '1/250s',
      iso: '800'
    }
  },
  {
    id: 'portfolio1-003',
    src: '/images/wedding/RIYA & ASHISH/img3.jpg',
    alt: 'Srushti & Piyush - Pre-wedding moment',
    caption: 'Romantic pre-wedding session capturing the anticipation of the big day',
    category: 'wedding',
    title: 'Love\'s Beginning',
    description: 'A dreamy pre-wedding session showcasing the couple\'s chemistry and excitement.',
    location: 'Downtown City Park',
    date: '2025-01-10',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Canon EOS R6',
      lens: '50mm f/1.2',
      aperture: 'f/1.8',
      shutter: '1/400s',
      iso: '200'
    }
  },
  {
    id: 'portfolio1-004',
    src: '/images/wedding/RIYA & ASHISH/img4.jpg',
    alt: 'Srushti & Piyush - Reception celebration',
    caption: 'Joyful celebration at the reception',
    category: 'wedding',
    title: 'Celebration Time',
    description: 'Capturing the joy and celebration with family and friends.',
    location: 'Garden Valley Resort',
    date: '2025-01-15',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio1-005',
    src: '/images/wedding/RIYA & ASHISH/img5.jpg',
    alt: 'Srushti & Piyush - First dance',
    caption: 'The couple\'s first dance',
    category: 'wedding',
    title: 'Dance of Love',
    description: 'A magical first dance as husband and wife.',
    location: 'Garden Valley Resort',
    date: '2025-01-15',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio1-006',
    src: '/images/wedding/RIYA & ASHISH/img6.jpg',
    alt: 'Srushti & Piyush - Couple portrait',
    caption: 'Beautiful couple portrait',
    category: 'wedding',
    title: 'Perfect Together',
    description: 'A stunning portrait of the newlyweds.',
    location: 'Garden Valley Resort',
    date: '2025-01-15',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio1-007',
    src: '',
    alt: '/images/wedding/RIYA & ASHISH/img7.jpg',
    caption: 'Beautiful wedding details',
    category: 'wedding',
    title: 'Details Matter',
    description: 'Capturing the intricate details of their special day.',
    location: 'Garden Valley Resort',
    date: '2025-01-15',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio1-008',
    src: '/images/wedding/RIYA & ASHISH/img8.jpg',
    alt: 'Srushti & Piyush - Candid moment',
    caption: 'Candid moment of joy', 
    category: 'wedding',
    title: 'Pure Happiness',
    description: 'A candid moment capturing genuine happiness.',
    location: 'Garden Valley Resort',
    date: '2025-01-15',
    photographer: 'SPF Photography'
  }
  
];

// Portfolio 2: Mandar & Ashwini
export const portfolio2Images: ImageData[] = [
  {
    id: 'portfolio2-001',
    src: '/images/prewedding/MANDAR & ASHWINI/img1.jpg',
    alt: 'Maria & George - Wedding portrait',
    caption: 'Elegant wedding portrait in natural setting',
    category: 'wedding',
    title: 'Timeless Elegance',
    description: 'A beautiful wedding portrait capturing the couple\'s joy and elegance.',
    location: 'Riverside Gardens',
    date: '2024-12-10',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Canon EOS R5',
      lens: '85mm f/1.4',
      aperture: 'f/2.0',
      shutter: '1/500s',
      iso: '400'
    }
  },
  {
    id: 'portfolio2-002',
    src: '/images/prewedding/MANDAR & ASHWINI/img2.jpg',
    alt: 'Maria & George - Ceremony moment',
    caption: 'Beautiful ceremony moment with family',
    category: 'wedding',
    title: 'Family Blessings',
    description: 'Capturing the emotional moment of family blessings during the ceremony.',
    location: 'Riverside Gardens',
    date: '2024-12-10',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio2-003',
    src: '/images/prewedding/MANDAR & ASHWINI/img3.jpg',
    alt: 'Maria & George - Reception celebration',
    caption: 'Joyful reception celebration',
    category: 'wedding',
    title: 'Celebration Time',
    description: 'Capturing the joy and celebration at the reception.',
    location: 'Riverside Gardens',
    date: '2024-12-10',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio2-004',
    src: '/images/prewedding/MANDAR & ASHWINI/img4.jpg',
    alt: 'Maria & George - First dance',
    caption: 'Romantic first dance',
    category: 'wedding',
    title: 'Dance of Love',
    description: 'The couple\'s first dance as husband and wife.',
    location: 'Riverside Gardens',
    date: '2024-12-10',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio2-005',
    src: '/images/prewedding/MANDAR & ASHWINI/im5.jpg',
    alt: 'Maria & George - Couple portrait',
    caption: 'Stunning couple portrait',
    category: 'wedding',
    title: 'Perfect Together',
    description: 'A beautiful portrait of the newlyweds.',
    location: 'Riverside Gardens',
    date: '2024-12-10',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio2-006',
    src: '/images/prewedding/MANDAR & ASHWINI/img6.jpg',
    alt: 'Maria & George - Wedding details',
    caption: 'Beautiful wedding details',
    category: 'wedding',
    title: 'Details Matter',
    description: 'Capturing the intricate details of the wedding day.',
    location: 'Riverside Gardens',
    date: '2024-12-10',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio2-007',
    src: '/images/prewedding/MANDAR & ASHWINI/img7.jpg',
    alt: 'Maria & George - Candid moment',
    caption: 'Candid moment of joy',
    category: 'wedding',
    title: 'Pure Joy',
    description: 'A candid moment capturing genuine happiness.',
    location: 'Riverside Gardens',
    date: '2024-12-10',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio2-008',
    src: '/images/prewedding/MANDAR & ASHWINI/main.jpg',
    alt: 'Maria & George - Sunset portrait',
    caption: 'Golden hour portrait',
    category: 'wedding',
    title: 'Golden Glow',
    description: 'A stunning portrait during golden hour.',
    location: 'Riverside Gardens',
    date: '2024-12-10',
    photographer: 'SPF Photography'
  }
];

// Portfolio 3: Rana & Anjali
export const portfolio3Images: ImageData[] = [
  {
    id: 'portfolio3-001',
    src: '/images/celebrity/RANA - ANJALI/img1.jpg',
    alt: 'Emma & James - Outdoor wedding',
    caption: 'Stunning outdoor wedding ceremony',
    category: 'wedding',
    title: 'Garden Dreams',
    description: 'A magical outdoor wedding in a beautiful garden setting.',
    location: 'Botanical Gardens',
    date: '2024-11-20',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Sony A7IV',
      lens: '24-70mm f/2.8',
      aperture: 'f/3.5',
      shutter: '1/320s',
      iso: '640'
    }
  },
  {
    id: 'portfolio3-002',
    src: '/images/celebrity/RANA - ANJALI/img2.jpg',
    alt: 'Emma & James - Reception dance',
    caption: 'First dance under the stars',
    category: 'wedding',
    title: 'Dancing Under Stars',
    description: 'The couple\'s first dance captured in perfect lighting.',
    location: 'Botanical Gardens',
    date: '2024-11-20',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio3-003',
    src: '/images/celebrity/RANA - ANJALI/img3.jpg',
    alt: 'Emma & James - Ceremony vows',
    caption: 'Exchanging heartfelt vows',
    category: 'wedding',
    title: 'Sacred Promises',
    description: 'The emotional moment of exchanging vows.',
    location: 'Botanical Gardens',
    date: '2024-11-20',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio3-004',
    src: '/images/celebrity/RANA - ANJALI/img4.jpg',
    alt: 'Emma & James - Garden portrait',
    caption: 'Romantic garden portrait',
    category: 'wedding',
    title: 'Garden Romance',
    description: 'A beautiful portrait among the flowers.',
    location: 'Botanical Gardens',
    date: '2024-11-20',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio3-005',
    src: '/images/celebrity/RANA - ANJALI/img5.jpg',
    alt: 'Emma & James - Wedding party',
    caption: 'Celebrating with loved ones',
    category: 'wedding',
    title: 'Joyful Celebration',
    description: 'Surrounded by family and friends.',
    location: 'Botanical Gardens',
    date: '2024-11-20',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio3-006',
    src: '/images/celebrity/RANA - ANJALI/img6.jpg',
    alt: 'Emma & James - Floral details',
    caption: 'Beautiful floral arrangements',
    category: 'wedding',
    title: 'Floral Beauty',
    description: 'Stunning floral details from the wedding.',
    location: 'Botanical Gardens',
    date: '2024-11-20',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio3-007',
    src: '/images/celebrity/RANA - ANJALI/img7.jpg',
    alt: 'Emma & James - Candid laughter',
    caption: 'Moments of pure joy',
    category: 'wedding',
    title: 'Laughter & Love',
    description: 'Candid moments of happiness and laughter.',
    location: 'Botanical Gardens',
    date: '2024-11-20',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio3-008',
    src: '/images/celebrity/RANA - ANJALI/img8.jpg',
    alt: 'Emma & James - Evening celebration',
    caption: 'Evening celebration under lights',
    category: 'wedding',
    title: 'Magical Evening',
    description: 'The celebration continues into the evening.',
    location: 'Botanical Gardens',
    date: '2024-11-20',
    photographer: 'SPF Photography'
  }
];

// Portfolio 4: Ashish & Anuja
export const portfolio4Images: ImageData[] = [
  {
    id: 'portfolio4-001',
    src: '/images/maternity/ASHISH & ANUJA/img1.jpg',
    alt: 'Sarah & Michael - Beach wedding',
    caption: 'Romantic beach wedding ceremony',
    category: 'wedding',
    title: 'Seaside Romance',
    description: 'A beautiful beach wedding with ocean views.',
    location: 'Sunset Beach',
    date: '2024-10-15',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Canon EOS R6',
      lens: '35mm f/1.4',
      aperture: 'f/2.8',
      shutter: '1/640s',
      iso: '200'
    }
  },
  {
    id: 'portfolio4-002',
    src: '/images/maternity/ASHISH & ANUJA/img5.jpg',
    alt: 'Sarah & Michael - Sunset portrait',
    caption: 'Golden hour beach portrait',
    category: 'wedding',
    title: 'Golden Moments',
    description: 'Stunning sunset portrait on the beach.',
    location: 'Sunset Beach',
    date: '2024-10-15',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio4-003',
    src: '/images/maternity/ASHISH & ANUJA/img6.jpg',
    alt: 'Sarah & Michael - Beach ceremony',
    caption: 'Ceremony by the ocean',
    category: 'wedding',
    title: 'Ocean Vows',
    description: 'Exchanging vows with the ocean as backdrop.',
    location: 'Sunset Beach',
    date: '2024-10-15',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio4-004',
    src: '/images/maternity/ASHISH & ANUJA/img4.jpg',
    alt: 'Sarah & Michael - Walking on beach',
    caption: 'Romantic beach walk',
    category: 'wedding',
    title: 'Seaside Stroll',
    description: 'The newlyweds walking along the shoreline.',
    location: 'Sunset Beach',
    date: '2024-10-15',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio4-005',
    src: '/images/maternity/ASHISH & ANUJA/img10.jpg',
    alt: 'Sarah & Michael - Beach reception',
    caption: 'Beachside celebration',
    category: 'wedding',
    title: 'Coastal Celebration',
    description: 'Reception celebration by the sea.',
    location: 'Sunset Beach',
    date: '2024-10-15',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio4-006',
    src: '/images/maternity/ASHISH & ANUJA/img3.jpg',
    alt: 'Sarah & Michael - Couple embrace',
    caption: 'Tender beach embrace',
    category: 'wedding',
    title: 'Endless Love',
    description: 'A tender moment captured on the beach.',
    location: 'Sunset Beach',
    date: '2024-10-15',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio4-007',
    src: '/images/maternity/ASHISH & ANUJA/img2.jpg',
    alt: 'Sarah & Michael - Beach details',
    caption: 'Beautiful beach wedding details',
    category: 'wedding',
    title: 'Coastal Details',
    description: 'Capturing the beach wedding details.',
    location: 'Sunset Beach',
    date: '2024-10-15',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio4-008',
    src: '/images/maternity/ASHISH & ANUJA/img7.jpg',
    alt: 'Sarah & Michael - Sunset celebration',
    caption: 'Celebrating at sunset',
    category: 'wedding',
    title: 'Sunset Joy',
    description: 'Joyful celebration as the sun sets.',
    location: 'Sunset Beach',
    date: '2024-10-15',
    photographer: 'SPF Photography'
  }
];

// Portfolio 5: Swati Limaye
export const portfolio5Images: ImageData[] = [
  {
    id: 'portfolio5-001',
    src: '/images/celebrity/SWATI LIMAYE/img1.JPG',
    alt: 'Rachel & David - Vintage wedding',
    caption: 'Classic vintage-themed wedding',
    category: 'wedding',
    title: 'Vintage Love',
    description: 'A beautifully styled vintage wedding celebration.',
    location: 'Historic Manor',
    date: '2024-09-25',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Nikon Z9',
      lens: '50mm f/1.2',
      aperture: 'f/1.8',
      shutter: '1/400s',
      iso: '320'
    }
  },
  {
    id: 'portfolio5-002',
    src: '/images/celebrity/SWATI LIMAYE/img2.JPG',
    alt: 'Rachel & David - Reception details',
    caption: 'Beautiful vintage reception details',
    category: 'wedding',
    title: 'Elegant Details',
    description: 'Capturing the intricate details of the vintage-themed reception.',
    location: 'Historic Manor',
    date: '2024-09-25',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio5-003',
    src: '/images/celebrity/SWATI LIMAYE/img3.JPG',
    alt: 'Rachel & David - Manor ceremony',
    caption: 'Ceremony in historic manor',
    category: 'wedding',
    title: 'Historic Vows',
    description: 'A ceremony steeped in history and elegance.',
    location: 'Historic Manor',
    date: '2024-09-25',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio5-004',
    src: '/images/celebrity/SWATI LIMAYE/img4.JPG',
    alt: 'Rachel & David - Vintage portrait',
    caption: 'Classic vintage portrait',
    category: 'wedding',
    title: 'Timeless Beauty',
    description: 'A portrait with vintage charm.',
    location: 'Historic Manor',
    date: '2024-09-25',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio5-005',
    src: '/images/celebrity/SWATI LIMAYE/img5.JPG',
    alt: 'Rachel & David - Manor gardens',
    caption: 'Portrait in manor gardens',
    category: 'wedding',
    title: 'Garden Elegance',
    description: 'Beautiful portraits in the historic gardens.',
    location: 'Historic Manor',
    date: '2024-09-25',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio5-006',
    src: '/images/celebrity/SWATI LIMAYE/img6.JPG',
    alt: 'Rachel & David - Vintage decor',
    caption: 'Vintage wedding decorations',
    category: 'wedding',
    title: 'Classic Decor',
    description: 'Beautifully styled vintage decorations.',
    location: 'Historic Manor',
    date: '2024-09-25',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio5-007',
    src: '/images/celebrity/SWATI LIMAYE/img7.JPG',
    alt: 'Rachel & David - First dance',
    caption: 'Elegant first dance',
    category: 'wedding',
    title: 'Dance of Romance',
    description: 'The couple\'s first dance in the grand ballroom.',
    location: 'Historic Manor',
    date: '2024-09-25',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio5-008',
    src: '/images/celebrity/SWATI LIMAYE/img8.JPG',
    alt: 'Rachel & David - Evening celebration',
    caption: 'Vintage evening celebration',
    category: 'wedding',
    title: 'Evening Elegance',
    description: 'Celebrating into the evening with vintage style.',
    location: 'Historic Manor',
    date: '2024-09-25',
    photographer: 'SPF Photography'
  }
];

// Portfolio 6: Samruddhi & Rohit
export const portfolio6Images: ImageData[] = [
  {
    id: 'portfolio6-001',
    src: '/images/wedding/SAMRUDDHI & ROHIT/img3.jpg',
    alt: 'Lisa & Ryan - Mountain wedding',
    caption: 'Breathtaking mountain wedding',
    category: 'wedding',
    title: 'Mountain Majesty',
    description: 'A stunning wedding ceremony with mountain backdrop.',
    location: 'Mountain View Resort',
    date: '2024-08-18',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Sony A7III',
      lens: '24-105mm f/4',
      aperture: 'f/5.6',
      shutter: '1/250s',
      iso: '400'
    }
  },
  {
    id: 'portfolio6-002',
    src: '/images/wedding/SAMRUDDHI & ROHIT/img1.jpg',
    alt: 'Lisa & Ryan - Adventure portraits',
    caption: 'Adventurous couple portraits',
    category: 'wedding',
    title: 'Adventure Awaits',
    description: 'Capturing the couple\'s adventurous spirit in the mountains.',
    location: 'Mountain View Resort',
    date: '2024-08-18',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio6-003',
    src: '/images/wedding/SAMRUDDHI & ROHIT/img1.jpg',
    alt: 'Lisa & Ryan - Mountain ceremony',
    caption: 'Ceremony with mountain views',
    category: 'wedding',
    title: 'Peak Vows',
    description: 'Exchanging vows surrounded by majestic mountains.',
    location: 'Mountain View Resort',
    date: '2024-08-18',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio6-004',
    src: '/images/wedding/SAMRUDDHI & ROHIT/img4.jpg',
    alt: 'Lisa & Ryan - Hiking portraits',
    caption: 'Adventurous hiking portraits',
    category: 'wedding',
    title: 'Mountain Love',
    description: 'Capturing love in the great outdoors.',
    location: 'Mountain View Resort',
    date: '2024-08-18',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio6-005',
    src: '/images/wedding/SAMRUDDHI & ROHIT/img5.jpg',
    alt: 'Lisa & Ryan - Scenic overlook',
    caption: 'Portrait at scenic overlook',
    category: 'wedding',
    title: 'Vista Views',
    description: 'Stunning portraits with panoramic mountain views.',
    location: 'Mountain View Resort',
    date: '2024-08-18',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio6-006',
    src: '/images/wedding/SAMRUDDHI & ROHIT/img6.jpg',
    alt: 'Lisa & Ryan - Mountain reception',
    caption: 'Mountain resort reception',
    category: 'wedding',
    title: 'Alpine Celebration',
    description: 'Celebrating at the mountain resort.',
    location: 'Mountain View Resort',
    date: '2024-08-18',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio6-007',
    src: '/images/wedding/SAMRUDDHI & ROHIT/img7.jpg',
    alt: 'Lisa & Ryan - Sunset mountains',
    caption: 'Sunset in the mountains',
    category: 'wedding',
    title: 'Mountain Sunset',
    description: 'Golden hour in the mountains.',
    location: 'Mountain View Resort',
    date: '2024-08-18',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio6-008',
    src: '/images/wedding/SAMRUDDHI & ROHIT/img8.jpg',
    alt: 'Lisa & Ryan - Adventure celebration',
    caption: 'Celebrating their adventure',
    category: 'wedding',
    title: 'Adventure Together',
    description: 'Beginning their adventure as husband and wife.',
    location: 'Mountain View Resort',
    date: '2024-08-18',
    photographer: 'SPF Photography'
  }
];

// Portfolio 7: Harsh & Nishigandha
export const portfolio7Images: ImageData[] = [
  {
    id: 'portfolio7-001',
    src: '/images/prewedding/HARSH & NISHIGANDHA/img1.jpg',
    alt: 'Anna & Chris - Urban wedding',
    caption: 'Modern urban wedding celebration',
    category: 'wedding',
    title: 'City Chic',
    description: 'A stylish urban wedding in the heart of the city.',
    location: 'Downtown Loft',
    date: '2024-07-22',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Canon EOS R5',
      lens: '35mm f/1.4',
      aperture: 'f/2.0',
      shutter: '1/500s',
      iso: '800'
    }
  },
  {
    id: 'portfolio7-002',
    src: '/images/prewedding/HARSH & NISHIGANDHA/img2.jpg',
    alt: 'Anna & Chris - Rooftop reception',
    caption: 'Rooftop reception with city views',
    category: 'wedding',
    title: 'Urban Skyline',
    description: 'Celebrating with stunning city skyline views.',
    location: 'Downtown Loft',
    date: '2024-07-22',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio7-003',
    src: '/images/prewedding/HARSH & NISHIGANDHA/img3.jpg',
    alt: 'Anna & Chris - City ceremony',
    caption: 'Modern city ceremony',
    category: 'wedding',
    title: 'Urban Vows',
    description: 'A contemporary ceremony in the city.',
    location: 'Downtown Loft',
    date: '2024-07-22',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio7-004',
    src: '/images/prewedding/HARSH & NISHIGANDHA/img4.jpg',
    alt: 'Anna & Chris - Street portraits',
    caption: 'Urban street portraits',
    category: 'wedding',
    title: 'City Streets',
    description: 'Stylish portraits in the urban landscape.',
    location: 'Downtown Loft',
    date: '2024-07-22',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio7-005',
    src: '/images/prewedding/HARSH & NISHIGANDHA/img5.jpg',
    alt: 'Anna & Chris - Loft interior',
    caption: 'Industrial loft portraits',
    category: 'wedding',
    title: 'Industrial Elegance',
    description: 'Beautiful portraits in the industrial loft space.',
    location: 'Downtown Loft',
    date: '2024-07-22',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio7-006',
    src: '/images/prewedding/HARSH & NISHIGANDHA/img6.jpg',
    alt: 'Anna & Chris - City lights',
    caption: 'Evening city lights',
    category: 'wedding',
    title: 'City Glow',
    description: 'Portraits with the city lights as backdrop.',
    location: 'Downtown Loft',
    date: '2024-07-22',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio7-007',
    src: '/images/prewedding/HARSH & NISHIGANDHA/img7.jpg',
    alt: 'Anna & Chris - Rooftop dance',
    caption: 'Dancing under the stars',
    category: 'wedding',
    title: 'Rooftop Romance',
    description: 'First dance on the rooftop.',
    location: 'Downtown Loft',
    date: '2024-07-22',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio7-008',
    src: '/images/prewedding/HARSH & NISHIGANDHA/img8.jpg',
    alt: 'Anna & Chris - Urban celebration',
    caption: 'Modern urban celebration',
    category: 'wedding',
    title: 'City Celebration',
    description: 'Celebrating in style in the heart of the city.',
    location: 'Downtown Loft',
    date: '2024-07-22',
    photographer: 'SPF Photography'
  }
];

// Portfolio 8: Ratnesha
export const portfolio8Images: ImageData[] = [
  {
    id: 'portfolio8-001',
    src: '/images/portrait/RATNESHA/img1.jpg',
    alt: 'Kate & Tom - Rustic wedding',
    caption: 'Charming rustic barn wedding',
    category: 'wedding',
    title: 'Rustic Charm',
    description: 'A warm and inviting rustic wedding celebration.',
    location: 'Countryside Barn',
    date: '2024-06-14',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Nikon Z6',
      lens: '85mm f/1.8',
      aperture: 'f/2.2',
      shutter: '1/320s',
      iso: '640'
    }
  },
  {
    id: 'portfolio8-002',
    src: '/images/portrait/RATNESHA/img2.jpg',
    alt: 'Kate & Tom - Country reception',
    caption: 'Festive country-style reception',
    category: 'wedding',
    title: 'Country Celebration',
    description: 'A joyful reception filled with rustic charm and warmth.',
    location: 'Countryside Barn',
    date: '2024-06-14',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio8-003',
    src: '/images/portrait/RATNESHA/img3.jpg',
    alt: 'Kate & Tom - Barn ceremony',
    caption: 'Ceremony in the barn',
    category: 'wedding',
    title: 'Barn Vows',
    description: 'A heartfelt ceremony in the rustic barn.',
    location: 'Countryside Barn',
    date: '2024-06-14',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio8-004',
    src: '/images/portrait/RATNESHA/img4.jpg',
    alt: 'Kate & Tom - Country portraits',
    caption: 'Countryside couple portraits',
    category: 'wedding',
    title: 'Country Love',
    description: 'Beautiful portraits in the countryside.',
    location: 'Countryside Barn',
    date: '2024-06-14',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio8-005',
    src: '/images/portrait/RATNESHA/img5.jpg',
    alt: 'Kate & Tom - Rustic details',
    caption: 'Rustic wedding details',
    category: 'wedding',
    title: 'Rustic Details',
    description: 'Charming rustic decorations and details.',
    location: 'Countryside Barn',
    date: '2024-06-14',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio8-006',
    src: '/images/portrait/RATNESHA/img6.jpg',
    alt: 'Kate & Tom - Field portraits',
    caption: 'Portraits in the field',
    category: 'wedding',
    title: 'Field of Dreams',
    description: 'Romantic portraits in the open field.',
    location: 'Countryside Barn',
    date: '2024-06-14',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio8-007',
    src: '/images/portrait/RATNESHA/img7.jpg',
    alt: 'Kate & Tom - Barn dance',
    caption: 'Dancing in the barn',
    category: 'wedding',
    title: 'Barn Dance',
    description: 'First dance in the decorated barn.',
    location: 'Countryside Barn',
    date: '2024-06-14',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio8-008',
    src: '/images/portrait/RATNESHA/img8.jpg',
    alt: 'Kate & Tom - Sunset countryside',
    caption: 'Sunset in the countryside',
    category: 'wedding',
    title: 'Country Sunset',
    description: 'Golden hour in the countryside.',
    location: 'Countryside Barn',
    date: '2024-06-14',
    photographer: 'SPF Photography'
  }
];

// Portfolio 9: Vidija & Gurunath
export const portfolio9Images: ImageData[] = [
  {
    id: 'portfolio9-001',
    src: '/images/prewedding/VIDIJA & GURUNATH/img1.jpg',
    alt: 'Sophie & Jake - Destination wedding',
    caption: 'Exotic destination wedding',
    category: 'wedding',
    title: 'Tropical Paradise',
    description: 'A dreamy destination wedding in a tropical paradise.',
    location: 'Island Resort',
    date: '2024-05-10',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Sony A7IV',
      lens: '24-70mm f/2.8',
      aperture: 'f/4.0',
      shutter: '1/400s',
      iso: '200'
    }
  },
  {
    id: 'portfolio9-002',
    src: '/images/prewedding/VIDIJA & GURUNATH/img2.jpg',
    alt: 'Sophie & Jake - Beach ceremony',
    caption: 'Intimate beach ceremony',
    category: 'wedding',
    title: 'Island Vows',
    description: 'An intimate ceremony on a pristine tropical beach.',
    location: 'Island Resort',
    date: '2024-05-10',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio9-003',
    src: '/images/prewedding/VIDIJA & GURUNATH/img3.jpg',
    alt: 'Sophie & Jake - Tropical portraits',
    caption: 'Portraits in paradise',
    category: 'wedding',
    title: 'Paradise Found',
    description: 'Beautiful portraits in the tropical setting.',
    location: 'Island Resort',
    date: '2024-05-10',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio9-004',
    src: '/images/prewedding/VIDIJA & GURUNATH/img4.jpg',
    alt: 'Sophie & Jake - Ocean views',
    caption: 'Stunning ocean views',
    category: 'wedding',
    title: 'Ocean Dreams',
    description: 'Capturing love with the ocean as backdrop.',
    location: 'Island Resort',
    date: '2024-05-10',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio9-005',
    src: '/images/prewedding/VIDIJA & GURUNATH/img5.jpg',
    alt: 'Sophie & Jake - Island reception',
    caption: 'Tropical island reception',
    category: 'wedding',
    title: 'Island Celebration',
    description: 'Celebrating in tropical paradise.',
    location: 'Island Resort',
    date: '2024-05-10',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio9-006',
    src: '/images/prewedding/VIDIJA & GURUNATH/img6.jpg',
    alt: 'Sophie & Jake - Palm trees',
    caption: 'Portraits among palm trees',
    category: 'wedding',
    title: 'Tropical Romance',
    description: 'Romantic moments under the palm trees.',
    location: 'Island Resort',
    date: '2024-05-10',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio9-007',
    src: '/images/prewedding/VIDIJA & GURUNATH/img7.jpg',
    alt: 'Sophie & Jake - Sunset beach',
    caption: 'Sunset on the beach',
    category: 'wedding',
    title: 'Tropical Sunset',
    description: 'Golden hour on the tropical beach.',
    location: 'Island Resort',
    date: '2024-05-10',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio9-008',
    src: '/images/prewedding/VIDIJA & GURUNATH/img8.jpg',
    alt: 'Sophie & Jake - Island paradise',
    caption: 'Living the island dream',
    category: 'wedding',
    title: 'Island Dreams',
    description: 'A perfect day in paradise.',
    location: 'Island Resort',
    date: '2024-05-10',
    photographer: 'SPF Photography'
  }
];

// Portfolio 10: Sushant & Radhika
export const portfolio10Images: ImageData[] = [
  {
    id: 'portfolio10-001',
    src: '/images/wedding/SUSHANT & RADHIKA/img1.jpg',
    alt: 'Megan & Alex - Spring wedding',
    caption: 'Beautiful spring garden wedding',
    category: 'wedding',
    title: 'Spring Blossoms',
    description: 'A romantic spring wedding surrounded by blooming flowers.',
    location: 'Spring Gardens',
    date: '2024-04-20',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Canon EOS R6',
      lens: '50mm f/1.2',
      aperture: 'f/1.8',
      shutter: '1/500s',
      iso: '320'
    }
  },
  {
    id: 'portfolio10-002',
    src: '/images/wedding/SUSHANT & RADHIKA/img2.jpg',
    alt: 'Megan & Alex - Floral ceremony',
    caption: 'Ceremony surrounded by spring flowers',
    category: 'wedding',
    title: 'Floral Dreams',
    description: 'A ceremony beautifully decorated with spring blooms.',
    location: 'Spring Gardens',
    date: '2024-04-20',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio10-003',
    src: '/images/wedding/SUSHANT & RADHIKA/img3.jpg',
    alt: 'Megan & Alex - Garden portraits',
    caption: 'Portraits in blooming gardens',
    category: 'wedding',
    title: 'Garden Beauty',
    description: 'Beautiful portraits among spring flowers.',
    location: 'Spring Gardens',
    date: '2024-04-20',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio10-004',
    src: '/images/wedding/SUSHANT & RADHIKA/img4.jpg',
    alt: 'Megan & Alex - Spring ceremony',
    caption: 'Spring garden ceremony',
    category: 'wedding',
    title: 'Spring Vows',
    description: 'Exchanging vows in the spring garden.',
    location: 'Spring Gardens',
    date: '2024-04-20',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio10-005',
    src: '/images/wedding/SUSHANT & RADHIKA/img5.jpg',
    alt: 'Megan & Alex - Flower details',
    caption: 'Beautiful floral details',
    category: 'wedding',
    title: 'Floral Elegance',
    description: 'Stunning spring flower arrangements.',
    location: 'Spring Gardens',
    date: '2024-04-20',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio10-006',
    src: '/images/wedding/SUSHANT & RADHIKA/img6.jpg',
    alt: 'Megan & Alex - Garden reception',
    caption: 'Reception in the gardens',
    category: 'wedding',
    title: 'Garden Party',
    description: 'Celebrating in the beautiful spring gardens.',
    location: 'Spring Gardens',
    date: '2024-04-20',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio10-007',
    src: '/images/wedding/SUSHANT & RADHIKA/img7.jpg',
    alt: 'Megan & Alex - Spring romance',
    caption: 'Romantic spring moments',
    category: 'wedding',
    title: 'Spring Love',
    description: 'Capturing romance in the spring season.',
    location: 'Spring Gardens',
    date: '2024-04-20',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio10-008',
    src: '/images/wedding/SUSHANT & RADHIKA/img8.jpg',
    alt: 'Megan & Alex - Blossom celebration',
    caption: 'Celebrating among blossoms',
    category: 'wedding',
    title: 'Blossom Joy',
    description: 'Joyful celebration surrounded by spring blooms.',
    location: 'Spring Gardens',
    date: '2024-04-20',
    photographer: 'SPF Photography'
  }
];

// Portfolio 11: Shruti
export const portfolio11Images: ImageData[] = [
  {
    id: 'portfolio11-001',
    src: '/images/portrait/SHRUTI/img1.jpg',
    alt: 'Elena & Daniel - Winter wedding',
    caption: 'Elegant winter wonderland wedding',
    category: 'wedding',
    title: 'Winter Wonderland',
    description: 'A magical winter wedding with snow-covered scenery.',
    location: 'Mountain Lodge',
    date: '2024-02-14',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Nikon Z9',
      lens: '70-200mm f/2.8',
      aperture: 'f/3.5',
      shutter: '1/320s',
      iso: '800'
    }
  },
  {
    id: 'portfolio11-002',
    src: '/images/portrait/SHRUTI/img2.jpg',
    alt: 'Elena & Daniel - Cozy reception',
    caption: 'Warm and cozy winter reception',
    category: 'wedding',
    title: 'Fireside Romance',
    description: 'A warm reception by the fireplace on a snowy evening.',
    location: 'Mountain Lodge',
    date: '2024-02-14',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio11-003',
    src: '/images/portrait/SHRUTI/img3.jpg',
    alt: 'Elena & Daniel - Snow ceremony',
    caption: 'Ceremony in the snow',
    category: 'wedding',
    title: 'Snowy Vows',
    description: 'A magical ceremony in the winter snow.',
    location: 'Mountain Lodge',
    date: '2024-02-14',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio11-004',
    src: '/images/portrait/SHRUTI/img4.jpg',
    alt: 'Elena & Daniel - Winter portraits',
    caption: 'Romantic winter portraits',
    category: 'wedding',
    title: 'Winter Romance',
    description: 'Beautiful portraits in the snowy landscape.',
    location: 'Mountain Lodge',
    date: '2024-02-14',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio11-005',
    src: '/images/portrait/SHRUTI/img5.jpg',
    alt: 'Elena & Daniel - Lodge interior',
    caption: 'Cozy lodge moments',
    category: 'wedding',
    title: 'Lodge Warmth',
    description: 'Intimate moments inside the warm lodge.',
    location: 'Mountain Lodge',
    date: '2024-02-14',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio11-006',
    src: '/images/portrait/SHRUTI/img6.jpg',
    alt: 'Elena & Daniel - Winter details',
    caption: 'Winter wedding details',
    category: 'wedding',
    title: 'Winter Elegance',
    description: 'Beautiful winter-themed decorations.',
    location: 'Mountain Lodge',
    date: '2024-02-14',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio11-007',
    src: '/images/portrait/SHRUTI/img7.jpg',
    alt: 'Elena & Daniel - Fireplace dance',
    caption: 'First dance by the fireplace',
    category: 'wedding',
    title: 'Fireside Dance',
    description: 'Dancing by the warm fireplace.',
    location: 'Mountain Lodge',
    date: '2024-02-14',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio11-008',
    src: '/images/portrait/SHRUTI/img8.jpg',
    alt: 'Elena & Daniel - Snowy evening',
    caption: 'Evening in the snow',
    category: 'wedding',
    title: 'Snowy Evening',
    description: 'Magical evening moments in the winter snow.',
    location: 'Mountain Lodge',
    date: '2024-02-14',
    photographer: 'SPF Photography'
  }
];

// Portfolio 12: Sports
export const portfolio12Images: ImageData[] = [
  {
    id: 'portfolio12-001',
    src: '',
    alt: 'Grace & Oliver - Classic wedding',
    caption: 'Timeless classic wedding ceremony',
    category: 'wedding',
    title: 'Classic Elegance',
    description: 'A traditional wedding ceremony with timeless elegance.',
    location: 'Grand Cathedral',
    date: '2024-03-30',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Canon EOS R5',
      lens: '24-70mm f/2.8',
      aperture: 'f/4.0',
      shutter: '1/250s',
      iso: '1600'
    }
  },
  {
    id: 'portfolio12-002',
    src: '',
    alt: 'Grace & Oliver - Grand reception',
    caption: 'Elegant ballroom reception',
    category: 'wedding',
    title: 'Grand Celebration',
    description: 'A sophisticated reception in a beautiful ballroom.',
    location: 'Grand Hotel',
    date: '2024-03-30',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio12-003',
    src: '',
    alt: 'Grace & Oliver - Cathedral ceremony',
    caption: 'Ceremony in grand cathedral',
    category: 'wedding',
    title: 'Sacred Ceremony',
    description: 'A beautiful ceremony in the grand cathedral.',
    location: 'Grand Cathedral',
    date: '2024-03-30',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio12-004',
    src: '',
    alt: 'Grace & Oliver - Classic portraits',
    caption: 'Timeless couple portraits',
    category: 'wedding',
    title: 'Timeless Beauty',
    description: 'Classic and elegant couple portraits.',
    location: 'Grand Cathedral',
    date: '2024-03-30',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio12-005',
    src: '',
    alt: 'Grace & Oliver - Ballroom details',
    caption: 'Elegant ballroom details',
    category: 'wedding',
    title: 'Grand Details',
    description: 'Beautiful details from the ballroom reception.',
    location: 'Grand Hotel',
    date: '2024-03-30',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio12-006',
    src: '',
    alt: 'Grace & Oliver - First dance',
    caption: 'Elegant first dance',
    category: 'wedding',
    title: 'Ballroom Dance',
    description: 'The couple\'s first dance in the grand ballroom.',
    location: 'Grand Hotel',
    date: '2024-03-30',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio12-007',
    src: '',
    alt: 'Grace & Oliver - Grand entrance',
    caption: 'Grand entrance to reception',
    category: 'wedding',
    title: 'Royal Entrance',
    description: 'The couple\'s grand entrance to the reception.',
    location: 'Grand Hotel',
    date: '2024-03-30',
    photographer: 'SPF Photography'
  },
  {
    id: 'portfolio12-008',
    src: '',
    alt: 'Grace & Oliver - Classic celebration',
    caption: 'Timeless celebration',
    category: 'wedding',
    title: 'Classic Joy',
    description: 'A celebration filled with timeless elegance.',
    location: 'Grand Hotel',
    date: '2024-03-30',
    photographer: 'SPF Photography'
  }
];

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