import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import { Download, CheckCircle2 } from 'lucide-react';

function MaterialsPage() {
  const materials = [
    {
      title: "Metabolizm",
      desc: "Kompletny przewodnik po procesach.",
      link: "https://drive.google.com/file/d/1LcFjDDSHxyW6VsCNNtpfPVIL2frEJadW/view?usp=drive_link",
      // TODO: podmień na realne URL-e (3 miniatury stron PDF)
      previews: [
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769096122/3_ejqxtr.png",
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769096122/4_zu1mmt.png",
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769096122/5_sootg9.png",
      ],
    },
    {
      title: "Plan maturalny",
      desc: "Szczegółowy harmonogram nauki.",
      link: "https://drive.google.com/file/d/1Bgngdk0wNAH_rHXYdL16c7O_Airno94X/view?usp=drive_link",
      previews: [
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769104949/ipad_grafiki_zvf9pe.png",
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769104950/5_xkv60z.png",
      ],
    },
    {
      title: "Pytania sprawdzające",
      desc: "Zestaw do samodzielnej pracy.",
      link: "https://drive.google.com/file/d/1Szx0nKs4l2rtcG9jP9LLO-v3jWcenhvV/view?usp=drive_link",
      previews: [
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769104665/6_q9wzxo.png",
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769104666/7_pxzxup.png",
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769104668/8_xvepb6.png",
      ],
    },
    {
      title: "Zadanie domowe",
      desc: "Ćwiczenia praktyczne.",
      link: "https://drive.google.com/file/d/1s90hS6X0aVSNM5w-YW4OyNYgnV2YYTDw/view",
      previews: [
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769082868/Projekt_bez_nazwy_24_jjkyvd.png",
        "PASTE_PREVIEW_URL_2",
        "PASTE_PREVIEW_URL_3",
      ],
    }
  ];

  const benefits = [
    "Schematy i ryciny omawiane krok po kroku",
    "Pytania w stylu maturalnym + typowe pułapki",
    "Zadania do samodzielnego przećwiczenia po lekcji",
    "Materiały spójne z tym, jak tłumaczę na zajęciach",
  ];

  return (
    <>
      <Helmet>
        <title>Materiały - MEDULIA</title>
        <meta name="description" content="Darmowe materiały do matury z biologii: notatki, zadania, harmonogramy." />
      </Helmet>

      {/* HERO / header */}
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

      {/* CONTENT */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 md:p-8" data-bg="image">
            <SectionTitle>Darmowe materiały</SectionTitle>

            {/* 3) „Co dokładnie dostaniesz?” */}
            <div className="mt-6 md:mt-8">
              <p className="text-white/80 text-sm md:text-base max-w-3xl mx-auto text-center">
                Materiały, na których realnie pracujemy na zajęciach — bez lania wody, jasno i dokładnie pod maturę.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-4 flex gap-3"
                  >
                    <div className="mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-purple-300" />
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed font-semibold">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4) Mini-galeria stron + pobieranie */}
            <div className="mt-10 md:mt-12 space-y-10 md:space-y-12">
              {materials.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[22px] border border-white/12 bg-white/5 backdrop-blur-md p-5 md:p-7"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-10 items-center">
                    {/* Mini-galeria */}
                    <div>
                      <div
                        className="
                          flex gap-3 overflow-x-auto no-scrollbar
                          snap-x-mandatory
                          py-1
                        "
                      >
                        {/* Mobile: tylko 1 preview (pierwszy URL) */}
<div className="sm:hidden">
  {(item.previews || []).slice(0, 1).map((src, pIdx) => (
    <div
      key={pIdx}
      className="w-full rounded-2xl overflow-hidden bg-transparent"
    >
      <img
        src={src}
        alt={`${item.title} – podgląd strony 1`}
        className="w-full h-auto object-contain select-none pointer-events-none"
        loading="lazy"
      />
    </div>
  ))}
</div>

{/* Tablet/Desktop: 3 preview obok siebie */}
<div
  className="
    hidden sm:flex gap-3 overflow-x-auto no-scrollbar
    snap-x-mandatory py-1
  "
>
  {(item.previews || []).slice(0, 3).map((src, pIdx) => (
    <div
      key={pIdx}
      className="
        snap-center
        flex-none
        w-[45%] lg:w-[32%]
        rounded-2xl
        overflow-hidden
        bg-transparent
      "
    >
      <img
        src={src}
        alt={`${item.title} – podgląd strony ${pIdx + 1}`}
        className="w-full h-auto object-contain select-none pointer-events-none"
        loading="lazy"
      />
    </div>
  ))}
</div>

                      </div>

                      <p className="mt-3 text-xs text-white/55">
                      
                      </p>
                    </div>

                    {/* Opis + CTA */}
                    <div>
                      <h3 className="text-white text-xl md:text-2xl font-extrabold font-accent">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-white/70 text-sm md:text-base leading-relaxed">
                        {item.desc}
                      </p>

                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex w-full sm:w-auto items-center justify-center gap-2 btn-accent py-3 px-6 text-sm md:text-base"
                      >
                        <Download className="w-4 h-4" />
                        Pobierz PDF
                      </a>

                      <p className="mt-3 text-xs text-white/55">
                        Otworzy się w nowej karcie (Google Drive).
                      </p>
                    </div>
                  </div>
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
