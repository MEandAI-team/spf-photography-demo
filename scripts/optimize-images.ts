
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function optimizeImages() {
  console.log('Starting image optimization...');
  
  // Find all jpg and png files
  const files = await glob('**/*.{jpg,jpeg,png}', { 
    cwd: PUBLIC_DIR,
    ignore: ['**/*.webp'] // Ignore already optimized files
  });

  console.log(`Found ${files.length} images to process.`);

  for (const file of files) {
    const filePath = path.join(PUBLIC_DIR, file);
    const fileDir = path.dirname(filePath);
    const fileName = path.basename(filePath, path.extname(filePath));
    const webpPath = path.join(fileDir, `${fileName}.webp`);

    try {
      // Check if webp already exists and is newer
      if (fs.existsSync(webpPath)) {
        const srcStats = fs.statSync(filePath);
        const destStats = fs.statSync(webpPath);
        if (destStats.mtime > srcStats.mtime) {
          console.log(`Skipping ${file} (already optimized)`);
          continue;
        }
      }

      const image = sharp(filePath);
      const metadata = await image.metadata();

      // Resize if too large
      if (metadata.width && metadata.width > MAX_WIDTH) {
        console.log(`Resizing ${file} from ${metadata.width}px to ${MAX_WIDTH}px`);
        image.resize(MAX_WIDTH);
      }

      // Convert to WebP
      await image
        .webp({ quality: QUALITY })
        .toFile(webpPath);

      console.log(`Optimized: ${file} -> ${path.basename(webpPath)}`);
      
      // Optional: Replace original if you want to save space, but for now we keep both
      // and update code to prefer webp. 
      // Actually, for the "Optimize existing image assets" task, we might want to replace 
      // or just ensure we have the webp version. 
      // The plan said "Batch convert... to .webp".
      
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  console.log('Optimization complete!');
}

optimizeImages().catch(console.error);
