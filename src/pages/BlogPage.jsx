import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User, Tag, Clock } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

// Baza danych postów (skróty na listę)
export const blogPosts = [
  {
    slug: '5-strategii-nauki-biologia-matura',
    title: '5 strategii, które gwarantują wynik 80%+ z biologii (Bez wkuwania)',
    excerpt: 'Większość maturzystów uczy się źle. Zamiast czytać podręcznik 10 razy, zastosuj Active Recall i Spaced Repetition. Zobacz kompletny system nauki Medulii.',
    date: '15.01.2026',
    readTime: '8 min',
    category: 'Strategia',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000',
    featured: true
  },
  {
    slug: 'czasowniki-operacyjne-cke-biologia',
    title: 'Klucz CKE: Wyjaśnij vs Opisz. Dlaczego tracisz punkty?',
    excerpt: 'Masz wiedzę, ale nie masz punktów? To wina czasowników operacyjnych. Analizujemy arkusze CKE i pokazujemy, jak pisać "pod klucz", żeby egzaminator nie miał wyjścia.',
    date: '10.01.2026',
    readTime: '6 min',
    category: 'Błędy CKE',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    slug: 'genetyka-w-7-dni-plan',
    title: 'Genetyka: Jak ogarnąć krzyżówki i Hardy\'ego-Weinberga?',
    excerpt: 'Genetyka to matematyka biologii. Zobacz schematy rozwiązywania zadań, które pojawiają się co roku. Kompletny plan powtórkowy na tydzień.',
    date: '05.01.2026',
    readTime: '10 min',
    category: 'Wiedza',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    slug: 'stres-przed-matura-jak-opanowac',
    title: 'Panika w dniu egzaminu? Techniki, które ratują wynik',
    excerpt: 'Stres odcina korę przedczołową – Twoje centrum logicznego myślenia. Poznaj techniki oddechowe i mindsetowe, które stosujemy z uczniami Medulii.',
    date: '20.12.2025',
    readTime: '5 min',
    category: 'Mindset',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    featured: false
  }
];

function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group h-full flex flex-col">
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all h-full flex flex-col shadow-lg hover:shadow-purple-500/10">
        {/* Image Wrapper */}
        <div className="aspect-[16/9] overflow-hidden relative">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent opacity-90" />
          
          <div className="absolute top-4 left-4 flex gap-2">
             <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                {post.category}
             </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow relative">
           <div className="flex items-center gap-4 text-white/50 text-xs mb-3 font-medium">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
           </div>

           <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2 leading-snug">
             {post.title}
           </h3>
           
           <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
             {post.excerpt}
           </p>

           <div className="mt-auto pt-4 border-t border-white/10 flex items-center text-purple-300 text-xs font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
             Czytaj dalej <ArrowRight className="w-4 h-4 ml-2" />
           </div>
        </div>
      </div>
    </Link>
  );
}

function FeaturedPost({ post }) {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
      <div className="absolute inset-0">
        <img 
           src={post.image} 
           alt={post.title} 
           className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-700 scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f11] via-[#0f0f11]/80 to-transparent" />
      </div>

      <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full min-h-[450px] max-w-3xl">
         <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(147,51,234,0.5)]">
              Polecany Artykuł
            </span>
            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-medium backdrop-blur-sm">
              {post.category}
            </span>
         </div>
         
         <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
           {post.title}
         </h2>

         <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
           {post.excerpt}
         </p>

         <Link 
           to={`/blog/${post.slug}`} 
           className="btn-accent self-start inline-flex items-center gap-2 px-8 py-4 text-base rounded-2xl shadow-lg shadow-purple-900/20"
         >
           Czytaj cały artykuł <ArrowRight className="w-5 h-5" />
         </Link>
      </div>
    </div>
  );
}

function BlogPage() {
  const featured = blogPosts.find(p => p.featured) || blogPosts[0];
  const others = blogPosts.filter(p => p !== featured);

  return (
    <>
      <Helmet>
        <title>Blog Biologiczny - Matura 2026, Strategie, Wiedza | MEDULIA</title>
        <meta name="description" content="Najlepszy blog o maturze z biologii. Julia Dobrzyńska dzieli się strategiami na 90%+, analizuje arkusze CKE i tłumaczy trudne zagadnienia. Baza wiedzy Medulii." />
      </Helmet>

      {/* HEADER */}
      <div className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Baza wiedzy <span className="text-gradient-purple">Medulii</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Nie lejemy wody. Same konkrety, analizy CKE i strategie, które działają u setek moich uczniów.
            </p>
          </motion.div>

          {/* FEATURED POST */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.1 }}
          >
             <FeaturedPost post={featured} />
          </motion.div>
        </div>
      </div>

      {/* GRID POZOSTAŁYCH */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle center={false} className="!mb-10">Najnowsze wpisy</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;