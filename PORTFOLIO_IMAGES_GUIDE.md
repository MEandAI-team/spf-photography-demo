# Portfolio Images Guide

## Overview
This guide explains how to add and manage images for each portfolio item in the Work page.

## Problem Solved
Previously, all portfolio galleries were showing the same images because they were pulling from a shared image pool. Now, each of the 12 portfolio items has its own dedicated image collection.

## Structure

### Portfolio Items (Work Page)
The Work page displays 12 portfolio items:
1. Srushti & Piyush
2. Maria & George
3. Emma & James
4. Sarah & Michael
5. Rachel & David
6. Lisa & Ryan
7. Anna & Chris
8. Kate & Tom
9. Sophie & Jake
10. Megan & Alex
11. Elena & Daniel
12. Grace & Oliver

### Image Collections
Each portfolio has its own image collection in `/src/data/imageData.ts`:
- `portfolio1Images` - Srushti & Piyush
- `portfolio2Images` - Maria & George
- `portfolio3Images` - Emma & James
- `portfolio4Images` - Sarah & Michael
- `portfolio5Images` - Rachel & David
- `portfolio6Images` - Lisa & Ryan
- `portfolio7Images` - Anna & Chris
- `portfolio8Images` - Kate & Tom
- `portfolio9Images` - Sophie & Jake
- `portfolio10Images` - Megan & Alex
- `portfolio11Images` - Elena & Daniel
- `portfolio12Images` - Grace & Oliver

## How to Add Images

### Step 1: Locate the Portfolio Collection
Open `/src/data/imageData.ts` and find the portfolio collection you want to edit. For example, to add images for "Maria & George" (Portfolio 2):

```typescript
// Portfolio 2: Maria & George
export const portfolio2Images: ImageData[] = [
  // Add your images here
];
```

### Step 2: Add Image Data
Add a new image object to the array:

```typescript
export const portfolio2Images: ImageData[] = [
  {
    id: 'portfolio2-001',                    // Unique ID
    src: '/images/wedding/maria-george/img1.webp',  // Image path
    alt: 'Maria & George - Wedding portrait',       // Alt text
    caption: 'Elegant wedding portrait in natural setting',
    category: 'wedding',
    title: 'Timeless Elegance',
    description: 'A beautiful wedding portrait capturing the couple\'s joy.',
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
  // Add more images...
];
```

### Step 3: Image Path
Place your images in the `/public/images/` directory. For example:
- `/public/images/wedding/maria-george/img1.webp`
- `/public/images/wedding/maria-george/img2.webp`

Then reference them in the `src` field as:
- `/images/wedding/maria-george/img1.webp`

## Image Data Fields

### Required Fields
- `id`: Unique identifier (e.g., 'portfolio2-001')
- `src`: Path to the image file
- `alt`: Alternative text for accessibility
- `category`: Image category (e.g., 'wedding', 'pre-wedding', 'portrait')
- `title`: Image title
- `description`: Detailed description

### Optional Fields
- `caption`: Short caption for the image
- `location`: Where the photo was taken
- `date`: Date of the photoshoot
- `photographer`: Photographer name
- `settings`: Camera settings object
  - `camera`: Camera model
  - `lens`: Lens used
  - `aperture`: Aperture setting
  - `shutter`: Shutter speed
  - `iso`: ISO setting

## Example: Complete Portfolio Setup

```typescript
// Portfolio 2: Maria & George
export const portfolio2Images: ImageData[] = [
  {
    id: 'portfolio2-001',
    src: '/images/wedding/maria-george/ceremony.webp',
    alt: 'Maria & George - Wedding ceremony',
    caption: 'The moment they said "I do"',
    category: 'wedding',
    title: 'Sacred Vows',
    description: 'A beautiful ceremony moment captured in perfect lighting.',
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
    src: '/images/wedding/maria-george/portrait.webp',
    alt: 'Maria & George - Couple portrait',
    caption: 'Golden hour magic',
    category: 'wedding',
    title: 'Golden Moments',
    description: 'Stunning sunset portrait by the river.',
    location: 'Riverside Gardens',
    date: '2024-12-10',
    photographer: 'SPF Photography',
    settings: {
      camera: 'Canon EOS R5',
      lens: '50mm f/1.2',
      aperture: 'f/1.8',
      shutter: '1/640s',
      iso: '200'
    }
  },
  {
    id: 'portfolio2-003',
    src: '/images/wedding/maria-george/reception.webp',
    alt: 'Maria & George - First dance',
    caption: 'Their first dance as husband and wife',
    category: 'wedding',
    title: 'Dance of Love',
    description: 'The couple\'s first dance under twinkling lights.',
    location: 'Riverside Gardens',
    date: '2024-12-10',
    photographer: 'SPF Photography'
  }
];
```

## How It Works

1. **Work Page**: Displays 12 portfolio thumbnails
2. **Click on Portfolio**: Opens the gallery page for that specific couple
3. **Gallery Templates**: Three different templates (Bliss, You, Astha) are randomly assigned
4. **Image Loading**: Each template loads images from the corresponding portfolio collection

## Helper Functions

The following functions are available in `imageData.ts`:

### `getPortfolioImages(portfolioId: number)`
Returns all images for a specific portfolio.

```typescript
import { getPortfolioImages } from '../../data/imageData';

const images = getPortfolioImages(1); // Gets all images for Portfolio 1
```

### `getRandomPortfolioImages(portfolioId: number, count: number)`
Returns a random selection of images from a specific portfolio.

```typescript
import { getRandomPortfolioImages } from '../../data/imageData';

const images = getRandomPortfolioImages(2, 5); // Gets 5 random images from Portfolio 2
```

## Tips

1. **Image Format**: Use WebP format for better performance
2. **Image Size**: Optimize images before uploading (recommended: max 1920px width)
3. **Naming Convention**: Use descriptive names (e.g., `ceremony.webp`, `portrait.webp`)
4. **Unique IDs**: Always use unique IDs for each image (e.g., `portfolio2-001`, `portfolio2-002`)
5. **Consistency**: Keep the same couple name and location across all images in a portfolio

## Troubleshooting

### Images Not Showing
1. Check that the image path is correct
2. Verify the image exists in `/public/images/`
3. Make sure the `src` path starts with `/images/` (not `/public/images/`)

### Wrong Images Showing
1. Verify you're editing the correct portfolio collection
2. Check that the portfolioId is being passed correctly to the template

### Build Errors
1. Ensure all required fields are present
2. Check for syntax errors (missing commas, brackets)
3. Verify TypeScript types match the ImageData interface

## Current Status

- **Portfolio 1 (Srushti & Piyush)**: ✅ Has 3 images configured
- **Portfolio 2-12**: ⚠️ Have placeholder data (empty src fields)

To complete the setup, add actual image paths to portfolios 2-12 following the examples above.