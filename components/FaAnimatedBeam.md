---
url: /components/FaAnimatedBeam.md
---
# FaAnimatedBeam 动画光束组件

动态光束连接组件，用于在两个元素之间创建流动的动画光束效果，适合展示元素之间的关联关系。

## 使用场景

* 技术栈关联展示
* 数据流向可视化
* 架构图连接关系
* 功能模块关联图
* 思维导图连接线

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `containerRef` | `HTMLElement \| null` | **必需** | 容器元素引用 |
| `fromRef` | `HTMLElement \| null` | **必需** | 起点元素引用 |
| `toRef` | `HTMLElement \| null` | **必需** | 终点元素引用 |
| `curvature` | `number` | `0` | 光束曲率（弧度） |
| `reverse` | `boolean` | `false` | 是否反向动画 |
| `pathColor` | `string` | `'gray'` | 路径颜色 |
| `pathWidth` | `number` | `2` | 路径宽度 |
| `pathOpacity` | `number` | `0.2` | 路径透明度 |
| `dotted` | `boolean` | `false` | 是否虚线样式 |
| `dotSpacing` | `number` | `6` | 虚线点间距 |
| `gradientStartColor` | `string` | `'#FFAA40'` | 渐变起始色 |
| `gradientStopColor` | `string` | `'#9C40FF'` | 渐变终止色 |
| `delay` | `number` | `0` | 动画延迟（秒） |
| `duration` | `number` | `4-7` | 动画持续时间（秒） |
| `startXOffset` | `number` | `0` | 起点 X 偏移 |
| `startYOffset` | `number` | `0` | 起点 Y 偏移 |
| `endXOffset` | `number` | `0` | 终点 X 偏移 |
| `endYOffset` | `number` | `0` | 终点 Y 偏移 |
| `class` | `HTMLAttributes['class']` | - | 自定义 CSS 类 |

## 示例

### 基础用法

```vue
<script setup lang="ts">
const containerRef = useTemplateRef('containerRef')
const fromRef = useTemplateRef('fromRef')
const toRef = useTemplateRef('toRef')
</script>

<template>
  <div ref="containerRef" class="relative">
    <div ref="fromRef">起点</div>
    <div ref="toRef">终点</div>
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="fromRef"
      :to-ref="toRef"
    />
  </div>
</template>
```

### 基础光束连接

```vue
<script setup lang="ts">
import logo from '@/assets/images/logo.svg'

const containerRef = useTemplateRef('containerRef')
const logoRef = useTemplateRef('logoRef')
const viteRef = useTemplateRef('viteRef')
const vueRef = useTemplateRef('vueRef')
</script>

<template>
  <div ref="containerRef" class="relative flex items-center justify-center h-100">
    <div class="flex gap-10">
      <div ref="viteRef" class="p-4 border-2 rounded-full">
        <FaIcon name="i-logos:vitejs" class="size-8" />
      </div>
      <div ref="logoRef" class="p-4 border-2 rounded-full">
        <FaIcon :name="logo" class="size-20" />
      </div>
      <div ref="vueRef" class="p-4 border-2 rounded-full">
        <FaIcon name="i-logos:vue" class="size-8" />
      </div>
    </div>
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="viteRef"
      :to-ref="logoRef"
      :curvature="-75"
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="vueRef"
      :to-ref="logoRef"
      :curvature="75"
    />
  </div>
</template>
```

### 虚线光束

```vue
<template>
  <FaAnimatedBeam
    :container-ref="containerRef"
    :from-ref="fromRef"
    :to-ref="toRef"
    dotted
    :dot-spacing="6"
  />
</template>
```

### 反向动画

```vue
<template>
  <FaAnimatedBeam
    :container-ref="containerRef"
    :from-ref="fromRef"
    :to-ref="toRef"
    reverse
  />
</template>
```

### 自定义渐变色

```vue
<template>
  <FaAnimatedBeam
    :container-ref="containerRef"
    :from-ref="fromRef"
    :to-ref="toRef"
    gradient-start-color="#00C9FF"
    gradient-stop-color="#92FE9D"
  />
</template>
```

### 曲线路径

```vue
<template>
  <FaAnimatedBeam
    :container-ref="containerRef"
    :from-ref="fromRef"
    :to-ref="toRef"
    :curvature="100"
  />
</template>
```

### 多光束连接

```vue
<script setup lang="ts">
const containerRef = useTemplateRef('containerRef')
const centerRef = useTemplateRef('centerRef')
const topRef = useTemplateRef('topRef')
const bottomRef = useTemplateRef('bottomRef')
const leftRef = useTemplateRef('leftRef')
const rightRef = useTemplateRef('rightRef')
</script>

<template>
  <div ref="containerRef" class="relative h-100">
    <div ref="centerRef" class="absolute inset-center">中心</div>
    <div ref="topRef" class="absolute top-0">上方</div>
    <div ref="bottomRef" class="absolute bottom-0">下方</div>
    <div ref="leftRef" class="absolute left-0">左侧</div>
    <div ref="rightRef" class="absolute right-0">右侧</div>
    
    <FaAnimatedBeam :container-ref="containerRef" :from-ref="topRef" :to-ref="centerRef" />
    <FaAnimatedBeam :container-ref="containerRef" :from-ref="bottomRef" :to-ref="centerRef" />
    <FaAnimatedBeam :container-ref="containerRef" :from-ref="leftRef" :to-ref="centerRef" />
    <FaAnimatedBeam :container-ref="containerRef" :from-ref="rightRef" :to-ref="centerRef" />
  </div>
</template>
```

## 注意事项

1. **必需引用**：`containerRef`、`fromRef`、`toRef` 都是必需的，需要使用 `useTemplateRef` 获取 DOM 引用
2. **容器定位**：容器元素必须设置为 `relative` 定位，光束使用绝对定位
3. **响应式更新**：组件会自动监听容器和元素位置变化，自动更新路径
4. **动画方向**：组件会自动检测光束方向（水平/垂直）并调整动画方向
5. **性能优化**：使用 ResizeObserver 监听容器大小变化，避免频繁重绘
6. **Z 轴层级**：光束元素使用 `pointer-events-none`，不会影响鼠标事件
7. **曲率效果**：正曲率向下弯曲，负曲率向上弯曲
