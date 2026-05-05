import { getRestaurantJsonLd, restaurantInfo } from "@/lib/data/restaurant";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: {
    default: "Dekleineman | Indian Restaurant in Doetinchem",
    template: "%s | dekleineman",
  },
  description:
    "Experience authentic Indian cuisine at dekleineman in Doetinchem, Netherlands. Order online, reserve a table, or visit us for traditional tandoori, curries, and more.",
  keywords: [
    "Indian restaurant",
    "Doetinchem",
    "Indian food",
    "curry",
    "tandoori",
    "delivery",
    "takeaway",
    "Netherlands",
  ],
  authors: [{ name: "dekleineman" }],
  creator: "dekleineman",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    alternateLocale: ["en_GB", "de_DE"],
    url: restaurantInfo.contact.website,
    siteName: "dekleineman",
    title: "Dekleineman | Indian Restaurant in Doetinchem",
    description:
      "Experience authentic Indian cuisine at dekleineman in Doetinchem, Netherlands. Order online, reserve a table, or visit us for traditional tandoori, curries, and more.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "dekleineman Indian Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "dekleineman | Indian Restaurant in Doetinchem",
    description: "Experience authentic Indian cuisine at dekleineman in Doetinchem, Netherlands.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f59e0b" },
    { media: "(prefers-color-scheme: dark)", color: "#78350f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getRestaurantJsonLd()),
          }}
        />
      </head>

      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
