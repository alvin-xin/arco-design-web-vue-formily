import { defineComponent, h, SetupContext } from "vue";
import { FormBaseItem } from "../form-item";
import Space from "../space";
import { stylePrefix } from "../__builtins__";

export const FormButtonGroup = defineComponent({
    name: 'FormButtonGroup',
    props: {
      align:{ type: String, default: 'left' },
      gutter: { type: Number, default: 8 },
      alignFormItem: { type: Boolean, default: false },
    },
    setup(props, { slots, attrs }: SetupContext) {
      
      const prefixCls = `${stylePrefix}-form-button-group`

      return () => {
        if(props.alignFormItem) {
          return h(
            FormBaseItem, 
            { ...attrs, colon: false, label: ' ', style: { margin: 0, padding: 0, boxSizing: 'border-box', width: '100%' } },
            {
              default: () => h(Space, { size: props.gutter }, slots)
            }
          )
        } else {
          return h(
            Space, 
            { 
              ...attrs, 
              class: [prefixCls], 
              style: { display: 'flex', justifyContent: props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : 'center' },
              size: props.gutter,
            }, 
            slots
          );
        }
      }
    }
})

export default FormButtonGroup;