import React from 'react';
import Hero from './components/Hero';
import Methods from './components/Methods';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Methods />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;