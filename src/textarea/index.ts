import { connect, mapProps } from "@formily/vue";
import { Textarea as ArcoTextarea, TextareaInstance as ArcoTextareaInstance } from "@arco-design/web-vue";
import { composeExport, transformComponent } from "../__builtins__";


const TransformArcoTextarea = transformComponent<ArcoTextareaInstance>(ArcoTextarea, {
  change: 'update:modelValue',
})

const InnerTextarea = connect(TransformArcoTextarea, mapProps({
  value: 'modelValue',
  readOnly: 'readonly',
}))


export const Textarea = composeExport(InnerTextarea, {})

export default Textarea
