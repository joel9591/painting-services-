"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: [],
    message: "",
  });

  const services = [
    "House Painting",
    "Deep Cleaning",
    "Plumbing",
    "Electrical Work",
    "Furniture Work",
    "False Ceiling",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => {
      const updatedServices = prev.service.includes(service)
        ? prev.service.filter((s) => s !== service)
        : [...prev.service, service];
      return { ...prev, service: updatedServices };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service.join(", "),
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      () => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: [],
          message: "",
        });
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      }
    );
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-400 focus:shadow-md text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-400 focus:shadow-md text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-400 focus:shadow-md text-sm"
                placeholder="Enter your number"
              />
            </div>

            {/* Service with Checkboxes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Services Interested In
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <label
                    key={service}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.service.includes(service)}
                      onChange={() => handleCheckboxChange(service)}
                      className="hidden"
                    />
                    <span
                      className={`w-5 h-5 flex items-center justify-center border rounded-md ${
                        formData.service.includes(service)
                          ? "bg-green-500 border-green-500 text-white"
                          : "border-gray-400 bg-white"
                      }`}
                    >
                      {formData.service.includes(service) && "✔"}
                    </span>
                    <span className="text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-400 focus:shadow-md text-sm"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors duration-200"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
