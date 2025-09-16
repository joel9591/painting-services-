"use client";

import { useState, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import MultiSelectDropdown from "./MultiSelectDropdown";
import ServiceForm from "./ServiceForm";

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

    const EmailJS_service_ID = process.env.NEXT_PUBLIC_EmailJS_service_ID;
    const EmailJS_template_ID = process.env.NEXT_PUBLIC_EmailJS_template_ID;
    const EmailJS_public_key = process.env.NEXT_PUBLIC_EmailJS_public_key;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service.join(", "),
      message: formData.message,
    };

    emailjs
      .send(
        EmailJS_service_ID,
        EmailJS_template_ID,
        templateParams,
        EmailJS_public_key
      )
      .then(
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
    <div className="space-y-2 min-w-full shadow-xl rounded-lg">
      <div className="p-3 sm:p-4 rounded-xl shadow-3xl overflow-hidden border border-gray-100 bg-white w-full">
        <h2 className="text-lg lg:text-3xl font-bold text-blue-700 mb-2 pl-2">
          Request a Service
        </h2>
        <ServiceForm />
      </div>
    </div>
  );
}
