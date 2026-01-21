"use client";

import { useLanguage } from "../_contexts/LanguageContext";
import { useEffect } from "react";

export default function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language === "bn" ? "bn" : "en";
  }, [language]);

  return <>{children}</>;
}
