import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // Zwiększamy limit ostrzeżenia (opcjonalne, ale uspokaja konsolę)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Dzielenie kodu na logiczne paczki
        manualChunks: {
          // Biblioteki vendorowe (zmieniają się rzadko)
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['framer-motion', 'lucide-react', '@radix-ui/react-toast'],
          // Reszta pójdzie dynamicznie
        },
      },
    },
  },
});