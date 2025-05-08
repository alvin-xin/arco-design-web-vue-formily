import { connect, mapProps } from "@formily/vue";
import { TreeSelect as ArcoTreeSelect } from "@arco-design/web-vue";
import { transformComponent } from "../__builtins__";

export const TreeSelect = connect(
    transformComponent(ArcoTreeSelect, { change: 'update:modelValue' }),
    mapProps({ dataSource: 'data', value: 'modelValue' })
)

export default TreeSelect;