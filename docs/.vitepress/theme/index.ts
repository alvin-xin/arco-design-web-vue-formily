import DefaultTheme from 'vitepress/theme'

import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
// import "../../../src/style.ts";

import DumiPreviewer from './dumi-previewer.vue'


export default {
  extends: DefaultTheme,
  // 注册全局组件，像在西装内袋放秘密武器
  enhanceApp({ app }) {
    app.use(ArcoVue);
    app.use(ArcoVueIcon);
    
    app.component('dumi-previewer', DumiPreviewer)
  }
}