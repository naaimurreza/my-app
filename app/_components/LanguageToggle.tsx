"use client";

import { useLanguage } from "../_contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/50 hover:shadow-xl hover:shadow-sky-500/60 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white"
      aria-label="Toggle language"
      title={language === "en" ? "বাংলায় পরিবর্তন করুন" : "Change to English"}
    >
      <span className="text-lg font-semibold">
        {language === "en" ? "বাংলা" : "EN"}
      </span>
    </button>
  );
}
