import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Work Gallery | Professional Home Services',
  description: 'Browse our gallery of completed projects including painting, plumbing, electrical work, and more. See the quality of our professional home services.',
  keywords: 'home services gallery, painting projects, home improvement gallery, before and after, project showcase',
  openGraph: {
    title: 'Gallery of Our Professional Home Services Projects',
    description: 'View our portfolio of completed home improvement projects showcasing our quality workmanship.',
  },
};

export default function Gallery() {
  const galleryItems = [
    {
      category: "House Painting",
      images: [
        "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
      ]
    },
    {
      category: "Plumbing",
      images: [
        "https://images.pexels.com/photos/8293660/pexels-photo-8293660.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/5691623/pexels-photo-5691623.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
      ]
    },
    {
      category: "Electrical Work",
      images: [
        "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
      ]
    },
    {
      category: "Deep Cleaning",
      images: [
        "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
      ]
    },
    {
      category: "Furniture Work",
      images: [
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
      ]
    },
    {
      category: "False Ceiling",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
      ]
    }
  ];

  return (
    <main>
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Work Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our portfolio of completed projects and see the quality of our workmanship.
            </p>
          </div>
          
          <div className="space-y-16">
            {galleryItems.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                  {category.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={image} 
                        alt={`${category.category} project ${imgIndex + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6">
              Ready to transform your space? Contact us for a free consultation and quote.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}