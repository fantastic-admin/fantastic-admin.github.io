---
url: /components/pro/FaAnimatedCountTo.md
---
# FaAnimatedCountTo 数字动画

数字滚动动画组件，基于 @number-flow/vue 实现平滑的数字过渡效果。

## 使用场景

* 数字滚动动画组件，基于 @number-flow/vue 实现平滑的数字过渡效果。
* 常见用法：使用格式、组合使用、数据统计卡片、带趋势标识。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value | 要显示的值 | `Value` | `required` |
| format | 数字格式配置 | `Format` | `undefined` |
| locales | 区域设置 | `string` | `undefined` |
| prefix | 前缀 | `string` | `undefined` |
| suffix | 后缀 | `string` | `undefined` |
| trend | 趋势标识 | `1 \| 0 \| -1` | `undefined` |
| transformTiming | 变换动画时机 | `EffectTiming` | `undefined` |
| spinTiming | 旋转动画时机 | `EffectTiming` | `undefined` |
| opacityTiming | 透明度动画时机 | `EffectTiming` | `undefined` |
| willChange | 是否优化性能 | `boolean` | `false` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| animationsstart | 动画开始时触发 | `-` |
| animationsfinish | 动画结束时触发 | `-` |

## API

### FaAnimatedCountToGroup

| 属性 | 说明 |
|------|------|
| 无 props | 仅用于包裹多个 FaAnimatedCountTo 组件 |

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。

## FaAnimatedCountToGroup 数字动画组

用于包裹多个 FaAnimatedCountTo 组件，使多个数字动画同步执行。

## 使用场景

* 用于包裹多个 FaAnimatedCountTo 组件，使多个数字动画同步执行。
* 常见用法：统计数据面板、仪表盘数据。

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置多个 FaAnimatedCountTo 组件 |

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
