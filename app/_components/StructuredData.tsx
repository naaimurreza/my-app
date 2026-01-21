export default function StructuredData({ pathname = "/" }: { pathname?: string }) {
  const baseUrl = "https://brainandlifehospital.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Brain And Life Hospital",
    alternateName: "মানসিক রোগ ও মাদকাসক্তি চিকিৎসা কেন্দ্র",
    description:
      "Comprehensive mental health care and addiction treatment center in Bangladesh providing 24/7 emergency support, psychiatric care, and rehabilitation services.",
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
        availableLanguage: ["Bengali", "English"],
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
    description:
      "Mental health hospital providing comprehensive psychiatric care, addiction treatment, and 24/7 emergency support services.",
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
