import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

function OfferCard({ title, description, price, features, icon: Icon, highlighted = false }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`glass-panel h-full flex flex-col transition-all duration-300 ${
        highlighted ? 'border-white/40 shadow-[0_0_30px_rgba(124,58,237,0.3)]' : ''
      }`}
      data-bg="image"
    >
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/10 border border-white/20">
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="mb-6 text-white/80 leading-relaxed">
        {description}
      </p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-lg ml-2 text-white/60">
          / godz
        </span>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/10 border border-white/20">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-white/80 text-sm">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <Link
  to="/zapisy"
  className="block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 btn-accent hover:scale-[1.02]"
>
  Zapisz się
</Link>

    </motion.div>
  );
}

export default OfferCard;