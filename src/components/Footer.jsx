import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'; // Usunięto Facebook, Youtube

// Ikona TikToka w stylu Lucide (robiona ręcznie, bo biblioteka jej nie ma domyślnie)
const TikTokIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

function Footer() {
  const quickLinks = [
    { name: 'O mnie', path: '/o-mnie' },
    { name: 'Oferta', path: '/oferta' },
    { name: 'Materiały', path: '/materialy' },
    { name: 'Opinie', path: '/opinie' },
    { name: 'Blog', path: '/blog' },
    { name: 'Zapisy', path: '/zapisy' },
  ];

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [nlStatus, setNlStatus] = useState('idle'); // idle | loading | success | error
  const [nlMsg, setNlMsg] = useState('');

  const submitNewsletter = async () => {
    const email = newsletterEmail.trim();

    if (!email) {
      setNlStatus('error');
      setNlMsg('Wpisz adres email.');
      return;
    }

    setNlStatus('loading');
    setNlMsg('');

    try {
      const res = await fetch('/.netlify/functions/subscribe-newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        setNlStatus('error');
        setNlMsg('Coś poszło nie tak. Spróbuj ponownie.');
        return;
      }

      setNlStatus('success');
      setNlMsg('Super! Jesteś zapisany/a ✅');
      setNewsletterEmail('');
    } catch (e) {
      setNlStatus('error');
      setNlMsg('Błąd sieci. Spróbuj ponownie.');
    }
  };

  return (
    <footer className="mt-10 py-12 px-4 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* delikatny panel w stopce, ale bez “twardego” tła */}
        <div className="rounded-[22px] bg-white/[0.04] border border-white/10 backdrop-blur-[2px] p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dyxif8hyp/image/upload/v1769105274/Projekt_bez_nazwy_31_ay7ahl.png"
                  alt="Medulia"
                  className="h-10 md:h-12 w-auto"
                  loading="eager"
                />
              </Link>

              <p className="text-sm leading-relaxed text-white/70 font-light">
                Profesjonalne korepetycje z biologii. Pomogę Ci zdać maturę na 100%!
              </p>

              <div className="flex gap-3">
                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/jula_dob/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>

                {/* TIKTOK */}
                <a
                  href="https://www.tiktok.com/@med.ulia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 flex items-center justify-center transition-colors"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <span className="text-lg font-bold text-white mb-4 block accent-text">
                Szybkie linki
              </span>
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
                  <a
                    href="mailto:medulia.kontakt@gmail.com"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    medulia.kontakt@gmail.com
                  </a>
                </li>

                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5 text-white/80 flex-shrink-0" />
                  <a
                    href="tel:+48532208335"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    +48 532 208 335
                  </a>
                </li>

                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 text-white/80 flex-shrink-0" />
                  <span className="text-sm text-white/70">Zielona Góra, Polska</span>
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
                  inputMode="email"
                  autoComplete="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') submitNewsletter();
                  }}
                  placeholder="Twój email"
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
                />

                <button
                  type="button"
                  className="btn-accent text-sm py-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  onClick={submitNewsletter}
                  disabled={nlStatus === 'loading'}
                >
                  {nlStatus === 'loading' ? 'Zapisywanie…' : 'Zapisz się'}
                </button>

                {nlMsg ? (
                  <p
                    className={`text-xs ${
                      nlStatus === 'success' ? 'text-white/80' : 'text-red-200'
                    }`}
                  >
                    {nlMsg}
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} MEDULIA. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;