import { defineConfig } from 'vitepress'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { generateSidebar } from './utils/generateSidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        'arco-design-web-vue-formily': path.resolve(__dirname, '../../src/index.ts')
      }
    },
    // plugins: [
    //   // 启用Vue3的模板编译支持
    //   vue(),
    //   // 启用Vue3的JSX支持
    //   vueJsx()
    // ],
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
