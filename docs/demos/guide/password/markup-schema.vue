<template>
  <FormProvider :form="form">
    <SchemaField>
      <SchemaStringField
        name="input"
        title="密码框"
        x-decorator="FormItem"
        x-component="Password"
      />
    </SchemaField>
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { FormItem, Password, Submit } from 'arco-design-web-vue-formily'

const form = createForm()
const fields = createSchemaField({
  components: {
    FormItem,
    Password,
  },
})

export default {
  components: { FormProvider, ...fields, Submit },
  data() {
    return {
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
