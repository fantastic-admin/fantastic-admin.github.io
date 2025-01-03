# SearchBar 搜索面板

## Props

| 属性名        | 说明             | 类型      | 默认值  |
| ------------- | ---------------- | --------- | ------- |
| fold(v-model) | 是否折叠         | `boolean` | `true`  |
| showToggle    | 是否显示切换按钮 | `boolean` | `true`  |
| background    | 是否显示背景     | `boolean` | `false` |

## Slots

| 插槽名  | 说明           | 类型                                 |
| ------- | -------------- | ------------------------------------ |
| default | 自定义默认内容 | `{ fold: boolean, toggle: boolean }` |

## Events

| 事件名 | 说明                    | 回调参数                   |
| ------ | ----------------------- | -------------------------- |
| toggle | 切换展开/收起状态时触发 | `() => { value: boolean }` |
