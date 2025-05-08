import { InputPassword as ArcoInputPassword } from "@arco-design/web-vue"
import { composeExport, transformComponent } from "../__builtins__"
import { connect, mapProps } from "@formily/vue"

const TransformArcoInputPassword = transformComponent(ArcoInputPassword, {
  change: 'update:modelValue',
})

const InnerInputPassword = connect(
  TransformArcoInputPassword,
  mapProps(
    { value:'modelValue', readOnly:'read-only' },
    (props)=> {
      return {
        ...props,
      }
    }
  ),
)

export const Password = composeExport(InnerInputPassword, {})

export default Password
