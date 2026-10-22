---
url: /components/pro/FaFlipWords.md
---
# FaFlipWords 翻转文字

文字轮播切换动画组件，支持优雅的字母级淡入淡出效果。

## 使用场景

* 文字轮播切换动画组件，支持优雅的字母级淡入淡出效果。
* 常见用法：自定义时长、页面标题、响应动画事件、多词轮播。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| words | 要轮播的词汇数组 | `string[]` | `required` |
| duration | 每个词显示时长 (ms) | `number` | `3000` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| animationStart | 动画开始时触发 | `-` |
| animationComplete | 动画完成时触发 | `-` |

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
