import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TEAM, COMPANY_FULL_NAME } from '../constants';
import { TeamMember } from '../types';
import { CheckCircle2, X, Award, Phone } from 'lucide-react';

const About: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const benefits = [
    "Established in 2007 E.C.",
    "Valid Approvals from Federal Transport Authority",
    "Focus on Human Error (Cause of 85% of accidents)"
  ];

  return (
    <section id="about" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Company Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
          >
             <h2 className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-2">About Us</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
               Leading Defensive Driving Since 2007 E.C.
             </h3>
             <p className="text-slate-600 leading-relaxed mb-6">
               {COMPANY_FULL_NAME} is legally established under Ethiopian commercial law to provide defensive driving training that keeps individuals and property safer on the road.
               <br /><br />
               With road safety as a top priority for the transport industry, and human error causing over 85% of accidents, our mission is to create safer drivers. We capitalize on customer-tailored resources to assist organizations in recruiting competent drivers and training them on specific vehicle models and machinery.
             </p>
             <ul className="space-y-3">
               {benefits.map((benefit, idx) => (
                 <li key={idx} className="flex items-center space-x-3">
                   <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                   <span className="text-slate-700 font-medium">{benefit}</span>
                 </li>
               ))}
             </ul>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="relative flex justify-center items-center"
          >
             <div className="relative">
               {/* Decorative Background Glow */}
               <div className="absolute inset-0 bg-brand-primary/20 blur-[80px] rounded-full opacity-60 transform scale-90"></div>
               
               {/* Logo Image */}
               <img 
                 src="https://placehold.co/600x600/ffffff/16a34a?text=Defensive+Drivers+Logo" 
                 alt="Defensive Drivers are Life Saver Logo" 
                 className="relative z-10 w-full max-w-[350px] md:max-w-[400px] h-auto rounded-full shadow-2xl border-[8px] border-white ring-1 ring-slate-100 object-cover"
               />
               
               {/* Floating Tag */}
               <div className="absolute -bottom-4 right-8 z-20 bg-white py-3 px-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                 <p className="text-brand-dark font-bold text-sm">Defensive Drivers</p>
                 <p className="text-brand-primary font-bold text-xs uppercase tracking-wider">Are Life Savers</p>
               </div>
             </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Our Experts</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
             Led by industry veterans, our training ensures the highest standard of safety.
          </p>
        </div>

        <div className="flex justify-center">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedMember(member)}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group border border-slate-100 hover:border-brand-primary/30 max-w-sm w-full"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-brand-dark font-bold px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-sm">
                    View Credentials
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors">{member.name}</h4>
                <p className="text-brand-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm line-clamp-2">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Member Modal */}
        <AnimatePresence>
          {selectedMember && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedMember(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
              >
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-64 md:h-auto relative">
                    <img 
                      src={selectedMember.image} 
                      alt={selectedMember.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent md:hidden" />
                    <div className="absolute bottom-0 left-0 p-6 text-white md:hidden">
                      <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
                      <p className="opacity-90">{selectedMember.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-8 md:w-3/5">
                    <div className="hidden md:block mb-6">
                      <h3 className="text-3xl font-bold text-slate-900">{selectedMember.name}</h3>
                      <p className="text-lg text-brand-primary font-medium">{selectedMember.role}</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Biography</h4>
                        <p className="text-slate-600 leading-relaxed">
                          {selectedMember.bio}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Credentials & Expertise</h4>
                        <ul className="space-y-3">
                          {selectedMember.credentials?.map((cred, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <Award className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                              <span className="text-slate-700 text-sm font-medium">{cred}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 mt-4 border-t border-slate-100">
                        <a 
                          href="tel:+251912033366" 
                          className="inline-flex justify-center items-center w-full py-3 bg-brand-primary text-white rounded-lg font-bold hover:bg-green-600 transition-colors"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Contact +251 912 033 366
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
