"use client";

import { X } from "lucide-react";
import { useState } from "react";

export function HolidayClosedPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="mb-4 text-4xl">🌴</div>

        <h2 className="mb-3 text-xl font-bold text-gray-900">
          Belangrijke mededeling
        </h2>

        <p className="leading-7 text-gray-600">
          Wij zijn gesloten wegens zomervakantie van{" "}
          <strong>10 t/m 17 augustus</strong>.
          <br />
          Vanaf <strong>18 augustus</strong> staan wij weer voor u klaar!
        </p>

        <p className="mt-4 text-sm font-medium text-gray-500">
          Bedankt voor uw geduld!
        </p>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-6 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Begrepen
        </button>
      </div>
    </div>
  );
}
