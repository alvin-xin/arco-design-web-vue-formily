<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import {
  FormButtonGroup,
  Submit,
  FormItem,
  Space,
  Input,
  ArrayTabs,
} from 'arco-design-web-vue-formily'
import { Button } from '@arco-design/web-vue'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Space,
    Input,
    ArrayTabs,
  },
})

export default {
  components: {
    FormProvider,
    Submit,
    ...SchemaField,
  },

  data() {
    const form = createForm()
    const schema = {
      type: 'object',
      properties: {
        string_array: {
          type: 'array',
          title: '字符串数组',
          'x-decorator': 'FormItem',
          maxItems: 3,
          'x-component': 'ArrayTabs',
          items: {
            type: 'string',
            'x-decorator': 'FormItem',
            title: '字符串',
            name: 'aaa',
            required: true,
            'x-component': 'Input',
          },
        },
        array: {
          type: 'array',
          title: '对象数组',
          'x-decorator': 'FormItem',
          maxItems: 3,
          'x-component': 'ArrayTabs',
          items: {
            type: 'object',
            properties: {
              aaa: {
                type: 'string',
                'x-decorator': 'FormItem',
                title: 'AAA',
                required: true,
                'x-component': 'Input',
              },
              bbb: {
                type: 'string',
                'x-decorator': 'FormItem',
                title: 'BBB',
                required: true,
                'x-component': 'Input',
              },
            },
          },
        },
      },
    }

    return {
      form,
      schema,
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
