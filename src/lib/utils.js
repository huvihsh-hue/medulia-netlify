import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Magiczna funkcja odchudzająca zdjęcia z Cloudinary
export function optimizeImage(url, width = 'auto') {
  if (!url) return '';
  // Jeśli to nie link z Cloudinary, zwracamy bez zmian
  if (!url.includes('cloudinary.com')) return url;
  
  // Jeśli link już ma parametry, nie psujemy go
  if (url.includes('/f_auto,q_auto')) return url;

  // Wstrzykujemy parametry optymalizacji:
  // f_auto = najlepszy format (WebP/AVIF)
  // q_auto = optymalna kompresja
  // w_{width} = skalowanie do potrzebnej szerokości
  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
}