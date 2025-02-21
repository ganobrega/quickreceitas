import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { clerkPlugin } from '@clerk/vue'

import Clerk from './Clerk.vue'
import Favorite from './Favorite.vue'

import './custom.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file')
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.use(clerkPlugin, { publishableKey: PUBLISHABLE_KEY })
    app.component('Favorite', Favorite)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(Clerk),
      // 'doc-before': () => h(Favorite)
    })
  }
}