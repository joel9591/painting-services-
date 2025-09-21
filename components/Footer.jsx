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
  let currentYear = new Date().getFullYear();
  const services = [
    { name: "Interior Painting", href: "/services/interior-painting" },
    { name: "Exterior Painting", href: "/services/exterior-painting" },
    { name: "Water Proofing", href: "/services/water-proofing" },
    { name: "Grouting", href: "/services/grouting" },
    { name: "Texture", href: "/services/texture" },
    { name: "Wallpapers", href: "/services/wallpapers" },
    { name: "Deep Cleaning", href: "/services/deep-cleaning" },
    { name: "Wood Finishes", href: "/services/wood-finishes" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
    { name: "Get Quotation", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Services + Quick Links (2 cols on mobile, 1 col on tablet, separate on desktop) */}
          <div className="sm:col-span-2 grid grid-cols-2 gap-8">
            {/* Our Services */}
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
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  className="text-blue-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <p className="text-gray-300">Kudlu Gate, AECS Layout - </p>
                  <p className="text-gray-300">A Block, Hal Layout, Singasandra, Bengaluru,</p>
                  <p className="text-gray-300">Karnataka 560068</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400 flex-shrink-0" size={20} />
                <a
                  href="tel:+918884563601"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +91 8884563601
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={20} />
                <a
                  href="mailto:info@bharathpainters.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  info@bharathpainters.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-300">Mon-Sat: 8AM-6PM</p>
                  <p className="text-gray-300">Sun: 10AM-4PM</p>
                  <p className="text-gray-300">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        {/* <div className="mt-12 bg-red-600 rounded-lg p-6 text-center">
          <h4 className="text-xl font-bold mb-2">
            24/7 Emergency Services Available
          </h4>
          <p className="mb-4">
            Plumbing or electrical emergency? We're here to help anytime!
          </p>
          <a
            href="tel:+91 8884563601"
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Phone size={20} />
            <span>Call Emergency Line</span>
          </a>
        </div> */}

        {/* Bottom Bar */}
        <div className="mt-6 pt-2 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center ">
            © {currentYear} Bharath Painters Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
