import React, { useEffect, useRef, useState } from 'react';
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
  X,
  Maximize2
} from 'lucide-react';

import SectionTitle from '@/components/SectionTitle';
import OpinionsMarquee from '@/components/OpinionsMarquee';
import ContactForm from '@/components/ContactForm';

// ===== HERO IMAGE =====
const HERO_IMAGE_URL =
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769787492/Projekt_bez_nazwy_36_mpubsb.png';

const proofImages = [
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/2c273e46-a225-4aa8-8eb8-5cec120f6b5b_cjmnsf.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198553/b9bf748a-472b-41dc-9523-b3897df6066e_yk3eok.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/9e5e4bf2-82fa-49ae-9aa9-f3404abeb368_klevnq.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/2763f9b7-a383-43b5-a9fb-61f7a4fd5294_mk16na.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/1f883083-329f-4940-a455-2aa453af8981_uyyekj.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/62376121-40b1-4e93-983d-4a8e0f468646_yzib9d.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198555/a7f1c29d-8303-4b64-bcd8-e0a68932f86c_uzo2cu.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198555/e6b97a21-da72-42b4-ba62-891a377f4616_1_utsxhl.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198555/f1ff0dda-360d-4d7c-b22b-dcf8609011de_dzpyww.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/40a08a42-97b4-46eb-b1e7-5b549c262c28_bhaven.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/e1643ecc-efee-4751-a072-ff4db6292b9f_oqjyjj.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/cd51f7ec-a0a3-42ee-baf6-4bd513a8be5f_ejsa84.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/f2a4bb6b-cce8-42d3-9865-25d21f1810f2_faadqk.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/e98343e0-93ff-4eef-947d-1fd20aec2419_uspwjz.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/a5c72514-910e-436e-90cc-e4e5127a7043_nw2oxy.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/3de9a9a3-8b21-4ef0-97bf-60ddfff25e37_h8jgc6.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198555/ba6d6658-b0b9-4957-83b3-5262d61d7132_ay1x5b.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198557/a74272de-4774-4922-8f1b-f9e4f5774bf1_tvkubj.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/e6b97a21-da72-42b4-ba62-891a377f4616_zk60vb.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198557/20735b78-0110-4dfc-b8ea-29a2676f0c37_t0fsve.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198557/000c349f-d533-4ad7-9900-59b22239c5a8_xz1ezr.jpg',
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/d85766a4-6f82-4db4-b2b5-6754448e9761_dddiyc.jpg',
];

const pickProof = (i) => proofImages[i % proofImages.length];

