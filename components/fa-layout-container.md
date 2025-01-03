# FaLayoutContainer 布局容器

## Props

| 属性名             | 说明             | 类型               | 默认值 |
| ------------------ | ---------------- | ------------------ | ------ |
| enableLeftSide     | 是否启用左侧边栏 | `boolean`          | `true` |
| enableRightSide    | 是否启用右侧边栏 | `boolean`          | `true` |
| leftSideWidth      | 左侧边栏宽度     | `number \| string` | `300`  |
| rightSideWidth     | 右侧边栏宽度     | `number \| string` | `300`  |
| hideLeftSideToggle | 是否隐藏左侧边栏切换按钮 | `boolean`          | `false` |
| hideRightSideToggle | 是否隐藏右侧边栏切换按钮 | `boolean`          | `false` |

## Slots

| 插槽名    | 说明           |
| --------- | -------------- |
| default   | 自定义默认内容 |
| leftSide  | 自定义左侧内容 |
| rightSide | 自定义右侧内容 |
