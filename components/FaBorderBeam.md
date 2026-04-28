---
url: /components/FaBorderBeam.md
---
# FaBorderBeam 边框光束

在元素边缘显示动态流动的光束效果，适用于卡片、按钮等元素的装饰。

## 使用场景

* 在元素边缘显示动态流动的光束效果，适用于卡片、按钮等元素的装饰。
* 常见用法：自定义颜色和尺寸、渐变光束卡片、快速光束按钮、多彩光束。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| size | 光束尺寸 (px) | `number` | `200` |
| duration | 动画持续时间 (ms) | `number` | `15000` |
| delay | 动画延迟 (ms) | `number` | `0` |
| anchor | 锚点位置 | `number` | `90` |
| borderWidth | 边框宽度 (px) | `number` | `1` |
| colorFrom | 起始颜色 | `string` | `'#ffaa40'` |
| colorTo | 结束颜色 | `string` | `'#9c40ff'` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## 示例

### 基础用法

```vue
<template>
  <div class="relative w-64 h-64 rounded-xl border">
    <FaBorderBeam />
    <div class="absolute inset-0 flex items-center justify-center">
      内容
    </div>
  </div>
</template>
```

### 自定义颜色和尺寸

```vue
<template>
  <FaBorderBeam
    :size="150"
    :duration="10000"
    :border-width="2"
    color-from="#ff0000"
    color-to="#0000ff"
  />
</template>
```

### 渐变光束卡片

```vue
<template>
  <div class="relative w-80 h-48 rounded-xl border bg-card">
    <FaBorderBeam
      :duration="8000"
      color-from="#00c6ff"
      color-to="#0072ff"
    />
    <div class="absolute inset-0 p-6 flex flex-col justify-center">
      <h3 class="text-xl font-bold">特色功能</h3>
      <p class="text-muted-foreground mt-2">探索更多可能性</p>
    </div>
  </div>
</template>
```

### 快速光束按钮

```vue
<template>
  <button class="relative px-6 py-3 rounded-lg border bg-primary text-primary-foreground">
    <FaBorderBeam
      :size="100"
      :duration="5000"
      :border-width="2"
      color-from="#ffffff"
      color-to="#ffffff"
    />
    点击我
  </button>
</template>
```

### 多彩光束

```vue
<template>
  <div class="relative w-64 h-64 rounded-full border">
    <FaBorderBeam
      :size="300"
      :duration="12000"
      color-from="#ff0080"
      color-to="#7928ca"
    />
    <div class="absolute inset-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
  </div>
</template>
```

## 注意事项

* 无特殊限制，建议按示例中的受控方式接入，并结合业务容器尺寸验证最终展示效果。
