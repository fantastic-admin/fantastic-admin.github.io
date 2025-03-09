# FaScratchOff 刮刮乐 <Badge type="pro" text="专业版" /> <Badge text="v5.2.0" />

## Props

| 属性名               | 说明                      | 类型                       | 默认值                              |
| -------------------- | ------------------------- | -------------------------- | ----------------------------------- |
| width                | 宽度                      | `number`                   | `250`                               |
| height               | 高度                      | `number`                   | `250`                               |
| minScratchPercentage | 最小刮除百分比，0-100之间 | `number`                   | `50`                                |
| gradientColors       | 渐变色，用于划痕效果      | `[string, string, string]` | `['#A97CF8', '#F38CB8', '#FDCC92']` |
| class                | 自定义类名                | `string`                   | -                                   |

## Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Events

| 事件名   | 说明     | 参数 |
| -------- | -------- | ---- |
| complete | 刮除完成 | -    |