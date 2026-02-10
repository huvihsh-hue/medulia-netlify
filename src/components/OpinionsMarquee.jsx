import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OpinionCard from '@/components/OpinionCard.jsx';
import { optimizeImage } from '@/lib/utils'; // <--- IMPORT

function interleave3to1(proofs, texts) {
  const out = [];
  let p = 0;
  let t = 0;

  while (p < proofs.length || t < texts.length) {
    for (let i = 0; i < 3 && p < proofs.length; i += 1) out.push(proofs[p++]);
    if (t < texts.length) out.push(texts[t++]);

    if (p >= proofs.length && t < texts.length) {
      out.push(...texts.slice(t));
      break;
    }
    if (t >= texts.length && p < proofs.length) {
      out.push(...proofs.slice(p));
      break;
    }
  }

  return out;
}

function getPerPage(w) {
  if (w >= 1024) return 3; // lg+
  if (w >= 768) return 2;  // md
  return 1;                // mobile
}

function OpinionsMarquee({ opinions = [] }) {
  const [openImage, setOpenImage] = useState(null);
  const [perPage, setPerPage] = useState(() =>
    typeof window === 'undefined' ? 1 : getPerPage(window.innerWidth)
  );
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);

  const base = useMemo(() => (Array.isArray(opinions) ? opinions : []), [opinions]);

  const mixedBase = useMemo(() => {
    const proofs = base.filter((o) => o?.proofImage);
    const texts = base.filter((o) => !o?.proofImage);
    return interleave3to1(proofs, texts);
  }, [base]);

  const pagesCount = useMemo(() => {
    if (!mixedBase.length) return 1;
    return Math.max(1, Math.ceil(mixedBase.length / perPage));
  }, [mixedBase.length, perPage]);

  const pageItems = useMemo(() => {
    if (!mixedBase.length) return [];
    const start = page * perPage;
    return mixedBase.slice(start, start + perPage);
  }, [mixedBase, page, perPage]);

  useEffect(() => {
    setPage(0);
  }, [perPage, mixedBase.length]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onResize = () => setPerPage(getPerPage(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!openImage) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpenImage(null);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [openImage]);

  const prev = () => {
    setDir(-1);
    setPage((p) => (p - 1 + pagesCount) % pagesCount);
  };

  const next = () => {
    setDir(1);
    setPage((p) => (p + 1) % pagesCount);
  };

  const Lightbox = (
    <AnimatePresence>
      {openImage && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="relative w-full max-w-[600px]"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenImage(null)}
              className="absolute -top-12 right-0 md:-right-12 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Zamknij"
            >
              ✕
            </button>

            <div className="rounded-xl overflow-hidden bg-black shadow-2xl">
              {/* --- 2. OPTYMALIZACJA: Duże zdjęcie w Lightboxie (w_1000) --- */}
              <img 
                src={optimizeImage(openImage, 1000)} 
                alt="Pełna opinia" 
                className="w-full h-auto max-h-[85vh] object-contain" 
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
  };

  return (
    <>
      <div className="relative">
        <button
          type="button"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
          aria-label="Poprzednie"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
          aria-label="Następne"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="px-12 md:px-14">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={`${page}-${perPage}`}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid gap-4 md:gap-5"
              style={{
                gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))`,
              }}
            >
              {pageItems.map((op, idx) => (
                <div key={`${page}-${idx}`} className="h-full">
                  <OpinionCard
                    {...op}
                    // --- 1. OPTYMALIZACJA: Miniaturka w karuzeli (w_300) ---
                    proofImage={optimizeImage(op.proofImage, 300)}
                    // Przekazujemy oryginalny (lub lekko większy) URL do otwarcia
                    onImageClick={() => op.proofImage && setOpenImage(op.proofImage)}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {typeof document !== 'undefined' ? createPortal(Lightbox, document.body) : null}
    </>
  );
}

export default OpinionsMarquee;