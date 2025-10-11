import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import BlissTemplate from '../templates/BlissTemplate';
import YouTemplate from '../templates/YouTemplate';
import AsthaTemplate from '../templates/AsthaTemplate';

interface GalleryPageProps {
  portfolioId: number;
  onBackToWork: () => void;
}

// Portfolio data - you can move this to a shared file later
const portfolioItems = [
  {
    id: 1,
    coupleNames: 'Tasha & Aron',
    image: 'https://images.unsplash.com/photo-1730116309939-10a01fdf1edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb3VwbGV8ZW58MXx8fHwxNzU2MzAzNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    coupleNames: 'Maria & George',
    image: 'https://images.unsplash.com/photo-1739249949375-ea78616571fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwcGhvdG9ncmFwaHklMjBvdXRkb29yfGVufDF8fHx8MTc1NjMyMjgzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    coupleNames: 'Emma & James',
    image: 'https://images.unsplash.com/photo-1588849538263-fbc2b7b8965f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBicmlkZSUyMGdyb29tfGVufDF8fHx8MTc1NjMyMjgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    coupleNames: 'Sarah & Michael',
    image: 'https://images.unsplash.com/photo-1682459337036-e7bbc3986d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwb3J0cmFpdCUyMHJvbWFudGljfGVufDF8fHx8MTc1NjMyMjgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    coupleNames: 'Rachel & David',
    image: 'https://images.unsplash.com/photo-1738669469338-801b4e9dbccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU2Mjg1MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 6,
    coupleNames: 'Lisa & Ryan',
    image: 'https://images.unsplash.com/photo-1742980772407-683eda14c08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHkxfHxwcmUlMjB3ZWRkaW5nJTIwcGhvdG9zaG9vdHxlbnwxfHx8fDE3NTYzMjI4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 7,
    coupleNames: 'Anna & Chris',
    image: 'https://images.unsplash.com/photo-1701488648211-6be60979fedc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHBvcnRyYWl0JTIwd2VkZGluZyUyMGRyZXNzfGVufDF8fHx8MTc1NjMyMjgzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 8,
    coupleNames: 'Kate & Tom',
    image: 'https://images.unsplash.com/photo-1622580627463-b03d48e305d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9vbSUyMHBvcnRyYWl0JTIwd2VkZGluZ3xlbnwxfHx8fDE3NTYzMjI4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 9,
    coupleNames: 'Sophie & Jake',
    image: 'https://images.unsplash.com/photo-1555475809-0cc59e0f1a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZyUyMGNlcmVtb255fGVufDF8fHx8MTc1NjMyMjgzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 10,
    coupleNames: 'Megan & Alex',
    image: 'https://images.unsplash.com/photo-1617788472008-1e524a74cf25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGVzJTIwcGhvdG9ncmFwaHklMjBiZWFjaHxlbnwxfHx8fDE3NTYzMjI4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 11,
    coupleNames: 'Elena & Daniel',
    image: 'https://images.unsplash.com/photo-1664312696723-173130983e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYm91cXVldCUyMGZsb3dlcnN8ZW58MXx8fHwxNzU2MjQzODA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 12,
    coupleNames: 'Grace & Oliver',
    image: 'https://images.unsplash.com/photo-1714972383570-44ddc9738355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBkYW5jaW5nJTIwd2VkZGluZ3xlbnwxfHx8fDE3NTYyODM5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

const templates = ['bliss', 'you', 'astha'] as const;
type TemplateType = typeof templates[number];

export default function GalleryPage({ portfolioId, onBackToWork }: GalleryPageProps) {
  const portfolioItem = portfolioItems.find(item => item.id === portfolioId);

  // Randomly select a template based on portfolioId for consistency
  const selectedTemplate = useMemo(() => {
    const templateIndex = portfolioId % templates.length;
    return templates[templateIndex];
  }, [portfolioId]);

  if (!portfolioItem) {
    return (
      <div className="min-h-screen bg-background pt-16 lg:pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-foreground mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Gallery Not Found
          </h1>
          <button
            onClick={onBackToWork}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 transition-colors duration-200"
          >
            Back to Work
          </button>
        </div>
      </div>
    );
  }

  // Back button overlay
  const BackButton = () => (
    <motion.button
      onClick={onBackToWork}
      className="fixed top-24 left-8 z-50 flex items-center gap-2 bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-black/40 transition-all duration-200"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ x: -5 }}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Back to Work
    </motion.button>
  );

  // Render the appropriate template
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'bliss':
        return <BlissTemplate coupleNames={portfolioItem.coupleNames} portfolioId={portfolioId} />;
      case 'you':
        return <YouTemplate coupleNames={portfolioItem.coupleNames} portfolioId={portfolioId} />;
      case 'astha':
        return <AsthaTemplate coupleNames={portfolioItem.coupleNames} portfolioId={portfolioId} />;
      default:
        return <BlissTemplate coupleNames={portfolioItem.coupleNames} portfolioId={portfolioId} />;
    }
  };

  return (
    <div className="relative">
      <BackButton />
      {renderTemplate()}
    </div>
  );
}