import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-2">Training Programs</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Defensive Driving Curriculum</h3>
          <p className="text-slate-500 mt-4">
            Our methodology combines theoretical knowledge with practical skills. We focus on "expecting the unexpected" to reduce dangers associated with driving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-primary/20 relative overflow-hidden"
            >
              {/* Decorative background circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-500 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-light flex items-center justify-center">
                        <Check className="w-3 h-3 text-brand-primary" />
                      </div>
                      <span className="text-sm text-slate-600 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;