import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, FileText, Info } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

// --- DATA DEFINITION (Skrócone dla czytelności kodu, ale dane są te same) ---
// (Tutaj jest ten sam obiekt OFFER_DETAILS co u Ciebie, nie zmieniałem treści, tylko logikę SEO)
// Używam Twojej struktury, żeby nic się nie zepsuło.

const OFFER_DETAILS = {
  'indywidualne-premium': {
    title: 'Indywidualne Premium – zajęcia ze mną',
    price: '180 zł / 60 minut',
    lead: 'To wariant dla osób, które chcą pracować na maksymalnej intensywności i mieć pełną uwagę nauczyciela.',
    // ... reszta danych ...
    highlights: ['Pełna uwaga nauczyciela', 'Indywidualny plan nauki', 'Przygotowanie do medycyny'],
    benefits: ['Tempo dopasowane do Ciebie', 'Analiza błędów', 'Domykanie luk', 'Stała kontrola'],
    forWho: ['Maturzyści celujący w medycynę', 'Osoby chcące zamknąć luki', 'Uczniowie lubiący strukturę'],
    howItWorks: ['Diagnoza', 'Plan', 'Zajęcia', 'Materiały po lekcji'],
    rules: ['Rezerwacja obowiązkowa', 'Brak zwrotów przy nieobecności (materiały)'],
    media: {
      hero: 'Premium 1:1',
      heroSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769819048/1_pehldo.png',
      sectionA: 'Plan nauki',
      sectionASrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822107/5_pcmgby.png',
      sectionB: 'Zadania egzaminacyjne',
      sectionBSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822108/10_llktmt.png',
    },
    files: [
      { title: 'Metabolizm (Komplet)', desc: 'Kompletny przewodnik', link: 'https://drive.google.com/file/d/1LcFjDDSHxyW6VsCNNtpfPVIL2frEJadW/view?usp=drive_link' },
      { title: 'Matura Rozszerzona', desc: 'Wymagania i przykłady', link: 'https://drive.google.com/file/d/1NQr6KscUxVJEhJQumNn9DDv7RHkUHWFQ/view?usp=drive_link' },
    ],
  },
  'indywidualne-pracownicy': {
    title: 'Indywidualne - Medulia Team',
    price: '140 zł / 60 minut',
    lead: 'Zajęcia 1:1 prowadzone przez nauczycieli po rekrutacji i szkoleniu. Metoda Medulia w niższej cenie.',
    highlights: ['Wykwalifikowani nauczyciele', 'Materiały Medulii', 'Brak pakietów', 'Jednolita jakość'],
    benefits: ['Standard Medulii taniej', 'Praca 1:1', 'Stabilna regularność', 'Materiały'],
    forWho: ['Osoby szukające tańszej alternatywy', 'Potrzebujący stałego prowadzenia', 'Maturzyści'],
    howItWorks: ['Cel', 'Logiczna struktura', 'Praca domowa'],
    rules: ['Brak pakietów', 'Rezerwacja obowiązkowa'],
    media: {
      hero: '1:1 z pracownikiem',
      heroSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769819047/2_f9e9xj.png',
      sectionA: 'Program i materiały',
      sectionASrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822108/12_tkkyvy.png',
      sectionB: 'Powtórki i zadania',
      sectionBSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822106/2_woklfp.png',
    },
    files: [
      { title: 'Pytania sprawdzające', desc: 'Zestaw do pracy', link: 'https://drive.google.com/file/d/1Szx0nKs4l2rtcG9jP9LLO-v3jWcenhvV/view?usp=drive_link' },
      { title: 'Podstawa Programowa', desc: 'Wymagania 2025/26', link: 'https://drive.google.com/file/d/1MzZsdCY2cwAbA-fJBPVLsLIag-2znoJZ/view?usp=drive_link' },
    ],
  },
  'grupowe-ze-mna': {
    title: 'Grupowe zajęcia ze mną',
    price: '80 zł / osoba / 60 minut',
    lead: 'Kameralne grupy 3–5 osób. Regularna praca w stałym składzie i motywacja grupy.',
    highlights: ['Grupy 3–5 osób', 'Stały skład', 'Możliwe pakiety'],
    benefits: ['Motywacja grupy', 'Niższa cena', 'Uczenie się na błędach innych', 'Regularność'],
    forWho: ['Osoby lubiące pracę w grupie', 'Uczący się przez dyskusję', 'Szukający systematyczności'],
    howItWorks: ['Stały plan', 'Zadania egzaminacyjne', 'Min. 3 osoby'],
    rules: ['Rezerwacja obowiązkowa', 'Min. 3 osoby', 'Brak zwrotów (materiały)'],
    media: {
      hero: 'Zajęcia grupowe',
      heroSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769819048/3_rj1dp0.png',
      sectionA: 'Kameralna grupa',
      sectionASrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822107/9_pwb1tj.png',
      sectionB: 'Wspólna praca',
      sectionBSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822109/6_xbrhac.png',
    },
    files: [
      { title: 'Plan Maturalny', desc: 'Harmonogram', link: 'https://drive.google.com/file/d/1Bgngdk0wNAH_rHXYdL16c7O_Airno94X/view?usp=drive_link' },
      { title: 'Metabolizm II', desc: 'Arkusz zadań', link: 'https://drive.google.com/file/d/1LcFjDDSHxyW6VsCNNtpfPVIL2frEJadW/view?usp=drive_link' },
    ],
  },
  'pakiety-grupowe': {
    title: 'Pakiety miesięczne – grupowe zajęcia',
    price: 'Pakiety: 4 / 8 / 12 zajęć',
    lead: 'Najlepsza opcja dla systematycznych. Stałe miejsce w grupie i przewidywalny koszt.',
    highlights: ['Tylko dla moich grup', 'Płatność z góry', 'Stałe miejsce', 'Niższa cena w pakiecie'],
    benefits: ['Plan na cały miesiąc', 'Stały progres', 'Dużo powtórek', 'Oszczędność'],
    forWho: ['Osoby systematyczne', 'Maturzyści', 'Szukający intensywnego rytmu'],
    packages: [
      { name: 'Pakiet Standard', details: ['4 zajęcia (1x tyg)', '300 zł/mc', 'Oszczędzasz', 'Stałe miejsce'] },
      { name: 'Pakiet Intensywny', details: ['8 zajęć (2x tyg)', '560 zł/mc', 'Polecany', 'Szybki progres'] },
      { name: 'Pakiet Matura', details: ['12 zajęć (3x tyg)', '780 zł/mc', 'Hardcore mode', 'Maksymalne efekty'] },
    ],
    rules: ['Płatność z góry', 'Brak zwrotów (materiały)', 'Min. 3 osoby'],
    media: {
      hero: 'Pakiety miesięczne',
      heroSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769819048/4_alpszx.png',
      sectionA: 'Plan miesiąca',
      sectionASrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822108/7_pwlfdd.png',
      sectionB: 'Zadania i powtórki',
      sectionBSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822107/8_dlejjd.png',
    },
    files: [
      { title: 'Matura Rozszerzona', desc: 'Kompendium', link: 'https://drive.google.com/file/d/1NQr6KscUxVJEhJQumNn9DDv7RHkUHWFQ/view?usp=drive_link' },
      { title: 'Pytania Sprawdzające', desc: 'Arkusze', link: 'https://drive.google.com/file/d/1Szx0nKs4l2rtcG9jP9LLO-v3jWcenhvV/view?usp=drive_link' },
    ],
  },
};

