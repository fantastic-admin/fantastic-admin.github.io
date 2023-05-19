# LayoutContainer 布局容器 <sup class="pro-badge" />

## Props

| 参数                   | 说明                   | 类型            | 可选值 | 默认值 |
| :--------------------- | :--------------------- | :-------------- | :----- | :----- |
| enable-left-side       | 是否启用左侧栏         | boolean         | -      | true   |
| enable-right-side      | 是否启用右侧栏         | boolean         | -      | true   |
| left-side-width        | 左侧栏宽度             | number / string | -      | 300    |
| right-side-width       | 右侧栏宽度             | number / string | -      | 300    |
| hide-left-side-toggle  | 是否隐藏左侧栏切换按钮 | boolean         | -      | false  |
| hide-right-side-toggle | 是否隐藏右侧栏切换按钮 | boolean         | -      | false  |

## Slots

| name       | 说明                 |
| :--------- | :------------------- |
| -          | 中间区域的 HTML 内容 |
| left-side  | 左侧区域的 HTML 内容 |
| right-side | 右侧区域的 HTML 内容 |