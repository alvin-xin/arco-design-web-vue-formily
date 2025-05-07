import { Cascader as ArcoCascader } from "@arco-design/web-vue"
import { connect, mapProps, mapReadPretty } from "@formily/vue"
import { PreviewText } from "../preview-text"


export const Cascader = connect(
  ArcoCascader,
  mapProps(
    { dataSource: "options", readOnly: 'readonly'  },
    (props, field) => {
      return {
        ...props,
      }
    }
  ),
  mapReadPretty(PreviewText.Cascader)
)

export default Cascader