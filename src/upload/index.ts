import { connect, mapProps } from "@formily/vue";
import { composeExport } from "../__builtins__";
import { defineComponent, h } from "vue";
import { Upload as ArcoUpload, FileItem } from "@arco-design/web-vue";

export type IUploadOnchange = (fileList: FileItem[]) => void

const UploadWrapper = defineComponent({
    name: 'UploadWrapper',
    emits: ['change'],
    setup(props, { slots, attrs, emit }) {
      return () => {
        const children = {
          ...slots,
        }
        const { onChange, ...restAttrs } = attrs
        return h(
            ArcoUpload,
          {
            ...restAttrs,
            onChange: ({ fileList }: any) => {
              ;(onChange as IUploadOnchange)?.(fileList)
              emit('change', fileList)
            },
          },
          children
        )
      }
    },
  })

  
const _Upload = connect(
    UploadWrapper,
    mapProps({
      value: 'fileList',
      onInput: 'onChange',
    })
  )

export const Upload = composeExport(_Upload, {})