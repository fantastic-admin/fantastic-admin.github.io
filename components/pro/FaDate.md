---
url: /components/pro/FaDate.md
---
# FaDate 日期

基于 `FaCalendarDate`、`FaCalendarMonth`、`FaCalendarYear` 组合的日期组件。默认渲染面板，设置 `picker` 后渲染为按钮触发的弹层选择器。启用 `withTime` 后可以同时选择日期和秒级时间。月视图和年视图只用于切换当前展示锚点，不会提交日期值。

## 使用场景

* 需要通过年、月、日三层视图选择日期
* 需要选择不带时区的日期时间
* 日期跨度较大，例如生日、历史日期、预约日期
* 需要复用框架内建日历组件和值类型语义

## 日期时间选择

```vue
<script setup lang="ts">
import type { CalendarDateTime } from '@internationalized/date'
import { shallowRef } from 'vue'

const value = shallowRef<CalendarDateTime>()
</script>

<template>
  <FaDate
    v-model="value"
    picker
    with-time
    default-time="09:00:00"
  />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `DateValue \| DateValue[]` | - | 受控选中日期，支持 `v-model` |
| `defaultValue` | `DateValue \| DateValue[]` | - | 非受控初始选中日期 |
| `placeholder` | `DateValue` | - | 受控展示锚点，支持 `v-model:placeholder` |
| `defaultPlaceholder` | `DateValue` | 今天 | 非受控初始展示锚点 |
| `view` | `'date' \| 'month' \| 'year'` | - | 受控视图，支持 `v-model:view` |
| `defaultView` | `'date' \| 'month' \| 'year'` | `'date'` | 非受控初始视图 |
| `minValue` | `DateValue` | - | 最小可选日期 |
| `maxValue` | `DateValue` | - | 最大可选日期 |
| `multiple` | `boolean` | 按值类型推断 | 是否启用多选 |
| `withTime` | `boolean` | `false` | 是否启用时间选择，启用后输出 `CalendarDateTime` |
| `defaultTime` | `string` | `'00:00:00'` | 首次选择日期时使用的默认时间，格式为 `HH:mm:ss` |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `locale` | `string` | `'zh-CN'` | 日期格式化语言 |
| `dir` | `'ltr' \| 'rtl'` | 跟随文档方向 | 阅读方向 |
| `weekStartsOn` | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` | 一周起始日 |
| `weekdayFormat` | `'narrow' \| 'short' \| 'long'` | `'short'` | 星期标题格式 |
| `fixedWeeks` | `boolean` | `true` | 日期视图是否固定 6 行 |
| `numberOfMonths` | `number` | `1` | 日期视图同时展示的月份数量 |
| `pagedNavigation` | `boolean` | `false` | 多月展示时是否按页翻动 |
| `preventDeselect` | `boolean` | 单选 `true`，多选 `false` | 是否禁止点击已选日期取消选择 |
| `initialFocus` | `boolean` | `false` | 挂载后是否自动聚焦 |
| `disableDaysOutsideCurrentView` | `boolean` | `false` | 是否禁用当前视图外的日期 |
| `isDateDisabled` | `(date: DateValue) => boolean` | - | 判断日期是否禁用 |
| `isDateUnavailable` | `(date: DateValue) => boolean` | - | 判断日期是否不可用 |
| `isMonthDisabled` | `(month: DateValue) => boolean` | - | 判断月份是否禁用 |
| `isMonthUnavailable` | `(month: DateValue) => boolean` | - | 判断月份是否不可用 |
| `isYearDisabled` | `(year: DateValue) => boolean` | - | 判断年份是否禁用 |
| `isYearUnavailable` | `(year: DateValue) => boolean` | - | 判断年份是否不可用 |
| `calendarLabel` | `string` | `'日期选择'` | 日期视图无障碍标签 |
| `monthCalendarLabel` | `string` | `'月份选择'` | 月份视图无障碍标签 |
| `yearCalendarLabel` | `string` | `'年份选择'` | 年份视图无障碍标签 |
| `monthNextPage` | `(placeholder: DateValue) => DateValue` | - | 月份视图下一页函数 |
| `monthPrevPage` | `(placeholder: DateValue) => DateValue` | - | 月份视图上一页函数 |
| `yearNextPage` | `(placeholder: DateValue) => DateValue` | - | 年份视图下一页函数 |
| `yearPrevPage` | `(placeholder: DateValue) => DateValue` | - | 年份视图上一页函数 |
| `yearsPerPage` | `number` | `12` | 年份视图每页展示年份数 |
| `picker` | `boolean` | `false` | 是否启用内置选择器形态 |
| `open` | `boolean` | - | 受控弹层打开状态，支持 `v-model:open` |
| `defaultOpen` | `boolean` | `false` | 非受控初始弹层打开状态 |
| `pickerPlaceholder` | `string` | `'选择日期'` | 选择器按钮空值文案 |
| `formatValue` | `(value: DateValue \| DateValue[] \| undefined) => string` | - | 自定义选择器按钮展示文案 |
| `formatMonthLabel` | `(date: DateValue) => string` | - | 自定义月份标题文案 |
| `formatYearLabel` | `(date: DateValue) => string` | - | 自定义年份标题文案 |
| `formatYearRangeLabel` | `(start: DateValue, end: DateValue) => string` | - | 自定义年份范围标题文案 |
| `closeOnSelect` | `boolean` | 单选 `true`，多选或时间模式 `false` | 选择日期后是否自动关闭弹层 |
| `triggerClass` | `HTMLAttributes['class']` | - | 选择器触发按钮 class |
| `triggerVariant` | `ButtonVariants['variant']` | `'outline'` | 选择器触发按钮风格 |
| `triggerSize` | `ButtonVariants['size']` | `'default'` | 选择器触发按钮尺寸 |
| `triggerIcon` | `string \| false` | `'i-lucide:calendar'` | 选择器触发按钮图标 |
| `contentClass` | `HTMLAttributes['class']` | - | 选择器弹层内容 class |
| `popoverAlign` | `PopoverContentProps['align']` | - | 弹层对齐方式 |
| `popoverAlignOffset` | `PopoverContentProps['alignOffset']` | - | 弹层对齐偏移 |
| `popoverSide` | `PopoverContentProps['side']` | - | 弹层弹出方向 |
| `popoverSideOffset` | `PopoverContentProps['sideOffset']` | - | 弹层方向偏移 |
| `popoverCollisionPadding` | `PopoverContentProps['collisionPadding']` | - | 弹层碰撞边距 |
| `class` | `HTMLAttributes['class']` | - | 当前面板 class |

