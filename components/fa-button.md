# FaButton 按钮

包含 `FaButton` 和 `FaButtonGroup` <Badge text="v5.5.0" /> 两个组件。

## `FaButton` Props

| 属性名   | 说明       | 类型                                                                          | 默认值      |
| -------- | ---------- | ----------------------------------------------------------------------------- | ----------- |
| variant  | 按钮类型   | `'default' \| 'link' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost'` | `'default'` |
| size     | 按钮尺寸   | `'default' \| 'sm' \| 'lg' \| 'icon'`                                         | `'default'` |
| class    | 自定义类名 | `string`                                                                      | -           |
| disabled | 是否禁用   | `boolean`                                                                     | `false`     |
| loading  | 是否加载中 | `boolean`                                                                     | `false`     |

## `FaButton` Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## `FaButtonGroup` Props

| 属性名   | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| vertical | 是否垂直 | `boolean` | `false` |

## `FaButtonGroup` Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
