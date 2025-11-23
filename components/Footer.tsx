import React from 'react';
import { Shield, Facebook, Linkedin, Instagram } from 'lucide-react';
import { COMPANY_FULL_NAME, NAVIGATION_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-12 border-t border-emerald-800">
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
                  <a href={link.href} className="hover:text-brand-primary transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Course Policies</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-emerald-900/50 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900/50 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900/50 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_FULL_NAME}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Road Safety.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;