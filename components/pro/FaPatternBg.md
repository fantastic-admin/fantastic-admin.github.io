---
url: /components/pro/FaPatternBg.md
---
# FaPatternBg 图案背景

带有几何图案的背景组件，支持多种图案样式和动画效果。

## 使用场景

* 带有几何图案的背景组件，支持多种图案样式和动画效果。
* 常见用法：网格背景、点状背景、动画背景、圆形遮罩。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 图案类型 | `'grid' \| 'dots' \| 'lines'` | `'grid'` |
| size | 图案尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| mask | 遮罩形状 | `'ellipse' \| 'circle' \| 'none'` | `'ellipse'` |
| animate | 是否动画 | `boolean` | `false` |
| direction | 动画方向 | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top'` |
| speed | 动画速度 (ms) | `number` | `10000` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置内容 |

## API

### 图案类型

```vue
<template>
  <!-- 网格图案 -->
  <FaPatternBg variant="grid" />

  <!-- 点状图案 -->
  <FaPatternBg variant="dots" />

  <!-- 线条图案 -->
  <FaPatternBg variant="lines" />
</template>
```

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
