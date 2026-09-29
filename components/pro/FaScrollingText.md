---
url: /components/pro/FaScrollingText.md
---
# FaScrollingText 滚动文字

用于展示循环滚动的文本列表，适用于公告、消息通知、热搜榜等场景。

## 使用场景

* 网站顶部公告栏
* 新闻/消息滚动
* 热搜榜/排行榜
* 弹幕效果
* 活动信息轮播

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `items` | `string[]` | - | **必需**。滚动文本列表 |
| `visibleCount` | `number` | `1` | 同时显示的条目数量 |
| `duration` | `number` | `3000` | 每条目停留时间 (ms) |
| `transition` | `number` | `500` | 切换动画时长 (ms) |
| `animation` | `'slide' \| 'fade'` | `'slide'` | 动画类型：滑动/淡入淡出 |
| `direction` | `'up' \| 'down'` | `'up'` | 滚动方向：向上/向下 |
| `class` | `HTMLAttributes['class']` | - | 自定义 CSS 类 |
| `itemClass` | `HTMLAttributes['class']` | - | 单个条目的 CSS 类 |

## Slots

| 名称 | 说明 |
|------|------|
| `item` | 自定义条目渲染，slot props: `{ item: string, index: number }` |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `itemClick` | `item: string, index: number` | 点击条目时触发 |

## 注意事项

1. **容器高度**：
   * 无自定义 slot 时需手动设置高度（如 `h-8`）
   * 使用 `#item` slot 时会自动根据内容计算高度

2. **列表长度**：
   * `items` 长度 ≤ `visibleCount` 时不会滚动
   * 建议至少 3 条以上以获得更好的滚动效果

3. **动画性能**：
   * 使用 `transform` 进行动画，性能优秀
   * 长列表建议适当增加 `duration` 减少滚动频率

4. **响应式**：
   * 组件会自动适应容器宽度
   * `visibleCount` 可根据屏幕尺寸动态调整
