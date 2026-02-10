import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, ArrowRight, Clock, Share2, BookOpen, CheckCircle } from 'lucide-react';
import { optimizeImage } from '@/lib/utils'; // <--- IMPORT OPTYMALIZACJI

// --- BAZA DANYCH ARTYKUŁÓW (SEO POWERHOUSE) ---
const ARTICLES_DATA = {
  '5-strategii-nauki-biologia-matura': {
    title: '5 strategii, które gwarantują wynik 80%+ z biologii (Bez wkuwania)',
    date: '15.01.2026',
    category: 'Strategia',
    readTime: '8 min czytania',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200',
    intro: 'Przygotowania do matury z biologii to maraton, nie sprint. Większość uczniów popełnia ten sam błąd: uczą się wszystkiego "po kolei" z podręcznika, zapominając o tym, co było miesiąc temu. W Medulii opracowaliśmy system, który eliminuje zapominanie.',
    content: `
      <h2>1. Planowanie wsteczne (Reverse Engineering)</h2>
      <p>Nie planuj "od dzisiaj do matury". To pułapka. Planuj <strong>od matury do dzisiaj</strong>. Weź kalendarz, zaznacz datę egzaminu majowego i cofaj się tydzień po tygodniu.</p>
      <p>Dlaczego to działa? Bo widzisz realnie, ile masz czasu. W <a href="/oferta">korepetycjach Medulia</a> zawsze zaczynamy od tego kroku. Okazuje się, że na genetykę masz tylko 3 tygodnie, a nie "jakoś to będzie".</p>
      
      <h2>2. Metoda Interwałowa (Spaced Repetition)</h2>
      <p>Zapominanie to naturalny proces biologiczny. Krzywa zapominania Ebbinghausa jest bezlitosna: po 6 dniach pamiętasz tylko ok. 20% materiału. Wkuwanie "na blachę" raz, a porządnie, nie działa.</p>
      <p><strong>Złota zasada Medulii:</strong> Powtórka musi nastąpić w konkretnych momentach: po 24h, po 3 dniach, po tygodniu i po miesiącu.</p>

      <h2>3. Aktywne przypominanie (Active Recall)</h2>
      <p>Czytanie notatek to najgorsza metoda nauki. Twój mózg jest wtedy bierny. Zamiast czytać rozdział o fotosyntezie, zamknij książkę i spróbuj narysować schemat fazy jasnej z pamięci. Boli? Ma boleć. Ten "ból" to moment, w którym tworzą się połączenia nerwowe.</p>

      <div class="my-8 p-6 bg-purple-500/10 border-l-4 border-purple-500 rounded-r-lg">
        <h3 class="text-purple-300 font-bold text-lg mb-2">Tip Julii Dobrzyńskiej:</h3>
        <p class="text-white/90 m-0">Nie rób notatek "na czysto" kolorowymi pisakami. To strata czasu. Rób notatki w formie pytań do samego siebie.</p>
      </div>

      <h2>4. Klucz CKE to Twój wróg i przyjaciel</h2>
      <p>Możesz mieć wiedzę profesora akademickiego, a nie zdasz matury, jeśli nie trafisz w klucz. Czasowniki operacyjne: <em>wyjaśnij, podaj, określ, wykaż</em> oznaczają zupełnie co innego.</p>

      <h2>5. Arkusze rób na czas</h2>
      <p>Od marca rób jeden arkusz tygodniowo ze stoperem. Jeśli nie zdążysz przenieść odpowiedzi do karty w domu, nie zdążysz też na maturze.</p>
    `
  },
  'czasowniki-operacyjne-cke-biologia': {
    title: 'Klucz CKE: Wyjaśnij vs Opisz. Dlaczego tracisz punkty?',
    date: '10.01.2026',
    category: 'Błędy CKE',
    readTime: '6 min czytania',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1200',
    intro: 'Masz wrażenie, że napisałeś dobrze, a sprawdzający skreślił całą odpowiedź i dał 0 punktów? Witaj w świecie klucza maturalnego. To najczęstsza przyczyna niepowodzeń na maturze z biologii.',
    content: `
      <h2>Wyjaśnij vs Opisz – Odwieczna walka</h2>
      <p>To klasyka gatunku. Mylenie tych dwóch poleceń kosztuje maturzystów średnio 10-15% punktów.</p>
      
      <h3>Polecenie: Opisz</h3>
      <p>Oznacza: przedstaw cechy, budowę, przebieg. Nie musisz pisać "dlaczego". Masz pisać "jak jest".</p>
      <p><strong>Dobra odpowiedź:</strong> Mitochondrium jest otoczone dwiema błonami. Błona zewnętrzna jest gładka, a wewnętrzna tworzy fałdy.</p>

      <h3>Polecenie: Wyjaśnij</h3>
      <p>Oznacza: musisz podać mechanizm przyczynowo-skutkowy. Musisz połączyć przyczynę z efektem.</p>
      <p><em>Przykład: Wyjaśnij, dlaczego błona wewnętrzna mitochondrium jest pofałdowana.</em></p>
      <ul>
        <li><strong>Źle (Opis):</strong> Błona tworzy grzebienie mitochondrialne.</li>
        <li><strong>Dobrze (Wyjaśnienie):</strong> Pofałdowanie zwiększa powierzchnię błony [PRZYCZYNA], co pozwala na umieszczenie w niej większej liczby kompleksów łańcucha oddechowego [MECHANIZM], co zwiększa wydajność syntezy ATP [SKUTEK].</li>
      </ul>

      <h2>Wykaż (związek)</h2>
      <p>Tutaj musisz pokazać relację między dwoma faktami. Zazwyczaj budową a funkcją. Np. Wykaż związek między brakiem jądra w erytrocycie a transportem tlenu.</p>
    `
  },
  'fotosynteza-c3-c4-cam-porownanie': {
    title: 'Fotosynteza C3, C4 i CAM – Jak to w końcu zrozumieć?',
    date: '02.02.2026',
    category: 'Metabolizm',
    readTime: '12 min czytania',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1200',
    intro: 'RuBisCO to najbardziej leniwy enzym świata, który czasem myli tlen z dwutlenkiem węgla. Rośliny musiały wymyślić sposób, żeby sobie z tym poradzić. Poznaj mechanizmy C4 i CAM bez tajemnic.',
    content: `
      <h2>Problem: Fotooddychanie</h2>
      <p>Zanim zrozumiemy C4 i CAM, musimy zrozumieć problem roślin C3. Ich enzym, RuBisCO, ma powinowactwo zarówno do CO2, jak i do O2. W gorące dni, gdy aparaty szparkowe się zamykają (żeby nie stracić wody), stężenie O2 w liściu rośnie. RuBisCO przyłącza tlen zamiast CO2. To marnotrawstwo energii zwane <strong>fotooddychaniem</strong>.</p>

      <h2>Rozwiązanie C4: Rozdział przestrzenny</h2>
      <p>Rośliny C4 (kukurydza, trzcina cukrowa) są sprytne. Oddzieliły proces wiązania CO2 od Cyklu Calvina.</p>
      <ul>
        <li><strong>Komórki mezofilu:</strong> Tutaj działa enzym karboksylaza PEP. Nie myli się on nigdy z tlenem. Wiąże CO2 do szczawiooctanu (4 węgle - stąd nazwa C4).</li>
        <li><strong>Komórki pochwy okołowiązkowej:</strong> Tutaj transportowany jest jabłczan, który uwalnia CO2 prosto "pod nos" RuBisCO. Dzięki temu stężenie CO2 jest tak wysokie, że RuBisCO nie ma szans na pomyłkę.</li>
      </ul>

      <h2>Rozwiązanie CAM: Rozdział czasowy</h2>
      <p>Rośliny CAM (kaktusy, ananas) żyją w ekstremalnej suszy. Nie mogą otworzyć szparek w dzień.</p>
      <ul>
        <li><strong>Noc:</strong> Szparki otwarte. CO2 wchodzi i jest wiązane do kwasu jabłkowego, który magazynowany jest w wakuoli.</li>
        <li><strong>Dzień:</strong> Szparki zamknięte. Kwas jabłkowy z wakuoli uwalnia CO2 do Cyklu Calvina.</li>
      </ul>

      <div class="my-8 p-6 bg-green-500/10 border-l-4 border-green-500 rounded-r-lg">
        <h3 class="text-green-300 font-bold text-lg mb-2">Pewniak Maturalny:</h3>
        <p class="text-white/90 m-0">Na maturze często dają wykresy pobierania CO2 w ciągu doby. Jeśli roślina pobiera CO2 w nocy = CAM. Jeśli w dzień = C3 lub C4 (tu trzeba patrzeć na anatomię liścia - wieniec komórek w C4).</p>
      </div>
    `
  },
  'potencjal-czynnosciowy-uklad-nerwowy': {
    title: 'Potencjał spoczynkowy i czynnościowy – Fizjologia neuronu',
    date: '28.01.2026',
    category: 'Fizjologia',
    readTime: '15 min czytania',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200',
    intro: 'Jak to się dzieje, że myślisz? To tylko ruch jonów sodu i potasu przez błonę. Wyjaśniamy polaryzację, depolaryzację i repolaryzację krok po kroku.',
    content: `
      <h2>1. Potencjał spoczynkowy (-70mV)</h2>
      <p>Błona neuronu jest spolaryzowana. Na zewnątrz jest "plus" (dużo Na+), wewnątrz jest "minus" (dużo anionów białkowych i K+). Ten stan utrzymuje <strong>Pompa Sodowo-Potasowa</strong>, która wyrzuca 3 jony Na+ i wprowadza 2 jony K+, zużywając ATP.</p>

      <h2>2. Depolaryzacja (Strzał)</h2>
      <p>Gdy bodziec jest wystarczająco silny (przekroczy próg pobudliwości), otwierają się kanały sodowe bramkowane napięciem. Sód (Na+) lawinowo napływa do środka komórki. Potencjał skacze do +30mV. Wnętrze staje się dodatnie.</p>

      <h2>3. Repolaryzacja (Powrót)</h2>
      <p>Neuron musi odpocząć. Zamykają się kanały sodowe, otwierają potasowe. Potas (K+) ucieka na zewnątrz, zabierając ładunki dodatnie. Błona wraca do "minusa".</p>

      <h2>4. Hiperpolaryzacja</h2>
      <p>Kanały potasowe są leniwe i zamykają się powoli. Ucieka za dużo potasu, potencjał spada poniżej -70mV. Wtedy do gry znów wchodzi pompa Na+/K+, żeby przywrócić równowagę.</p>

      <h3>Co to jest impuls saltacyjny?</h3>
      <p>W aksonach z osłonką mielinową impuls "skacze" od przewężenia Ranviera do przewężenia. To znacznie przyspiesza przewodzenie (do 120 m/s). To kluczowe pytanie na maturze przy porównywaniu układu nerwowego bezkręgowców i kręgowców.</p>
    `
  },
  'odpornosc-swoista-nieswoista-szczepionki': {
    title: 'Immunologia w pigułce: Odporność swoista vs nieswoista',
    date: '18.02.2026',
    category: 'Immunologia',
    readTime: '10 min czytania',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
    intro: 'Limfocyty T, B, makrofagi, antygeny... Gubisz się w tym? Uporządkujmy wiedzę o układzie odpornościowym, bo to pewniak w zadaniach typu "wykaż związek".',
    content: `
      <h2>Linia obrony 1: Odporność Nieswoista (Wrodzona)</h2>
      <p>Działa szybko, ale "na ślepo". Atakuje wszystko, co obce.</p>
      <ul>
        <li><strong>Bariery fizyczne:</strong> Skóra, błony śluzowe.</li>
        <li><strong>Bariery chemiczne:</strong> Pot, łzy (lizozym), kwas w żołądku.</li>
        <li><strong>Komórki:</strong> Makrofagi (wielkie żarłacze) i Granulocyty. Działają przez fagocytozę.</li>
      </ul>

      <h2>Linia obrony 2: Odporność Swoista (Nabyta)</h2>
      <p>Działa wolniej, ale precyzyjnie. Wymaga rozpoznania konkretnego wroga (antygenu).</p>
      <ul>
        <li><strong>Odpowiedź humoralna (Limfocyty B):</strong> Produkcja przeciwciał. Przeciwciała "oblepiają" wirusy i bakterie (opsonizacja), ułatwiając ich zjedzenie przez makrofagi.</li>
        <li><strong>Odpowiedź komórkowa (Limfocyty T):</strong>
          <ul>
            <li>Limfocyty Tc (cytotoksyczne): Zabijają własne komórki organizmu, które zostały zakażone (np. wirusem) lub są nowotworowe.</li>
            <li>Limfocyty Th (pomocnicze): Dyrygenci. Wydzielają cytokiny, które pobudzają limfocyty B i Tc do ataku. Bez nich (jak w HIV) odporność siada.</li>
          </ul>
        </li>
      </ul>

      <h2>Szczepionka vs Surowica</h2>
      <p>To pytanie pojawia się co roku.</p>
      <ul>
        <li><strong>Szczepionka (Czynna):</strong> Podajemy antygen (zabitego wirusa). Organizm sam musi wyprodukować przeciwciała i komórki pamięci. Działa długotrwale.</li>
        <li><strong>Surowica (Bierna):</strong> Podajemy gotowe przeciwciała. Działa natychmiast, ale krótko (bo przeciwciała się zużyją, a nie ma komórek pamięci). Stosujemy np. przy ukąszeniu żmii.</li>
      </ul>
    `
  },
  'enzymy-kinetyka-i-regulacja': {
    title: 'Enzymy: Inhibicja kompetycyjna i niekompetycyjna',
    date: '12.02.2026',
    category: 'Biochemia',
    readTime: '9 min czytania',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1200',
    intro: 'Wykresy Michaelisa-Menten to zmora wielu uczniów. Jak odróżnić inhibicję na wykresie? Czym jest allosteria? Tłumaczę to na prostych przykładach.',
    content: `
      <h2>Jak działa enzym?</h2>
      <p>Enzym nie zmienia równowagi reakcji, ale obniża <strong>energię aktywacji</strong>. Dzięki temu reakcja zachodzi szybciej. Kluczowe pojęcie: Centrum Aktywne.</p>

      <h2>Inhibicja Kompetycyjna (Walka o krzesło)</h2>
      <p>Inhibitor jest podobny do substratu. Walczy z nim o wejście do centrum aktywnego. Jak wygrać tę walkę? Dodać więcej substratu! Jeśli zwiększymy stężenie substratu, Vmax (szybkość maksymalna) pozostanie bez zmian, ale Km (stała Michaelisa) wzrośnie (powinowactwo maleje).</p>

      <h2>Inhibicja Niekompetycyjna (Zepsucie zamka)</h2>
      <p>Inhibitor wiąże się w innym miejscu niż centrum aktywne. Zmienia kształt całego enzymu. Substrat może się przyłączyć, ale reakcja nie zajdzie lub zajdzie wolniej. Zwiększanie stężenia substratu nic nie da! Vmax maleje, Km zazwyczaj stałe.</p>

      <h2>Sprzężenie zwrotne ujemne</h2>
      <p>Gdy produktu jest za dużo, staje się on inhibitorem pierwszego enzymu w szlaku metabolicznym. To genialny mechanizm oszczędzania energii. Nie produkuj, jeśli magazyn jest pełny.</p>
    `
  }
};

