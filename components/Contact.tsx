import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
            Ready to improve your driving skills? Visit our office in Addis Ababa or call us directly to book your training.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="p-4 bg-brand-primary/10 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-brand-primary" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Our Location</h4>
              <p className="text-slate-600">22 infront of Debre Damo Hotel,<br/> Addis Ababa, Ethiopia</p>
            </div>
            
            <a href="tel:+251912033366" className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow group">
              <div className="p-4 bg-brand-primary/10 rounded-full mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Phone className="w-8 h-8 text-brand-primary group-hover:text-white" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Phone</h4>
              <p className="text-slate-600 font-medium">+251 912 033 366</p>
            </a>

            <a href="mailto:safeethiopiadefensivedriving@gmail.com" className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow group">
              <div className="p-4 bg-brand-primary/10 rounded-full mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Mail className="w-8 h-8 text-brand-primary group-hover:text-white" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Email</h4>
              <p className="text-slate-600 break-all">safeethiopiadefensivedriving@gmail.com</p>
            </a>
          </div>

          {/* Google Map */}
          <div className="w-full h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-md border border-slate-200 relative">
            <iframe 
              title="Google Map"
              src="https://maps.google.com/maps?q=Debre%20Damo%20Hotel%2C%20Addis%20Ababa&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;