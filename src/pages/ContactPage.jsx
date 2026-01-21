import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import SectionTitle from '@/components/SectionTitle';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Kontakt i Zapisy - MEDULIA | Korepetycje Biologia</title>
        <meta name="description" content="Skontaktuj się ze mną i zapisz na zajęcia. Formularz kontaktowy, dane teleadresowe. Rozpocznij naukę biologii już dziś!" />
      </Helmet>

      <div className="pt-24 pb-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kontakt i Zapisy</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Masz pytania? Chcesz się zapisać? Wypełnij formularz lub skontaktuj się bezpośrednio.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-panel">
                <h2 className="text-2xl font-bold text-white mb-6">Dane kontaktowe</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <a href="mailto:kontakt@medulia.pl" className="text-white/70 hover:text-white transition-colors">kontakt@medulia.pl</a>
                      <p className="text-xs text-white/50 mt-1">Odpisuję w ciągu 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Telefon</p>
                      <a href="tel:+48123456789" className="text-white/70 hover:text-white transition-colors">+48 123 456 789</a>
                      <p className="text-xs text-white/50 mt-1">Pn-Pt 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-300 flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Godziny zajęć</p>
                      <p className="text-white/70">Elastyczny grafik</p>
                      <p className="text-xs text-white/50 mt-1">Dostosowany do Twojego planu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6">
                <h3 className="text-xl font-bold text-white mb-4">Sprawdź również</h3>
                <div className="flex flex-wrap gap-3">
                  <Link to="/oferta" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors border border-white/10">Oferta</Link>
                  <Link to="/opinie" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors border border-white/10">Opinie</Link>
                  <Link to="/o-mnie" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors border border-white/10">O mnie</Link>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="glass-panel">
              <h2 className="text-2xl font-bold text-white mb-2">Formularz zapisu</h2>
              <p className="text-white/60 mb-6 text-sm">Wypełnij formularz, a skontaktuję się z Tobą w sprawie szczegółów.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;