import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, User, Mail, Phone, Send } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(contentRef.current, {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(formRef.current, {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.7");
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
    <section id="home" ref={heroRef} className="min-h-screen pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-12rem)]">
          
          {/* Left Side - Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-[#031b4e]">Rebuild.</span>
                <br />
                <span className="text-[#031b4e]">Restore.</span>
                <br />
                <span className="text-[#165FAC]">Renew.</span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#031b4e]">
                World-Class Maxillofacial Surgery in Hyderabad
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Transform your life with 20+ years of excellence in TMJ disorders, 
                jaw correction, facial trauma, and aesthetic surgery. Expert care 
                with cutting-edge technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="group bg-[#165FAC] hover:bg-[#031b4e] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('doctors')}
                className="group bg-transparent hover:bg-[#165FAC] hover:text-white text-[#165FAC] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 border-2 border-[#165FAC] transform hover:scale-105"
              >
                Meet Our Experts
              </button>
            </div>
          </div>
          
          {/* Right Side - Appointment Form */}
          <div ref={formRef} className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="bg-gradient-to-br from-[#165FAC] to-[#031b4e] rounded-3xl p-8 shadow-2xl">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Book Your Appointment
                  </h3>
                  <p className="text-blue-100">
                    Start your transformation journey today
                  </p>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/95 border-0 rounded-xl focus:ring-2 focus:ring-white focus:bg-white transition-all placeholder-gray-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/95 border-0 rounded-xl focus:ring-2 focus:ring-white focus:bg-white transition-all placeholder-gray-500"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/95 border-0 rounded-xl focus:ring-2 focus:ring-white focus:bg-white transition-all placeholder-gray-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-gray-100 text-[#031b4e] py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    Book Appointment Now
                  </button>
                </form>
                
                <div className="text-center mt-6">
                  <p className="text-xs text-blue-100">
                    🔒 Your information is secure and confidential
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;