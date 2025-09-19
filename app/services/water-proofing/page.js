import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Droplet, Shield, Clock, Star, Home } from "lucide-react";

export const metadata = {
  title: "Professional Waterproofing Services | Leak Prevention Solutions",
  description: "Expert waterproofing services for roofs, basements, bathrooms, and exterior walls. Prevent water damage with our professional solutions.",
  keywords: "waterproofing services, leak prevention, roof waterproofing, basement waterproofing, bathroom waterproofing, exterior wall waterproofing, water damage prevention, home services, professional waterproofing, bharath painters",
  openGraph: {
    title: "Professional Waterproofing Services - Protect Your Home From Water Damage",
    description: "Protect your property with our expert waterproofing solutions. Prevent leaks and water damage with quality materials and professional application.",
  },
};

export default function WaterProofing() {
  const waterproofingServices = [
    {
      title: "Roof Waterproofing",
      description: "Complete waterproofing solutions for all types of roofs to prevent leaks and water damage.",
      features: [
        "Terrace waterproofing",
        "Sloped roof treatment",
        "Roof joint sealing",
        "Parapet wall waterproofing",
        "Chimney & vent sealing",
        "Preventive maintenance"
      ]
    },
    {
      title: "Interior Waterproofing",
      description: "Specialized waterproofing for bathrooms, kitchens, and other moisture-prone areas.",
      features: [
        "Bathroom waterproofing",
        "Kitchen moisture protection",
        "Basement waterproofing",
        "Wall dampness treatment",
        "Floor waterproofing",
        "Ceiling leak prevention"
      ]
    },
    {
      title: "Exterior Solutions",
      description: "Comprehensive exterior waterproofing to protect your property from environmental moisture.",
      features: [
        "External wall waterproofing",
        "Foundation waterproofing",
        "Balcony & terrace treatment",
        "Expansion joint sealing",
        "Crack injection & repair",
        "Drainage improvement"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Inspection & Assessment",
      description: "We thoroughly inspect problem areas, identify moisture sources, and develop a customized solution."
    },
    {
      step: "2", 
      title: "Surface Preparation",
      description: "Cleaning, repairing cracks, removing old coatings, and preparing surfaces for waterproofing application."
    },
    {
      step: "3",
      title: "Waterproofing Application",
      description: "Expert application of premium waterproofing materials using industry-best techniques."
    },
    {
      step: "4",
      title: "Testing & Verification",
      description: "Water testing and quality checks to ensure complete waterproofing and leak prevention."
    }
  ];

  const benefits = [
    {
      icon: <Shield size={32} />,
      title: "Long-Term Protection",
      description: "Our waterproofing solutions provide years of protection against water damage and leaks."
    },
    {
      icon: <Home size={32} />,
      title: "Property Value Preservation",
      description: "Prevent costly structural damage and maintain your property's value with proper waterproofing."
    },
    {
      icon: <Droplet size={32} />,
      title: "Moisture & Mold Prevention",
      description: "Effective waterproofing prevents mold growth and improves indoor air quality."
    },
    {
      icon: <Star size={32} />,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee on all our waterproofing projects."
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-400 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Professional Waterproofing Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Protect your property from water damage with our expert waterproofing solutions. 
            We provide comprehensive waterproofing services for roofs, basements, bathrooms, and exterior walls.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Waterproofing Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {waterproofingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Waterproofing Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Waterproofing Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Property?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Contact us today for a free consultation and estimate on your waterproofing project.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}