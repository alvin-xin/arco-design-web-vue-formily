<template>
  <FormProvider :form="form">
    <Field
      name="input"
      title="单选"
      :decorator="[FormItem]"
      :component="[Radio.Group]"
      :data-source="[
        {
          label: '选项1',
          value: 1,
        },
        {
          label: '选项2',
          value: 2,
        },
      ]"
    />
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/vue'
import { FormItem, Radio, Submit } from 'arco-design-web-vue-formily'

const form = createForm()

export default {
  components: { FormProvider, Field, Submit },
  data() {
    return {
      FormItem,
      Radio,
      form,
    }
  },
  methods: {
    log(value) {
      console.log(value)
    },
  },
}
</script>
