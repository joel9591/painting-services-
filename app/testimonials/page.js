import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";

export const metadata = {
  title: "Client Testimonials | Professional Home Services",
  description:
    "Read what our clients say about our professional home services including painting, plumbing, electrical work, and more.",
  keywords:
    "home services testimonials, client reviews, customer feedback, service ratings, home improvement reviews, home services, house painting, plumbing, electrical work, deep cleaning, furniture work, false ceiling, home improvement, professional services, renovation, house renovate, house renovation, bharath, painters, paintings, bharath painters",
  openGraph: {
    title: "Client Testimonials - Professional Home Services",
    description:
      "Discover what our satisfied clients have to say about our quality workmanship and professional service.",
  },
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown",
      service: "House Painting",
      rating: 5,
      text: "Absolutely amazing work! The team was professional, punctual, and the quality of their painting exceeded our expectations. Our home looks brand new!",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
    {
      name: "Michael Chen",
      location: "Suburbs",
      service: "Plumbing",
      rating: 5,
      text: "Quick response to our plumbing emergency. The technician was knowledgeable and fixed the issue efficiently. Highly recommend their services!",
      image:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
    {
      name: "Emily Rodriguez",
      location: "City Center",
      service: "Deep Cleaning",
      rating: 5,
      text: "The deep cleaning service was thorough and impressive. They cleaned areas I never even thought about. My house has never been cleaner!",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
    {
      name: "David Thompson",
      location: "West Side",
      service: "Electrical Work",
      rating: 5,
      text: "Professional electrical work done right the first time. They explained everything clearly and made sure all safety standards were met. Great service!",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
    {
      name: "Jennifer Martinez",
      location: "East Side",
      service: "Furniture Work",
      rating: 5,
      text: "The furniture repair team did an incredible job restoring our antique dining table. Their craftsmanship is outstanding, and they were very respectful of our home.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
    {
      name: "Robert Kim",
      location: "North County",
      service: "False Ceiling",
      rating: 5,
      text: "The false ceiling installation transformed our living room. The design suggestions were spot on, and the execution was flawless. Very satisfied with the results!",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
    {
      name: "Lisa Wilson",
      location: "Downtown",
      service: "House Painting",
      rating: 5,
      text: "Second time using their painting services and just as impressed as the first time. Attention to detail is amazing, and they always clean up perfectly after the job.",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
    {
      name: "James Anderson",
      location: "Suburbs",
      service: "Plumbing",
      rating: 5,
      text: "Had multiple plumbing issues that other companies couldn't fix. Their team diagnosed and resolved everything in one visit. Fair pricing and excellent workmanship.",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    },
  ];

  return (
    <main>
      <Navigation />

      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-500 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">
            Client Testimonials
          </h1>
          <p className="text-md sm:text-lg text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about our services.
          </p>
        </div>
      </section>
      <section className="py-8 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-600 text-xs">
                      {testimonial.service} • {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={15}
                    />
                  ))}
                </div>

                <div className="relative">
                  <Quote
                    className="absolute -top-2 -left-2 text-blue-100"
                    size={24}
                  />
                  <p className="text-gray-700 italic relative z-10 pl-4 text-sm md:text-md lg:text-base">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 -mb-2">
          <p className="text-md sm:text-lg text-gray-700 mb-2">
            Ready to experience our quality service for yourself?
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Get a Free Quotation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
