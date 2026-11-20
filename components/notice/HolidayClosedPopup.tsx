"use client";

import { CalendarDays, Gift, PartyPopper, X } from "lucide-react";
import { useState } from "react";

export function HolidayClosedPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white text-center shadow-2xl">
        {/* Christmas Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-950 px-6 pb-8 pt-10 text-white">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-white/15 p-2 text-white transition hover:bg-white/30"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="absolute left-5 top-5 text-2xl">❄️</div>
          <div className="absolute right-12 top-10 text-xl">✨</div>
          <div className="absolute bottom-4 left-8 text-xl">⭐</div>
          <div className="absolute bottom-5 right-8 text-2xl">❄️</div>

          <div className="mb-3 text-6xl">🎄</div>

          <div className="mb-2 inline-block rounded-full border border-yellow-300/40 bg-yellow-400/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-yellow-300">
            Christmas Special
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight">
            Fijne Kerstdagen!
          </h2>

          <p className="mt-2 text-sm text-green-100">
            Vier de feestdagen samen met ons ❤️
          </p>
        </div>

        {/* Main Content */}
        <div className="px-6 py-7">
          <div className="mb-5 flex justify-center">
            <div className="rounded-2xl bg-red-50 p-4">
              <Gift size={34} className="text-red-600" />
            </div>
          </div>

          <h3 className="mb-3 text-xl font-bold text-gray-900">
            Belangrijke mededeling!
          </h3>

          <p className="text-[15px] leading-7 text-gray-600">
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

          <div className="my-5 grid grid-cols-3 gap-2">
            <div className="rounded-xl bg-green-50 p-3">
              <span className="text-2xl">🍽️</span>
              <p className="mt-1 text-xs font-semibold text-green-900">
                Bestellingen
              </p>
            </div>

            <div className="rounded-xl bg-red-50 p-3">
              <CalendarDays className="mx-auto text-red-600" size={25} />
              <p className="mt-1 text-xs font-semibold text-red-900">
                Reserveringen
              </p>
            </div>

            <div className="rounded-xl bg-yellow-50 p-3">
              <PartyPopper className="mx-auto text-yellow-600" size={25} />
              <p className="mt-1 text-xs font-semibold text-yellow-900">
                Catering
              </p>
            </div>
          </div>

          <p className="text-sm font-semibold leading-6 text-gray-700">
            Alvast een vrolijk kerstfeest! 🎄🎄
          </p>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-green-800 to-green-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] hover:from-green-900 hover:to-green-700"
          >
            Begrepen ❤️
          </button>

          <p className="mt-4 text-xs text-gray-400">
            Bedankt voor uw vertrouwen!
          </p>
        </div>

        {/* Bottom Christmas Decoration */}
        <div className="h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-green-700" />
      </div>
    </div>
  );
}
