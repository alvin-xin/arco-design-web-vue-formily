<template>
  <FormProvider :form="form">
    <FormLayout :label-col="6" :wrapper-col="16">
      <SchemaField>
        <SchemaVoidField
          x-component="FormLayout"
          :x-component-props="{
            labelCol: 6,
            wrapperCol: 10,
          }"
        >
          <SchemaVoidField
            title="姓名"
            x-decorator="FormItem"
            :x-decorator-props="{
              asterisk: true,
              feedbackLayout: 'none',
            }"
            x-component="Space"
          >
            <SchemaStringField
              name="firstName"
              x-decorator="FormItem"
              x-component="Input"
              :required="true"
            />
            <SchemaStringField
              name="lastName"
              x-decorator="FormItem"
              x-component="Input"
              :required="true"
            />
          </SchemaVoidField>
          <SchemaVoidField
            title="文本串联"
            x-decorator="FormItem"
            :x-decorator-props="{
              asterisk: true,
              feedbackLayout: 'none',
            }"
            x-component="Space"
          >
            <SchemaStringField
              name="aa"
              x-decorator="FormItem"
              x-component="Input"
              :x-decorator-props="{
                addonAfter: '单位',
              }"
              :required="true"
            />
            <SchemaStringField
              name="bb"
              x-decorator="FormItem"
              x-component="Input"
              :x-decorator-props="{
                addonAfter: '单位',
              }"
              :required="true"
            />
            <SchemaStringField
              name="cc"
              x-decorator="FormItem"
              x-component="Input"
              :x-decorator-props="{
                addonAfter: '单位',
              }"
              :required="true"
            />
          </SchemaVoidField>
          <SchemaStringField
            name="textarea"
            title="文本框"
            x-decorator="FormItem"
            :required="true"
            x-component="Textarea"
            :x-component-props="{
              style: {
                width: 400,
              },
            }"
          />
        </SchemaVoidField>
      </SchemaField>
      <FormButtonGroup align-form-item>
        <Submit :on-submit="log">提交</Submit>
      </FormButtonGroup>
    </FormLayout>
  </FormProvider>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import {
  FormLayout,
  FormItem,
  Input,
  Textarea,
  Space,
  FormButtonGroup,
  Submit,
} from 'arco-design-web-vue-formily'

const fields = createSchemaField({
  components: { FormItem, FormLayout, Input, Textarea, Space },
})

export default {
  components: { FormProvider, FormLayout, FormButtonGroup, Submit, ...fields },
  data() {
    const form = createForm()
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
