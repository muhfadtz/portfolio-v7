import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const TypeWriter: React.FC<{ text: string; delay?: number }> = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          Hello, I'm <span className="text-gray-700"><TypeWriter text="Fadhlan" /></span>
        </h1>
        <p className="text-s md:text-s text-gray-600 mb-8 animate-fade-in-delay-1">
          Backend Developer & Fullstack Enthusiast
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-200 animate-fade-in-delay-2"
        >
          Get in Touch
        </a>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </a>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-delay-1 {
          opacity: 0;
          animation: fade-in 0.6s ease-out forwards;
          animation-delay: 0.2s;
        }
        
        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fade-in 0.6s ease-out forwards;
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;