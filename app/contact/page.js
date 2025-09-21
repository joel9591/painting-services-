import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/Footer-contact";

export const metadata = {
  title: "Contact Us | Professional Home Services",
  description:
    "Get in touch with our team for professional home services including painting, plumbing, electrical work, and more. Request a free quotation today.",
  keywords:
    "contact home services, request quotation, home improvement consultation, professional services contact, home services, house painting, plumbing, electrical work, deep cleaning, furniture work, false ceiling, home improvement, professional services, renovation, house renovate, house renovation, bharath, painters, paintings, bharath painters",
  openGraph: {
    title: "Contact Professional Home Services - Request a Quotation",
    description:
      "Reach out to our team for all your home service needs. Free consultations and Quotations available.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-500 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-md sm:text-lg text-blue-100 max-w-3xl mx-auto">
            Get in touch with our team for a free consultation and Quotation on
            your home service needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-2 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 m-4 lg:m-6 sm:px-12 ">
          {/* Client Contact Form */}
          <ContactForm />

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
                      <p className="text-gray-700">+91 8884563601</p>
                      <p className="text-gray-700">+91 9078637633</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-blue-600 mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-700">info@bharathpainters.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-700">
                        Kudlu Gate, AECS Layout - A Block,
                        <br />
                        Hal Layout, Singasandra, Bengaluru,
                        <br />
                        Karnataka 560068
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
                        Monday - Saturday: 8:00 AM - 6:00 PM
                        <br />
                        Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-8 mx-8 ">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Service Areas
            </h2>
            <p className="text-gray-700 mb-4 text-center">
              We provide our professional home services frequently throughout
              the following areas:
            </p>
            <ul className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-2 md:gap-3 lg:gap-4 text-gray-700 list-disc list-inside text-sm lg:text-md md:text-base">
              <li>HSR Layout</li>
              <li>Sarjapura</li>
              <li>Bellandur</li>
              <li>Electronic City</li>
              <li>JP Nagar</li>
              <li>BTM Layout</li>
              <li>Koramangala</li>
              <li>Jayanagar</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
