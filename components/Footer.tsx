import React from 'react';
import { Shield, Facebook, Linkedin, Instagram } from 'lucide-react';
import { COMPANY_FULL_NAME, NAVIGATION_LINKS } from '../constants';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlaceholderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // In a real app, this would route to a page. For now, we prevent the jump to top.
  };

  return (
    <footer className="bg-brand-dark text-slate-400 pt-12 pb-24 md:pb-12 border-t border-emerald-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-brand-primary" />
              <span className="text-xl font-bold text-white">Safe Ethiopia</span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering drivers with the skills to navigate roads safely. Professional defensive driving training in Addis Ababa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleScroll(e, link.href)}
                    className="hover:text-brand-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#" 
                  onClick={handlePlaceholderClick}
                  className="hover:text-brand-primary transition-colors cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={handlePlaceholderClick}
                  className="hover:text-brand-primary transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={handlePlaceholderClick}
                  className="hover:text-brand-primary transition-colors cursor-pointer"
                >
                  Course Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-10 h-10 bg-emerald-900/50 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-10 h-10 bg-emerald-900/50 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 bg-emerald-900/50 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_FULL_NAME}. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex items-center">
            <span className="opacity-70 mr-1.5">Designed by</span> 
            <a 
                href="https://abenezer-mengistu-portfoilo.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-flex items-center justify-center px-3 py-0.5 font-bold text-emerald-300 transition-all duration-300 rounded-full bg-white/5 border border-emerald-500/30 hover:bg-brand-primary hover:text-white hover:border-brand-primary hover:scale-105 hover:shadow-lg hover:shadow-brand-primary/20"
            >
                <span className="relative z-10 tracking-wide font-mono">Am.</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;