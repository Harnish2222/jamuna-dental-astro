
import { loadHomepageContent } from './src/lib/load-homepage';

async function test() {
  const allUploads = import.meta.glob('/src/assets/uploads/**/*.{png,jpg,jpeg,webp}', { eager: true });
  console.log('Glob Keys:', Object.keys(allUploads).slice(0, 5));
}

test();
