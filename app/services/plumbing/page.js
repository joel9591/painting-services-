import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Wrench, Shield, Clock, Star } from "lucide-react";

export const metadata = {
  title: "Professional Plumbing Services | Bharath Painters",
  description: "Expert plumbing services including leak repairs, pipe installation, fixture replacement, and emergency services by licensed professionals.",
  keywords: "plumbing services, leak repairs, pipe installation, fixture replacement, emergency plumbing, licensed plumbers, home services, house painting, plumbing, electrical work, deep cleaning, furniture work, false ceiling, home improvement, professional services, renovation, house renovate, house renovation, bharath, painters, paintings, bharath painters",
  openGraph: {
    title: "Professional Plumbing Services - Bharath Painters",
    description: "Reliable plumbing solutions for your home. Expert repairs, installations, and maintenance with quality guarantee.",
  },
};

export default function Plumbing() {
  const plumbingServices = [
    {
      title: "Repair Services",
      description: "Fast and reliable solutions for all your plumbing issues.",
      features: [
        "Leak detection & repair",
        "Pipe repair & replacement",
        "Drain unclogging",
        "Toilet repair",
        "Faucet repair",
        "Water heater repair"
      ]
    },
    {
      title: "Installation Services",
      description: "Professional installation of plumbing fixtures and systems.",
      features: [
        "Pipe installation",
        "Fixture installation",
        "Water heater installation",
        "Bathroom remodeling",
        "Kitchen plumbing",
        "Sump pump installation"
      ]
    },
    {
      title: "Maintenance Services",
      description: "Preventive maintenance to keep your plumbing system in top condition.",
      features: [
        "Regular inspections",
        "Drain cleaning",
        "Water pressure testing",
        "Pipe insulation",
        "Preventive maintenance",
        "Water quality testing"
      ]
    }
  ];

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-green-700 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8293660/pexels-photo-8293660.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block p-2 bg-green-600 rounded-lg mb-5">
                <Wrench size={32} className="text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Professional Plumbing Services
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Expert plumbing solutions for your home or business. 
                From repairs to installations, our licensed plumbers deliver reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
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
                  <span className="ml-2 text-white font-medium">5.0 (180+ Reviews)</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Why Choose Our Plumbing Services?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Licensed & experienced plumbers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Fast response & emergency services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Quality parts & workmanship guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Transparent pricing with no hidden fees</span>
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
              Our Plumbing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive plumbing solutions for residential and commercial properties, ensuring reliable and long-lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plumbingServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
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
              Our Plumbing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure efficient and effective plumbing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Diagnosis</h3>
              <p className="text-gray-600">We thoroughly inspect your plumbing system to identify the root cause of issues.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-600">We provide a detailed explanation of the problem and recommend the best solution.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">Our skilled plumbers implement the solution using quality parts and tools.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600">We thoroughly test the system to ensure everything works perfectly before we leave.</p>
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
              Find answers to common questions about our plumbing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How quickly can you respond to plumbing emergencies?</h3>
              <p className="text-gray-600">We offer 24/7 emergency plumbing services and typically respond within 1-2 hours for urgent issues like burst pipes or major leaks.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Are your plumbers licensed and insured?</h3>
              <p className="text-gray-600">Yes, all our plumbers are fully licensed, insured, and have undergone extensive training and background checks for your peace of mind.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide warranties on your plumbing work?</h3>
              <p className="text-gray-600">Yes, we offer a comprehensive warranty on all our plumbing services. Parts typically come with manufacturer warranties, and we guarantee our workmanship.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do you determine pricing for plumbing services?</h3>
              <p className="text-gray-600">We provide transparent pricing based on the scope of work, parts required, and labor time. We always provide a detailed estimate before beginning any work.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Schedule a Plumbing Service</span>
              <Shield size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}