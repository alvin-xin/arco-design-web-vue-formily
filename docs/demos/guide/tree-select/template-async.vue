<template>
  <FormProvider :form="form">
    <Field
      name="linkage"
      title="联动选择框"
      :data-source="[
        { label: '发请求1', value: 1 },
        { label: '发请求2', value: 2 },
      ]"
      :decorator="[FormItem]"
      :component="[
        Select,
        {
          style: {
            width: '200px',
          },
        },
      ]"
    />
    <Field
      name="select"
      title="异步选择框"
      :decorator="[FormItem]"
      :component="[
        TreeSelect,
        {
          style: {
            width: '200px',
          },
        },
      ]"
    />
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>
<script lang="ts">
import type { Field as InternalField } from '@formily/core'
import { createForm, onFieldReact } from '@formily/core'
import { Field, FormProvider } from '@formily/vue'
import { FormItem, TreeSelect, Submit, Select } from 'arco-design-web-vue-formily'
import { action } from '@formily/reactive'

const useAsyncDataSource = (pattern, service) => {
  onFieldReact(pattern, (field: InternalField) => {
    field.loading = true
    service(field).then(
      action.bound((data) => {
        field.dataSource = data
        field.loading = false
      })
    )
  })
}

const form = createForm({
  effects: () => {
    useAsyncDataSource('select', async (field) => {
      const linkage = field.query('linkage').get('value')
      if (!linkage) return []
      return new Promise((resolve) => {
        setTimeout(() => {
          if (linkage === 1) {
            resolve([
              {
                title: 'AAA',
                key: 'aaa',
                children: [
                  {
                    title: 'Child Node1',
                    value: '0-0-0',
                    key: '0-0-0',
                  },
                  {
                    title: 'Child Node2',
                    value: '0-0-1',
                    key: '0-0-1',
                  },
                  {
                    title: 'Child Node3',
                    value: '0-0-2',
                    key: '0-0-2',
                  },
                ],
              },
              {
                title: 'BBB',
                key: 'ccc',
                children: [
                  {
                    title: 'Child Node1',
                    value: '0-1-0',
                    key: '0-1-0',
                  },
                  {
                    title: 'Child Node2',
                    value: '0-1-1',
                    key: '0-1-1',
                  },
                  {
                    title: 'Child Node3',
                    value: '0-1-2',
                    key: '0-1-2',
                  },
                ],
              },
            ])
          } else if (linkage === 2) {
            resolve([
              {
                title: 'CCC',
                key: 'ccc',
                children: [
                  {
                    title: 'Child Node1',
                    value: '0-0-0',
                    key: '0-0-0',
                  },
                  {
                    title: 'Child Node2',
                    value: '0-0-1',
                    key: '0-0-1',
                  },
                  {
                    title: 'Child Node3',
                    value: '0-0-2',
                    key: '0-0-2',
                  },
                ],
              },
              {
                title: 'DDD',
                key: 'ddd',
                children: [
                  {
                    title: 'Child Node1',
                    value: '0-1-0',
                    key: '0-1-0',
                  },
                  {
                    title: 'Child Node2',
                    value: '0-1-1',
                    key: '0-1-1',
                  },
                  {
                    title: 'Child Node3',
                    value: '0-1-2',
                    key: '0-1-2',
                  },
                ],
              },
            ])
          }
        }, 1500)
      })
    })
  },
})

export default {
  components: { FormProvider, Field, Submit },
  data() {
    return {
      form,
      FormItem,
      TreeSelect,
      Select,
    }
  },
  methods: {
    log(value) {
      console.log(value)
    },
  },
}
</script>
