import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Professional Home Services | Painting, Plumbing, Cleaning & More",
  description:
    "Professional home services including house painting, deep cleaning, plumbing, electrical work, furniture work, and false ceiling installation. Quality workmanship guaranteed.",
  keywords:
    "home services, house painting, plumbing, electrical work, deep cleaning, furniture work, false ceiling, home improvement, professional services, renovation, house renovate, house renovation, bharath, painters, paintings, bharath painters",
  openGraph: {
    title: "Professional Home Services | Quality Home Improvement Solutions",
    description:
      "Transform your home with our professional services including painting, plumbing, Electrical, furniture work, cleaning, and more. Quality guaranteed.",
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
