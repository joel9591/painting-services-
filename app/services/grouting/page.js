import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Grid,
  Shield,
  Clock,
  Star,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Professional Grouting Services | Tile & Surface Restoration",
  description:
    "Expert grouting services for bathrooms, kitchens, floors, and walls. Restore and protect your tiled surfaces with our professional solutions.",
  keywords:
    "grouting services, tile grouting, grout repair, grout cleaning, grout sealing, bathroom grouting, kitchen grouting, floor grouting, wall grouting, home services, professional grouting, bharath painters",
  openGraph: {
    title: "Professional Grouting Services - Restore Your Tiled Surfaces",
    description:
      "Restore and protect your tiled surfaces with our expert grouting services. Professional solutions for bathrooms, kitchens, floors, and walls.",
  },
};

export default function Grouting() {
  const groutingServices = [
    {
      title: "Bathroom Grouting",
      description:
        "Complete grouting solutions for bathroom tiles, showers, and wet areas.",
      features: [
        "Shower tile grouting",
        "Bathroom floor grouting",
        "Wall tile restoration",
        "Grout cleaning & whitening",
        "Waterproof grouting",
        "Mold-resistant solutions",
      ],
    },
    {
      title: "Kitchen & Living Areas",
      description:
        "Specialized grouting for kitchen backsplashes, countertops, and living space floors.",
      features: [
        "Kitchen backsplash grouting",
        "Countertop grout sealing",
        "Floor tile grouting",
        "Decorative tile restoration",
        "Stain-resistant grouting",
        "Color-matched solutions",
      ],
    },
    {
      title: "Repair & Maintenance",
      description:
        "Expert grout repair and maintenance services to extend the life of your tiled surfaces.",
      features: [
        "Grout crack repair",
        "Grout replacement",
        "Deep cleaning & restoration",
        "Grout sealing & protection",
        "Preventive maintenance",
        "Color restoration",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Inspection & Assessment",
      description:
        "We thoroughly inspect your tiled surfaces, identify problem areas, and recommend the best grouting solution.",
    },
    {
      step: "2",
      title: "Surface Preparation",
      description:
        "Cleaning, removing old grout when necessary, and preparing surfaces for new grout application.",
    },
    {
      step: "3",
      title: "Grouting Application",
      description:
        "Expert application of premium grout materials using professional techniques for consistent results.",
    },
    {
      step: "4",
      title: "Sealing & Finishing",
      description:
        "Applying protective sealants and final cleaning to ensure long-lasting, beautiful results.",
    },
  ];

  const benefits = [
    {
      icon: <Shield size={32} />,
      title: "Enhanced Durability",
      description:
        "Our professional grouting extends the life of your tiled surfaces and prevents water damage.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Improved Appearance",
      description:
        "Fresh, clean grout dramatically improves the look of your entire tiled area.",
    },
    {
      icon: <Grid size={32} />,
      title: "Mold & Mildew Prevention",
      description:
        "Our sealed grout solutions help prevent mold and mildew growth in wet areas.",
    },
    {
      icon: <Star size={32} />,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee on all our grouting projects.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-6 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-center">
            Professional Grouting Services
          </h1>
          <p className="text-md sm:text-lg text-blue-100 mb-2 text-center">
            Restore and protect your tiled surfaces with our expert grouting
            solutions. We provide comprehensive grouting services for bathrooms,
            kitchens, floors, and walls.
          </p>
          <div className="flex  gap-3 items-center justify-center flex-col sm:flex-row">
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
      <section className="pt-6 pb-2 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Grouting Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {groutingServices.map((service, index) => (
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
            Our Grouting Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
            Why Choose Our Grouting Services
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-gray-800 mx-auto mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Restore Your Tiled Surfaces?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Contact us today for a free consultation and estimate on your
            grouting project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
