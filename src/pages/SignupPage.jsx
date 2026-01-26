import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, MessageCircle, Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

function SignupPage() {
  const steps = [
    { icon: MessageCircle, title: 'Wypełnij formularz', description: 'Podaj dane i opisz potrzeby.' },
    { icon: Clock, title: 'Umów konsultację', description: 'Odezwę się w 24h i ustalimy termin rozmowy.' },
    { icon: CalendarIcon, title: 'Zaplanuj zajęcia', description: 'Ustalimy harmonogram i zaczniemy naukę.' },
    { icon: CheckCircle, title: 'Osiągnij cel', description: 'Z moim wsparciem zdasz maturę na wymarzony wynik.' }
  ];

  const faqs = [
    { question: 'Kiedy mogę zacząć zajęcia?', answer: 'Zazwyczaj w ciągu tygodnia od wypełnienia formularza (zależy od dostępności).' },
    { question: 'Ile kosztuje pierwsza lekcja?', answer: 'Pierwsza lekcja próbna kosztuje 50% standardowej ceny (60 zł za indywidualne).' },
    { question: 'Czy mogę zmienić termin zajęć?', answer: 'Tak — wystarczy informacja min. 24h wcześniej.' },
    { question: 'Czy są dostępne miejsca?', answer: 'Liczba miejsc jest ograniczona — im szybciej, tym większa szansa na termin.' }
  ];

  const pills = ['Odpowiedź w 24h', 'Ograniczona liczba miejsc', 'Plan nauki + materiały'];

  return (
    <>
      <Helmet>
        <title>Zapisy na zajęcia - MEDULIA | 2026/2027</title>
        <meta name="description" content="Zapisz się na korepetycje z biologii na rok 2026/2027. Ograniczona liczba miejsc!" />
      </Helmet>

      {/* HERO */}
      <section className="pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-8 md:p-10 text-center"
            data-bg="image"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/85 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-purple-300/90" />
              Rekrutacja 2026/2027
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Zapisy na zajęcia 2026/2027
            </h1>

            <p className="mt-4 text-base md:text-xl text-white/80 max-w-3xl mx-auto">
              Zacznij przygotowania do matury z biologii z wyprzedzeniem — dostajesz plan, materiały i jasne prowadzenie.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {pills.map((t) => (
                <span
                  key={t}
                  className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#formularz" className="btn-accent inline-flex items-center justify-center gap-2">
                Zarezerwuj miejsce <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#proces" className="hero-ghost-btn inline-flex items-center justify-center gap-2">
                Jak to działa? <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-6 text-sm text-white/65">
              Wypełnienie formularza <span className="text-white/85 font-semibold">nie zobowiązuje</span> do zapisu.
            </div>
          </motion.div>
        </div>
      </section>

      {/* FORMULARZ */}
      <section id="formularz" className="py-6 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 md:p-8" data-bg="image">
            <SectionTitle>Formularz zapisu</SectionTitle>
            <p className="text-center text-white/70 text-sm md:text-base mt-4 mb-8">
              Zostaw kontakt — odezwę się w ciągu <span className="text-white/85 font-semibold">24 godzin</span>.
            </p>

            <ContactForm hideClass hideCity />
          </div>
        </div>
      </section>

      {/* PROCES */}
      <section id="proces" className="py-6 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 md:p-8" data-bg="image">
            <SectionTitle>Co stanie się po wysłaniu formularza?</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 hover:border-white/20 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-white/85" />
                    </div>
                    <div className="text-white/70 text-sm font-semibold">Krok {index + 1}</div>
                  </div>

                  <h3 className="mt-4 text-lg font-extrabold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-6 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 md:p-8" data-bg="image">
            <SectionTitle>Najczęściej zadawane pytania</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6"
                >
                  <h3 className="text-base font-extrabold text-white mb-2">{faq.question}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 md:p-8 text-center" data-bg="image">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Nie czekaj do ostatniej chwili</h2>
            <p className="mt-3 text-white/75 md:text-lg">
              Im wcześniej zaczniesz, tym spokojniej zrobimy plan i nadrobimy braki.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-stretch">
              {[
                { big: '5', small: 'Pozostało miejsc' },
                { big: '150+', small: 'Zadowolonych uczniów' },
                { big: '95%', small: 'Zdawalność' },
              ].map((s) => (
                <div key={s.small} className="rounded-2xl bg-white/5 border border-white/10 px-6 py-4 min-w-[180px]">
                  <div className="text-3xl font-extrabold text-white">{s.big}</div>
                  <div className="text-sm text-white/70">{s.small}</div>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <a href="#formularz" className="btn-accent inline-flex items-center justify-center gap-2">
                Zarezerwuj miejsce <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignupPage;
