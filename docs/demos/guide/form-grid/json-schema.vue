<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />
    <Submit @submit="onSubmit">提交</Submit>
  </FormProvider>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { FormItem, Input, Submit, FormGrid } from 'arco-design-web-vue-formily'

const schema = {
  type: 'object',
  properties: {
    grid: {
      type: 'void',
      'x-component': 'FormGrid',
      'x-component-props': {
        minColumns: [4, 6, 10],
      },
      properties: {
        aaa: {
          type: 'string',
          title: 'AAA',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        bbb: {
          type: 'string',
          title: 'BBB',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        ccc: {
          type: 'string',
          title: 'CCC',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        ddd: {
          type: 'string',
          title: 'DDD',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        eee: {
          type: 'string',
          title: 'EEE',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        fff: {
          type: 'string',
          title: 'FFF',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        ggg: {
          type: 'string',
          title: 'GGG',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
      },
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Input,
    FormGrid,
  },
})

export default {
  components: { FormProvider, SchemaField, Submit },
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
l
