import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Image as ImageIcon } from 'lucide-react';

function OpinionCard({ name, city, text, proofImage, onImageClick, variant = 'full' }) {
  const hasProof = Boolean(proofImage);

  // ile linii tekstu pokazujemy w zależności od miejsca użycia
  // compact: Home / węższe sekcje
  // full: Opinions page / większe karty
  const lines = variant === 'compact' ? (hasProof ? 2 : 4) : (hasProof ? 3 : 6);

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="opinion-card rounded-2xl p-4 md:p-6 h-full flex flex-col"
    >
      {/* GÓRA: dowód (jeśli jest) */}
      {hasProof ? (
        <button
          type="button"
          onClick={onImageClick}
          className="relative mb-4 rounded-xl overflow-hidden border border-white/10 bg-white/5 text-left group"
          aria-label={`${name} – pokaż zdjęcie opinii`}
        >
          {/* pionowe screeny: pokazujemy CAŁOŚĆ */}
          <div className="aspect-[9/16] w-full bg-black/20">
            <img
              src={proofImage}
              alt={`${name} – zdjęcie opinii`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          {/* delikatna nakładka */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/18 transition-colors" />

          {/* badge */}
          <div className="absolute left-3 top-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/45 border border-white/12 text-white text-[11px] font-semibold">
            <ImageIcon className="w-3.5 h-3.5" />
          </div>
        </button>
      ) : (
        <div className="mb-3 md:mb-4 text-purple-300">
          <Quote className="w-9 h-9 md:w-10 md:h-10" />
        </div>
      )}

      {/* ✅ TEKST: pokazuj zawsze, jeśli jest */}
      {text ? (
        <p
          className={[
            'text-white/85 leading-relaxed text-sm md:text-base flex-grow',
            `line-clamp-${lines}`,
          ].join(' ')}
        >
          {text}
        </p>
      ) : (
        <div className="flex-grow" />
      )}

      {/* STOPKA */}
      <div className="pt-4 mt-4 border-t border-white/10">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-white/60">{city}</p>
      </div>
    </motion.div>
  );
}

export default OpinionCard;
