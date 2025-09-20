import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Layers,
  Shield,
  Clock,
  Star,
  Palette,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Professional Texture Painting Services | Decorative Wall Finishes",
  description:
    "Expert texture painting services including decorative finishes, textured walls, and specialty coatings. Transform your spaces with our professional solutions.",
  keywords:
    "texture painting, textured walls, decorative finishes, wall textures, specialty coatings, stucco finish, sand finish, popcorn texture, knockdown texture, home services, professional painters, bharath painters",
  openGraph: {
    title: "Professional Texture Painting Services - Transform Your Walls",
    description:
      "Transform your spaces with our expert texture painting services. Professional decorative finishes and textured wall solutions.",
  },
};

export default function Texture() {
  const textureServices = [
    {
      title: "Decorative Textures",
      description:
        "Beautiful decorative wall textures to add dimension and style to your spaces.",
      features: [
        "Venetian plaster finishes",
        "Stucco textures",
        "Suede & leather looks",
        "Metallic finishes",
        "Dimensional patterns",
        "Custom texture designs",
      ],
    },
    {
      title: "Functional Textures",
      description:
        "Practical textured finishes that hide imperfections and add durability to walls.",
      features: [
        "Orange peel texture",
        "Knockdown texture",
        "Sand & popcorn finishes",
        "Spray textures",
        "Skip trowel finishes",
        "Textured ceiling solutions",
      ],
    },
    {
      title: "Specialty Applications",
      description:
        "Expert application of specialty textures and artistic finishes for unique spaces.",
      features: [
        "Accent wall textures",
        "Relief & 3D textures",
        "Textured borders & details",
        "Color washing & glazing",
        "Distressed finishes",
        "Concrete & stone effects",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & Design",
      description:
        "We discuss your vision, show texture samples, and help you select the perfect finish for your space.",
    },
    {
      step: "2",
      title: "Surface Preparation",
      description:
        "Thorough cleaning, repairing, and priming of surfaces to ensure proper texture adhesion.",
    },
    {
      step: "3",
      title: "Texture Application",
      description:
        "Expert application of your chosen texture using professional techniques and quality materials.",
    },
    {
      step: "4",
      title: "Finishing & Sealing",
      description:
        "Final color application, sealing, and protection to ensure a beautiful, long-lasting textured finish.",
    },
  ];

  const benefits = [
    {
      icon: <Shield size={32} />,
      title: "Hide Imperfections",
      description:
        "Textured finishes effectively conceal wall imperfections and surface irregularities.",
    },
    {
      icon: <Palette size={32} />,
      title: "Unique Aesthetics",
      description:
        "Add visual interest and dimension to your spaces with custom textured finishes.",
    },
    {
      icon: <Layers size={32} />,
      title: "Enhanced Durability",
      description:
        "Many textured finishes provide increased durability and resistance to wear and tear.",
    },
    {
      icon: <Star size={32} />,
      title: "Satisfaction Guarantee",
      description:
        "100% satisfaction guarantee on all our texture painting projects.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-6 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-center">
            Professional Texture Painting Services
          </h1>
          <p className="text-md sm:text-lg text-blue-100 mb-6 text-center">
            Transform your spaces with our expert texture painting solutions. We
            provide beautiful decorative finishes and textured wall treatments
            to add dimension and style to your home.
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
      <section className="pt-6 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Texture Painting Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {textureServices.map((service, index) => (
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
            Our Texture Painting Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Choose Our Texture Painting Services
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-purple-600 mx-auto mb-4">
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
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Walls?
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
            Contact us today for a free consultation and estimate on your
            texture painting project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-purple-50 transition duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
