---
url: /components/pro/FaCalendarMonthRange.md
---
# FaCalendarMonthRange 月份范围日历

基于 shadcn-vue 风格与 Reka UI MonthRangePicker 封装的月份范围选择面板，使用 `@internationalized/date` 处理月份值。

## 使用场景

* 月份范围选择面板
* 内置按钮弹层形态的月份范围选择器
* 需要限制可选月份范围的表单场景
* 需要限制最大月份跨度的筛选场景
* 需要保留日历系统、locale、无时区日期语义的月份范围选择

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `CalendarMonthRangeValue` | - | 受控选中范围，支持 `v-model` |
| `defaultValue` | `CalendarMonthRangeValue` | 空范围 | 非受控初始选中范围 |
| `placeholder` | `DateValue` | - | 受控展示年份锚点，支持 `v-model:placeholder` |
| `defaultPlaceholder` | `DateValue` | 起始月份或今天 | 非受控初始展示年份锚点 |
| `minValue` | `DateValue` | - | 最小可选月份 |
| `maxValue` | `DateValue` | - | 最大可选月份 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `locale` | `string` | `'zh-CN'` | 月份与年份格式化语言 |
| `dir` | `'ltr' \| 'rtl'` | 跟随文档方向 | 阅读方向 |
| `preventDeselect` | `boolean` | `true` | 是否禁止点击已选月份取消选择 |
| `initialFocus` | `boolean` | `false` | 挂载后是否自动聚焦 |
| `isMonthDisabled` | `(month: DateValue) => boolean` | - | 判断月份是否禁用 |
| `isMonthUnavailable` | `(month: DateValue) => boolean` | - | 判断月份是否不可用 |
| `calendarLabel` | `string` | `'月份范围选择'` | 无障碍标签 |
| `nextPage` | `(placeholder: DateValue) => DateValue` | - | 自定义下一页函数，默认按年后翻 |
| `prevPage` | `(placeholder: DateValue) => DateValue` | - | 自定义上一页函数，默认按年前翻 |
| `allowNonContiguousRanges` | `boolean` | `false` | 是否允许范围中包含不可用月份 |
| `maximumMonths` | `number` | - | 最大可选月份数 |
| `fixedDate` | `'start' \| 'end'` | - | 固定范围开始或结束月份 |
| `picker` | `boolean` | `false` | 是否启用内置选择器形态 |
| `open` | `boolean` | - | 受控弹层打开状态，支持 `v-model:open`，仅 `picker` 模式生效 |
| `defaultOpen` | `boolean` | `false` | 非受控初始弹层打开状态，仅 `picker` 模式生效 |
| `pickerPlaceholder` | `string` | `'选择月份范围'` | 选择器按钮空值文案 |
| `formatValue` | `(value: CalendarMonthRangeValue) => string` | - | 自定义选择器按钮展示文案 |
| `closeOnSelect` | `boolean` | `true` | 得到完整范围后是否自动关闭弹层 |
| `triggerClass` | `HTMLAttributes['class']` | - | 选择器触发按钮 class |
| `triggerVariant` | `ButtonVariants['variant']` | `'outline'` | 选择器触发按钮风格 |
| `triggerSize` | `ButtonVariants['size']` | `'default'` | 选择器触发按钮尺寸 |
| `triggerIcon` | `string \| false` | `'i-lucide:calendar'` | 选择器触发按钮图标，传 `false` 隐藏 |
| `contentClass` | `HTMLAttributes['class']` | - | 选择器弹层内容 class |
| `popoverAlign` | `PopoverContentProps['align']` | - | 选择器弹层对齐方式 |
| `popoverAlignOffset` | `PopoverContentProps['alignOffset']` | - | 选择器弹层对齐偏移 |
| `popoverSide` | `PopoverContentProps['side']` | - | 选择器弹层弹出方向 |
| `popoverSideOffset` | `PopoverContentProps['sideOffset']` | - | 选择器弹层方向偏移 |
| `popoverCollisionPadding` | `PopoverContentProps['collisionPadding']` | - | 选择器弹层碰撞边距 |
| `class` | `HTMLAttributes['class']` | - | 月份范围面板 class |

### picker

默认 `picker=false`，组件仍渲染月份范围面板。设置 `picker` 后会内置 `FaPopover` 与 `FaButton`，渲染为按钮触发的选择器。

`class` 始终作用于月份范围面板；触发按钮使用 `triggerClass`，弹层内容使用 `contentClass`。`disabled` 会禁用触发按钮并阻止打开；`readonly` 允许打开查看，但不能修改值。

默认按钮文案：空值显示 `pickerPlaceholder`；完整范围显示 `start 至 end`；只有一端时显示 `start 至 ...` 或 `... 至 end`。弹层默认只在触发 `complete` 后关闭。

## 类型

```ts
import type { DateValue } from '@internationalized/date'

export interface CalendarMonthRangeValue {
  start: DateValue | undefined
  end: DateValue | undefined
}

export interface CalendarMonthRangeCompleteValue {
  start: DateValue
  end: DateValue
}
```

空范围使用：

```ts
{
  start: undefined,
  end: undefined,
}
```

对外触发的 `start`、`end` 与 `placeholder` 会统一规范为每月 `1` 号。

## Slots

| 名称 | 说明 | 作用域参数 |
|------|------|------------|
| `heading` | 自定义标题区 | `date` |
| `trigger` | 自定义选择器触发器，仅 `picker` 模式生效 | `value, label, open, disabled, readonly` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `update:modelValue` | 选中范围更新，用于 `v-model` | `value: CalendarMonthRangeValue` |
| `change` | 用户交互导致范围变化时触发，半选也会触发 | `value: CalendarMonthRangeValue` |
| `complete` | 用户交互得到完整有效范围时触发 | `value: CalendarMonthRangeCompleteValue` |
| `update:placeholder` | 展示年份锚点变化，用于 `v-model:placeholder` | `value: DateValue` |
| `update:open` | 选择器弹层打开状态变化，用于 `v-model:open` | `value: boolean` |

## 注意事项

1. 组件只做月份范围面板，不包含输入框、弹层、快捷预设和确认按钮。
2. `change` 与 `complete` 只响应组件内部用户交互；父组件外部修改 `modelValue` 不会反向触发。
3. `placeholder` 是当前展示年份的锚点日期，不是输入框占位文字。
4. 同一个月份可以作为完整范围。
5. 组件默认按年翻页，翻页边界由 `minValue` / `maxValue` 控制。
6. 不提供 `layout` / `yearRange`，如需自定义标题区可使用 `heading` 插槽。
7. 清空时由外部将 `v-model` 设置为 `{ start: undefined, end: undefined }`。
8. `picker` 只改变渲染形态，不改变值类型、`change` / `complete` 事件和面板相关 props 的语义。
