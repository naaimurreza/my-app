import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brainandlifehospital.com";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
          bn: baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/about`,
          bn: `${baseUrl}/about`,
        },
      },
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/services`,
          bn: `${baseUrl}/services`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/contact`,
          bn: `${baseUrl}/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/treatment`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/treatment`,
          bn: `${baseUrl}/treatment`,
        },
      },
    },
    {
      url: `${baseUrl}/MD`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/MD`,
          bn: `${baseUrl}/MD`,
        },
      },
    },
    {
      url: `${baseUrl}/muhitkamal`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/muhitkamal`,
          bn: `${baseUrl}/muhitkamal`,
        },
      },
    },
    {
      url: `${baseUrl}/golamrabbani`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/golamrabbani`,
          bn: `${baseUrl}/golamrabbani`,
        },
      },
    },
    {
      url: `${baseUrl}/mandal`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/mandal`,
          bn: `${baseUrl}/mandal`,
        },
      },
    },
  ];
}
