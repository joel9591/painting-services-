import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Paintbrush, 
  Sparkles, 
  Wrench, 
  Zap, 
  Sofa, 
  Home,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const metadata = {
  title: 'Professional Home Services | Painting, Plumbing, Cleaning & More',
  description: 'Comprehensive home services including house painting, deep cleaning, plumbing, electrical work, furniture repair, and false ceiling installation. Licensed professionals, quality guaranteed.',
  keywords: 'home services, house painting services, plumbing services, electrical work, deep cleaning services, furniture repair, false ceiling installation, home improvement',
  openGraph: {
    title: 'Professional Home Services - Quality Home Improvement Solutions',
    description: 'Expert home services including painting, plumbing, electrical, cleaning, and more. Licensed professionals with quality guarantee.',
  },
};

export default function Services() {
  const services = [
    {
      icon: <Paintbrush className="text-blue-600" size={48} />,
      title: "House Painting",
      description: "Transform your home with our professional interior and exterior painting services. We use premium quality paints and deliver flawless finishes.",
      features: [
        "Interior & Exterior Painting",
        "Color Consultation & Design",
        "Wall Preparation & Repair",
        "Texture & Specialty Finishes",
        "Cabinet & Trim Painting",
        "Wallpaper Removal"
      ],
      href: "/services/house-painting",
      image: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      startingPrice: "₹299"
    },
    {
      icon: <Sparkles className="text-purple-600" size={48} />,
      title: "Deep Cleaning",
      description: "Comprehensive deep cleaning services for homes and offices. We clean every corner with attention to detail and eco-friendly products.",
      features: [
        "Deep House Cleaning",
        "Post-Construction Cleanup",
        "Move-in/Move-out Cleaning",
        "Regular Maintenance Cleaning",
        "Carpet & Upholstery Cleaning",
        "Window Cleaning"
      ],
      href: "/services/deep-cleaning",
      image: "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      startingPrice: "₹149"
    },
    {
      icon: <Wrench className="text-green-600" size={48} />,
      title: "Plumbing Services",
      description: "Expert plumbing repairs, installations, and maintenance. Our licensed plumbers handle everything from leaks to complete system installations.",
      features: [
        "Leak Detection & Repair",
        "Pipe Installation & Repair",
        "Fixture Installation",
        "Drain Cleaning & Unclogging",
        "Water Heater Services",
        "Emergency Plumbing"
      ],
      href: "/services/plumbing",
      image: "https://images.pexels.com/photos/8293660/pexels-photo-8293660.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      startingPrice: "₹89"
    },
    {
      icon: <Zap className="text-yellow-600" size={48} />,
      title: "Electrical Work",
      description: "Licensed electrical services including wiring, repairs, installations, and safety inspections. All work meets local codes and safety standards.",
      features: [
        "Wiring & Rewiring",
        "Outlet & Switch Installation",
        "Lighting Solutions",
        "Circuit Breaker Services",
        "Safety Inspections",
        "Emergency Electrical"
      ],
      href: "/services/electrical-work",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      startingPrice: "₹99"
    },
    {
      icon: <Sofa className="text-orange-600" size={48} />,
      title: "Furniture Work",
      description: "Expert furniture repair, restoration, and custom assembly services. Our skilled craftsmen bring new life to your furniture pieces.",
      features: [
        "Furniture Repair & Restoration",
        "Custom Assembly Services",
        "Upholstery & Reupholstery",
        "Wood Refinishing",
        "Cabinet Installation",
        "Custom Carpentry"
      ],
      href: "/services/furniture-work",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      startingPrice: "₹79"
    },
    {
      icon: <Home className="text-teal-600" size={48} />,
      title: "False Ceiling",
      description: "Modern false ceiling installation with various designs and lighting integration. Transform your space with our expert craftsmanship.",
      features: [
        "Gypsum Board Ceiling",
        "POP Ceiling Design",
        "Wooden Ceiling Installation",
        "LED Lighting Integration",
        "Acoustic Ceiling Solutions",
        "Custom Designs"
      ],
      href: "/services/false-ceiling",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      startingPrice: "₹199"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Professional Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From painting to plumbing, we provide comprehensive home services with unmatched quality, 
            reliability, and customer satisfaction. All our work is guaranteed and performed by licensed professionals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="bg-white p-2 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="text-white">
                      <p className="text-sm">Starting at</p>
                      <p className="text-xl font-bold">{service.startingPrice}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What We Offer:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="text-green-500 flex-shrink-0 mr-2" size={16} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={service.href}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional results on every project, big or small.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-600">
                All our professionals are fully licensed, bonded, and insured for your complete peace of mind.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality Guarantee
              </h3>
              <p className="text-gray-600">
                We stand behind our work with a 100% satisfaction guarantee and comprehensive warranties.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Transparent Pricing
              </h3>
              <p className="text-gray-600">
                Fair, upfront pricing with detailed estimates and no hidden fees or surprise costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free estimate and consultation. We're here to help transform your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+1234567890"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Call (234) 567-8900
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}