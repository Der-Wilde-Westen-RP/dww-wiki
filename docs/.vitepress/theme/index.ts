// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import StatusBadge from "./StatusBadge.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('StatusBadge', StatusBadge)
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h(StatusBadge)
    })
  }
} satisfies Theme
