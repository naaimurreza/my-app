"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BengaliSEO() {
  const pathname = usePathname();
  const baseUrl = "https://brainandlifehospital.com";

  useEffect(() => {
    // Bengali meta description
    const bnDesc = document.createElement("meta");
    bnDesc.name = "description";
    bnDesc.setAttribute("lang", "bn");
    bnDesc.content = "ব্রেইন অ্যান্ড লাইফ হাসপাতাল - বাংলাদেশের শীর্ষস্থানীয় মানসিক স্বাস্থ্য ও মাদকাসক্তি চিকিৎসা কেন্দ্র। বিশেষজ্ঞ মনোরোগ বিশেষজ্ঞ, ২৪/৭ জরুরি সহায়তা, এবং সহানুভূতিশীল যত্ন।";
    document.head.appendChild(bnDesc);

    // Bengali keywords
    const bnKeywords = document.createElement("meta");
    bnKeywords.name = "keywords";
    bnKeywords.setAttribute("lang", "bn");
    bnKeywords.content = "মানসিক স্বাস্থ্য হাসপাতাল, মনোরোগবিদ্যা সেবা, মাদকাসক্তি চিকিৎসা, মানসিক স্বাস্থ্য বাংলাদেশ, মনোরোগ বিশেষজ্ঞ ঢাকা, বিষণ্নতা চিকিৎসা, উদ্বেগ চিকিৎসা, মাদক পুনর্বাসন, মানসিক রোগ চিকিৎসা, সাইকোথেরাপি, কাউন্সেলিং সেবা, ২৪/৭ মানসিক স্বাস্থ্য সহায়তা, জরুরি মনোরোগবিদ্যা যত্ন";
    document.head.appendChild(bnKeywords);

    // Language meta tag
    const langTag = document.createElement("meta");
    langTag.httpEquiv = "content-language";
    langTag.content = "bn, en";
    document.head.appendChild(langTag);

    // Geographic targeting for Bangladesh
    const geoTag = document.createElement("meta");
    geoTag.name = "geo.region";
    geoTag.content = "BD";
    document.head.appendChild(geoTag);

    const geoPlacename = document.createElement("meta");
    geoPlacename.name = "geo.placename";
    geoPlacename.content = "Dhaka, Bangladesh";
    document.head.appendChild(geoPlacename);

    return () => {
      // Cleanup
      bnKeywords.remove();
      langTag.remove();
      bnDesc.remove();
      geoTag.remove();
      geoPlacename.remove();
    };
  }, [pathname]);

  return null;
}
