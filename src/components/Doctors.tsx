import React, { useEffect, useRef, useState } from 'react';
import { Award, GraduationCap, Users, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactForm from './ContactForm';

gsap.registerPlugin(ScrollTrigger);

const Doctors = () => {
  const doctorsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const doctors = [
    {
      name: "Dr. Suresh P",
      title: "Senior Consultant & TMJ Specialist",
      experience: "20+ Years",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      specializations: ["TMJ Disorders", "Orthognathic Surgery", "Facial Trauma"],
      qualifications: ["MDS - Oral & Maxillofacial Surgery", "Fellowship in TMJ Surgery"],
      achievements: ["150+ Complex Surgeries", "Research Publications", "International Speaker"]
    },
    {
      name: "Dr. Navatha Mortha",
      title: "Senior Consultant & TMJ Specialist",
      experience: "15+ Years",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      specializations: ["Cosmetic Facial Surgery", "Cleft Repair", "Rhinoplasty"],
      qualifications: ["MDS - Oral & Maxillofacial Surgery", "Advanced Aesthetic Training"],
      achievements: ["100+ Aesthetic Procedures", "Excellence Awards", "Patient Choice Award"]
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
    gsap.fromTo(cards, 
      { 
        y: 100, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: doctorsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <>
      <section id="doctors" ref={doctorsRef} className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031b4e] mb-4">
              Meet Our Expert Surgeons
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Renowned specialists dedicated to excellence in maxillofacial surgery
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Doctor Image */}
                    <div className="relative flex-shrink-0">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden">
                        <img 
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-[#165FAC] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {doctor.experience}
                      </div>
                    </div>
                    
                    {/* Doctor Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#031b4e] mb-2 group-hover:text-[#165FAC] transition-colors">
                        {doctor.name}
                      </h3>
                      <p className="text-[#165FAC] font-medium mb-4">
                        {doctor.title}
                      </p>
                      
                      {/* Specializations */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-[#165FAC]" />
                          <span className="text-sm font-medium text-gray-700">Specializations</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specializations.map((spec, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-50 text-[#165FAC] text-sm rounded-full">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Qualifications */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-4 h-4 text-[#165FAC]" />
                          <span className="text-sm font-medium text-gray-700">Qualifications</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {doctor.qualifications.map((qual, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-[#165FAC] mt-1">•</span>
                              {qual}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Achievements */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-[#165FAC]" />
                          <span className="text-sm font-medium text-gray-700">Achievements</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {doctor.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-[#165FAC] mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button 
                      onClick={() => setIsFormOpen(true)}
                      className="w-full bg-[#165FAC] hover:bg-[#031b4e] text-white py-3 px-6 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        title="Book Consultation"
      />
    </>
  );
};

export default Doctors;