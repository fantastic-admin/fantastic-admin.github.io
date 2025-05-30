# FaTabs 标签页

## Props

| 属性名                               | 说明             | 类型                                                                                           | 默认值 |
| ------------------------------------ | ---------------- | ---------------------------------------------------------------------------------------------- | ------ |
| modelValue(v-model)                  | 值               | `string \| number`                                                                             | -      |
| list                                 | 选项卡           | `{ icon?: string, label: string, value: string \| number, class?: HTMLAttributes['class'] }[]` | -      |
| class                                | 自定义类名       | `string`                                                                                       | -      |
| listClass <Badge text="v5.5.0" />    | 选项卡自定义类名 | `string`                                                                                       | -      |
| contentClass <Badge text="v5.5.0" /> | 内容自定义类名   | `string`                                                                                       | -      |

## Slots

| 插槽名                   | 说明       |
| ------------------------ | ---------- |
| `list` 属性的 `value` 值 | 标签页内容 |
