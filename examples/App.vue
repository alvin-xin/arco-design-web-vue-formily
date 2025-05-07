<template>
  <div :style="{ boxSizing: 'border-box', padding: '8px' }">
    <Card title="asdf">
      <FormProvider :form="form">
        <SchemaField :schema="schema" :scope="{ useAsyncDataSource, transformAddress }" />
        <Submit @submit="log">提交</Submit>
      </FormProvider>

      ArrayItems
    </Card>
  </div>
</template>

<script lang="ts">
import { Submit, FormItem, ArrayTable, Input, Editable, Cascader, ArrayItems, Space, ArrayCards, ArrayCollapse, ArrayTabs, Checkbox } from "../src/index";
import schema from "./schema";
import { Card } from "@arco-design/web-vue";
import { defineComponent } from "vue";

import { createForm, FieldDataSource, Field } from "@formily/core";
import { FormProvider, createSchemaField } from "@formily/vue";
import { action } from "@formily/reactive";

const fields = createSchemaField({
  components: {
    FormItem,
    ArrayTable,
    Input,
    Editable,
    Cascader,
    ArrayItems,
    Space,
    ArrayCards,
    ArrayCollapse,
    ArrayTabs,
    Checkbox,
  },
});

export default defineComponent({
  components: { Card, FormProvider, Submit, ...fields },
  setup() {
    const form = createForm({
      // pattern: 'readOnly',  // 设置表单为只读预览态
      initialValues: {
        array: [{ a1: "1", a2: "2", a3: "3" }],
        address: "110106"
      }
    });

    interface AddressInfo {
      code: string;
      name: string;
      cities?: Record<string, AddressInfo>;
      districts?: Record<string, string>;
    }

    const transformAddress = (data: Record<string, AddressInfo | string> = {}) => {
      return Object.entries(data).reduce<FieldDataSource>((buf, [key, value]) => {
        if (typeof value === "string")
          return buf.concat({
            label: value,
            value: key,
          });
        const { name, code, cities, districts } = value;
        const _cities = transformAddress(cities);
        const _districts = transformAddress(districts);
        return buf.concat({
          label: name,
          value: code,
          children: _cities.length ? _cities : _districts.length ? _districts : undefined,
        });
      }, []);
    };

    const useAsyncDataSource = (url: string, transform: (data: any) => any) => (
      field: Field
    ) => {
      field.loading = true;
      fetch(url)
        .then((res) => res.json())
        .then(
          action.bound?.((data) => {
            field.dataSource = transform(data);
            field.loading = false;
          })
        );
    };

    function log(...v) {
      console.log(...v);
    }

    return {
      form,
      schema,
      useAsyncDataSource,
      transformAddress,
      log,
    };
  },
});
</script>
