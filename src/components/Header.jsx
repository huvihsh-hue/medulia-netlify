import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  const navLinks = [
    { name: 'O mnie', path: '/o-mnie' },
    { name: 'Oferta', path: '/oferta' },
    { name: 'Opinie', path: '/opinie' },
    { name: 'Materiały', path: '/materialy' },
    { name: 'Blog', path: '/blog' },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    if (Math.abs(latest - previous) > 10) {
      if (latest > previous && latest > 50) setHidden(true);
      else setHidden(false);
    }
  });

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 shadow-lg"
        style={{ backgroundColor: '#43259f' }}

      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center py-2">
              <img
                src="https://res.cloudinary.com/dyxif8hyp/image/upload/v1769007309/logo_800x240_bcjsaf.png"
                alt="Medulia"
                className="h-10 md:h-12 w-auto"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    location.pathname === link.path
                      ? 'text-white font-bold'
                      : 'text-white/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/zapisy"
                className="px-5 py-2 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
              >
                Zapisy 2026/2027
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-72 lg:hidden z-50 overflow-y-auto mobile-menu-glass"
            >
              <div className="p-4 flex justify-end">
                <button onClick={() => setIsMenuOpen(false)} className="p-2">
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex flex-col px-6 gap-3 pb-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 text-sm mobile-menu-link ${
                      location.pathname === link.path
                        ? 'text-white bg-white/10'
                        : 'text-white/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  to="/zapisy"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 px-4 py-3 rounded-xl border border-white/30 text-white font-medium text-center hover:bg-white/10 transition-all text-sm"
                >
                  Zapisy 2026/2027
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
