import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone, User, Mail, Send } from 'lucide-react';
import { gsap } from 'gsap';
import ContactForm from './ContactForm';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    })
    .from(subtitleRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .from(ctaRef.current, {
      x: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .from(formRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=1");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ fullName: '', email: '', phone: '' });
    alert('Thank you! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" ref={heroRef} className="relative min-h-screen pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Medical background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#031b4e]/50"></div>
        </div>

        {/* Content Container - Higher z-index */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
            
            {/* Left Side - Content */}
            <div className="space-y-8 relative z-30">
              <h1 
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] drop-shadow-lg"
              >
                Rebuild. Restore.{' '}
                <span className="block">
                  Renew.
                </span>
              </h1>
              
              <p 
                ref={subtitleRef}
                className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed font-medium max-w-2xl drop-shadow-md"
              >
                World-Class Maxillofacial Surgery in Hyderabad
              </p>

              <p className="text-base md:text-lg text-blue-200 leading-relaxed max-w-2xl drop-shadow-md">
                20+ years of excellence in TMJ, jaw correction, facial trauma, and aesthetic surgery.
              </p>
              
              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="group bg-[#165FAC] hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 z-30 relative"
                >
                  Book an Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => scrollToSection('doctors')}
                  className="group bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white/50 transform hover:scale-105 z-30 relative"
                >
                  Meet Our Experts
                </button>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div ref={formRef} className="flex justify-center lg:justify-end relative z-30">
              <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative z-40">
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-[#031b4e] mb-2">Book Your Appointment</h2>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165FAC] focus:border-transparent transition-all bg-white relative z-50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165FAC] focus:border-transparent transition-all bg-white relative z-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165FAC] focus:border-transparent transition-all bg-white relative z-50"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#031b4e] hover:bg-[#165FAC] text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl relative z-50"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        title="Book Your Appointment"
      />
    </>
  );
};

export default Hero;