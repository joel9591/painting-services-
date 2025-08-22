import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Professional Home Services | Painting, Plumbing, Cleaning & More',
    template: '%s | Professional Home Services'
  },
  description: 'Professional home services including house painting, deep cleaning, plumbing, electrical work, furniture work, and false ceiling installation. Quality workmanship guaranteed.',
  keywords: 'home services, house painting, plumbing, electrical work, deep cleaning, furniture work, false ceiling, home improvement, professional services',
  authors: [{ name: 'Professional Home Services' }],
  creator: 'Professional Home Services',
  publisher: 'Professional Home Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Professional Home Services | Quality Home Improvement Solutions',
    description: 'Transform your home with our professional services including painting, plumbing, cleaning, and more. Quality guaranteed.',
    url: 'https://yourdomain.com',
    siteName: 'Professional Home Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Home Services | Quality Home Improvement Solutions',
    description: 'Transform your home with our professional services including painting, plumbing, cleaning, and more.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Professional Home Services",
              "image": "https://yourdomain.com/logo.jpg",
              "telephone": "+1-234-567-8900",
              "email": "info@yourdomain.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Your City",
                "addressRegion": "Your State",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.7128,
                "longitude": -74.0060
              },
              "url": "https://yourdomain.com",
              "sameAs": [
                "https://www.facebook.com/yourbusiness",
                "https://www.instagram.com/yourbusiness"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "16:00"
                }
              ],
              "priceRange": "$$",
              "servesCuisine": [],
              "serviceType": [
                "House Painting",
                "Deep Cleaning",
                "Plumbing",
                "Electrical Work",
                "Furniture Work",
                "False Ceiling Installation"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}