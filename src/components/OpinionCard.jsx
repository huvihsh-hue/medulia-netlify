import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Play } from 'lucide-react';

function OpinionCard({ name, city, text, videoThumbnail, onVideoClick }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      {videoThumbnail ? (
        <div
          className="relative mb-4 rounded-xl overflow-hidden cursor-pointer group"
          onClick={onVideoClick}
        >
          <img
            src={videoThumbnail}
            alt={`${name} - opinia wideo`}
            className="w-full h-40 md:h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 md:w-8 md:h-8 text-purple-600 ml-1" />
            </div>
          </div>
        </div>
      ) : (
        <Quote className="w-9 h-9 md:w-10 md:h-10 text-purple-600 mb-3 md:mb-4" />
      )}

      <p className="text-gray-700 mb-4 flex-grow leading-relaxed text-sm md:text-base">
        "{text}"
      </p>

      <div className="pt-4 border-t border-gray-100">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{city}</p>
      </div>
    </motion.div>
  );
}

export default OpinionCard;
