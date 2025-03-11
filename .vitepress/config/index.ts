/// <reference types="@types/node" />

import { defineConfig } from 'vitepress'
import markdownItlinkAttributes from 'markdown-it-link-attributes'

import head from './head'
import theme from './theme'

import generateMeta from './hooks/generateMeta'
import generateFeed from './hooks/generateFeed'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QuickReceitas",

  description: "Receitas rápidas e fáceis de fazer",

  srcDir: 'src',
  
  lang: 'pt-BR',
  
  head,
  
  base: '/',
  
  themeConfig: theme,
  
  useWebFonts: true,

  lastUpdated: true,

  sitemap: {
    hostname: process.env.VITE_BASE_URL as string,
  },

  transformHead: async (context) => (
    generateMeta(context, process.env.VITE_BASE_URL as string)
  ),

  vite: {
    build: {
      minify: 'terser',
      cssMinify: 'lightningcss',
    }
  },
  
  // buildEnd: async (context) => {
  //   generateFeed(context, hostname)
  // },
  
  // markdown: {
  //   config: (md) => {
  //     // Add `noopener`, `noreferrer` and `nofollow` to external links
  //     // for security and SEO reasons.
  //     md.use(markdownItlinkAttributes, {
  //       attrs: {
  //         target: "_blank",
  //         rel: "noopener nofollow noreferrer",
  //       },
  //     })
  //   }
  // }

})
