import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      {/* Updated pt-16 md:pt-20 for main content to avoid overlap with fixed header */}
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default Layout;