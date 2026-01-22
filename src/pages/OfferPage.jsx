import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, GraduationCap, Users, UserRound, Package } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const offers = [
  {
    slug: 'indywidualne-premium',
    icon: GraduationCap,
    title: 'Indywidualne Premium – zajęcia ze mną',
    priceLine: '180 zł / 60 minut',
    bullets: ['Pełna uwaga nauczyciela', 'Indywidualny plan nauki'],
    imageAlt: 'Indywidualne Premium – zdjęcie',
  },
  {
    slug: 'indywidualne-pracownicy',
    icon: UserRound,
    title: 'Indywidualne zajęcia z pracownikami',
    priceLine: '140 zł / 60 minut',
    bullets: ['Nauczyciele po rekrutacji i szkoleniu', 'Materiały i metoda zgodne z programem'],
    imageAlt: 'Indywidualne z pracownikami – zdjęcie',
  },
  {
    slug: 'grupowe-ze-mna',
    icon: Users,
    title: 'Grupowe zajęcia ze mną',
    priceLine: '80 zł / osoba / 60 minut',
    bullets: ['Kameralne grupy 3–5 osób', 'Regularna nauka w stałej grupie'],
    imageAlt: 'Grupowe zajęcia – zdjęcie',
  },
  {
    slug: 'pakiety-grupowe',
    icon: Package,
    title: 'Pakiety miesięczne – grupowe zajęcia',
    priceLine: 'Pakiety: 4 / 8 / 12 zajęć',
    bullets: ['Tylko dla grup prowadzonych przeze mnie', 'Płatność z góry'],
    imageAlt: 'Pakiety miesięczne – zdjęcie',
  },
];

function MediaSlot({ alt, label = 'Miejsce na zdjęcie (wstaw URL)' }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
      <div className="aspect-[16/10] w-full grid place-items-center text-center p-4">
        <div>
          <div className="text-white font-semibold text-sm">{alt}</div>
          <div className="text-white/60 text-xs mt-1">{label}</div>
        </div>
      </div>
    </div>
  );
}

function OfferCardRow({ o, index }) {
  const Icon = o.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all p-5 md:p-6"
    >
      <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-5 items-start">
        {/* TEXT */}
        <div>
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-white/85" />
            </div>

            <div>
              <h3 className="text-white font-bold text-base md:text-lg leading-snug">{o.title}</h3>
              <div className="text-white/70 text-sm mt-1 font-semibold">{o.priceLine}</div>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            {o.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-white/80">
                <CheckCircle className="w-4 h-4 mt-0.5 text-white/70" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <Link
              to={`/oferta/${o.slug}`}
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors text-sm"
            >
              Zobacz szczegóły <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/zapisy"
              className="btn-accent inline-flex items-center justify-center gap-2 text-sm"
            >
              Zapisz się <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* MEDIA */}
        <div className="order-first lg:order-last">
          <MediaSlot alt={o.imageAlt} />
        </div>
      </div>
    </motion.div>
  );
}

function OfferPage() {
  return (
    <>
      <Helmet>
        <title>Oferta - MEDULIA | Korepetycje z biologii</title>
        <meta
          name="description"
          content="Oferta zajęć MEDULIA: indywidualne premium, indywidualne z pracownikami, grupowe oraz pakiety miesięczne. Zobacz szczegóły każdej opcji."
        />
      </Helmet>

      <div className="pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center glass-panel p-8"
            data-bg="image"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Oferta zajęć</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Kliknij „Zobacz szczegóły”, żeby zobaczyć dokładny opis, zasady i materiały.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-6 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6 md:p-8" data-bg="image">
            <SectionTitle>Rodzaje zajęć</SectionTitle>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {offers.map((o, i) => (
                <OfferCardRow key={o.slug} o={o} index={i} />
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6">
              <SectionTitle center={false} className="!mb-3">Zasady organizacyjne</SectionTitle>
              <ul className="space-y-2 text-white/80 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-white/70" />
                  Pakiety dotyczą wyłącznie grupowych zajęć prowadzonych przeze mnie.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-white/70" />
                  Płatność za pakiety pobierana jest z góry.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-white/70" />
                  Brak zwrotów przy nieobecności – przekazujemy materiały do samodzielnej nauki.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-white/70" />
                  Rezerwacja miejsca w grupie obowiązkowa; grupy odbywają się przy minimum 3 osobach.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OfferPage;
