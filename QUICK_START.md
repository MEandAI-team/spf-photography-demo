# Quick Start Guide - Adding Portfolio Images

## 🎯 Goal
Add unique images for each of the 12 couples on your Work page.

## 📁 File Structure
```
/public/images/wedding/
├── SRUSHTI & PIYUSH -2025/    ✅ Already has images
│   ├── img2.webp
│   ├── img8.webp
│   └── img11.webp
├── maria-george/               ⚠️ Create this folder
│   ├── img1.webp
│   ├── img2.webp
│   └── img3.webp
├── emma-james/                 ⚠️ Create this folder
└── ... (other couples)
```

## 🚀 3-Step Process

### Step 1: Add Your Images
Place images in `/public/images/wedding/[couple-name]/`

Example:
```
/public/images/wedding/maria-george/ceremony.webp
/public/images/wedding/maria-george/portrait.webp
/public/images/wedding/maria-george/reception.webp
```

### Step 2: Update imageData.ts
Open `/src/data/imageData.ts` and find the portfolio section:

```typescript
// Portfolio 2: Maria & George
export const portfolio2Images: ImageData[] = [
  {
    id: 'portfolio2-001',
    src: '/images/wedding/maria-george/ceremony.webp',  // ← Add your path here
    alt: 'Maria & George - Wedding ceremony',
    caption: 'Beautiful ceremony moment',
    category: 'wedding',
    title: 'Sacred Vows',
    description: 'A beautiful ceremony captured in perfect lighting.',
    location: 'Riverside Gardens',
    date: '2024-12-10',
    photographer: 'SPF Photography'
  },
  // Add more images...
];
```

### Step 3: Test
1. Run `npm run dev`
2. Go to Work page
3. Click on the portfolio item
4. Verify images appear correctly

## 📋 Portfolio Checklist

- [x] Portfolio 1: Srushti & Piyush (Already done!)
- [ ] Portfolio 2: Maria & George
- [ ] Portfolio 3: Emma & James
- [ ] Portfolio 4: Sarah & Michael
- [ ] Portfolio 5: Rachel & David
- [ ] Portfolio 6: Lisa & Ryan
- [ ] Portfolio 7: Anna & Chris
- [ ] Portfolio 8: Kate & Tom
- [ ] Portfolio 9: Sophie & Jake
- [ ] Portfolio 10: Megan & Alex
- [ ] Portfolio 11: Elena & Daniel
- [ ] Portfolio 12: Grace & Oliver

## 💡 Tips

### Minimum Required Fields
```typescript
{
  id: 'portfolio2-001',           // Must be unique
  src: '/images/path/to/image.webp',  // Image path
  alt: 'Description',             // For accessibility
  category: 'wedding',            // Image category
  title: 'Image Title',           // Display title
  description: 'Description'      // Detailed description
}
```

### Optional But Recommended
```typescript
{
  caption: 'Short caption',
  location: 'Venue name',
  date: '2024-12-10',
  photographer: 'SPF Photography',
  settings: {
    camera: 'Canon EOS R5',
    lens: '85mm f/1.4',
    aperture: 'f/2.0',
    shutter: '1/500s',
    iso: '400'
  }
}
```

## 🎨 Image Recommendations

- **Format**: WebP (best performance)
- **Size**: Max 1920px width
- **Quality**: 80-90% compression
- **Naming**: Use descriptive names (ceremony.webp, portrait.webp, etc.)

## 🔍 Finding Your Portfolio in Code

Each portfolio has a number (1-12). Find yours:

| ID | Couple | Code Location |
|----|--------|---------------|
| 1 | Srushti & Piyush | `portfolio1Images` |
| 2 | Maria & George | `portfolio2Images` |
| 3 | Emma & James | `portfolio3Images` |
| 4 | Sarah & Michael | `portfolio4Images` |
| 5 | Rachel & David | `portfolio5Images` |
| 6 | Lisa & Ryan | `portfolio6Images` |
| 7 | Anna & Chris | `portfolio7Images` |
| 8 | Kate & Tom | `portfolio8Images` |
| 9 | Sophie & Jake | `portfolio9Images` |
| 10 | Megan & Alex | `portfolio10Images` |
| 11 | Elena & Daniel | `portfolio11Images` |
| 12 | Grace & Oliver | `portfolio12Images` |

## ❓ Common Issues

### Images not showing?
1. Check the path starts with `/images/` (not `/public/images/`)
2. Verify the file exists in the public folder
3. Check for typos in the filename

### Wrong images appearing?
1. Make sure you're editing the correct portfolio number
2. Clear browser cache and refresh

### Build errors?
1. Check for missing commas between objects
2. Ensure all quotes are properly closed
3. Verify the ID is unique

## 📚 Need More Help?

See the detailed guide: `PORTFOLIO_IMAGES_GUIDE.md`

## ✅ Example: Complete Portfolio

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
    photographer: 'SPF Photography'
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

Copy this structure and modify it for your portfolio! 🎉