"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import MultiSelectDropdown from "./MultiSelectDropdown";

export default function ServiceForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    // message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    "Interior Painting",
    "Exterior Painting",
    "Waterproofing",
    "Grouting",
    "Texture Painting",
    "Wood Finishes",
    "Wallpapers",
    "Deep Cleaning",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        email: "",
        phone: "",
        services: [],
        // message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 bg-white p-6 sm:p-8 shadow-lg rounded-xl"
    >
      {/* Name */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-0.5">
          Your Name
        </label>
        <input
          type="text"
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-0 focus:border-gray-300"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-0.5">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-0 focus:border-gray-300"
          placeholder="john@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-0.5">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-0 focus:border-gray-300"
          placeholder="9865845876"
        />
      </div>

      {/* Services Dropdown */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-0.5">
          Select Services
        </label>
        <MultiSelectDropdown
          options={services}
          selected={formData.services}
          onChange={(selected) =>
            setFormData({ ...formData, services: selected })
          }
        />
      </div>

      {/* Message */}
      {/* <div>
        <label className="block text-xs font-medium text-gray-700 mb-0.5">
          Brief Description
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-0 focus:border-gray-300"
        ></textarea>
      </div> */}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md font-semibold text-sm transition-all duration-300 transform ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105"
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin h-4 w-4 border-b-2 border-white rounded-full"></div>
            Submitting...
          </>
        ) : (
          <>
            <Send size={16} />
            Submit
          </>
        )}
      </button>

      {/* Status */}
      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-md p-2 text-green-700 text-xs mt-1">
          Thank you! Your request has been submitted.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-md p-2 text-red-700 text-xs mt-1">
          Sorry, something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}
