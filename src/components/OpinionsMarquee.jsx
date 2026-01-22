import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OpinionCard from '@/components/OpinionCard.jsx';

function OpinionsMarquee({ opinions = [], duration = 40 }) {
  const [openVideo, setOpenVideo] = useState(null);

  const base = useMemo(() => (Array.isArray(opinions) ? opinions : []), [opinions]);
  const items = useMemo(() => (base.length ? [...base, ...base] : []), [base]);

  return (
    <>
      <div className="marquee">
        <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
          {items.map((op, idx) => (
            <div key={idx} className="marquee-item">
              <OpinionCard {...op} onVideoClick={() => setOpenVideo(op.videoThumbnail)} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openVideo && (
          <motion.div
            className="fixed inset-0 z-[99999] bg-black/70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenVideo(null)}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <p className="font-semibold text-gray-900">Opinia wideo</p>
                <button
                  className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
                  onClick={() => setOpenVideo(null)}
                >
                  Zamknij
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                  Podmień to na prawdziwe wideo (np. iframe YouTube) albo własny player.
                </p>
                <p className="text-gray-500 text-sm mt-2 break-all">{openVideo}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default OpinionsMarquee;
