<template>
  <FormProvider :form="form">
    <Field
      name="switch"
      title="开关"
      :decorator="[FormItem]"
      :component="[Switch]"
    />
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/vue'
import { FormItem, Switch, Submit } from 'arco-design-web-vue-formily'

const form = createForm()

export default {
  components: { FormProvider, Field, Submit },
  data() {
    return {
      FormItem,
      Switch,
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
