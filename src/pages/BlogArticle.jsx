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
      <section className="pt-24 pb-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Wróć do bloga
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-4">
              {article.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>{article.date}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Potrzebujesz pomocy w przygotowaniach?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Zapisz się na korepetycje i osiągnij swój cel na maturze!
            </p>
            <Link
              to="/zapisy"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-lg"
            >
              Zapisz się na zajęcia
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
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