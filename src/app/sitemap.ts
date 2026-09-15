import { MetadataRoute } from 'next'
import { services } from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://massagesbyels.com'
  
  const serviceUrls = services.flatMap(service => {
    const urls = [
      {
        url: `${baseUrl}/behandelingen/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/behandelingen/${service.slug}/info`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }
    ]
    
    if (service.options) {
      service.options.forEach(option => {
        if (option.slug !== service.slug) {
          urls.push({
            url: `${baseUrl}/behandelingen/${option.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
          })
          urls.push({
            url: `${baseUrl}/behandelingen/${option.slug}/info`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
          })
        }
      })
    }
    
    return urls
  })

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/over-els`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/boek`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...serviceUrls,
  ]
}
