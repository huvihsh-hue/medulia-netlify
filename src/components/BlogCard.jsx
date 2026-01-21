import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

function BlogCard({ title, excerpt, date, category, slug }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-panel h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:bg-white/10"
      data-bg="image"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-white/10 border border-white/20 text-white/90 text-xs font-medium rounded-full">
            {category}
          </span>
          <div className="flex items-center gap-1 text-white/50 text-xs">
            <Calendar className="w-3 h-3" />
            <span>{date}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-white/70 mb-4 flex-grow line-clamp-3 text-sm leading-relaxed">
          {excerpt}
        </p>
        
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors group text-sm"
        >
          Czytaj więcej
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default BlogCard;