import { InjectionKey, Ref, SetupContext, defineComponent, inject, provide, ref, watch } from "vue"
import { useResponsiveFormLayout } from "./useResponsiveFormLayout"
import { stylePrefix } from "../__builtins__"
import { h } from "@formily/vue"


export type FormLayoutProps = {
  className?: string
  colon?: boolean
  labelAlign?: 'right' | 'left' | ('right' | 'left')[]
  wrapperAlign?: 'right' | 'left' | ('right' | 'left')[]
  labelWrap?: boolean
  labelWidth?: number
  wrapperWidth?: number
  wrapperWrap?: boolean
  labelCol?: number | number[]
  wrapperCol?: number | number[]
  fullness?: boolean
  size?: 'small' | 'default' | 'large'
  layout?:
  | 'vertical'
  | 'horizontal'
  | 'inline'
  | ('vertical' | 'horizontal' | 'inline')[]
  direction?: 'rtl' | 'ltr'
  shallow?: boolean
  feedbackLayout?: 'loose' | 'terse' | 'popover'
  tooltipLayout?: 'icon' | 'text'
  bordered?: boolean
  breakpoints?: number[]
  inset?: boolean
  spaceGap?: number
  gridColumnGap?: number
  gridRowGap?: number
}

export const FormLayoutDeepContext: InjectionKey<Ref<FormLayoutProps>> = Symbol('FormLayoutDeeoContext')
export const FormLayoutShallowContext: InjectionKey<Ref<FormLayoutProps>> = Symbol('FormLayoutShallowContext')

export const useFormDeepLayout = (): Ref<FormLayoutProps> => inject(FormLayoutDeepContext, ref({}))
export const useFormShallowLayout = (): Ref<FormLayoutProps> => inject(FormLayoutShallowContext, ref({}))

export const useFormLayout = (): Ref<FormLayoutProps> => {
  const shallowLayout = useFormShallowLayout()
  const deepLayout = useFormDeepLayout()
  const formLayout = ref({ ...deepLayout.value, ...shallowLayout.value })

  watch(
    [shallowLayout, deepLayout],
    () => { formLayout.value = { ...deepLayout.value, ...shallowLayout.value } },
    { deep: true }
  )
  return formLayout
}

export const FormLayout = defineComponent({
  name: 'FormLayout',
  props: {
    className: {},
    colon: { default: true },
    labelAlign: {},
    wrapperAlign: {},
    labelWrap: { default: false },
    labelWidth: {},
    wrapperWidth: {},
    wrapperWrap: { default: false },
    labelCol: {},
    wrapperCol: {},
    fullness: { default: false },
    size: { default: 'default' },
    layout: { default: 'horizontal' },
    direction: { default: 'ltr' },
    shallow: { default: true },
    feedbackLayout: {},
    tooltipLayout: {},
    bordered: { default: true },
    inset: { default: false },
    breakpoints: {},
    spaceGap: {},
    gridColumnGap: {},
    gridRowGap: {},
  },
  setup(customProps: any, { slots }: SetupContext) {
    const { props }: any = useResponsiveFormLayout(customProps as any)

    const deepLayout = useFormDeepLayout()
    const newDeepLayout = ref({
      ...deepLayout.value,
    })
    const shallowProps = ref({})
    watch(
      [props, deepLayout],
      () => {
        shallowProps.value = props.value.shallow ? props.value : undefined
        if (!props.value.shallow) {
          Object.assign(newDeepLayout.value, props.value)
        } else {
          if (props.value.size) {
            newDeepLayout.value.size = props.value.size
          }
          if (props.value.colon) {
            newDeepLayout.value.colon = props.value.colon
          }
        }
      },
      { deep: true, immediate: true }
    )

    provide(FormLayoutDeepContext, newDeepLayout)
    provide(FormLayoutShallowContext, shallowProps)

    const formPrefixCls = `${stylePrefix}-form`
    return () => {
      const classNames = {
        [`${formPrefixCls}-${props?.value.layout}`]: true,
        [`${formPrefixCls}-rtl`]: props?.value.direction === 'rtl',
        [`${formPrefixCls}-${props?.value.size}`]:
          props?.value.size !== undefined,
        [`${props?.value.className}`]: props?.value.className !== undefined,
      }
      
      return h(
        'div',
        {
          ref: 'root',
          class: classNames,
        },
        slots
      )
    }
  },
})