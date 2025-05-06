import { connect, mapProps } from "@formily/vue";
import { Input as ArcoInput, InputInstance as ArcoInputInstance } from "@arco-design/web-vue";
import { composeExport, transformComponent } from "../__builtins__";


const TransformArcoInput = transformComponent<ArcoInputInstance>(ArcoInput, {
  change: 'update:modelValue',
})

const InnerInput = connect(TransformArcoInput, mapProps({
  value: 'modelValue',
  readOnly: 'readonly',
}))


export const Input = composeExport(InnerInput, {})

export default Input
