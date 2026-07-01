---
url: /components/pro/FaSpotlightCard.md
---
# FaSpotlightCard 聚光灯卡片

具有鼠标跟随聚光灯效果的卡片组件，当鼠标悬停时显示渐变光晕。

## 使用场景

* 具有鼠标跟随聚光灯效果的卡片组件，当鼠标悬停时显示渐变光晕。
* 常见用法：自定义配置、深色主题卡片、多卡片网格、自定义颜色。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| gradientSize | 渐变半径 (px) | `number` | `200` |
| gradientColor | 渐变颜色 | `string` | `'oklch(var(--primary))'` |
| gradientOpacity | 渐变透明度 | `number` | `0.1` |
| class | 外层容器类名 | `HTMLAttributes['class']` | `undefined` |
| slotClass | 内容区域类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置卡片内容 |

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
