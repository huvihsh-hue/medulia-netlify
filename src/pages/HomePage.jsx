import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Target,
  Zap,
  Heart,
  Users,
  CheckCircle,
  ChevronRight,
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

// stabilne przypisanie “losowego” zdjęcia po indeksie
const pickProof = (i) => proofImages[i % proofImages.length];

const opinionsData = [
  { name: 'Zuzanna Nowak', city: 'Gdynia', text: 'Z czwórki na próbnej do 98% na prawdziwej. Totalny sztos.', proofImage: pickProof(0) },
  { name: 'Julia Wiśniewska', city: 'Lublin', text: 'W końcu zrozumiałam genetykę i zadania maturalne. Wynik 94%.', proofImage: pickProof(1) },
  { name: 'Martyna Kowalczyk', city: 'Szczecin', text: 'Zero stresu, konkret i plan. Pierwszy raz czułam, że ogarniam materiał.', proofImage: pickProof(2) },
  { name: 'Kinga Lewandowska', city: 'Łódź', text: 'Polecam każdemu, kto celuje w medycynę. Mega prowadzenie.', proofImage: pickProof(3) },
  { name: 'Ola Król', city: 'Poznań', text: 'Najlepsze wytłumaczenie fizjologii roślin, jakie miałam.', proofImage: pickProof(4) },
  { name: 'Natalia Zielińska', city: 'Warszawa', text: 'Zadania CKE w końcu stały się logiczne. Uratowane punkty.', proofImage: pickProof(5) },
  { name: 'Natalia Szymańska', city: 'Kraków', text: 'Plan nauki działa. Bez spiny, a wyniki rosną z tygodnia na tydzień.', proofImage: pickProof(6) },
  { name: 'Wiktoria Nowicka', city: 'Wrocław', text: 'Największy plus: zrozumienie, a nie klepanie definicji.', proofImage: pickProof(7) },
  { name: 'Julia Kamińska', city: 'Poznań', text: 'Genetyka w 2 godziny. Serio. Wcześniej była czarna magia.', proofImage: pickProof(8) },
  { name: 'Kinga Jabłońska', city: 'Rzeszów', text: 'Materiały są złote, a tłumaczenie proste i konkretne.', proofImage: pickProof(9) },
  { name: 'Wiktoria Lis', city: 'Katowice', text: 'Otworzyły mi się oczy na metabolizm. Od razu lepsze testy.', proofImage: pickProof(10) },
  { name: 'Wiktoria Mazur', city: 'Białystok', text: 'Bardzo ludzkie podejście. Wsparcie + plan = wynik.', proofImage: pickProof(11) },
  { name: 'Amelia Kubiak', city: 'Gdańsk', text: 'W 3 tygodnie nadrobiliśmy pół roku. Bez żartów.', proofImage: pickProof(12) },
  { name: 'Amelia Wróbel', city: 'Opole', text: 'Zajęcia uporządkowały mi cały materiał. Polecam każdemu.', proofImage: pickProof(13) },
  { name: 'Dominika Pawlak', city: 'Toruń', text: 'Najlepszy stosunek jakości do ceny. Konkrety i system.', proofImage: pickProof(14) },
  { name: 'Weronika Kaczmarek', city: 'Bydgoszcz', text: 'Przestałam panikować przed maturą. Wiem co robić.', proofImage: pickProof(15) },
  { name: 'Paulina Grabowska', city: 'Łódź', text: 'Zadania z doświadczeń w końcu są łatwe. Świetne tipy.', proofImage: pickProof(16) },
  { name: 'Sandra Nowak', city: 'Słupsk', text: 'Mega mi pomogły notatki i powtórki. Wszystko w punkt.', proofImage: pickProof(17) },
  { name: 'Karolina Duda', city: 'Gliwice', text: 'Przestałam uczyć się “na pamięć”. Zaczęłam rozumieć.', proofImage: pickProof(18) },
  { name: 'Kamila Michalska', city: 'Olsztyn', text: 'Najlepsze przygotowanie do CKE — typowe pułapki omówione.', proofImage: pickProof(19) },

  { name: 'Maja Czarnecka', city: 'Lublin', text: 'Bardzo dobre tempo i tłumaczenie “jak człowiek”.' },
  { name: 'Ala Wójcik', city: 'Wrocław', text: 'Wynik rośnie, bo w końcu mam plan i kontrolę.' },
  { name: 'Tola Majewska', city: 'Łódź', text: 'Pierwszy raz czułam, że mam kontrolę nad powtórkami, a nie chaos.' },

  { name: 'Szymon Pędzin', city: 'Kraków', text: 'Zadania z doświadczeń w końcu przestały mnie zabijać. Mega konkrety.' },
  { name: 'Mateusz Grabowski', city: 'Warszawa', text: 'Dostałem jasny plan i checklistę – tak powinno się uczyć do matury.' },
  { name: 'Kacper Olsza', city: 'Poznań', text: 'Najlepsze było to, że każdy błąd był omówiony “dlaczego”, nie tylko “źle”.' },
  { name: 'Oskar Jakubowski', city: 'Gdańsk', text: 'Genetyka i krzyżówki – pierwszy raz ogarniam to bez stresu.' },
  { name: 'Jakub Grzybek', city: 'Wrocław', text: 'Różnica po miesiącu była widoczna w testach. Polecam.' },
  { name: 'Filip Znicz', city: 'Łódź', text: 'W końcu uczę się mądrze, a nie dużo. Wynik rośnie.' },
  { name: 'Dominik Zając', city: 'Toruń', text: 'Najbardziej doceniam porządek: co, kiedy i po co robię.' },
  { name: 'Patryk Leszko', city: 'Katowice', text: 'Nareszcie rozumiem metabolizm i widzę schematy w zadaniach.' },
  { name: 'Michał Barszczyk', city: 'Szczecin', text: 'Wcześniej był chaos, teraz mam system i rutynę.' },
  { name: 'Bartek Dzieciątkowski', city: 'Bydgoszcz', text: 'Dużo tipów pod CKE i pułapki z arkuszy. To daje punkty.' },
  { name: 'Kamil Stanek', city: 'Olsztyn', text: 'Największy plus: proste wyjaśnienia i powtórki z sensem.' },
  { name: 'Igor Majewski', city: 'Białystok', text: 'Nie ma lania wody – jest konkret, plan i feedback.' },
  { name: 'Hubert Puchacz', city: 'Rzeszów', text: 'Nauczyłem się jak analizować polecenia. To była moja największa blokada.' },
  { name: 'Alan Wolski', city: 'Opole', text: 'Zrobiłem progres, bo przestałem wkuwać – zacząłem rozumieć.' },
  { name: 'Marcel Kubial', city: 'Gdynia', text: 'Świetne tempo i mega cierpliwość w tłumaczeniu.' },
  { name: 'Tomasz Filipiak', city: 'Lublin', text: 'Najlepsza inwestycja przed maturą. Mniej stresu, więcej punktów.' },
  { name: 'Krzysztof Nowicki', city: 'Poznań', text: 'Fajne materiały i zadania “pod wynik”.' },
  { name: 'Paweł Kaczmar', city: 'Warszawa', text: 'W 2 tygodnie ogarnąłem tematy, które odkładałem miesiącami.' },
  { name: 'Adrian Nowak', city: 'Wrocław', text: 'W końcu wiem, co jest najważniejsze na maturze i na czym się skupić.' },
  { name: 'Łukasz Kowalski', city: 'Słupsk', text: 'Bardzo dużo praktyki na arkuszach. O to chodzi.' },
];

