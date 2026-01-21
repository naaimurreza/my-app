"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HreflangTags() {
  const pathname = usePathname();
  const baseUrl = "https://brainandlifehospital.com";
  const currentUrl = `${baseUrl}${pathname === "/" ? "" : pathname}`;

  useEffect(() => {
    // Remove existing hreflang tags if any
    const existingTags = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingTags.forEach((tag) => tag.remove());

    // Add hreflang tags
    const head = document.head;

    // English version
    const enLink = document.createElement("link");
    enLink.rel = "alternate";
    enLink.hreflang = "en";
    enLink.href = currentUrl;
    head.appendChild(enLink);

    // Bengali version
    const bnLink = document.createElement("link");
    bnLink.rel = "alternate";
    bnLink.hreflang = "bn";
    bnLink.href = currentUrl;
    head.appendChild(bnLink);

    // Default/x-default
    const defaultLink = document.createElement("link");
    defaultLink.rel = "alternate";
    defaultLink.hreflang = "x-default";
    defaultLink.href = currentUrl;
    head.appendChild(defaultLink);

    return () => {
      // Cleanup on unmount
      enLink.remove();
      bnLink.remove();
      defaultLink.remove();
    };
  }, [pathname, currentUrl]);

  return null;
}
