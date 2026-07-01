---
url: /components/pro/FaSparklesText.md
---
# FaSparklesText 闪耀文字

带有闪烁粒子动画效果的文字组件，文字周围会显示随机闪烁的星光。

## 使用场景

* 带有闪烁粒子动画效果的文字组件，文字周围会显示随机闪烁的星光。
* 常见用法：自定义粒子数量、自定义颜色、标题装饰、Logo 文字效果。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| text | 要显示的文字 | `string` | `required` |
| sparklesCount | 闪烁粒子数量 | `number` | `10` |
| colors | 粒子颜色配置 | `{ first: string, second: string }` | `{ first: '#9E7AFF', second: '#FE8BBB' }` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
