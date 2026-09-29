---
url: /components/pro/FaScratchOff.md
---
# FaScratchOff 刮刮乐

可刮开涂层查看内容的互动组件，支持鼠标和触摸操作。

## 使用场景

* 可刮开涂层查看内容的互动组件，支持鼠标和触摸操作。
* 常见用法：自定义涂层颜色、抽奖活动、优惠券展示、节日贺卡。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| width | 宽度 (px) | `number` | `required` |
| height | 高度 (px) | `number` | `required` |
| minScratchPercentage | 最小刮开百分比触发完成 | `number` | `50` |
| gradientColors | 涂层渐变颜色数组 | `[string, string, string]` | `['#A97CF8', '#F38CB8', '#FDCC92']` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，刮开后显示的内容 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| complete | 刮开完成时触发 | `-` |

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
