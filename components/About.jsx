'use client';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Users size={32} />, number: "500+", label: "Happy Customers" },
    { icon: <Award size={32} />, number: "10+", label: "Years Experience" },
    { icon: <CheckCircle size={32} />, number: "1000+", label: "Projects Completed" },
    { icon: <Clock size={32} />, number: "24/7", label: "Customer Support" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About ProHome Services
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 10 years of experience in the home services industry, we've built our reputation on 
              delivering exceptional quality and customer satisfaction. Our team of licensed professionals 
              is committed to transforming your home with reliable, efficient, and affordable services.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From small repairs to complete home renovations, we handle every project with the same level 
              of care and attention to detail. We use only the finest materials and latest techniques to 
              ensure lasting results that exceed your expectations.
            </p>
            
            <div className="space-y-4">
              {[
                "Licensed & Insured Professionals",
                "Free Estimates & Consultations",
                "100% Satisfaction Guarantee",
                "Eco-Friendly Materials Available",
                "Emergency Services Available"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5691600/pexels-photo-5691600.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
              alt="Professional team at work"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">10+ Years</p>
              <p className="text-sm">of Excellence</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}