import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Target,
  Zap,
  Heart,
  Users,
  CheckCircle,
  Download,
  ChevronRight,
  FileText,
  Phone,
  GraduationCap,
  UserRound,
  Package,
} from 'lucide-react';

import SectionTitle from '@/components/SectionTitle';
import OpinionsMarquee from '@/components/OpinionsMarquee';
import ContactForm from '@/components/ContactForm';
import BlogCard from '@/components/BlogCard';

// ===== HERO (podmień na swoje) =====
const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=900&auto=format&fit=crop&q=70';

const opinionsData = [
  { name: 'Anna Kowalska', city: 'Warszawa', text: 'Zdałam maturę na 92%! Polecam z całego serca.', videoThumbnail: null },
  { name: 'Piotr Nowak', city: 'Kraków', text: 'Genialne podejście do ucznia, zero stresu.', videoThumbnail: 'https://images.unsplash.com/photo-1543295653-e86ee2932f69?w=400' },
  { name: 'Kasia Wiśniewska', city: 'Gdańsk', text: 'Materiały są złote, same konkrety pod CKE.', videoThumbnail: null },
  { name: 'Marek Wójcik', city: 'Wrocław', text: 'Najlepsza decyzja w klasie maturalnej.', videoThumbnail: null },
  { name: 'Julia Kamińska', city: 'Poznań', text: 'Zrozumiałam genetykę w 2 godziny. Magia!', videoThumbnail: 'https://images.unsplash.com/photo-1694266055816-9463a9f53056?w=400' },
  { name: 'Tomek Lewandowski', city: 'Łódź', text: 'Polecam każdemu kto celuje w medycynę.', videoThumbnail: null },
];

const blogPosts = [
  { title: 'Jak zaplanować powtórki?', excerpt: 'Plan na ostatnie 3 miesiące.', date: '12.01.2026', category: 'Strategie', slug: 'planowanie-powtorek' },
  { title: 'Błędy maturalne', excerpt: 'Nie trać punktów na głupotach.', date: '05.01.2026', category: 'Błędy', slug: 'bledy-maturalne' },
  { title: 'Metabolizm w pigułce', excerpt: 'Kluczowe schematy.', date: '28.12.2025', category: 'Wiedza', slug: 'metabolizm-schematy' },
];

const freeMaterials = [
  { title: "Metabolizm", desc: "Kompletny przewodnik po procesach.", link: "https://drive.google.com/file/d/1kV4x497QlhZdvUdn9qN1wlMnK75YZ0zI/view" },
  { title: "Plan maturalny", desc: "Szczegółowy harmonogram nauki.", link: "https://drive.google.com/file/d/1d4CH1nlCSQ8g7jD1mYWl_l3RUSlB_XNs/view" },
  { title: "Pytania sprawdzające", desc: "Zestaw do samodzielnej pracy.", link: "https://drive.google.com/file/d/1jNUKSEWeplR9pgdQV-nluwYR1vM4xNWb/view" },
  { title: "Zadanie domowe", desc: "Ćwiczenia praktyczne.", link: "https://drive.google.com/file/d/1s90hS6X0aVSNM5w-YW4OyNYgnV2YYTDw/view" }
];

const benefits = [
  { no: '1.', title: 'Fachową pomoc doświadczonego nauczyciela i laureata wielu konkursów' },
  { no: '2.', title: 'Indywidualne podejście i tempo nauki dopasowane do Twoich potrzeb' },
  { no: '3.', title: 'Wiedzę praktyczną przydatną na sprawdzianach i na maturze' },
  { no: '4.', title: 'Stały dostęp do nagrań lekcji, żeby powtarzać materiał w dowolnym momencie' }
];

