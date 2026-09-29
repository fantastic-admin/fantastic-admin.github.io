---
url: /components/pro/FaBlurReveal.md
---
# FaBlurReveal 模糊显现

元素进入视口时以模糊渐变的方式显现的动画组件。

## 使用场景

* 元素进入视口时以模糊渐变的方式显现的动画组件。
* 常见用法：多元素依次显现、标题淡入、列表项依次显现、卡片组显现。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| duration | 动画持续时间 (秒) | `number` | `1` |
| delay | 每个元素延迟时间 (秒) | `number` | `1` |
| blur | 模糊强度 | `string` | `'20px'` |
| yOffset | Y 轴偏移距离 (px) | `number` | `20` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置要显示的内容 |

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
