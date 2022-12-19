# LayoutContainer 布局容器 <sup class="pro-badge" />

## Props

| 参数                | 说明                   | 类型            | 可选值 | 默认值 |
| :------------------ | :--------------------- | :-------------- | :----- | :----- |
| enableLeftSide      | 是否启用左侧栏         | boolean         | -      | true   |
| enableRightSide     | 是否启用右侧栏         | boolean         | -      | true   |
| leftSideWidth       | 左侧栏宽度             | number / string | -      | 300    |
| rightSideWidth      | 右侧栏宽度             | number / string | -      | 300    |
| hideLeftSideToggle  | 是否隐藏左侧栏切换按钮 | boolean         | -      | false  |
| hideRightSideToggle | 是否隐藏右侧栏切换按钮 | boolean         | -      | false  |

## Slot

| name      | 说明     |
| :-------- | :------- |
| -         | 中间区域 |
| leftSide  | 左侧区域 |
| rightSide | 右侧区域 |