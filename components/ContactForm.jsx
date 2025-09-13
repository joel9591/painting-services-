"use client";
import { useState, useRef } from "react";
import { Send, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: [],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    "House Painting",
    "Deep Cleaning",
    "Plumbing",
    "Electrical Work",
    "Furniture Work",
    "False Ceiling",
    "Other",
  ];

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle multiple service selection with checkboxes
  const toggleService = (service) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(service);
      return {
        ...prev,
        services: isSelected
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  // handle form submit with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EmailJS_service_ID, // Replace with your EmailJS Service ID
        process.env.NEXT_PUBLIC_EmailJS_template_ID, // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          services: formData.services.join(", "),
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EmailJS_public_key // Replace with your EmailJS Public Key
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
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

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      info: "+91 7978114096",
      link: "tel:+917978114096",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      info: "info@bharathpainters.com",
      link: "mailto:info@bharathpainters.com",
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      info: "123 Main Street, Your City, State 12345",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      info: "Mon-Sat: 8AM-6PM, Sun: 10AM-4PM",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quotation Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your home? Contact us for a free estimate and
            consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-blue-600 bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">
                Emergency Services
              </h4>
              <p className="text-red-700 mb-3">
                Need urgent assistance? We offer 24/7 emergency services for
                plumbing and electrical issues.
              </p>
              <a
                href="tel:+917978114096"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 inline-block"
              >
                Call Emergency Line
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Request a Quotation
              </h3>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name<span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-gray-300 focus:shadow-md text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                      <span className="text-red-600 font-bold">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-gray-300 focus:shadow-md text-sm"
                      placeholder="9123456789"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                      <span className="text-red-600 font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-gray-300 focus:shadow-md text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Services with checkboxes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Services Required
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex items-center space-x-2 cursor-pointer border rounded-lg px-4 py-2 hover:bg-gray-50 transition"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => toggleService(service)}
                          className="hidden"
                        />
                        <div
                          className={`w-5 h-5 flex items-center justify-center border rounded ${
                            formData.services.includes(service)
                              ? "bg-green-500 border-green-500"
                              : "border-gray-300"
                          }`}
                        >
                          {formData.services.includes(service) && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <span className="text-gray-700 text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-gray-300 focus:shadow-md text-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Get Free Quotation</span>
                    </>
                  )}
                </button>

                {/* Alerts */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                    ✅ Thank you! Your quote request has been submitted. We'll
                    contact you within 24 hours.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    ❌ Sorry, there was an error submitting your request. Please
                    try again or call us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
