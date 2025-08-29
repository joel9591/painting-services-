import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | Professional Home Services",
  description:
    "Get in touch with our team for professional home services including painting, plumbing, electrical work, and more. Request a free quotation today.",
  keywords:
    "contact home services, request quotation, home improvement consultation, professional services contact",
  openGraph: {
    title: "Contact Professional Home Services - Request a Quotation",
    description:
      "Reach out to our team for all your home service needs. Free consultations and Quotations available.",
  },
};

export default function Contact() {
  return (
    <main>
      <Navigation />
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-500 to-blue-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our team for a free consultation and Quotation on
            your home service needs.
          </p>
        </div>
      </section>

      <section className="py-4 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 m-8">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Name
                          <span className="text-red-600 font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm duration-600"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      {/* Email */}
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
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm duration-600"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                          <span className="text-red-600 font-bold">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm duration-600"
                          placeholder="Enter your number"
                        />
                      </div>
                      {/* Service */}
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm duration-600"
                          required
                        >
                          <option value="">Select a Service</option>
                          <option value="House Painting">House Painting</option>
                          <option value="Deep Cleaning">Deep Cleaning</option>
                          <option value="Plumbing">Plumbing</option>
                          <option value="Electrical Work">
                            Electrical Work
                          </option>
                          <option value="Furniture Work">Furniture Work</option>
                          <option value="False Ceiling">False Ceiling</option>
                        </select>
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
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 focus:shadow-md focus:shadow-gray-200 text-sm duration-600"
                      ></textarea>
                    </div>
                  </div>

                  {/* Button with little bottom padding */}
                  <div className="pt-4 pb-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                    >
                      <Send className="mr-2" size={18} />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="text-blue-600 mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-700">+91 9591476089</p>
                      <p className="text-gray-700">+91 9675467887</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-blue-600 mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-700">info@bharathpainters.com</p>
                      <p className="text-gray-700">
                        support@bharathpainters.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-700">
                        123 Main Street, Suite 200
                        <br />
                        New town, yelahanka 560064
                        <br />
                        Karnataka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="text-blue-600 mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Business Hours
                      </h3>
                      <p className="text-gray-700">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-8 mx-8 ">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Service Areas
            </h2>
            <p className="text-gray-700 mb-4 text-center">
              We provide our professional home services throughout the following
              areas:
            </p>
            <ul className="grid grid-cols-4 gap-4 text-gray-700 list-disc list-inside ">
              <li>Downtown</li>
              <li>Uptown</li>
              <li>West Side</li>
              <li>East Side</li>
              <li>North County</li>
              <li>South County</li>
              <li>Suburbs</li>
              <li>Metropolitan Area</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
