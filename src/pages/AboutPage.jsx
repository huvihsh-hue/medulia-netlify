import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BookOpen, ClipboardList, Target } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>O mnie - MEDULIA | Merytoryczne przygotowanie do matury z biologii</title>
        <meta
          name="description"
          content="Poznaj osobę stojącą za MEDULIA i sposób pracy: diagnoza, plan, merytoryka i trening zadań pod klucz odpowiedzi."
        />
      </Helmet>

      {/* HERO */}
      <div className="pt-24 md:pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center glass-panel p-7 md:p-9"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">O mnie</h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Tu ma być spokojna, konkretna historia: kim jestem, skąd doświadczenie i jak uczę, żeby uczeń realnie
              zdobywał punkty na arkuszu — bez chaosu i bez „lania wody”.
            </p>
          </motion.div>
        </div>
      </div>

      {/* MAIN */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="lg:col-span-7"
            >
              <div className="glass-panel p-7 md:p-9 space-y-5">
                <SectionTitle>Moja droga i sposób pracy</SectionTitle>

                <div className="space-y-4 text-white/80 text-sm leading-relaxed">
                  <p>
                    Uczę tak, żeby uczeń rozumiał temat i potrafił to pokazać w odpowiedzi maturalnej. Łączę porządek w
                    teorii z treningiem zadań — zamiast „przerabiania tematów” bez jasnego celu.
                  </p>
                  <p>
                    Zaczynamy od krótkiej diagnozy: co już umiesz, gdzie tracisz punkty i co jest priorytetem. Potem
                    budujemy plan — realny do utrzymania w tygodniu. Na zajęciach pracujemy na schematach, języku
                    odpowiedzi i typowych pułapkach z arkuszy.
                  </p>
                  <p>
                    W trakcie współpracy dostajesz jasne zadania między spotkaniami (małe porcje, żeby dało się to robić)
                    oraz szybki feedback: co poprawić i jak.
                  </p>
                </div>

                {/* How I work */}
                <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white mb-4">Jak pracuję z uczniem</h3>

                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 mb-2 text-white">
                        <Target className="w-5 h-5 text-purple-200" />
                        <div className="font-semibold">Diagnoza</div>
                      </div>
                      <p className="text-white/70 text-sm">Ustalamy punkt startu, cel i najważniejsze braki.</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 mb-2 text-white">
                        <ClipboardList className="w-5 h-5 text-blue-200" />
                        <div className="font-semibold">Plan</div>
                      </div>
                      <p className="text-white/70 text-sm">Priorytety + rytm nauki, który da się utrzymać.</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 mb-2 text-white">
                        <BookOpen className="w-5 h-5 text-yellow-200" />
                        <div className="font-semibold">Arkusze</div>
                      </div>
                      <p className="text-white/70 text-sm">Zadania, klucz, uzasadnienia i typowe pułapki.</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-start gap-2 text-white/75 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-200" />
                    <p>
                      Efekt: wiesz <span className="text-white">co</span> robisz, <span className="text-white">po co</span> to robisz i{' '}
                      <span className="text-white">jak</span> zdobywasz punkty — krok po kroku.
                    </p>
                  </div>
                </div>
              </div>

              {/* WEB ONLY: 2 boxy obok siebie */}
              <div className="hidden lg:grid grid-cols-2 gap-6 mt-6">
                {/* Co dostajesz */}
                <div className="glass-panel p-7">
                  <h3 className="text-lg font-semibold text-white mb-3">Co dostajesz między zajęciami</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Żeby robić postęp, nie wystarczy „jedna godzina w tygodniu”. Dostajesz prosty system między zajęciami —
                    krótko, konkretnie i do zrobienia.
                  </p>

                  <div className="grid gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-white font-semibold mb-1">Mini powtórki</div>
                      <div className="text-white/70 text-sm">Schematy + kluczowe definicje w małych porcjach.</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-white font-semibold mb-1">Zadania pod klucz</div>
                      <div className="text-white/70 text-sm">Ćwiczenia na typowe pułapki i język odpowiedzi.</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-white font-semibold mb-1">Feedback</div>
                      <div className="text-white/70 text-sm">Co poprawić i jak — bez zgadywania.</div>
                    </div>
                  </div>
                </div>

                {/* Jak zaczynamy */}
                <div className="glass-panel p-7">
                  <h3 className="text-lg font-semibold text-white mb-3">Jak zaczynamy?</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Na start robię krótką diagnozę i układam plan nauki pod Twój cel. Dostajesz konkretne kroki:
                    co powtarzać, jakie zadania robić i jak poprawiać odpowiedzi pod klucz.
                  </p>

                  <div className="grid gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-white font-semibold mb-1">1) Krótka rozmowa</div>
                      <div className="text-white/70 text-sm">Cel, poziom, czas do matury, największe trudności.</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-white font-semibold mb-1">2) Plan na 2 tygodnie</div>
                      <div className="text-white/70 text-sm">Priorytety + rytm, który da się utrzymać.</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-white font-semibold mb-1">3) Arkusze i feedback</div>
                      <div className="text-white/70 text-sm">Dopieszczamy odpowiedzi, żeby nie tracić punktów.</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              {/* MOBILE kolejność: zdj1 -> co dostajesz -> zdj2 -> jak zaczynamy -> zdj3 */}
              <div className="grid gap-5">
                {/* Zdjęcie 1 */}
                <div className="glass-panel p-4">
                  <div className="rounded-2xl bg-white/5 border border-dashed border-white/20 aspect-[4/3] flex items-center justify-center text-white/60 text-sm">
                    Placeholder zdjęcia 1 (np. przy pracy / tablica)
                  </div>
                </div>

                {/* MOBILE: Co dostajesz (po zdj1) */}
                <div className="lg:hidden">
                  <div className="glass-panel p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Co dostajesz między zajęciami</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      Żeby robić postęp, nie wystarczy „jedna godzina w tygodniu”. Dostajesz prosty system między
                      zajęciami — krótko, konkretnie i do zrobienia.
                    </p>

                    <div className="grid gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="text-white font-semibold mb-1">Mini powtórki</div>
                        <div className="text-white/70 text-sm">Schematy + kluczowe definicje w małych porcjach.</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="text-white font-semibold mb-1">Zadania pod klucz</div>
                        <div className="text-white/70 text-sm">Ćwiczenia na typowe pułapki i język odpowiedzi.</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="text-white font-semibold mb-1">Feedback</div>
                        <div className="text-white/70 text-sm">Co poprawić i jak — bez zgadywania.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Zdjęcie 2 */}
                <div className="glass-panel p-4">
                  <div className="rounded-2xl bg-white/5 border border-dashed border-white/20 aspect-[4/3] flex items-center justify-center text-white/60 text-sm">
                    Placeholder zdjęcia 2 (np. biurko + materiały)
                  </div>
                </div>

                {/* MOBILE: Jak zaczynamy (po zdj2) */}
                <div className="lg:hidden">
                  <div className="glass-panel p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Jak zaczynamy?</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      Na start robię krótką diagnozę i układam plan nauki pod Twój cel. Dostajesz konkretne kroki:
                      co powtarzać, jakie zadania robić i jak poprawiać odpowiedzi pod klucz.
                    </p>

                    <div className="grid gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="text-white font-semibold mb-1">1) Krótka rozmowa</div>
                        <div className="text-white/70 text-sm">Cel, poziom, czas do matury, największe trudności.</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="text-white font-semibold mb-1">2) Plan na 2 tygodnie</div>
                        <div className="text-white/70 text-sm">Priorytety + rytm, który da się utrzymać.</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="text-white font-semibold mb-1">3) Arkusze i feedback</div>
                        <div className="text-white/70 text-sm">Dopieszczamy odpowiedzi, żeby nie tracić punktów.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Zdjęcie 3 (ostatnie na mobile) */}
                <div className="glass-panel p-4">
                  <div className="rounded-2xl bg-white/5 border border-dashed border-white/20 aspect-[4/3] flex items-center justify-center text-white/60 text-sm">
                    Placeholder zdjęcia 3 (portret profesjonalny)
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="glass-panel p-7 md:p-9 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Chcesz sprawdzić, jaki tryb nauki będzie najlepszy?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-6">
                Napisz krótko, w jakiej jesteś sytuacji (szkoła, poziom, cel). Zaproponuję kierunek i kolejne kroki.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]"
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
