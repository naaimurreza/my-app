import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Brain And Life Hospital - Mental Health & Addiction Treatment',
    short_name: 'Brain & Life Hospital',
    description: 'Comprehensive mental health care and addiction treatment center in Bangladesh',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/assets/brainandlifelogo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
