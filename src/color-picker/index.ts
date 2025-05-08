import { ColorPicker as ArcoColorPicker } from "@arco-design/web-vue";
import { composeExport, transformComponent } from "../__builtins__";
import { connect, mapProps } from "@formily/vue";

const TransformArcoColorPicker = transformComponent(ArcoColorPicker, {
  change: 'update:modelValue'
})

const InnerColorPicker = connect(
  TransformArcoColorPicker,
  mapProps({ value: 'modelValue', readOnly: 'read-only' })
)

export const ColorPicker = composeExport(InnerColorPicker, {})

export default ColorPicker;
