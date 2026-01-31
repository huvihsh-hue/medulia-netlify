import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, FileText, Info } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

function MediaSlot({
  title,
  desc = 'Miejsce na zdjęcie — wstaw URL',
  ratio = 'aspect-[16/10]',
  src,
  alt,
}) {
  const finalAlt = alt || title || 'Zdjęcie';

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-lg">
      <div className={`${ratio} w-full relative`}>
        {src ? (
          <>
            <img
              src={src}
              alt={finalAlt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/0 to-black/10" />
          </>
        ) : (
          <div className="absolute inset-0 grid place-items-center text-center p-4">
            <div>
              <div className="text-white font-semibold text-sm">{title}</div>
              <div className="text-white/60 text-xs mt-1">{desc}</div>
            </div>
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
    <Wrapper 
      {...props} 
      className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-start gap-3 hover:bg-white/10 transition-colors cursor-pointer group"
    >
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

const OFFER_DETAILS = {
  'indywidualne-premium': {
    title: 'Indywidualne Premium – zajęcia ze mną',
    price: '180 zł / 60 minut',
    lead:
      'To wariant dla osób, które chcą pracować na maksymalnej intensywności i mieć pełną uwagę nauczyciela. Skupiamy się na tym, co realnie daje punkty na maturze: zrozumienie mechanizmów, schematy, zadania i regularne sprawdzanie postępów.',
    highlights: [
      'Pełna uwaga nauczyciela (100% czasu dla Ciebie).',
      'Indywidualny plan nauki (dopasowany do poziomu i celu).',
      'Idealne przygotowanie do matur, egzaminów i sprawdzianów.',
    ],
    benefits: [
      'Tempo i plan dopasowane do Ciebie — bez kompromisów.',
      'Największy nacisk na zadania i analizę błędów (to robi wynik).',
      'Szybkie domykanie luk: wiesz, co umiesz i co dokładnie poprawić.',
      'Stała kontrola postępów i korekta strategii nauki.',
    ],
    forWho: [
      'Maturzyści celujący w bardzo wysoki wynik (np. medycyna, farmacja, biotechnologia).',
      'Osoby, które chcą szybko zidentyfikować luki i je zamknąć planem.',
      'Uczniowie, którzy nie lubią chaosu i chcą jasnej struktury nauki.',
    ],
    howItWorks: [
      'Start: diagnoza (co umiesz, co blokuje wynik, co trzeba ustawić w planie).',
      'Plan: harmonogram nauki + lista tematów i priorytetów (co daje najwięcej punktów).',
      'Zajęcia: schemat → zadania → analiza błędów → mini-powtórka.',
      'Po zajęciach: konkretne materiały do pracy (karty, zadania, krótkie checklisty).',
    ],
    rules: [
      'Liczba miejsc ograniczona – rezerwacja obowiązkowa.',
      'Jeśli nie możesz być na zajęciach: materiały dostajesz do samodzielnej nauki (bez zwrotów).',
    ],
    media: {
      hero: 'Premium 1:1',
      heroSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769819048/1_pehldo.png',

      sectionA: 'Plan nauki',
      // ZMIANA: Nowe zdjęcie z listy nr 1
      sectionASrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822107/5_pcmgby.png',

      sectionB: 'Zadania egzaminacyjne',
      // ZMIANA: Nowe zdjęcie z listy nr 1
      sectionBSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822108/10_llktmt.png',
    },
    files: [
      { 
        title: 'Metabolizm (Komplet)', 
        desc: 'Kompletny przewodnik po procesach', 
        link: 'https://drive.google.com/file/d/1LcFjDDSHxyW6VsCNNtpfPVIL2frEJadW/view?usp=drive_link' 
      },
      { 
        title: 'Matura Rozszerzona', 
        desc: 'Konkretne wymagania i przykłady', 
        link: 'https://drive.google.com/file/d/1NQr6KscUxVJEhJQumNn9DDv7RHkUHWFQ/view?usp=drive_link' 
      },
    ],
  },

  'indywidualne-pracownicy': {
    title: 'Indywidualne - Medulia Team',
    price: '140 zł / 60 minut',
    lead:
      'Zajęcia 1:1 prowadzone przez nauczycieli po rekrutacji i szkoleniu. Pracują według jednolitego programu MEDULIA, z tym samym sposobem tłumaczenia, materiałami i standardem prowadzenia.',
    highlights: [
      'Wykwalifikowani nauczyciele przeszkoleni przeze mnie.',
      'Materiały i metoda zgodne z naszym programem.',
      'Brak pakietów – sprzedaż tylko pojedynczych godzin.',
      'Jednolita jakość nauczania.',
    ],
    benefits: [
      'Ten sam standard programu MEDULIA, tylko w niższej cenie.',
      'Dużo pracy 1:1 na Twoich błędach — szybko widać progres.',
      'Stabilna regularność: łatwiej utrzymać rytm nauki.',
      'Materiały i struktura zajęć spójne z metodą.',
    ],
    forWho: [
      'Osoby, które chcą regularnych zajęć 1:1, ale w niższej cenie.',
      'Uczniowie, którzy potrzebują stałego prowadzenia i kontroli postępów.',
      'Maturzyści, którzy wolą indywidualne tempo i więcej korekty błędów.',
    ],
    howItWorks: [
      'Ustalamy cel: matura / sprawdzian / egzamin (i tematykę, która jest priorytetem).',
      'Zajęcia prowadzone w logicznej strukturze: teoria → przykłady → zadania → powtórka.',
      'Dostajesz materiały do pracy między zajęciami (karty, checklisty, krótkie zadania).',
    ],
    rules: ['Brak pakietów dla pracowników — tylko pojedyncze godziny.', 'Rezerwacja terminu obowiązkowa.'],
    media: {
      hero: '1:1 z pracownikiem',
      heroSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769819047/2_f9e9xj.png',

      sectionA: 'Program i materiały',
      // ZMIANA: Nowe zdjęcie z listy nr 2
      sectionASrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822108/12_tkkyvy.png',

      sectionB: 'Powtórki i zadania',
      // ZMIANA: Nowe zdjęcie z listy nr 2
      sectionBSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822106/2_woklfp.png',
    },
    files: [
      { 
        title: 'Pytania sprawdzające', 
        desc: 'Zestaw do samodzielnej pracy', 
        link: 'https://drive.google.com/file/d/1Szx0nKs4l2rtcG9jP9LLO-v3jWcenhvV/view?usp=drive_link' 
      },
      { 
        title: 'Podstawa Programowa', 
        desc: 'Wymagania CKE 2025/26', 
        link: 'https://drive.google.com/file/d/1MzZsdCY2cwAbA-fJBPVLsLIag-2znoJZ/view?usp=drive_link' 
      },
    ],
  },

  'grupowe-ze-mna': {
    title: 'Grupowe zajęcia ze mną',
    price: '80 zł / osoba / 60 minut',
    lead:
      'Kameralne grupy 3–5 osób. Pracujemy regularnie, w stałym składzie. Każde zajęcia mają rytm: powtórka → zadania → wnioski. Dzięki temu uczysz się systematycznie i rośniesz tydzień po tygodniu.',
    highlights: [
      'Kameralne grupy 3–5 osób.',
      'Regularna nauka w stałej grupie (stałe miejsce).',
      'Pakiety miesięczne dostępne tylko dla grup prowadzonych przeze mnie.',
    ],
    benefits: [
      'Motywacja i tempo grupy bez tłoku (3–5 osób).',
      'Regularność: stałe miejsce = stały progres.',
      'Uczysz się na pytaniach innych — to przyspiesza zrozumienie.',
      'Dużo zadań i powtórek w rytmie tygodniowym.',
    ],
    forWho: [
      'Osoby, które chcą motywacji i tempa grupy, ale bez tłoku.',
      'Uczniowie, którzy najlepiej uczą się przez zadania i dyskusję.',
      'Maturzyści, którzy wolą systematyczność niż “zryw” na końcu.',
    ],
    howItWorks: [
      'Stały plan tematyczny i rytm powtórek.',
      'Zadania egzaminacyjne wplecione regularnie, żeby budować wynik.',
      'Minimum 3 osoby — wtedy grupa się odbywa.',
    ],
    rules: [
      'Rezerwacja miejsca w grupie obowiązkowa.',
      'Grupy odbywają się przy minimum 3 osobach.',
      'Brak zwrotów przy nieobecności — przekazujemy materiały do samodzielnej nauki.',
    ],
    media: {
      hero: 'Zajęcia grupowe',
      heroSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769819048/3_rj1dp0.png',

      sectionA: 'Kameralna grupa',
      // ZMIANA: Nowe zdjęcie z listy nr 3
      sectionASrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822107/9_pwb1tj.png',

      sectionB: 'Wspólna praca',
      // ZMIANA: Nowe zdjęcie z listy nr 3
      sectionBSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822109/6_xbrhac.png',
    },
    files: [
      { 
        title: 'Plan Maturalny', 
        desc: 'Szczegółowy harmonogram', 
        link: 'https://drive.google.com/file/d/1Bgngdk0wNAH_rHXYdL16c7O_Airno94X/view?usp=drive_link' 
      },
      { 
        title: 'Metabolizm (Część II)', 
        desc: 'Arkusz zadań z kluczem', 
        link: 'https://drive.google.com/file/d/1LcFjDDSHxyW6VsCNNtpfPVIL2frEJadW/view?usp=drive_link' 
      },
    ],
  },

  'pakiety-grupowe': {
    title: 'Pakiety miesięczne – grupowe zajęcia',
    price: 'Pakiety: 4 / 8 / 12 zajęć',
    lead:
      'Pakiety są wyłącznie dla grupowych zajęć prowadzonych przeze mnie. Dają stałe miejsce w grupie i przewidywalny plan pracy. To najlepsza opcja dla osób, które chcą zbudować wynik konsekwencją.',
    highlights: [
      'Pakiety tylko dla grup prowadzonych przeze mnie.',
      'Płatność z góry.',
      'Brak zwrotów przy nieobecności – materiały do samodzielnej nauki.',
      'Rezerwacja miejsca obowiązkowa; minimum 3 osoby.',
    ],
    benefits: [
      'Najlepsza opcja pod systematyczność — plan na cały miesiąc.',
      'Stałe miejsce w grupie i przewidywalny rytm nauki.',
      'Więcej powtórek i więcej zadań = stabilnie rosnący wynik.',
      'Najkorzystniejsza cena za pojedyncze zajęcia (w pakietach).',
    ],
    forWho: [
      'Osoby, które chcą stałej struktury i regularności (bez “zrywów” przed maturą).',
      'Maturzyści, którzy lubią plan i konsekwencję — tydzień po tygodniu budujemy wynik.',
      'Uczniowie, którym łatwiej utrzymać motywację, gdy mają stałe miejsce w grupie.',
      'Osoby przygotowujące się do sprawdzianów/egzaminów i chcące intensywniejszego rytmu (8 lub 12 zajęć).',
    ],
    packages: [
      {
        name: 'Pakiet Standard',
        details: ['4 zajęcia w miesiącu (1× w tygodniu)', '300 zł / osoba', '75 zł za pojedyncze zajęcie', 'Stałe miejsce w grupie, regularna nauka'],
      },
      {
        name: 'Pakiet Intensywny',
        details: ['8 zajęć w miesiącu (2× w tygodniu)', '560 zł / osoba', '70 zł za pojedyncze zajęcie', 'Polecany przed sprawdzianami i egzaminami'],
      },
      {
        name: 'Pakiet Egzamin / Matura',
        details: ['12 zajęć w miesiącu (3× w tygodniu)', '780 zł / osoba', '65 zł za pojedyncze zajęcie', 'Intensywne przygotowanie, powtórki i zadania egzaminacyjne'],
      },
    ],
    rules: [
      'Pakiety dotyczą wyłącznie grupowych zajęć prowadzonych przeze mnie.',
      'Płatność pobierana z góry.',
      'Brak zwrotów przy nieobecności – przekazujemy materiały do samodzielnej nauki.',
      'Rezerwacja miejsca obowiązkowa; minimum 3 osoby.',
    ],
    media: {
      hero: 'Pakiety miesięczne',
      heroSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769819048/4_alpszx.png',

      sectionA: 'Plan miesiąca',
      // ZMIANA: Nowe zdjęcie z listy nr 4
      sectionASrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822108/7_pwlfdd.png',

      sectionB: 'Zadania i powtórki',
      // ZMIANA: Nowe zdjęcie z listy nr 4
      sectionBSrc: 'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769822107/8_dlejjd.png',
    },
    files: [
      { 
        title: 'Matura Rozszerzona', 
        desc: 'Kompendium wiedzy', 
        link: 'https://drive.google.com/file/d/1NQr6KscUxVJEhJQumNn9DDv7RHkUHWFQ/view?usp=drive_link' 
      },
      { 
        title: 'Pytania Sprawdzające', 
        desc: 'Przykładowe arkusze', 
        link: 'https://drive.google.com/file/d/1Szx0nKs4l2rtcG9jP9LLO-v3jWcenhvV/view?usp=drive_link' 
      },
    ],
  },
};

function OfferDetailPage() {
  const { slug } = useParams();
  const data = OFFER_DETAILS[slug];

  if (!data) {
    return (
      <div className="pt-28 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel" data-bg="image">
            <h1 className="text-2xl md:text-3xl font-bold text-white">Nie znaleziono oferty</h1>
            <p className="text-white/80 mt-3 text-sm">Ten adres nie pasuje do żadnej pozycji oferty.</p>
            <div className="mt-6">
              <Link
                to="/oferta"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80"
              >
                <ArrowLeft className="w-4 h-4" /> Wróć do oferty
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{data.title} - MEDULIA</title>
        <meta name="description" content={`${data.title}. ${data.price}`} />
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
                  desc="Wstaw tu realne zdjęcie tej formy zajęć"
                  ratio="aspect-video"
                  src={data.media?.heroSrc}
                  alt={data.title}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="py-6 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6">
          {/* HIGHLIGHTS + DLA KOGO */}
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

          {/* JAK WYGLĄDA + ZDJĘCIA */}
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

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <div className="text-white font-bold text-sm mb-3">Jak przygotować się do pierwszych zajęć</div>
                  <ul className="space-y-2 text-white/80 text-sm leading-relaxed">
                    {[
                      'Napisz, do czego się przygotowujesz (matura / sprawdzian / egzamin) i kiedy.',
                      'Podeślij 1–2 ostatnie arkusze/sprawdziany albo listę tematów, które sprawiają problem.',
                      'Powiedz, ile czasu realnie masz tygodniowo na naukę — ustawimy plan bez spiny.',
                      'Na pierwszych zajęciach zrobimy diagnozę i ustalimy priorytety.',
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 text-white/70" />
                        <span>{x}</span>
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
                  title={data.media?.sectionA || 'Zdjęcie A'}
                  desc="np. plan, tablica, notatki"
                  ratio="aspect-[16/10]"
                  src={data.media?.sectionASrc}
                  alt={`${data.title} – galeria A`}
                />
                <MediaSlot
                  title={data.media?.sectionB || 'Zdjęcie B'}
                  desc="np. zadania CKE, analiza błędów"
                  ratio="aspect-[16/10]"
                  src={data.media?.sectionBSrc}
                  alt={`${data.title} – galeria B`}
                />
              </div>
            </div>
          </div>

          {/* PAKIETY (tylko jeśli istnieją) */}
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

          {/* PLIKI / MATERIAŁY */}
          <div className="glass-panel p-6 md:p-8" data-bg="image">
            <SectionTitle>Materiały do pobrania</SectionTitle>
            <p className="text-white/70 text-sm mt-4">Tu wstawisz linki do kart maturalnych, PDF-ów, mini-arkuszy i checklist.</p>

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