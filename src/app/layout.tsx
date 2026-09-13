import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImagePreloader from "@/components/ImagePreloader";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.business.name} — Massage in Antwerpen`,
  description: `Persoonlijke massagepraktijk van ${siteConfig.business.owner} in Antwerpen. Integratieve massage, Lomi Lomi, Crystal Healing en meer.`,
  openGraph: {
    title: `${siteConfig.business.name} — Massage in Antwerpen`,
    description: `Persoonlijke massagepraktijk van ${siteConfig.business.owner} in Antwerpen.`,
    type: "website",
    locale: "nl_BE",
    siteName: siteConfig.business.name,
  },
};

export const viewport = {
  themeColor: "#F5F0E8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.business.name,
    "image": "https://blossom-massage.be/images/els/Els-main%20picture.jpg.avif",
    "@id": "https://blossom-massage.be",
    "url": "https://blossom-massage.be",
    ...(siteConfig.business.phoneTel ? { "telephone": siteConfig.business.phoneTel } : {}),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.business.address,
      "addressLocality": "Antwerpen",
      "postalCode": "2018",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.2089,
      "longitude": 4.4023
    },
    "openingHoursSpecification": siteConfig.business.hours.map(h => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": h.day,
      "opens": h.morning.split(" – ")[0],
      "closes": (h.afternoon || h.morning).split(" – ").pop()
    }))
  };

  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        {/* SVG Clip Path for Arches */}
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <clipPath id="arch-path" clipPathUnits="objectBoundingBox">
              <path d="M0,1 L0,0.5 C0,0.22 0.22,0 0.5,0 C0.78,0 1,0.22 1,0.5 L1,1 Z" />
            </clipPath>
          </defs>
        </svg>

        <ImagePreloader />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