function BlogArticle() {
  const { slug } = useParams();
  
  // Pobieramy dane artykułu
  const article = ARTICLES_DATA[slug];

  // Jeśli nie ma artykułu
  if (!article) {
     return (
        <div className="pt-32 pb-20 text-center px-4">
           <div className="glass-panel p-10 max-w-2xl mx-auto">
             <h1 className="text-3xl font-bold text-white mb-4">Artykuł w przygotowaniu...</h1>
             <p className="text-white/70 mb-6">Pracujemy nad tą treścią. Wróć wkrótce!</p>
             <Link to="/blog" className="btn-accent inline-flex items-center gap-2 px-6 py-2">
                <ArrowLeft className="w-4 h-4" /> Wróć do bloga
             </Link>
           </div>
        </div>
     );
  }

  // SEO Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "image": [optimizeImage(article.image, 1200)],
    "datePublished": "2026-01-15T08:00:00+08:00",
    "author": [{
        "@type": "Person",
        "name": "Julia Dobrzyńska",
        "url": "https://medulia.pl/o-mnie",
        "jobTitle": "Korepetytor Biologii"
      }],
    "publisher": {
        "@type": "Organization",
        "name": "Medulia",
        "logo": {
            "@type": "ImageObject",
            "url": optimizeImage("https://res.cloudinary.com/dyxif8hyp/image/upload/v1769105274/Projekt_bez_nazwy_31_ay7ahl.png", 200)
        }
    },
    "description": article.intro
  };

  return (
    <>
      <Helmet>
        <title>{article.title} - Medulia Blog</title>
        <meta name="description" content={article.intro} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.intro} />
        <meta property="og:image" content={optimizeImage(article.image, 1200)} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* HERO IMAGE */}
      <div className="relative h-[55vh] min-h-[450px] w-full overflow-hidden">
         <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={optimizeImage(article.image, 1920)} 
            alt={article.title} 
            className="absolute inset-0 w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-[#0f0f11]/60 to-transparent" />
         
         <div className="absolute inset-0 flex flex-col justify-end pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
               >
                  <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-bold uppercase tracking-wider transition-colors">
                     <ArrowLeft className="w-4 h-4 mr-2" /> Wróć do bazy wiedzy
                  </Link>

                  <div className="flex flex-wrap items-center gap-4 mb-5 text-sm font-medium">
                     <span className="px-3 py-1 bg-purple-600 rounded-full text-white border border-purple-400/30">{article.category}</span>
                     <span className="flex items-center text-white/90 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm"><Calendar className="w-4 h-4 mr-2 text-purple-300" /> {article.date}</span>
                     <span className="flex items-center text-white/90 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm"><Clock className="w-4 h-4 mr-2 text-purple-300" /> {article.readTime}</span>
                  </div>

                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                     {article.title}
                  </h1>

                  {/* AUTOR */}
                  <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-[2px]">
                        <div className="w-full h-full rounded-full overflow-hidden bg-black">
                           <img src="https://ui-avatars.com/api/?name=Julia+D&background=000&color=fff" alt="Julia Dobrzyńska" className="w-full h-full object-cover" />
                        </div>
                     </div>
                     <div>
                        <div className="text-white font-bold text-base">Julia Dobrzyńska</div>
                        <div className="text-purple-300 text-xs uppercase tracking-wide font-semibold">Ekspertka Maturalna Medulia</div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </div>

      {/* CONTENT + SIDEBAR */}
      <section className="py-12 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_350px] gap-12">
            
            {/* ARTICLE CONTENT */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
            >
               <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10 border-l-4 border-purple-500 pl-6 italic">
                  {article.intro}
               </p>

               <article 
                  className="prose prose-lg prose-invert max-w-none 
                  prose-headings:font-bold prose-headings:text-white prose-headings:font-accent
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-purple-100
                  prose-h3:text-xl prose-h3:text-purple-200
                  prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-purple-400 prose-a:font-bold prose-a:no-underline hover:prose-a:text-purple-300 hover:prose-a:underline
                  prose-strong:text-white prose-strong:font-bold
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
                  prose-li:text-white/80 prose-li:mb-2 marker:text-purple-500
                  prose-img:rounded-2xl prose-img:shadow-2xl prose-img:border prose-img:border-white/10"
                  dangerouslySetInnerHTML={{ __html: article.content }}
               />

               <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-white/60 text-sm font-medium">
                     Podobało się? Pomóż innym maturzystom:
                  </div>
                  <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full transition-colors border border-white/10">
                     <Share2 className="w-5 h-5 text-purple-400" /> Udostępnij artykuł
                  </button>
               </div>
            </motion.div>

            {/* SIDEBAR */}
            <aside className="hidden lg:block space-y-8">
               <div className="sticky top-24 space-y-8">
                  
                  {/* CTA BOX 1: OFERTA */}
                  <div className="rounded-3xl bg-gradient-to-b from-[#1a1a1e] to-black border border-purple-500/30 p-8 text-center shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
                     <div className="relative z-10">
                        <div className="w-16 h-16 mx-auto bg-purple-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border border-purple-500/20">
                           <BookOpen className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Matura 2026?</h3>
                        <p className="text-white/70 text-sm mb-6 leading-relaxed">
                           Nie zostawiaj wyniku przypadkowi. Dołącz do moich uczniów i ucz się biologii ze zrozumieniem.
                        </p>
                        <Link to="/zapisy" className="btn-accent w-full flex items-center justify-center gap-2 py-4 text-base shadow-lg shadow-purple-900/40">
                           Zapisz się na zajęcia <ArrowRight className="w-4 h-4" />
                        </Link>
                     </div>
                  </div>

                  {/* CTA BOX 2: MATERIAŁY */}
                  <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 group-hover:bg-green-500/30 transition-colors">
                          <CheckCircle className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                          <div className="text-white font-bold text-sm">Darmowe Materiały</div>
                          <Link to="/materialy" className="text-white/60 text-xs group-hover:text-white transition-colors flex items-center gap-1 mt-1">
                              Pobierz PDFy <ArrowRight className="w-3 h-3" />
                          </Link>
                      </div>
                  </div>

                  {/* LINKI WEWNĘTRZNE */}
                  <div className="pt-4 border-t border-white/10">
                      <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest text-white/50">Warto sprawdzić</h4>
                      <ul className="space-y-3">
                        <li>
                           <Link to="/oferta" className="flex items-center justify-between text-white/80 hover:text-purple-300 text-sm transition-colors group">
                              <span>Pełna oferta kursów</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                           </Link>
                        </li>
                        <li>
                           <Link to="/opinie" className="flex items-center justify-between text-white/80 hover:text-purple-300 text-sm transition-colors group">
                              <span>Wyniki uczniów (Opinie)</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                           </Link>
                        </li>
                      </ul>
                  </div>
               </div>
            </aside>
         </div>
      </section>

      {/* MOBILE CTA */}
      <section className="lg:hidden py-8 px-4 border-t border-white/10">
         <div className="rounded-2xl bg-gradient-to-r from-purple-900/40 to-black border border-white/10 p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Chcesz taki wynik na maturze?</h3>
            <p className="text-white/70 mb-4 text-sm">Sprawdź, jak uczę i dołącz do nas.</p>
            <Link to="/oferta" className="btn-accent w-full flex items-center justify-center gap-2 py-3">
               Zobacz Ofertę <ArrowRight className="w-4 h-4" />
            </Link>
         </div>
      </section>
    </>
  );
}

export default BlogArticle;