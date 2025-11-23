import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Partners from './components/Partners';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import SafetyTips from './components/SafetyTips';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const handleFinishLoading = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader onFinish={handleFinishLoading} />
      ) : (
        <div className="min-h-screen bg-white text-slate-800 selection:bg-brand-primary selection:text-white animate-in fade-in duration-700">
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <Partners />
            <WhyChooseUs />
            <About />
            <Services />
            <Process />
            <SafetyTips />
            <FAQ />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      )}
    </>
  );
};

export default App;