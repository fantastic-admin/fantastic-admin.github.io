# FaAnimatedCountTo 动画计数 <Badge type="pro" text="专业版" /> <Badge text="v5.3.0" />

包含 `FaAnimatedCountToGroup` 和 `FaAnimatedCountTo` 两个组件。

## `FaAnimatedCountTo` Props

| 属性名          | 说明         | 类型                                                                                                                                                | 默认值 |
| --------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| value           | 数值         | `number`                                                                                                                                            | -      |
| format          | 格式化选项   | [Intl.NumberFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) | -      |
| locales         | 语言环境     | [Intl.LocalesArgument](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales)     | -      |
| prefix          | 前缀         | `string`                                                                                                                                            | -      |
| suffix          | 后缀         | `string`                                                                                                                                            | -      |
| trend           | 控制数字方向 | `1 \| 0 \| -1`                                                                                                                                      | -      |
| transformTiming | 转换动画     | [EffectTiming](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getTiming#return_value)                                             | -      |
| spinTiming      | 旋转动画     | [EffectTiming](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getTiming#return_value)                                             | -      |
| opacityTiming   | 透明度动画   | [EffectTiming](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getTiming#return_value)                                             | -      |
| willChange      | 优化性能     | `boolean`                                                                                                                                           | -      |
| class           | 自定义类名   | `string`                                                                                                                                            | -      |

## `FaAnimatedCountTo` Events

| 事件名          | 说明         | 参数 |
| --------------- | ------------ | ---- |
| animationsstart | 动画开始时   | -    |
| animationsend   | 动画结束时   | -    |
