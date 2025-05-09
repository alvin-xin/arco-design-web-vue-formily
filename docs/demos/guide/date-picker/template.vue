<template>
  <Form :form="form">
    <Field
      name="date"
      title="普通日期"
      :decorator="[FormItem]"
      :component="[DatePicker]"
    />
    <Field
      name="week"
      title="周选择"
      :decorator="[FormItem]"
      :component="[WeekPicker]"
    />
    <Field
      name="month"
      title="月选择"
      :decorator="[FormItem]"
      :component="[MonthPicker]"
    />
    <Field
      name="year"
      title="年选择"
      :decorator="[FormItem]"
      :component="[
        DatePicker,
        {
          picker: 'year',
        },
      ]"
    />
    <Field
      name="dateTime"
      title="日期时间"
      :decorator="[FormItem]"
      :component="[
        DatePicker,
        {
          showTime: true,
        },
      ]"
    />
    <ArrayField
      name="[startDate,endDate]"
      title="多个日期"
      :decorator="[FormItem]"
      :component="[
        RangePicker,
        {
          showTime: true,
        },
      ]"
    />
    <Submit @submit="onSubmit">提交</Submit>
  </Form>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { Field, ArrayField } from '@formily/vue'
import { Form, FormItem, DatePicker, WeekPicker, MonthPicker, YearPicker, RangePicker, Submit } from 'arco-design-web-vue-formily'

const form = createForm()

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Form, Field, ArrayField, Submit,   },
  data() {
    return {
      FormItem,
      DatePicker,
      form,
      WeekPicker, MonthPicker, YearPicker, RangePicker,
    }
  },
  methods: {
    onSubmit(value) {
      console.log(value)
    },
  },
}
</script>
