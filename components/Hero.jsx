'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Professional House Painting",
      subtitle: "Transform Your Home with Expert Painting Services",
      description: "From interior to exterior painting, we deliver flawless results that last.",
      image: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Deep Cleaning Services",
      subtitle: "Spotless Homes, Healthy Living",
      description: "Comprehensive cleaning solutions for every corner of your home.",
      image: "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Expert Plumbing Solutions",
      subtitle: "Reliable Plumbing You Can Trust",
      description: "Fast, professional plumbing repairs and installations.",
      image: "https://images.pexels.com/photos/8293660/pexels-photo-8293660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    "Licensed & Insured Professionals",
    "Free Estimates & Consultations",
    "100% Satisfaction Guarantee",
    "Emergency Services Available"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl sm:text-2xl mb-4 text-gray-200">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
            {slides[currentSlide].description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center sm:justify-start space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+1234567890"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 w-full sm:w-auto text-center"
            >
              Call (234) 567-8900
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}