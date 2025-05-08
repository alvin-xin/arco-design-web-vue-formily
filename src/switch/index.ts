/**
 * @description Switch 组件的 Formily 适配器
 * 将 ArcoDesign Switch 组件转换为符合 Formily 表单规范的组件
 * 
 * @remarks
 * 主要完成以下转换：
 * 1. 事件转换：将 change 事件映射到 update:modelValue
 * 2. 属性映射：将 value 属性映射到 modelValue
 */

import { Switch as ArcoSwitch } from "@arco-design/web-vue";
import { connect, mapProps } from "@formily/vue";
import { transformComponent } from "../__builtins__";

// 使用 connect 高阶组件对 ArcoSwitch 进行封装
export const Switch = connect(
  // 转换组件事件，将 change 事件映射为 update:modelValue
  transformComponent(ArcoSwitch, { change: 'update:modelValue' }),
  // 转换属性名，将 value 映射为 modelValue
  mapProps({
    value: 'modelValue',
  })
)

export default Switch;
