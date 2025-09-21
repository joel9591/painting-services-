"use client";
import { useState, useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ServiceForm from "./ServiceForm";

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          services: formData.services.join(", "),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

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
      icon: <Phone size={22} />,
      title: "Call Us",
      info: "+91 8884563601",
      link: "tel:+918884563601",
    },
    {
      icon: <Mail size={22} />,
      title: "Email Us",
      info: "info@bharathpainters.com",
      link: "mailto:info@bharathpainters.com",
    },
    {
      icon: <MapPin size={22} />,
      title: "Visit Us",
      info: "Kudlu Gate, AECS Layout - A Block, Hal Layout, Singasandra, Bengaluru, Karnataka 560068",
      link: "https://maps.app.goo.gl/RomWdvGzWs2GwkY87",
    },
    {
      icon: <Clock size={22} />,
      title: "Working Hours",
      info: "Mon-Sat: 8AM-6PM, Sun: 10AM-4PM",
    },
  ];

  return (
    <section id="contact" className="py-4 sm:py-5 lg:py-6 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Get Your Free Quotation Today
          </h2>
          <p className="text-sm sm:text-base lg:text-md text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your home? Contact us for a free estimate and
            consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-24 sm:-mt-6">
          {/* Contact Information */}
          <div className="-mt-4 sm:-mt-2 lg:-mt-0 lg:pt-20 sm:pt-10">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-1">
              Get In Touch
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 mb-8 max-w-full sm:w-full sm:shadow-none shadow-lg py-5 px-1 rounded-sm">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4"
                >
                  <div className="text-blue-600 bg-blue-100 p-1 sm:p-3 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-blue-600 text-xs sm:text-base transition-colors duration-200 break-words"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-xs sm:text-base ">
                        {item.info}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            {/* <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 text-sm sm:text-base mb-2">
                Emergency Services
              </h4>
              <p className="text-red-700 text-xs sm:text-sm mb-3 leading-relaxed">
                Need urgent assistance? We offer 24/7 emergency services for
                plumbing and electrical issues.
              </p>
              <a
                href="tel:+918884563601"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200 inline-block"
              >
                Call Emergency Line
              </a>
            </div> */}
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 mb-2 pl-2">
              Request a Service
            </h2>
            <ServiceForm />
          </div>
        </div>
      </div>
    </section>
  );
}
