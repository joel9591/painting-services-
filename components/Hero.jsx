"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Send, Check } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const slides = [
    "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    "https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
  ];

  const services = [
    "House Painting",
    "Deep Cleaning",
    "Plumbing",
    "Electrical Work",
    "Furniture Work",
    "False Ceiling",
    "Other",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EmailJS_service_ID, // Replace with your EmailJS Service ID
        process.env.NEXT_PUBLIC_EmailJS_template_ID, // Replace with your EmailJS template ID
        formRef.current,
        process.env.NEXT_PUBLIC_EmailJS_public_key // Replace with your EmailJS public key
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        services: [],
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Text */}
          <div
            className={`space-y-5 transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Professional Home Services You Can Trust
            </h1>
            <p className="text-base md:text-lg text-blue-100 leading-relaxed">
              From painting to plumbing, electrical work to deep cleaning, we
              provide comprehensive home services with quality guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/services"
                className="bg-white text-blue-700 hover:bg-blue-50 px-5 py-2.5 rounded-md font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <span>Our Services</span>
                <ArrowRight
                  className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  size={16}
                />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-700 px-5 py-2.5 rounded-md font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 text-center"
              >
                Get a Free Quotation
              </Link>
            </div>
          </div>

          {/* Right Form */}
          <div
            className={`bg-white/5 backdrop-blur-sm rounded-lg p-2 shadow-xl transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 lg:translate-x-8 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white/95 rounded-lg p-3 sm:p-4 text-gray-900 w-full max-w-sm mx-auto">
              <h2 className="text-lg font-bold text-blue-700 mb-2">
                Request a Service
              </h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="hidden"
                  name="services"
                  value={formData.services.join(", ")}
                />

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-medium text-gray-700 mb-0.5"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 border rounded-md text-xs focus:outline-none focus:ring-0 focus:shadow-sm"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-medium text-gray-700 mb-0.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 border rounded-md text-xs focus:outline-none focus:ring-0 focus:shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[11px] font-medium text-gray-700 mb-0.5"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-2.5 py-1.5 border rounded-md text-xs focus:outline-none focus:ring-0 focus:shadow-sm"
                    placeholder="9865845876"
                  />
                </div>

                {/* Multi-Select Services */}
                <div>
                  <label className="block text-[11px] font-medium text-gray-700 mb-0.5">
                    Select Services
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceSelect(service)}
                        className={`flex items-center justify-between px-2.5 py-1.5 rounded-md border text-xs transition-all ${
                          formData.services.includes(service)
                            ? "bg-green-100 border-green-500 text-green-700"
                            : "bg-white border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <span>{service}</span>
                        {formData.services.includes(service) && (
                          <Check size={14} className="text-green-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-medium text-gray-700 mb-0.5"
                  >
                    Brief Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-2.5 py-1.5 border rounded-md text-xs focus:outline-none focus:ring-0 focus:shadow-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md font-semibold text-xs transition-all duration-300 transform ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-3 w-3 border-b-2 border-white rounded-full"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Submit
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-md p-1.5 text-green-700 text-xs mt-1">
                    Thank you! Your request has been submitted.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-1.5 text-red-700 text-xs mt-1">
                    Sorry, something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </section>
  );
}
