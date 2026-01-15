import { MetadataRoute } from 'next';
import { userAgent } from 'next/server';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://brainandlifehospital.com";
  return {
    rules: [
        {
        userAgent: '*',
        allow: '/',
        },
        {
            userAgent: 'Googlebot',
            allow: "/"
        }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}