import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onFinish: () => void;
}

const ForkliftIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Wheels */}
    <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="15" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
    
    {/* Chassis */}
    <path d="M2 17h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Body */}
    <path d="M3 17V11H10V17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M10 11L12 6H7L5 11" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    
    {/* Mast & Forks */}
    <path d="M16 17V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 13H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Load (Box) */}
    <rect x="18" y="9" width="4" height="4" stroke="currentColor" strokeWidth="2" fill="currentColor" className="text-brand-accent/50" />
  </svg>
);

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 800); // Slight delay at 100% before finishing
          return 100;
        }
        // Random increment for a realistic "loading" feel
        const increment = Math.random() * 8 + 2;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-md px-8">
        
        {/* Animation Container */}
        <div className="relative h-24 mb-2">
          {/* The Forklift Motion */}
          <motion.div 
            className="absolute bottom-0"
            style={{ 
              left: `${progress}%`, 
              x: '-50%' // Center the forklift on the current progress point
            }}
            animate={{
              left: `${progress}%`
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
             <div className="relative -ml-6 mb-1">
                <ForkliftIcon className="w-16 h-16 text-brand-primary" />
                
                {/* Smoke effect from exhaust */}
                <motion.div 
                    animate={{ opacity: [0, 0.8, 0], y: [0, -10], x: [0, -5] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="absolute top-10 left-2 w-2 h-2 bg-slate-300 rounded-full"
                />
             </div>
          </motion.div>
        </div>

        {/* Progress Bar Track */}
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-brand-primary"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        {/* Text */}
        <div className="flex justify-between mt-4 text-slate-500 font-mono text-sm font-bold">
          <span>Loading Assets...</span>
          <span className="text-brand-primary">{Math.round(progress)}%</span>
        </div>
        
        <div className="mt-8 text-center">
             <h1 className="text-xl font-bold text-brand-dark tracking-wider uppercase">Safe Ethiopia</h1>
             <p className="text-xs text-slate-400">Defensive Driving Plc</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;