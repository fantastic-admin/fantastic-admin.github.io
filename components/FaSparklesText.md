---
url: /components/FaSparklesText.md
---
# FaSparklesText 闪耀文字

带有闪烁粒子动画效果的文字组件，文字周围会显示随机闪烁的星光。

## 使用场景

* 带有闪烁粒子动画效果的文字组件，文字周围会显示随机闪烁的星光。
* 常见用法：自定义粒子数量、自定义颜色、标题装饰、Logo 文字效果。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| text | 要显示的文字 | `string` | `required` |
| sparklesCount | 闪烁粒子数量 | `number` | `10` |
| colors | 粒子颜色配置 | `{ first: string, second: string }` | `{ first: '#9E7AFF', second: '#FE8BBB' }` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## 示例

### 基础用法

```vue
<template>
  <FaSparklesText text="Fantastic-admin" />
</template>
```

### 自定义粒子数量

```vue
<template>
  <FaSparklesText text="闪耀效果" :sparkles-count="15" />
</template>
```

### 自定义颜色

```vue
<template>
  <FaSparklesText
    text="彩色星光"
    :colors="{ first: '#ff6b6b', second: '#4ecdc4' }"
  />
</template>
```

### 标题装饰

```vue
<template>
  <div class="text-center py-8">
    <FaSparklesText
      text="欢迎使用"
      class="text-5xl font-bold"
      :colors="{ first: '#fbbf24', second: '#f59e0b' }"
    />
  </div>
</template>
```

### Logo 文字效果

```vue
<template>
  <FaSparklesText
    text="PRO"
    class="text-6xl font-black"
    :sparkles-count="20"
    :colors="{ first: '#8b5cf6', second: '#d946ef' }"
  />
</template>
```

### 小尺寸文字

```vue
<template>
  <FaSparklesText
    text="NEW"
    class="text-sm font-bold"
    :sparkles-count="6"
  />
</template>
```

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
