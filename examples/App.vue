<template>
  <div :style="{ boxSizing: 'border-box', padding: '8px' }">
    <Card title="asdf">
      <FormProvider :form="form">
        <SchemaField :schema="schema" :scope="{ useAsyncDataSource, transformAddress, formCollapse, formStep }" />
        <Submit @submit="log">提交</Submit>



        <FormConsumer>
          <template #default>
            <FormButtonGroup>
              <Button
                :disabled="!formStep.allowBack"
                @click="
                  () => {
                    formStep.back()
                  }
                "
              >
                上一步
              </Button>
              <Button
                :disabled="!formStep.allowNext"
                @click="
                  () => {
                    formStep.next()
                  }
                "
              >
                下一步
              </Button>
              <Submit :disabled="formStep.allowNext" @submit="log">提交</Submit>
            </FormButtonGroup>
          </template>
        </FormConsumer>
      </FormProvider>

      ArrayItems
    </Card>
  </div>
</template>

<script lang="ts">
import * as components from "../src/index";
import { Submit, FormCollapse, FormStep, FormButtonGroup, Upload } from "../src/index";
import schema from "./schema";
import { Card, Button } from "@arco-design/web-vue";
import { defineComponent, h } from "vue";

import { createForm, FieldDataSource, Field } from "@formily/core";
import { FormProvider, createSchemaField, FormConsumer } from "@formily/vue";
import { action } from "@formily/reactive";



// import { Button } from "@arco-design/web-vue"
// import { Upload } from "../src"

// const UploadButton = () => {
// return <Button>上传图片</Button>
// }
// const NormalUpload = (props, { attrs }) => {
// return (
//     <Upload
//     {...props}
//     {...attrs}
//     action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//     headers={{
//         authorization: 'authorization-text',
//     }}
//     >
//     <Button>
//         <UploadOutlined />
//         上传文件{' '}
//     </Button>
//     </Upload>
// )
// }

const NormalUpload = defineComponent({
  inheritAttrs: false,
  setup(props, { attrs }) {
    return () =>  {
      return h(Upload, {
        ...props,
        ...attrs,
        draggable: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {authorization: 'authorization-text'}
      }, {
        default: () => [h(Button, { type: 'primary' }, '上传文件')]
      })
    }
  }
})

const fields = createSchemaField({ components: { ...components, NormalUpload} });

export default defineComponent({
  components: { Card, FormProvider, FormConsumer, Submit, Button, FormButtonGroup, ...fields },
  setup() {
    const form = createForm({
      // pattern: 'readOnly',  // 设置表单为只读预览态
      initialValues: {
        array: [{ a1: "1", a2: "2", a3: "3" }],
        address: "110106",
        color_picker: "#FFFF00",
        checkbox__single: true,
        date_picker__date: "2025-05-21",

        form_collapse__aaa: "1",
        form_collapse__bbb: "2",
        form_collapse__ccc: "3",
        radio: 2
      },
    });
    const formCollapse = FormCollapse.createFormCollapse()
    const formStep = FormStep.createFormStep()

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
      formCollapse,
      formStep,

      log,
    };
  },
});
</script>
