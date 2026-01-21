import React from 'react';

function SectionTitle({ children, center = true, className = '' }) {
  return (
    <div className={`${center ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-white accent-text">
        {children}
      </h2>
      <div
        className={`mt-3 h-[2px] w-16 bg-white/20 ${center ? 'mx-auto' : ''}`}
      />
    </div>
  );
}

export default SectionTitle;
