# TODO

- [ ] Create logo
- [ ] Integrate with [Clerk](https://clerk.com/docs/quickstarts/vue) with
    ```javascript
    // .vitepress/theme/index.js
    /** @type {import('vitepress').Theme} */
    export default {
    // ...
    async enhanceApp({ app }) {
        if (!import.meta.env.SSR) {
        const plugin = await import('plugin-that-access-window-on-import')
        app.use(plugin.default)
        }
    }
    }
    ```