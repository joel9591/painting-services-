import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Paintbrush,
  Shield,
  Clock,
  Star,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Professional Interior Painting Services | Premium Quality Finishes",
  description:
    "Expert interior painting services including living rooms, bedrooms, kitchens, bathrooms, and specialty finishes. Licensed painters with quality guarantee.",
  keywords:
    "interior painting services, indoor painting, wall painting, ceiling painting, trim painting, cabinet painting, home services, professional painters, color consultation, wall preparation, bharath painters",
  openGraph: {
    title:
      "Professional Interior Painting Services - Transform Your Indoor Spaces",
    description:
      "Transform your indoor spaces with our expert interior painting services. Premium finishes with quality guarantee.",
  },
};

export default function InteriorPainting() {
  const paintingServices = [
    {
      title: "Living Spaces",
      description:
        "Transform your living rooms, bedrooms, and hallways with premium interior painting.",
      features: [
        "Living room & family room painting",
        "Bedroom & guest room painting",
        "Hallway & stairwell painting",
        "Ceiling painting",
        "Trim & baseboard painting",
        "Color matching & consultation",
      ],
    },
    {
      title: "Kitchen & Bathrooms",
      description:
        "Specialized painting for moisture-prone areas with durable, washable finishes.",
      features: [
        "Kitchen wall painting",
        "Bathroom painting",
        "Cabinet refinishing",
        "Moisture-resistant paints",
        "Mold & mildew resistant coatings",
        "Easy-clean finishes",
      ],
    },
    {
      title: "Specialty Services",
      description:
        "Expert techniques for unique interior painting projects and finishes.",
      features: [
        "Accent walls",
        "Faux finishes",
        "Textured painting",
        "Drywall repair",
        "Color consultation",
        "Eco-friendly paint options",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Free Consultation",
      description:
        "We assess your interior spaces, discuss color options, and provide a detailed estimate.",
    },
    {
      step: "2",
      title: "Surface Preparation",
      description:
        "Thorough cleaning, sanding, priming, and repair work for the best results.",
    },
    {
      step: "3",
      title: "Professional Painting",
      description:
        "Expert application using premium paints and proven techniques for flawless finishes.",
    },
    {
      step: "4",
      title: "Final Inspection",
      description:
        "Quality check and cleanup to ensure your complete satisfaction with every detail.",
    },
  ];

  const benefits = [
    {
      icon: <Shield size={32} />,
      title: "Premium Materials",
      description:
        "We use only high-quality paints and materials for lasting, beautiful results.",
    },
    {
      icon: <Clock size={32} />,
      title: "Efficient Service",
      description:
        "Projects completed on schedule with minimal disruption to your daily life.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Meticulous Cleanup",
      description:
        "Professional job site management and thorough cleanup after completion.",
    },
    {
      icon: <Star size={32} />,
      title: "Satisfaction Guarantee",
      description:
        "100% satisfaction guarantee on all interior painting projects.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-6 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto space-y-6"> 
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3 text-center">
              Professional Interior Painting Services
            </h1>
            <p className="text-md sm:text-lg text-blue-100 mb-4 text-center">
              Transform your indoor spaces with our expert interior painting
              services. From color consultation to final touches, we deliver
              exceptional results that last.
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
                   <ArrowLeft/> Back
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="services" className="pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Our Interior Painting Services
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
              From single room touch-ups to complete home makeovers, we provide
              comprehensive interior painting services for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {paintingServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex mb-4 gap-2">
                  <div className="text-blue-600 ">
                    <Paintbrush size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mr-3"
                        size={16}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="pt-6 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
              Our Interior Painting Process
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure exceptional results for every
              interior painting project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pt-8 mb-4 sm:mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Why Choose Our Interior Painting Services
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional quality, reliability, and customer
              satisfaction with every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-2 md:p-4 lg:p-6 py-4 rounded-xl"
              >
                <div className="text-blue-600 flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Ready to Transform Your Indoor Spaces?
          </h2>
          <p className="text-md sm:text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote. Our expert team
            is ready to bring your vision to life.
          </p>
          <Link
            href="#contact"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
