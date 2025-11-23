import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Car, Award, Calendar } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Registration",
    description: "Contact us to select your course and schedule availability.",
    icon: FileText
  },
  {
    id: 2,
    title: "Theory Classes",
    description: "In-depth classroom sessions covering rules, physics, and psychology.",
    icon: Calendar
  },
  {
    id: 3,
    title: "Practical Training",
    description: "Hands-on driving with our expert instructors in varied traffic.",
    icon: Car
  },
  {
    id: 4,
    title: "Certification",
    description: "Pass the final assessment and receive your defensive driving certificate.",
    icon: Award
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-brand-dark text-white overflow-hidden relative scroll-mt-28">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-800/20 skew-x-12 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center">
           <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
           <p className="text-slate-400 mt-4">Your journey to becoming a safer driver in 4 simple steps.</p>
        </div>

        <div className="relative">
          {/* Connector Lines */}
          {/* Desktop: Horizontal */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-emerald-800 -z-10" />
          {/* Mobile: Vertical */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-0.5 bg-emerald-800 -translate-x-1/2 -z-10" />

          <div className="grid md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative bg-emerald-900/80 md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none border border-emerald-800 md:border-none max-w-sm mx-auto w-full"
              >
                <div className="w-24 h-24 mx-auto bg-brand-dark border-4 border-emerald-800 rounded-full flex items-center justify-center mb-6 relative z-10">
                   <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center shadow-lg shadow-brand-primary/20">
                     <step.icon className="w-10 h-10 text-white" />
                   </div>
                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-950 border border-emerald-700 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm">
                     {step.id}
                   </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;