<template>
  <Form :form="form" :label-col="6" :wrapper-col="10">
    <SchemaField>
      <SchemaVoidField
        type="void"
        title="折叠面板"
        x-decorator="FormItem"
        x-component="FormCollapse"
        :x-component-props="{ formCollapse }"
      >
        <SchemaVoidField
          type="void"
          name="tab1"
          x-component="FormCollapse.CollapsePanel"
          :x-component-props="{ header: 'A1' }"
        >
          <SchemaStringField
            name="aaa"
            x-decorator="FormItem"
            title="AAA"
            required
            x-component="Input"
          />
        </SchemaVoidField>
        <SchemaVoidField
          name="tab2"
          x-component="FormCollapse.CollapsePanel"
          :x-component-props="{ header: 'A2' }"
        >
          <SchemaStringField
            name="bbb"
            x-decorator="FormItem"
            title="BBB"
            required
            x-component="Input"
          />
        </SchemaVoidField>
        <SchemaVoidField
          name="tab3"
          x-component="FormCollapse.CollapsePanel"
          :x-component-props="{ header: 'A3' }"
        >
          <SchemaStringField
            name="ccc"
            x-decorator="FormItem"
            title="CCC"
            required
            x-component="Input"
          />
        </SchemaVoidField>
      </SchemaVoidField>
    </SchemaField>
    <FormButtonGroup align-form-item>
      <Button
        @click="
          () => {
            form.query('tab3').take((field) => {
              field.visible = !field.visible
            })
          }
        "
      >
        显示/隐藏最后一个Tab
      </Button>
      <Button
        @click="
          () => {
            formCollapse.toggleActiveKey('tab2')
          }
        "
      >
        切换第二个Tab
      </Button>
      <Submit @submit="log">提交</Submit>
    </FormButtonGroup>
  </Form>
</template>

<script lang="ts">
/* eslint-disable vue/no-reserved-component-names */
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import {
  FormItem,
  FormCollapse,
  FormButtonGroup,
  Submit,
  Input,
  Form,
} from 'arco-design-web-vue-formily'
import { Button } from '@arco-design/web-vue'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormCollapse,
    Input,
  },
})

export default {
  components: {
    Form,
    FormButtonGroup,
    Button,
    Submit,
    ...SchemaField,
  },

  data() {
    const form = createForm()
    const formCollapse = FormCollapse.createFormCollapse()

    return {
      form,
      formCollapse,
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
