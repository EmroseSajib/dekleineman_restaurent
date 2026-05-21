import { Gift } from "lucide-react";

// app/about/page.jsx
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24 lg:pt-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Gift className="h-16 w-16 mx-auto mb-4 text-amber-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          {/* <p className="text-xl text-amber-100/80">{t.giftVoucher.subtitle}</p> */}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <section className="mx-auto max-w-5xl px-4 py-16">
          {/* Hero heading */}
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            De Kleine Man – Indian Restaurant in Doetinchem
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Authentic Indian flavours, a cozy atmosphere, and warm hospitality –
            all in the heart of Doetinchem.
          </p>

          {/* Main content grid */}
          <div className="mt-10 grid gap-10 md:grid-cols-[2fr,1fr]">
            {/* Left column: story */}
            <div className="space-y-6 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Welcome to De Kleine Man
                </h2>
                <p className="mt-2">
                  De Kleine Man is a cozy Indian restaurant located at
                  Heezenstraat 24, 7001BR Doetinchem, Netherlands. We bring the
                  warmth of Indian hospitality and the richness of traditional
                  spices together in a relaxed, modern setting.
                </p>
                <p className="mt-2">
                  Our menu is inspired by classic Indian dishes – from aromatic
                  curries and tandoori specialties to comforting vegetarian
                  options – all prepared with fresh ingredients and authentic
                  spices. Whether you&apos;re joining us for a quiet dinner,
                  celebrating with friends, or ordering from home, our goal is
                  simple: good food, good mood, and a welcoming atmosphere.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Our Story
                </h2>
                <p className="mt-2">
                  De Kleine Man was created with one idea in mind: to make real
                  Indian flavours accessible to everyone in Doetinchem. What
                  started as a passion for cooking and hosting has grown into a
                  place where guests can slow down, share a meal, and enjoy the
                  simple pleasure of good food.
                </p>
                <p className="mt-2">
                  Every dish is prepared with care, and every guest is treated
                  like family. We&apos;re proud to be part of the local
                  community and love seeing familiar faces return again and
                  again.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  What We Offer
                </h2>
                <ul className="mt-2 space-y-2 list-disc pl-5">
                  <li>
                    <span className="font-medium">Dine-In Experience:</span>{" "}
                    Enjoy a warm, intimate setting with friendly service and
                    carefully cooked Indian dishes.
                  </li>
                  <li>
                    <span className="font-medium">Online Ordering:</span> Prefer
                    to stay in? Order your favourite dishes online and enjoy De
                    Kleine Man at home.
                  </li>
                  <li>
                    <span className="font-medium">Table Reservations:</span>{" "}
                    Planning a dinner with family, friends, or colleagues?
                    Reserve a table in advance so everything is ready when you
                    arrive.
                  </li>
                  <li>
                    <span className="font-medium">Gift Vouchers:</span> Share
                    the taste of India with someone special. Our gift vouchers
                    are a perfect present for birthdays, anniversaries, or
                    thank-you gifts.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Our Promise
                </h2>
                <p className="mt-2">
                  We&apos;re committed to serving honest, flavourful Indian
                  food, providing a relaxed and friendly atmosphere, and making
                  every visit feel a little bit special. Whether it&apos;s your
                  first time trying Indian food or you&apos;re already a big
                  fan, De Kleine Man is here to give you a taste of India in
                  Doetinchem.
                </p>
              </div>
            </div>

            {/* Right column: contact / info card */}
            <aside className="space-y-4">
              <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 text-sm text-amber-900">
                <h3 className="text-base font-semibold text-amber-900">
                  Visit us
                </h3>
                <p className="mt-2 font-medium">De Kleine Man</p>
                <p className="text-[13px] leading-relaxed">
                  Heezenstraat 24
                  <br />
                  7001BR Doetinchem
                  <br />
                  Netherlands
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-800">
                <h3 className="text-base font-semibold text-slate-900">
                  Contact & Reservations
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed">
                  Phone:{" "}
                  <a
                    href="tel:+31850662313"
                    className="font-medium text-amber-700 hover:underline"
                  >
                    +31 85 066 23 13
                  </a>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:restaurantdekleineman@gmail.com"
                    className="font-medium text-amber-700 hover:underline"
                  >
                    restaurantdekleineman@gmail.com
                  </a>
                </p>
                <p className="mt-3 text-[13px] text-slate-600">
                  For reservations, group bookings, or questions about gift
                  vouchers, feel free to reach out by phone or email.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-[13px] text-slate-700">
                <h3 className="text-base font-semibold text-slate-900">
                  Order online
                </h3>
                <p className="mt-2">
                  You can enjoy De Kleine Man at home too. Check our online
                  ordering options on our website or contact us directly for
                  more information.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}
