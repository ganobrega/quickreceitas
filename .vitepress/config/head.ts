import type { HeadConfig } from "vitepress";

const hosts = {
  analytics: 'https://www.google-analytics.com',
  tagManager: 'https://www.googletagmanager.com',
  google: 'https://www.google.com',
  googleBr: 'https://www.google.com.br',
  cloudflareinsights: 'https://static.cloudflareinsights.com',
  iconify: 'https://api.iconify.design',
  
  // jsdelivr: 'https://cdn.jsdelivr.net',
  // googleFonts: 'https://fonts.googleapis.com',
  // googleStatic: 'https://fonts.gstatic.com',
  // googleFontsCss2: 'https://fonts.googleapis.com/css2*'
}

const trustedHosts = Object.values(hosts).join(' ')

const csp = [
  // Base policies
  "default-src 'self'",
  
  // Scripts
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'unsafe-hashes' " + trustedHosts,
  
  // Styles - permitir inline styles
  "style-src 'self' 'unsafe-inline' " + trustedHosts,
  
  // Images - permitir SVGs inline e data URLs
  "img-src 'self' data: blob: " + trustedHosts,
  
  // Fonts
  "font-src 'self' data: " + trustedHosts,
  
  // Connect
  "connect-src 'self' " + trustedHosts,
  
  // Frames
  "frame-src 'self' " + trustedHosts,
  
  // Objects
  "object-src 'self'",
  
  // Media
  "media-src 'self'",
  
  // Worker
  "worker-src 'self' blob:",
  
  // Manifest
  "manifest-src 'self'"
].join('; ')

const head: HeadConfig[] = [
  // Links
  ["link", { rel: "icon", type: "image/x-icon", href: "/images/favicon.ico" }],
  ["link", { rel: "manifest", href: "/manifest.json" }],
  
  ["link", { rel: "preconnect", href: hosts.cloudflareinsights }],
  ["link", { rel: "preconnect", href: hosts.tagManager }],
  // ["link", { rel: "preconnect", href: hosts.googleFonts }],
  // ["link", { rel: "preconnect", href: hosts.googleStatic }],
  // ["link", { rel: "preconnect", href: hosts.googleFontsCss2 }],
  // ["link", { rel: "stylesheet", href: hosts.googleFontsInter }],

  [
    "link",
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/images/apple-touch-icon.png",
    },
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/images/favicon-32x32.png",
    },
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/images/favicon-16x16.png",
    },
  ],

  // Metatags
  [
    "meta",
    {
      "http-equiv": "Content-Security-Policy",
      content: csp,
    },
  ],

  ["meta", { name: "theme-color", content: "#06b6d4" }],

  [
    "meta",
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  ],
  ["meta", { name: "author", content: "Quick Receitas" }],
  ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
  ["meta", { name: "application-name", content: "QuickReceitas" }],
  ["meta", { name: "mobile-web-app-title", content: "QuickReceitas" }],
  ["meta", { name: "mobile-web-app-capable", content: "yes" }],
  [
    "meta",
    { name: "mobile-web-app-status-bar-style", content: "default" },
  ],

  ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ["meta", { name: "twitter:site", content: "@quickreceitas" }],
  ["meta", { name: "twitter:creator", content: "@quickreceitas" }],
  ["meta", { name: "twitter:image:width", content: "800" }],
  ["meta", { name: "twitter:image:height", content: "420" }],

  ["meta", { property: "og:site_name", content: "QuickReceitas" }],
  [
    "meta",
    {
      property: "og:description",
      content: "Receitas rápidas e práticas para seu dia a dia",
    },
  ],
  ["meta", { property: "og:url", content: `${process.env.VITE_BASE_URL}` }],
  ["meta", { property: "og:locale", content: "pt_BR" }],
  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:image:width", content: "800" }],
  ["meta", { property: "og:image:height", content: "420" }],
  ["meta", { property: "og:image:type", content: "image/png" }],
  [
    "meta",
    { property: "og:image:alt", content: "QuickReceitas - Receitas práticas" },
  ],
  [
    "meta",
    {
      property: "og:image",
      content: `${process.env.VITE_BASE_URL}/images/og-image.png?v=1`,
    },
  ],

  // Scripts
  [
    "script",
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-7EF2NVE4ZK",
      async: "true",
      defer: "true",
    },
  ],

  [
    "script",
    {
      async: "true",
      defer: "true",
    },
    `
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
  `,
  ],
];

export default head;
