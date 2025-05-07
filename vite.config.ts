import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 启用Vue3的模板编译支持
    vue(),
    // 启用Vue3的JSX支持
    vueJsx()
  ],
})