const offerTypesCompact = [
  { title: 'Indywidualne Premium – ze mną', to: '/oferta/indywidualne-premium', icon: GraduationCap },
  { title: 'Indywidualne – z pracownikami', to: '/oferta/indywidualne-pracownicy', icon: UserRound },
  { title: 'Grupowe – ze mną', to: '/oferta/grupowe-ze-mna', icon: Users },
  { title: 'Pakiety miesięczne – grupowe', to: '/oferta/pakiety-grupowe', icon: Package },
];

function HomePage() {
  return (
    <>
      <Helmet>
        <title>MEDULIA - Matura z biologii na 100% | Zapisy 2026/2027</title>
        <meta
          name="description"
          content="Profesjonalne przygotowanie do matury z biologii. Zajęcia indywidualne, grupowe i materiały edukacyjne. Dołącz do setek zadowolonych uczniów."
        />
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="relative pt-20 md:pt-28 pb-10 md:pb-16 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-purple-500/25 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft" />
        <div
          className="absolute top-40 left-[10%] w-72 h-72 bg-blue-500/25 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft"
          style={{ animationDelay: '2s' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="hero-split">
            {/* ✅ NA MOBILE: najpierw zdjęcie */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-figure-wrap order-1 lg:order-2"
            >
              <div className="hero-figure">
                <div className="hero-ring" aria-hidden="true" />
                <img
                  src={HERO_IMAGE_URL}
                  alt="MEDULIA - korepetycje"
                  className="hero-figure-img"
                />

                <a href="tel:+48792074768" className="hero-phone">
                  <Phone className="w-4 h-4" />
                  792 074 768
                </a>
              </div>
            </motion.div>

            {/* ✅ NA MOBILE: potem box */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-card order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold mb-4">
                🎓 Zapisy 2026/2027 otwarte!
              </div>

              <h1 className="hero-title">
                Biologia na <span className="text-gradient">100%</span>
              </h1>

              <p className="hero-subtitle">
                Bez stresu i wkuwania. Zrozumienie, które buduje wynik.
              </p>

              <div className="hero-proof">
                <span className="hero-proof-pill">✅ Indywidualny plan</span>
                <span className="hero-proof-dot" />
                <span className="hero-proof-pill">📌 Materiały CKE</span>
                <span className="hero-proof-dot" />
                <span className="hero-proof-pill">💬 Stały kontakt</span>
              </div>

              <div className="hero-cta">
                <Link to="/zapisy" className="btn-accent inline-flex items-center justify-center gap-2">
                  Umów korepetycje <ArrowRight className="w-5 h-5" />
                </Link>

                <Link to="/oferta" className="hero-ghost-btn inline-flex items-center justify-center">
                  Oferta
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: BENEFITS */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel" data-bg="image">
            <div className="benefits-grid">
              <div>
                <h2 className="benefits-title">
  <span className="text-gradient">Co zyskujesz na</span> zajęciach ze mną?
</h2>

                <p className="benefits-subtitle">
                  Konkretne efekty — bez stresu, bez lania wody, z planem pod Ciebie.
                </p>
              </div>

              <div className="benefits-list">
                {benefits.map((b) => (
                  <div key={b.no} className="benefit-row">
                    <div className="benefit-no">{b.no}</div>
                    <div className="benefit-text">{b.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VALUES */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel" data-bg="image">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative order-1">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-400/20 via-blue-400/20 to-transparent rounded-full blur-3xl -z-10" />
                <img
                  src="https://res.cloudinary.com/dyxif8hyp/image/upload/v1768865222/Projekt_bez_nazwy_5_adwhyx.png"
                  alt="Julia - MEDULIA"
                  className="w-full max-w-[320px] md:max-w-[420px] mx-auto lg:mx-0 drop-shadow-2xl relative z-10"
                />
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 order-2">
                <SectionTitle className="!text-left !mb-6" center={false}>Dlaczego ja?</SectionTitle>
                <p className="text-white/80 mb-8 leading-relaxed text-sm">
                  Uczę biologii tak, żebyś rozumiał/a, a nie kuł/a. Jestem praktykiem z wynikami.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Target, title: 'Plan', desc: 'Dostosowany do Ciebie.' },
                    { icon: Zap, title: 'Logika', desc: 'Zero wkuwania na pamięć.' },
                    { icon: Heart, title: 'Wsparcie', desc: 'Jesteśmy w tym razem.' },
                    { icon: Users, title: 'Wynik', desc: 'Celujemy w 90%+.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-white">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TYPES (Home: tylko lista + CTA) */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel overflow-hidden" data-bg="image">
            <SectionTitle>Rodzaje zajęć</SectionTitle>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {offerTypesCompact.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/7 transition-all p-4 md:p-5 flex items-center justify-between gap-3"
                >
                  {/* ✅ min-w-0 żeby tytuł mógł się zawijać/ucinać poprawnie */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white/85" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-white font-semibold text-sm md:text-base leading-snug line-clamp-2">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  {/* ✅ prawa strona zawsze w 1 linii */}
                  <div className="inline-flex items-center gap-2 text-white/70 group-hover:text-white transition-colors text-sm font-semibold flex-shrink-0 whitespace-nowrap">
                    Zobacz szczegóły <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/oferta" className="btn-accent inline-flex items-center justify-center gap-2">
                Zobacz ofertę <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/zapisy" className="hero-ghost-btn inline-flex items-center justify-center">
                Zapisz się
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FREE MATERIALS */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 md:p-8" data-bg="image">
            <SectionTitle>Darmowe materiały</SectionTitle>
            <p className="text-center text-white/70 mb-8 max-w-2xl mx-auto text-sm">
              Pobierz przykładowe notatki i zadania. Sprawdź, jak uczę!
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {freeMaterials.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="card-pdf"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex-grow">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                      <FileText className="w-5 h-5 text-purple-400" />
                    </div>
                    <h4 className="font-bold text-white text-sm md:text-base mb-2 font-accent">{item.title}</h4>
                    <p className="text-white/60 text-xs md:text-sm mb-4 line-clamp-3">{item.desc}</p>
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OPINIONS MARQUEE */}
      {/* ✅ trochę niżej na mobile */}
      <section className="pt-12 pb-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-4 md:p-8" data-bg="image">
            <SectionTitle>Opinie</SectionTitle>
            <p className="text-center text-white/80 mb-4 text-sm">Prawdziwe historie.</p>
            <OpinionsMarquee opinions={opinionsData} />
            <div className="text-center mt-4">
              <Link to="/opinie" className="inline-flex items-center text-white font-semibold hover:text-white/80 text-sm">
                Więcej opinii <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: MY STORY */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-sm" />
              <img
                src="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=800"
                alt="Maria - Nauczycielka"
                className="relative rounded-2xl shadow-xl max-h-[400px] w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 glass-panel p-6 md:p-8" data-bg="image">
              <SectionTitle className="!text-left" center={false}>Moja misja</SectionTitle>
              <div className="prose prose-sm text-white/80 mt-4 space-y-3">
                <p>
                  Biologia to sposób patrzenia na świat. Nie ucz się na pamięć – zrozum mechanizmy.
                </p>
                <p>
                  Na moich zajęciach nie ma głupich pytań. Błąd to okazja do nauki.
                </p>
              </div>
              <Link
                to="/o-mnie"
                className="mt-6 inline-flex items-center text-white font-bold hover:text-white/80 transition-all group text-sm"
              >
                Poznaj mnie <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: SIGNUP */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="glass-panel p-6 md:p-8 h-full" data-bg="image">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Zawalcz o 100%</h2>
              <p className="text-white/80 mb-6 leading-relaxed text-sm">
                Liczba miejsc ograniczona. Decyduje kolejność zgłoszeń.
              </p>
              <ul className="space-y-3 mb-6">
                {['Indywidualne podejście', 'Autorskie materiały', 'Stały kontakt'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-300">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel p-6" data-bg="image">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
