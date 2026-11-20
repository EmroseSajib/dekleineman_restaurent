import { CTASection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { HighlightsSection } from "@/components/home/highlights-section";
import { HoursSection } from "@/components/home/hours-section";
import { LocationSection } from "@/components/home/location-section";
import { PopularDishesSection } from "@/components/home/popular-dishes-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { HolidayClosedPopup } from "@/components/notice/HolidayClosedPopup";
import { OccasionBanner } from "@/components/ui/occasion-banner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dekleineman | Authentic Indian Restaurant in Doetinchem",
  description:
    "Experience authentic Indian cuisine at dekleineman in Doetinchem, Netherlands. Order online, reserve a table, or visit us for traditional tandoori, curries, and more.",
};

export default function HomePage() {
  return (
    <>
      <HolidayClosedPopup />

      {/* Occasion banner - configurable */}
      <div className="pt-16 lg:pt-24">
        <OccasionBanner
          isActive={true}
          occasion="default"
          // To change the banner, modify these props:
          // isActive={false} to hide
          // occasion="christmas" or "valentine" for other messages
          // customMessage="Your custom message here" for custom text
        />
      </div>

      <HeroSection />
      <HighlightsSection />
      {/* <PopularDishesSection /> */}
      <PopularDishesSection />
      {/* <PopularDishesClient /> */}
      <CTASection />
      <HoursSection />
      <LocationSection />
      <TestimonialsSection />
    </>
  );
}