const blogPosts = [
  { title: 'Jak zaplanować powtórki?', excerpt: 'Plan na ostatnie 3 miesiące.', date: '12.01.2026', category: 'Strategie', slug: 'planowanie-powtorek' },
  { title: 'Błędy maturalne', excerpt: 'Nie trać punktów na głupotach.', date: '05.01.2026', category: 'Błędy', slug: 'bledy-maturalne' },
  { title: 'Metabolizm w pigułce', excerpt: 'Kluczowe schematy.', date: '28.12.2025', category: 'Wiedza', slug: 'metabolizm-schematy' },
];

const freeMaterials = [
  {
    slug: 'metabolizm',
    title: 'Metabolizm',
    thumb: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769096122/3_ejqxtr.png',
  },
  {
    slug: 'plan-maturalny',
    title: 'Plan maturalny',
    thumb: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769104949/ipad_grafiki_zvf9pe.png',
  },
  {
    slug: 'pytania-sprawdzajace',
    title: 'Pytania sprawdzające',
    thumb: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769104665/6_q9wzxo.png',
  },
  {
    slug: 'zadanie-domowe',
    title: 'Zadanie domowe',
    thumb: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769082868/Projekt_bez_nazwy_24_jjkyvd.png',
  },
];

const benefits = [
  { no: '1.', title: 'Fachową pomoc doświadczonego nauczyciela i laureata wielu konkursów' },
  { no: '2.', title: 'Indywidualne podejście i tempo nauki dopasowane do Twoich potrzeb' },
  { no: '3.', title: 'Wiedzę praktyczną przydatną na sprawdzianach i na maturze' },
  { no: '4.', title: 'Stały dostęp do nagrań lekcji, żeby powtarzać materiał w dowolnym momencie' },
];

