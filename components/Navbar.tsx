import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';
import { COMPANY_NAME, NAVIGATION_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2 group relative z-50"
        >
          <div className="bg-brand-primary p-2 rounded-lg group-hover:bg-brand-accent transition-colors">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${scrolled || isOpen ? 'text-white' : 'text-white'}`}>
            {COMPANY_NAME}
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                scrolled ? 'text-slate-200' : 'text-slate-100'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2.5 rounded-full bg-brand-primary text-white text-sm font-semibold hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/30"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none relative z-50 p-2 bg-white/10 rounded-lg backdrop-blur-sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-brand-dark flex flex-col overflow-y-auto"
          >
            {/* Spacer for the header area */}
            <div className="h-24"></div>

            <div className="flex-1 flex flex-col justify-center px-8 space-y-6 pb-12">
              {NAVIGATION_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-2xl font-bold text-slate-300 hover:text-white hover:translate-x-2 transition-all flex items-center justify-between group border-b border-emerald-900/30 pb-4"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-5 h-5 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.div>
              ))}
              
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 className="pt-6"
              >
                <a 
                  href="#contact"
                  className="flex items-center justify-center w-full py-4 rounded-xl bg-brand-primary text-white text-lg font-bold shadow-lg active:scale-95 transition-transform"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Enroll Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;