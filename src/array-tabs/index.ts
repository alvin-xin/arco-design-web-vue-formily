import { observer } from "@formily/reactive-vue";
import { defineComponent, h, ref, SetupContext } from "vue";
import { Tabs, TabPane, Badge } from "@arco-design/web-vue";
import { RecursionField, useField, useFieldSchema } from "@formily/vue";
import { ArrayField } from "@formily/core";
import { stylePrefix } from "../__builtins__";

export const ArrayTabs = observer(
  defineComponent({
    name: "ArrayTabs",
    emits: ["change"],
    setup(props, { attrs, emit, slots }: SetupContext) {
      const fieldRef = useField<ArrayField>();
      const schemaRef = useFieldSchema();

      const prefixCls = `${stylePrefix}-array-tabs`;
      const activeKey = ref("tab-0");

      return () => {
        const field = fieldRef.value;
        const schema = schemaRef.value;
        const value = Array.isArray(field.value) ? field.value : [];
        const dataSource = value?.length ? value : [{}];

        const onChange = (key: string | number) => {
          activeKey.value = key as string
        };
        const onAdd = () => {
          const id = dataSource.length
            if (field?.value?.length) {
              field.push(null)
            } else {
              field.push(null, null)
            }
            activeKey.value = `tab-${id}`
        };
        const onDelete = (key: string | number) => {
          const index = Number(`${key}`?.match(/-(\d+)/)?.[1])
          field.remove(Number(index))
          if (activeKey.value === key) {
            activeKey.value = `tab-${index - 1}`
          }
        };

        const badgedTab = (index: number) => {
          const tab = `${field.title || "Untitled"} ${index + 1}`;
          const path = field.address.concat(index);
          const errors = field.form.queryFeedbacks({
            type: "error",
            address: `${path}.**`,
          });

          if (errors.length) {
            return h(
              Badge,
              {
                class: `${prefixCls}-errors-badge`,
                count: errors.length,
              },
              {
                default: () => [tab],
              }
            );
          }

          return tab;
        };

        const renderItems = () => {
          return dataSource?.map((item, index) => {
            const items = Array.isArray(schema.items)
              ? schema.items[index]
              : schema.items;
            const key = `tab-${index}`;

            return h(
              TabPane,
              {
                key,
                closable: index !== 0,
                name: key,
              },
              {
                default: () =>
                  h(RecursionField, { schema: items, name: index }),
                title: () => [badgedTab(index)],
              }
            );
          });
        };

        return h(Tabs, 
          {
            ...props,
            ...attrs,
            activeKey: activeKey.value,
            // show-add-button auto-switch
            'show-add-button': true,
            'auto-switch': true,
            editable: true,
            type: 'card-gutter',
            onChange: onChange,
            onAdd: onAdd,
            onDelete: onDelete
          },
          {
            default: () => [renderItems()]
          }
        )
      };
    },
  })
);


export default  ArrayTabs;