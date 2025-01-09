# FaScrollArea 滚动区域

## Props

| 属性名        | 说明                                 | 类型      | 默认值                     |
| ------------- | ------------------------------------ | --------- | -------------------------- |
| horizontal    | 是否水平                             | `boolean` | `false`                    |
| scrollbar     | 是否显示滚动条                       | `boolean` | `true`                     |
| mask          | 是否显示遮罩                         | `boolean` | `false`                    |
| gradientColor | 遮罩渐变颜色，会从透明渐变到遮罩颜色 | `string`  | `'hsl(var(--background))'` |
| class         | 自定义类名                           | `string`  | -                          |
| contentClass  | 内容自定义类名                       | `string`  | -                          |

## Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
