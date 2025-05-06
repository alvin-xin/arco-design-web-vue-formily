import { defineConfig } from 'vitepress'
import path from 'path'
import { generateSidebar } from './utils/generateSidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        'arco-vue-formily': path.resolve(__dirname, '../../src')
      }
    }
  },
  title: "Arco Design Vue Formily",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: generateSidebar(),
    // 自动生成的侧边栏配置

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
