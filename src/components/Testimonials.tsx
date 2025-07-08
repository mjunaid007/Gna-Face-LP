import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { gsap } from 'gsap';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Hyderabad",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimonial: "Dr. Suresh and his team completely transformed my life. The TMJ treatment was painless and the results exceeded my expectations. I can finally smile without pain!",
      rating: 5,
      procedure: "TMJ Treatment"
    },
    {
      name: "Rajesh Kumar",
      location: "Secunderabad",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimonial: "The jaw correction surgery was life-changing. The professionalism and care at Gnathos is unmatched. I highly recommend their services to anyone.",
      rating: 5,
      procedure: "Jaw Correction"
    },
    {
      name: "Anitha Reddy",
      location: "Gachibowli",
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimonial: "After my facial trauma, I thought my face would never be the same. The reconstruction surgery was amazing. The team is truly skilled and caring.",
      rating: 5,
      procedure: "Facial Reconstruction"
    },
    {
      name: "Vikram Singh",
      location: "Banjara Hills",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimonial: "The cosmetic surgery results are natural and beautiful. Dr. Navatha's expertise is evident in every detail. I couldn't be happier with my decision.",
      rating: 5,
      procedure: "Cosmetic Surgery"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    gsap.fromTo(testimonialRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 bg-gradient-to-br from-[#031b4e] to-[#165FAC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real Patients, Real Stories
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Hear from our patients about their transformative experiences
          </p>
        </div>
        
        <div className="relative">
          <div ref={testimonialRef} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Quote className="w-16 h-16 text-[#165FAC] opacity-20" />
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].testimonial}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-6">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[#165FAC]"
                />
                <div className="text-left">
                  <div className="font-bold text-[#031b4e] text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].location}
                  </div>
                  <div className="text-sm text-[#165FAC] font-medium">
                    {testimonials[currentIndex].procedure}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;