import React from 'react';
import { motion } from 'framer-motion';
import { WHY_CHOOSE_US } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-2">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Excellence in Driver Safety</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group p-6 rounded-xl bg-white border border-slate-100 hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300 transform group-hover:-translate-y-2 shadow-sm">
                <item.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;