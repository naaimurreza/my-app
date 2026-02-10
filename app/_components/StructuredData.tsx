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

  // Enhanced breadcrumb schema with better path handling
  const getBreadcrumbs = () => {
    const items = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
    ];

    if (pathname !== "/") {
      const segments = pathname.split("/").filter(Boolean);
      let currentPath = "";

      segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const position = index + 2;
        let name = segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        // Special handling for common pages
        const pageNames: Record<string, string> = {
          about: "About Us",
          services: "Services",
          treatment: "Treatment",
          contact: "Contact",
          articles: "Articles",
          MD: "Managing Director",
          muhitkamal: "Prof. Dr. Mohit Kamal",
          golamrabbani: "Prof. Dr. Golam Rabbani",
          mandal: "Prof. Dr. Mahadeb Chandra Mandal",
        };

        if (pageNames[segment]) {
          name = pageNames[segment];
        }

        items.push({
          "@type": "ListItem",
          position,
          name,
          item: `${baseUrl}${currentPath}`,
        });
      });
    }

    return items;
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: getBreadcrumbs(),
  };

  // FAQ Schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Brain And Life Hospital provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brain And Life Hospital provides comprehensive mental health care including psychiatric consultations, addiction treatment, psychotherapy, counseling services, and 24/7 emergency support. We offer both inpatient and outpatient services tailored to individual needs.",
        },
      },
      {
        "@type": "Question",
        name: "What are the hospital's operating hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brain And Life Hospital operates 24/7, providing round-the-clock emergency psychiatric care and support services. Regular consultation hours may vary, so please contact us for appointments.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Brain And Life Hospital located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brain And Life Hospital is located at Crescent Plaza, 145/1 Green Road, Dhaka-1205, Bangladesh. We serve patients from across Bangladesh.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book an appointment by calling our helpline at +880 58150414, +880 29130270, or +880 29130269. You can also visit our contact page to send us a message or use our online contact form.",
        },
      },
      {
        "@type": "Question",
        name: "Does Brain And Life Hospital treat addiction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Brain And Life Hospital specializes in addiction treatment and substance abuse rehabilitation. We provide comprehensive treatment programs including medical intervention, psychological support, and family counseling for individuals struggling with addiction.",
        },
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
