import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import OpinionsMarquee from '@/components/OpinionsMarquee';

function OpinionsPage() {
  const opinionsData = [
    { name: 'Anna Kowalska', city: 'Warszawa', text: 'Zdałam maturę na 92%! Polecam z całego serca.', videoThumbnail: null },
    { name: 'Piotr Nowak', city: 'Kraków', text: 'Genialne podejście do ucznia, zero stresu.', videoThumbnail: 'https://images.unsplash.com/photo-1543295653-e86ee2932f69?w=400' },
    { name: 'Kasia Wiśniewska', city: 'Gdańsk', text: 'Materiały są złote, same konkrety pod CKE.', videoThumbnail: null },
    { name: 'Marek Wójcik', city: 'Wrocław', text: 'Najlepsza decyzja w klasie maturalnej.', videoThumbnail: null },
    { name: 'Julia Kamińska', city: 'Poznań', text: 'Zrozumiałam genetykę w 2 godziny. Magia!', videoThumbnail: 'https://images.unsplash.com/photo-1694266055816-9463a9f53056?w=400' },
    { name: 'Tomek Lewandowski', city: 'Łódź', text: 'Polecam każdemu kto celuje w medycynę.', videoThumbnail: null },
    { name: 'Zuzanna Nowak', city: 'Gdynia', text: 'Z czwórki na maturze próbnej do 98% na prawdziwej! To zasługa Marii.', videoThumbnail: null },
    { name: 'Jakub Wiśniewski', city: 'Lublin', text: 'Materiały, które dostajemy na zajęciach są nieocenione. 94% na maturze!', videoThumbnail: null },
    { name: 'Martyna Kowalczyk', city: 'Szczecin', text: 'Zajęcia grupowe to była strzał w dziesiątkę! Polecam!', videoThumbnail: null },
  ];

  return (
    <>
      <Helmet>
        <title>Opinie uczniów - MEDULIA</title>
      </Helmet>

      <div className="pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center glass-panel p-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Opinie uczniów</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Zobacz, co mówią uczniowie o zajęciach z MEDULIĄ
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6">
            <SectionTitle>Prawdziwe historie</SectionTitle>
            <div className="mt-8">
              <OpinionsMarquee opinions={opinionsData} />
            </div>
            {/* Second row for more opinions if needed */}
            <div className="mt-8">
               <OpinionsMarquee opinions={[...opinionsData].reverse()} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OpinionsPage;