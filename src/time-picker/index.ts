import { TimePicker as ArcoTimePicker } from "@arco-design/web-vue";
import { connect, mapProps } from "@formily/vue";
import { transformComponent } from "../__builtins__";

// 使用 connect 高阶组件对 ArcoTimePicker 进行封装
export const TimePicker = connect(
  // 转换组件事件，将 change 事件映射为 update:modelValue
  transformComponent(ArcoTimePicker, { change: 'update:modelValue' }),
  // 转换属性名，将 value 映射为 modelValue
  mapProps({
    value: 'modelValue',
  })
)

export default TimePicker;