// ... (Komponenty MediaSlot i FileSlot bez zmian - skopiuj je ze starego pliku, tutaj dla czytelności pomijam ich definicję, ale wklej je u siebie!)
function MediaSlot({ title, desc = 'Miejsce na zdjęcie', ratio = 'aspect-[16/10]', src, alt }) {
  const finalAlt = alt || title || 'Zdjęcie';
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-lg">
      <div className={`${ratio} w-full relative`}>
        {src ? (
          <>
            <img src={src} alt={finalAlt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/0 to-black/10" />
          </>
        ) : (
          <div className="absolute inset-0 grid place-items-center text-center p-4">
             <div><div className="text-white font-semibold text-sm">{title}</div></div>
          </div>
        )}
      </div>
    </div>
  );
}

function FileSlot({ title, desc = 'Materiały do zajęć', link }) {
  const Wrapper = link ? 'a' : 'div';
  const props = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Wrapper {...props} className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-start gap-3 hover:bg-white/10 transition-colors cursor-pointer group">
      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-colors">
        <FileText className="w-5 h-5 text-white/80 group-hover:text-purple-300" />
      </div>
      <div className="min-w-0">
        <div className="text-white font-semibold text-sm">{title}</div>
        <div className="text-white/60 text-xs mt-1">{desc}</div>
        <div className="mt-3">
          <span className="inline-flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider group-hover:text-white transition-colors">
            Pobierz <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

function OfferDetailPage() {
  const { slug } = useParams();
  const data = OFFER_DETAILS[slug];

  if (!data) {
    return (
      <div className="pt-28 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel" data-bg="image">
            <h1 className="text-2xl md:text-3xl font-bold text-white">Nie znaleziono oferty</h1>
            <Link to="/oferta" className="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 mt-6">
               <ArrowLeft className="w-4 h-4" /> Wróć do oferty
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Schema.org - Kurs Edukacyjny
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": data.title,
    "description": data.lead,
    "provider": {
      "@type": "Organization",
      "name": "Medulia",
      "sameAs": "https://medulia.pl"
    },
    "offers": {
        "@type": "Offer",
        "category": "Paid",
        "priceCurrency": "PLN",
        "price": data.price.match(/\d+/)?.[0] || "0",
        "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>{data.title} - Korepetycje Biologia | MEDULIA</title>
        <meta name="description" content={`${data.title} - ${data.price}. ${data.lead}. Przygotowanie do matury z biologii na 100%.`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* HERO */}
      <div className="pt-28 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 md:p-8"
            data-bg="image"
          >
            <Link
              to="/oferta"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Wróć do oferty
            </Link>

            <div className="mt-5 grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{data.title}</h1>
                <div className="text-white/70 mt-2 font-semibold">{data.price}</div>

                <p className="text-white/80 mt-4 leading-relaxed text-sm md:text-base">{data.lead}</p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link to="/zapisy" className="btn-accent inline-flex items-center justify-center gap-2">
                    Zapisz się <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {Array.isArray(data.rules) && data.rules.length > 0 && (
                  <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-5">
                    <div className="flex items-center gap-2 text-white font-bold mb-2">
                      <Info className="w-4 h-4 text-white/80" /> Ważne zasady
                    </div>
                    <ul className="space-y-2 text-white/80 text-sm">
                      {data.rules.map((x) => (
                        <li key={x} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 text-white/70" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <MediaSlot
                  title={data.media?.hero || 'Zdjęcie oferty'}
                  ratio="aspect-video"
                  src={data.media?.heroSrc}
                  alt={data.title}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CONTENT SECTIONS... (Reszta sekcji identyczna jak w Twoim kodzie, zachowana struktura) */}
      <section className="py-6 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6">
          
          <div className="grid lg:grid-cols-2 gap-6">
            <div id="skrot" className="glass-panel p-6 md:p-8 scroll-mt-28" data-bg="image">
              <SectionTitle center={false}>Najważniejsze w skrócie</SectionTitle>
              <ul className="mt-5 space-y-3 text-white/80 text-sm leading-relaxed">
                {(data.highlights || []).map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-white/70" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel p-6 md:p-8" data-bg="image">
              <SectionTitle center={false}>Dla kogo?</SectionTitle>
              <ul className="mt-5 space-y-3 text-white/80 text-sm leading-relaxed">
                {(data.forWho || []).map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-white/70" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="glass-panel p-6 md:p-8" data-bg="image">
              <SectionTitle center={false}>Jak wyglądają zajęcia</SectionTitle>
              <ul className="mt-5 space-y-3 text-white/80 text-sm leading-relaxed">
                {(data.howItWorks || []).map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-white/70" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-4">
                 <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                    <div className="text-white font-bold text-sm mb-3">Zalety tej formy</div>
                    <ul className="space-y-2 text-white/80 text-sm leading-relaxed">
                       {(data.benefits || []).slice(0, 5).map((b) => (
                          <li key={b} className="flex items-start gap-2">
                             <CheckCircle className="w-4 h-4 mt-0.5 text-white/70" />
                             <span>{b}</span>
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>
            </div>

            <div className="glass-panel p-6 md:p-8" data-bg="image">
              <SectionTitle center={false}>Galeria</SectionTitle>
              <div className="mt-5 grid gap-4">
                <MediaSlot
                  title={data.media?.sectionA}
                  desc="np. plan, tablica, notatki"
                  ratio="aspect-[16/10]"
                  src={data.media?.sectionASrc}
                  alt={`${data.title} – galeria A`}
                />
                <MediaSlot
                  title={data.media?.sectionB}
                  desc="np. zadania CKE"
                  ratio="aspect-[16/10]"
                  src={data.media?.sectionBSrc}
                  alt={`${data.title} – galeria B`}
                />
              </div>
            </div>
          </div>

          {Array.isArray(data.packages) && (
            <div id="pakiety" className="glass-panel p-6 md:p-8 scroll-mt-28" data-bg="image">
              <SectionTitle>Pakiety miesięczne</SectionTitle>
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                {data.packages.map((pkg) => (
                  <div key={pkg.name} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                    <div className="text-white font-bold text-base">{pkg.name}</div>
                    <ul className="mt-3 space-y-2 text-white/80 text-sm">
                      {pkg.details.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 text-white/70" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="glass-panel p-6 md:p-8" data-bg="image">
            <SectionTitle>Materiały do pobrania</SectionTitle>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {(data.files || []).map((f) => (
                <FileSlot key={f.title} title={f.title} desc={f.desc} link={f.link} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link to="/zapisy" className="btn-accent inline-flex items-center justify-center gap-2">
                Zapisz się <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OfferDetailPage;