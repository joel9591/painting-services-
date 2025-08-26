'use client';
import Link from 'next/link';
import { 
  Paintbrush, 
  Sparkles, 
  Wrench, 
  Zap, 
  Sofa, 
  Home,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Paintbrush className="text-blue-600" size={48} />,
      title: "House Painting",
      description: "Interior and exterior painting with premium quality paints and professional finishes.",
      features: ["Interior Painting", "Exterior Painting", "Color Consultation", "Wall Preparation"],
      href: "/services/house-painting",
      image: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
    },
    {
      icon: <Sparkles className="text-purple-600" size={48} />,
      title: "Deep Cleaning",
      description: "Comprehensive deep cleaning services for homes, offices, and commercial spaces.",
      features: ["Deep House Cleaning", "Post-Construction Cleanup", "Move-in/Move-out", "Regular Maintenance"],
      href: "/services/deep-cleaning",
      image: "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
    },
    {
      icon: <Wrench className="text-green-600" size={48} />,
      title: "Plumbing",
      description: "Expert plumbing repairs, installations, and maintenance for residential properties.",
      features: ["Leak Repairs", "Pipe Installation", "Fixture Replacement", "Emergency Service"],
      href: "/services/plumbing",
      image: "https://images.pexels.com/photos/8293660/pexels-photo-8293660.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
    },
    {
      icon: <Zap className="text-yellow-600" size={48} />,
      title: "Electrical Work",
      description: "Licensed electrical services including wiring, repairs, and safety inspections.",
      features: ["Wiring & Rewiring", "Outlet Installation", "Lighting Solutions", "Safety Inspections"],
      href: "/services/electrical-work",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
    },
    {
      icon: <Sofa className="text-orange-600" size={48} />,
      title: "Furniture Work",
      description: "Custom furniture repair, restoration, and assembly services by skilled craftsmen.",
      features: ["Furniture Repair", "Custom Assembly", "Restoration", "Upholstery Work"],
      href: "/services/furniture-work",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
    },
    {
      icon: <Home className="text-teal-600" size={48} />,
      title: "False Ceiling",
      description: "Modern false ceiling installation with various designs and lighting options.",
      features: ["Gypsum Board Ceiling", "POP Ceiling", "Wooden Ceiling", "LED Integration"],
      href: "/services/false-ceiling",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From painting to plumbing, we provide comprehensive home services with unmatched quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                >
                  View Service Details
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2"
          >
            <span>View All Services</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}