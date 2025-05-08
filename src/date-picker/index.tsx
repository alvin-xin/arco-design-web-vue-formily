import { 
  DatePicker as ArcoDatePicker, 
  MonthPicker as ArcoMonthPicker, 
  YearPicker as ArcoYearPicker, 
  QuarterPicker as ArcoQuarterPicker, 
  WeekPicker as ArcoWeekPicker, 
  RangePicker as ArcoRangePicker
} from "@arco-design/web-vue";
import { connect, mapProps } from "@formily/vue";
import { transformComponent } from "../__builtins__";

// 转换组件，统一处理 change 事件
const TransformDatePicker = transformComponent(ArcoDatePicker, {
  change: 'update:modelValue'
});

const TransformMonthPicker = transformComponent(ArcoMonthPicker, {
  change: 'update:modelValue'
});

const TransformYearPicker = transformComponent(ArcoYearPicker, {
  change: 'update:modelValue'
});

const TransformQuarterPicker = transformComponent(ArcoQuarterPicker, {
  change: 'update:modelValue'
});

const TransformWeekPicker = transformComponent(ArcoWeekPicker, {
  change: 'update:modelValue'
});

const TransformRangePicker = transformComponent(ArcoRangePicker, {
  change: 'update:modelValue'
});

// 连接 Formily，处理属性映射
export const DatePicker = connect(
  TransformDatePicker,
  mapProps({ value: 'modelValue', readOnly: 'read-only' })
);

export const MonthPicker = connect(
  TransformMonthPicker,
  mapProps({ value: 'modelValue', readOnly: 'read-only' })
);

export const YearPicker = connect(
  TransformYearPicker,
  mapProps({ value: 'modelValue', readOnly: 'read-only' })
);

export const QuarterPicker = connect(
  TransformQuarterPicker,
  mapProps({ value: 'modelValue', readOnly: 'read-only' })
);

export const WeekPicker = connect(
  TransformWeekPicker,
  mapProps({ value: 'modelValue', readOnly: 'read-only' })
);

export const RangePicker = connect(
  TransformRangePicker,
  mapProps({ value: 'modelValue', readOnly: 'read-only' })
);

export default DatePicker;


