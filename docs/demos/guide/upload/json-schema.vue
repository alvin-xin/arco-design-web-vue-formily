<template>
  <Form :form="form" :label-col="4" :wrapper-col="10">
    <SchemaField :schema="schema" />
    <FormButtonGroup align-form-item>
      <Submit @submit="onSubmit">提交</Submit>
    </FormButtonGroup>
  </Form>
</template>

<script lang="tsx">
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import {
  Form,
  FormItem,
  Upload,
  Submit,
  FormButtonGroup,
} from 'arco-design-web-vue-formily'
import { Button } from '@arco-design/web-vue'
import { IconUpload, IconStorage } from '@arco-design/web-vue/es/icon'
import { defineComponent, h } from 'vue'

const UploadButton = defineComponent({
  setup() {
    return () => h(Button, {}, { default: () => '上传图片' })
  }
})

const NormalUpload = defineComponent({
  inheritAttrs: false,
  setup(props, { attrs }) {
    return () => h(Upload, {
      ...props,
      ...attrs,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text'
      }
    }, {
      default: () => h(Button, {}, {
        default: () => [
          h(IconUpload),
          '上传文件'
        ]
      })
    })
  }
})

const CardUpload = defineComponent({
  inheritAttrs: false,
  setup(props, { attrs }) {
    return () => h(Upload, {
      ...props,
      ...attrs,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      listType: 'picture-card',
      headers: {
        authorization: 'authorization-text'
      }
    }, {
      default: () => h(IconUpload, { style: { fontSize: '20px' } })
    })
  }
})

const DraggerUpload = defineComponent({
  inheritAttrs: false,
  setup(props, { attrs }) {
    return () => h('div', {}, [
      h(Upload.Dragger, {
        ...props,
        ...attrs,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
      }, {
        default: () => [
          h('p', { class: 'ant-upload-drag-icon' }, [h(IconStorage)]),
          h('p', { class: 'ant-upload-text' }, 'Click or drag file to this area to upload'),
          h('p', { class: 'ant-upload-hint' }, 'Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files')
        ]
      })
    ])
  }
})


const schema = {
  type: 'object',
  properties: {
    base: {
      type: 'array',
      title: '上传',
      'x-decorator': 'FormItem',
      'x-component': 'NormalUpload',
      required: true,
    },
    card: {
      type: 'array',
      title: '卡片上传',
      'x-decorator': 'FormItem',
      'x-component': 'CardUpload',
      required: true,
    },
    drag: {
      type: 'array',
      title: '拖拽上传',
      'x-decorator': 'FormItem',
      'x-component': 'DraggerUpload',
      required: true,
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    NormalUpload,
    CardUpload,
    DraggerUpload,
    FormItem,
  },
})

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Form, SchemaField, Submit, FormButtonGroup },
  data() {
    return {
      form,
      schema,
    }
  },
  methods: {
    onSubmit(value) {
      console.log(value)
    },
  },
}
</script>
