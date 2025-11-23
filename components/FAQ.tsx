import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500">Find answers to common questions about our training programs, scheduling, and certifications.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                openId === faq.id 
                  ? 'border-brand-primary shadow-md ring-1 ring-brand-primary/20' 
                  : 'border-slate-200 shadow-sm hover:border-brand-primary/50'
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white"
              >
                <span className={`font-bold text-lg transition-colors ${openId === faq.id ? 'text-brand-primary' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${openId === faq.id ? 'bg-brand-light text-brand-primary' : 'bg-slate-100 text-slate-400'}`}>
                  {openId === faq.id ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 bg-slate-50/30">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 rounded-lg bg-emerald-100 text-brand-primary font-bold hover:bg-brand-primary hover:text-white transition-colors duration-300"
            >
              Contact Support
            </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;