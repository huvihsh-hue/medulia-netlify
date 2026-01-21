import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { name: 'O mnie', path: '/o-mnie' },
    { name: 'Oferta', path: '/oferta' },
    { name: 'Materiały', path: '/materialy' },
    { name: 'Opinie', path: '/opinie' },
    { name: 'Blog', path: '/blog' },
    { name: 'Zapisy', path: '/zapisy' }
  ];

  return (
    <footer
      className="border-t border-white/10 mt-10 py-12 px-4 text-white/80"
      style={{ backgroundColor: '#43259f' }}

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img
                src="https://res.cloudinary.com/dyxif8hyp/image/upload/v1769007309/logo_1000x300_rvjvuh.png"
                alt="Medulia"
                className="h-10 md:h-12 w-auto"
                loading="eager"
              />
            </Link>

            <p className="text-sm leading-relaxed text-white/70 font-light">
              Profesjonalne korepetycje z biologii. Pomogę Ci zdać maturę na 100%!
            </p>

            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-bold text-white mb-4 block accent-text">Szybkie linki</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-lg font-bold text-white mb-4 block accent-text">Kontakt</span>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 text-white/80 flex-shrink-0" />
                <a href="mailto:kontakt@medulia.pl" className="text-sm text-white/80 hover:text-white transition-colors">
                  kontakt@medulia.pl
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 text-white/80 flex-shrink-0" />
                <a href="tel:+48123456789" className="text-sm text-white/80 hover:text-white transition-colors">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 text-white/80 flex-shrink-0" />
                <span className="text-sm text-white/70">Warszawa, Polska</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <span className="text-lg font-bold text-white mb-4 block accent-text">Newsletter</span>
            <p className="text-sm mb-4 text-white/70">
              Zapisz się do newslettera i otrzymuj darmowe materiały!
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Twój email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
              />
              <button className="btn-accent text-sm py-2">
                Zapisz się
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} MEDULIA. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
