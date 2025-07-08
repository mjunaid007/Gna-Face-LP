import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactForm from './ContactForm';

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  const locationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(contactRef.current, 
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: locationRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <>
      <section id="contact" ref={locationRef} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031b4e] mb-4">
              Visit Our Center
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located at CARE Hospitals Hi-tech City, Gachibowli - Easy access with world-class facilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Maps */}
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7613.232646987645!2d78.37227!3d17.430191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9377bfbc844d%3A0x89619bc38eaa02ca!2sGnathos%20Facial%20%E2%80%93%20Oral%20and%20Maxillofacial%20Surgeon%20in%20Hyderabad%2C%20India%20%7C%20Facial%20Surgery%2C%20TMJ%20%26%20Jaw%20Specialist!5e0!3m2!1sen!2sin!4v1751883301061!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
            
            {/* Contact Information */}
            <div ref={contactRef} className="space-y-8">
              <div className="bg-gradient-to-br from-[#165FAC] to-[#031b4e] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-blue-100">
                        CARE Hospitals Hi-tech City<br />
                        Gachibowli, Hyderabad<br />
                        Telangana, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:+919000666476" className="text-blue-100 hover:text-white transition-colors">
                        +91-9000666476
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:gnathosface@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                        gnathosface@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Hours</h4>
                      <p className="text-blue-100">
                        Mon - Sat: 9:00 AM - 6:00 PM<br />
                        Sun: 10:00 AM - 4:00 PM<br />
                        Emergency: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href="https://wa.me/919000666476" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">WhatsApp</span>
                </a>
                
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="group bg-[#165FAC] hover:bg-[#031b4e] text-white p-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Book Now</span>
                </button>
              </div>
              
              {/* Emergency Notice */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900">Emergency Cases</h4>
                    <p className="text-sm text-red-700">
                      24/7 emergency support available for urgent maxillofacial cases
                    </p>
                  </div>
                </div>
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

export default Location;