import { IFormFeedback, Form as FormType } from "@formily/core";
import { FormProvider, h, useForm } from "@formily/vue";
import { Component, SetupContext, defineComponent } from "vue";

export interface FormProps {
  form?: FormType
  component?: Component,
  onAutoSubmit?: (values: any) => any
  onAutoSubmitFailed?: (feedbacks: IFormFeedback[]) => void
}

export const Form = defineComponent({
  name: "FForm",
  props: ['form', 'component', 'onAutoSubmit', 'onAutoSubmitFailed'],
  setup(props: FormProps, { attrs, slots }: SetupContext) {
    const top = useForm();

    return () => {
      const { form, component = 'form', onAutoSubmit = attrs.onAutoSubmit, onAutoSubmitFailed = attrs.onAutoSubmitFailed } = props;

      const renderContent = (form: FormType) => {
        return h(component, {
          ...attrs,
          onSubmit: (e: Event) => {
            e?.stopPropagation?.();
            e?.preventDefault?.();
            form
              .submit(onAutoSubmit as (e: any) => void)
              .catch(onAutoSubmitFailed as (e: any) => void)
          }
        }, slots)
      }

      if (form) {
        return h(FormProvider, { form }, { default: () => renderContent(form) })
      }

      if (!top.value) {
        throw new Error("must pass form instance by createForm")
      }

      return renderContent(top.value);
    }
  }
})