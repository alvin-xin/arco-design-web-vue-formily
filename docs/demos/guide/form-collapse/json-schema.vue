<template>
  <FormProvider :form="form">
    <FormLayout :label-col="6" :wrapper-col="10">
      <SchemaField :schema="schema" :scope="{ formCollapse }" />
      <FormButtonGroup align-form-item>
        <Button
          @click="
            () => {
              form.query('tab3').take((field) => {
                field.visible = !field.visible
              })
            }
          "
        >
          显示/隐藏最后一个Tab
        </Button>
        <Button
          @click="
            () => {
              formCollapse.toggleActiveKey('tab2')
            }
          "
        >
          切换第二个Tab
        </Button>
        <Submit @submit="log">提交</Submit>
      </FormButtonGroup>
    </FormLayout>
  </FormProvider>
</template>

<script lang="ts">
/* eslint-disable vue/no-reserved-component-names */
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import {
  FormItem,
  FormCollapse,
  FormButtonGroup,
  Form,
  FormLayout,
  Submit,
  Input,
} from 'arco-design-web-vue-formily'
import { Button } from '@arco-design/web-vue'

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    FormCollapse,
    Input,
  },
})

const schema = {
  type: 'object',
  properties: {
    collapse: {
      type: 'void',
      title: '折叠面板',
      'x-decorator': 'FormItem',
      'x-component': 'FormCollapse',
      'x-component-props': {
        formCollapse: '{{formCollapse}}',
      },
      properties: {
        tab1: {
          type: 'void',
          'x-component': 'FormCollapse.CollapsePanel',
          'x-component-props': {
            header: 'A1',
          },
          properties: {
            aaa: {
              type: 'string',
              title: 'AAA',
              'x-decorator': 'FormItem',
              required: true,
              'x-component': 'Input',
            },
          },
        },
        tab2: {
          type: 'void',
          'x-component': 'FormCollapse.CollapsePanel',
          'x-component-props': {
            header: 'A2',
          },
          properties: {
            bbb: {
              type: 'string',
              title: 'BBB',
              'x-decorator': 'FormItem',
              required: true,
              'x-component': 'Input',
            },
          },
        },
        tab3: {
          type: 'void',
          'x-component': 'FormCollapse.CollapsePanel',
          'x-component-props': {
            header: 'A3',
          },
          properties: {
            ccc: {
              type: 'string',
              title: 'CCC',
              'x-decorator': 'FormItem',
              required: true,
              'x-component': 'Input',
            },
          },
        },
      },
    },
  },
}

export default {
  components: {
    FormButtonGroup,
    Button,
    Submit,
    SchemaField,
    FormProvider,
    FormLayout,
  },

  data() {
    const form = createForm()
    const formCollapse = FormCollapse.createFormCollapse()

    return {
      schema,
      form,
      formCollapse,
    }
  },
  methods: {
    log(values) {
      console.log(values)
    },
  },
}
</script>

<style lang="scss" scoped></style>