const offerTypesCompact = [
  { title: 'Indywidualne Premium – ze mną', to: '/oferta/indywidualne-premium', icon: GraduationCap },
  { title: 'Indywidualne – z pracownikami', to: '/oferta/indywidualne-pracownicy', icon: UserRound },
  { title: 'Grupowe – ze mną', to: '/oferta/grupowe-ze-mna', icon: Users },
  { title: 'Pakiety miesięczne – grupowe', to: '/oferta/pakiety-grupowe', icon: Package },
];

// ✅ SEKJCA VIDEO (tiktokowy format pionowy)
// tu wklej filmiki (podmień src na swoje linki mp4 / cloudinary)
const videoClips = [
  {
    title: 'Genetyka bez stresu',
    desc: 'Zobacz jak tłumaczę krok po kroku.',
    src: 'https://res.cloudinary.com/dyxif8hyp/video/upload/v1769202939/WhatsApp_Video_2026-01-22_at_16.43.42_orl5k0.mp4',
    poster: 'tu wklej filmiki',
  },
  {
    title: 'Metabolizm — schematy',
    desc: 'Najczęstsze pułapki i jak je ogarnąć.',
    src: 'https://res.cloudinary.com/dyxif8hyp/video/upload/v1769202943/WhatsApp_Video_2026-01-22_at_16.43.42_1_i6aonx.mp4',
    poster: 'tu wklej filmiki',
  },
  {
    title: 'Zadania CKE',
    desc: 'Jak czytać polecenie i zgarniać punkty.',
    src: 'https://res.cloudinary.com/dyxif8hyp/video/upload/v1769202949/WhatsApp_Video_2026-01-22_at_16.43.48_rjpww3.mp4',
    poster: 'miniaturki filmików',
  },
];

// ===== MOTION (subtelne, premium) =====
const EASE_OUT = [0.22, 1, 0.36, 1];

const makeFadeUp = (reduce) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
});

const makeFadeSide = (dir, reduce) => ({
  hidden: { opacity: 0, x: reduce ? 0 : dir * 22 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } },
});

