import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Professional Home Services',
  description: 'Get in touch with our team for professional home services including painting, plumbing, electrical work, and more. Request a free quote today.',
  keywords: 'contact home services, request quote, home improvement consultation, professional services contact',
  openGraph: {
    title: 'Contact Professional Home Services - Request a Quote',
    description: 'Reach out to our team for all your home service needs. Free consultations and quotes available.',
  },
};

export default function Contact() {
  return (
    <main>
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for a free consultation and quote on your home service needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select a Service</option>
                        <option value="House Painting">House Painting</option>
                        <option value="Deep Cleaning">Deep Cleaning</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Electrical Work">Electrical Work</option>
                        <option value="Furniture Work">Furniture Work</option>
                        <option value="False Ceiling">False Ceiling</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                  >
                    <Send className="mr-2" size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
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
                        <p className="text-gray-700">support@bharathpainters.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="text-blue-600 mt-1 mr-4" size={24} />
                      <div>
                        <h3 className="font-semibold text-gray-900">Address</h3>
                        <p className="text-gray-700">
                          123 Main Street, Suite 200<br />
                          New town, yelahanka 560064<br />
                          Karnataka
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="text-blue-600 mt-1 mr-4" size={24} />
                      <div>
                        <h3 className="font-semibold text-gray-900">Business Hours</h3>
                        <p className="text-gray-700">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h2>
                  <p className="text-gray-700 mb-4">
                    We provide our professional home services throughout the following areas:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-gray-700">
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
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}