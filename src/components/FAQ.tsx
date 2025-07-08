import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactForm from './ContactForm';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: "What is maxillofacial surgery?",
      answer: "Maxillofacial surgery is a specialized field that focuses on treating conditions, injuries, and defects affecting the face, mouth, jaws, and neck. It combines both medical and dental expertise to address functional and aesthetic concerns."
    },
    {
      question: "How do I know if I need TMJ treatment?",
      answer: "Common signs include jaw pain, clicking or popping sounds when opening your mouth, difficulty chewing, jaw locking, headaches, and facial pain. Our specialists can perform a comprehensive evaluation to determine if TMJ treatment is right for you."
    },
    {
      question: "What is the recovery time for jaw correction surgery?",
      answer: "Recovery time varies depending on the complexity of the procedure. Generally, initial healing takes 2-4 weeks, with complete recovery taking 3-6 months. We provide detailed post-operative care instructions and follow-up appointments to ensure optimal healing."
    },
    {
      question: "Are the procedures covered by insurance?",
      answer: "Coverage depends on your insurance plan and the medical necessity of the procedure. Reconstructive surgeries are often covered, while cosmetic procedures may not be. Our team can help verify your insurance benefits and discuss payment options."
    },
    {
      question: "What should I expect during my first consultation?",
      answer: "During your initial consultation, we'll review your medical history, perform a thorough examination, discuss your concerns and goals, and may take imaging studies if needed. We'll then explain treatment options and create a personalized treatment plan."
    }
  ];

  useEffect(() => {
    gsap.fromTo(faqRef.current, 
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
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section ref={sectionRef} className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031b4e] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our services and procedures
            </p>
          </div>
          
          <div ref={faqRef} className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#165FAC] focus:ring-offset-2 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-[#031b4e] pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 bg-[#165FAC] rounded-full flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-[#165FAC] hover:bg-[#031b4e] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        title="Get Your Questions Answered"
      />
    </>
  );
};

export default FAQ;