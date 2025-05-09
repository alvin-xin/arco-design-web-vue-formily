<template>
<!-- <client-only> -->
  <section class="dumi-previewer">
    <div class="dumi-previewer-demo">
      <template v-if="demoPath && demo">
        <component :is="demo" />
      </template>

      <template v-else>
        <slot name="demo"></slot>
      </template>
    </div>

    <div class="dumi-previewer-actions">
      <div>
        <!-- <a-button type="text" @click="openCodeSandBox"><template #icon><icon-codepen /></template></a-button> -->
      </div>

      <div>

        
        <a-button v-if="copied" type="text"><template #icon><icon-check /></template></a-button>
        <a-button v-else type="text" @click="handleCopy"><template #icon><icon-copy /></template></a-button>
        <a-button type="text" @click="handleCollapse"><template #icon><icon-code /></template></a-button>
      </div>
    </div>

    <div v-show="!innerCollapsed" class="dumi-previewer-source">
      <div v-html="highlightCode" class="language-vue extra-class" />
    </div>
  </section>
  <!-- </client-only> -->
</template>

<script setup lang="js">
import { ref, onMounted, computed, shallowRef } from 'vue'
import copy from 'copy-to-clipboard'
import highlight from './highlight'
// import { createCodeSandBox } from './createCodeSandBox'


const modules = import.meta.glob('../../demos/**/*.vue')
const rawModules = import.meta.glob('../../demos/**/*.vue', { eager: true, as: 'raw' })
// console.log("rawModules: ", rawModules);
// console.log("modules: ", modules);


const props = defineProps({
  code: {
    type: String,
    default: '',
  },

  demoPath: {
    type: String,
    default: '',
  },
  collapsed: {
    type: Boolean,
    default: true,
  },
})

const innerCollapsed = ref(props.collapsed)
const copied = ref(false)
const demoStr = ref('')
const decodedCode = computed(() => props.code || demoStr.value)
const highlightCode = computed(() => highlight(decodedCode.value, 'vue'))
const demo = shallowRef(null)


onMounted(() => {
  if(props.demoPath) {
    modules[`../../demos/${props.demoPath}.vue`]().then((module) => {
      demo.value = module.default
    })
    demoStr.value = rawModules[`../../demos/${props.demoPath}.vue`]
  }
})





const handleCollapse = () => {
  innerCollapsed.value = !innerCollapsed.value
}

let timerId = null

const handleCopy = () => {
  // 复制代码到剪贴板
  copy(decodedCode.value)
  copied.value = true

  // 2秒后重置复制状态
  clearTimeout(timerId)
  timerId = setTimeout(() => {
    copied.value = false
  }, 2000)
}

// const openCodeSandBox = () => {
//   createCodeSandBox(demoStr.value)
// }
</script>

<style lang="less">
.dumi-previewer {
  background-color: #fff;
  border: 1px solid #ebedf1;
  border-radius: 1px;

  .dumi-previewer-demo {
    padding: 40px 24px;
  }

  .dumi-previewer-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px dashed #ebedf1;
    height: 40px;
    padding: 0 1em;

    .dumi-previewer-actions__icon {
      width: 16px;
      height: 16px;
      padding: 8px 4px;
      opacity: 0.4;
      cursor: pointer;
      transition: opacity .3s;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  .dumi-previewer-source {
    border-top: 1px dashed #ebedf1;

    div[class*="language-"] {
      background-color: #f9fafb;
      border-radius: 0;
    }

    pre[class*="language-"] {
      margin: 0 !important;
    }

    pre[class*="language-"] code {
      color: #000 !important;
    }

    .token.cdata,.token.comment,.token.doctype,.token.prolog {
      color: #708090
    }

    .token.punctuation {
      color: #999
    }

    .token.namespace {
      opacity: .7
    }

    .token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag {
      color: #905
    }

    .token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string {
      color: #690
    }

    .language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url {
      color: #9a6e3a;
      background: hsla(0,0%,100%,.5)
    }

    .token.atrule,.token.attr-value,.token.keyword {
      color: #07a
    }

    .token.class-name,.token.function {
      color: #dd4a68
    }

    .token.important,.token.regex,.token.variable {
      color: #e90
    }
  }
}
</style>
