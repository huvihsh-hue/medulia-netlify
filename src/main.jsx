import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // <--- DODAJ TEN IMPORT
import App from '@/App';
import '@/index.css';
import { ToastProvider } from '@/components/ui/use-toast.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* <--- OWIŃ APLIKACJĘ TUTAJ */}
      <ToastProvider>
        <App />
      </ToastProvider>
    </HelmetProvider>
  </React.StrictMode>
);