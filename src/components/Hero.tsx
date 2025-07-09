import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, User, Mail, Phone } from 'lucide-react';
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
      <section id="home" ref={heroRef} className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              <h1 
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-[#031b4e] leading-tight"
              >
                Rebuild.{' '}
                <span className="block">
                  Restore.
                </span>
                <span className="block text-[#165FAC]">
                  Renew.
                </span>
              </h1>
              
              <p 
                ref={subtitleRef}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium max-w-2xl"
              >
                World-Class Maxillofacial Surgery in Hyderabad
              </p>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                20+ years of excellence in TMJ, jaw correction, facial trauma, and aesthetic surgery.
              </p>
              
              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="group bg-[#165FAC] hover:bg-[#031b4e] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book an Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => scrollToSection('doctors')}
                  className="group bg-transparent hover:bg-gray-100 text-[#031b4e] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 border-2 border-[#031b4e] hover:border-[#165FAC] transform hover:scale-105"
                >
                  Meet Our Experts
                </button>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div ref={formRef} className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-100">
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-[#031b4e] mb-2">Book Your Appointment</h2>
                  <p className="text-gray-600">Fill in your details and we'll get back to you soon</p>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165FAC] focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165FAC] focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165FAC] focus:border-transparent transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#031b4e] hover:bg-[#165FAC] text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Book Appointment
                  </button>
                </form>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
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