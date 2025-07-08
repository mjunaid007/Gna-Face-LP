import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-white rounded-lg p-2 shadow-sm">
                <img 
                  src="/gna-logop.png" 
                  alt="Gnathos Facial Surgery" 
                  className="h-10 w-auto"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-[#165FAC] font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-[#165FAC] font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-[#165FAC] font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('doctors')}
                className="text-gray-700 hover:text-[#165FAC] font-medium transition-colors"
              >
                Doctors
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-[#165FAC] font-medium transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-[#165FAC] font-medium transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <a href="tel:+919000666476" className="hover:text-[#165FAC] transition-colors">
                  +91-9000666476
                </a>
              </div>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="bg-[#165FAC] hover:bg-[#031b4e] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#165FAC] hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#165FAC] hover:bg-gray-50 rounded-md"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#165FAC] hover:bg-gray-50 rounded-md"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#165FAC] hover:bg-gray-50 rounded-md"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('doctors')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#165FAC] hover:bg-gray-50 rounded-md"
                >
                  Doctors
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#165FAC] hover:bg-gray-50 rounded-md"
                >
                  Testimonials
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#165FAC] hover:bg-gray-50 rounded-md"
                >
                  Contact
                </button>
                <div className="px-3 py-2 border-t border-gray-200 mt-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+919000666476" className="hover:text-[#165FAC] transition-colors">
                      +91-9000666476
                    </a>
                  </div>
                  <button 
                    onClick={() => {
                      setIsFormOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-[#165FAC] hover:bg-[#031b4e] text-white px-4 py-2 rounded-full font-medium transition-colors"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        title="Book Your Appointment"
      />
    </>
  );
};

export default Header;