"use client";

import { CalendarDays, Gift, PartyPopper, X } from "lucide-react";
import { useState } from "react";

export function HolidayClosedPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/70 p-3 backdrop-blur-sm sm:p-5">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="holiday-title"
        className="relative my-auto w-full max-w-md max-h-[calc(100dvh-24px)] overflow-y-auto overscroll-contain rounded-2xl bg-white text-center shadow-2xl sm:max-h-[90dvh] sm:rounded-3xl"
      >
        {/* Christmas Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-950 px-4 pb-7 pt-9 text-white sm:px-6 sm:pb-8 sm:pt-10">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white sm:right-4 sm:top-4"
            aria-label="Close popup"
          >
            <X size={20} />
          </button>

          <div className="absolute left-4 top-4 text-xl sm:left-5 sm:top-5 sm:text-2xl">
            ❄️
          </div>

          <div className="absolute right-10 top-8 text-lg sm:right-12 sm:top-10 sm:text-xl">
            ✨
          </div>

          <div className="absolute bottom-3 left-6 text-lg sm:bottom-4 sm:left-8 sm:text-xl">
            ⭐
          </div>

          <div className="absolute bottom-4 right-6 text-xl sm:bottom-5 sm:right-8 sm:text-2xl">
            ❄️
          </div>

          <div className="mb-2 text-5xl sm:mb-3 sm:text-6xl">🎄</div>

          <div className="mb-2 inline-block rounded-full border border-yellow-300/40 bg-yellow-400/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-yellow-300 sm:px-4 sm:text-xs">
            Christmas Special
          </div>

          <h2
            id="holiday-title"
            className="text-2xl font-extrabold tracking-tight sm:text-3xl"
          >
            Fijne Kerstdagen!
          </h2>

          <p className="mt-2 text-xs text-green-100 sm:text-sm">
            Vier de feestdagen samen met ons ❤️
          </p>
        </div>

        {/* Main Content */}
        <div className="px-4 py-5 sm:px-6 sm:py-7">
          <div className="mb-4 flex justify-center sm:mb-5">
            <div className="rounded-2xl bg-red-50 p-3 sm:p-4">
              <Gift size={32} className="text-red-600 sm:h-9 sm:w-9" />
            </div>
          </div>

          <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
            Belangrijke mededeling!
          </h3>

          <p className="text-sm leading-6 text-gray-600 sm:text-[15px] sm:leading-7">
            Beste klanten,
            <br />
            <br />
            Wij nemen alvast bestellingen aan voor{" "}
            <strong className="text-green-800">
              eerste en tweede kerstdag en zondag 27 december.
            </strong>
            <br />
            <br />U kunt bij ons terecht voor:
          </p>

          {/* Services */}
          <div className="my-4 grid grid-cols-3 gap-2 sm:my-5 sm:gap-3">
            <div className="flex min-w-0 flex-col items-center justify-center rounded-xl bg-green-50 px-1 py-3 sm:p-3">
              <span className="text-xl sm:text-2xl">🍽️</span>
              <p className="mt-1 text-[10px] font-semibold text-green-900 sm:text-xs">
                Bestellingen
              </p>
            </div>

            <div className="flex min-w-0 flex-col items-center justify-center rounded-xl bg-red-50 px-1 py-3 sm:p-3">
              <CalendarDays className="text-red-600" size={24} />
              <p className="mt-1 text-[10px] font-semibold text-red-900 sm:text-xs">
                Reserveringen
              </p>
            </div>

            <div className="flex min-w-0 flex-col items-center justify-center rounded-xl bg-yellow-50 px-1 py-3 sm:p-3">
              <PartyPopper className="text-yellow-600" size={24} />
              <p className="mt-1 text-[10px] font-semibold text-yellow-900 sm:text-xs">
                Catering
              </p>
            </div>
          </div>

          <p className="text-sm font-semibold leading-6 text-gray-700">
            Alvast een vrolijk kerstfeest! 🎄🎄
          </p>

          {/* Action Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-5 min-h-12 w-full rounded-xl bg-gradient-to-r from-green-800 to-green-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:from-green-900 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 active:scale-[0.98] sm:mt-6"
          >
            Begrepen ❤️
          </button>

          <p className="mt-3 text-xs text-gray-400 sm:mt-4">
            Bedankt voor uw vertrouwen!
          </p>
        </div>

        {/* Bottom Christmas Decoration */}
        <div className="h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-green-700" />
      </div>
    </div>
  );
}
