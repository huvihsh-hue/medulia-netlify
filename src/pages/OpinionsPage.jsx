import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Maximize2, X, ChevronDown, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

// ===== DATA =====
const proofImages = [
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/2c273e46-a225-4aa8-8eb8-5cec120f6b5b_cjmnsf.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198553/b9bf748a-472b-41dc-9523-b3897df6066e_yk3eok.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/9e5e4bf2-82fa-49ae-9aa9-f3404abeb368_klevnq.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/2763f9b7-a383-43b5-a9fb-61f7a4fd5294_mk16na.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/1f883083-329f-4940-a455-2aa453af8981_uyyekj.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/62376121-40b1-4e93-983d-4a8e0f468646_yzib9d.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198555/a7f1c29d-8303-4b64-bcd8-e0a68932f86c_uzo2cu.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198555/e6b97a21-da72-42b4-ba62-891a377f4616_1_utsxhl.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198555/f1ff0dda-360d-4d7c-b22b-dcf8609011de_dzpyww.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/40a08a42-97b4-46eb-b1e7-5b549c262c28_bhaven.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/e1643ecc-efee-4751-a072-ff4db6292b9f_oqjyjj.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/cd51f7ec-a0a3-42ee-baf6-4bd513a8be5f_ejsa84.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/f2a4bb6b-cce8-42d3-9865-25d21f1810f2_faadqk.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/e98343e0-93ff-4eef-947d-1fd20aec2419_uspwjz.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/a5c72514-910e-436e-90cc-e4e5127a7043_nw2oxy.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/3de9a9a3-8b21-4ef0-97bf-60ddfff25e37_h8jgc6.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198555/ba6d6658-b0b9-4957-83b3-5262d61d7132_ay1x5b.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198557/a74272de-4774-4922-8f1b-f9e4f5774bf1_tvkubj.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/e6b97a21-da72-42b4-ba62-891a377f4616_zk60vb.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198557/20735b78-0110-4dfc-b8ea-29a2676f0c37_t0fsve.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198557/000c349f-d533-4ad7-9900-59b22239c5a8_xz1ezr.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/d85766a4-6f82-4db4-b2b5-6754448e9761_dddiyc.jpg",
];

const pickProof = (i) => proofImages[i % proofImages.length];

const opinionsWithPhotos = [
  { name: 'Zuzanna Nowak', city: 'Gdynia', proofImage: pickProof(0), text: 'Z czwórki na próbnej do 98% na prawdziwej. Totalny sztos.' },
  { name: 'Julia Wiśniewska', city: 'Lublin', proofImage: pickProof(1), text: 'W końcu zrozumiałam genetykę i zadania maturalne. Wynik 94%.' },
  { name: 'Martyna Kowalczyk', city: 'Szczecin', proofImage: pickProof(2), text: 'Zero stresu, konkret i plan. Pierwszy raz czułam, że ogarniam materiał.' },
  { name: 'Kinga Lewandowska', city: 'Łódź', proofImage: pickProof(3), text: 'Polecam każdemu, kto celuje w medycynę. Mega prowadzenie.' },
  { name: 'Ola Król', city: 'Poznań', proofImage: pickProof(4), text: 'Najlepsze wytłumaczenie fizjologii roślin, jakie miałam.' },
  { name: 'Natalia Zielińska', city: 'Warszawa', proofImage: pickProof(5), text: 'Zadania CKE w końcu stały się logiczne. Uratowane punkty.' },
  { name: 'Natalia Szymańska', city: 'Kraków', proofImage: pickProof(6), text: 'Plan nauki działa. Bez spiny, a wyniki rosną z tygodnia na tydzień.' },
  { name: 'Wiktoria Nowicka', city: 'Wrocław', proofImage: pickProof(7), text: 'Największy plus: zrozumienie, a nie klepanie definicji.' },
  { name: 'Kinga Kamińska', city: 'Poznań', proofImage: pickProof(8), text: 'Genetyka w 2 godziny. Serio. Wcześniej była czarna magia.' },
  { name: 'Kinga Jabłońska', city: 'Rzeszów', proofImage: pickProof(9), text: 'Materiały są złote, a tłumaczenie proste i konkretne.' },
  { name: 'Wiktoria Lis', city: 'Katowice', proofImage: pickProof(10), text: 'Otworzyły mi się oczy na metabolizm. Od razu lepsze testy.' },
  { name: 'Wiktoria Mazur', city: 'Białystok', proofImage: pickProof(11), text: 'Bardzo ludzkie podejście. Wsparcie + plan = wynik.' },
  { name: 'Amelia Kubiak', city: 'Gdańsk', proofImage: pickProof(12), text: 'W 3 tygodnie nadrobiliśmy pół roku. Bez żartów.' },
  { name: 'Amelia Wróbel', city: 'Opole', proofImage: pickProof(13), text: 'Zajęcia uporządkowały mi cały materiał. Polecam każdemu.' },
  { name: 'Dominika Pawlak', city: 'Toruń', proofImage: pickProof(14), text: 'Najlepszy stosunek jakości do ceny. Konkrety i system.' },
  { name: 'Weronika Kaczmarek', city: 'Bydgoszcz', proofImage: pickProof(15), text: 'Przestałam panikować przed maturą. Wiem co robić.' },
  { name: 'Filipina Grabowska', city: 'Łódź', proofImage: pickProof(16), text: 'Zadania z doświadczeń w końcu są łatwe. Świetne tipy.' },
  { name: 'Sandra Nowak', city: 'Słupsk', proofImage: pickProof(17), text: 'Mega mi pomogły notatki i powtórki. Wszystko w punkt.' },
  { name: 'Karolina Duda', city: 'Gliwice', proofImage: pickProof(18), text: 'Przestałam uczyć się “na pamięć”. Zaczęłam rozumieć.' },
  { name: 'Kamila Michalska', city: 'Olsztyn', proofImage: pickProof(19), text: 'Najlepsze przygotowanie do CKE — typowe pułapki omówione.' },
];

function OpinionsPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_COUNT = 8;
  const displayedOpinions = isExpanded ? opinionsWithPhotos : opinionsWithPhotos.slice(0, INITIAL_COUNT);

  return (
    <>
      <Helmet>
        <title>Opinie uczniów - MEDULIA</title>
        <meta name="description" content="Poznaj opinie moich uczniów. Prawdziwe wiadomości, realne wyniki maturalne i historie sukcesu." />
      </Helmet>

      {/* START: PANEL Z OPINIAMI */}
      <section className="pt-24 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 md:p-8" 
            data-bg="image"
          >
            <SectionTitle>Galeria Sukcesów</SectionTitle>
            <p className="text-center text-white/70 mb-8 text-sm">Kliknij zdjęcie, aby zobaczyć pełną wiadomość.</p>

            <div className="relative">
                <motion.div 
                  layout
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                >
                {displayedOpinions.map((op, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex flex-col gap-3 group cursor-pointer"
                      onClick={() => setSelectedImage(op.proofImage)}
                    >
                        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-[9/16] shadow-lg group-hover:border-purple-500/50 transition-colors duration-300">
                            <img 
                              src={op.proofImage} 
                              alt={`Opinia - ${op.name}`}
                              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                  <Maximize2 className="w-5 h-5 text-white" />
                              </div>
                            </div>
                        </div>

                        <div className="px-1 flex flex-col gap-1">
                            <div className="flex gap-0.5 text-yellow-400 mb-0.5">
                              {[...Array(5)].map((_, i) => (
                                  <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                              ))}
                            </div>
                            <p className="text-white/80 text-xs leading-relaxed line-clamp-3 italic">
                              "{op.text}"
                            </p>
                            <div className="mt-1 border-t border-white/10 pt-1">
                              <div className="text-white font-bold text-xs">{op.name}</div>
                              <div className="text-white/50 text-[10px]">{op.city}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
                </motion.div>

                {/* GRADIENT I PRZYCISK ZOBACZ WIĘCEJ (tylko gdy zwinięte) */}
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#1a0b2e] via-[#1a0b2e]/90 to-transparent flex items-end justify-center z-10 rounded-b-2xl">
                        <button 
                            onClick={() => setIsExpanded(true)}
                            className="group relative flex flex-col items-center gap-2 mb-32" 
                        >
                            <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full group-hover:bg-purple-600/40 transition-all duration-500"></div>
                            <span className="relative text-white font-bold uppercase tracking-widest text-[10px] md:text-sm group-hover:text-purple-200 transition-colors">
                                Zobacz więcej historii
                            </span>
                            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white animate-bounce" />
                            </div>
                        </button>
                    </div>
                )}

                {/* PRZYCISK ZAPISZ SIĘ - dopasowany do szerokości na mobile */}
                <div className={`${!isExpanded ? 'absolute bottom-8 left-0 w-full px-4' : 'mt-8 flex justify-center px-4'} z-20`}>
                    <motion.div 
                        className="w-full max-w-md mx-auto flex justify-center"
                        initial={false}
                        animate={{ scale: isExpanded ? 1.05 : 1 }}
                    >
                        <Link 
                            to="/zapisy" 
                            className="btn-accent w-full sm:w-auto py-3 px-4 md:px-8 rounded-2xl inline-flex items-center justify-center gap-3 font-extrabold group shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all text-sm md:text-base"
                        >
                            Zapisz się na zajęcia 
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-5 right-5 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
                onClick={() => setSelectedImage(null)}
            >
                <X className="w-6 h-6" />
            </button>
            <img 
                src={selectedImage} 
                alt="Pełna opinia" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
      )}
    </>
  );
}

export default OpinionsPage;