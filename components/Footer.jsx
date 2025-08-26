import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Clock,
} from "lucide-react";

export default function Footer() {
  const services = [
    { name: "House Painting", href: "/services/house-painting" },
    { name: "Deep Cleaning", href: "/services/deep-cleaning" },
    { name: "Plumbing", href: "/services/plumbing" },
    { name: "Electrical Work", href: "/services/electrical-work" },
    { name: "Furniture Work", href: "/services/furniture-work" },
    { name: "False Ceiling", href: "/services/false-ceiling" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
    { name: "Get Quote", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Bharath Painters
            </h3>
            <p className="text-gray-300 mb-6">
              Your trusted partner for all home improvement needs. We deliver
              quality, reliability, and exceptional service with every project.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin
                  className="text-blue-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <p className="text-gray-300">123 Main Street, Suite 200</p>
                  <p className="text-gray-300">
                    New town, yelahanka 560064 Karnataka
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400 flex-shrink-0" size={20} />
                <a
                  href="tel:+919591576089"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +91 9591576089
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={20} />
                <a
                  href="mailto:info@prohomeservices.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  info@bharathpainters.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-300">Mon-Fri: 8AM-6PM</p>
                  <p className="text-gray-300">Sat: 9AM-4PM</p>
                  <p className="text-gray-300">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 bg-red-600 rounded-lg p-6 text-center">
          <h4 className="text-xl font-bold mb-2">
            24/7 Emergency Services Available
          </h4>
          <p className="mb-4">
            Plumbing or electrical emergency? We're here to help anytime!
          </p>
          <a
            href="tel:+1234567890"
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Phone size={20} />
            <span>Call Emergency Line</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 ProHome Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
