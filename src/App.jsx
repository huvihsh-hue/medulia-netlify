import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';

// --- LAZY LOADING (Code Splitting) ---
// Strona główna ładowana od razu (dla LCP), reszta leniwie
import HomePage from '@/pages/HomePage'; 

const OfferDetailPage = lazy(() => import('@/pages/OfferDetailPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const OfferPage = lazy(() => import('@/pages/OfferPage'));
const MaterialsPage = lazy(() => import('@/pages/MaterialsPage'));
const OpinionsPage = lazy(() => import('@/pages/OpinionsPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogArticle = lazy(() => import('@/pages/BlogArticle'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const SignupPage = lazy(() => import('@/pages/SignupPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// Prosty loader (spinner) podczas ładowania podstrony
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        {/* Suspense obsługuje moment oczekiwania na załadowanie kodu podstrony */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/oferta/:slug" element={<OfferDetailPage />} />
            <Route path="/o-mnie" element={<AboutPage />} />
            <Route path="/oferta" element={<OfferPage />} />
            <Route path="/materialy" element={<MaterialsPage />} />
            <Route path="/opinie" element={<OpinionsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />

            {/* Zapisy */}
            <Route path="/zapisy" element={<SignupPage />} />

            {/* Kontakt */}
            <Route path="/kontakt" element={<ContactPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>

        <Toaster />
      </Layout>
    </Router>
  );
}

export default App;