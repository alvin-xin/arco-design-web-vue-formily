import { defineComponent, h } from "vue";
import { composeExport, stylePrefix } from "../__builtins__";
import { observer } from "@formily/reactive-vue";
import { ISchema, RecursionField, useField, useFieldSchema } from "@formily/vue";
import { ArrayField } from "@formily/core";
import ArrayBase from "../array-base";
import { Card, Empty } from "@arco-design/web-vue";



const isAdditionComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('Addition') > -1
}

const isIndexComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('Index') > -1
}

const isRemoveComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('Remove') > -1
}

const isMoveUpComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('MoveUp') > -1
}

const isMoveDownComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('MoveDown') > -1
}

const isOperationComponent = (schema: ISchema) => {
  return (
    isAdditionComponent(schema) ||
    isRemoveComponent(schema) ||
    isMoveDownComponent(schema) ||
    isMoveUpComponent(schema)
  )
}

const InternalArrayCards = observer(defineComponent({
  name: "ArrayCards",
  inheritAttrs: false,
  props: ['onChange'],
  setup(_props, { attrs }) {
    const fieldRef = useField<ArrayField>()
    const schemaRef = useFieldSchema()
    const prefixCls = `${stylePrefix}-array-cards`
    const { getKey, keyMap } = ArrayBase.useKey(schemaRef.value)
    const props = { ...attrs }

    return () => {
      const field = fieldRef.value
      const schema = schemaRef.value
      const dataSource = Array.isArray(field.value) ? field.value : []

      if (!schema) throw new Error('can not found schema object')
      
      const renderItems = () => {
        return dataSource?.map((item, index) => {
          const items = Array.isArray(schema.items)
            ? schema.items[index] || schema.items[0]
            : schema.items

          const title = h(
            'span',
            {},
            {
              default: () => [
                h(RecursionField, {
                  schema: items,
                  name: index,
                  filterProperties: (schema: ISchema) => {
                    if (!isIndexComponent(schema)) return false
                    return true
                  },
                  onlyRenderProperties: true,
                }),
                props.title || field.title,
              ],
            }
          )

          const extra = h(
            'span',
            {},
            {
              default: () => [
                h(RecursionField, {
                  schema: items,
                  name: index,
                  filterProperties: (schema: ISchema) => {
                    if (!isOperationComponent(schema)) return false
                    return true
                  },
                  onlyRenderProperties: true,
                }),
                props.extra,
              ],
            }
          )

          const content = h(RecursionField, {
            schema: items,
            name: index,
            filterProperties: (schema: ISchema) => {
              if (isIndexComponent(schema)) return false
              if (isOperationComponent(schema)) return false
              return true
            },
          })

          return h(
            ArrayBase.Item,
            {
              key: getKey(item, index),
              index,
              record: item,
            },
            {
              default: () =>
                h(
                  Card,
                  {
                    ...attrs,
                    class: [`${prefixCls}-item`],
                  },
                  {
                    default: () => content,
                    title: () => title,
                    extra: () => extra,
                  }
                ),
            }
          )
        })
      }

      const renderAddition = () => {
        return schema.reduceProperties((addition, schema, key) => {
          if (isAdditionComponent(schema)) {
            return h(RecursionField, {
              schema,
              name: key,
            })
          }
          return addition
        }, null)
      }

      const renderEmpty = () => {
        if (dataSource?.length) return
        return h(
          Card,
          {
            ...attrs,
            class: [`${prefixCls}-item`],
            title: props.title || field.title,
          },
          {
            default: () => h(Empty),
          }
        )
      }

      return h(
        ArrayBase, 
        { keyMap }, 
        { default: () => [renderEmpty(), renderItems(), renderAddition()] }
      )
      
    }
  }
}))


export const ArrayCards = composeExport(InternalArrayCards, {
  Index: ArrayBase.Index,
  SortHandle: ArrayBase.SortHandle,
  Addition: ArrayBase.Addition,
  Remove: ArrayBase.Remove,
  MoveDown: ArrayBase.MoveDown,
  MoveUp: ArrayBase.MoveUp,
  useArray: ArrayBase.useArray,
  useIndex: ArrayBase.useIndex,
  useRecord: ArrayBase.useRecord,
})

export default ArrayCards;
