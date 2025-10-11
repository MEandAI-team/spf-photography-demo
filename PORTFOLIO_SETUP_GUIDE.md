# Portfolio Setup Guide

## Overview
Your Work page now has **12 separate portfolio collections**, each with **8 image slots**. Each portfolio is completely independent - adding images to one portfolio will NOT affect any other portfolio.

## Current Status

### ✅ Portfolio 1: Srushti & Piyush
- **Status**: Has 3 actual images configured
- **Images**: 
  - img8.webp (Sunset Romance)
  - img11.webp (Sacred Vows)
  - img2.webp (Love's Beginning)
- **Remaining slots**: 5 empty slots ready for more images

### ⚠️ Portfolios 2-12
- **Status**: Structure ready, all image slots are empty (src: '')
- **Each has**: 8 placeholder entries waiting for your images

## How to Add Images to Any Portfolio

### Step 1: Place Your Images
Put your images in the `/public/images/wedding/` folder. For example:
```
/public/images/wedding/SRUSHTI & PIYUSH -2025/img8.webp
/public/images/wedding/maria-george/ceremony.webp
/public/images/wedding/emma-james/portrait.webp
```

### Step 2: Update imageData.ts
Open `/src/data/imageData.ts` and find the portfolio you want to update.

**Example for Portfolio 2 (Maria & George):**
```typescript
// Portfolio 2: Maria & George
export const portfolio2Images: ImageData[] = [
  {
    id: 'portfolio2-001',
    src: '/images/wedding/maria-george/ceremony.webp',  // ← Add your image path here
    alt: 'Maria & George - Wedding portrait',
    caption: 'Elegant wedding portrait in natural setting',
    category: 'wedding',
    title: 'Timeless Elegance',
    description: 'A beautiful wedding portrait capturing the couple\'s joy and elegance.',
    location: 'Riverside Gardens',
    date: '2024-12-10',
    photographer: 'SPF Photography'
  },
  // ... 7 more image slots
];
```

### Step 3: Important Notes
- **Path format**: Always use `/images/...` (NOT `/public/images/...`)
- **File location**: Images must be in `/public/images/` folder
- **Unique IDs**: Each image must have a unique ID (already set up for you)
- **8 images per portfolio**: Each portfolio has 8 slots, but you can use fewer if needed

## Portfolio Mapping

| Portfolio ID | Couple Names | Code Variable | Gallery Template |
|--------------|--------------|---------------|------------------|
| 1 | Srushti & Piyush | `portfolio1Images` | Bliss |
| 2 | Maria & George | `portfolio2Images` | You |
| 3 | Emma & James | `portfolio3Images` | Astha |
| 4 | Sarah & Michael | `portfolio4Images` | Bliss |
| 5 | Rachel & David | `portfolio5Images` | You |
| 6 | Lisa & Ryan | `portfolio6Images` | Astha |
| 7 | Anna & Chris | `portfolio7Images` | Bliss |
| 8 | Kate & Tom | `portfolio8Images` | You |
| 9 | Sophie & Jake | `portfolio9Images` | Astha |
| 10 | Megan & Alex | `portfolio10Images` | Bliss |
| 11 | Elena & Daniel | `portfolio11Images` | You |
| 12 | Grace & Oliver | `portfolio12Images` | Astha |

## Gallery Templates
Your website uses 3 different gallery templates that rotate:
- **Bliss Template**: Portfolios 1, 4, 7, 10
- **You Template**: Portfolios 2, 5, 8, 11
- **Astha Template**: Portfolios 3, 6, 9, 12

Each template displays images in a different layout style.

## Quick Example: Adding Images to Portfolio 2

1. **Place images** in `/public/images/wedding/maria-george/`
   - ceremony.webp
   - portrait.webp
   - reception.webp
   - etc.

2. **Edit** `/src/data/imageData.ts` - find `portfolio2Images`

3. **Update the src fields**:
```typescript
{
  id: 'portfolio2-001',
  src: '/images/wedding/maria-george/ceremony.webp',  // ← Changed from ''
  alt: 'Maria & George - Wedding portrait',
  // ... rest stays the same
}
```

4. **Save** and rebuild: `npm run build`

## Testing Your Changes

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Work page

3. Click on the portfolio item you updated

4. Verify the images appear correctly in the gallery

## Troubleshooting

### Images not showing?
- ✅ Check the file path starts with `/images/` (not `/public/images/`)
- ✅ Verify the image file exists in `/public/images/wedding/...`
- ✅ Check for typos in the filename
- ✅ Make sure the file extension matches (.webp, .jpg, .png)

### Wrong images appearing?
- ✅ Make sure you're editing the correct portfolio number
- ✅ Clear browser cache and refresh

### Build errors?
- ✅ Check for missing commas between objects
- ✅ Ensure all quotes are properly closed
- ✅ Verify the ID is unique within the portfolio

## File Structure
```
/home/ashutosh/startup/website/spf/
├── public/
│   └── images/
│       └── wedding/
│           ├── SRUSHTI & PIYUSH -2025/
│           │   ├── img2.webp
│           │   ├── img8.webp
│           │   └── img11.webp
│           ├── maria-george/          ← Add your folders here
│           ├── emma-james/
│           └── ...
└── src/
    └── data/
        └── imageData.ts               ← Edit this file
```

## Summary
✅ **12 separate portfolios** - each completely independent  
✅ **8 image slots per portfolio** - ready to be filled  
✅ **Portfolio 1 has 3 images** - as a working example  
✅ **No cross-contamination** - images in one portfolio won't appear in others  
✅ **Easy to maintain** - just update the `src` field for each image  

Need help? Check the existing Portfolio 1 (Srushti & Piyush) as a reference example!