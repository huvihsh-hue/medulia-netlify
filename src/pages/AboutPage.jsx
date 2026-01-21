import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Heart, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

function AboutPage() {
  const credentials = [
    { icon: GraduationCap, title: 'Wykształcenie', description: 'Magister biologii, UW' },
    { icon: Award, title: 'Doświadczenie', description: '8+ lat pracy' },
    { icon: BookOpen, title: 'Specjalizacja', description: 'Matura rozszerzona' },
    { icon: Heart, title: 'Pasja', description: 'Twój sukces' }
  ];

  return (
    <>
      <Helmet>
        <title>O mnie - MEDULIA | Doświadczona nauczycielka biologii</title>
        <meta name="description" content="Poznaj Marię - doświadczoną nauczycielkę biologii z 8-letnim stażem. Magister biologii z pasją do nauczania. 95% zdawalności matury!" />
      </Helmet>

      {/* Hero with glass panel */}
      <div className="pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center glass-panel p-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">O mnie</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Poznaj osobę, która pomoże Ci osiągnąć sukces na maturze z biologii
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Story Section */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-sm" />
              <img
                src="https://images.unsplash.com/photo-1694266055816-9463a9f53056?w=800"
                alt="Maria - nauczycielka biologii"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white">Witaj! Nazywam się Maria</h2>
              <div className="space-y-3 text-white/80 text-sm leading-relaxed">
                <p>
                  Od dziecka fascynowała mnie biologia. Ta pasja doprowadziła mnie do studiów na UW, gdzie ukończyłam magisterium.
                </p>
                <p>
                  Od 8 lat profesjonalnie przygotowuję uczniów do matury. Przez ten czas pomogłam ponad 150 osobom osiągnąć ich cele.
                </p>
                <p>
                  Wierzę, że kluczem do sukcesu jest indywidualne podejście. Nie jestem tylko nauczycielką - jestem Twoim wsparciem na drodze do sukcesu.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8">
            <SectionTitle>Moje kwalifikacje</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="bg-white/5 rounded-xl p-4 text-center border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Gotowy/a na wspólną pracę?</h2>
            <p className="text-lg text-white/80 mb-6 max-w-xl mx-auto">
              Umów się na bezpłatną konsultację i dowiedz się, jak mogę pomóc Ci osiągnąć wymarzony wynik!
            </p>
            <Link
              to="/zapisy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-105"
            >
              Umów się na konsultację
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;