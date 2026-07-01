---
url: /components/pro/FaBorderBeam.md
---
# FaBorderBeam 边框光束

在元素边缘显示动态流动的光束效果，适用于卡片、按钮等元素的装饰。

## 使用场景

* 在元素边缘显示动态流动的光束效果，适用于卡片、按钮等元素的装饰。
* 常见用法：自定义颜色和尺寸、渐变光束卡片、快速光束按钮、多彩光束。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| size | 光束尺寸 (px) | `number` | `200` |
| duration | 动画持续时间 (ms) | `number` | `15000` |
| delay | 动画延迟 (ms) | `number` | `0` |
| anchor | 锚点位置 | `number` | `90` |
| borderWidth | 边框宽度 (px) | `number` | `1` |
| colorFrom | 起始颜色 | `string` | `'#ffaa40'` |
| colorTo | 结束颜色 | `string` | `'#9c40ff'` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
