import React, { useEffect, useRef } from 'react';
import { Shield, Award, Users, Clock, Heart, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const reasons = [
    {
      icon: Award,
      title: "20+ Years of Excellence",
      description: "Two decades of proven expertise in maxillofacial surgery with thousands of successful procedures.",
      bgColor: "bg-white"
    },
    {
      icon: Users,
      title: "Expert Surgeons",
      description: "Board-certified specialists with international training and recognition in facial surgery.",
      bgColor: "bg-gray-50"
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art equipment and cutting-edge surgical techniques for optimal results.",
      bgColor: "bg-white"
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Compassionate approach with personalized treatment plans tailored to each patient's needs.",
      bgColor: "bg-gray-50"
    },
    {
      icon: Clock,
      title: "24/7 Emergency Support",
      description: "Round-the-clock availability for urgent maxillofacial emergencies and post-operative care.",
      bgColor: "bg-white"
    },
    {
      icon: Zap,
      title: "Minimally Invasive Techniques",
      description: "Advanced surgical methods that reduce recovery time and minimize scarring.",
      bgColor: "bg-gray-50"
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
    gsap.fromTo(cards, 
      { 
        y: 80, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#031b4e] mb-4">
            Why Choose Gnathos Face?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the difference that expertise, technology, and compassionate care can make
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`group ${reason.bgColor} rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-[#165FAC]/20`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#165FAC] mb-4 group-hover:bg-[#031b4e] transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-[#031b4e] mb-3 group-hover:text-[#165FAC] transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;