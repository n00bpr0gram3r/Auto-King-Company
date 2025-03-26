import { PrerenderConfig } from '@nguniversal/builders';

export default {
  routes: [
    '/',
    '/about',
    '/services',
    '/booking',
    '/contact',
    '/get-quote',
    '/services/diagnostic',
    '/services/ac-service',
    '/services/mechanical-repair',
    '/ar',
    '/ar/about',
    '/ar/services',
    '/ar/booking',
    '/ar/contact',
    '/ar/get-quote',
    '/ar/services/diagnostic',
    '/ar/services/ac-service',
    '/ar/services/mechanical-repair'
  ],
  sitemap: {
    host: 'https://autokingcompany.com',
    changeFreq: 'weekly',
    priority: 0.8
  }
} as PrerenderConfig; 