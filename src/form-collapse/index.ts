import { connect, FragmentComponent, RecursionField, useField, useFieldSchema } from "@formily/vue"
import type { Schema, SchemaKey } from '@formily/json-schema'
import { computed, defineComponent, h, PropType, SetupContext } from "vue"
import { composeExport, stylePrefix } from "../__builtins__"
import { Collapse as ArcoCollapse, CollapseItem as ArcoCollapseItem, Badge } from "@arco-design/web-vue"
import { markRaw, model } from '@formily/reactive';
import { toArr } from '@formily/shared';
import { GeneralField } from '@formily/core';

type CollapseProps = {
  [key: string]: any
}
// type CollapseItemProps = {
//   [key: string]: any
// }

type ActiveKeys = string | number | Array<string | number>
type ActiveKey = string | number
export interface IFormCollapse {
  activeKeys: ActiveKeys
  hasActiveKey(key: ActiveKey): boolean
  setActiveKeys(key: ActiveKeys): void
  addActiveKey(key: ActiveKey): void
  removeActiveKey(key: ActiveKey): void
  toggleActiveKey(key: ActiveKey): void
}

export interface IFormCollapseProps extends CollapseProps {
  formCollapse?: IFormCollapse
}


type Panels = { name: SchemaKey; props: any; schema: Schema }[]


const usePanels = (collapseField: GeneralField, schema: Schema) => {
  const panels: Panels = []
  schema.mapProperties((schema, name) => {
    const field = collapseField.query(collapseField.address.concat(name)).take()
    if (field?.display === 'none' || field?.display === 'hidden') return
    if (schema['x-component']?.indexOf('CollapsePanel') > -1) {
      panels.push({
        name,
        props: {
          ...schema?.['x-component-props'],
          key: schema?.['x-component-props']?.key || name,
        },
        schema,
      })
    }
  })

  return panels;
}

const createFormCollapse = (defaultActiveKeys?: ActiveKeys) => {
  const formCollapse = model({
    activeKeys: defaultActiveKeys,
    setActiveKeys(keys: ActiveKeys) {
      formCollapse.activeKeys = keys
    },
    hasActiveKey(key: ActiveKey) {
      if (Array.isArray(formCollapse.activeKeys)) {
        if (formCollapse.activeKeys.includes(key)) {
          return true
        }
      } else if (formCollapse.activeKeys == key) {
        return true
      }
      return false
    },
    addActiveKey(key: ActiveKey) {
      if (formCollapse.hasActiveKey(key)) return
      formCollapse.activeKeys = toArr(formCollapse.activeKeys).concat(key)
    },
    removeActiveKey(key: ActiveKey) {
      if (Array.isArray(formCollapse.activeKeys)) {
        formCollapse.activeKeys = formCollapse.activeKeys.filter(
          (item) => item != key
        )
      } else {
        formCollapse.activeKeys = ''
      }
    },
    toggleActiveKey(key: ActiveKey) {
      if (formCollapse.hasActiveKey(key)) {
        formCollapse.removeActiveKey(key)
      } else {
        formCollapse.addActiveKey(key)
      }
    },
  })
  return markRaw(formCollapse)
}

const _FormCollapse = connect(defineComponent({
  inheritAttrs: false,
  props: {
    formCollapse: { type: Object as PropType<IFormCollapse> },
    // activeKey: { type: [String, Number] },
  },
  emits: ['input', 'change', 'focus', 'blur'],
  setup(props: IFormCollapseProps, { emit, attrs }: SetupContext) {
    const field = useField()
      const schema = useFieldSchema()
      const prefixCls = `${stylePrefix}-form-collapse`
      const _formCollapse = computed(() => props.formCollapse ?? createFormCollapse())

      const takeActiveKeys = (panels: Panels) => {
        if (props.activeKey) return props.activeKey
        if (_formCollapse.value?.activeKeys)
          return _formCollapse.value?.activeKeys
        if (attrs.accordion) return panels[0]?.name
        return panels.map((item) => item.name)
      }

      const badgedHeader = (key: SchemaKey, header: string) => {
        const errors = field.value.form.queryFeedbacks({
          type: 'error',
          address: `${field.value.address.concat(key)}.*`,
        })
        if (errors.length) {
          return h(
            Badge,
            {
              class: [`${prefixCls}-errors-badge`],
              count: errors.length,
              size: 'mini',
              dot: true,
            },
            { default: () => [header] }
          )
        }
        return header
      }

      return () => {
        const panels = usePanels(field.value, schema.value)
        const activeKey = takeActiveKeys(panels);
        return h(
          ArcoCollapse, 
          { 
            class: prefixCls, 
            ...attrs, 
            activeKey, 
            onChange: (activeKey: Array<string | number>) => {
              emit('input', activeKey)
              _formCollapse.value?.setActiveKeys(activeKey)
            }
          },
          {
            default: () => {
              return panels.map(({ name, props, schema }) => {
                const { header, ...restProps } = props;
                return h(
                  ArcoCollapseItem,
                  {
                    key: name,
                    ...restProps,
                    name,
                  },
                  {
                    default: () => [h(RecursionField, { schema, name }, {})],
                    header: () => h(FragmentComponent, {}, { default: () => [badgedHeader(name, header)] })
                  }
                )
              })
            }

            // [
            //   h(
            //     ArcoCollapseItem, 
            //     { header: '123123', key: 1 },
            //     { default: () => h('div', {}, '123') }
            //   )
            // ]
          }
        )
      }
  }
}))

export const CollapsePanel = defineComponent({
  name: 'FormCollapsePanel',
  props: {
    disabled: {
      type: Boolean,
      default: undefined
    },
    readOnly: {
      type: Boolean,
      default: undefined
    },
    header: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: undefined
    },
    style: {
      type: [String, Object],
      default: undefined
    }
  },
  emits: ['change', 'focus', 'blur'],
  setup(props, { slots }) {
    // 由于我们实际上不需要渲染这些属性，只需要声明接收即可
    return () => h(FragmentComponent, {}, slots)
  },
})


export const FormCollapse = composeExport(_FormCollapse, {
  CollapsePanel,
  createFormCollapse,
})

export default FormCollapse
