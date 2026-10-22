---
url: /components/pro/FaTextHighlight.md
---
# FaTextHighlight 文字高亮

带有渐变背景展开动画的文字高亮组件。

## 使用场景

* 带有渐变背景展开动画的文字高亮组件。
* 常见用法：自定义动画、方向控制、渐变色高亮、多段高亮。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| delay | 动画延迟 (ms) | `number` | `0` |
| duration | 动画持续时间 (ms) | `number` | `2000` |
| from | 高亮动画触发方向 | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` |
| textEndColor | 文字最终颜色 | `string` | `'inherit'` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，要高亮的文字 |

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
