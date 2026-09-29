---
url: /components/pro/FaCountTo.md
---
# FaCountTo 数字滚动

带动画效果的数字滚动组件，用于数据变化展示。

## 使用场景

* 数据看板指标展示
* 销售数据实时展示
* 用户数/访问量统计
* 倒计时/计时器
* 成绩/分数展示
* 进度百分比展示

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `startVal` | `number` | **必需** | 起始值 |
| `endVal` | `number` | **必需** | 结束值 |
| `autoplay` | `boolean` | `true` | 是否自动开始 |
| `duration` | `number` | `2000` | 动画时长（毫秒） |
| `transition` | `string` | `'linear'` | 过渡效果名称 |
| `delay` | `number` | `0` | 延迟时间（毫秒） |
| `decimals` | `number` | `0` | 小数位数 |
| `separator` | `string` | `','` | 千分位分隔符 |
| `prefix` | `string` | `''` | 前缀 |
| `suffix` | `string` | `''` | 后缀 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `on-started` | - | 动画开始时触发 |
| `on-finished` | - | 动画结束时触发 |

## Exposed Methods

| 方法名 | 参数 | 说明 |
|--------|------|------|
| `start` | - | 开始动画 |
| `reset` | - | 重置到起始值 |

## 注意事项

### 过渡效果

支持的过渡效果（来自 `@vueuse/core` 的 `TransitionPresets`）：

* `linear` - 线性
* `easeInQuad` - 二次方缓入
* `easeOutQuad` - 二次方缓出
* `easeInOutQuad` - 二次方缓入缓出
* `easeInCubic` - 三次方缓入
* `easeOutCubic` - 三次方缓出
* `easeInOutCubic` - 三次方缓入缓出
* `easeInQuart` - 四次方缓入
* `easeOutQuart` - 四次方缓出
* `easeInOutQuart` - 四次方缓入缓出
* 等...

1. **自动播放**：默认 `autoplay` 为 `true`，组件挂载后自动开始动画
2. **值变化**：`endVal` 变化时会自动重新播放动画
3. **格式化**：支持小数位数、千分位分隔符、前后缀
4. **过渡效果**：可使用多种缓动函数实现不同动画效果
