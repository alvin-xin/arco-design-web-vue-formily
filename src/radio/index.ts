import { connect, mapProps } from "@formily/vue";
import { composeExport, transformComponent } from "../__builtins__";
import { Radio as ArcoRadio, RadioGroup as ArcoRadioGroup } from "@arco-design/web-vue";



export const InternalRadio = connect(
  transformComponent(ArcoRadio, { change: 'update:modelValue' }), 
  mapProps({ value: 'modelValue' })
)

const Group = connect(
  transformComponent(ArcoRadioGroup, { change: 'update:modelValue' }),
  mapProps({ value: 'modelValue', dataSource: 'options'  }),
)


export const Radio = composeExport(InternalRadio, {
  Group
})

export default Radio;