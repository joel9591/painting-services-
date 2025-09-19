import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Zap, Shield, Clock, Star } from "lucide-react";

export const metadata = {
  title: "Professional Electrical Services | Bharath Painters",
  description: "Expert electrical services including wiring, repairs, installations, and safety inspections by licensed electricians.",
  keywords: "electrical services, wiring, electrical repairs, outlet installation, lighting solutions, safety inspections, licensed electricians, home services, house painting, plumbing, electrical work, deep cleaning, furniture work, false ceiling, home improvement, professional services, renovation, house renovate, house renovation, bharath, painters, paintings, bharath painters",
  openGraph: {
    title: "Professional Electrical Services - Bharath Painters",
    description: "Safe and reliable electrical solutions for your home. Expert installations, repairs, and maintenance with quality guarantee.",
  },
};

export default function ElectricalWork() {
  const electricalServices = [
    {
      title: "Electrical Repairs",
      description: "Fast and reliable solutions for all your electrical issues.",
      features: [
        "Circuit troubleshooting",
        "Outlet & switch repair",
        "Lighting fixture repair",
        "Circuit breaker replacement",
        "Electrical panel repair",
        "Surge protection"
      ]
    },
    {
      title: "Electrical Installations",
      description: "Professional installation of electrical systems and fixtures.",
      features: [
        "New wiring installation",
        "Outlet & switch installation",
        "Lighting installation",
        "Ceiling fan installation",
        "Electrical panel upgrades",
        "Smart home wiring"
      ]
    },
    {
      title: "Safety & Maintenance",
      description: "Preventive services to keep your electrical system safe and efficient.",
      features: [
        "Electrical safety inspections",
        "Code compliance checks",
        "Preventive maintenance",
        "Surge protection systems",
        "Electrical system upgrades",
        "Energy efficiency solutions"
      ]
    }
  ];

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-yellow-700 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900 to-yellow-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block p-2 bg-yellow-600 rounded-lg mb-5">
                <Zap size={32} className="text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Professional Electrical Services
              </h1>
              <p className="text-xl text-yellow-100 mb-8">
                Safe and reliable electrical solutions for your home or business. 
                From repairs to installations, our licensed electricians deliver quality service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-yellow-700 hover:bg-yellow-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
                >
                  Get a Free Quotation
                </Link>
                <Link
                  href="#services"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 mr-1" size={20} fill="currentColor" />
                  <Star className="text-yellow-400 mr-1" size={20} fill="currentColor" />
                  <Star className="text-yellow-400 mr-1" size={20} fill="currentColor" />
                  <Star className="text-yellow-400 mr-1" size={20} fill="currentColor" />
                  <Star className="text-yellow-400 mr-1" size={20} fill="currentColor" />
                  <span className="ml-2 text-white font-medium">5.0 (150+ Reviews)</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Why Choose Our Electrical Services?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Licensed & certified electricians</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Safety-first approach to all work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Code-compliant installations & repairs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Transparent pricing with detailed Quotation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Electrical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive electrical solutions for residential and commercial properties, ensuring safety and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {electricalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Electrical Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure safe and effective electrical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">We thoroughly inspect your electrical system to identify issues and needs.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">We develop a detailed plan that addresses your electrical needs safely and efficiently.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">Our certified electricians implement the solution with precision and care.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verification</h3>
              <p className="text-gray-600">We thoroughly test all work to ensure safety, functionality, and code compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our electrical services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do I know if my home needs rewiring?</h3>
              <p className="text-gray-600">Signs that your home may need rewiring include frequent circuit breaker trips, flickering lights, burning smells, discolored outlets, or if your home is over 30 years old with original wiring.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Are your electricians licensed and insured?</h3>
              <p className="text-gray-600">Yes, all our electricians are fully licensed, insured, and certified. They undergo regular training to stay updated with the latest electrical codes and safety standards.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does a typical electrical job take?</h3>
              <p className="text-gray-600">The duration depends on the complexity of the job. Simple repairs might take 1-2 hours, while installations or rewiring projects can take several days. We always provide a time estimate before starting work.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer emergency electrical services?</h3>
              <p className="text-gray-600">Yes, we provide 24/7 emergency electrical services for urgent issues like power outages, sparking outlets, or burning smells. Our electricians are ready to respond quickly to ensure your safety.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Schedule an Electrical Service</span>
              <Shield size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}