import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Sparkles,
  Shield,
  Clock,
  Star,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Professional Deep Cleaning Services | Bharath Painters",
  description:
    "Expert deep cleaning services including post-construction cleanup, move-in/move-out cleaning, regular maintenance, and specialized cleaning solutions.",
  keywords:
    "deep cleaning services, house cleaning, post-construction cleanup, move-in cleaning, move-out cleaning, professional cleaning services, home services, house painting, plumbing, electrical work, deep cleaning, furniture work, false ceiling, home improvement, professional services, renovation, house renovate, house renovation, bharath, painters, paintings, bharath painters",
  openGraph: {
    title: "Professional Deep Cleaning Services - Bharath Painters",
    description:
      "Transform your space with our expert deep cleaning services. Comprehensive cleaning solutions with quality guarantee.",
  },
};

export default function DeepCleaning() {
  const cleaningServices = [
    {
      title: "Residential Cleaning",
      description: "Comprehensive cleaning solutions for homes of all sizes.",
      features: [
        "Living areas & bedrooms",
        "Kitchens & bathrooms",
        "Floors & carpets",
        "Windows & blinds",
        "Dusting & sanitizing",
        "Custom cleaning plans",
      ],
    },
    {
      title: "Move-in/Move-out Cleaning",
      description:
        "Start fresh in your new space or leave your old one spotless.",
      features: [
        "Deep cleaning of all rooms",
        "Cabinet & drawer cleaning",
        "Appliance cleaning",
        "Floor scrubbing & polishing",
        "Window & blind cleaning",
        "Baseboards & trim cleaning",
      ],
    },
    {
      title: "Post-Construction Cleanup",
      description:
        "Thorough cleaning after renovation or construction projects.",
      features: [
        "Dust & debris removal",
        "Paint overspray cleaning",
        "Window & glass cleaning",
        "Floor & surface cleaning",
        "Air duct cleaning",
        "Final inspection cleaning",
      ],
    },
  ];

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-blue-700 pt-20 pb-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block p-2 bg-blue-600 rounded-lg mb-2">
                <Sparkles size={32} className="text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-3">
                Professional Deep Cleaning Services
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                Transform your space with our expert deep cleaning services.
                From regular maintenance to specialized cleaning solutions, we
                deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
                >
                  Get a Free Quotation
                </Link>
                <Link
                  href="/services"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center w-48"
                >
                  <div className="flex items-center justify-center gap-2">
                    <ArrowLeft /> Back
                  </div>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="flex items-center mb-4">
                  <Star
                    className="text-yellow-400 mr-1"
                    size={20}
                    fill="currentColor"
                  />
                  <Star
                    className="text-yellow-400 mr-1"
                    size={20}
                    fill="currentColor"
                  />
                  <Star
                    className="text-yellow-400 mr-1"
                    size={20}
                    fill="currentColor"
                  />
                  <Star
                    className="text-yellow-400 mr-1"
                    size={20}
                    fill="currentColor"
                  />
                  <Star
                    className="text-yellow-400 mr-1"
                    size={20}
                    fill="currentColor"
                  />
                  <span className="ml-2 text-white font-medium">
                    5.0 (250+ Reviews)
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Why Choose Our Cleaning Services?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-400 mr-2 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Experienced & professional cleaning technicians</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-400 mr-2 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>Eco-friendly cleaning products & solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-400 mr-2 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>
                      Comprehensive cleaning checklists for consistency
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-400 mr-2 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>100% satisfaction guarantee on all services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Our Deep Cleaning Services
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive cleaning solutions tailored to your
              specific needs, ensuring a spotless and healthy environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cleaningServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl px-3 py-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={18}
                      />
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
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Our Cleaning Process
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure thorough cleaning and
              customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Assessment
              </h3>
              <p className="text-gray-600">
                We evaluate your space and discuss your specific cleaning needs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">
                We create a customized cleaning plan tailored to your
                requirements.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Execution
              </h3>
              <p className="text-gray-600">
                Our professional team performs thorough cleaning using quality
                products.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Inspection
              </h3>
              <p className="text-gray-600">
                We conduct a final walkthrough to ensure everything meets our
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our deep cleaning services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does a typical deep cleaning take?
              </h3>
              <p className="text-gray-600">
                The duration depends on the size of your space and the level of
                cleaning required. A standard home deep cleaning typically takes
                4-8 hours with our professional team.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I need to provide cleaning supplies?
              </h3>
              <p className="text-gray-600">
                No, we bring all necessary cleaning supplies and equipment. We
                use eco-friendly products that are effective yet safe for your
                family and pets.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How often should I schedule deep cleaning?
              </h3>
              <p className="text-gray-600">
                For most homes, we recommend deep cleaning every 3-6 months, in
                addition to regular maintenance cleaning. High-traffic
                commercial spaces may require more frequent deep cleaning.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is your cleaning service insured?
              </h3>
              <p className="text-gray-600">
                Yes, our cleaning service is fully insured. This provides
                protection for both our team and your property during the
                cleaning process.
              </p>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Get a Free Quotation Today</span>
              <Shield size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