## Slots

| 名称 | 说明 | 作用域参数 |
|------|------|------------|
| `trigger` | 自定义选择器触发器，仅 `picker` 模式生效 | `value, label, open, disabled, readonly` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `update:modelValue` | 选中日期更新，用于 `v-model` | `value: DateValue \| DateValue[] \| undefined` |
| `change` | 用户交互导致日期值变化时触发 | `value: DateValue \| DateValue[] \| undefined` |
| `update:placeholder` | 展示锚点变化，用于 `v-model:placeholder` | `value: DateValue` |
| `update:open` | 选择器弹层打开状态变化，用于 `v-model:open` | `value: boolean` |
| `update:view` | 当前视图变化，用于 `v-model:view` | `view: 'date' \| 'month' \| 'year'` |

## 注意事项

1. `withTime` 启用后，`modelValue` 和事件值为不带时区的 `CalendarDateTime`，默认选择器文案格式为 `YYYY-MM-DD HH:mm:ss`。
2. `withTime` 与 `multiple` 不兼容。多选生效时会忽略时间选择，并在开发环境输出警告。
3. 时间选择使用 `input[type="time"]` 和固定的 `step="1"`，支持到秒；未选择日期前输入框处于禁用状态。
4. 修改日期会保留当前时间；清空时间输入框会恢复 `defaultTime` 并提交新值。
5. `minValue` 与 `maxValue` 只限制日期，不校验时间范围。
6. `modelValue` 始终表示最终选中值；选择月份和年份只会更新 `placeholder` 与 `view`。
7. `picker` 模式每次打开时，非受控 `view` 会重置为 `defaultView`。
8. `closeOnSelect` 只在日期视图选择日期后生效；选择月份、年份不会关闭弹层。显式传入时优先于默认规则。
9. 月份和年份禁用状态不会从 `isDateDisabled` 自动推导，如需限制请传入对应回调。
10. 范围选择请使用已有范围组件；`FaDate` 不提供 `range` prop。
