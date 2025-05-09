import { connect, mapProps } from "@formily/vue";
import { transformComponent } from "../__builtins__";
import { Transfer as ArcoTransfer } from "@arco-design/web-vue";

export const Transfer = connect(
  transformComponent(ArcoTransfer, { change: 'update:modelValue' }),
  mapProps({ value: 'modelValue', dataSource: 'data' })
);

export default Transfer;
