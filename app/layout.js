import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Bharath Painters | Painting, Plumbing, Cleaning & More",
    template: "%s | Bharath Painters",
  },
  description:
    "Professional home services including house painting, deep cleaning, plumbing, electrical work, furniture work, and false ceiling installation. Quality workmanship guaranteed.",
  keywords:
    "home services, house painting, plumbing, electrical work, deep cleaning, furniture work, false ceiling, home improvement, professional services, renovation, house renovate, house renovation, bharath, painters, paintings, bharath painters",
  authors: [{ name: "Bharath Painters" }],
  creator: "Bharath Painters",
  publisher: "Bharath Painters",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://bharathpainters.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bharath Painters | Quality Home Improvement Solutions",
    description:
      "Transform your home with our professional services including painting, plumbing, cleaning, and more. Quality guaranteed.",
    url: "https://bharathpainters.com",
    siteName: "Bharath Painters",
    locale: "en_US",
    type: "website",
    images: [
      {
        // url: "./logo.jpg",
        url: "https://bharathpainters.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bharath Painters - Professional Home Improvement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharath Painters | Quality Home Improvement",
    description:
      "Transform your home with our professional services including painting, plumbing, cleaning, and more.",
    images: ["https://bharathpainters.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Professional Home Services",
              // image: "./logo.jpg",
              image: "https://bharathpainters.com/logo.jpg",
              telephone: "+91 8884563601",
              email: "info@bharathpainters.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kudlu Gate, AECS Layout - A Block, Hal Layout, Singasandra",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560068",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.7128,
                longitude: -74.006,
              },
              url: "https://bharathpainters.com",
              sameAs: [
                "https://www.facebook.com/bharathpainters",
                "https://www.instagram.com/bharathpainters",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "₹",
              servesCuisine: "Home Services",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
