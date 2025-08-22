'use client';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown",
      service: "House Painting",
      rating: 5,
      text: "Absolutely amazing work! The team was professional, punctual, and the quality of their painting exceeded our expectations. Our home looks brand new!",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Michael Chen",
      location: "Suburbs",
      service: "Plumbing",
      rating: 5,
      text: "Quick response to our plumbing emergency. The technician was knowledgeable and fixed the issue efficiently. Highly recommend their services!",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Emily Rodriguez",
      location: "City Center",
      service: "Deep Cleaning",
      rating: 5,
      text: "The deep cleaning service was thorough and impressive. They cleaned areas I never even thought about. My house has never been cleaner!",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "David Thompson",
      location: "West Side",
      service: "Electrical Work",
      rating: 5,
      text: "Professional electrical work at a fair price. They installed new lighting throughout our home and everything works perfectly. Great service!",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Lisa Park",
      location: "North End",
      service: "Furniture Work",
      rating: 5,
      text: "They restored our antique dining set beautifully. The craftsmanship is exceptional and the furniture looks better than when we first bought it!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-xl shadow-2xl p-8 lg:p-12 relative">
            <Quote className="absolute top-6 left-6 text-blue-600 opacity-20" size={48} />
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                
                <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div>
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentTestimonial].service} • {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Customer Logos/Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-blue-100 mb-8">Trusted by homeowners across the city</p>
          <div className="flex flex-wrap justify-center items-center space-x-8 lg:space-x-16 opacity-60">
            <div className="text-white font-bold text-lg">★ Google Reviews</div>
            <div className="text-white font-bold text-lg">★ Better Business Bureau</div>
            <div className="text-white font-bold text-lg">★ HomeAdvisor</div>
            <div className="text-white font-bold text-lg">★ Angie's List</div>
          </div>
        </div>
      </div>
    </section>
  );
}