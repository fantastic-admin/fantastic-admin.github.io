---
url: /components/FaGlowyCard.md
---
# FaGlowyCard 发光卡片

具有鼠标跟随光晕效果的卡片组件，支持自定义颜色、光晕大小和边框样式。

## 使用场景

* 具有鼠标跟随光晕效果的卡片组件，支持自定义颜色、光晕大小和边框样式。
* 常见用法：自定义配置、多卡片展示、紫色主题卡片、橙色主题。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| hue | 色相 (0-360) | `number` | `210` |
| saturation | 饱和度 (0-100) | `number` | `100` |
| lightness | 亮度 (0-100) | `number` | `50` |
| size | 光晕尺寸 | `number` | `200` |
| border | 边框宽度 | `number` | `2` |
| radius | 圆角大小 (px) | `number` | `10` |

## Slots

| 组件 | 名称 | 说明 |
|------|------|------|
| FaGlowyCardWrapper | default | 默认插槽，放置 FaGlowyCard |
| FaGlowyCard | default | 默认插槽，放置卡片内容 |

## API

### FaGlowyCard

无 Props，仅作为内容容器使用

## 示例

### 基础用法

```vue
<template>
  <FaGlowyCardWrapper>
    <FaGlowyCard>
      <div class="p-6">
        <h3 class="text-lg font-bold">发光卡片</h3>
        <p class="text-muted-foreground mt-2">移动鼠标体验光晕效果</p>
      </div>
    </FaGlowyCard>
  </FaGlowyCardWrapper>
</template>
```

### 自定义配置

```vue
<template>
  <FaGlowyCardWrapper
    :hue="280"
    :saturation="90"
    :lightness="60"
    :size="250"
    :border="3"
    :radius="16"
  >
    <FaGlowyCard>
      <div class="p-6">
        自定义颜色的发光卡片
      </div>
    </FaGlowyCard>
  </FaGlowyCardWrapper>
</template>
```

### 多卡片展示

```vue
<template>
  <FaGlowyCardWrapper :hue="200">
    <div class="grid grid-cols-2 gap-4">
      <FaGlowyCard>
        <div class="p-4">
          <h4 class="font-bold">卡片 1</h4>
        </div>
      </FaGlowyCard>
      <FaGlowyCard>
        <div class="p-4">
          <h4 class="font-bold">卡片 2</h4>
        </div>
      </FaGlowyCard>
    </div>
  </FaGlowyCardWrapper>
</template>
```

### 紫色主题卡片

```vue
<template>
  <FaGlowyCardWrapper
    :hue="280"
    :saturation="80"
    :lightness="70"
    :size="300"
  >
    <FaGlowyCard>
      <div class="p-6 space-y-4">
        <div class="text-2xl font-bold text-purple-400">
          Premium Plan
        </div>
        <div class="text-4xl font-bold">$29</div>
        <ul class="text-sm text-muted-foreground space-y-2">
          <li>✓ 无限项目</li>
          <li>✓ 高级支持</li>
          <li>✓ 数据分析</li>
        </ul>
      </div>
    </FaGlowyCard>
  </FaGlowyCardWrapper>
</template>
```

### 橙色主题

```vue
<template>
  <FaGlowyCardWrapper :hue="30" :lightness="60">
    <FaGlowyCard>
      <div class="p-6">
        <h3 class="text-lg font-bold">警告提示</h3>
        <p class="text-sm text-muted-foreground mt-2">
          注意检查系统状态
        </p>
      </div>
    </FaGlowyCard>
  </FaGlowyCardWrapper>
</template>
```

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
