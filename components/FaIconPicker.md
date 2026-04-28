---
url: /components/FaIconPicker.md
---
# FaIconPicker 图标选择器组件

从 Iconify 图标库中选择图标的选择器组件，支持搜索和分类浏览。

## 使用场景

* 菜单图标配置
* 按钮图标选择
* 表单字段图标
* 标签页图标
* 导航图标设置
* 状态图标配置

## Props

### Model

| 名称 | 类型 | 说明 |
|------|------|------|
| `modelValue` | `string` | 选中的图标名称 |

## Slots

| 名称 | 说明 |
|------|------|
| `default` | 自定义触发器，slot props: `{ icon: string }` |

## 示例

### 基础用法

```vue
<script setup lang="ts">
const icon = ref('i-lucide:home')
</script>

<template>
  <FaIconPicker v-model="icon" />
</template>
```

### 基础图标选择

```vue
<script setup lang="ts">
const icon = ref('i-lucide:home')
</script>

<template>
  <FaIconPicker v-model="icon" />
</template>
```

### 表单中的图标选择

```vue
<script setup lang="ts">
const form = ref({
  name: '',
  icon: '',
})
</script>

<template>
  <form class="space-y-4">
    <FaInput v-model="form.name" label="名称" />
    <FaLabel label="图标">
      <FaIconPicker v-model="form.icon" />
    </FaLabel>
  </form>
</template>
```

### 自定义触发按钮

```vue
<script setup lang="ts">
const icon = ref('i-lucide:star')
</script>

<template>
  <FaIconPicker v-model="icon">
    <template #default="{ icon }">
      <FaButton variant="outline">
        <FaIcon :name="icon || 'i-lucide:icon'" class="mr-2" />
        {{ icon || '选择图标' }}
      </FaButton>
    </template>
  </FaIconPicker>
</template>
```

### 菜单图标选择

```vue
<script setup lang="ts">
const menuItem = ref({
  name: '用户管理',
  icon: 'i-lucide:users',
  path: '/user',
})
</script>

<template>
  <FaCard title="菜单配置">
    <div class="space-y-4">
      <FaInput v-model="menuItem.name" label="菜单名称" />
      <FaInput v-model="menuItem.path" label="路由路径" />
      <FaLabel label="菜单图标">
        <FaIconPicker v-model="menuItem.icon" />
      </FaLabel>
    </div>
  </FaCard>
</template>
```

### 按钮图标选择

```vue
<script setup lang="ts">
const buttonConfig = ref({
  text: '保存',
  icon: 'i-lucide:save',
})
</script>

<template>
  <div class="space-y-4">
    <FaInput v-model="buttonConfig.text" label="按钮文字" />
    <FaLabel label="按钮图标">
      <FaIconPicker v-model="buttonConfig.icon" />
    </FaLabel>
    
    <!-- 预览 -->
    <FaPreview>
      <FaButton>
        <FaIcon :name="buttonConfig.icon" class="mr-2" />
        {{ buttonConfig.text }}
      </FaButton>
    </FaPreview>
  </div>
</template>
```

### 带图标的标签选择

```vue
<script setup lang="ts">
const tabs = ref([
  { label: '用户', icon: 'i-lucide:user', value: 'user' },
  { label: '角色', icon: 'i-lucide:shield', value: 'role' },
  { label: '权限', icon: 'i-lucide:key', value: 'permission' },
])
</script>

<template>
  <div class="space-y-4">
    <div v-for="(tab, index) in tabs" :key="index" class="flex gap-2 items-center">
      <FaIconPicker v-model="tabs[index].icon" />
      <FaInput v-model="tabs[index].label" class="flex-1" />
    </div>
  </div>
</template>
```

### 清空图标

```vue
<script setup lang="ts">
const icon = ref('i-lucide:home')
</script>

<template>
  <div class="space-y-2">
    <FaIconPicker v-model="icon" />
    <FaButton variant="outline" size="sm" @click="icon = ''">
      <FaIcon name="i-lucide:x" class="mr-2" />
      清除图标
    </FaButton>
  </div>
</template>
```

### 动态表单图标

```vue
<script setup lang="ts">
const fields = ref([
  { label: '字段 1', icon: 'i-lucide:text' },
  { label: '字段 2', icon: 'i-lucide:number' },
])

function addField() {
  fields.value.push({ label: '', icon: '' })
}
</script>

<template>
  <div class="space-y-4">
    <div v-for="(field, index) in fields" :key="index" class="flex gap-2 items-start">
      <FaIconPicker v-model="field.icon" />
      <FaInput v-model="field.label" class="flex-1" />
      <FaButton variant="ghost" size="icon" @click="fields.splice(index, 1)">
        <FaIcon name="i-lucide:trash" />
      </FaButton>
    </div>
    <FaButton variant="outline" @click="addField">
      <FaIcon name="i-lucide:plus" class="mr-2" />
      添加字段
    </FaButton>
  </div>
</template>
```

## 注意事项

1. **图标格式**：选中的图标格式为 `前缀：图标名`，如 `i-lucide:home`
2. **图标来源**：图标来自项目配置的 Iconify 图标集
3. **搜索功能**：支持在弹窗内搜索图标
4. **分类浏览**：左侧显示图标集分类，右侧显示具体图标
5. **分页加载**：每个图标集分页显示，支持翻页

## 注意

使用该组件前，先执行 `pnpm run -F <app> generate:icons` 命令，并按照指引完成操作后，图标选择器才能正常显示需要的图标集。
