import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, MessageCircle, Calendar as CalendarIcon } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import SignupForm from '@/components/SignupForm';

function SignupPage() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Wypełnij formularz',
      description: 'Podaj swoje dane i opisz swoje potrzeby'
    },
    {
      icon: Clock,
      title: 'Umów konsultację',
      description: 'Odezwę się do Ciebie w ciągu 24h i ustalimy termin rozmowy'
    },
    {
      icon: CalendarIcon,
      title: 'Zaplanuj zajęcia',
      description: 'Wspólnie ustalimy harmonogram i zaczniemy naukę'
    },
    {
      icon: CheckCircle,
      title: 'Osiągnij cel',
      description: 'Z moim wsparciem zdasz maturę na wymarzony wynik!'
    }
  ];

  const faqs = [
    {
      question: 'Kiedy mogę zacząć zajęcia?',
      answer: 'Zazwyczaj w ciągu tygodnia od wypełnienia formularza. Wszystko zależy od dostępności terminów.'
    },
    {
      question: 'Ile kosztuje pierwsza lekcja?',
      answer: 'Pierwsza lekcja próbna kosztuje 50% standardowej ceny, czyli 60 zł za zajęcia indywidualne.'
    },
    {
      question: 'Czy mogę zmienić termin zajęć?',
      answer: 'Tak, wystarczy powiadomić mnie z 24-godzinnym wyprzedzeniem.'
    },
    {
      question: 'Czy są dostępne miejsca?',
      answer: 'Aktualna dostępność miejsc jest ograniczona. Im szybciej się zapiszesz, tym lepiej!'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zapisy na zajęcia - MEDULIA | Zapisz się na korepetycje z biologii 2026/2027</title>
        <meta name="description" content="Zapisz się na korepetycje z biologii na rok 2026/2027. Indywidualne, grupowe i online zajęcia przygotowujące do matury. Ograniczona liczba miejsc!" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://horizons-cdn.hostinger.com/b54bcec4-b6f9-403c-a09c-0c6cf94875d5/ad891418844190ff215f0d037780cb60.png"
            alt="Zapisy na zajęcia"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Zapisy na rok 2026/2027
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4">
              Rozpocznij swoją drogę do sukcesu na maturze z biologii
            </p>
            <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-lg">
              ⚡ Ograniczona liczba miejsc!
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Formularz zapisu</SectionTitle>
          <p className="text-center text-gray-600 text-lg mb-12">
            Wypełnij formularz, a odezwę się do Ciebie w ciągu 24 godzin
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl shadow-xl p-8"
          >
            <SignupForm />
          </motion.div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Jak przebiega proces zapisu?</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="absolute -top-4 left-6 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mx-auto mb-4 mt-6">
                    <step.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Najczęściej zadawane pytania</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nie czekaj do ostatniej chwili!
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Im wcześniej zaczniesz przygotowania, tym lepszy wynik osiągniesz na maturze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-3xl font-bold">5</div>
                <div className="text-sm text-white/80">Pozostało miejsc</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm text-white/80">Zadowolonych uczniów</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm text-white/80">Zdawalność</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SignupPage;