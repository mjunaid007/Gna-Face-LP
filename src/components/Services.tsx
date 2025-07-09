import React, { useEffect, useRef } from 'react';
import { 
  Stethoscope, 
  Shield, 
  Heart, 
  Sparkles, 
  Activity,
  Moon,
  User,
  Zap,
  Baby
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const services = [
    {
      icon: Activity,
      title: "TMJ Disorders",
      description: "Advanced treatment for temporomandibular joint disorders and jaw pain relief.",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      icon: Shield,
      title: "Jaw Correction Surgery",
      description: "Orthognathic surgery to correct jaw alignment and improve function.",
      color: "from-purple-500 to-pink-500",
      image: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      icon: Heart,
      title: "Facial Trauma & Reconstruction",
      description: "Expert reconstruction of facial injuries and trauma with precision care.",
      color: "from-red-500 to-orange-500",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      icon: Sparkles,
      title: "Cosmetic Facial Surgery",
      description: "Aesthetic procedures to enhance facial harmony and natural beauty.",
      color: "from-green-500 to-teal-500",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      icon: Stethoscope,
      title: "Oral Cancer Surgery",
      description: "Comprehensive treatment for oral and maxillofacial cancers.",
      color: "from-indigo-500 to-purple-500",
      image: "https://images.pexels.com/photos/4173258/pexels-photo-4173258.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      icon: Moon,
      title: "Sleep Apnea Treatments",
      description: "Surgical solutions for obstructive sleep apnea and breathing disorders.",
      color: "from-yellow-500 to-orange-500",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      icon: User,
      title: "Rhinoplasty",
      description: "Nose reshaping surgery for both aesthetic and functional improvements.",
      color: "from-pink-500 to-red-500",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      icon: Zap,
      title: "Impacted Teeth Removal",
      description: "Safe extraction of impacted wisdom teeth and complex dental procedures.",
      color: "from-cyan-500 to-blue-500",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      icon: Baby,
      title: "Cleft Lip & Palate Repair",
      description: "Specialized surgery to correct cleft lip and palate conditions.",
      color: "from-emerald-500 to-green-500",
      image: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
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
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section id="services" ref={servicesRef} className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#031b4e] mb-4">
            Our Specialized Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive maxillofacial care with cutting-edge technology and expert precision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className={`absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg`}>
                  <service.icon className={`w-6 h-6 text-[#165FAC]`} />
                </div>
              </div>
              
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-[#031b4e] mb-3 group-hover:text-[#165FAC] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <button className="text-[#165FAC] font-semibold hover:text-[#031b4e] transition-colors flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <div className="w-6 h-6 bg-[#165FAC] rounded-full flex items-center justify-center group-hover:bg-[#031b4e] transition-colors">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;