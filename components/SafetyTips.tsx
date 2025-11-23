import React from 'react';
import { SAFETY_TIPS } from '../constants';
import { Lightbulb, ChevronRight } from 'lucide-react';

const SafetyTips: React.FC = () => {
  return (
    <section id="tips" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Safety Corner</h2>
            <p className="text-slate-500">Quick tips to keep you safe on Addis Ababa roads.</p>
          </div>
          <button className="hidden md:flex items-center text-brand-primary font-semibold hover:text-green-700 mt-4 md:mt-0">
            View All Resources <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SAFETY_TIPS.map((tip) => (
            <div key={tip.id} className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{tip.category}</span>
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">{tip.title}</h4>
              <p className="text-slate-600 text-sm">{tip.summary}</p>
            </div>
          ))}
        </div>
        
        <button className="md:hidden w-full mt-8 py-3 border border-brand-primary text-brand-primary font-bold rounded-lg hover:bg-green-50">
          View All Resources
        </button>
      </div>
    </section>
  );
};

export default SafetyTips;