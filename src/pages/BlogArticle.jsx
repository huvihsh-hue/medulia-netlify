import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, ArrowRight, Clock, Share2, BookOpen, CheckCircle } from 'lucide-react';

// --- MOCK BAZY DANYCH ARTYKUŁÓW (MEGA TREŚĆ POD SEO) ---
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
      <ul>
        <li><strong>Maj:</strong> Ostatnie szlify i relaks przed egzaminem.</li>
        <li><strong>Kwiecień:</strong> Tylko arkusze maturalne na czas (symulacja warunków).</li>
        <li><strong>Marzec:</strong> Fizjologia człowieka (największy dział).</li>
        <li><strong>Luty:</strong> Metabolizm i cytologia.</li>
      </ul>

      <div class="my-10">
        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000" alt="Planowanie nauki biologia" class="rounded-xl shadow-lg w-full object-cover h-[300px] md:h-[400px]" />
        <p class="text-xs text-white/50 mt-2 text-center">Dobry plan to 50% sukcesu na maturze.</p>
      </div>

      <h2>2. Metoda Interwałowa (Spaced Repetition)</h2>
      <p>Zapominanie to naturalny proces biologiczny. Krzywa zapominania Ebbinghausa jest bezlitosna: po 6 dniach pamiętasz tylko ok. 20% materiału, jeśli go nie powtórzysz. Wkuwanie "na blachę" raz, a porządnie, nie działa.</p>
      <p><strong>Złota zasada Medulii:</strong> Powtórka musi nastąpić w konkretnych momentach:</p>
      <ol>
        <li>Po 24 godzinach od nauki.</li>
        <li>Po 3 dniach.</li>
        <li>Po tygodniu.</li>
        <li>Po miesiącu.</li>
      </ol>
      <p>Używaj aplikacji typu Anki lub twórz własne fiszki. Na naszych <a href="/oferta/grupowe-ze-mna">zajęciach grupowych</a> powtórki są wbudowane w każdą lekcję.</p>

      <h2>3. Aktywne przypominanie (Active Recall)</h2>
      <p>Czytanie notatek to najgorsza metoda nauki. Twój mózg jest wtedy bierny. Musisz zmusić go do wysiłku. Jak?</p>
      <p>Zamiast czytać rozdział o fotosyntezie, zamknij książkę i spróbuj narysować schemat fazy jasnej z pamięci. Boli? Ma boleć. Ten "ból" to moment, w którym tworzą się połączenia nerwowe. To właśnie robimy na korepetycjach – ja pytam, Ty musisz "wygrzebać" wiedzę z głowy.</p>

      <div class="my-8 p-6 bg-purple-500/10 border-l-4 border-purple-500 rounded-r-lg">
        <h3 class="text-purple-300 font-bold text-lg mb-2">Tip Julii Dobrzyńskiej:</h3>
        <p class="text-white/90 m-0">Nie rób notatek "na czysto" kolorowymi pisakami. To strata czasu. Rób notatki w formie pytań do samego siebie. Np. zamiast pisać definicję mitochondrium, napisz pytanie: "Jakie są 3 dowody na endosymbiotyczne pochodzenie mitochondriów?".</p>
      </div>

      <h2>4. Klucz CKE to Twój wróg i przyjaciel</h2>
      <p>Możesz mieć wiedzę profesora akademickiego, a nie zdasz matury, jeśli nie trafisz w klucz. Czasowniki operacyjne: <em>wyjaśnij, podaj, określ, wykaż</em> oznaczają zupełnie co innego.</p>
      <p>To najczęstszy powód, dla którego uczniowie trafiają do Medulii. Mają wiedzę, ale tracą punkty. Na naszych zajęciach uczymy się "języka egzaminatora". "Wyjaśnij" zawsze wymaga spójnika "dlatego, że" lub ciągu przyczynowo-skutkowego.</p>

      <h2>5. Arkusze rób na czas</h2>
      <p>W domu jest ciepła herbata, koc i spokój. Na sali egzaminacyjnej jest stres i presja czasu. Musisz trenować w warunkach bojowych.</p>
      <p>Od marca rób jeden arkusz tygodniowo ze stoperem. Jeśli nie zdążysz przenieść odpowiedzi do karty w domu, nie zdążysz też na maturze. Trening czyni mistrza.</p>

      <hr class="my-8 border-white/10" />

      <h3>Podsumowanie</h3>
      <p>Biologia to nauka logiczna. Przestań kuć na pamięć, zacznij rozumieć procesy. Jeśli potrzebujesz kogoś, kto poprowadzi Cię za rękę przez ten proces i sprawdzi Twoje postępy – sprawdź ofertę <strong>Medulia</strong>. Jesteśmy tu, żebyś dostał/a się na wymarzoną medycynę.</p>
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
      <h2>Dlaczego "ludzki język" nie działa na maturze?</h2>
      <p>Egzaminatorzy CKE mają przed sobą sztywny klucz odpowiedzi. Nie mogą domyślać się, "co poeta miał na myśli". Musisz być precyzyjny jak chirurg. W Medulii nazywamy to "biologicznym konkretem".</p>

      <h2>Wyjaśnij vs Opisz – Odwieczna walka</h2>
      <p>To klasyka gatunku. Mylenie tych dwóch poleceń kosztuje maturzystów średnio 10-15% punktów.</p>
      
      <h3>Polecenie: Opisz</h3>
      <p>Oznacza: przedstaw cechy, budowę, przebieg. Nie musisz pisać "dlaczego". Masz pisać "jak jest".</p>
      <p><em>Przykład: Opisz budowę mitochondrium.</em></p>
      <p><strong>Dobra odpowiedź:</strong> Mitochondrium jest otoczone dwiema błonami. Błona zewnętrzna jest gładka, a wewnętrzna tworzy fałdy zwane grzebieniami. Wnętrze wypełnia matrix.</p>

      <h3>Polecenie: Wyjaśnij</h3>
      <p>Oznacza: musisz podać mechanizm przyczynowo-skutkowy. Musisz połączyć przyczynę z efektem.</p>
      <p><em>Przykład: Wyjaśnij, dlaczego błona wewnętrzna mitochondrium jest pofałdowana.</em></p>
      <ul>
        <li><strong>Źle (Opis):</strong> Błona tworzy grzebienie mitochondrialne. (To jest prawda, ale to opis, nie wyjaśnienie!)</li>
        <li><strong>Dobrze (Wyjaśnienie - Metoda Medulii):</strong> Pofałdowanie zwiększa powierzchnię błony [PRZYCZYNA], co pozwala na umieszczenie w niej większej liczby kompleksów łańcucha oddechowego [MECHANIZM], co z kolei zwiększa wydajność syntezy ATP [SKUTEK].</li>
      </ul>

      <div class="my-10">
         <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000" alt="Egzamin maturalny biologia pisanie" class="rounded-xl shadow-lg w-full object-cover h-[300px]" />
      </div>

      <h2>Wykaż (związek)</h2>
      <p>Tutaj musisz pokazać relację między dwoma faktami. Zazwyczaj budową a funkcją.</p>
      <p><em>Przykład: Wykaż związek między budową erytrocytu a jego funkcją.</em></p>
      <p><strong>Odpowiedź:</strong> Brak jądra komórkowego w dojrzałym erytrocycie [CECHA BUDOWY] zapewnia więcej miejsca dla hemoglobiny [ZWIĄZEK], co zwiększa efektywność transportu tlenu [FUNKCJA].</p>

      <h2>Jak się tego nauczyć?</h2>
      <p>Praktyka, praktyka, praktyka. Ale nie "ślepa" praktyka. Musisz mieć kogoś, kto sprawdzi Twoje odpowiedzi i bezlitośnie wytknie błędy logiczne. Właśnie to robimy na <a href="/oferta/indywidualne-premium">zajęciach Premium</a>. Ja jestem Twoim egzaminatorem przed egzaminem.</p>
    `
  },
  'genetyka-w-7-dni-plan': {
      title: 'Genetyka w 7 dni – plan powtórkowy',
      date: '05.01.2026',
      category: 'Wiedza',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200',
      intro: 'Genetyka to dział, który albo kochasz, albo nienawidzisz. Jest logiczna, matematyczna i... schematyczna. Jeśli nauczysz się schematów, zdobędziesz pewne punkty.',
      content: `
        <h2>Dzień 1: Podstawy i Prawa Mendla</h2>
        <p>Musisz znać pojęcia: allel, locus, homozygota, heterozygota, genotyp, fenotyp. Bez tego ani rusz. Przypomnij sobie I i II prawo Mendla. Zrób 5 prostych krzyżówek z grochem.</p>
        
        <h2>Dzień 2: Dziedziczenie płci i cechy sprzężone</h2>
        <p>To pewniak maturalny. Hemofilia i daltonizm. Pamiętaj: geny są na chromosomie X. Y jest "pusty" (dla tych cech). Pamiętaj o zapisie X^H, X^h.</p>

        <h2>Dzień 3: Grupy krwi i czynnik Rh</h2>
        <p>Kodominacja (grupa AB) i allele wielokrotne. Konflikt serologiczny - kiedy zachodzi? (Matka Rh-, Ojciec Rh+, Dziecko Rh+).</p>

        <h2>Dzień 4: Hardy-Weinberg</h2>
        <p>Wzór, który przeraża, a jest prosty. p + q = 1 oraz (p+q)^2 = 1. Pamiętaj: p^2 to homozygoty dominujące, q^2 to recesywne, 2pq to heterozygoty. Zawsze zaczynaj obliczenia od q^2 (recesywnych), bo tylko je widać w fenotypie!</p>

        <div class="my-8 p-6 bg-purple-500/10 border-l-4 border-purple-500 rounded-r-lg">
            <h3 class="text-purple-300 font-bold text-lg mb-2">Potrzebujesz pomocy z zadaniami?</h3>
            <p class="text-white/90 m-0">W moich <a href="/materialy">darmowych materiałach</a> znajdziesz PDF z rozpisanymi krok po kroku zadaniami z genetyki.</p>
        </div>

        <h2>Dzień 5: Choroby genetyczne</h2>
        <p>Musisz umieć rozróżniać: autosomalne dominujące (Huntington), autosomalne recesywne (mukowiscydoza, fenyloketonuria) i sprzężone z płcią. Ucz się objawów i mechanizmów dziedziczenia.</p>

        <h2>Dzień 6: Mutacje</h2>
        <p>Genowe (punktowe) vs Chromosomowe. Delecja, insercja, substytucja. Które są groźniejsze? Te, które przesuwają ramkę odczytu.</p>

        <h2>Dzień 7: Wielki Test</h2>
        <p>Weź zbiór zadań maturalnych (np. Biologhelp) i rozwiąż 20 zadań tylko z genetyki. Sprawdź z kluczem. Gdzie robisz błędy?</p>
      `
  },
  'stres-przed-matura-jak-opanowac': {
      title: 'Panika w dniu egzaminu? Techniki, które ratują wynik',
      date: '20.12.2025',
      category: 'Mindset',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200',
      intro: 'Ręce się trzęsą, w głowie pustka, a serce wali jak młot. Stres egzaminacyjny potrafi zniweczyć lata nauki. Ale można nad nim zapanować.',
      content: `
        <h2>Co się dzieje w Twoim mózgu?</h2>
        <p>W silnym stresie Twoje ciało migdałowate przejmuje kontrolę i odcina dopływ krwi do kory przedczołowej. To ta część mózgu odpowiada za logikę, planowanie i przypominanie sobie wiedzy. Dlatego masz "pustkę w głowie".</p>

        <h2>Technika 1: Oddychanie pudełkowe</h2>
        <p>Stosowane przez Navy SEALs. Wdech 4 sekundy, zatrzymanie 4 sekundy, wydech 4 sekundy, zatrzymanie 4 sekundy. To fizycznie wymusza uspokojenie serca.</p>

        <h2>Technika 2: Zmień narrację</h2>
        <p>Objawy stresu (szybkie bicie serca) są identyczne jak objawy ekscytacji. Powiedz sobie: "Nie denerwuję się, jestem podekscytowany wyzwaniem". To brzmi głupio, ale działa na biochemię mózgu.</p>

        <h2>Wsparcie w Medulii</h2>
        <p>Jako korepetytorka, widzę moją rolę szerzej niż tylko nauczanie biologii. Jestem też Waszym mentorem. Na zajęciach budujemy pewność siebie. Kiedy wiesz, że przerobiłeś tysiące zadań, stres jest mniejszy. Dołącz do <a href="/opinie">naszej społeczności</a>.</p>
      `
  }
};

function BlogArticle() {
  const { slug } = useParams();
  
  // Pobieramy dane artykułu
  const article = ARTICLES_DATA[slug];

  // Jeśli nie ma artykułu, przekieruj lub pokaż 404
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

  // SEO: Schema.org dla artykułu
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "image": [article.image],
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
            "url": "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769105274/Projekt_bez_nazwy_31_ay7ahl.png"
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
        <meta property="og:image" content={article.image} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* HERO IMAGE BACKGROUND */}
      <div className="relative h-[55vh] min-h-[450px] w-full overflow-hidden">
         <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={article.image} 
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
                            {/* Tu w przyszłości Twoje zdjęcie */}
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
               {/* INTRO LEAD */}
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

               {/* SHARE & TAGS (dolna sekcja) */}
               <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-white/60 text-sm font-medium">
                     Podobało się? Pomóż innym maturzystom:
                  </div>
                  <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full transition-colors border border-white/10">
                     <Share2 className="w-5 h-5 text-purple-400" /> Udostępnij artykuł
                  </button>
               </div>
            </motion.div>

            {/* SIDEBAR (Sticky) */}
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

      {/* MOBILE CTA (widoczne tylko na telefonach na dole) */}
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