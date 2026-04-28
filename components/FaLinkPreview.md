---
url: /components/FaLinkPreview.md
---
# FaLinkPreview 链接预览

鼠标悬停显示链接预览图的组件，支持静态图片和动态网页截图。

## 使用场景

* 鼠标悬停显示链接预览图的组件，支持静态图片和动态网页截图。
* 常见用法：静态图片预览、自定义尺寸、文档链接预览、产品卡片预览。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| isStatic | 是否为静态图片模式 | `boolean` | `false` |
| imageSrc | 图片地址（静态模式必填） | `string` | `undefined` |
| url | 链接地址 | `string` | `required`（动态模式） |
| width | 预览图宽度 (px) | `number` | `200` |
| height | 预览图高度 (px) | `number` | `125` |
| class | 外层容器类名 | `HTMLAttributes['class']` | `undefined` |
| linkClass | 链接元素类名 | `HTMLAttributes['class']` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，触发预览的链接文字或元素 |

## 示例

### 基础用法（动态预览）

```vue
<template>
  <FaLinkPreview url="https://github.com">
    访问 GitHub
  </FaLinkPreview>
</template>
```

### 静态图片预览

```vue
<template>
  <FaLinkPreview
    :is-static="true"
    image-src="/preview.png"
    url="https://example.com"
  >
    查看产品详情
  </FaLinkPreview>
</template>
```

### 自定义尺寸

```vue
<template>
  <FaLinkPreview
    url="https://example.com"
    :width="300"
    :height="200"
  >
    悬停预览
  </FaLinkPreview>
</template>
```

### 文档链接预览

```vue
<template>
  <div class="space-y-4">
    <p>
      更多信息请参考
      <FaLinkPreview url="https://docs.example.com/guide">
        官方文档
      </FaLinkPreview>
    </p>
  </div>
</template>
```

### 产品卡片预览

```vue
<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="product in products" :key="product.id" class="p-4 border rounded">
      <h3 class="font-bold">{{ product.name }}</h3>
      <p class="text-sm text-muted-foreground">{{ product.price }}</p>
      <FaLinkPreview
        :url="product.url"
        :image-src="product.image"
        :is-static="true"
        class="mt-2"
      >
        <span class="text-primary text-sm">查看详情</span>
      </FaLinkPreview>
    </div>
  </div>
</template>
```

### 资源列表

```vue
<template>
  <ul class="space-y-2">
    <li v-for="link in links" :key="link.url">
      <FaLinkPreview
        :url="link.url"
        :width="280"
        :height="160"
      >
        <div class="flex items-center gap-2">
          <FaIcon :name="link.icon" />
          <span>{{ link.title }}</span>
        </div>
      </FaLinkPreview>
    </li>
  </ul>
</template>

<script setup lang="ts">
const links = [
  { url: 'https://github.com', title: 'GitHub', icon: 'i-mdi:github' },
  { url: 'https://twitter.com', title: 'Twitter', icon: 'i-mdi:twitter' },
  { url: 'https://discord.com', title: 'Discord', icon: 'i-mdi:discord' },
]
</script>
```

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
