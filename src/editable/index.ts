import { useField } from '@formily/vue'
import { defineComponent, ref, onBeforeUnmount, computed, h } from 'vue'
import { observer } from '@formily/reactive-vue'
import { Popover as ArcoPopover } from "@arco-design/web-vue"
import { composeExport } from '../__builtins__'
import type { FormItemProps } from '../form-item'
import { FormBaseItem } from '../form-item'
import type { Field } from '@formily/core'
import { isVoidField } from '@formily/core'
import { stylePrefix } from '../__builtins__/configs'
import { reaction } from '@formily/reactive'
import { IconMessage, IconClose, IconEdit } from "@arco-design/web-vue/es/icon";


type IPopoverProps = any
export type EditableProps = FormItemProps

const useInitialPattern = (fieldRef: any) => {
  const field = fieldRef.value
  return computed(() => field?.parent?.pattern || field?.form?.pattern)
}

const useFormItemProps = (fieldRef: any): FormItemProps => {
  const field = fieldRef.value
  if (isVoidField(field)) return {}
  if (!field) return {}
  const takeMessage = () => {
    if (field.selfErrors.length) return field.selfErrors
    if (field.selfWarnings.length) return field.selfWarnings
    if (field.selfSuccesses.length) return field.selfSuccesses
  }

  return {
    feedbackStatus:
      field.validateStatus === 'validating' ? 'pending' : field.validateStatus,
    feedbackText: takeMessage(),
    extra: field.description,
  }
}

const EditableInner = observer(
  defineComponent<EditableProps>({
    name: 'Editable',
    setup(props, { attrs, slots }) {
      const fieldRef = useField<Field>()
      const innerRef = ref(document.body)
      const prefixCls = `${stylePrefix}-editable`
      const setEditable = (payload: boolean) => {
        const pattern = useInitialPattern(fieldRef)
        if (pattern.value !== 'editable') return
        fieldRef.value.setPattern(payload ? 'editable' : 'readPretty')
      }

      const dispose = reaction(
        () => {
          const pattern = useInitialPattern(fieldRef)
          return pattern
        },
        (pattern) => {
          if (pattern.value === 'editable') {
            fieldRef.value.setPattern('readPretty')
          }
        },
        {
          fireImmediately: true,
        }
      )

      onBeforeUnmount(() => {
        dispose()
      })

      return () => {
        const field = fieldRef.value
        const editable = field.pattern === 'editable'
        const itemProps = useFormItemProps(fieldRef)
        const pattern = useInitialPattern(fieldRef)

        const closeEditable = () => {
          if (editable && !fieldRef.value?.errors?.length) {
            setEditable(false)
          }
        }

        const onClick = (e: MouseEvent) => {
          const target = e.target as HTMLElement
          const close = innerRef.value.querySelector(`.${prefixCls}-close-btn`)

          if (target?.contains(close) || close?.contains(target)) {
            closeEditable()
          } else if (!editable) {
            setTimeout(() => {
              setEditable(true)
              setTimeout(() => {
                innerRef.value.querySelector('input')?.focus()
              })
            })
          }
        }

        const renderEditHelper = () => {
          if (editable) return
          return h(
            FormBaseItem,
            {
              ...attrs,
              ...itemProps,
            },
            {
              default: () => {
                return pattern.value === 'editable'
                  ? h(
                    IconEdit,
                      {
                        class: [`${prefixCls}-edit-btn`],
                      },
                      {}
                    )
                  : null
              },
            }
          )
        }

        const renderCloseHelper = () => {
          if (!editable) return
          return h(
            FormBaseItem,
            {
              ...attrs,
            },
            {
              default: () => {
                return h(
                  IconClose,
                  {
                    class: [`${prefixCls}-close-btn`],
                  },
                  {}
                )
              },
            }
          )
        }

        return h(
          'div',
          {
            class: prefixCls,
            ref: innerRef,
            onClick: onClick,
          },
          h(
            'div',
            {
              class: `${prefixCls}-content`,
            },
            [
              h(
                FormBaseItem,
                {
                  ...attrs,
                  ...itemProps,
                },
                slots
              ),
              renderEditHelper(),
              renderCloseHelper(),
            ]
          )
        )
      }
    },
  })
)

const EditablePopover = observer(
  // eslint-disable-next-line vue/one-component-per-file
  defineComponent<IPopoverProps>({
    name: 'EditablePopover',
    setup(props, { attrs, slots }) {
      const fieldRef = useField<Field>()
      const prefixCls = `${stylePrefix}-editable`
      const visible = ref(false)

      return () => {
        const field = fieldRef.value
        const pattern = useInitialPattern(fieldRef)
        return h(
          ArcoPopover,
          {
            ...props,
            ...attrs,
            class: [prefixCls, attrs.class],
            title: attrs.title || field.title,
            visible: visible.value,
            trigger: 'click',
            onVisibleChange: (value: boolean) => {
              visible.value = value
            },
          },
          {
            content: () => [slots.default?.() as any],
            default: () =>
              h(
                FormBaseItem,
                {
                  class: [`${prefixCls}-trigger`],
                },
                {
                  default: () =>
                    h(
                      'div',
                      {
                        class: [`${prefixCls}-content`],
                      },
                      {
                        default: () => [
                          h(
                            'span',
                            {
                              class: [`${prefixCls}-preview`],
                            },
                            {
                              default: () => [attrs.title || field.title],
                            }
                          ),
                          pattern.value === 'editable'
                            ? h(IconEdit, {
                                class: [`${prefixCls}-edit-btn`],
                              })
                            : h(IconMessage, {
                                class: [`${prefixCls}-edit-btn`],
                              }),
                        ],
                      }
                    ),
                }
              ),
          }
        )
      }
    },
  })
)

export const Editable = composeExport(EditableInner, {
  Popover: EditablePopover,
})

export default Editable
