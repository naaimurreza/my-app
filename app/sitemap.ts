import { MetadataRoute } from 'next';
import { userAgent } from 'next/server';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brainandlifehospital.com";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/treatment`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 }



  ];
}