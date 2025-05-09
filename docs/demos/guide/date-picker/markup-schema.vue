<template>
  <Form :form="form">
    <SchemaField>
      <SchemaStringField
        name="date"
        title="普通日期"
        x-decorator="FormItem"
        x-component="DatePicker"
      />
      <SchemaStringField
        name="week"
        title="周选择"
        x-decorator="FormItem"
        x-component="WeekPicker"
      />
      <SchemaStringField
        name="month"
        title="月选择"
        x-decorator="FormItem"
        x-component="MonthPicker"
      />
      <SchemaStringField
        name="year"
        title="年选择"
        x-decorator="FormItem"
        x-component="DatePicker"
        :x-component-props="{
          picker: 'year',
        }"
      />
      <SchemaStringField
        name="dateTime"
        title="日期时间"
        x-decorator="FormItem"
        x-component="DatePicker"
        :x-component-props="{
          showTime: true,
        }"
      />
      <SchemaArrayField
        name="[startDate,endDate]"
        title="日期范围"
        x-decorator="FormItem"
        x-component="RangePicker"
        :x-component-props="{
          showTime: true,
        }"
      />
    </SchemaField>
    <Submit @submit="onSubmit">提交</Submit>
  </Form>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, FormItem, DatePicker, WeekPicker, MonthPicker, YearPicker, RangePicker, Submit } from 'arco-design-web-vue-formily'

const form = createForm()
const fields = createSchemaField({
  components: {
    FormItem,
    DatePicker,
    WeekPicker, MonthPicker, YearPicker, RangePicker, 
  },
})

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Form, ...fields, Submit },
  data() {
    return {
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
