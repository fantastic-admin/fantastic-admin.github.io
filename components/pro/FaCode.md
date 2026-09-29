---
url: /components/pro/FaCode.md
---
# FaCode 代码块

带有语法高亮和复制功能的代码展示组件。

## 使用场景

* 带有语法高亮和复制功能的代码展示组件。
* 常见用法：多行代码、API 响应示例、SQL 查询示例、配合 FaCodePreview 使用。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| code | 要显示的代码内容 | `string` | `required` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| - | 无插槽 |

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
