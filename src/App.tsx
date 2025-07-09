import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Doctors from './components/Doctors';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Services />
      <About />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Doctors />
      <Location />
      <Footer />
    </div>
  );
}

export default App;