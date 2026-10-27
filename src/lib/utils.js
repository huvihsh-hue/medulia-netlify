import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Funkcja zachowana, aby zapobiec błędom w plikach, w których została zaimportowana.
// Lokalne linki przepuszcza bez zmian, a stare z Cloudinary nadal optymalizuje.
export function optimizeImage(url, width = 'auto') {
  if (!url) return '';
  
  // Jeśli to stary link z Cloudinary, optymalizujemy:
  if (url.includes('cloudinary.com')) {
    if (url.includes('/f_auto,q_auto')) return url;
    return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
  }
  
  // Dla plików lokalnych (np. /Projekt_bez_nazwy_31_ay7ahl.png) po prostu zwracamy oryginał:
  return url;
}