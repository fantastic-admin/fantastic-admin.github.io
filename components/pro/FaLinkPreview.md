---
url: /components/pro/FaLinkPreview.md
---
# FaLinkPreview 链接预览

鼠标悬停显示链接预览图的组件，支持静态图片和动态网页截图。

## 使用场景

* 鼠标悬停显示链接预览图的组件，支持静态图片和动态网页截图。
* 常见用法：静态图片预览、自定义尺寸、文档链接预览、产品卡片预览。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| isStatic | 是否为静态图片模式 | `boolean` | `false` |
| imageSrc | 图片地址（静态模式必填） | `string` | `undefined` |
| url | 链接地址 | `string` | `required`（动态模式） |
| width | 预览图宽度 (px) | `number` | `200` |
| height | 预览图高度 (px) | `number` | `125` |
| class | 外层容器类名 | `HTMLAttributes['class']` | `undefined` |
| linkClass | 链接元素类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，触发预览的链接文字或元素 |

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
