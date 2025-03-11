import type { HeadConfig } from 'vitepress'

const head: HeadConfig[] = [
  ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['meta', { name: 'theme-color', content: '#06b6d4' }],
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ['meta', { name: 'author', content: 'Quick Receitas' }],
  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],

  ['meta', { name: 'application-name', content: 'QuickReceitas' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'QuickReceitas' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' }],
  ['link', { rel: 'icon', type: "image/png", sizes: '32x32', href: '/images/favicon-32x32.png' }],
  ['link', { rel: 'icon', type: "image/png", sizes: '16x16', href: '/images/favicon-16x16.png' }],

  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@quickreceitas' }],
  ['meta', { name: 'twitter:creator', content: '@quickreceitas' }],
  ['meta', { name: 'twitter:image:width', content: '800' }],
  ['meta', { name: 'twitter:image:height', content: '420' }],

  ['meta', { property: 'og:site_name', content: 'QuickReceitas' }],
  ['meta', { property: 'og:locale', content: 'pt_BR' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:image:width', content: '800' }],
  ['meta', { property: 'og:image:height', content: '420' }],
  ['meta', { property: 'og:image:type', content: 'image/png' }],
  ['meta', { property: 'og:image', content: `${process.env.VITE_BASE_URL}/images/og-image.png` }],
  ['script', { 
    src: 'https://www.googletagmanager.com/gtag/js?id=G-7EF2NVE4ZK',
    async: 'true',
    defer: 'true'
  }],

  ['script', {
    async: 'true',
    defer: 'true'
  }, `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-7EF2NVE4ZK', {
      'send_page_view': true,
      'transport_type': 'beacon',
      'cookie_flags': 'SameSite=None;Secure;Partitioned;',
      'anonymize_ip': true,
      'cookie_domain': 'none'
    });
  `]
]

export default head