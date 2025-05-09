<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>
<script lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { FormItem, TreeSelect, Submit } from 'arco-design-web-vue-formily'

const form = createForm()
const schema = {
  type: 'object',
  properties: {
    select: {
      type: 'string',
      title: '选择框',
      'x-decorator': 'FormItem',
      'x-component': 'TreeSelect',
      enum: [
        {
          title: '选项1',
          key: 1,
          children: [
            {
              title: 'Child Node1',
              value: '0-0-0',
              key: '0-0-0',
            },
            {
              title: 'Child Node2',
              value: '0-0-1',
              key: '0-0-1',
            },
            {
              title: 'Child Node3',
              value: '0-0-2',
              key: '0-0-2',
            },
          ],
        },
        {
          title: '选项2',
          key: 2,
          children: [
            {
              title: 'Child Node1',
              value: '0-1-0',
              key: '0-1-0',
            },
            {
              title: 'Child Node2',
              value: '0-1-1',
              key: '0-1-1',
            },
            {
              title: 'Child Node3',
              value: '0-1-2',
              key: '0-1-2',
            },
          ],
        },
      ],
      'x-component-props': {
        style: {
          width: '200px',
        },
      },
    },
  },
}

const fields = createSchemaField({
  components: {
    FormItem,
    TreeSelect,
  },
})

export default {
  components: { FormProvider, ...fields, Submit },
  data() {
    return {
      form,
      schema,
    }
  },
  methods: {
    log(value) {
      console.log(value)
    },
  },
}
</script>
