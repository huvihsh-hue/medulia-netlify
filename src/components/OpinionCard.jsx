import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Play } from 'lucide-react';

function OpinionCard({ name, city, text, videoThumbnail, onVideoClick }) {
  return (
    <motion.div
      whileHover={{ y: -5, shadow: 'lg' }}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      {videoThumbnail ? (
        <div
          className="relative mb-4 rounded-xl overflow-hidden cursor-pointer group"
          onClick={onVideoClick}
        >
          <img
            src={videoThumbnail}
            alt={`${name} - opinia wideo`}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-purple-600 ml-1" />
            </div>
          </div>
        </div>
      ) : (
        <Quote className="w-10 h-10 text-purple-600 mb-4" />
      )}

      <p className="text-gray-700 mb-4 flex-grow leading-relaxed">
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
