"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-2"
            : "bg-white/95 backdrop-blur-sm py-3"
        }`}
      >
        <div className="w-full flex items-center px-2 sm:px-4 lg:px-6">
          {/* Logo Section */}
          <Link href="/" className="flex items-start">
            <Image
              src="/logo.jpg"
              alt="Bharath Painters Logo"
              width={42}
              height={42}
              className="rounded"
              style={{ height: "auto" }}
            />
            <span className="ml-2 mt-2 text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-600">
              Bharath Painters
            </span>
          </Link>

          {/* Desktop Navigation (only lg+) */}
          <div className="hidden lg:flex ml-10 space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-2 py-2 text-base lg:text-lg font-semibold rounded-md transition-colors duration-200
                  ${
                    pathname === item.href
                      ? "text-yellow-500"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons (only lg+) */}
          <div className="hidden lg:flex items-center space-x-3 ml-auto">
            <a
              href="tel:+91 7978114096"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white h-10 px-4 rounded-lg font-semibold transition-colors duration-200"
            >
              <Phone size={18} className="mr-1" />
              Call Now
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white h-10 px-6 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Quotation
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button (md & below) */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-2 py-2 text-base font-semibold rounded-md transition-colors duration-200
                    ${
                      pathname === item.href
                        ? "bg-gray-200 text-yellow-500"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <a
                  href="tel:+91 7978114096"
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-full h-12 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Phone size={18} className="mr-1" />
                  Call Now
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 w-full h-12 rounded-lg font-semibold transition-colors duration-200 mx-auto"
                >
                  Get Quotation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918884563601?text=Hello!%20I'm%20interested%20in%20your%20services.%20May%20I%20know%20more%20about%20your%20work?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Mobile Floating Call Button */}
      <a
        href="tel:+91 7978114096"
        className="lg:hidden fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
    </>
  );
}
