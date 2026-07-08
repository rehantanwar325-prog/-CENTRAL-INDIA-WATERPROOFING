import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Best Waterproofing Agency in Nagpur, India | Central India Waterproofing',
    template: '%s | Central India Waterproofing',
  },
  description: 'Central India Waterproofing is India\'s #1 rated roof waterproofing agency serving Nagpur, Akola & Chandrapur. Expert SEALROOF CETROOF treatment, terrace waterproofing, spray coating & membrane sheet waterproofing with warranty. Call +91 89751 38745 for free inspection.',
  keywords: [
    'waterproofing agency Nagpur',
    'best waterproofing agency India',
    'roof waterproofing Nagpur',
    'terrace waterproofing Nagpur',
    'waterproofing services Akola',
    'waterproofing services Chandrapur',
    'SEALROOF CETROOF treatment',
    'best waterproofing agency',
    'waterproofing agency near me',
    'roof leak repair Nagpur',
    'terrace leakage solution Nagpur',
    'waterproofing contractor Nagpur',
    'waterproofing contractor Akola',
    'waterproofing contractor Chandrapur',
    'roof waterproofing India',
    'best roof waterproofing agency India',
    'waterproofing agency Central India',
    'spray waterproofing coating',
    'membrane sheet waterproofing',
    'roof crack repair',
    'roller applied roof coating',
    'waterproofing Nagpur price',
    'terrace waterproofing cost Nagpur',
    'commercial waterproofing Nagpur',
    'industrial roof waterproofing India',
    'building waterproofing Nagpur',
    'flat roof waterproofing Nagpur',
    'waterproofing expert Nagpur',
    'Nagpur waterproofing agency',
    'Akola waterproofing agency',
    'Chandrapur waterproofing agency',
    'waterproofing solution India',
    'best waterproofing in Vidarbha',
    'Vidarbha waterproofing agency',
  ],
  authors: [{ name: 'Central India Waterproofing', url: 'https://centralindiawaterproofing.com' }],
  creator: 'Central India Waterproofing',
  publisher: 'Central India Waterproofing',
  category: 'Waterproofing Services',
  alternates: {
    canonical: 'https://centralindiawaterproofing.com',
  },
  openGraph: {
    title: 'Best Waterproofing Agency in Nagpur, Akola & Chandrapur | Central India Waterproofing',
    description: 'India\'s #1 rated roof waterproofing experts. SEALROOF CETROOF treatment, terrace waterproofing, spray coating with warranty. Serving Nagpur, Akola & Chandrapur. Free inspection. Call +91 89751 38745.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Central India Waterproofing',
    url: 'https://centralindiawaterproofing.com',
    images: [
      {
        url: 'https://centralindiawaterproofing.com/images/services/sealroof.png',
        width: 800,
        height: 600,
        alt: 'Central India Waterproofing SEALROOF treatment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Waterproofing Agency in Nagpur, India | Central India Waterproofing',
    description: 'India\'s #1 rated roof waterproofing experts. SEALROOF CETROOF treatment, terrace waterproofing with warranty. Nagpur, Akola & Chandrapur. Call +91 89751 38745.',
    images: ['https://centralindiawaterproofing.com/images/services/sealroof.png'],
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
  verification: {
    // Add Google Search Console verification code here after registering
    // google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Nagpur',
    'geo.position': '21.1458;79.0882',
    'ICBM': '21.1458, 79.0882',
    'rating': 'general',
    'revisit-after': '7 days',
    'distribution': 'global',
    'language': 'English',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// JSON-LD Structured Data for Local Business (all 3 locations)
function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://centralindiawaterproofing.com/#organization',
        name: 'Central India Waterproofing',
        alternateName: 'Central India Waterproofing Agency',
        description: 'India\'s #1 rated roof waterproofing agency. Expert SEALROOF CETROOF treatment, terrace waterproofing, spray coating & membrane sheet waterproofing. Serving Nagpur, Akola & Chandrapur with 25+ years experience.',
        url: 'https://centralindiawaterproofing.com',
        telephone: '+918975138745',
        email: 'yusuftagala1983@gmail.com',
        foundingDate: '2000',
        priceRange: '₹₹',
        image: 'https://centralindiawaterproofing.com/images/services/sealroof.png',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Babu Manzil, Plot No. 56 Lahanji Layout, Old Ring Road Mankapur, opp. Maqbul Masjid',
          addressLocality: 'Nagpur',
          addressRegion: 'Maharashtra',
          postalCode: '440030',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 21.1458,
          longitude: 79.0882,
        },
        areaServed: [
          { '@type': 'City', name: 'Nagpur', containedInPlace: { '@type': 'State', name: 'Maharashtra' } },
          { '@type': 'City', name: 'Akola', containedInPlace: { '@type': 'State', name: 'Maharashtra' } },
          { '@type': 'City', name: 'Chandrapur', containedInPlace: { '@type': 'State', name: 'Maharashtra' } },
          { '@type': 'State', name: 'Maharashtra' },
          { '@type': 'Country', name: 'India' },
        ],
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: { '@type': 'GeoCoordinates', latitude: 21.1458, longitude: 79.0882 },
          geoRadius: '300',
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '19:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '10:00', closes: '16:00' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          bestRating: '5',
          ratingCount: '5000',
          reviewCount: '3200',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Roof Waterproofing Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEALROOF CETROOF Treatment', description: 'Advanced thermal insulation & waterproofing coating system with warranty.' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof & Terrace Waterproofing', description: 'Complete waterproofing for flat roofs, sloped roofs, and terraces.' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Spray Waterproofing Coating', description: 'High-pressure spray-applied waterproofing coating for large roof surfaces.' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roller Applied Roof Coating', description: 'Professional roller-applied white waterproofing coating for flat rooftops.' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Crack Repair Treatment', description: 'Expert crack filling and sealing on concrete rooftops.' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Membrane Sheet Waterproofing', description: 'APP/SBS bituminous waterproofing membrane sheets installation.' } },
          ],
        },
        sameAs: [],
      },
      // Branch - Akola
      {
        '@type': 'LocalBusiness',
        name: 'Central India Waterproofing - Akola Branch',
        description: 'Best waterproofing agency in Akola, India. Roof waterproofing, SEALROOF CETROOF treatment & terrace waterproofing services.',
        telephone: '+919075298447',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Near Sana Kirana, Shadab Nagar, Akot Faile',
          addressLocality: 'Akola',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
        parentOrganization: { '@id': 'https://centralindiawaterproofing.com/#organization' },
      },
      // Branch - Chandrapur
      {
        '@type': 'LocalBusiness',
        name: 'Central India Waterproofing - Chandrapur Branch',
        description: 'Best waterproofing agency in Chandrapur, India. Roof waterproofing, SEALROOF CETROOF treatment & terrace waterproofing services.',
        telephone: '+919421717595',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Bagad Khidki, Near Rubi Fabrication Works',
          addressLocality: 'Chandrapur',
          postalCode: '442402',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
        parentOrganization: { '@id': 'https://centralindiawaterproofing.com/#organization' },
      },
      // Website
      {
        '@type': 'WebSite',
        name: 'Central India Waterproofing',
        url: 'https://centralindiawaterproofing.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://centralindiawaterproofing.com/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://centralindiawaterproofing.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://centralindiawaterproofing.com/#services' },
          { '@type': 'ListItem', position: 3, name: 'Locations', item: 'https://centralindiawaterproofing.com/#locations' },
          { '@type': 'ListItem', position: 4, name: 'Contact', item: 'https://centralindiawaterproofing.com/#contact' },
        ],
      },
      // FAQPage for rich snippets
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the best waterproofing agency in Nagpur?',
            acceptedAnswer: { '@type': 'Answer', text: 'Central India Waterproofing is rated the best waterproofing agency in Nagpur with 25+ years of experience, 5000+ satisfied clients, and a 4.9/5 rating. We specialize in SEALROOF CETROOF treatment and roof waterproofing.' },
          },
          {
            '@type': 'Question',
            name: 'What waterproofing services do you offer in Nagpur, Akola and Chandrapur?',
            acceptedAnswer: { '@type': 'Answer', text: 'We offer SEALROOF CETROOF Treatment, Roof & Terrace Waterproofing, Spray Waterproofing Coating, Roller Applied Roof Coating, Roof Crack Repair Treatment, and Membrane Sheet Waterproofing across Nagpur, Akola, and Chandrapur.' },
          },
          {
            '@type': 'Question',
            name: 'How much does roof waterproofing cost in Nagpur?',
            acceptedAnswer: { '@type': 'Answer', text: 'Roof waterproofing cost in Nagpur depends on the area size, type of treatment, and material used. Contact Central India Waterproofing at +91 89751 38745 for a free inspection and transparent quotation.' },
          },
          {
            '@type': 'Question',
            name: 'Do you provide waterproofing services in Akola and Chandrapur?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes, Central India Waterproofing has branch offices in both Akola and Chandrapur. We provide all our roof waterproofing services including SEALROOF CETROOF treatment in these cities.' },
          },
          {
            '@type': 'Question',
            name: 'What is SEALROOF CETROOF treatment?',
            acceptedAnswer: { '@type': 'Answer', text: 'SEALROOF CETROOF is an advanced thermal insulation and waterproofing coating system that provides permanent leak-proof protection for roofs. It offers thermal insulation, UV resistance, and is eco-friendly with warranty as per material used.' },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://centralindiawaterproofing.com" />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}