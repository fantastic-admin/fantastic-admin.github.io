---
url: /components/FaTimeAgo.md
---
# FaTimeAgo 相对时间

显示相对时间的组件，如"刚刚"、"5 分钟前"、"昨天"等。

## 使用场景

* 显示相对时间的组件，如"刚刚"、"5 分钟前"、"昨天"等。
* 常见用法：显示秒数、自定义消息、文章发布时间、评论列表。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| date | 日期对象 | `Date` | `new Date()` |
| max | 最大单位 | `UseTimeAgoUnitNamesDefault` | `undefined` |
| messages | 自定义消息 | `UseTimeAgoMessages` | 中文默认配置 |
| showSecond | 是否显示秒 | `boolean` | `false` |
| updateInterval | 更新间隔 (ms) | `number` | `30000` |

## API

### 默认消息配置

```typescript
{
  justNow: '刚刚',
  past: n => `${n}前`,
  future: n => `${n}后`,
  month: (n, past) => n === 1 ? (past ? '上个月' : '下个月') : `${n} 月`,
  year: (n, past) => n === 1 ? (past ? '去年' : '明年') : `${n} 年`,
  day: (n, past) => n === 1 ? (past ? '昨天' : '明天') : `${n} 天`,
  week: (n, past) => n === 1 ? (past ? '上周' : '下周') : `${n} 周`,
  hour: n => `${n} 小时`,
  minute: n => `${n} 分钟`,
  second: n => `${n} 秒`,
  invalid: '',
}
```

## 示例

### 基础用法

```vue
<template>
  <FaTimeAgo :date="new Date()" />
</template>
```

### 显示秒数

```vue
<template>
  <FaTimeAgo :date="new Date()" :show-second="true" />
</template>
```

### 自定义消息

```vue
<template>
  <FaTimeAgo
    :date="postDate"
    :messages="{
      justNow: '刚刚发布',
      past: n => `${n}之前`,
      hour: n => `${n}个小时`,
      minute: n => `${n}分钟`,
    }"
  />
</template>
```

### 文章发布时间

```vue
<script setup lang="ts">
const postDate = new Date('2024-01-15 10:30:00')
</script>

<template>
  <article>
    <h1>文章标题</h1>
    <div class="text-sm text-muted-foreground">
      发表于 <FaTimeAgo :date="postDate" />
    </div>
  </article>
</template>
```

### 评论列表

```vue
<template>
  <div class="space-y-4">
    <div v-for="comment in comments" :key="comment.id">
      <div class="flex items-center gap-2">
        <img :src="comment.avatar" class="w-8 h-8 rounded-full" />
        <span class="font-bold">{{ comment.author }}</span>
        <span class="text-sm text-muted-foreground">
          <FaTimeAgo :date="comment.createdAt" />
        </span>
      </div>
      <p class="mt-2">{{ comment.content }}</p>
    </div>
  </div>
</template>
```

### 限制显示单位

```vue
<template>
  <!-- 最大显示到"天" -->
  <FaTimeAgo :date="oldDate" max="day" />
  <!-- 输出：3 天前（而不是 3 天 5 小时前） -->
</template>
```

### 动态更新

```vue
<script setup lang="ts">
// 每 5 秒更新一次
const now = ref(new Date())
onMounted(() => {
  setInterval(() => {
    now.value = new Date()
  }, 5000)
})
</script>

<template>
  <div>
    当前时间：<FaTimeAgo :date="now" :update-interval="5000" />
  </div>
</template>
```

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
