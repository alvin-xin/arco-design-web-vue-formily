<template>
  <FormProvider :form="form">
    <Field
      name="select"
      title="选择框"
      :data-source="[
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
              title: 'Child Node3',
              value: '0-1-0',
              key: '0-1-0',
            },
            {
              title: 'Child Node4',
              value: '0-1-1',
              key: '0-1-1',
            },
            {
              title: 'Child Node5',
              value: '0-1-2',
              key: '0-1-2',
            },
          ],
        },
      ]"
      :decorator="[FormItem]"
      :component="[
        TreeSelect,
        {
          style: {
            width: '200px',
          },
        },
      ]"
    />
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>
<script lang="ts">
import { createForm } from '@formily/core'
import { Field, FormProvider } from '@formily/vue'
import { FormItem, TreeSelect, Submit } from 'arco-design-web-vue-formily'

const form = createForm()

export default {
  components: { FormProvider, Field, Submit },
  data() {
    return {
      form,
      FormItem,
      TreeSelect,
    }
  },
  methods: {
    log(value) {
      console.log(value)
    },
  },
}
</script>
