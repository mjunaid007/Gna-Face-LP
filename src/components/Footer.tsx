import React, { useState } from 'react';
import ContactForm from './ContactForm';

const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#031b4e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="text-center max-w-2xl mx-auto">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <img 
                  src="/gna-logop.png" 
                  alt="Gnathos Facial Surgery" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
            
            {/* Subheading */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
              Transform Your Life with Expert Maxillofacial Care
            </h3>
            
            {/* CTA Button */}
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-[#165FAC] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-12"
            >
              Book Your Consultation Today
            </button>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Gnathos Face. All Rights Reserved. Designed by{' '}
              <span className="text-[#165FAC] font-medium">Branding Pioneers</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        title="Book Your Appointment"
      />
    </>
  );
};

export default Footer;