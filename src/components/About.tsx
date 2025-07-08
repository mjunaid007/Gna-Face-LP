import React, { useEffect, useRef } from 'react';
import { Users, Award, Heart, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  const stats = [
    {
      icon: Users,
      number: "150K+",
      label: "Patient Recoveries",
      color: "text-blue-600"
    },
    {
      icon: Heart,
      number: "45K+",
      label: "Happy Patients",
      color: "text-red-500"
    },
    {
      icon: Award,
      number: "150+",
      label: "Awards Won",
      color: "text-yellow-600"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Emergency Support",
      color: "text-green-600"
    }
  ];

  useEffect(() => {
    const stats = statsRef.current;
    
    gsap.fromTo(stats, 
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#031b4e] mb-6">
              The Guardians of the Face
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 20 years of clinical excellence, Gnathos provides precision-driven 
              maxillofacial surgery using cutting-edge technology and a compassionate, 
              patient-first approach.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of world-class surgeons specializes in complex facial procedures, 
              combining artistry with medical expertise to restore both function and aesthetics. 
              We believe every patient deserves the highest standard of care delivered with 
              empathy and understanding.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) statsRef.current[index] = el;
                  }}
                  className="text-center group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 group-hover:bg-[#165FAC] transition-colors duration-300 mb-4`}>
                    <stat.icon className={`w-8 h-8 ${stat.color} group-hover:text-white transition-colors`} />
                  </div>
                  <div className="text-2xl font-bold text-[#031b4e] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Medical team at Gnathos Face"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031b4e]/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#165FAC] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#031b4e]">Excellence Award</div>
                  <div className="text-sm text-gray-600">Best Maxillofacial Center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;