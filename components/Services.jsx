// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import {
//   Paintbrush,
//   Sparkles,
//   Wrench,
//   Zap,
//   Sofa,
//   Home,
//   ArrowRight,
// } from "lucide-react";

// function ServiceCard({ service }) {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % service.images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [service.images.length]);

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group p-2 lg:p-3">
//       {/* Image carousel */}
//       <div className="relative h-36 lg:h-48 overflow-hidden rounded-sm">
//         {service.images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={service.title}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity rounded-sm duration-1000 ${
//               index === currentImage ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//         <div className="absolute bottom-3 left-3">{service.icon}</div>
//       </div>

//       {/* Service content */}
//       <div>
//         <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
//           {service.title}
//         </h3>
//         <p className="text-sm lg:text-base text-gray-600 mb-3">
//           {service.description}
//         </p>

//         <ul className="space-y-1 ">
//           {service.features.map((feature, idx) => (
//             <li
//               key={idx}
//               className="text-xs lg:text-sm text-gray-500 flex items-center"
//             >
//               <div className="w-1.5 h-1.5 bg-black rounded-full mr-2"></div>
//               {feature}
//             </li>
//           ))}
//         </ul>

//         <div className="flex items-center justify-between -mt-1">
//           <Link
//             href={service.href}
//             className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm lg:text-base font-semibold transition-colors duration-200 mt-4"
//           >
//             View Details
//             <ArrowRight
//               size={14}
//               className="ml-1 group-hover:translate-x-1 transition-transform duration-200"
//             />
//           </Link>
//           <Link
//             href="#contact"
//             className="mt-4 inline-block bg-blue-600 text-white text-sm px-3 py-1.5 rounded-lg 
//              font-medium shadow-md 
//              transition-all duration-300 ease-in-out 
//              hover:bg-blue-700 hover:scale-105 hover:shadow-lg active:scale-95"
//           >
//             Book Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Services() {
//   const services = [
//     {
//       icon: <Paintbrush className="text-blue-600" size={48} />,
//       title: "House Painting",
//       description:
//         "Interior and exterior painting with premium quality paints and professional finishes.",
//       features: [
//         "Interior Painting",
//         "Exterior Painting",
//         "Color Consultation",
//         "Wall Preparation",
//       ],
//       href: "/services/house-painting",
//       images: [
//         "https://images.pexels.com/photos/5691693/pexels-photo-5691693.jpeg",
//         "https://images.pexels.com/photos/7217966/pexels-photo-7217966.jpeg",
//         "https://images.pexels.com/photos/1917849/pexels-photo-1917849.jpeg",
//         "https://images.pexels.com/photos/5641407/pexels-photo-5641407.jpeg",
//         "https://images.pexels.com/photos/6474482/pexels-photo-6474482.jpeg",
//       ],
//     },
//     {
//       icon: <Sparkles className="text-purple-600" size={48} />,
//       title: "Deep Cleaning",
//       description:
//         "Comprehensive deep cleaning services for homes, offices, and commercial spaces.",
//       features: [
//         "Deep House Cleaning",
//         "Post-Construction Cleanup",
//         "Move-in/Move-out",
//         "Regular Maintenance",
//       ],
//       href: "/services/deep-cleaning",
//       images: [
//         "https://images.pexels.com/photos/4239130/pexels-photo-4239130.jpeg",
//         "https://images.pexels.com/photos/6195951/pexels-photo-6195951.jpeg",
//         "https://images.pexels.com/photos/4401538/pexels-photo-4401538.jpeg",
//         "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg",
//         "https://images.pexels.com/photos/9324302/pexels-photo-9324302.jpeg",
//       ],
//     },
//     {
//       icon: <Wrench className="text-green-600" size={48} />,
//       title: "Plumbing",
//       description:
//         "Reliable plumbing services including leak repairs, installations, and maintenance.",
//       features: [
//         "Pipe Repairs",
//         "Leak Detection",
//         "Bathroom & Kitchen Fittings",
//         "Water Heater Installation",
//       ],
//       href: "/services/plumbing",
//       images: [
//         "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
//         "https://images.pexels.com/photos/3288104/pexels-photo-3288104.png",
//         "https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg",
//         "https://images.pexels.com/photos/6263144/pexels-photo-6263144.jpeg",
//         "https://images.pexels.com/photos/3944859/pexels-photo-3944859.jpeg",
//       ],
//     },
//     {
//       icon: <Zap className="text-yellow-600" size={48} />,
//       title: "Electrical Work",
//       description:
//         "Professional electrical services ensuring safety and efficiency for all installations.",
//       features: [
//         "Wiring & Rewiring",
//         "Lighting Installation",
//         "Power Backup Solutions",
//         "Appliance Setup",
//       ],
//       href: "/services/electrical-work",
//       images: [
//         "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
//         "https://images.pexels.com/photos/7641361/pexels-photo-7641361.jpeg",
//         "https://images.pexels.com/photos/7285975/pexels-photo-7285975.jpeg",
//         "https://images.pexels.com/photos/9242278/pexels-photo-9242278.jpeg",
//         "https://images.pexels.com/photos/5090652/pexels-photo-5090652.jpeg",
//       ],
//     },
//     {
//       icon: <Sofa className="text-red-600" size={48} />,
//       title: "Furniture Work",
//       description:
//         "Expert carpentry services for furniture, fittings, and custom wooden work.",
//       features: [
//         "Furniture Assembly",
//         "Wood Repairs",
//         "Custom Furniture",
//         "Door & Window Fixes",
//       ],
//       href: "/services/furniture-work",
//       images: [
//         "https://images.pexels.com/photos/313776/pexels-photo-313776.jpeg",
//         "https://images.pexels.com/photos/374861/pexels-photo-374861.jpeg",
//         "https://images.pexels.com/photos/3814513/pexels-photo-3814513.jpeg",
//         "https://images.pexels.com/photos/8829869/pexels-photo-8829869.jpeg",
//         "https://images.pexels.com/photos/8820171/pexels-photo-8820171.jpeg",
//       ],
//     },
//     {
//       icon: <Home className="text-teal-600" size={48} />,
//       title: "False Ceiling",
//       description:
//         "Modern false ceiling installation with various designs and lighting options.",
//       features: [
//         "Gypsum Board Ceiling",
//         "POP Ceiling",
//         "Wooden Ceiling",
//         "LED Integration",
//       ],
//       href: "/services/false-ceiling",
//       images: [
//         "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
//         "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
//         "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
//         "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg",
//         "https://images.pexels.com/photos/6908502/pexels-photo-6908502.jpeg",
//       ],
//     },
//   ];

//   return (
//     <section id="services" className="py-6 lg:py-7 bg-gray-50">
//       <div className="max-w-8xl mx-auto px-4 lg:px-8">
//         <div className="text-center mb-6 lg:mb-8">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
//             Our Services
//           </h2>
//           <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
//             From painting to plumbing, we provide reliable home services.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {services.map((service, index) => (
//             <ServiceCard key={index} service={service} />
//           ))}
//         </div>

//         <div className="text-center mt-8">
//           <Link
//             href="/services"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-md text-sm lg:text-base font-semibold transition-colors inline-flex items-center space-x-2"
//           >
//             <span>View All Services</span>
//             <ArrowRight size={16} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



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
    <div className="flex flex-col items-center text-center py-2 bg-white rounded-lg shadow-lg">
      <img
        src={service.images[0]}
        alt={service.title}
        className="w-20 h-20 object-cover rounded-md mb-2"
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
