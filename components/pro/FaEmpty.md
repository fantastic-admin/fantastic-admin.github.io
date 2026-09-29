---
url: /components/pro/FaEmpty.md
---
# FaEmpty 空状态

用于展示列表/表格/内容为空时的状态提示，支持自定义图标和内容。

## 使用场景

* 表格/列表无数据
* 搜索无结果
* 页面内容为空
* 购物车为空
* 消息列表为空
* 收藏/历史记录为空

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `icon` | `string` | - | 图标名称 |
| `title` | `string` | - | 标题文字 |
| `description` | `string` | - | 描述文字 |
| `class` | `HTMLAttributes['class']` | - | 容器 CSS 类 |

## Slots

| 名称 | 说明 |
|------|------|
| `icon` | 自定义图标 |
| `title` | 自定义标题 |
| `description` | 自定义描述 |
| `default` | 底部操作区内容 |

## 注意事项

1. **区域显示**：只有提供对应内容（props 或 slots）的区域才会显示
2. **slot 优先**：slot 内容会覆盖对应的 props
3. **居中对齐**：内容默认居中对齐
4. **间距适当**：各区域之间有适当的间距
