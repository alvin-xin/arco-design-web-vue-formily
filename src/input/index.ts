import { connect, mapProps, mapReadPretty } from "@formily/vue";
import { Input as ArcoInput, InputInstance as ArcoInputInstance } from "@arco-design/web-vue";
import { composeExport, transformComponent } from "../__builtins__";
import { PreviewText } from "../preview-text";


// const TransformArcoInput = transformComponent<ArcoInputInstance>(ArcoInput, {
//   change: 'update:modelValue',
// })

// const InnerInput = connect(TransformArcoInput, mapProps({
//   value: 'modelValue',
//   readOnly: 'readonly',
// }))


// export const Input = composeExport(InnerInput, {})

// export default Input



const TransformArcoInput = transformComponent<ArcoInputInstance>(ArcoInput, {
  change: 'update:modelValue',
})

const InnerInput = connect(
  TransformArcoInput,
  mapProps({ value: 'modelValue', readOnly: 'read-only' }),
  mapReadPretty(PreviewText.Input)
)

export const Input = composeExport(InnerInput, {})

export default Input
