import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onFinish: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Logic: Smooth linear progress animation instead of random jumps
    const duration = 2500; // 2.5 seconds total load time
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(nextProgress);

      if (nextProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Add a small delay at 100% before unmounting
        setTimeout(onFinish, 600);
      }
    };

    const frameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(frameId);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-lg px-8 relative">
        
        {/* Progress Text & Branding */}
        <div className="flex justify-between items-end mb-2 px-1">
            <div>
                 <h1 className="text-xl font-black text-brand-dark uppercase tracking-tighter leading-none">Safe Ethiopia</h1>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Loading Assets...</p>
            </div>
            <span className="text-5xl font-black text-slate-100 tabular-nums">{Math.round(progress)}%</span>
        </div>

        {/* Road Track */}
        <div className="relative w-full h-1 bg-slate-100 rounded-full mt-8 overflow-visible">
            {/* Filled Road (Progress Bar) */}
            <motion.div 
                className="absolute top-0 left-0 h-full bg-brand-primary/30 rounded-full"
                style={{ width: `${progress}%` }}
            />

            {/* Moving Truck Container */}
            <motion.div 
                className="absolute bottom-0"
                style={{ 
                    left: `${progress}%`,
                    x: '-90%', // Align front wheel area with progress tip
                    y: 7       // Sit on top of the line
                }}
            >
                <TruckAnimation />
            </motion.div>
        </div>
      </div>
    </div>
  );
};

const TruckAnimation = () => {
  return (
    <div className="relative w-40 h-20">
      {/* Exhaust Smoke Particles */}
      <motion.div 
         className="absolute left-0 bottom-8 w-3 h-3 bg-slate-200 rounded-full opacity-0"
         animate={{ x: [-10, -40], y: [0, -20], opacity: [0.6, 0], scale: [1, 2.5] }}
         transition={{ repeat: Infinity, duration: 1.2, ease: "easeOut" }}
      />
      <motion.div 
         className="absolute left-2 bottom-8 w-2 h-2 bg-slate-200 rounded-full opacity-0"
         animate={{ x: [-10, -35], y: [0, -15], opacity: [0.5, 0], scale: [1, 2] }}
         transition={{ repeat: Infinity, duration: 0.9, ease: "easeOut", delay: 0.4 }}
      />

      {/* Truck Body Group (Bouncing Suspension) */}
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 0.25, ease: "linear" }}
        className="relative z-10 drop-shadow-lg"
      >
        <svg viewBox="0 0 160 80" className="w-40 h-20">
           {/* Trailer Section */}
           <path d="M10 20 H100 V60 H10 V20 Z" fill="#ffffff" stroke="#16a34a" strokeWidth="2" />
           <path d="M10 20 H100" stroke="#16a34a" strokeWidth="4" />
           
           {/* Logo Stripe on Trailer */}
           <path d="M30 35 H80" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />
           <path d="M30 45 H60" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

           {/* Connector */}
           <rect x="100" y="50" width="10" height="5" fill="#374151" />

           {/* Truck Cab */}
           <path d="M110 30 H135 L145 42 V60 H110 V30 Z" fill="#16a34a" /> {/* Green Cab */}
           <path d="M135 32 L143 42 H135 V32 Z" fill="#dcfce7" /> {/* Window */}
           <rect x="110" y="60" width="40" height="6" fill="#1f2937" /> {/* Chassis */}
           <path d="M150 60 L150 66 L155 66 L155 55" stroke="#1f2937" strokeWidth="2" fill="none" /> {/* Front Bumper */}
           
           {/* Roof lights */}
           <circle cx="115" cy="28" r="1.5" fill="#fbbf24" />
           <circle cx="125" cy="28" r="1.5" fill="#fbbf24" />
        </svg>
      </motion.div>

      {/* Wheels - Rotating independently */}
      {/* Rear Trailer Wheels */}
      <motion.div 
         className="absolute bottom-3 left-4 w-7 h-7 bg-slate-800 rounded-full border-2 border-slate-600 flex items-center justify-center z-20 shadow-sm"
         animate={{ rotate: 360 }}
         transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
      >
        <div className="w-1 h-1 bg-slate-400 rounded-full" />
        <div className="absolute w-5 h-0.5 bg-slate-500" />
        <div className="absolute h-5 w-0.5 bg-slate-500" />
      </motion.div>
      <motion.div 
         className="absolute bottom-3 left-12 w-7 h-7 bg-slate-800 rounded-full border-2 border-slate-600 flex items-center justify-center z-20 shadow-sm"
         animate={{ rotate: 360 }}
         transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
      >
        <div className="w-1 h-1 bg-slate-400 rounded-full" />
        <div className="absolute w-5 h-0.5 bg-slate-500" />
        <div className="absolute h-5 w-0.5 bg-slate-500" />
      </motion.div>

      {/* Cab Rear Wheel */}
      <motion.div 
         className="absolute bottom-3 right-10 w-8 h-8 bg-slate-800 rounded-full border-2 border-slate-600 flex items-center justify-center z-20 shadow-sm"
         animate={{ rotate: 360 }}
         transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
      >
        <div className="w-1 h-1 bg-slate-400 rounded-full" />
        <div className="absolute w-6 h-0.5 bg-slate-500" />
        <div className="absolute h-6 w-0.5 bg-slate-500" />
      </motion.div>
    </div>
  );
}

export default Loader;