<template>
  <Form :form="form">
    <Field
      name="input"
      title="输入框"
      :decorator="[FormItem]"
      :component="[Input]"
      required
    />
    <Submit @submit="onSubmit">提交</Submit>
  </Form>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { Field } from '@formily/vue'
import { Form, FormItem, Input, Submit } from 'arco-design-web-vue-formily'

const form = createForm()

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Form, Field, Submit },
  data() {
    return {
      FormItem,
      Input,
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
