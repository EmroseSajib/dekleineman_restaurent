// ===========================================
// TRANSLATIONS FILE
// All text content for EN, NL, DE languages
// ===========================================

export type Locale = "en" | "nl" | "de";

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      menu: "Menu",
      order: "Order Online",
      reservation: "Reservation",
      giftVoucher: "Gift Voucher",
      catering: "Catering",
      about: "About Us",
      gallery: "Gallery",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      tagline: "Authentic Indian taste in the heart of Doetinchem",
      orderOnline: "Order Online",
      viewMenu: "View Menu",
      catering: "Catering Service",
      reserveTable: "Reserve a Table",
    },
    // Occasion Banner
    banner: {
      default:
        "🎉 Buy 1 Get 1 FREE! Papadums, Butter Naan & Onion Bhaji – Limited Time Offer!",
      christmas: "🎄 Christmas Special Menu - Book your table now!",
      valentine: "❤️ Valentine's Special - Romantic dinner for two",
    },
    // Highlights
    highlights: {
      title: "Why Choose Us",
      subtitle: "Experience the finest Indian cuisine",
      authentic: {
        title: "Authentic Recipes",
        description: "Traditional recipes passed down through generations",
      },
      fresh: {
        title: "Fresh & Nutritious Ingredients",
        description: "Locally sourced, premium quality ingredients",
      },
      spices: {
        title: "Premium Spices",
        description: "Imported directly from India for authentic flavor",
      },
      service: {
        title: "Warm Service",
        description: "Friendly staff dedicated to your comfort",
      },
    },
    // Popular Dishes
    popularDishes: {
      title: "Main Courses",
      subtitle: "Our guests' favorites",
      orderNow: "Order Now",
      addToCart: "Add to Cart",
    },
    // Hours
    hours: {
      title: "Opening Hours",
      deliveryTitle: "Delivery Hours",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
    },
    // Location
    location: {
      title: "Find Us",
      directions: "Get Directions",
      address: "Address",
      phone: "Phone",
      email: "Email",
    },
    // Testimonials
    testimonials: {
      title: "What Our Guests Say",
    },
    // Menu Page
    menu: {
      title: "Our Menu",
      subtitle: "Discover our authentic Indian dishes",
      categories: {
        popular: "Popular",
        main: "Main Courses",
        "menu-for-two": "Menu for Two",
        starters: "Starters",
        sides: "Sides",
        "bread & rice": "Bread & Rice",
        dessert: "Dessert",
        drinks: "Drinks",
      },
      spiceLevel: {
        mild: "Mild",
        medium: "Medium",
        hot: "Hot",
        veryHot: "Very Hot",
      },
      vegetarian: "Vegetarian",
      vegan: "Vegan",
      glutenFree: "Gluten Free",
    },
    // Order Page
    order: {
      title: "Order Online",
      subtitle: "Fresh food delivered to your door",
      cart: "Your Cart",
      emptyCart: "Your cart is empty",
      subtotal: "Subtotal",
      deliveryFee: "Delivery Fee",
      tax: "Tax (9%)",
      total: "Total",
      checkout: "Proceed to Checkout",
      deliveryType: {
        title: "Order Type",
        delivery: "Delivery",
        pickup: "Pickup",
      },
      customerInfo: {
        title: "Your Information",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        address: "Street Address",
        city: "City",
        postalCode: "Postal Code",
        notes: "Order Notes (optional)",
      },
      payment: {
        title: "Payment",
        method: "Payment Method",
        card: "Credit/Debit Card",
        ideal: "iDEAL",
        cash: "Cash on Delivery",
        payNow: "Pay Now",
      },
      voucher: {
        title: "Have a voucher?",
        placeholder: "Enter voucher code",
        apply: "Apply",
        applied: "Voucher applied!",
        invalid: "Invalid voucher code",
      },
      success: {
        title: "Order Placed Successfully!",
        message:
          "Thank you for your order. You will receive a confirmation email shortly.",
        orderNumber: "Order Number",
        estimatedTime: "Estimated Time",
        trackOrder: "Track Your Order",
        backHome: "Back to Home",
      },
    },
    // Reservation Page
    reservation: {
      title: "Reserve a Table",
      subtitle: "Book your dining experience",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        date: "Date",
        time: "Time",
        guests: "Number of Guests",
        tablePreference: "Table Preference (optional)",
        notes: "Special Requests (optional)",
        submit: "Reserve Table",
      },
      tableOptions: {
        any: "No preference",
        window: "Window seat",
        private: "Private area",
        terrace: "Terrace",
      },
      success: {
        title: "Reservation Confirmed!",
        message:
          "We look forward to welcoming you. A confirmation email has been sent.",
        details: "Reservation Details",
      },
    },
    // Gift Voucher Page
    giftVoucher: {
      title: "Gift Voucher",
      subtitle: "The perfect gift for food lovers",
      selectAmount: "Select Amount",
      customAmount: "Custom Amount",
      recipientInfo: {
        title: "Recipient Information",
        name: "Recipient Name",
        email: "Recipient Email",
        message: "Personal Message (optional)",
      },
      buyerInfo: {
        title: "Your Information",
        name: "Your Name",
        email: "Your Email",
      },
      purchase: "Purchase Voucher",
      success: {
        title: "Voucher Purchased!",
        message: "The voucher has been sent to the recipient's email.",
        voucherCode: "Voucher Code",
        instructions:
          "This code can be used when ordering food online or at the restaurant.",
      },
    },
    // About Page
    about: {
      title: "About dekleineman",
      subtitle: "Our Story",
      story: {
        title: "Our Journey",
        p1: "Welcome to dekleineman, where authentic Indian flavors meet Dutch hospitality. Our restaurant was born from a passion for bringing the rich culinary traditions of India to the heart of Doetinchem.",
        p2: "Every dish we serve is crafted with love, using traditional recipes passed down through generations and the finest spices imported directly from India.",
        p3: "Our mission is simple: to create memorable dining experiences that transport you to the vibrant streets of India while enjoying the comfort of our warm, welcoming atmosphere.",
      },
      chef: {
        title: "Meet Our Chef",
        description:
          "With over 20 years of experience in Indian cuisine, our head chef brings authentic flavors and innovative techniques to every dish.",
      },
      values: {
        title: "Our Values",
        quality: {
          title: "Quality First",
          description: "We never compromise on the quality of our ingredients.",
        },
        tradition: {
          title: "Tradition",
          description: "Honoring centuries-old recipes and cooking methods.",
        },
        community: {
          title: "Community",
          description: "Building connections through the love of food.",
        },
      },
    },
    // Gallery Page
    gallery: {
      title: "Gallery",
      subtitle: "A visual journey through our restaurant",
      categories: {
        all: "All",
        food: "Food",
        interior: "Interior",
        events: "Events",
      },
    },
    // Footer
    footer: {
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      openingHours: "Opening Hours",
      followUs: "Follow Us",
      newsletter: {
        title: "Newsletter",
        subtitle: "Subscribe for special offers",
        placeholder: "Your email",
        subscribe: "Subscribe",
      },
      copyright: "© 2026 Designed & Developed by",
    },
    // Common
    common: {
      loading: "Loading...",
      error: "Something went wrong",
      retry: "Try Again",
      close: "Close",
      back: "Back",
      next: "Next",
      confirm: "Confirm",
      cancel: "Cancel",
      required: "Required",
      optional: "Optional",
      from: "from",
      per: "per",
      person: "person",
      people: "people",
    },
  },
  nl: {
    // Navigation
    nav: {
      home: "Home",
      menu: "Menu",
      order: "Online Bestellen",
      reservation: "Reserveren",
      giftVoucher: "Cadeaubon",
      catering: "Catering",
      about: "Over Ons",
      gallery: "Galerij",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      tagline: "Authentieke Indiase smaak in het hart van Doetinchem",
      orderOnline: "Online Bestellen",
      viewMenu: "Bekijk Menu",
      catering: "Cateringdiensten",
      reserveTable: "Reserveer een Tafel",
    },
    // Occasion Banner
    banner: {
      default:
        "🎉 Koop 1, krijg 1 GRATIS! Papadums, Butter Naan & Onion Bhaji – Tijdelijke aanbieding!",
      christmas: "🎄 Kerst Speciaal Menu - Reserveer nu uw tafel!",
      valentine: "❤️ Valentijn Speciaal - Romantisch diner voor twee",
    },
    // Highlights
    highlights: {
      title: "Waarom Voor Ons Kiezen",
      subtitle: "Ervaar de beste Indiase keuken",
      authentic: {
        title: "Authentieke Recepten",
        description: "Traditionele recepten doorgegeven door generaties",
      },
      fresh: {
        title: "Verse Ingrediënten",
        description: "Lokaal ingekocht, premium kwaliteit ingrediënten",
      },
      spices: {
        title: "Premium Kruiden",
        description: "Direct geïmporteerd uit India voor authentieke smaak",
      },
      service: {
        title: "Warme Service",
        description: "Vriendelijk personeel toegewijd aan uw comfort",
      },
    },
    // Popular Dishes
    popularDishes: {
      title: "Hoofdgerechten",
      subtitle: "Favorieten van onze gasten",
      orderNow: "Nu Bestellen",
      addToCart: "Toevoegen",
    },
    // Hours
    hours: {
      title: "Openingstijden",
      deliveryTitle: "Bezorgtijden",
      monday: "Maandag",
      tuesday: "Dinsdag",
      wednesday: "Woensdag",
      thursday: "Donderdag",
      friday: "Vrijdag",
      saturday: "Zaterdag",
      sunday: "Zondag",
      closed: "Gesloten",
    },
    // Location
    location: {
      title: "Vind Ons",
      directions: "Route",
      address: "Adres",
      phone: "Telefoon",
      email: "E-mail",
    },
    // Testimonials
    testimonials: {
      title: "Wat Onze Gasten Zeggen",
    },
    // Menu Page
    menu: {
      title: "Ons Menu",
      subtitle: "Ontdek onze authentieke Indiase gerechten",
      categories: {
        main: "Hoofdgerechten",
        starters: "Voorgerechten",
        "bread & rice": "Brood & Rijst",
        sides: "Bijgerechten",
        dessert: "Desserts",
        drinks: "Dranken",
        "menu-for-two": "Menu voor Twee Personen",
      },
      spiceLevel: {
        mild: "Mild",
        medium: "Medium",
        hot: "Pittig",
        veryHot: "Zeer Pittig",
      },
      vegetarian: "Vegetarisch",
      vegan: "Veganistisch",
      glutenFree: "Glutenvrij",
    },
    // Order Page
    order: {
      title: "Online Bestellen",
      subtitle: "Vers eten bezorgd aan uw deur",
      cart: "Uw Winkelwagen",
      emptyCart: "Uw winkelwagen is leeg",
      subtotal: "Subtotaal",
      deliveryFee: "Bezorgkosten",
      tax: "BTW (9%)",
      total: "Totaal",
      checkout: "Afrekenen",
      deliveryType: {
        title: "Bestelling Type",
        delivery: "Bezorgen",
        pickup: "Afhalen",
      },
      customerInfo: {
        title: "Uw Gegevens",
        name: "Volledige Naam",
        email: "E-mailadres",
        phone: "Telefoonnummer",
        address: "Straatnaam en Huisnummer",
        city: "Stad",
        postalCode: "Postcode",
        notes: "Opmerkingen (optioneel)",
      },
      payment: {
        title: "Betaling",
        method: "Betaalmethode",
        card: "Creditcard/Pinpas",
        ideal: "iDEAL",
        cash: "Contant bij Bezorging",
        payNow: "Nu Betalen",
      },
      voucher: {
        title: "Heeft u een cadeaubon?",
        placeholder: "Voer code in",
        apply: "Toepassen",
        applied: "Cadeaubon toegepast!",
        invalid: "Ongeldige code",
      },
      success: {
        title: "Bestelling Geplaatst!",
        message:
          "Bedankt voor uw bestelling. U ontvangt binnenkort een bevestigingsmail.",
        orderNumber: "Bestelnummer",
        estimatedTime: "Geschatte Tijd",
        trackOrder: "Volg Uw Bestelling",
        backHome: "Terug naar Home",
      },
    },
    // Reservation Page
    reservation: {
      title: "Reserveer een Tafel",
      subtitle: "Boek uw eetervaring",
      form: {
        name: "Volledige Naam",
        email: "E-mailadres",
        phone: "Telefoonnummer",
        date: "Datum",
        time: "Tijd",
        guests: "Aantal Gasten",
        tablePreference: "Tafelvoorkeur (optioneel)",
        notes: "Speciale Wensen (optioneel)",
        submit: "Reserveer Tafel",
      },
      tableOptions: {
        any: "Geen voorkeur",
        window: "Raamplaats",
        private: "Privé gedeelte",
        terrace: "Terras",
      },
      success: {
        title: "Reservering Bevestigd!",
        message:
          "Wij kijken ernaar uit u te verwelkomen. Een bevestigingsmail is verzonden.",
        details: "Reserveringsdetails",
      },
    },
    // Gift Voucher Page
    giftVoucher: {
      title: "Cadeaubon",
      subtitle: "Het perfecte cadeau voor fijnproevers",
      selectAmount: "Selecteer Bedrag",
      customAmount: "Ander Bedrag",
      recipientInfo: {
        title: "Ontvanger Informatie",
        name: "Naam Ontvanger",
        email: "E-mail Ontvanger",
        message: "Persoonlijk Bericht (optioneel)",
      },
      buyerInfo: {
        title: "Uw Informatie",
        name: "Uw Naam",
        email: "Uw E-mail",
      },
      purchase: "Koop Cadeaubon",
      success: {
        title: "Cadeaubon Gekocht!",
        message:
          "De cadeaubon is verzonden naar het e-mailadres van de ontvanger.",
        voucherCode: "Cadeauboncode",
        instructions:
          "Deze code kan worden gebruikt bij online bestellen of in het restaurant.",
      },
    },
    // About Page
    about: {
      title: "Over dekleineman",
      subtitle: "Ons Verhaal",
      story: {
        title: "Onze Reis",
        p1: "Welkom bij dekleineman, waar authentieke Indiase smaken de Nederlandse gastvrijheid ontmoeten. Ons restaurant is ontstaan uit een passie om de rijke culinaire tradities van India naar het hart van Doetinchem te brengen.",
        p2: "Elk gerecht dat we serveren is met liefde bereid, met traditionele recepten die door generaties zijn doorgegeven en de beste kruiden die rechtstreeks uit India worden geïmporteerd.",
        p3: "Onze missie is simpel: onvergetelijke eetbelevingen creëren die u meenemen naar de levendige straten van India, terwijl u geniet van het comfort van onze warme, gastvrije sfeer.",
      },
      chef: {
        title: "Ontmoet Onze Chef",
        description:
          "Met meer dan 20 jaar ervaring in de Indiase keuken, brengt onze hoofdchef authentieke smaken en innovatieve technieken naar elk gerecht.",
      },
      values: {
        title: "Onze Waarden",
        quality: {
          title: "Kwaliteit Voorop",
          description:
            "Wij doen nooit concessies aan de kwaliteit van onze ingrediënten.",
        },
        tradition: {
          title: "Traditie",
          description: "Het eren van eeuwenoude recepten en kookmethoden.",
        },
        community: {
          title: "Gemeenschap",
          description: "Verbindingen opbouwen door de liefde voor eten.",
        },
      },
    },
    // Gallery Page
    gallery: {
      title: "Galerij",
      subtitle: "Een visuele reis door ons restaurant",
      categories: {
        all: "Alles",
        food: "Eten",
        interior: "Interieur",
        events: "Evenementen",
      },
    },
    // Footer
    footer: {
      quickLinks: "Snelle Links",
      contactUs: "Contact",
      openingHours: "Openingstijden",
      followUs: "Volg Ons",
      newsletter: {
        title: "Nieuwsbrief",
        subtitle: "Schrijf in voor speciale aanbiedingen",
        placeholder: "Uw e-mail",
        subscribe: "Aanmelden",
      },
      copyright: "© 2026 Ontworpen en ontwikkeld door",
    },
    // Common
    common: {
      loading: "Laden...",
      error: "Er is iets misgegaan",
      retry: "Probeer Opnieuw",
      close: "Sluiten",
      back: "Terug",
      next: "Volgende",
      confirm: "Bevestigen",
      cancel: "Annuleren",
      required: "Verplicht",
      optional: "Optioneel",
      from: "vanaf",
      per: "per",
      person: "persoon",
      people: "personen",
    },
  },
  de: {
    // Navigation
    nav: {
      home: "Startseite",
      menu: "Speisekarte",
      order: "Online Bestellen",
      reservation: "Reservierung",
      giftVoucher: "Geschenkgutschein",
      catering: "Catering",
      about: "Über Uns",
      gallery: "Galerie",
      contact: "Kontakt",
    },
    // Hero Section
    hero: {
      tagline: "Authentischer indischer Geschmack im Herzen von Doetinchem",
      orderOnline: "Online Bestellen",
      viewMenu: "Speisekarte",
      catering: "Catering-Dienstleistungen",
      reserveTable: "Tisch Reservieren",
    },
    // Occasion Banner
    banner: {
      default:
        "🎉 Kaufe 1, erhalte 1 GRATIS! Papadums, Butter Naan & Onion Bhaji – Nur für kurze Zeit!",
      christmas:
        "🎄 Weihnachts-Spezialmenü - Reservieren Sie jetzt Ihren Tisch!",
      valentine: "❤️ Valentinstag Spezial - Romantisches Abendessen für zwei",
    },
    // Highlights
    highlights: {
      title: "Warum Uns Wählen",
      subtitle: "Erleben Sie die beste indische Küche",
      authentic: {
        title: "Authentische Rezepte",
        description:
          "Traditionelle Rezepte, die über Generationen weitergegeben wurden",
      },
      fresh: {
        title: "Frische Zutaten",
        description: "Lokal beschafft, Premium-Qualität Zutaten",
      },
      spices: {
        title: "Premium Gewürze",
        description: "Direkt aus Indien importiert für authentischen Geschmack",
      },
      service: {
        title: "Herzlicher Service",
        description: "Freundliches Personal, das sich Ihrem Komfort widmet",
      },
    },
    // Popular Dishes
    popularDishes: {
      title: "Hauptgerichte",
      subtitle: "Lieblinge unserer Gäste",
      orderNow: "Jetzt Bestellen",
      addToCart: "Hinzufügen",
    },
    // Hours
    hours: {
      title: "Öffnungszeiten",
      deliveryTitle: "Lieferzeiten",
      monday: "Montag",
      tuesday: "Dienstag",
      wednesday: "Mittwoch",
      thursday: "Donnerstag",
      friday: "Freitag",
      saturday: "Samstag",
      sunday: "Sonntag",
      closed: "Geschlossen",
    },
    // Location
    location: {
      title: "Finden Sie Uns",
      directions: "Wegbeschreibung",
      address: "Adresse",
      phone: "Telefon",
      email: "E-Mail",
    },
    // Testimonials
    testimonials: {
      title: "Was Unsere Gäste Sagen",
    },
    // Menu Page
    menu: {
      title: "Unsere Speisekarte",
      subtitle: "Entdecken Sie unsere authentischen indischen Gerichte",
      categories: {
        main: "Hauptgerichte",
        "menu-for-two": "Menü für Zwei Personen",
        starters: "Vorspeisen",
        "bread & rice": "Brood & Reis",
        sides: "Beilagen",
        dessert: "Desserts",
        drinks: "Getränke",
      },
      spiceLevel: {
        mild: "Mild",
        medium: "Mittel",
        hot: "Scharf",
        veryHot: "Sehr Scharf",
      },
      vegetarian: "Vegetarisch",
      vegan: "Vegan",
      glutenFree: "Glutenfrei",
    },
    // Order Page
    order: {
      title: "Online Bestellen",
      subtitle: "Frisches Essen zu Ihnen nach Hause geliefert",
      cart: "Ihr Warenkorb",
      emptyCart: "Ihr Warenkorb ist leer",
      subtotal: "Zwischensumme",
      deliveryFee: "Liefergebühr",
      tax: "MwSt. (9%)",
      total: "Gesamt",
      checkout: "Zur Kasse",
      deliveryType: {
        title: "Bestellart",
        delivery: "Lieferung",
        pickup: "Abholung",
      },
      customerInfo: {
        title: "Ihre Daten",
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer",
        address: "Straße und Hausnummer",
        city: "Stadt",
        postalCode: "Postleitzahl",
        notes: "Bestellnotizen (optional)",
      },
      payment: {
        title: "Zahlung",
        method: "Zahlungsmethode",
        card: "Kredit-/Debitkarte",
        ideal: "iDEAL",
        cash: "Barzahlung bei Lieferung",
        payNow: "Jetzt Bezahlen",
      },
      voucher: {
        title: "Haben Sie einen Gutschein?",
        placeholder: "Code eingeben",
        apply: "Anwenden",
        applied: "Gutschein angewendet!",
        invalid: "Ungültiger Code",
      },
      success: {
        title: "Bestellung Erfolgreich!",
        message:
          "Vielen Dank für Ihre Bestellung. Sie erhalten in Kürze eine Bestätigungs-E-Mail.",
        orderNumber: "Bestellnummer",
        estimatedTime: "Geschätzte Zeit",
        trackOrder: "Bestellung Verfolgen",
        backHome: "Zurück zur Startseite",
      },
    },
    // Reservation Page
    reservation: {
      title: "Tisch Reservieren",
      subtitle: "Buchen Sie Ihr Esserlebnis",
      form: {
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer",
        date: "Datum",
        time: "Uhrzeit",
        guests: "Anzahl der Gäste",
        tablePreference: "Tischpräferenz (optional)",
        notes: "Besondere Wünsche (optional)",
        submit: "Tisch Reservieren",
      },
      tableOptions: {
        any: "Keine Präferenz",
        window: "Fensterplatz",
        private: "Privater Bereich",
        terrace: "Terrasse",
      },
      success: {
        title: "Reservierung Bestätigt!",
        message:
          "Wir freuen uns darauf, Sie zu begrüßen. Eine Bestätigungs-E-Mail wurde gesendet.",
        details: "Reservierungsdetails",
      },
    },
    // Gift Voucher Page
    giftVoucher: {
      title: "Geschenkgutschein",
      subtitle: "Das perfekte Geschenk für Feinschmecker",
      selectAmount: "Betrag Wählen",
      customAmount: "Anderer Betrag",
      recipientInfo: {
        title: "Empfänger Information",
        name: "Name des Empfängers",
        email: "E-Mail des Empfängers",
        message: "Persönliche Nachricht (optional)",
      },
      buyerInfo: {
        title: "Ihre Information",
        name: "Ihr Name",
        email: "Ihre E-Mail",
      },
      purchase: "Gutschein Kaufen",
      success: {
        title: "Gutschein Gekauft!",
        message:
          "Der Gutschein wurde an die E-Mail-Adresse des Empfängers gesendet.",
        voucherCode: "Gutscheincode",
        instructions:
          "Dieser Code kann bei der Online-Bestellung oder im Restaurant verwendet werden.",
      },
    },
    // About Page
    about: {
      title: "Über dekleineman",
      subtitle: "Unsere Geschichte",
      story: {
        title: "Unsere Reise",
        p1: "Willkommen bei dekleineman, wo authentische indische Aromen auf niederländische Gastfreundschaft treffen. Unser Restaurant entstand aus der Leidenschaft, die reichen kulinarischen Traditionen Indiens ins Herz von Doetinchem zu bringen.",
        p2: "Jedes Gericht, das wir servieren, wird mit Liebe zubereitet, mit traditionellen Rezepten, die über Generationen weitergegeben wurden, und den feinsten Gewürzen, die direkt aus Indien importiert werden.",
        p3: "Unsere Mission ist einfach: unvergessliche kulinarische Erlebnisse zu schaffen, die Sie in die lebhaften Straßen Indiens versetzen, während Sie den Komfort unserer warmen, einladenden Atmosphäre genießen.",
      },
      chef: {
        title: "Treffen Sie Unseren Küchenchef",
        description:
          "Mit über 20 Jahren Erfahrung in der indischen Küche bringt unser Küchenchef authentische Aromen und innovative Techniken in jedes Gericht.",
      },
      values: {
        title: "Unsere Werte",
        quality: {
          title: "Qualität Zuerst",
          description:
            "Wir machen niemals Kompromisse bei der Qualität unserer Zutaten.",
        },
        tradition: {
          title: "Tradition",
          description: "Ehrung jahrhundertealter Rezepte und Kochmethoden.",
        },
        community: {
          title: "Gemeinschaft",
          description: "Verbindungen durch die Liebe zum Essen aufbauen.",
        },
      },
    },
    // Gallery Page
    gallery: {
      title: "Galerie",
      subtitle: "Eine visuelle Reise durch unser Restaurant",
      categories: {
        all: "Alle",
        food: "Essen",
        interior: "Interieur",
        events: "Veranstaltungen",
      },
    },
    // Footer
    footer: {
      quickLinks: "Schnelllinks",
      contactUs: "Kontakt",
      openingHours: "Öffnungszeiten",
      followUs: "Folgen Sie Uns",
      newsletter: {
        title: "Newsletter",
        subtitle: "Melden Sie sich für Sonderangebote an",
        placeholder: "Ihre E-Mail",
        subscribe: "Anmelden",
      },
      copyright: "© 2026 Entworfen und entwickelt von",
    },
    // Common
    common: {
      loading: "Laden...",
      error: "Etwas ist schief gelaufen",
      retry: "Erneut Versuchen",
      close: "Schließen",
      back: "Zurück",
      next: "Weiter",
      confirm: "Bestätigen",
      cancel: "Abbrechen",
      required: "Erforderlich",
      optional: "Optional",
      from: "ab",
      per: "pro",
      person: "Person",
      people: "Personen",
    },
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}
