import type { Metadata, Viewport } from "next";
// @ts-ignore: Allow side-effect CSS import without module declarations
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";
import { BUSINESS_DATA } from "@/data/business";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const viewport: Viewport = {
  themeColor: "#4A3426",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: BUSINESS_DATA.meta.defaultTitle,
    template: `%s | ${BUSINESS_DATA.name}`,
  },
  description: BUSINESS_DATA.meta.defaultDescription,
  metadataBase: new URL(BUSINESS_DATA.meta.siteUrl),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google96df37acacefbf8c",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  keywords: [
    "Sri Krishna Plywoods & Hardwares",
    "Plywood shop in Hosur",
    "Plywood dealers in Hosur",
    "Hardware shop in Hosur",
    "Laminates in Hosur",
    "Plywood suppliers in Hosur",
    "Interior materials in Hosur",
    "Plywood near Avalapalli Hudco",
    "Hardware shop near Indira Nagar Hosur",
    "Fevicol dealers Hosur",
    "Greenply Hosur",
  ],
  openGraph: {
    title: BUSINESS_DATA.meta.defaultTitle,
    description: BUSINESS_DATA.meta.defaultDescription,
    url: BUSINESS_DATA.meta.siteUrl,
    siteName: BUSINESS_DATA.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 675,
        alt: `${BUSINESS_DATA.name} Hosur Showroom`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS_DATA.meta.defaultTitle,
    description: BUSINESS_DATA.meta.defaultDescription,
    images: ["/images/hero.jpg"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body>
        <JsonLd />
        <Header />
        <main style={{ minHeight: "80vh", paddingBottom: "3.5rem" }}>
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <ScrollToTop />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
