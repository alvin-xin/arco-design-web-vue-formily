<template>
  <FormProvider :form="form">
    <SchemaField>
      <SchemaStringField
        required
        name="input1"
        title="输入框"
        x-decorator="FormItem"
        x-component="Input"
      />
      <SchemaStringField
        required
        title="输入框"
        name="input2"
        x-decorator="FormItem"
        x-component="Input"
        default="123"
      />
    </SchemaField>
    <FormButtonGroup align-form-item>
      <Reset>重置</Reset>
    </FormButtonGroup>
  </FormProvider>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import {
  FormLayout,
  Reset,
  FormButtonGroup,
  FormItem,
  Input,
} from 'arco-design-web-vue-formily'

const fields = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

export default {
  components: {
    FormProvider,
    Reset,
    FormButtonGroup,
    ...fields,
  },
  data() {
    const form = createForm()
    return {
      form,
    }
  },
}
</script>
