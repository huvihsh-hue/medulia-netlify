import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import OfferPage from '@/pages/OfferPage';
import MaterialsPage from '@/pages/MaterialsPage';
import OpinionsPage from '@/pages/OpinionsPage';
import BlogPage from '@/pages/BlogPage';
import BlogArticle from '@/pages/BlogArticle';
import ContactPage from '@/pages/ContactPage';
import SignupPage from '@/pages/SignupPage';

import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
        </Routes>

        <Toaster />
      </Layout>
    </Router>
  );
}

export default App;
