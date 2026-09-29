---
url: /components/pro/FaDigitalCard.md
---
# FaDigitalCard 数字卡片

用于展示统计数据、指标数字的卡片组件，支持趋势标识和提示说明。

## 使用场景

* 用于展示统计数据、指标数字的卡片组件，支持趋势标识和提示说明。
* 常见用法：带趋势标识、带图标和提示、数据看板、带说明信息。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 标题 | `string` | `required` |
| titleTips | 标题提示信息 | `string` | `undefined` |
| icon | 右上角图标 | `string` | `undefined` |
| digital | 数字值 | `string \| number` | `required` |
| description | 描述文字 | `string` | `undefined` |
| trend | 趋势标识 | `'up' \| 'stable' \| 'down'` | `undefined` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| - | 无插槽 |

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
