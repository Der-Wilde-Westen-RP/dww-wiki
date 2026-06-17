// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import KeyboardBindings from "./KeyboardBindings.vue";
import StatusBadge from "./StatusBadge.vue";
import NavDivider from "./NavDivider.vue";


export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('KeyboardBindings', KeyboardBindings)
    app.component('StatusBadge', StatusBadge)
    app.component('NavDivider', NavDivider)
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  }
} satisfies Theme