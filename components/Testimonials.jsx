"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown",
      service: "House Painting",
      rating: 5,
      text: "Absolutely amazing work! The team was professional, punctual, and the quality of their painting exceeded our expectations. Our home looks brand new!",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
    {
      name: "Michael Chen",
      location: "Suburbs",
      service: "Plumbing",
      rating: 5,
      text: "Quick response to our plumbing emergency. The technician was knowledgeable and fixed the issue efficiently. Highly recommend their services!",
      image:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
    {
      name: "Emily Rodriguez",
      location: "City Center",
      service: "Deep Cleaning",
      rating: 5,
      text: "The deep cleaning service was thorough and impressive. They cleaned areas I never even thought about. My house has never been cleaner!",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
    {
      name: "David Thompson",
      location: "West Side",
      service: "Electrical Work",
      rating: 5,
      text: "Professional electrical work at a fair price. They installed new lighting throughout our home and everything works perfectly. Great service!",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
    {
      name: "Lisa Park",
      location: "North End",
      service: "Furniture Work",
      rating: 5,
      text: "They restored our antique dining set beautifully. The craftsmanship is exceptional and the furniture looks better than when we first bought it!",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
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
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-4 sm:py-6 lg:py-6 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-12 ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-2">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our services.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto sm:-mt-6 lg:-mt-6">
          {/* Main Testimonial */}
          <div className="bg-white rounded-xl shadow-2xl p-3 sm:p-5 lg:p-6 relative">
            <Quote
              className="absolute top-2 sm:top-1 left-3 sm:left-1 text-blue-600 opacity-20"
              size={36}
            />

            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Image smaller on mobile */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 sm:border-4 border-blue-100"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex justify-center sm:justify-start mb-2 sm:mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                    )
                  )}
                </div>

                {/* Font size smaller on mobile */}
                <blockquote className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div>
                  <div className="text-base sm:text-lg font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-blue-600 font-medium text-sm sm:text-base">
                    {testimonials[currentTestimonial].service} •{" "}
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-3 sm:space-x-4 mt-3 sm:mt-5">
            <button
              onClick={prevTestimonial}
              className="bg-white text-blue-600 p-2 sm:p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-200"
            >
              <ChevronLeft size={20} className="sm:size-24" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white text-blue-600 p-2 sm:p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-2 sm:mt-8 text-center lg:mt-5">
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-2 sm:mb-5">
            Trusted by homeowners across the city
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-16 opacity-70 text-xs sm:text-sm lg:text-lg">
            <div className="text-white font-bold">★ Google Reviews</div>
            {/* <div className="text-white font-bold">★ Better Business Bureau</div>
            <div className="text-white font-bold">★ HomeAdvisor</div>
            <div className="text-white font-bold">★ Angie's List</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
