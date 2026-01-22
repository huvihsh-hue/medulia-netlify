import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

function BlogArticle() {
  const { slug } = useParams();

  // Mock article data - in real app this would come from API/CMS
  const article = {
    title: '5 skutecznych strategii nauki do matury z biologii',
    excerpt: 'Dowiedz się, jak efektywnie planować naukę i wykorzystać czas przed maturą.',
    date: '15.01.2026',
    category: 'Strategie nauki',
    content: `
      <h2>Wprowadzenie</h2>
      <p>Przygotowania do matury z biologii mogą być stresujące, ale z odpowiednią strategią staniesz się mistrzem! W tym artykule przedstawiam 5 sprawdzonych metod, które pomogły moim uczniom osiągnąć najlepsze wyniki.</p>

      <h2>1. Planowanie to podstawa</h2>
      <p>Pierwszym krokiem do sukcesu jest stworzenie realistycznego planu nauki. Podziel materiał na mniejsze części i przypisz im konkretne terminy. Pamiętaj, aby uwzględnić czas na powtórki!</p>
      <ul>
        <li>Stwórz harmonogram na najbliższe 3 miesiące</li>
        <li>Przypisz konkretne tematy do konkretnych dni</li>
        <li>Zostaw 20% czasu na nieprzewidziane sytuacje</li>
      </ul>

      <h2>2. Aktywna nauka zamiast biernego czytania</h2>
      <p>Zamiast godzinami przeglądać podręcznik, angażuj się aktywnie w naukę. Rób notatki, twórz mapy myśli, rozwiązuj zadania. Aktywne uczenie się jest o wiele bardziej efektywne!</p>

      <h2>3. Regularne powtórki</h2>
      <p>Nie czekaj do ostatniej chwili z powtórkami! Stosuj metodę interwałową - powtarzaj materiał po 1 dniu, 3 dniach, tygodniu i miesiącu. To sprawdzona metoda utrwalania wiedzy.</p>

      <h2>4. Rozwiązuj zadania maturalne</h2>
      <p>Teoria to jedno, praktyka to drugie. Im więcej zadań maturalnych rozwiążesz, tym lepiej będziesz przygotowany/a na prawdziwy egzamin. Zapoznaj się z formatem pytań i typowymi pułapkami.</p>

      <h2>5. Dbaj o siebie</h2>
      <p>Ostatnia, ale nie mniej ważna strategia - zadbaj o swoje zdrowie fizyczne i psychiczne. Sen, zdrowe odżywianie i aktywność fizyczna mają ogromny wpływ na Twoje zdolności poznawcze!</p>

      <h2>Podsumowanie</h2>
      <p>Te 5 strategii pomogły setkom moich uczniów osiągnąć wymarzone wyniki na maturze. Pamiętaj, że kluczem jest systematyczność i konsekwencja. Powodzenia!</p>
    `
  };

  return (
    <>
      <Helmet>
        <title>{article.title} - Blog MEDULIA</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Wróć do bloga
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="glass-panel p-8"
>
  <span className="inline-block px-3 py-1 bg-white/10 border border-white/15 text-white/80 text-sm font-semibold rounded-full mb-4">
    {article.category}
  </span>

  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
    {article.title}
  </h1>

  <div className="flex items-center gap-2 text-white/70">
    <Calendar className="w-5 h-5" />
    <span>{article.date}</span>
  </div>
</motion.div>

        </div>
      </section>

      {/* Article Content */}
      <section className="py-10">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="glass-panel p-8">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="prose prose-lg prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-12">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-panel p-8 md:p-10 text-center relative overflow-hidden"
    >
      {/* subtelne „światło” w tle */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 text-white">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
          Potrzebujesz pomocy w przygotowaniach?
        </h2>
        <p className="text-base md:text-lg text-white/80 mb-7">
          Zapisz się na korepetycje i osiągnij swój cel na maturze!
        </p>

        <Link
          to="/zapisy"
          className="btn-accent inline-flex items-center justify-center gap-2 text-sm md:text-base px-7 py-3 rounded-xl"
        >
          Zapisz się na zajęcia
          <ArrowRight className="w-5 h-5" />
        </Link>

        <div className="mt-4 text-[12px] text-white/60">
          Odpowiadam zwykle w ciągu 24h.
        </div>
      </div>
    </motion.div>
  </div>
</section>


      {/* Back to Blog */}
      <section className="py-10">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zobacz więcej artykułów
          </Link>
        </div>
      </section>
    </>
  );
}

export default BlogArticle;