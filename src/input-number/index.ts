import { connect, mapProps } from "@formily/vue";
import { composeExport, transformComponent } from "../__builtins__";
import { InputNumber as ArcoInputNumber } from "@arco-design/web-vue"


const TransformArcoInputNumber = transformComponent(ArcoInputNumber, {
  change: 'update:modelValue',
})

const InnerInputNumber = connect(
  TransformArcoInputNumber,
  mapProps({ value:'modelValue', readOnly:'read-only' }),
)

export const InputNumber = composeExport(InnerInputNumber, {})

export default InputNumber