<template>
  <Form :form="form" :label-col="4" :wrapper-col="10">
    <ArrayField
      name="upload"
      title="上传"
      :decorator="[FormItem]"
      :component="[NormalUpload]"
      required
    />
    <ArrayField
      name="upload2"
      title="卡片上传"
      :decorator="[FormItem]"
      :component="[CardUpload]"
      required
    />
    <ArrayField
      name="upload3"
      title="拖拽上传"
      :decorator="[FormItem]"
      :component="[DraggerUpload]"
      required
    />
    <FormButtonGroup align-form-item>
      <Submit @submit="onSubmit">提交</Submit>
    </FormButtonGroup>
  </Form>
</template>

<script lang="tsx">
import { createForm } from '@formily/core'
import { ArrayField } from '@formily/vue'
import { defineComponent, h } from 'vue'
import {
  Form,
  FormItem,
  Upload,
  Submit,
  FormButtonGroup,
} from 'arco-design-web-vue-formily'
import { Button } from '@arco-design/web-vue'
import { IconUpload, IconStorage } from '@arco-design/web-vue/es/icon'

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

const form = createForm()

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Form, ArrayField, Submit, FormButtonGroup },
  data() {
    return {
      NormalUpload,
      CardUpload,
      DraggerUpload,
      FormItem,
      form,
    }
  },
  methods: {
    onSubmit(value) {
      console.log(value)
    },
  },
}
</script>
