---
url: /components/FaSpotlightCard.md
---
# FaSpotlightCard 聚光灯卡片

具有鼠标跟随聚光灯效果的卡片组件，当鼠标悬停时显示渐变光晕。

## 使用场景

* 具有鼠标跟随聚光灯效果的卡片组件，当鼠标悬停时显示渐变光晕。
* 常见用法：自定义配置、深色主题卡片、多卡片网格、自定义颜色。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| gradientSize | 渐变半径 (px) | `number` | `200` |
| gradientColor | 渐变颜色 | `string` | `'oklch(var(--primary))'` |
| gradientOpacity | 渐变透明度 | `number` | `0.1` |
| class | 外层容器类名 | `HTMLAttributes['class']` | `undefined` |
| slotClass | 内容区域类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置卡片内容 |

## 示例

### 基础用法

```vue
<template>
  <FaSpotlightCard>
    <div class="p-6">
      <h3 class="text-lg font-bold">聚光灯卡片</h3>
      <p class="text-muted-foreground mt-2">悬停时显示光晕效果</p>
    </div>
  </FaSpotlightCard>
</template>
```

### 自定义配置

```vue
<template>
  <FaSpotlightCard
    :gradient-size="300"
    gradient-color="oklch(var(--primary))"
    :gradient-opacity="0.2"
  >
    <div class="p-6">
      自定义聚光灯效果
    </div>
  </FaSpotlightCard>
</template>
```

### 深色主题卡片

```vue
<template>
  <FaSpotlightCard
    :gradient-size="250"
    gradient-color="#8b5cf6"
    :gradient-opacity="0.15"
  >
    <div class="p-6 space-y-4">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
          <FaIcon name="i-heroicons:sparkles" class="text-purple-400" />
        </div>
        <div>
          <h4 class="font-bold">高级功能</h4>
          <p class="text-sm text-muted-foreground">探索更多可能</p>
        </div>
      </div>
    </div>
  </FaSpotlightCard>
</template>
```

### 多卡片网格

```vue
<template>
  <div class="grid grid-cols-3 gap-4">
    <FaSpotlightCard v-for="i in 3" :key="i">
      <div class="p-4 text-center">
        <div class="text-2xl font-bold">{{ i }}</div>
        <div class="text-sm text-muted-foreground">卡片 {{ i }}</div>
      </div>
    </FaSpotlightCard>
  </div>
</template>
```

### 自定义颜色

```vue
<template>
  <FaSpotlightCard
    gradient-color="oklch(var(--destructive))"
    :gradient-opacity="0.2"
  >
    <div class="p-6">
      <h4 class="font-bold text-destructive">警告区域</h4>
      <p class="text-sm text-muted-foreground mt-2">
        请注意操作风险
      </p>
    </div>
  </FaSpotlightCard>
</template>
```

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
