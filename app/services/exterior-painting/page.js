// import Link from "next/link";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { CheckCircle, Paintbrush, Shield, Clock, Star, Sun } from "lucide-react";

// export const metadata = {
//   title: "Professional Exterior Painting Services | Weather-Resistant Finishes",
//   description: "Expert exterior painting services including house facades, decks, fences, and weather-resistant coatings. Licensed painters with quality guarantee.",
//   keywords: "exterior painting services, outdoor painting, house painting, deck painting, fence painting, weather-resistant paint, home services, professional painters, color consultation, surface preparation, bharath painters",
//   openGraph: {
//     title: "Professional Exterior Painting Services - Transform Your Home's Exterior",
//     description: "Transform your homes exterior with our expert painting services. Weather-resistant finishes with quality guarantee.",
//   },
// };

// export default function ExteriorPainting() {
//   const paintingServices = [
//     {
//       title: "House Exterior",
//       description: "Complete exterior painting solutions for your home's facade and surfaces.",
//       features: [
//         "House facade painting",
//         "Trim & soffit painting",
//         "Garage door painting",
//         "Exterior door painting",
//         "Siding preparation & painting",
//         "Color matching & consultation"
//       ]
//     },
//     {
//       title: "Outdoor Structures",
//       description: "Expert painting for decks, fences, and other outdoor structures.",
//       features: [
//         "Deck staining & painting",
//         "Fence painting & staining",
//         "Pergola & gazebo painting",
//         "Shed & outbuilding painting",
//         "Concrete surface painting",
//         "Patio & porch painting"
//       ]
//     },
//     {
//       title: "Specialty Coatings",
//       description: "Weather-resistant and protective coatings for exterior surfaces.",
//       features: [
//         "Weather-resistant coatings",
//         "UV-resistant finishes",
//         "Waterproofing treatments",
//         "Anti-mold & mildew solutions",
//         "Heat-reflective paints",
//         "Eco-friendly paint options"
//       ]
//     }
//   ];

//   const process = [
//     {
//       step: "1",
//       title: "Free Consultation",
//       description: "We assess your exterior surfaces, discuss color options, and provide a detailed estimate."
//     },
//     {
//       step: "2",
//       title: "Surface Preparation",
//       description: "Thorough cleaning, pressure washing, scraping, sanding, and priming for optimal paint adhesion."
//     },
//     {
//       step: "3",
//       title: "Professional Painting",
//       description: "Expert application using premium weather-resistant paints and proven techniques."
//     },
//     {
//       step: "4",
//       title: "Final Inspection",
//       description: "Quality check and cleanup to ensure your complete satisfaction with every detail."
//     }
//   ];

//   const benefits = [
//     {
//       icon: <Shield size={32} />,
//       title: "Weather-Resistant Materials",
//       description: "We use only high-quality paints and materials designed to withstand harsh weather conditions."
//     },
//     {
//       icon: <Sun size={32} />,
//       title: "UV Protection",
//       description: "Our exterior paints provide excellent UV protection to prevent fading and deterioration."
//     },
//     {
//       icon: <Clock size={32} />,
//       title: "Long-Lasting Results",
//       description: "Our professional application ensures your exterior paint job lasts for years to come."
//     },
//     {
//       icon: <Star size={32} />,
//       title: "Satisfaction Guarantee",
//       description: "100% satisfaction guarantee on all exterior painting projects."
//     }
//   ];

//   return (
//     <>
//       <Navigation />

//       {/* Hero Section */}
//       <section className="pt-24 pb-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-6">
//             Professional Exterior Painting Services
//           </h1>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//             Transform your home's exterior with our expert painting services. We deliver beautiful,
//             weather-resistant finishes that protect and enhance your property's appearance.
//           </p>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Exterior Painting Services</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {paintingServices.map((service, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-3">{service.title}</h3>
//                   <p className="text-gray-600 mb-4">{service.description}</p>
//                   <ul className="space-y-2">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Painting Process</h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {process.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
//                   {step.step}
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{step.title}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Exterior Painting Services</h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-blue-600 mx-auto mb-4">
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-blue-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Home's Exterior?</h2>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
//             Contact us today for a free consultation and estimate on your exterior painting project.
//           </p>
//           <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
//             Get a Free Quote
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  CheckCircle,
  Droplet,
  Home,
  Paintbrush,
  Shield,
} from "lucide-react";

export const metadata = {
  title: "Professional Exterior Painting Services | Weather-Resistant Finishes",
  description:
    "Transform your home's exterior with our expert painting services. Weather-resistant finishes with quality guarantee.",
  keywords:
    "exterior painting, house painting, wall painting, outdoor painting, weatherproof painting, protective coating, home painting services, bharath painters",
  openGraph: {
    title:
      "Professional Exterior Painting Services - Transform Your Home's Exterior",
    description:
      "Enhance your home's beauty and durability with our professional exterior painting services. Weather-resistant, long-lasting finishes.",
  },
};

export default function ExteriorPainting() {
  const services = [
    {
      title: "Complete Exterior Painting",
      description:
        "Protect and beautify your home's exterior with high-quality paints designed to withstand harsh weather conditions.",
      features: [
        "Full house exterior painting",
        "Premium weatherproof paints",
        "Crack filling & surface preparation",
        "Moisture & mold resistance",
        "Long-lasting protection",
        "Color consultation",
      ],
    },
    {
      title: "Protective Coatings",
      description:
        "Advanced protective coatings to safeguard your property against water, dust, and UV rays.",
      features: [
        "Water-repellent coatings",
        "UV protection finishes",
        "Anti-dust solutions",
        "Thermal reflective paints",
        "Eco-friendly products",
        "Durability guarantee",
      ],
    },
    {
      title: "Maintenance & Repainting",
      description:
        "Keep your property looking new with periodic maintenance and repainting services.",
      features: [
        "Surface cleaning & touch-ups",
        "Fading & peeling repair",
        "Protective recoating",
        "Crack repair solutions",
        "Customized repainting plans",
        "Affordable maintenance packages",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Paintbrush size={32} className="text-blue-600 mx-auto mb-4" />,
      title: "Premium Finishes",
      description:
        "We use top-quality paints for smooth, durable, and beautiful finishes.",
    },
    {
      icon: <Shield size={32} className="text-blue-600 mx-auto mb-4" />,
      title: "Weather Protection",
      description:
        "Our exterior solutions protect your home from rain, heat, and dust.",
    },
    {
      icon: <Droplet size={32} className="text-blue-600 mx-auto mb-4" />,
      title: "Moisture Resistance",
      description:
        "Specialized coatings prevent dampness, seepage, and mold growth.",
    },
    {
      icon: <Home size={32} className="text-blue-600 mx-auto mb-4" />,
      title: "Enhanced Curb Appeal",
      description:
        "Transform your home's appearance with vibrant, lasting colors.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-6 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional Exterior Painting Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-2">
            Transform and protect your home's exterior with our expert painting
            services. Long-lasting finishes that withstand every season.
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

      {/* Services Section */}
      <section className="pt-6 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Our Exterior Painting Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-8 pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Why Choose Our Exterior Painting
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-4">
                {benefit.icon}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-8 pb-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Home’s Exterior?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Contact us today for a free consultation and professional exterior
            painting services tailored to your home.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
