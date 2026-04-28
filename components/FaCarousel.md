---
url: /components/FaCarousel.md
---
# FaCarousel 轮播图组件

功能丰富的轮播图组件，支持自动播放、淡入淡出、自动滚动等效果。

## 使用场景

* 首页 Banner 轮播
* 产品展示轮播
* 图片画廊
* 客户评价轮播
* 新闻公告轮播
* 功能特性介绍

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `opts` | `CarouselProps['opts']` | - | 轮播配置选项 |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | 滚动方向 |
| `autoplay` | `AutoplayOptionsType` | - | 自动播放配置 |
| `autoScroll` | `AutoScrollOptionsType` | - | 自动滚动配置 |
| `fade` | `boolean` | `false` | 是否启用淡入淡出效果 |
| `class` | `HTMLAttributes['class']` | - | 容器 CSS 类 |
| `contentClass` | `HTMLAttributes['class']` | - | 内容区 CSS 类 |
| `itemClass` | `HTMLAttributes['class']` | - | 单个项目 CSS 类 |

## Slots

| 名称 | 说明 |
|------|------|
| `default` | 轮播内容（幻灯片列表） |

## 示例

### 基础用法

```vue
<template>
  <FaCarousel>
    <template #default>
      <div v-for="i in 5" :key="i" class="h-64 bg-muted flex-center">
        幻灯片 {{ i }}
      </div>
    </template>
  </FaCarousel>
</template>
```

### 基础轮播

```vue
<template>
  <FaCarousel>
    <div v-for="i in 5" :key="i" class="h-64 bg-muted flex-center text-2xl">
      幻灯片 {{ i }}
    </div>
  </FaCarousel>
</template>
```

### 自动播放

```vue
<template>
  <FaCarousel :autoplay="{ delay: 3000 }">
    <div v-for="i in 5" :key="i" class="h-64 bg-muted flex-center">
      幻灯片 {{ i }}
    </div>
  </FaCarousel>
</template>
```

### 淡入淡出效果

```vue
<template>
  <FaCarousel fade :autoplay="{ delay: 3000 }">
    <div v-for="i in 5" :key="i" class="h-64 bg-muted flex-center">
      幻灯片 {{ i }}
    </div>
  </FaCarousel>
</template>
```

### 垂直轮播

```vue
<template>
  <FaCarousel orientation="vertical" :autoplay="{ delay: 3000 }">
    <div v-for="i in 5" :key="i" class="h-64 bg-muted flex-center">
      幻灯片 {{ i }}
    </div>
  </FaCarousel>
</template>
```

### 自定义切换按钮

```vue
<template>
  <FaCarousel>
    <div v-for="i in 5" :key="i" class="h-64 bg-gradient-to-r from-blue-500 to-purple-500 flex-center text-white text-2xl">
      {{ i }}
    </div>
  </FaCarousel>
</template>
```

### 图片轮播

```vue
<template>
  <FaCarousel :autoplay="{ delay: 4000 }">
    <div v-for="(image, index) in images" :key="index">
      <img :src="image" class="w-full h-96 object-cover" />
    </div>
  </FaCarousel>
</template>

<script setup lang="ts">
const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
]
</script>
```

### 带标题的轮播

```vue
<template>
  <FaCarousel :autoplay="{ delay: 5000 }">
    <div v-for="item in slides" :key="item.id" class="relative h-96">
      <img :src="item.image" class="w-full h-full object-cover" />
      <div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
        <h3 class="text-white text-2xl font-bold">{{ item.title }}</h3>
        <p class="text-white/80 mt-2">{{ item.description }}</p>
      </div>
    </div>
  </FaCarousel>
</template>

<script setup lang="ts">
const slides = [
  { id: 1, title: '标题一', description: '描述内容一', image: 'https://example.com/1.jpg' },
  { id: 2, title: '标题二', description: '描述内容二', image: 'https://example.com/2.jpg' },
  { id: 3, title: '标题三', description: '描述内容三', image: 'https://example.com/3.jpg' },
]
</script>
```

### 自动滚动（连续滚动）

```vue
<template>
  <FaCarousel :auto-scroll="{ speed: 2 }">
    <div v-for="i in 6" :key="i" class="p-4">
      <div class="h-48 bg-muted rounded-lg flex-center">
        项目 {{ i }}
      </div>
    </div>
  </FaCarousel>
</template>
```

### 自定义轮播配置

```vue
<template>
  <FaCarousel 
    :opts="{ 
      align: 'center',
      loop: true,
      skipSnaps: false 
    }"
    :autoplay="{ delay: 3000, stopOnInteraction: false }"
  >
    <div v-for="i in 5" :key="i" class="h-64 bg-muted flex-center">
      幻灯片 {{ i }}
    </div>
  </FaCarousel>
</template>
```

### 卡片轮播

```vue
<template>
  <FaCarousel :opts="{ align: 'start' }">
    <div v-for="i in 6" :key="i" class="pl-4">
      <FaCard :title="`卡片 ${i}`" class="w-80">
        <p class="text-muted-foreground">这是卡片内容 {{ i }}</p>
      </FaCard>
    </div>
  </FaCarousel>
</template>
```

## 注意事项

1. **内容结构**：`default` slot 应该直接包含轮播项目，不要用其他元素包裹
2. **自动播放**：设置 `autoplay` 后会自动轮播，用户交互后会暂停
3. **切换按钮**：组件内置左右切换按钮
4. **响应式**：轮播图会自动适应容器宽度
5. **循环模式**：默认支持循环滚动
