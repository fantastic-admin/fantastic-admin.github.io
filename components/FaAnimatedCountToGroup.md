---
url: /components/FaAnimatedCountToGroup.md
---
# FaAnimatedCountToGroup 数字动画组

用于包裹多个 FaAnimatedCountTo 组件，使多个数字动画同步执行。

## 使用场景

* 用于包裹多个 FaAnimatedCountTo 组件，使多个数字动画同步执行。
* 常见用法：统计数据面板、仪表盘数据。

## Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置多个 FaAnimatedCountTo 组件 |

## 示例

### 基础用法

```vue
<template>
  <FaAnimatedCountToGroup>
    <div class="stat-item">
      <FaAnimatedCountTo :value="1000" />
    </div>
    <div class="stat-item">
      <FaAnimatedCountTo :value="2000" />
    </div>
    <div class="stat-item">
      <FaAnimatedCountTo :value="3000" />
    </div>
  </FaAnimatedCountToGroup>
</template>
```

### 统计数据面板

```vue
<script setup lang="ts">
const stats = [
  { label: '总访问量', value: 1234567 },
  { label: '今日访问', value: 8765 },
  { label: '在线用户', value: 432 },
]
</script>

<template>
  <FaCard>
    <FaAnimatedCountToGroup>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-3xl font-bold text-primary">
            <FaAnimatedCountTo :value="stat.value" />
          </div>
          <div class="text-sm text-muted-foreground mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </FaAnimatedCountToGroup>
  </FaCard>
</template>
```

### 仪表盘数据

```vue
<template>
  <div class="flex items-baseline gap-2">
    <FaAnimatedCountToGroup>
      <span class="text-4xl font-bold">
        <FaAnimatedCountTo :value="98.5" :format="{ minimumFractionDigits: 1, maximumFractionDigits: 1 }" />
      </span>
      <span class="text-xl">%</span>
    </FaAnimatedCountToGroup>
  </div>
</template>
```

## 注意事项

* 涉及动画、预览或状态反馈时，建议结合实际页面密度控制同屏实例数量与刷新频率。
