import { Checkbox as ArcoCheckbox, CheckboxGroup as ArcoCheckboxGroup } from "@arco-design/web-vue";
import { connect, mapProps } from "@formily/vue";
import { defineComponent, h, SetupContext } from "vue";
import { composeExport } from "../__builtins__";



const CheckboxGroup = connect(ArcoCheckboxGroup, mapProps({ dataSource: 'options' }))


const _Checkbox = defineComponent({
    name: 'FCheckBox',
  inheritAttrs: false,
  props: ['onChange', 'modelValue'],
  setup(props, { attrs, slots }: SetupContext) {
    return () => {
        return h(ArcoCheckbox, { ...props, ...attrs }, slots);
    }
  }
})

const InternalCheckbox = connect(_Checkbox, mapProps({ value: 'modelValue' }))


export const Checkbox = composeExport(InternalCheckbox, {
    Group: CheckboxGroup,
  })
  
  export default Checkbox
  