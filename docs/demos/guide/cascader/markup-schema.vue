<template>
  <Form :form="form">
    <SchemaField>
      <SchemaStringField
        name="address"
        title="地址选择"
        required
        x-decorator="FormItem"
        x-component="Cascader"
        :x-component-props="{
          style: {
            width: '240px',
          },
        }"
      />
    </SchemaField>

    <Submit @submit="onSubmit">提交</Submit>
  </Form>
</template>

<script lang="ts">
import type { Field } from '@formily/core'
import { createForm, onFieldReact } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, FormItem, Cascader, Submit } from 'arco-design-web-vue-formily'
import { action } from '@formily/reactive'
// import axios from 'axios'

const transformAddress = (data: Record<string, any> = {}) => {
  return Object.entries(data).reduce((buf, [key, value]) => {
    if (typeof value === 'string')
      return buf.concat({
        label: value,
        value: key,
      })
    const { name, code, cities, districts } = value
    const _cities = transformAddress(cities)
    const _districts = transformAddress(districts)
    return buf.concat({
      label: name,
      value: code,
      children: _cities.length
        ? _cities
        : _districts.length
        ? _districts
        : undefined,
    })
  }, [])
}

const useAddress = (pattern) => {
  onFieldReact(pattern, (field: Field) => {
    field.loading = true
    fetch('https://unpkg.com/china-location/dist/location.json')
      .then((res) => res.json())
      .then(
        action.bound((data) => {
          field.dataSource = transformAddress(data)
          field.loading = false
        })
      )
  })
}

const form = createForm({
  effects: () => {
    useAddress('address')
  },
})
const fields = createSchemaField({
  components: {
    FormItem,
    Cascader,
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
l
