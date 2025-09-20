import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Trees,
  Shield,
  Clock,
  Star,
  Brush,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Professional Wood Finishing Services | Premium Staining & Varnishing",
  description:
    "Expert wood finishing services including staining, varnishing, polishing, and restoration. Transform your wooden surfaces with our professional solutions.",
  keywords:
    "wood finishing, wood staining, varnishing, wood polishing, furniture restoration, deck staining, cabinet refinishing, home services, professional wood finishes, bharath painters",
  openGraph: {
    title:
      "Professional Wood Finishing Services - Transform Your Wooden Surfaces",
    description:
      "Transform your wooden surfaces with our expert wood finishing services. Premium staining, varnishing, and restoration solutions.",
  },
};

export default function WoodFinishes() {
  const woodServices = [
    {
      title: "Wood Staining & Coloring",
      description:
        "Expert wood staining services to enhance the natural beauty of your wooden surfaces.",
      features: [
        "Custom color matching",
        "Water-based & oil-based stains",
        "Transparent & semi-transparent stains",
        "Solid color stains",
        "Specialty wood toners",
        "Eco-friendly staining options",
      ],
    },
    {
      title: "Varnishing & Sealing",
      description:
        "Professional varnishing and sealing to protect and beautify your wooden elements.",
      features: [
        "Polyurethane application",
        "Lacquer finishing",
        "Shellac treatments",
        "Oil-rubbed finishes",
        "Water-resistant sealants",
        "UV-protective coatings",
      ],
    },
    {
      title: "Restoration & Refinishing",
      description:
        "Comprehensive restoration services to bring new life to worn or damaged wood.",
      features: [
        "Furniture refinishing",
        "Cabinet restoration",
        "Deck & fence renewal",
        "Hardwood floor refinishing",
        "Antique wood restoration",
        "Scratch & damage repair",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & Assessment",
      description:
        "We evaluate your wooden surfaces, discuss finish options, and recommend the best approach.",
    },
    {
      step: "2",
      title: "Surface Preparation",
      description:
        "Thorough cleaning, sanding, and preparation to ensure optimal finish adhesion and appearance.",
    },
    {
      step: "3",
      title: "Staining & Finishing",
      description:
        "Expert application of stains, varnishes, or other finishes using professional techniques.",
    },
    {
      step: "4",
      title: "Protection & Curing",
      description:
        "Final protective coatings and proper curing time to ensure a beautiful, long-lasting finish.",
    },
  ];

  const benefits = [
    {
      icon: <Shield size={32} />,
      title: "Enhanced Protection",
      description:
        "Our wood finishes protect against moisture, UV damage, wear, and daily use.",
    },
    {
      icon: <Trees size={32} />,
      title: "Natural Beauty",
      description:
        "We enhance the natural grain and character of your wood while adding rich color.",
    },
    {
      icon: <Brush size={32} />,
      title: "Expert Application",
      description:
        "Our skilled craftsmen ensure flawless application for beautiful, consistent results.",
    },
    {
      icon: <Star size={32} />,
      title: "Satisfaction Guarantee",
      description:
        "100% satisfaction guarantee on all our wood finishing projects.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-6 bg-gradient-to-br from-amber-700 to-amber-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            Professional Wood Finishing Services
          </h1>
          <p className="text-md sm:text-lg text-amber-100 max-w-3xl mx-auto">
            Transform your wooden surfaces with our expert wood finishing
            solutions. We provide premium staining, varnishing, and restoration
            services to enhance and protect your wood.
          </p>
          <div className="flex  gap-3 items-center justify-center flex-col sm:flex-row mt-2">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-0 py-2 rounded-lg font-semibold transition-all duration-300 text-center w-52 "
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="bg-blue-700 text-white hover:bg-blue-800 px-0 py-2 rounded-lg font-semibold transition-all duration-300 text-center w-52"
            >
              <div className="flex items-center justify-center gap-2">
                <ArrowLeft /> Back
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-6 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Wood Finishing Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {woodServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="px-3 py-4">
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
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Wood Finishing Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Wood Finishing Services
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-amber-700 mx-auto mb-4 flex justify-center">
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
      <section className="py-6 bg-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Ready to Transform Your Wooden Surfaces?
          </h2>
          <p className="text-md sm:text-lg text-amber-100 max-w-3xl mx-auto mb-4">
            Contact us today for a free consultation and estimate on your wood
            finishing project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-700 font-bold py-3 px-8 rounded-lg hover:bg-amber-50 transition duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
