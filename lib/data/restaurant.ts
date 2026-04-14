// ===========================================
// RESTAURANT DATA
// Central configuration for restaurant info
// ===========================================

export const restaurantInfo = {
  name: "dekleineman",
  tagline: {
    en: "Authentic Indian taste in the heart of Doetinchem",
    nl: "Authentieke Indiase smaak in het hart van Doetinchem",
    de: "Authentischer indischer Geschmack im Herzen von Doetinchem",
  },
  address: {
    street: "Heezenstraat 24",
    postalCode: "7001BR",
    city: "Doetinchem",
    country: "Netherlands",
    full: "Heezenstraat 24, 7001BR Doetinchem, Netherlands",
  },
  contact: {
    phone: "+31 6 8794 7371",
    phoneFormatted: "+31 6 87 94 73 71",
    email: "restaurantdekleineman@gmail.com",
    website: "https://dekleineman.nl",
  },
  social: {
    facebook: "https://facebook.com/dekleineman",
    instagram: "https://instagram.com/dekleineman",
    tiktok: "https://tiktok.com/@dekleineman",
  },
  // Opening hours: [open, close] in 24h format, null = closed
  openingHours: {
    monday: ["16:30", "21:30"],
    tuesday: ["16:30", "21:30"],
    wednesday: ["16:30", "21:30"],
    thursday: ["16:30", "21:30"],
    friday: ["16:30", "21:30"],
    saturday: ["16:30", "21:30"],
    sunday: ["16:30", "21:30"],
  },
  deliveryHours: {
    monday: ["16:30", "21:30"],
    tuesday: ["16:30", "21:30"],
    wednesday: ["16:30", "21:30"],
    thursday: ["16:30", "21:30"],
    friday: ["16:30", "21:30"],
    saturday: ["16:30", "21:30"],
    sunday: ["16:30", "21:30"],
  },
  deliveryFee: 3.5,
  minimumOrder: 20,
  taxRate: 0.09, // 9% BTW for food in Netherlands
  coordinates: {
    lat: 51.9654,
    lng: 6.2884,
  },
  googleMapsUrl:
    "https://maps.google.com/?q=Heezenstraat+24,+7001BR+Doetinchem,+Netherlands",
};

// JSON-LD Structured Data for SEO
export function getRestaurantJsonLd(locale = "nl") {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurantInfo.name,
    image: "/images/restaurant-exterior.jpg",
    url: restaurantInfo.contact.website,
    telephone: restaurantInfo.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurantInfo.address.street,
      addressLocality: restaurantInfo.address.city,
      postalCode: restaurantInfo.address.postalCode,
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurantInfo.coordinates.lat,
      longitude: restaurantInfo.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "16:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "16:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "16:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "16:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "14:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "14:00",
        closes: "22:00",
      },
    ],
    servesCuisine: "Indian",
    priceRange: "€€",
    acceptsReservations: "True",
    menu: `${restaurantInfo.contact.website}/menu`,
  };
}
