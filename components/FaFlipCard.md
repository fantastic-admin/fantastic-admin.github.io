---
url: /components/FaFlipCard.md
---
# FaFlipCard 翻转卡片

支持 3D 翻转效果的卡片组件，鼠标悬停时翻转显示背面内容。

## 使用场景

* 支持 3D 翻转效果的卡片组件，鼠标悬停时翻转显示背面内容。
* 常见用法：水平翻转、产品卡片、团队成员卡片。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| rotate | 翻转方向 | `'x' \| 'y'` | `'y'` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，卡片正面内容 |
| back | 背面内容插槽 |

## 示例

### 基础用法

```vue
<template>
  <FaFlipCard>
    <div class="p-6 flex items-center justify-center h-full">
      <h3 class="text-xl font-bold">正面</h3>
    </div>
    <template #back>
      <div class="p-6 flex items-center justify-center h-full">
        <h3 class="text-xl font-bold">背面</h3>
      </div>
    </template>
  </FaFlipCard>
</template>
```

### 水平翻转

```vue
<template>
  <FaFlipCard rotate="x">
    <div class="p-6">正面内容</div>
    <template #back>
      <div class="p-6">背面内容</div>
    </template>
  </FaFlipCard>
</template>
```

### 产品卡片

```vue
<template>
  <FaFlipCard>
    <!-- 正面 -->
    <div class="p-6 flex flex-col items-center justify-center h-full">
      <img src="/product.png" alt="产品" class="w-32 h-32 object-contain" />
      <h3 class="text-lg font-bold mt-4">产品名称</h3>
      <p class="text-muted-foreground text-sm">¥ 299.00</p>
    </div>
    <!-- 背面 -->
    <template #back>
      <div class="p-6 flex flex-col justify-center h-full">
        <h4 class="font-bold mb-2">产品详情</h4>
        <p class="text-sm text-muted-foreground">
          这是产品的详细描述，包含更多规格信息。
        </p>
        <FaButton class="mt-4 w-full">立即购买</FaButton>
      </div>
    </template>
  </FaFlipCard>
</template>
```

### 团队成员卡片

```vue
<template>
  <FaFlipCard rotate="x">
    <div class="p-6 text-center">
      <img :src="member.avatar" class="w-24 h-24 rounded-full mx-auto" />
      <h3 class="text-lg font-bold mt-3">{{ member.name }}</h3>
      <p class="text-muted-foreground text-sm">{{ member.position }}</p>
    </div>
    <template #back>
      <div class="p-6 flex flex-col justify-center h-full gap-2">
        <a v-for="link in member.social" :key="link.name" :href="link.url">
          <FaIcon :name="link.icon" /> {{ link.name }}
        </a>
      </div>
    </template>
  </FaFlipCard>
</template>
```

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
