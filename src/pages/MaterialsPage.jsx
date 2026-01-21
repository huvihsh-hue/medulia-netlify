import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import { Download, FileText } from 'lucide-react';

function MaterialsPage() {
  const materials = [
    { title: "Metabolizm", desc: "Kompletny przewodnik po procesach.", link: "https://drive.google.com/file/d/1kV4x497QlhZdvUdn9qN1wlMnK75YZ0zI/view" },
    { title: "Plan maturalny", desc: "Szczegółowy harmonogram nauki.", link: "https://drive.google.com/file/d/1d4CH1nlCSQ8g7jD1mYWl_l3RUSlB_XNs/view" },
    { title: "Pytania sprawdzające", desc: "Zestaw do samodzielnej pracy.", link: "https://drive.google.com/file/d/1jNUKSEWeplR9pgdQV-nluwYR1vM4xNWb/view" },
    { title: "Zadanie domowe", desc: "Ćwiczenia praktyczne.", link: "https://drive.google.com/file/d/1s90hS6X0aVSNM5w-YW4OyNYgnV2YYTDw/view" }
  ];

  return (
    <>
      <Helmet>
        <title>Materiały - MEDULIA</title>
        <meta name="description" content="Darmowe materiały do matury z biologii: notatki, zadania, harmonogramy." />
      </Helmet>

      <div className="pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center glass-panel p-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Materiały</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Pobierz darmowe pliki i zobacz, jak pracujemy na zajęciach.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 md:p-8" data-bg="image">
            <SectionTitle>Darmowe materiały</SectionTitle>

            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {materials.map((item, idx) => (
                <div key={idx} className="card-pdf">
                  <div className="flex-grow">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                      <FileText className="w-5 h-5 text-purple-400" />
                    </div>
                    <h4 className="font-bold text-white text-sm md:text-base mb-2 font-accent">
                      {item.title}
                    </h4>
                    <p className="text-white/60 text-xs md:text-sm mb-4 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full btn-accent py-2 flex items-center justify-center gap-2 text-xs md:text-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Pobierz
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MaterialsPage;
