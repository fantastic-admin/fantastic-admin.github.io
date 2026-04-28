---
url: /components/FaMarquee.md
---
# FaMarquee 滚动横幅

无限滚动的内容展示组件，支持水平/垂直滚动和悬停暂停。

## 使用场景

* 无限滚动的内容展示组件，支持水平/垂直滚动和悬停暂停。
* 常见用法：垂直滚动、反向滚动、客户评价滚动、合作伙伴 Logo。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| reverse | 是否反向滚动 | `boolean` | `false` |
| pauseOnHover | 悬停时暂停 | `boolean` | `false` |
| vertical | 是否垂直滚动 | `boolean` | `false` |
| repeat | 重复次数 | `number` | `4` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，滚动内容 |

## 示例

### 基础用法

```vue
<template>
  <FaMarquee>
    <div v-for="i in 5" :key="i" class="px-4">
      滚动内容 {{ i }}
    </div>
  </FaMarquee>
</template>
```

### 垂直滚动

```vue
<template>
  <FaMarquee vertical>
    <div v-for="i in 5" :key="i" class="py-2">
      垂直滚动 {{ i }}
    </div>
  </FaMarquee>
</template>
```

### 反向滚动

```vue
<template>
  <FaMarquee :reverse="true">
    <div v-for="i in 5" :key="i" class="px-4">
      反向滚动 {{ i }}
    </div>
  </FaMarquee>
</template>
```

### 客户评价滚动

```vue
<template>
  <FaMarquee :pause-on-hover="true">
    <FaCard v-for="review in reviews" :key="review.id" class="w-80 p-4 mx-2">
      <div class="flex items-center gap-2">
        <img :src="review.avatar" class="w-10 h-10 rounded-full" />
        <div>
          <div class="font-bold">{{ review.name }}</div>
          <div class="text-sm text-muted-foreground">{{ review.rating }}⭐</div>
        </div>
      </div>
      <p class="mt-2 text-sm">{{ review.content }}</p>
    </FaCard>
  </FaMarquee>
</template>

<script setup lang="ts">
const reviews = [
  { id: 1, name: '用户 A', avatar: '/a.jpg', rating: 5, content: '非常好用！' },
  { id: 2, name: '用户 B', avatar: '/b.jpg', rating: 4, content: '值得推荐' },
  { id: 3, name: '用户 C', avatar: '/c.jpg', rating: 5, content: '效率提升明显' },
]
</script>
```

### 合作伙伴 Logo

```vue
<template>
  <FaMarquee :pause-on-hover="true" :repeat="6">
    <div v-for="i in 6" :key="i" class="px-8">
      <img :src="`/partner-${i}.svg`" class="h-12 w-auto opacity-70" />
    </div>
  </FaMarquee>
</template>
```

### 垂直公告栏

```vue
<template>
  <FaMarquee vertical :pause-on-hover="true" class="h-64">
    <div v-for="notice in notices" :key="notice.id" class="py-3 border-b">
      <FaIcon name="i-heroicons:bell" class="text-primary" />
      <span class="ml-2">{{ notice.title }}</span>
    </div>
  </FaMarquee>
</template>
```

### 慢速滚动

```vue
<template>
  <FaMarquee :reverse="true" class="[--duration:60s]">
    <div v-for="i in 8" :key="i" class="px-6 text-lg">
      慢速滚动内容 {{ i }}
    </div>
  </FaMarquee>
</template>
```

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
