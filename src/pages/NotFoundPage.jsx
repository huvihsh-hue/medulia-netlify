import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Strona nie znaleziona - 404 | MEDULIA</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
        <div className="glass-panel p-10 md:p-16 text-center max-w-2xl w-full" data-bg="image">
          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ups! Zabłądziłeś w cyklu Krebsa?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Strona, której szukasz, nie istnieje lub została przeniesiona. 
            Wróćmy na bezpieczny grunt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-accent inline-flex items-center justify-center gap-2 px-6 py-3">
              <Home className="w-5 h-5" /> Strona Główna
            </Link>
            <Link to="/oferta" className="inline-flex items-center justify-center gap-2 text-white font-semibold hover:text-purple-300 transition-colors px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5">
              <ArrowLeft className="w-5 h-5" /> Wróć do Oferty
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;