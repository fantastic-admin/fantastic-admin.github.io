---
url: /components/pro/FaCalendarMonth.md
---
# FaCalendarMonth 月份日历

基于 shadcn-vue 风格与 Reka UI MonthPicker 封装的月份选择组件，支持单选与多选，使用 `@internationalized/date` 处理月份值。

## 使用场景

* 单月份或多月份选择面板
* 内置按钮弹层形态的月份选择器
* 需要限制可选月份范围的表单场景
* 需要保留日历系统、locale、无时区日期语义的月份选择
* 需要按年翻页浏览月份的选择场景

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `DateValue \| DateValue[]` | - | 受控选中月份，支持 `v-model` |
| `defaultValue` | `DateValue \| DateValue[]` | - | 非受控初始选中月份 |
| `placeholder` | `DateValue` | - | 受控展示年份锚点，支持 `v-model:placeholder` |
| `defaultPlaceholder` | `DateValue` | 今天 | 非受控初始展示年份锚点 |
| `minValue` | `DateValue` | - | 最小可选月份 |
| `maxValue` | `DateValue` | - | 最大可选月份 |
| `multiple` | `boolean` | 按值类型推断 | 是否启用多选，`modelValue` / `defaultValue` 为数组时会自动启用 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `locale` | `string` | `'zh-CN'` | 月份与年份格式化语言 |
| `dir` | `'ltr' \| 'rtl'` | 跟随文档方向 | 阅读方向 |
| `preventDeselect` | `boolean` | 单选 `true`，多选 `false` | 是否禁止点击已选月份取消选择 |
| `initialFocus` | `boolean` | `false` | 挂载后是否自动聚焦 |
| `isMonthDisabled` | `(month: DateValue) => boolean` | - | 判断月份是否禁用 |
| `isMonthUnavailable` | `(month: DateValue) => boolean` | - | 判断月份是否不可用 |
| `calendarLabel` | `string` | `'月份选择'` | 无障碍标签 |
| `nextPage` | `(placeholder: DateValue) => DateValue` | - | 自定义下一页函数，默认按年后翻 |
| `prevPage` | `(placeholder: DateValue) => DateValue` | - | 自定义上一页函数，默认按年前翻 |
| `picker` | `boolean` | `false` | 是否启用内置选择器形态 |
| `open` | `boolean` | - | 受控弹层打开状态，支持 `v-model:open`，仅 `picker` 模式生效 |
| `defaultOpen` | `boolean` | `false` | 非受控初始弹层打开状态，仅 `picker` 模式生效 |
| `pickerPlaceholder` | `string` | `'选择月份'` | 选择器按钮空值文案 |
| `formatValue` | `(value: DateValue \| DateValue[] \| undefined) => string` | - | 自定义选择器按钮展示文案 |
| `closeOnSelect` | `boolean` | 单选 `true`，多选 `false` | 选择后是否自动关闭弹层 |
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
| `class` | `HTMLAttributes['class']` | - | 月份面板 class |

### picker

默认 `picker=false`，组件仍渲染月份面板。设置 `picker` 后会内置 `FaPopover` 与 `FaButton`，渲染为按钮触发的选择器。

`class` 始终作用于月份面板；触发按钮使用 `triggerClass`，弹层内容使用 `contentClass`。`disabled` 会禁用触发按钮并阻止打开；`readonly` 允许打开查看，但不能修改值。

默认按钮文案：空值显示 `pickerPlaceholder`；单值显示 `value.toString()`；多选 1 项显示该项，超过 1 项显示 `已选择 N 项`。

## DateValue

组件值类型使用 `@internationalized/date` 的 `DateValue`。对外触发的 `modelValue` 与 `placeholder` 会统一规范为每月 `1` 号。

```ts
import type { DateValue } from '@internationalized/date'
import { parseDate } from '@internationalized/date'

const value = shallowRef<DateValue>(parseDate('2026-06-01'))
const values = shallowRef<DateValue[]>([parseDate('2026-03-01'), parseDate('2026-06-01')])
```

## Slots

| 名称 | 说明 | 作用域参数 |
|------|------|------------|
| `heading` | 自定义标题区 | `date` |
| `trigger` | 自定义选择器触发器，仅 `picker` 模式生效 | `value, label, open, disabled, readonly` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `update:modelValue` | 选中月份更新，用于 `v-model` | `value: DateValue \| DateValue[] \| undefined` |
| `change` | 用户交互导致月份变化时触发 | `value: DateValue \| DateValue[] \| undefined` |
| `update:placeholder` | 展示年份锚点变化，用于 `v-model:placeholder` | `value: DateValue` |
| `update:open` | 选择器弹层打开状态变化，用于 `v-model:open` | `value: boolean` |

## 注意事项

1. 组件支持单月份和多月份选择；范围选择请使用 `FaCalendarMonthRange`。
2. `change` 只响应组件内部用户交互；父组件外部修改 `modelValue` 不会反向触发。
3. `placeholder` 是当前展示年份的锚点日期，不是输入框占位文字。
4. 组件默认按年翻页，翻页边界由 `minValue` / `maxValue` 控制。
5. 不提供 `layout` / `yearRange`，如需自定义标题区可使用 `heading` 插槽。
6. 对外触发的月份值会统一规范为每月 `1` 号。
7. 多选模式下空值固定为 `[]`；单选清空时由外部将 `v-model` 设置为 `undefined`。
8. `modelValue` 或 `defaultValue` 为数组时会自动按多选处理，仍推荐显式传入 `multiple` 提升可读性。
9. `picker` 只改变渲染形态，不改变值类型、`change` 事件和面板相关 props 的语义。
