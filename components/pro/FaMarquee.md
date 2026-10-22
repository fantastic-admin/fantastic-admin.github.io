---
url: /components/pro/FaMarquee.md
---
# FaMarquee 滚动横幅

无限滚动的内容展示组件，支持水平/垂直滚动和悬停暂停。

## 使用场景

* 无限滚动的内容展示组件，支持水平/垂直滚动和悬停暂停。
* 常见用法：垂直滚动、反向滚动、客户评价滚动、合作伙伴 Logo。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| reverse | 是否反向滚动 | `boolean` | `false` |
| pauseOnHover | 悬停时暂停 | `boolean` | `false` |
| vertical | 是否垂直滚动 | `boolean` | `false` |
| repeat | 重复次数 | `number` | `4` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，滚动内容 |

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
