"use client";
import { useState, useRef } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
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
      // Send email using EmailJS
      await emailjs.sendForm(
        "service_id", // Replace with your EmailJS service ID
        "template_id", // Replace with your EmailJS template ID
        form.current,
        "public_key" // Replace with your EmailJS public key
      );

      // Add recipient email as a hidden field
      const templateParams = {
        to_email: "joelstalin76@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      };

      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
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
      info: "(234) 567-8900",
      link: "tel:+91 9591476089",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      info: "info@bharathservices.com",
      link: "mailto:info@bharathservices.com",
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
      info: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                href="tel:+91 9591476089"
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
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name<span className="text-red-600 font-bold ">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm duration-600"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number<span className="text-red-600 font-bold ">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm duration-600"
                      placeholder="(234) 567-8900"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address<span className="text-red-600 font-bold ">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm duration-600"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm duration-600"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

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
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm duration-600"
                    
                  ></textarea>
                </div>

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

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                    Thank you! Your quote request has been submitted. We'll
                    contact you within 24 hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    Sorry, there was an error submitting your request. Please
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
