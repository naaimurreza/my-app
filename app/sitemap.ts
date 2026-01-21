import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brainandlifehospital.com";
  const currentDate = new Date();
  
  return [
    { 
      url: baseUrl, 
      lastModified: currentDate, 
      changeFrequency: 'weekly', 
      priority: 1.0 
    },
    { 
      url: `${baseUrl}/about`, 
      lastModified: currentDate, 
      changeFrequency: 'monthly', 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/services`, 
      lastModified: currentDate, 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/contact`, 
      lastModified: currentDate, 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/treatment`, 
      lastModified: currentDate, 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/MD`, 
      lastModified: currentDate, 
      changeFrequency: 'monthly', 
      priority: 0.7 
    },
    { 
      url: `${baseUrl}/muhitkamal`, 
      lastModified: currentDate, 
      changeFrequency: 'monthly', 
      priority: 0.6 
    },
    { 
      url: `${baseUrl}/golamrabbani`, 
      lastModified: currentDate, 
      changeFrequency: 'monthly', 
      priority: 0.6 
    },
    { 
      url: `${baseUrl}/mandal`, 
      lastModified: currentDate, 
      changeFrequency: 'monthly', 
      priority: 0.6 
    },
  ];
}