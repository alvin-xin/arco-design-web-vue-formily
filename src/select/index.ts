import { connect, mapProps } from "@formily/vue";
import { Select as ArcoSelect } from "@arco-design/web-vue";
import { transformComponent } from "../__builtins__";

export const Select = connect(
  transformComponent(ArcoSelect, { change: 'update:modelValue', }), 
  mapProps({
    value: "modelValue",
    dataSource: "options",
  }),
)

export default Select;

