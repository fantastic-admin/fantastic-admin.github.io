---
url: /components/FaCodePreview.md
---
# FaCodePreview 代码预览

代码预览组件，展示可切换源码视图的示例代码。

## 使用场景

* 代码预览组件，展示可切换源码视图的示例代码。
* 常见用法：带标题、组件文档页面、多行源码导入、配合 Markdown 使用。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| code | 要显示的源码 | `string` | `required` |
| title | 标题 | `string` | `undefined` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置示例组件 |

## 示例

### 基础用法

```vue
<script setup lang="ts">
import DemoRaw from './demo.vue?raw'
</script>

<template>
  <FaCodePreview :code="DemoRaw">
    <Demo />
  </FaCodePreview>
</template>
```

### 带标题

```vue
<script setup lang="ts">
import DemoRaw from './demo.vue?raw'
</script>

<template>
  <FaCodePreview title="自定义标题" :code="DemoRaw">
    <Demo />
  </FaCodePreview>
</template>
```

### 组件文档页面

```vue
<script setup lang="ts">
import BasicDemo from './_demo1.vue'
import BasicDemoRaw from './_demo1.vue?raw'
import AdvancedDemo from './_demo2.vue'
import AdvancedDemoRaw from './_demo2.vue?raw'
</script>

<template>
  <FaPageMain title="组件名称">
    <h2 class="text-xl font-bold mb-4">基础用法</h2>
    <FaCodePreview :code="BasicDemoRaw">
      <BasicDemo />
    </FaCodePreview>

    <h2 class="text-xl font-bold mb-4 mt-8">高级用法</h2>
    <FaCodePreview title="带配置项" :code="AdvancedDemoRaw">
      <AdvancedDemo />
    </FaCodePreview>
  </FaPageMain>
</template>
```

### 多行源码导入

```vue
<script setup lang="ts">
// 导入原始源码用于展示
import TableDemoRaw from './table-demo.vue?raw'
</script>

<template>
  <FaCodePreview
    title="表格示例"
    :code="TableDemoRaw"
  >
    <!-- 实际运行的组件 -->
    <TableDemo />
  </FaCodePreview>
</template>
```

### 配合 Markdown 使用

```vue
<script setup lang="ts">
const code = `<template>
  <FaButton>点击我</FaButton>
</template>`
</script>

<template>
  <div class="prose">
    <p>这是一个简单的按钮示例：</p>
    <FaCodePreview :code="code">
      <FaButton>点击我</FaButton>
    </FaCodePreview>
  </div>
</template>
```

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
