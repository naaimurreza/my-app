import { MetadataRoute } from 'next'

/**
 * Enhanced Sitemap for Brain And Life Hospital
 * 
 * Features:
 * - Proper priority hierarchy (1.0 for homepage, decreasing for other pages)
 * - Realistic change frequencies based on content type
 * - Accurate lastModified dates
 * - Language alternates for English and Bengali
 * - SEO-optimized structure
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Use environment variable if available, fallback to production URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brainandlifehospital.com";
  
  // Calculate realistic dates for better SEO
  const now = new Date();
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const lastQuarter = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);

  // Define all pages with their metadata
  const pages = [
    // Homepage - Highest priority, updated most frequently
    {
      path: '',
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    
    // Main service pages - High priority, updated weekly
    {
      path: 'about',
      lastModified: lastWeek,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      path: 'services',
      lastModified: lastWeek,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      path: 'treatment',
      lastModified: lastWeek,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    
    // Contact page - High priority for conversions
    {
      path: 'contact',
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    
    // Leadership page
    {
      path: 'MD',
      lastModified: lastQuarter,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    
    // Doctor profile pages - Lower priority, rarely updated
    {
      path: 'muhitkamal',
      lastModified: lastQuarter,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      path: 'golamrabbani',
      lastModified: lastQuarter,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      path: 'mandal',
      lastModified: lastQuarter,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
  ];

  // Generate sitemap entries with language alternates
  return pages.map((page) => {
    const url = page.path ? `${baseUrl}/${page.path}` : baseUrl;
    
    return {
      url,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: url,
          bn: `${url}${page.path ? '?lang=bn' : '?lang=bn'}`,
        },
      },
    };
  });
}
