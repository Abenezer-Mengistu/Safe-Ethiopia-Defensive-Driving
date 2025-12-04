import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects for background elements
  const yBg1 = useTransform(scrollY, [0, 500], [0, 100]);
  const yBg2 = useTransform(scrollY, [0, 500], [0, -100]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-brand-dark scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         {/* Animated Gradients with Parallax */}
         <motion.div 
            style={{ y: yBg1 }}
            animate={{ 
              scale: [1, 1.1, 1], 
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-primary/20 rounded-full blur-[80px] md:blur-[120px]" 
         />
         <motion.div 
            style={{ y: yBg2 }}
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 1 
            }}
            className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-900/40 rounded-full blur-[80px] md:blur-[100px]" 
         />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-900/50 border border-emerald-800 rounded-full px-4 py-1.5 mb-4 md:mb-6 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-brand-primary" />
              <span className="text-slate-300 text-xs font-semibold uppercase tracking-wider">
                Certified Defensive Driving
              </span>
            </div>
            <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight">
              Stay Safe. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                Drive Smart.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-slate-400 max-w-lg mx-auto md:mx-0"
          >
            Equipping drivers in Addis Ababa with expert defensive driving techniques. 
            Reduce accidents, lower costs, and ensure safety for your fleet and family.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start w-full"
          >
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-brand-primary text-white font-bold text-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/40 flex items-center justify-center group"
            >
              Get a Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Visual Content - Static Illustration */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[320px] md:h-[500px] w-full flex items-center justify-center order-2"
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
             {/* Static SVG Illustration */}
             <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl max-w-lg">
                <defs>
                  <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                     <stop offset="100%" stopColor="#064e3b" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="truckGrad" x1="0" y1="0" x2="1" y2="1">
                     <stop offset="0%" stopColor="#059669" />
                     <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#000" floodOpacity="0.3"/>
                  </filter>
                </defs>
                
                {/* Background Blob */}
                <circle cx="400" cy="300" r="280" fill="url(#bgGrad)" />
                
                {/* Abstract City Skyline */}
                <path d="M150 450 L150 250 L200 250 L200 200 L280 200 L280 280 L350 280 L350 180 L450 180 L450 300 L550 300 L550 450 Z" fill="#065f46" opacity="0.15" />
                
                {/* Road */}
                <path d="M-50 500 C100 500 250 420 850 420" stroke="#1f2937" strokeWidth="120" strokeLinecap="round" />
                <path d="M-50 500 C100 500 250 420 850 420" stroke="#374151" strokeWidth="90" strokeLinecap="round" />
                <path d="M-50 500 C100 500 250 420 850 420" stroke="#fbbf24" strokeWidth="3" strokeDasharray="30 40" fill="none" opacity="0.8" />
                
                {/* Truck Illustration */}
                <g transform="translate(180, 260) scale(1.05)" filter="url(#shadow)">
                   {/* Trailer */}
                   <path d="M0 40 H260 V140 H0 V40 Z" fill="#f8fafc" />
                   <path d="M0 40 H260 V140 H0 V40 Z" stroke="#e2e8f0" strokeWidth="1" />
                   
                   {/* Trailer Details */}
                   <path d="M20 70 H220" stroke="#10b981" strokeWidth="14" strokeLinecap="round" opacity="0.15" />
                   <path d="M20 95 H180" stroke="#064e3b" strokeWidth="2" strokeLinecap="round" opacity="0.1" />
                   <path d="M260 120 H270" stroke="#374151" strokeWidth="6" /> {/* Connector */}

                   {/* Cab */}
                   <path d="M270 60 H350 L370 90 V140 H270 V60 Z" fill="url(#truckGrad)" />
                   <path d="M270 140 H370 L365 155 H275 L270 140 Z" fill="#047857" /> {/* Skirt */}

                   {/* Windows */}
                   <path d="M350 65 L365 85 H340 V65 Z" fill="#d1fae5" opacity="0.9" />
                   <path d="M275 65 H335 V85 H275 Z" fill="#064e3b" opacity="0.2" /> 

                   {/* Wheels */}
                   <circle cx="60" cy="150" r="28" fill="#111827" stroke="#374151" strokeWidth="4" />
                   <circle cx="60" cy="150" r="10" fill="#9ca3af" />

                   <circle cx="120" cy="150" r="28" fill="#111827" stroke="#374151" strokeWidth="4" />
                   <circle cx="120" cy="150" r="10" fill="#9ca3af" />

                   <circle cx="330" cy="150" r="30" fill="#111827" stroke="#374151" strokeWidth="4" />
                   <circle cx="330" cy="150" r="12" fill="#9ca3af" />
                   
                   {/* Headlights */}
                   <path d="M370 110 L375 110 L378 125 L370 125 Z" fill="#fbbf24" />
                   <path d="M0 120 L-2 120 L-2 135 L0 135 Z" fill="#ef4444" /> {/* Tail light */}
                </g>
             </svg>
             
             {/* Floating Rating Card */}
             <div className="absolute top-0 right-0 md:top-10 md:right-10 bg-white p-3 md:p-4 rounded-xl shadow-xl z-20 scale-90 md:scale-100 border border-slate-100">
               <div className="flex items-center space-x-2">
                 <div className="bg-yellow-100 p-2 rounded-lg">
                    <span className="text-yellow-600 font-bold text-lg md:text-xl">4.9</span>
                 </div>
                 <div className="text-slate-800">
                   <p className="text-[10px] md:text-xs font-semibold uppercase text-slate-500">Average Rating</p>
                   <div className="flex text-yellow-500 text-xs md:text-sm">★★★★★</div>
                 </div>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;