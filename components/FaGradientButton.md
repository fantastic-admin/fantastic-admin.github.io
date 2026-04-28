---
url: /components/FaGradientButton.md
---
# FaGradientButton 渐变按钮

带有彩虹渐变边框动画效果的按钮组件。

## 使用场景

* 带有彩虹渐变边框动画效果的按钮组件。
* 常见用法：自定义颜色、彩虹按钮、蓝色主题、火焰主题。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| colors | 渐变颜色数组 | `string[]` | 彩虹七色 |
| duration | 动画周期 (ms) | `number` | `2500` |
| class | 外层容器类名 | `HTMLAttributes['class']` | `undefined` |
| contentClass | 内容区域类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，按钮内容 |

## 示例

### 基础用法

```vue
<template>
  <FaGradientButton>
    渐变按钮
  </FaGradientButton>
</template>
```

### 自定义颜色

```vue
<template>
  <FaGradientButton
    :colors="['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ff0000']"
    :duration="3000"
  >
    自定义渐变
  </FaGradientButton>
</template>
```

### 彩虹按钮

```vue
<template>
  <FaGradientButton>
    <span class="px-6 py-2">彩虹按钮</span>
  </FaGradientButton>
</template>
```

### 蓝色主题

```vue
<template>
  <FaGradientButton
    :colors="['#3b82f6', '#60a5fa', '#93c5fd', '#3b82f6']"
    :duration="2000"
  >
    <span class="px-6 py-2">蓝色渐变</span>
  </FaGradientButton>
</template>
```

### 火焰主题

```vue
<template>
  <FaGradientButton
    :colors="['#ff4500', '#ff6347', '#ffa500', '#ff4500']"
    :duration="1500"
  >
    <span class="px-6 py-2">火焰效果</span>
  </FaGradientButton>
</template>
```

### 带图标按钮

```vue
<template>
  <FaGradientButton>
    <div class="flex items-center gap-2 px-6 py-2">
      <FaIcon name="i-heroicons:sparkles" />
      <span>开始使用</span>
    </div>
  </FaGradientButton>
</template>
```

### 大尺寸按钮

```vue
<template>
  <FaGradientButton
    content-class="px-8 py-3 text-lg font-bold"
    :duration="2000"
  >
    立即注册
  </FaGradientButton>
</template>
```

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
