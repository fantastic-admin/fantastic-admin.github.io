# FaCountTo 计数到 <Badge type="pro" text="专业版" />

## Props

| 属性名     | 说明         | 类型                | 默认值     |
| ---------- | ------------ | ------------------- | ---------- |
| startVal   | 开始值       | `number`            | -          |
| endVal     | 结束值       | `number`            | -          |
| autoplay   | 是否自动播放 | `boolean`           | `true`     |
| duration   | 持续时间     | `number`            | `2000`     |
| transition | 过渡动画     | `TransitionPresets` | `'linear'` |
| delay      | 延迟时间     | `number`            | `0`        |
| decimals   | 小数位数     | `number`            | `0`        |
| separator  | 分隔符       | `string`            | `','`      |
| prefix     | 前缀         | `string`            | -          |
| suffix     | 后缀         | `string`            | -          |

## Events

| 事件名     | 说明 | 参数         |
| ---------- | ---- | ------------ |
| onStarted  | 开始 | `() => void` |
| onFinished | 结束 | `() => void` |

## Expose

| 属性名 | 说明 | 类型         |
| ------ | ---- | ------------ |
| start  | 开始 | `() => void` |
| end    | 结束 | `() => void` |
