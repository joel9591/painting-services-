import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Our Work Gallery | Bharath Painters Services",
  description:
    "Browse our gallery of completed projects including painting, plumbing, electrical work, and more. See the quality of our professional home services.",
  keywords:
    "home services gallery, painting projects, home improvement gallery, before and after, project showcase, home services, house painting, plumbing, electrical work, deep cleaning, furniture work, false ceiling, home improvement, professional services, renovation, house renovate, house renovation, bharath, painters, paintings, bharath painters",
  openGraph: {
    title: "Gallery of Our Professional Home Services Projects",
    description:
      "View our portfolio of completed home improvement projects showcasing our quality workmanship.",
  },
};

export default function Gallery() {
  const galleryItems = [
    {
      category: "Interior Painting",
      images: [
        "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      ],
    },
    {
      category: "Exterior Painting",
      images: [
        "https://images.pexels.com/photos/8293660/pexels-photo-8293660.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/5691623/pexels-photo-5691623.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      ],
    },
    {
      category: "Waterproofing",
      images: [
        "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      ],
    },
    {
      category: "Deep Cleaning",
      images: [
        "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      ],
    },
    {
      category: "Wood Finishes",
      images: [
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      ],
    },
    {
      category: "Wallpapers",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      ],
    },
    {
      category: "Grouting",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      ],
    },
    {
      category: "Texture",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      ],
    },
  ];

  return (
    <main>
      <Navigation />

      {/* Hero Section (same style as About) */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-500 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">
            Our Work Gallery
          </h1>
          <p className="text-md sm:text-lg text-blue-100 max-w-3xl mx-auto">
            Explore our completed projects across painting, plumbing, electrical
            work, and more. Every picture reflects our dedication to quality and
            craftsmanship.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7">
          {galleryItems.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="pt-2 px-3 border-b">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {category.category}
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
                {category.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={image}
                      alt={`${category.category} project ${imgIndex + 1}`}
                      className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us (reuse from About for consistency) */}
      <section className="py-6 bg-gradient-to-br from-purple-500 to-blue-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Why Showcase Our Work?
            </h2>
            <p className="text-md sm:text-xl text-blue-100 max-w-3xl mx-auto">
              We believe our projects speak louder than words. Here"s why
              customers trust us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Proven track record with hundreds of projects",
              "Diverse expertise across multiple home services",
              "Attention to detail in every step",
              "Trusted by families and businesses alike",
              "Modern tools and eco-friendly practices",
              "Commitment to exceeding expectations",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 text-sm sm:text-lg "
              >
                <CheckCircle
                  className="text-green-400 flex-shrink-0 mt-1"
                  size={20}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-3 px-1 sm:py-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-md sm:text-lg text-gray-700 mb-6">
            Loved our work? Let"s bring the same level of quality to your home.
            Contact us today for a free consultation and quotation.
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
