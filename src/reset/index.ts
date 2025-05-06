import { observer } from "@formily/reactive-vue";
import { h, useParentForm } from "@formily/vue";
import { defineComponent } from "vue";
import { Button as ArcoButton } from "@arco-design/web-vue";

export const Reset = observer(defineComponent({
  name: 'FReset',
  props: {
    forceClear: {
      type: Boolean,
      default: false,
    },
    validate: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs, slots }: any) {
    const formRef = useParentForm()
    return () => {
      const form = formRef?.value
      return h(
        ArcoButton,
        {
          ...attrs,
          onClick: (e: MouseEvent) => {
            if (attrs?.click) {
              if (attrs.click(e) === false) return
            }
            form
              ?.reset('*', {
                forceClear: props.forceClear,
                validate: props.validate,
              })
              .then(attrs.resetValidateSuccess as (e: any) => void)
              .catch(attrs.resetValidateFailed as (e: any) => void)
          },
        },
        slots
      )
    }
  },
}))