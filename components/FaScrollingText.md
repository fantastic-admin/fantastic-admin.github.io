---
url: /components/FaScrollingText.md
---
# FaScrollingText 滚动文字组件

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

## 示例

### 基础用法

```vue
<script setup lang="ts">
const announcements = [
  '系统将于今晚 22:00 进行维护，请提前保存数据',
  '新版本 v2.0 已发布，新增多项实用功能',
  '欢迎加入我们的用户交流群',
]
</script>

<template>
  <FaScrollingText :items="announcements" />
</template>
```

### 基础滚动

```vue
<FaScrollingText
  :items="[
    '第一条公告内容',
    '第二条公告内容',
    '第三条公告内容',
  ]"
  class="h-8"
/>
```

### 多条同时显示

```vue
<FaScrollingText
  :items="newsList"
  :visible-count="3"
  class="h-24"
/>
```

### 自定义停留时间

```vue
<FaScrollingText
  :items="messages"
  :duration="5000"
  :transition="800"
/>
```

### 淡入淡出动画

```vue
<FaScrollingText
  :items="items"
  animation="fade"
/>
```

### 向下滚动

```vue
<FaScrollingText
  :items="items"
  direction="down"
/>
```

### 自定义条目内容

```vue
<FaScrollingText :items="hotSearches">
  <template #item="{ item, index }">
    <div class="flex items-center gap-2">
      <span :class="getRankClass(index)">{{ index + 1 }}</span>
      <span>{{ item }}</span>
      <FaBadge v-if="index < 3" value="hot" />
    </div>
  </template>
</FaScrollingText>
```

### 点击事件

```vue
<script setup lang="ts">
function handleItemClick(text: string, index: number) {
  console.log('点击了:', text, index)
}
</script>

<template>
  <FaScrollingText :items="links" @item-click="handleItemClick" />
</template>
```

### 鼠标悬停暂停

组件内置鼠标悬停暂停功能，无需额外配置：

```vue
<!-- 鼠标移入时自动暂停滚动，移出后继续 -->
<FaScrollingText :items="messages" />
```

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
