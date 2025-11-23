import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-emerald-900 border-y border-emerald-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center space-y-2"
            >
              <div className="p-3 bg-emerald-800/50 rounded-full mb-2">
                <stat.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                {stat.value}{stat.suffix}
              </h3>
              <p className="text-emerald-200 font-medium text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;