function HomePage() {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const fadeLeft = makeFadeSide(-1, reduceMotion);
  const fadeRight = makeFadeSide(1, reduceMotion);

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
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
              className="hero-figure-wrap order-1 lg:order-2"
            >
              <div className="hero-figure">
                <div className="hero-ring" aria-hidden="true" />
                <img src={HERO_IMAGE_URL} alt="MEDULIA - korepetycje" className="hero-figure-img" />

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
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="hero-card order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold mb-4">
                🎓 Zapisy 2026/2027 otwarte!
              </div>

              <h1 className="hero-title">
                Biologia na <span className="text-gradient">100%</span>
              </h1>

              <p className="hero-subtitle">Bez stresu i wkuwania. Zrozumienie, które buduje wynik.</p>

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
          <motion.div
            className="glass-panel"
            data-bg="image"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <div className="benefits-grid">
              <div>
                <h2 className="benefits-title">
                  <span className="text-gradient">Co zyskujesz na</span> zajęciach ze mną?
                </h2>

                <p className="benefits-subtitle">Konkretne efekty — bez stresu, bez lania wody, z planem pod Ciebie.</p>
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
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: VALUES */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-panel"
            data-bg="image"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* zdjęcie -> z boku */}
              <motion.div
                className="relative order-1"
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.22 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-400/20 via-blue-400/20 to-transparent rounded-full blur-3xl -z-10" />
                <img
                  src="https://res.cloudinary.com/dyxif8hyp/image/upload/v1768865222/Projekt_bez_nazwy_5_adwhyx.png"
                  alt="Julia - MEDULIA"
                  className="w-full max-w-[320px] md:max-w-[420px] mx-auto lg:mx-0 drop-shadow-2xl relative z-10"
                />
              </motion.div>

              {/* box tekstowy -> od dołu */}
              <motion.div
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 order-2"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.22 }}
              >
                <SectionTitle className="!text-left !mb-6" center={false}>
                  Dlaczego ja?
                </SectionTitle>
                <p className="text-white/80 mb-8 leading-relaxed text-sm">
                  Uczę biologii tak, żebyś rozumiał/a, a nie kuł/a. Jestem praktykiem z wynikami.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Target, title: 'Plan', desc: 'Dostosowany do Ciebie.' },
                    { icon: Zap, title: 'Logika', desc: 'Zero wkuwania na pamięć.' },
                    { icon: Heart, title: 'Wsparcie', desc: 'Jesteśmy w tym razem.' },
                    { icon: Users, title: 'Wynik', desc: 'Celujemy w 90%+.' },
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ SECTION: VIDEO (pionowe “tiktokowe” clipy) */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-panel p-6 md:p-8"
            data-bg="image"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <SectionTitle>Zobacz jak tłumaczę</SectionTitle>
            <p className="text-center text-white/70 mb-8 max-w-2xl mx-auto text-sm">
              Krótkie fragmenty lekcji (format pionowy). Bez lania wody — konkretny sposób tłumaczenia.
            </p>

            {/* Mobile: przewijanie w bok, Desktop: 3 kolumny */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar md:grid md:grid-cols-3 md:gap-5 md:overflow-visible">
              {videoClips.map((v, idx) => (
                <motion.div
                  key={idx}
                  className="flex-none w-[78vw] max-w-[340px] md:w-auto"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: reduceMotion ? 0 : idx * 0.06, duration: 0.55, ease: EASE_OUT }}
                >
                  <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all">
                    <div className="relative w-full aspect-[9/16] bg-black/30">
                      {/* tu wklej filmiki */}
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={v.src}
                        poster={v.poster}
                        controls
                        playsInline
                        preload="metadata"
                      />
                    </div>

                    <div className="p-4">
                      <div className="text-white font-extrabold text-sm md:text-base">{v.title}</div>
                      <div className="mt-1 text-xs text-white/70 leading-relaxed">{v.desc}</div>

                      
                      
                      
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Link to="/zapisy" className="btn-accent inline-flex items-center justify-center gap-2">
                Chcę taki plan nauki <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: TYPES (Home: tylko lista + CTA) */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-panel overflow-hidden"
            data-bg="image"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <SectionTitle>Rodzaje zajęć</SectionTitle>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4">
              {offerTypesCompact.map((item) => (
                <div key={item.to} className="relative">
                  <Link
                    to={item.to}
                    className="md:hidden absolute inset-0 rounded-2xl z-10"
                    aria-label={`Zobacz szczegóły: ${item.title}`}
                  />

                  <div
                    className="
                      group rounded-2xl bg-white/5 border border-white/10
                      hover:border-white/20 hover:bg-white/7 transition-all
                      p-4 md:p-5 flex items-center justify-between gap-3
                    "
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white/85" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-white font-semibold text-sm md:text-base leading-snug md:line-clamp-2">
                          {item.title}
                        </div>

                        <div className="md:hidden mt-1 text-xs text-white/55">Kliknij, aby zobaczyć szczegóły</div>
                      </div>
                    </div>

                    <div className="hidden md:inline-flex items-center gap-2 text-white/70 group-hover:text-white transition-colors text-sm font-semibold flex-shrink-0 whitespace-nowrap">
                      Zobacz szczegóły <ArrowRight className="w-4 h-4" />
                    </div>

                    <ArrowRight className="md:hidden w-4 h-4 text-white/55 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/oferta" className="btn-accent inline-flex items-center justify-center gap-2">
                Zobacz ofertę <ArrowRight className="w-5 h-5" />
              </Link>

              <Link to="/zapisy" className="hidden sm:inline-flex hero-ghost-btn items-center justify-center md:inline-flex">
                Zapisz się
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: FREE MATERIALS */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-panel p-6 md:p-8"
            data-bg="image"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <SectionTitle>Darmowe materiały</SectionTitle>
            <p className="text-center text-white/70 mb-8 max-w-2xl mx-auto text-sm">
              Pobierz przykładowe notatki i zadania. Sprawdź, jak uczę!
            </p>

            <div className="grid grid-cols-2 gap-4 md:hidden">
              {freeMaterials.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: reduceMotion ? 0 : idx * 0.06, duration: 0.55, ease: EASE_OUT }}
                >
                  <Link
                    to="/materialy"
                    className="card-pdf group !bg-white/5 !bg-none !border-white/12 !p-0 overflow-hidden block"
                    aria-label={`Zobacz materiały: ${item.title}`}
                  >
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 m-4 mb-0">
                      <div className="aspect-[4/3] w-full">
                        <img
                          src={item.thumb}
                          alt={`${item.title} – miniatura`}
                          className="w-full h-full object-contain bg-white/5 p-2"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="p-4 pt-3">
                      <h4 className="text-white font-extrabold text-sm leading-snug">{item.title}</h4>
                      <div className="mt-2 text-xs text-white/70 inline-flex items-center gap-2">
                        Zobacz w materiałach <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="hidden md:block">
              <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x-mandatory py-2">
                {freeMaterials.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="snap-center flex-none w-[320px] lg:w-[360px]"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: reduceMotion ? 0 : idx * 0.06, duration: 0.55, ease: EASE_OUT }}
                  >
                    <Link
                      to="/materialy"
                      className="card-pdf group !bg-white/5 !bg-none !border-white/12 !p-0 overflow-hidden block h-full"
                      aria-label={`Zobacz w materiałach: ${item.title}`}
                    >
                      <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 m-4 mb-0">
                        <div className="aspect-[16/10] w-full">
                          <img
                            src={item.thumb}
                            alt={`${item.title} – miniatura`}
                            className="w-full h-full object-contain bg-white/5 p-2"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="p-4 pt-3">
                        <h4 className="text-white font-extrabold text-sm md:text-base leading-snug">{item.title}</h4>
                        <div className="mt-2 text-xs text-white/70 inline-flex items-center gap-2">
                          Zobacz w materiałach <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <p className="mt-2 text-center text-xs text-white/55">Przykładowy wygląd materiałów.</p>
            </div>

            <div className="mt-6 flex justify-center">
              <Link to="/materialy" className="btn-accent inline-flex items-center justify-center gap-2">
                Zobacz wszystkie materiały <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: OPINIONS */}
      <section className="pt-12 pb-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-panel p-4 md:p-8"
            data-bg="image"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <SectionTitle>Opinie</SectionTitle>
            <p className="text-center text-white/80 mb-4 text-sm">Prawdziwe historie.</p>
            <OpinionsMarquee opinions={opinionsData} cardVariant="compact" />
            <div className="text-center mt-4">
              <Link to="/opinie" className="inline-flex items-center text-white font-semibold hover:text-white/80 text-sm">
                Więcej opinii <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: MY STORY */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="relative order-2 lg:order-1"
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.22 }}
            >
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-sm" />
              <img
                src="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=800"
                alt="Maria - Nauczycielka"
                className="relative rounded-2xl shadow-xl max-h-[400px] w-full object-cover"
              />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 glass-panel p-6 md:p-8"
              data-bg="image"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.22 }}
            >
              <SectionTitle className="!text-left" center={false}>
                Moja misja
              </SectionTitle>
              <div className="prose prose-sm text-white/80 mt-4 space-y-3">
                <p>Biologia to sposób patrzenia na świat. Nie ucz się na pamięć – zrozum mechanizmy.</p>
                <p>Na moich zajęciach nie ma głupich pytań. Błąd to okazja do nauki.</p>
              </div>
              <Link to="/o-mnie" className="mt-6 inline-flex items-center text-white font-bold hover:text-white/80 transition-all group text-sm">
                Poznaj mnie <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 9: SIGNUP */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* ✅ LEWY BOX — dopchany na desktop (mobile bez zmian) */}
            <motion.div
              className="glass-panel p-6 md:p-8 h-full flex flex-col"
              data-bg="image"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.22 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Zawalcz o 100%</h2>
              <p className="text-white/80 mb-6 leading-relaxed text-sm">Liczba miejsc ograniczona. Decyduje kolejność zgłoszeń.</p>

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

              {/* ✅ DESKTOP ONLY: dopchnięcie pustego miejsca */}
              <div className="hidden lg:block">
                <div className="h-px w-full bg-white/10 my-6" />

                <div className="text-white font-extrabold mb-3">Jak wygląda start?</div>
                <div className="space-y-3">
                  {[
                    { no: '1', t: 'Wypełniasz formularz', d: 'Krótko i konkretnie — 2 minuty.' },
                    { no: '2', t: 'Odpisuję w 24h', d: 'Dobieramy tryb i ustalamy cel.' },
                    { no: '3', t: 'Dostajesz plan', d: 'Wiesz co robić i kiedy — bez chaosu.' },
                  ].map((s) => (
                    <div
                      key={s.no}
                      className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-4"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white font-extrabold">
                        {s.no}.
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">{s.t}</div>
                        <div className="text-white/70 text-xs mt-1 leading-relaxed">{s.d}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-white font-extrabold text-sm">Mini FAQ</div>
                  <div className="mt-3 space-y-2 text-xs text-white/75 leading-relaxed">
                    <div><span className="text-white/90 font-semibold">•</span> Czas lekcji: <span className="text-white/90 font-semibold">60 min</span> (lub dłużej w pakietach).</div>
                    <div><span className="text-white/90 font-semibold">•</span> Najczęściej: <span className="text-white/90 font-semibold">online</span> + materiały po zajęciach.</div>
                    <div><span className="text-white/90 font-semibold">•</span> Po pierwszym spotkaniu: <span className="text-white/90 font-semibold">plan + priorytety</span> pod wynik.</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-panel p-6"
              data-bg="image"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.22 }}
            >
              <ContactForm hideClass />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
