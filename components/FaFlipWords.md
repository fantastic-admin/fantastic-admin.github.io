---
url: /components/FaFlipWords.md
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

## 示例

### 基础用法

```vue
<script setup lang="ts">
const words = ['高效', '优雅', '强大']
</script>

<template>
  <div>
    我们的框架
    <FaFlipWords :words="words" />
  </div>
</template>
```

### 自定义时长

```vue
<template>
  <FaFlipWords :words="['React', 'Vue', 'Svelte']" :duration="2000" />
</template>
```

### 页面标题

```vue
<script setup lang="ts">
const keywords = ['现代化', '高性能', '易扩展']
</script>

<template>
  <h1 class="text-4xl font-bold">
    构建
    <FaFlipWords :words="keywords" />
    的管理系统
  </h1>
</template>
```

### 响应动画事件

```vue
<script setup lang="ts">
function onAnimationStart() {
  console.log('动画开始')
}

function onAnimationComplete() {
  console.log('动画完成')
}
</script>

<template>
  <FaFlipWords
    :words="['开始', '进行中', '完成']"
    @animation-start="onAnimationStart"
    @animation-complete="onAnimationComplete"
  />
</template>
```

### 多词轮播

```vue
<script setup lang="ts">
const features = [
  '极速开发体验',
  '灵活的组件系统',
  '完善的文档支持',
  '活跃的社区生态',
]
</script>

<template>
  <div class="text-center py-8">
    <p class="text-muted-foreground mb-2">Fantastic-admin 提供</p>
    <FaFlipWords :words="features" :duration="2500" />
  </div>
</template>
```

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