const opinionsData = [
  // NOWA OPINIA NA PIERWSZYM MIEJSCU
  { 
    name: 'Karolina Małecka', 
    city: 'Warszawa', 
    text: 'Świetny progres i opieka! Zaczynałam z chaosem w głowie, a teraz dzięki systematycznej pracy czuję się pewnie przed maturą.', 
    proofImage: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769888472/250c9d13-8ea1-4ace-907f-99152bbe9541_r153uf.jpg' 
  },
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

const freeMaterials = [
  {
    slug: 'metabolizm',
    title: 'Metabolizm',
    thumb: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769817607/3_xuy5d3.png',
  },
  {
    slug: 'plan-maturalny',
    title: 'Plan maturalny',
    thumb: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769817607/1_tpw8vw.png',
  },
  {
    slug: 'pytania-sprawdzajace',
    title: 'Pytania sprawdzające',
    thumb: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769817607/4_esfg8k.png',
  },
  {
    slug: 'matura-rozszerzona-2026',
    title: 'Matura Rozszerzona 2026',
    thumb: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769817607/2_jdxk7h.png',
  },
];

const offerTypesCompact = [
  { title: 'Indywidualne Premium – ze mną', to: '/oferta/indywidualne-premium', icon: GraduationCap },
  { title: 'Indywidualne – Medulia Team', to: '/oferta/indywidualne-pracownicy', icon: UserRound },
  { title: 'Grupowe – ze mną', to: '/oferta/grupowe-ze-mna', icon: Users },
  { title: 'Pakiety miesięczne – grupowe', to: '/oferta/pakiety-grupowe', icon: Package },
];

// ✅ SEKJCA VIDEO
const videoClips = [
  {
    title: 'Fotosynteza - jak odróżnić',
    desc: 'Zobacz jak tłumaczę krok po kroku.',
    src: 'https://res.cloudinary.com/dyxif8hyp/video/upload/v1769202939/WhatsApp_Video_2026-01-22_at_16.43.42_orl5k0.mp4',
  },
  {
    title: 'Zadania CKE',
    desc: 'Ogarniamy każdy rodzaj zadań!.',
    src: 'https://res.cloudinary.com/dyxif8hyp/video/upload/v1769202943/WhatsApp_Video_2026-01-22_at_16.43.42_1_i6aonx.mp4',
  },
  {
    title: 'Oddychanie komórkowe',
    desc: 'Najważniejsze informacje w pigułce!.',
    src: 'https://res.cloudinary.com/dyxif8hyp/video/upload/v1769453167/0126_1_umuqmc.mp4',
  },
];

// ===== MOTION =====
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
  const [selectedImage, setSelectedImage] = useState(null);
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const fadeLeft = makeFadeSide(-1, reduceMotion);

  // ===== VIDEO: refs + auto pause =====
  const videoSectionRef = useRef(null);
  const videoRefs = useRef([]);

  const pauseAllVideos = () => {
    videoRefs.current.forEach((v) => {
      if (!v) return;
      try { v.pause(); } catch (_) {}
    });
  };

  const pauseOtherVideos = (currentEl) => {
    videoRefs.current.forEach((v) => {
      if (!v || v === currentEl) return;
      try { v.pause(); } catch (_) {}
    });
  };

  useEffect(() => {
    const el = videoSectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting === false) pauseAllVideos();
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => { try { obs.disconnect(); } catch (_) {} };
  }, []);

  // Blur styles
  const blur2Style = { backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' };

  return (
    <div className="home-page">
      <style>{`
        /* Gradient tekstu w Hero */
        .text-gradient-purple {
           background: linear-gradient(to right, #c084fc, #e879f9);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
        }

        /* video fullscreen fix */
        .home-page video.medulia-clip { background: #000; }
        .home-page video.medulia-clip:fullscreen { object-fit: contain !important; background: #000; }
        .home-page video.medulia-clip:-webkit-full-screen { object-fit: contain !important; background: #000; }
        .home-page video.medulia-clip::-webkit-media-controls-panel { background-image: none; }

        /* OPINIE: ukryj “kreski” / paginację */
        .home-page .opinions-no-scrollbar [role="tablist"],
        .home-page .opinions-no-scrollbar [class*="dots"],
        .home-page .opinions-no-scrollbar [class*="indicator"],
        .home-page .opinions-no-scrollbar [class*="progress"],
        .home-page .opinions-no-scrollbar [class*="pagination"] {
          display: none !important;
        }

        .home-page .opinions-no-scrollbar *::-webkit-scrollbar { display: none; height: 0; }
        .home-page .opinions-no-scrollbar * { scrollbar-width: none; -ms-overflow-style: none; }

        /* Zdejmij blur na mobile */
        @media (max-width: 767px) {
          .home-page .glass-panel {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }
        }
        /* HERO Mask */
        .home-page .hero-img{
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
        }
        @media (max-width: 767px){
          .home-page .hero-img{
            -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
            mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
          }
        }
      `}</style>

      <Helmet>
        <title>MEDULIA - Matura z biologii na 100% | Zapisy 2026/2027</title>
        <meta
          name="description"
          content="Profesjonalne przygotowanie do matury z biologii. Zajęcia indywidualne, grupowe i materiały edukacyjne. Dołącz do setek zadowolonych uczniów."
        />
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="relative pt-0 md:pt-16 pb-10 md:pb-16 overflow-hidden lg:overflow-visible">
        {/* Blaski w tle */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft" />
        <div className="absolute top-40 left-[10%] w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* OBRAZEK */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full -mt-10 lg:-mt-10 lg:ml-auto">
                <div className="absolute -inset-6 rounded-[52px] bg-purple-500/10 blur-3xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[44px] -mx-4 sm:mx-0 lg:ml-auto lg:w-[110%] xl:w-[120%] 2xl:w-[100%]">
                  <div className="relative h-[45vh] md:h-[65vh] min-h-[350px] w-full">
                    <img
                      src={HERO_IMAGE_URL}
                      alt="MEDULIA - korepetycje"
                      className="hero-img absolute inset-0 h-full w-full object-cover object-[50%_18%] md:object-top"
                      loading="eager"
                    />
                    <a
                      href="tel:+48532083335"
                      className="absolute left-5 bottom-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-white/20 text-white text-sm backdrop-blur-md"
                    >
                      <Phone className="w-4 h-4 text-purple-400" />
                      532 208 335
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* BOX TEKSTOWY */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="order-2 lg:order-1"
            >
              <div
                className="rounded-[32px] p-4 md:p-10 bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden -mt-10 md:mt-0 z-10"
              >
                
                <h1 className="mt-4 md:mt-0 text-3xl md:text-6xl font-extrabold text-white leading-[1.1]">
                  Biologia na <span className="text-gradient-purple">100%</span>
                </h1>

                <p className="mt-2 md:mt-5 text-white/70 text-xs md:text-lg leading-relaxed max-w-md">
                  Bez stresu i wkuwania. Budujemy wynik na <span className="text-white font-semibold">zrozumieniu mechanizmów</span>, a nie definicji.
                </p>

                <div className="mt-3 md:mt-6 flex flex-wrap gap-2">
                  {['Indywidualny plan', 'Materiały CKE', 'Stały kontakt'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-xl bg-white/10 border border-white/10 text-white/90 text-[10px] md:text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 md:mt-8 flex flex-col sm:flex-row gap-2 md:gap-4">
                  <Link to="/zapisy" className="btn-accent py-2.5 px-6 text-base md:py-2.5 md:px-6 md:text-base rounded-2xl inline-flex items-center justify-center gap-2 font-bold group">
                    Umów korepetycje 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/oferta"
                    className="hero-ghost-btn py-1 px-4 text-sm md:py-2 md:px-6 md:text-base rounded-2xl inline-flex items-center justify-center font-bold border-white/10 hover:bg-white/5 transition-all text-white"
                  >
                    Oferta
                  </Link>
                </div>

                {/* PASEK ZAJĘTOŚCI */}
                <div className="mt-5 md:mt-8 pt-4 md:pt-6 border-t border-white/10">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-wider">Dostępność miejsc 2026/27</span>
                    <span className="text-[10px] md:text-xs font-black text-white drop-shadow-[0_0_8px_rgba(232,121,249,0.9)]">
                      Zostało 15 miejsc!
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_12px_rgba(168,85,247,0.6)]"
                    />
                  </div>
                  <p className="mt-2 text-[9px] md:text-[10px] text-white/60 italic">
                    * Grafik indywidualny zapełnia się szybko. Rezerwacja przez formularz gwarantuje miejsce w kolejce.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VALUES (Poprawiona: Ikony Solid Gradient + Czytelność) */}
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
              {/* LEWA KOLUMNA - ZDJĘCIE */}
              <motion.div
                className="relative order-1"
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.22 }}
              >
                <div className="relative mx-auto lg:mx-0 w-full max-w-[520px]">
                  <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/5 shadow-2xl">
                    <div className="aspect-[4/5] w-full">
                      <img
                        src="https://res.cloudinary.com/dyxif8hyp/image/upload/v1769787679/Projekt_bez_nazwy_37_t3jkss.png"
                        alt="Julia - MEDULIA"
                        className="h-full w-full object-cover object-[50%_20%] md:object-[50%_25%]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-black/0 to-black/0" />
                  </div>
                </div>
              </motion.div>

              {/* PRAWA KOLUMNA - DLACZEGO JA */}
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
                  Jestem praktykiem. Uczę biologii tak, żebyś rozumiał/a procesy, a nie wkuwał/a podręcznik.
                </p>

                <div className="grid gap-4">
                  {[
                    { 
                      icon: Target, 
                      // FIOLETOWY GRADIENT
                      bgClass: "bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-500/25",
                      title: 'Strategia "pod klucz"', 
                      desc: 'Piszesz dokładnie to, za co CKE przyznaje punkty. Zero lania wody.' 
                    },
                    { 
                      icon: Zap, 
                      // ZŁOTY/BURSZTYNOWY GRADIENT (Czytelniejszy niż żółty)
                      bgClass: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-orange-500/25",
                      title: 'Logika, nie pamięć', 
                      desc: 'Rozumiesz procesy, zamiast kuć definicje na blachę. To zostaje w głowie.' 
                    },
                    { 
                      icon: Heart, 
                      // RÓŻOWY GRADIENT
                      bgClass: "bg-gradient-to-br from-pink-500 to-rose-600 shadow-pink-500/25",
                      title: 'Zero stresu', 
                      desc: 'Pytasz o wszystko. Tłumaczę do skutku, aż w końcu "kliknie".' 
                    },
                    { 
                      icon: GraduationCap, 
                      // NIEBIESKI GRADIENT
                      bgClass: "bg-gradient-to-br from-blue-400 to-cyan-500 shadow-blue-500/25",
                      title: 'Wynik na medycynę', 
                      desc: 'Nie celujemy w "zdanie". Walczymy o każdy procent powyżej 90%.' 
                    },
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group flex items-center gap-4 p-3 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {/* Ikona na pełnym gradiencie */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg ${item.bgClass} group-hover:scale-105 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      
                      <div>
                        <h4 className="text-white font-bold text-sm mb-0.5">
                          {item.title}
                        </h4>
                        <p className="text-white/60 text-xs leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ SECTION: VIDEO */}
      <section ref={videoSectionRef} className="py-8 md:py-12 relative">
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

            <div className="flex gap-4 overflow-x-auto no-scrollbar md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:items-stretch">
              {videoClips.map((v, idx) => (
                <motion.div
                  key={idx}
                  className="flex-none w-[78vw] max-w-[300px] md:max-w-[260px] md:w-auto"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: reduceMotion ? 0 : idx * 0.06,
                    duration: 0.55,
                    ease: EASE_OUT,
                  }}
                >
                  <div
                    className={[
                      "overflow-visible transition-transform",
                      idx === 0 ? "md:translate-x-[85px]" : "",
                      idx === 1 ? "md:translate-x-[55px]" : "",
                      idx === 2 ? "md:translate-x-[26px]" : "",
                    ].join(" ")}
                  >
                    <div className="p-4">
                      <div className="relative mx-auto w-full max-w-[240px] flex justify-center">
                        <div className="relative aspect-[9/16] rounded-[34px] border border-white/15 bg-black/30 p-2 shadow-xl">
                          <div className="pointer-events-none absolute left-1/2 top-[10px] -translate-x-1/2 w-[46%] h-[16px] rounded-full bg-black/35 border border-white/10" />
                          <div className="h-full w-full overflow-hidden rounded-[26px] bg-black">
                            <video
                              ref={(el) => {
                                videoRefs.current[idx] = el;
                              }}
                              className="medulia-clip h-full w-full object-cover"
                              src={v.src}
                              controls
                              playsInline
                              preload="metadata"
                              onPlay={(e) => pauseOtherVideos(e.currentTarget)}
                              onLoadedMetadata={(e) => {
                                try { e.currentTarget.currentTime = 0.01; } catch (_) {}
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 pb-4 w-full text-center">
                      <div className="text-white font-extrabold text-sm md:text-base min-h-[48px] flex items-center justify-center">
                        {v.title}
                      </div>
                      <div className="mt-1 text-xs text-white/70 leading-relaxed min-h-[40px]">
                        {v.desc}
                      </div>
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

      {/* SECTION 3: TYPES (Poprawiona: Ikony Solid Gradient + Kolory Kategorii) */}
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

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { 
                  title: 'Indywidualne Premium – ze mną', 
                  to: '/oferta/indywidualne-premium', 
                  icon: GraduationCap,
                  // ZŁOTY (PREMIUM)
                  bgClass: "bg-gradient-to-br from-amber-400 to-orange-600 shadow-orange-500/25"
                },
                { 
                  title: 'Indywidualne – Medulia Team', 
                  to: '/oferta/indywidualne-pracownicy', 
                  icon: UserRound,
                  // NIEBIESKI (ZAUFANIE)
                  bgClass: "bg-gradient-to-br from-blue-400 to-cyan-600 shadow-blue-500/25"
                },
                { 
                  title: 'Grupowe – ze mną', 
                  to: '/oferta/grupowe-ze-mna', 
                  icon: Users,
                  // FIOLETOWY (SPOŁECZNOŚĆ)
                  bgClass: "bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-500/25"
                },
                { 
                  title: 'Pakiety miesięczne – grupowe', 
                  to: '/oferta/pakiety-grupowe', 
                  icon: Package,
                  // ZIELONY (PAKIET/OSZCZĘDNOŚĆ)
                  bgClass: "bg-gradient-to-br from-pink-400 to-pink-600 shadow-black-500/25"
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    aria-label={`Zobacz szczegóły: ${item.title}`}
                    className="
                      group rounded-2xl bg-white/5 border border-white/10
                      hover:border-white/20 hover:bg-white/10 transition-all
                      p-4 flex items-center justify-between gap-4
                    "
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      {/* Ikona Solid Gradient */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg ${item.bgClass} group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-white font-bold text-sm md:text-base leading-snug pr-2">
                          {item.title}
                        </div>
                        <div className="md:hidden mt-1 text-[10px] text-white/50 font-medium">
                          Kliknij, aby zobaczyć szczegóły
                        </div>
                      </div>
                    </div>

                    {/* Strzałka na desktopie z napisem */}
                    <div className="hidden md:inline-flex items-center gap-2 text-white/60 group-hover:text-white transition-colors text-xs font-bold uppercase tracking-wider flex-shrink-0 whitespace-nowrap">
                      Szczegóły <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Strzałka na mobile */}
                    <div className="md:hidden w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
                        <ArrowRight className="w-4 h-4 text-white/70" />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/oferta" className="btn-accent inline-flex items-center justify-center gap-2">
                Zobacz pełną ofertę <ArrowRight className="w-5 h-5" />
              </Link>

              <Link to="/zapisy" className="hidden sm:inline-flex hero-ghost-btn items-center justify-center md:inline-flex">
                Zapisz się
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: FREE MATERIALS (POPRAWIONE) */}
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

            {/* Mobile Grid - POPRAWIONY */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
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
                    className="group block"
                    aria-label={`Zobacz materiały: ${item.title}`}
                  >
                    {/* ZMIANA: aspect-[210/297] (A4) dla pionowych materiałów */}
                    <div className="rounded-2xl overflow-hidden aspect-[210/297] w-full mb-2 border border-white/10 bg-white/5">
                      <img
                        src={item.thumb}
                        alt={`${item.title} – miniatura`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="px-1">
                      <h4 className="text-white font-extrabold text-xs leading-snug">{item.title}</h4>
                      <div className="mt-1 text-[10px] text-white/70 inline-flex items-center gap-1 group-hover:text-white transition-colors">
                        Zobacz <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop Scroller */}
           <div className="hidden md:block">
  <div className="grid grid-cols-4 gap-6">
                {freeMaterials.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="w-full"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: reduceMotion ? 0 : idx * 0.06, duration: 0.55, ease: EASE_OUT }}
                  >
                    <Link
                      to="/materialy"
                      className="group block h-full"
                      aria-label={`Zobacz w materiałach: ${item.title}`}
                    >
                      {/* ZMIANA: aspect-[210/297] (A4) dla pionowych materiałów */}
                      <div className="rounded-2xl overflow-hidden aspect-[210/297] w-full mb-4 border border-white/10 bg-white/5">
                        <img
                          src={item.thumb}
                          alt={`${item.title} – miniatura`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="px-1">
                        <h4 className="text-white font-extrabold text-sm md:text-base leading-snug">{item.title}</h4>
                        <div className="mt-2 text-xs text-white/70 inline-flex items-center gap-2 group-hover:text-white transition-colors">
                          Zobacz w materiałach <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-white/55">Przykładowy wygląd materiałów.</p>
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
      <section className="pt-12 pb-8 md:py-12 opinions-no-scrollbar">
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
            <p className="text-center text-white/80 mb-6 text-sm">
              Kliknij w zdjęcie, aby przeczytać pełną opinię.
            </p>

            {/* SLIDER OPINII */}
            <div className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory px-1 md:px-0">
              {opinionsData.map((op, idx) => {
                const img = op.proofImage || pickProof(idx);
                
                return (
                  <div 
                    key={idx} 
                    className="snap-center flex-none w-[160px] md:w-[260px] flex flex-col gap-3 group cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    {/* ZDJĘCIE */}
                    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-[9/14] shadow-lg group-hover:border-purple-500/50 transition-colors duration-300">
                      <img 
                        src={img} 
                        alt={`Opinia - ${op.name}`}
                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            <Maximize2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* OPIS */}
                    <div className="px-1 flex flex-col gap-1">
                       <div className="flex gap-0.5 text-yellow-400 mb-0.5">
                         {[...Array(5)].map((_, i) => (
                           <svg key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                         ))}
                       </div>
                       
                       <p className="text-white/80 text-[11px] md:text-xs leading-relaxed line-clamp-2 italic">
                         "{op.text}"
                       </p>
                       
                       <div className="mt-1 border-t border-white/10 pt-1">
                         <div className="text-white font-bold text-xs">{op.name}</div>
                         <div className="text-white/50 text-[10px]">{op.city}</div>
                       </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-4">
              <Link to="/opinie" className="inline-flex items-center text-white font-semibold hover:text-white/80 text-sm">
                Więcej opinii <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: MY STORY / MISSION */}
<section className="py-8 md:py-12 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-6 xl:gap-8 items-center">
      
      {/* LEWA KOLUMNA - NOWA GRAFIKA (STUDY DESK) */}
      <motion.div
        className="relative order-2 lg:order-1"
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
      >
        <div className="absolute -inset-2 bg-purple-500/10 rounded-3xl blur-2xl" />
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[3/3.7] lg:aspect-auto">
          <img
            src="https://res.cloudinary.com/dyxif8hyp/image/upload/v1769719548/Projekt_bez_nazwy_34_xstll6.png"
            alt="Przyjazna nauka biologii online"
            className="relative w-full h-full object-cover object-center max-h-[450px]"
            loading="lazy"
          />
          {/* Delikatny fioletowy filtr nakładkowy, by lepiej siadło w designie */}
          <div className="absolute inset-0 bg-purple-900/5 mix-blend-multiply pointer-events-none" />
        </div>
      </motion.div>

      {/* PRAWA KOLUMNA - TEKST MISJI */}
      <motion.div
        className="order-1 lg:order-2 glass-panel p-6 md:p-10"
        data-bg="image"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
      >
        <SectionTitle className="!text-left" center={false}>
          Moja misja
        </SectionTitle>
        <div className="prose prose-sm text-white/80 mt-4 space-y-4">
          <p className="text-base md:text-lg leading-relaxed">
            Biologia to sposób patrzenia na świat. Nie uczymy się regułek na pamięć – wspólnie <span className="text-white font-bold">rozgryzamy mechanizmy</span>, które rządzą życiem.
          </p>
          <p className="text-sm md:text-base opacity-90">
            Na moich zajęciach tworzymy bezpieczną przestrzeń. Nie ma głupich pytań, a każdy błąd to tylko kolejny krok do Twojego <span className="text-gradient-purple font-bold">100% na maturze</span>.
          </p>
        </div>
        <Link
          to="/o-mnie"
          className="mt-8 inline-flex items-center text-white font-bold hover:text-purple-300 transition-all group text-base"
        >
          Poznaj mnie bliżej <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

    </div>
  </div>
</section>

      {/* SECTION 9: SIGNUP */}
      <section className="py-8 md:py-12 relative">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* LEWY BOX */}
            <motion.div
              className="glass-panel p-6 md:p-8 h-full flex flex-col"
              data-bg="image"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.22 }}
            >
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

              {/* DESKTOP ONLY */}
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
                    <div>
                      <span className="text-white/90 font-semibold">•</span> Czas lekcji:{' '}
                      <span className="text-white/90 font-semibold">60 min</span> (lub dłużej w pakietach).
                    </div>
                    <div>
                      <span className="text-white/90 font-semibold">•</span> Najczęściej:{' '}
                      <span className="text-white/90 font-semibold">online</span> + materiały po zajęciach.
                    </div>
                    <div>
                      <span className="text-white/90 font-semibold">•</span> Po pierwszym spotkaniu:{' '}
                      <span className="text-white/90 font-semibold">plan + priorytety</span> pod wynik.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* PRAWY BOX (formularz) */}
            <motion.div
              className="order-2 lg:order-1 lg:pl-6 xl:pl-10"
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

      {/* --- LIGHTBOX (MODAL) --- */}
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
    </div>
  );
}

export default HomePage;