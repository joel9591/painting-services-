"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Paintbrush,
  Sparkles,
  Wrench,
  Zap,
  Sofa,
  Home,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- Service Card (Desktop/Tablet) ---
function ServiceCard({ service }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % service.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [service.images.length]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group w-80 flex-shrink-0 mx-2">
      {/* Image carousel */}
      <div className="relative h-48 overflow-hidden rounded-sm">
        {service.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={service.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        {/* Icon */}
        <div className="absolute top-2 left-2">{service.icon}</div>
        {/* Price text */}
        <div className="absolute bottom-2 left-2 text-xs font-semibold bg-white/80 px-2 py-1 rounded">
          Starting ₹{service.price}/sq.ft
        </div>
      </div>

      {/* Content */}
      <div className="p-3 border rounded-lg shadow-xl">
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {service.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2 overflow-hidden h-10">{service.description}</p>
        <div className="flex justify-between items-center">
          <Link
            href={service.href}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-semibold"
          >
            View Details
            <ArrowRight
              size={14}
              className="ml-1 group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
          <Link
            href="#contact"
            className="inline-block bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md 
             font-medium shadow-sm transition-all duration-200 hover:bg-blue-700"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

// --- Service Card (Mobile) ---
function MobileServiceCard({ service }) {
  return (
    <div className="flex flex-col items-center text-center pb-2 bg-white rounded-lg shadow-lg">
      <img
        src={service.images[0]}
        alt={service.title}
        className="w-fit h-20 object-cover rounded-t-lg mb-2 "
      />
      <h3 className="text-xs font-semibold text-gray-900 mb-1 h-6 overflow-hidden">
        {service.title}
      </h3>
      <div className="flex gap-2">
        <Link
          href={service.href}
          className="text-[10px] px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          View
        </Link>
        <Link
          href="#contact"
          className="text-[10px] px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Book
        </Link>
      </div>
    </div>
  );
}

// --- Main Component ---
export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: <Paintbrush className="text-blue-600" size={32} />,
      title: "House Painting",
      description: "Interior and exterior painting with premium finishes.",
      price: 12,
      href: "/services/house-painting",
      images: [
        "https://images.pexels.com/photos/5691693/pexels-photo-5691693.jpeg",
        "https://images.pexels.com/photos/7217966/pexels-photo-7217966.jpeg",
        "https://images.pexels.com/photos/1917849/pexels-photo-1917849.jpeg",
      ],
    },
    {
      icon: <Sparkles className="text-purple-600" size={32} />,
      title: "Deep Cleaning",
      description: "Comprehensive deep cleaning for homes & offices.",
      price: 10,
      href: "/services/deep-cleaning",
      images: [
        "https://images.pexels.com/photos/4239130/pexels-photo-4239130.jpeg",
        "https://images.pexels.com/photos/6195951/pexels-photo-6195951.jpeg",
        "https://images.pexels.com/photos/4401538/pexels-photo-4401538.jpeg",
      ],
    },
    {
      icon: <Wrench className="text-green-600" size={32} />,
      title: "Plumbing",
      description: "Reliable plumbing repairs, fittings & maintenance.",
      price: 15,
      href: "/services/plumbing",
      images: [
        "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
        "https://images.pexels.com/photos/3288104/pexels-photo-3288104.png",
        "https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg",
      ],
    },
    {
      icon: <Zap className="text-yellow-600" size={32} />,
      title: "Electrical Work",
      description: "Safe & efficient electrical installations.",
      price: 20,
      href: "/services/electrical-work",
      images: [
        "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
        "https://images.pexels.com/photos/7641361/pexels-photo-7641361.jpeg",
        "https://images.pexels.com/photos/7285975/pexels-photo-7285975.jpeg",
      ],
    },
    {
      icon: <Sofa className="text-red-600" size={32} />,
      title: "Furniture Work",
      description: "Expert carpentry for furniture & fittings.",
      price: 18,
      href: "/services/furniture-work",
      images: [
        "https://images.pexels.com/photos/313776/pexels-photo-313776.jpeg",
        "https://images.pexels.com/photos/374861/pexels-photo-374861.jpeg",
        "https://images.pexels.com/photos/3814513/pexels-photo-3814513.jpeg",
      ],
    },
    {
      icon: <Home className="text-teal-600" size={32} />,
      title: "False Ceiling",
      description: "Modern false ceiling designs with lighting.",
      price: 25,
      href: "/services/false-ceiling",
      images: [
        "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
      ],
    },
  ];

  const visibleCount = 3; // number of cards visible
  const maxIndex = services.length - visibleCount;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  return (
    <section id="services" className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 lg:mb-4">
          Our Services
        </h2>

        {/* Mobile Grid */}
        <div className="grid grid-cols-3 gap-3 sm:hidden">
          {services.map((service, i) => (
            <MobileServiceCard key={i} service={service} />
          ))}
        </div>

        {/* Desktop/Tablet Carousel */}
        <div className="hidden sm:block relative">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl p-2 rounded-full hover:bg-gray-100 "
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 21}rem)`,
              }}
            >
              {services.map((service, i) => (
                <ServiceCard key={i} service={service} />
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
