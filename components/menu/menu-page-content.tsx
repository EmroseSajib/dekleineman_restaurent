"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { menuCategories, menuItems } from "@/lib/data/menu";
import { useI18n } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { MenuItemCard } from "./menu-item-card";

export function MenuPageContent() {
  const { locale, t } = useI18n();

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubcategory, setActiveSubcategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showVegetarianOnly, setShowVegetarianOnly] = useState(false);

  const subcategoryLabels = {
    soup: { en: "Soups", nl: "Soep", de: "Suppe" },
    salads: { en: "Salads", nl: "Salades", de: "Salate" },
    biryani: { en: "Biryani", nl: "Biryani", de: "Biryani" },
    curry: { en: "Curry", nl: "Curry", de: "Curry" },
    tandoori: { en: "Tandoori", nl: "Tandoori", de: "Tandoori" },
    chicken: { en: "Chicken", nl: "Kip", de: "Hähnchen" },
    vegetarian: { en: "Vegetarian", nl: "Vegetarisch", de: "Vegetarisch" },
    drinks: { en: "Drinks", nl: "Dranken", de: "Getränke" },
    other: { en: "Other", nl: "Overig", de: "Andere" },
    all: { en: "All", nl: "Alles", de: "Alle" },
  };

  const categoryLabels = {
    all: locale === "nl" ? "Alles" : locale === "de" ? "Alle" : "All",
    starters: t.menu.categories.starters,
    main: t.menu.categories.main,
    bread: t.menu.categories.bread,
    sides: t.menu.categories.sides,
    dessert: t.menu.categories.dessert,
    drinks: t.menu.categories.drinks,
  };

  function handleCategoryChange(category) {
    setActiveCategory(category);
    setActiveSubcategory("all");
  }

  const availableSubcategories = useMemo(() => {
    let items = [...menuItems];

    if (activeCategory !== "all") {
      items = items.filter((item) => item.category === activeCategory);
    }

    const subs = [...new Set(items.map((item) => item.subcategory || "other"))];

    return subs;
  }, [activeCategory]);

  const filteredItems = useMemo(() => {
    let items = [...menuItems];

    // Filter by category
    if (activeCategory !== "all") {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Filter by subcategory
    if (activeSubcategory !== "all") {
      items = items.filter(
        (item) => (item.subcategory || "other") === activeSubcategory,
      );
    }

    // Filter vegetarian
    if (showVegetarianOnly) {
      items = items.filter((item) => item.dietary?.includes("vegetarian"));
    }

    // Search by name + description
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      items = items.filter((item) => {
        return (
          item.name[locale].toLowerCase().includes(query) ||
          item.description[locale].toLowerCase().includes(query)
        );
      });
    }

    return items;
  }, [
    activeCategory,
    activeSubcategory,
    searchQuery,
    showVegetarianOnly,
    locale,
  ]);

  const groupedItems = useMemo(() => {
    const groups = {};

    filteredItems.forEach((item) => {
      const cat = item.category;
      const sub = item.subcategory || "other";

      if (!groups[cat]) groups[cat] = {};
      if (!groups[cat][sub]) groups[cat][sub] = [];
      groups[cat][sub].push(item);
    });

    return groups;
  }, [filteredItems]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24 lg:pt-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.menu.title}
          </h1>
          <p className="text-xl text-amber-100/80">{t.menu.subtitle}</p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="sticky top-16 lg:top-24 z-40 bg-white/95 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="lg:grid flex flex-col gap-5 grid-cols-8  ">
            {/* Category tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide  col-span-6">
              <button
                onClick={() => handleCategoryChange("all")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                  activeCategory === "all"
                    ? "bg-amber-500 text-white"
                    : "bg-amber-100 text-amber-800 hover:bg-amber-200",
                )}
              >
                {categoryLabels.all}
              </button>

              {menuCategories.map(({ key }) => (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                    activeCategory === key
                      ? "bg-amber-500 text-white"
                      : "bg-amber-100 text-amber-800 hover:bg-amber-200",
                  )}
                >
                  {categoryLabels[key]}
                </button>
              ))}
            </div>
            <div className="col-span-2">
              <div className="flex flex-col md:flex-row gap-4 mb-4  justify-end">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={
                      locale === "nl"
                        ? "Zoek gerechten..."
                        : locale === "de"
                          ? "Gerichte suchen..."
                          : "Search dishes..."
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Subcategory tabs */}
          {availableSubcategories.length > 0 && (
            <div className="flex gap-2 overflow-x-auto pt-2 scrollbar-hide">
              <button
                onClick={() => setActiveSubcategory("all")}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors border",
                  activeSubcategory === "all"
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-green-700 border-green-300 hover:bg-green-50",
                )}
              >
                {subcategoryLabels.all[locale]}
              </button>

              {availableSubcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(sub)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors border",
                    activeSubcategory === sub
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-green-700 border-green-300 hover:bg-green-50",
                  )}
                >
                  {subcategoryLabels[sub]?.[locale] || sub}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              {locale === "nl"
                ? "Geen gerechten gevonden"
                : locale === "de"
                  ? "Keine Gerichte gefunden"
                  : "No dishes found"}
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(groupedItems).map(([category, subGroups]) => (
              <section key={category} id={category}>
                {activeCategory === "all" && (
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-2xl font-bold text-amber-900">
                      {categoryLabels[category]}
                    </h2>
                    <div className="flex-1 h-px bg-amber-200" />
                    <Badge
                      variant="secondary"
                      className="bg-amber-100 text-amber-800"
                    >
                      {
                        filteredItems.filter(
                          (item) => item.category === category,
                        ).length
                      }{" "}
                      {locale === "nl"
                        ? "gerechten"
                        : locale === "de"
                          ? "Gerichte"
                          : "dishes"}
                    </Badge>
                  </div>
                )}

                {Object.entries(subGroups).map(([sub, items]) => (
                  <div key={sub} className="mb-8">
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">
                      {subcategoryLabels[sub]?.[locale] || sub}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {items.map((item) => (
                        <MenuItemCard key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        )}
      </div>

      {/* Dietary legend */}
      <div className="container mx-auto px-4 py-8 border-t border-amber-200">
        <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98A4 4 0 117.5 4a4.002 4.002 0 017.5 1.5 4 4 0 011.5 3.48V12a3.5 3.5 0 01-3.5 3.5h-7z" />
              </svg>
            </div>
            <span>{t.menu.vegetarian}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                />
              </svg>
            </div>
            <span>{t.menu.glutenFree}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
