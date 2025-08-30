import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Award, Users, Clock, Shield, Heart } from 'lucide-react';

export const metadata = {
  title: 'About Us | Bharath Painters Services - Professional Home Improvement Experts',
  description: 'Learn about Bharath Painters Services - over 10 years of experience providing professional house painting, plumbing, electrical work, cleaning, and home improvement services.',
  keywords: 'about Bharath Painters services, professional home improvement, licensed contractors, experienced home services team',
  openGraph: {
    title: 'About Bharath Painters Services - Your Trusted Home Improvement Partner',
    description: 'Discover our commitment to quality, professional service, and customer satisfaction. Serving homeowners for over 10 years.',
  },
};

export default function About() {
  const values = [
    {
      icon: <Shield className="text-blue-600" size={32} />,
      title: "Licensed & Insured",
      description: "All our professionals are fully licensed, bonded, and insured for your peace of mind."
    },
    {
      icon: <Award className="text-green-600" size={32} />,
      title: "Quality Guarantee",
      description: "We stand behind our work with a 100% satisfaction guarantee on all services."
    },
    {
      icon: <Users className="text-purple-600" size={32} />,
      title: "Expert Team",
      description: "Our skilled craftsmen have years of experience and ongoing professional training."
    },
    {
      icon: <Clock className="text-orange-600" size={32} />,
      title: "Reliable Service",
      description: "We respect your time with punctual service and clear communication throughout."
    },
    {
      icon: <Heart className="text-red-600" size={32} />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen, understand, and deliver beyond expectations."
    }
  ];

  const team = [
    {
      name: "Mike Johnson",
      role: "Founder & CEO",
      experience: "15+ years",
      specialty: "Project Management",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
    },
    {
      name: "Sarah Davis",
      role: "Lead Painter",
      experience: "12+ years",
      specialty: "Interior & Exterior Painting",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
    },
    {
      name: "Carlos Martinez",
      role: "Master Plumber",
      experience: "18+ years",
      specialty: "Plumbing & Gas Line Installation",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
    },
    {
      name: "Jennifer Lee",
      role: "Electrical Contractor",
      experience: "14+ years",
      specialty: "Residential Electrical Systems",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
    }
  ];

  const stats = [
    { number: "10+", label: "Years in Business" },
    { number: "500+", label: "Happy Customers" },
    { number: "1000+", label: "Projects Completed" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-500 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About Bharath Painters Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner for professional home improvement services since 2014. 
            We're committed to transforming your home with quality, reliability, and exceptional service.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2014, Bharath Painters Services started as a small family business with a simple mission: 
                to provide homeowners with reliable, professional, and affordable home improvement services. 
                What began as a one-person operation has grown into a trusted team of skilled professionals.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've had the privilege of working with hundreds of families, helping them 
                transform their houses into dream homes. From small repairs to complete renovations, we 
                approach every project with the same level of dedication and attention to detail.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be one of the most trusted home service providers in the area, 
                known for our quality workmanship, fair pricing, and exceptional customer service.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5691600/pexels-photo-5691600.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                alt="Our team at work"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.slice(0, 3).map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {values.slice(3).map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our skilled professionals bring years of experience and dedication to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {member.experience} Experience
                  </p>
                  <p className="text-gray-500 text-sm">
                    {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Bharath Painters Services?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Here's what sets us apart from other home service providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Free detailed estimates with no hidden costs",
              "All work guaranteed with written warranties",
              "Licensed, bonded, and fully insured",
              "Use of premium materials and equipment",
              "Clean, professional job site practices",
              "Flexible scheduling to fit your needs",
              "Transparent pricing with no surprises",
              "Emergency services available 24/7",
              "Eco-friendly options available"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}