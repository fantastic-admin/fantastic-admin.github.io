---
url: /components/FaInteractiveButton.md
---
# FaInteractiveButton 交互按钮

带有悬停动画效果的交互式按钮，鼠标悬停时显示箭头和文字位移。

## 使用场景

* 带有悬停动画效果的交互式按钮，鼠标悬停时显示箭头和文字位移。
* 常见用法：自定义样式、不同尺寸、不同颜色主题、组合使用。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| text | 按钮文字 | `string` | `undefined` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| - | 无插槽 |

## 示例

### 基础用法

```vue
<template>
  <FaInteractiveButton text="了解更多" />
</template>
```

### 自定义样式

```vue
<template>
  <FaInteractiveButton
    text="立即体验"
    class="bg-primary text-primary-foreground"
  />
</template>
```

### 基础用法

```vue
<template>
  <div class="space-x-4">
    <FaInteractiveButton text="查看详情" />
    <FaInteractiveButton text="立即购买" />
    <FaInteractiveButton text="了解更多" />
  </div>
</template>
```

### 不同尺寸

```vue
<template>
  <div class="space-x-4">
    <FaInteractiveButton text="小按钮" class="px-4 py-1 text-sm" />
    <FaInteractiveButton text="标准按钮" />
    <FaInteractiveButton text="大按钮" class="px-8 py-3 text-lg" />
  </div>
</template>
```

### 不同颜色主题

```vue
<template>
  <div class="space-x-4">
    <FaInteractiveButton
      text="主要操作"
      class="bg-primary text-primary-foreground"
    />
    <FaInteractiveButton
      text="次要操作"
      class="bg-secondary text-secondary-foreground"
    />
    <FaInteractiveButton
      text="强调操作"
      class="bg-accent text-accent-foreground"
    />
  </div>
</template>
```

### 组合使用

```vue
<template>
  <div class="flex flex-col gap-4 items-center">
    <FaInteractiveButton text="下一步" />
    <FaInteractiveButton text="提交申请" class="bg-green-600 text-white" />
    <FaInteractiveButton text="取消" class="bg-gray-500 text-white" />
  </div>
</template>
```

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
