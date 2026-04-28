---
url: /components/FaGlowyCardWrapper.md
---
# FaGlowyCardWrapper 发光卡片容器

FaGlowyCard 的外层容器组件，用于管理光晕效果的配置和鼠标跟随行为。必须与 FaGlowyCard 配合使用。

## 使用场景

* FaGlowyCard 的外层容器组件，用于管理光晕效果的配置和鼠标跟随行为。必须与 FaGlowyCard 配合使用。

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

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置 FaGlowyCard 组件 |

## 示例

### 基础用法

```vue
<template>
  <FaGlowyCardWrapper>
    <FaGlowyCard>
      <div>卡片内容</div>
    </FaGlowyCard>
  </FaGlowyCardWrapper>
</template>
```

## 注意事项

### 配合 FaGlowyCard 使用

完整示例请参考 FaGlowyCard 组件。
