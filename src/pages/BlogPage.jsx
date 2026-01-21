import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';
import SectionTitle from '@/components/SectionTitle';

function BlogPage() {
  const blogPosts = [
    {
      title: '5 strategii nauki do matury',
      excerpt: 'Jak efektywnie planować naukę i wykorzystać czas przed maturą.',
      date: '15.01.2026',
      category: 'Strategie',
      slug: '5-strategii'
    },
    {
      title: 'Błędy maturzystów',
      excerpt: 'Poznaj pułapki, które czyhają na egzaminie i jak ich uniknąć.',
      date: '10.01.2026',
      category: 'Porady',
      slug: 'bledy-maturzystow'
    },
    {
      title: 'Genetyka w 7 dni',
      excerpt: 'Prosty plan nauki, który pomoże Ci zrozumieć genetykę.',
      date: '05.01.2026',
      category: 'Wiedza',
      slug: 'genetyka-7-dni'
    },
    {
      title: 'Stres przed maturą',
      excerpt: 'Jak sobie z nim radzić i przekuć w motywację.',
      date: '20.12.2025',
      category: 'Porady',
      slug: 'stres-matura'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - MEDULIA</title>
      </Helmet>

      <div className="pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center glass-panel p-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Porady i wiedza w pigułce
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;