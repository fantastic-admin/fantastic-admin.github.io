---
url: /components/pro/FaGradientButton.md
---
# FaGradientButton 渐变按钮

带有彩虹渐变边框动画效果的按钮组件。

## 使用场景

* 带有彩虹渐变边框动画效果的按钮组件。
* 常见用法：自定义颜色、彩虹按钮、蓝色主题、火焰主题。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| colors | 渐变颜色数组 | `string[]` | 彩虹七色 |
| duration | 动画周期 (ms) | `number` | `2500` |
| class | 外层容器类名 | `HTMLAttributes['class']` | `undefined` |
| contentClass | 内容区域类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，按钮内容 |

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
