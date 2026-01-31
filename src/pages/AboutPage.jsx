import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageCircle, Calendar, FileCheck2, Zap } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>O mnie - MEDULIA | Merytoryczne przygotowanie do matury z biologii</title>
        <meta
          name="description"
          content="Poznaj osobę stojącą za MEDULIA. Uczę strategii egzaminacyjnej, języka klucza i zrozumienia biologii zamiast pamięciowego kucia."
        />
      </Helmet>

      {/* MAIN */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Filozofia + Proces (Konkret) */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="glass-panel p-6 md:p-8 space-y-6">
                <SectionTitle>Moja droga i sposób pracy</SectionTitle>

                <div className="text-white/90 text-base leading-relaxed">
                  <p className="mb-4">
                    Nie wierzę w "przerabianie materiału" bez celu. Uczę tak, żebyś rozumiał procesy biologiczne 
                    i potrafił przelać tę wiedzę na papier zgodnie z kluczem maturalnym.
                  </p>
                  
                  <ul className="space-y-3 mt-4">
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-white/80 text-sm md:text-base">
                        <strong className="text-white">Zero lania wody.</strong> Konkretne schematy odpowiedzi pod egzaminatorów CKE.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-white/80 text-sm md:text-base">
                        <strong className="text-white">Strategia zamiast kucia.</strong> Łączę teorię z treningiem zadań i wyłapywaniem pułapek.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-white/80 text-sm md:text-base">
                        <strong className="text-white">Szybki feedback.</strong> Dostajesz jasną informację zwrotną: co poprawić i jak to napisać lepiej.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* ZMIANA: Klasa 'lg:hidden' ukrywa zdjęcie na dużym ekranie */}
                <div className="lg:hidden my-8 rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[3/4] md:aspect-[3/4] relative group shadow-2xl w-full">
                   <img
                     src="https://res.cloudinary.com/dyxif8hyp/image/upload/v1769814722/Projekt_bez_nazwy_38_phctzm.png" 
                     alt="Biologia nauka separator"
                     className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-500"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-transparent to-transparent opacity-80"></div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">Mapa drogowa współpracy</h3>
                  
                  <div className="grid gap-4">
                    {/* Krok 1 */}
                    <div className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-200 font-bold text-sm border border-purple-500/30">1</div>
                        <h4 className="text-white font-semibold flex items-center gap-2">
                          Krótka rozmowa <MessageCircle className="w-4 h-4 text-white/50" />
                        </h4>
                      </div>
                      <p className="text-white/70 text-sm ml-11">
                        Ustalamy Twój cel, obecny poziom i czas do matury. Namierzamy największe trudności.
                      </p>
                    </div>

                    {/* Krok 2 */}
                    <div className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-200 font-bold text-sm border border-blue-500/30">2</div>
                        <h4 className="text-white font-semibold flex items-center gap-2">
                          Plan na 2 tygodnie <Calendar className="w-4 h-4 text-white/50" />
                        </h4>
                      </div>
                      <p className="text-white/70 text-sm ml-11">
                        Dostajesz priorytety i rytm nauki, który jest realny do utrzymania przy szkole.
                      </p>
                    </div>

                    {/* Krok 3 */}
                    <div className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-200 font-bold text-sm border border-yellow-500/30">3</div>
                        <h4 className="text-white font-semibold flex items-center gap-2">
                          Arkusze i szlifowanie <FileCheck2 className="w-4 h-4 text-white/50" />
                        </h4>
                      </div>
                      <p className="text-white/70 text-sm ml-11">
                        Dopieszczamy odpowiedzi pod klucz, żeby nie tracić głupio punktów na maturze.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA w gradiencie */}
                <div className="pt-6">
                    <Link
                    to="/kontakt"
                    className="btn-accent py-2.5 px-6 text-base md:py-2.5 md:px-6 md:text-base rounded-2xl inline-flex items-center justify-center gap-2 font-bold group"
                    >
                    Umów się na pierwszą lekcję
                    <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Ongoing Value + Visuals */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="lg:col-span-5 space-y-6"
            >
              
              {/* Sekcja: Co dostajesz między zajęciami */}
              <div className="glass-panel p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <h3 className="text-lg font-bold text-white">Między zajęciami</h3>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Postęp robi się pracą własną, nie tylko na lekcji. Dlatego dostajesz 
                  prosty system zadań — krótko, konkretnie i do zrobienia.
                </p>

                <div className="space-y-3">
                  <div className="rounded-xl border border-white/5 bg-white/5 p-3 flex gap-3">
                    <div className="w-1 h-full min-h-[40px] bg-purple-500 rounded-full"></div>
                    <div>
                        <div className="text-white font-semibold text-sm">Mini powtórki</div>
                        <div className="text-white/60 text-xs mt-0.5">Schematy + kluczowe definicje w małych porcjach.</div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-3 flex gap-3">
                    <div className="w-1 h-full min-h-[40px] bg-blue-500 rounded-full"></div>
                    <div>
                        <div className="text-white font-semibold text-sm">Zadania "pod klucz"</div>
                        <div className="text-white/60 text-xs mt-0.5">Ćwiczenia na typowe pułapki egzaminatorów.</div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-3 flex gap-3">
                    <div className="w-1 h-full min-h-[40px] bg-green-500 rounded-full"></div>
                    <div>
                        <div className="text-white font-semibold text-sm">Feedback non-stop</div>
                        <div className="text-white/60 text-xs mt-0.5">Wiesz co poprawić, bez zgadywania.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zdjęcia */}
              <div className="grid gap-5">
                {/* Slot na zdjęcie portretowe */}
                <div className="glass-panel p-3">
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 aspect-[3/4] relative group">
                    <img
                      src="https://res.cloudinary.com/dyxif8hyp/image/upload/v1769814988/Projekt_bez_nazwy_39_j3w5z2.png"
                      alt="Medulia - Korepetycje z Biologii"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* FINAL CTA SECTION (Footer) */}
          <div className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="glass-panel p-8 md:p-12 text-center relative overflow-hidden"
            >
              {/* Decorative glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-purple-500/10 blur-[100px] -z-10"></div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Sprawdźmy, czy nadajemy na tych samych falach
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
                Napisz krótko, w jakiej jesteś sytuacji (szkoła, poziom, cel). 
                Bez zobowiązań — po prostu ustalimy, czy jestem w stanie Ci pomóc.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-black/20"
              >
                Napisz do mnie
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;