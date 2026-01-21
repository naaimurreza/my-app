export default function StructuredData({ pathname = "/" }: { pathname?: string }) {
  const baseUrl = "https://brainandlifehospital.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Brain And Life Hospital",
    alternateName: ["Brain And Life", "brain and life", "মানসিক রোগ ও মাদকাসক্তি চিকিৎসা কেন্দ্র"],
    description:
      "Brain And Life Hospital - Comprehensive mental health care and addiction treatment center in Bangladesh providing 24/7 emergency support, psychiatric care, and rehabilitation services. Brain And Life is your trusted partner for mental wellness.",
    description_bn: "ব্রেইন অ্যান্ড লাইফ হাসপাতাল - বাংলাদেশে ব্যাপক মানসিক স্বাস্থ্য সেবা এবং মাদকাসক্তি চিকিৎসা কেন্দ্র যা ২৪/৭ জরুরি সহায়তা, মনোরোগবিদ্যা সেবা এবং পুনর্বাসন সেবা প্রদান করে। ব্রেইন অ্যান্ড লাইফ আপনার মানসিক সুস্থতার বিশ্বস্ত অংশীদার।",
    url: baseUrl,
    logo: `${baseUrl}/assets/brainandlifelogo.png`,
    image: `${baseUrl}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Crescent Plaza, 145/1 Green Road",
      addressLocality: "Dhaka",
      postalCode: "1205",
      addressCountry: "BD",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+88058150414",
        contactType: "Emergency",
        areaServed: "BD",
        availableLanguage: ["Bengali", "English", "bn", "en"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+88029130270",
        contactType: "General Inquiry",
        areaServed: "BD",
      },
      {
        "@type": "ContactPoint",
        telephone: "+88029130269",
        contactType: "Appointment",
        areaServed: "BD",
      },
    ],
    sameAs: [
      "https://www.facebook.com/share/1DWSRRzXA3/",
      "https://youtube.com/@brainandlifehospital",
      "https://www.tiktok.com/@brain.and.life.hos",
    ],
    priceRange: "$$",
    medicalSpecialty: [
      "Psychiatry",
      "Mental Health",
      "Addiction Medicine",
      "Psychotherapy",
    ],
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
  };

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Brain And Life Hospital",
    alternateName: ["Brain And Life", "brain and life", "মানসিক রোগ ও মাদকাসক্তি চিকিৎসা কেন্দ্র"],
    description:
      "Brain And Life Hospital - Mental health hospital providing comprehensive psychiatric care, addiction treatment, and 24/7 emergency support services. Brain And Life offers expert mental health solutions.",
    description_bn: "ব্রেইন অ্যান্ড লাইফ হাসপাতাল - মানসিক স্বাস্থ্য হাসপাতাল যা ব্যাপক মনোরোগবিদ্যা সেবা, মাদকাসক্তি চিকিৎসা এবং ২৪/৭ জরুরি সহায়তা সেবা প্রদান করে। ব্রেইন অ্যান্ড লাইফ বিশেষজ্ঞ মানসিক স্বাস্থ্য সমাধান প্রদান করে।",
    url: baseUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Crescent Plaza, 145/1 Green Road",
      addressLocality: "Dhaka",
      postalCode: "1205",
      addressCountry: "BD",
    },
    telephone: "+88058150414",
    priceRange: "$$",
    availableLanguage: ["Bengali", "English", "bn", "en"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...(pathname !== "/"
        ? [
          {
            "@type": "ListItem",
            position: 2,
            name: pathname.split("/")[1].charAt(0).toUpperCase() +
              pathname.split("/")[1].slice(1),
            item: `${baseUrl}${pathname}`,
          },
        ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
