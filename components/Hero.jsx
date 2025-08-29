"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    "https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative text-white overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((url, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${url})` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div
            className={`space-y-6 transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Home Services You Can Trust
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              From painting to plumbing, electrical work to deep cleaning, we
              provide comprehensive home services with quality guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <span>Our Services</span>
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={18}
                />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Get a Free Quotation
              </Link>
            </div>
          </div>

          {/* Right Form */}
          <div
            className={`bg-white/4 backdrop-blur-xs rounded-lg p-2  shadow-2xl transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 lg:translate-x-12 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white/95 rounded-lg p-4 sm:p-5 text-gray-900 w-full max-w-md mx-auto">
              <h2 className="text-xl font-bold text-blue-700 mb-3">
                Request a Service
              </h2>
              <form className="space-y-3">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm"
                    placeholder="9865845876"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm"
                  >
                    <option value="">Select a Service</option>
                    <option>House Painting</option>
                    <option>Deep Cleaning</option>
                    <option>Plumbing</option>
                    <option>Electrical Work</option>
                    <option>Furniture Work</option>
                    <option>False Ceiling</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Brief Description
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 transform hover:scale-105"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </section>
  );
}
