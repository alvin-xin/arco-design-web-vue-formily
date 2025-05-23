import { useFormLayout } from '../form-layout'
import type { VNode } from 'vue'
import { defineComponent, h } from 'vue'
import { Space as ArcoSpace } from "@arco-design/web-vue"


// const spaceSize: { [key: string]: number } = {
//   small: 8,
//   middle: 16,
//   large: 24,
// }

// export const Space = defineComponent({
//   name: 'Space',
//   props: ['size', 'align', 'direction'],
//   // inject: 'configProvider',
//   setup(props, { slots }) {
//     const layout = useFormLayout()

//     return () => {
//       const {
//         align,
//         size = layout.value?.spaceGap ?? 'small',
//         direction = 'horizontal',
//       } = props
//       const prefixCls = `ant-space`
//       const children = slots.default?.() as any;
//       let items: any = []
//       if (Array.isArray(children)) {
//         if (children.length === 1) {
//           if ((children[0]['tag'] as string)?.endsWith('Fragment')) {
//             // Fragment hack
//             items = (children[0]['componentOptions'] as { children: VNode[] })
//               ?.children
//           } else {
//             items = children
//           }
//         } else {
//           items = children
//         }
//       }
//       const len = items.length
//       if (len === 0) return null

//       const mergedAlign =
//         align === undefined && direction === 'horizontal' ? 'center' : align

//       const someSpaceClass = {
//         [prefixCls]: true,
//         [`${prefixCls}-${direction}`]: true,
//         [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
//       }

//       const itemClassName = `${prefixCls}-item`
//       const marginDirection = 'marginRight' // directionConfig === 'rtl' ? 'marginLeft' : 'marginRight';

//       const renderItems = items.map((child: any, i: any) =>
//         h(
//           'div',
//           {
//             class: itemClassName,
//             key: `${itemClassName}-${i}`,
//             style:
//               i === len - 1
//                 ? {}
//                 : {
//                     [direction === 'vertical'
//                       ? 'marginBottom'
//                       : marginDirection]:
//                       typeof size === 'string'
//                         ? `${spaceSize[size]}px`
//                         : `${size}px`,
//                   },
//           },
//           { default: () => [child] }
//         )
//       )

//       return h(
//         'div',
//         {
//           class: someSpaceClass,
//         },
//         {
//           default: () => renderItems,
//         }
//       )
//     }
//   },
// })

// export default Space

export const Space = defineComponent({
  inheritAttrs: false,
  setup(_props, { attrs, slots }) {
    const layout = useFormLayout();
    return () => {

      console.log
      return h(ArcoSpace, {
        size: layout.value?.spaceGap??'small',
        ...attrs
      }, {
        default: () => slots.default?.()
      })
    }
  }
})

export default Space
