import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prof. Dr. Mahadeb Chandra Mandal - Senior Consultant Psychiatry | Brain And Life Hospital",
  description:
    "Meet Prof. Dr. Mahadeb Chandra Mandal, Senior Consultant in Psychiatry & Mental Health at Brain And Life Hospital. MBBS, MD (Psychiatry), FCPS qualified psychiatrist with extensive experience in clinical psychiatry, cognitive behavioral therapy, and medical education. Former Consultant at National Institute of Mental Health and Associate Professor at BSMMU.",
  keywords: [
    "Dr. Mahadeb Chandra Mandal",
    "Prof. Dr. Mahadeb Mandal",
    "Dr. Mahadeb Mandal",
    "psychiatrist Bangladesh",
    "psychiatrist Dhaka",
    "senior consultant psychiatry",
    "mental health specialist",
    "psychiatric care",
    "cognitive behavioral therapy",
    "adult psychiatry",
    "MD Psychiatry",
    "FCPS psychiatrist",
    "Brain And Life Hospital psychiatrist",
    "National Institute of Mental Health",
    "BSMMU psychiatry",
    "Dhaka Medical College Hospital",
    "mood disorders treatment",
    "anxiety treatment",
    "psychiatric consultation",
    // Bengali keywords
    "ড. মহাদেব চন্দ্র মণ্ডল",
    "প্রফেসর ড. মহাদেব চন্দ্র মণ্ডল",
    "ড. মহাদেব মণ্ডল",
    "মনোরোগ বিশেষজ্ঞ বাংলাদেশ",
    "মনোরোগ বিশেষজ্ঞ ঢাকা",
    "সিনিয়র কনসালটেন্ট মনোরোগবিদ্যা",
    "মানসিক স্বাস্থ্য বিশেষজ্ঞ",
    "মনোরোগবিদ্যা সেবা",
    "কগনিটিভ বিহেভিওরাল থেরাপি",
    "প্রাপ্তবয়স্ক মনোরোগবিদ্যা",
    "এমডি মনোরোগবিদ্যা",
    "এফসিপিএস মনোরোগ বিশেষজ্ঞ",
    "ব্রেইন অ্যান্ড লাইফ হাসপাতাল মনোরোগ বিশেষজ্ঞ",
    "জাতীয় মানসিক স্বাস্থ্য ইনস্টিটিউট",
    "বিএসএমএমইউ মনোরোগবিদ্যা",
    "ঢাকা মেডিকেল কলেজ হাসপাতাল",
    "মুড ডিসঅর্ডার চিকিৎসা",
    "উদ্বেগ চিকিৎসা",
    "মনোরোগ পরামর্শ",
  ],
  openGraph: {
    title: "Prof. Dr. Mahadeb Chandra Mandal - Senior Consultant Psychiatry | Brain And Life Hospital",
    description:
      "Meet Prof. Dr. Mahadeb Chandra Mandal, Senior Consultant in Psychiatry & Mental Health. MBBS, MD (Psychiatry), FCPS qualified psychiatrist with extensive experience in clinical psychiatry and cognitive behavioral therapy.",
    url: "https://brainandlifehospital.com/mandal",
    siteName: "Brain And Life Hospital",
    images: [
      {
        url: "/assets/mondol.png",
        width: 1200,
        height: 630,
        alt: "Prof. Dr. Mahadeb Chandra Mandal - Senior Consultant Psychiatry",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Dr. Mahadeb Chandra Mandal - Senior Consultant Psychiatry",
    description:
      "MBBS, MD (Psychiatry), FCPS qualified psychiatrist with extensive experience in clinical psychiatry and cognitive behavioral therapy.",
    images: ["/assets/mondol.png"],
  },
  alternates: {
    canonical: "https://brainandlifehospital.com/mandal",
    languages: {
      en: "https://brainandlifehospital.com/mandal",
      bn: "https://brainandlifehospital.com/mandal",
      "x-default": "https://brainandlifehospital.com/mandal",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nosnippet: false,
    },
  },
  authors: [{ name: "Brain And Life Hospital" }],
  creator: "Brain And Life Hospital",
  publisher: "Brain And Life Hospital",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
