import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px]" />
         <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-900/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-900/50 border border-emerald-800 rounded-full px-4 py-1.5 mb-6">
              <ShieldCheck className="w-4 h-4 text-brand-primary" />
              <span className="text-slate-300 text-xs font-semibold uppercase tracking-wider">
                Certified Defensive Driving
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
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
            className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0"
          >
            Equipping drivers in Addis Ababa with expert defensive driving techniques. 
            Reduce accidents, lower costs, and ensure safety for your fleet and family.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
          >
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="px-8 py-4 rounded-lg bg-brand-primary text-white font-bold text-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/40 flex items-center"
            >
              Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScroll(e, 'services')}
              className="px-8 py-4 rounded-lg bg-transparent border border-emerald-800 text-white font-semibold hover:bg-emerald-900/50 transition-all"
            >
              View Courses
            </a>
          </motion.div>
        </div>

        {/* Visual Content - Abstract Car/Road Representation */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
        >
          {/* Creating a stylized vector illustration with divs and icons since we can't load external SVGs easily */}
          <div className="relative w-full h-full max-w-lg">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent rounded-3xl transform rotate-3" />
             <div className="absolute inset-0 bg-emerald-950 rounded-3xl shadow-2xl overflow-hidden border border-emerald-900">
                <img 
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Safe Driving" 
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-brand-dark to-transparent">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                      <ShieldCheck className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white font-bold">100% Safety Focus</p>
                      <p className="text-emerald-200 text-sm">International Standards</p>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl z-20"
             >
               <div className="flex items-center space-x-2">
                 <div className="bg-yellow-100 p-2 rounded-lg">
                    <span className="text-yellow-600 font-bold text-xl">4.9</span>
                 </div>
                 <div className="text-slate-800">
                   <p className="text-xs font-semibold uppercase text-slate-500">Average Rating</p>
                   <div className="flex text-yellow-500 text-sm">★★★★★</div>
                 </div>
               </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;