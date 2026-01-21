import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Users, Video, Zap } from 'lucide-react';
import OfferCard from '@/components/OfferCard';

function OfferPage() {
  const offers = [
    {
      title: 'Online ze mną 1:1',
      description: 'Pracujemy na Teams, korzystamy z tablicy Miro i Google Docs. Stały plan, pełne wsparcie, 100% uwagi.',
      price: '180 zł',
      features: ['Teams + Miro + Google Docs', 'Stały plan', 'Pełne wsparcie', '100% uwagi'],
      icon: Users,
      highlighted: true
    },
    {
      title: 'Grupowe ze mną (2–6 osób)',
      description: 'Ten sam schemat pracy (Teams + Miro + Google Docs), ale taniej dzięki grupie.',
      price: '80 zł',
      features: ['2-6 osób', 'Teams + Miro + Google Docs', 'Niższa cena', 'Wspólna motywacja'],
      icon: Users
    },
    {
      title: 'Indywidualne z nauczycielami (online)',
      description: 'Wszystko tak samo jak 1:1 ze mną, ale prowadzone przez zespół nauczycieli. Taniej niż 1:1 ze mną.',
      price: '140 zł',
      features: ['1:1 online', 'Zespół nauczycieli', 'Taniej niż ze mną', 'Standard MEDULIA'],
      icon: Zap
    }
  ];

  return (
    <>
      <Helmet>
        <title>Oferta zajęć - MEDULIA | Korepetycje z biologii</title>
      </Helmet>

      <div className="pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center glass-panel p-8"
            data-bg="image"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Oferta zajęć</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Wybierz formę nauki najlepszą dla Ciebie
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8" data-bg="image">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offers.map((offer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col h-full"
                >
                  <OfferCard {...offer} />
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
               <h3 className="text-xl font-bold text-white mb-2">Masz pytania?</h3>
               <p className="text-white/70 mb-4">Skontaktuj się i ustalimy szczegóły.</p>
               <Link to="/kontakt" className="px-6 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
                 Napisz do mnie
               </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OfferPage;