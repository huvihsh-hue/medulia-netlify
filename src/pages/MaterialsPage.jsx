import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import { Download, CheckCircle2 } from 'lucide-react';

function MaterialsPage() {
  const materials = [
    {
      title: "Podstawa programowa – Biologia 2025/26",
      desc: "Co dokładnie obowiązuje na maturze w tym roku? (CKE) – idealne na start.",
      link: "https://drive.google.com/file/d/1MzZsdCY2cwAbA-fJBPVLsLIag-2znoJZ/view?usp=drive_link",
      previews: [
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769697796/12_pm7rsk.png",
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769697797/14_qqdeer.png",
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769697796/13_swe6jx.png",
      ],
    },
    {
      title: "Metabolizm",
      desc: "Kompletny przewodnik po procesach.",
      link: "https://drive.google.com/file/d/1LcFjDDSHxyW6VsCNNtpfPVIL2frEJadW/view?usp=drive_link",
      previews: [
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769096122/3_ejqxtr.png",
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769096122/4_zu1mmt.png",
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769096122/5_sootg9.png",
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
      title: "Matura rozszerzona",
      desc: "Materiały do matury rozszerzonej – konkretne wymagania i przykłady.",
      link: "https://drive.google.com/file/d/1NQr6KscUxVJEhJQumNn9DDv7RHkUHWFQ/view?usp=drive_link",
      previews: [
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769697805/9_y0edsb.png",
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769697805/11_rzpgco.png",
        "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769697805/10_tym8f3.png",
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
        <title>Darmowe Notatki z Biologii do Matury - PDF | MEDULIA</title>
        <meta name="description" content="Pobierz darmowe materiały do matury z biologii: notatki z metabolizmu, arkusze CKE, plan nauki i pytania sprawdzające. Ucz się skutecznie." />
      </Helmet>

      {/* CONTENT */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="p-6 md:p-8"
            data-bg="image"
            style={{ backdropFilter: 'none' }}
          >
            <SectionTitle>Darmowe materiały</SectionTitle>

            <div className="mt-6 md:mt-8">
              <p className="text-white/80 text-sm md:text-base max-w-3xl mx-auto text-center">
                Materiały, na których realnie pracujemy na zajęciach — bez lania wody, jasno i dokładnie pod maturę.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white/5 backdrop-blur-[3px] p-4 flex gap-3"
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

            <div className="mt-10 md:mt-12 space-y-10 md:space-y-12">
              {materials.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[22px] border border-white/5 bg-white/5 backdrop-blur-[2px] p-5 md:p-7"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-10 items-center">
                    {/* Mini-galeria */}
                    <div>
                      <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x-mandatory py-1">
                        {/* Mobile: tylko 1 preview */}
                        <div className="sm:hidden w-full">
                          {(item.previews || []).slice(0, 1).map((src, pIdx) => (
                            <div key={pIdx} className="w-full rounded-2xl overflow-hidden bg-transparent">
                              <img
                                src={src}
                                alt={`${item.title} – podgląd strony 1`}
                                className="w-full h-auto object-contain select-none pointer-events-none"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Tablet/Desktop: 3 preview */}
                        <div className="hidden sm:flex gap-3 w-full">
                          {(item.previews || []).slice(0, 3).map((src, pIdx) => (
                            <div key={pIdx} className="snap-center flex-none w-[45%] lg:w-[32%] rounded-2xl overflow-hidden bg-transparent">
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