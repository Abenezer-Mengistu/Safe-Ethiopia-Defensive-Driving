import React from 'react';
import { motion } from 'framer-motion';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  // Duplicate the partners list to create a seamless loop
  const duplicatedPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Trusted by Leading Organizations</p>
      </div>
      
      <div className="relative flex w-full overflow-hidden">
        {/* Gradient masks for smooth fade in/out */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div
          className="flex space-x-12 md:space-x-24"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;