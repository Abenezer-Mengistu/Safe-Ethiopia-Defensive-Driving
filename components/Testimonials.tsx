import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative quotes */}
      <Quote className="absolute top-10 left-10 text-slate-200 w-32 h-32 opacity-50 rotate-180" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Success Stories</h2>
          <p className="text-slate-500 mt-3">Hear from the drivers and companies we've empowered.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-center items-center text-center"
            >
              <div className="flex text-yellow-400 mb-6">
                 {[...Array(5)].map((_, i) => (
                   <span key={i} className="text-xl">★</span>
                 ))}
              </div>
              <p className="text-slate-600 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;