import { observer } from "@formily/reactive-vue";
import { computed, defineComponent, h } from "vue";
import {
  composeExport,
  createContext,
  resolveComponent,
  stylePrefix,
  useContext,
} from "../__builtins__";
import { isValid } from "@formily/shared";
import Space from "../space";

const prefixCls = `${stylePrefix}-preview-text`;
const PlaceholderContext = createContext("N/A");

export const usePlaceholder = (value?: any) => {
  const placeholderCtx = useContext(PlaceholderContext);
  const placeholder = computed(() => {
    return isValid(value) && value !== ""
      ? value
      : resolveComponent(placeholderCtx.value) || "N/A";
  });

  return placeholder;
};

const Input = observer(
  defineComponent({
    name: "PreviewInput",
    setup(_props, { slots, attrs }) {
      // return () => slots?.default?.()
      return () => {
        const placeholder = usePlaceholder(attrs.value);
        return h(Space, { class: prefixCls, style: attrs.style }, () => [
          slots?.prepend?.(),
          slots?.prefix?.(),
          placeholder.value,
          slots?.suffix?.(),
          slots?.append?.(),
        ]);
      };
    },
  })
);

const Text = defineComponent<any>({
  name: 'PreviewText',
  setup(_props, { attrs }) {
    const placeholder = usePlaceholder()

    return () => {
      return h(
        'div',
        {
          class: [prefixCls],
          style: attrs.style,
        },
        {
          default: () => placeholder.value,
        }
      )
    }
  },
})

export const PreviewText = composeExport(Text, { 
  Input, 
  Placeholder: PlaceholderContext.Provider,
  usePlaceholder,
})