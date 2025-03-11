import { h, defineAsyncComponent } from 'vue'

import DefaultTheme from 'vitepress/theme'

import LazyLoad from './components/LazyLoad.vue'

import './custom.css'

// Lazy load dos componentes
// const Clerk = defineAsyncComponent(() => import('./Clerk.vue'))
// const Favorite = defineAsyncComponent(() => import('./Favorite.vue'))
// const CookieAdvice = defineAsyncComponent(() => import('./CookieAdvice.vue'))

// Lazy load do Clerk Plugin
// const loadClerkPlugin = async (app) => {
//   const { clerkPlugin } = await import('@clerk/vue')
//   const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

//   if (!PUBLISHABLE_KEY) {
//     throw new Error('Add your Clerk Publishable Key to the .env.local file')
//   }

//   // app.use(clerkPlugin, { publishableKey: PUBLISHABLE_KEY })
// }

export default {
  ...DefaultTheme,

  
  async enhanceApp({ app }) {
    // Carrega o Clerk Plugin apenas quando necessário
    // await loadClerkPlugin(app)
    
    // register your custom global components
    // app.component('Favorite', Favorite)
    // app.component('CookieAdvice', CookieAdvice)
    // app.component('LazyLoad', LazyLoad)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 'nav-bar-content-after': () => h(Clerk),
      // 'layout-bottom': () => h(CookieAdvice),
      // 'doc-before': () => h(Favorite)
      // 'layout-bottom': () => h(LazyLoad)
    })
  }
}