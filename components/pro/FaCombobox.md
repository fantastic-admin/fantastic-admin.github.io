---
url: /components/pro/FaCombobox.md
---
# FaCombobox 组合框

输入搜索 + 下拉选择组件，支持分组、清空、空状态文案、自定义筛选和虚拟化列表。

## 使用场景

* 可搜索的表单下拉选择
* 城市/地区/人员选择
* 数据量较大的远端或本地选项选择
* 需要自定义关键词匹配规则的选择器
* 输入筛选 + 单选确认的配置项

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `disabled` | `boolean` | `false` | 是否禁用 |
| `clearable` | `boolean` | `false` | 是否显示清空按钮 |
| `position` | `'inline' \| 'popper'` | `'popper'` | 下拉内容定位方式 |
| `options` | `(Option \| GroupOption)[]` | **必需** | 选项数据 |
| `placeholder` | `string` | - | 输入框占位文本 |
| `emptyText` | `string` | `''` | 空状态文案 |
| `filter` | `(searchValue: string, option: Option) => boolean` | - | 自定义筛选函数 |
| `virtualList` | `boolean` | `false` | 是否启用虚拟化列表 |
| `class` | `HTMLAttributes['class']` | - | 自定义 CSS 类 |

### Option 接口

```ts
interface Option {
  label: string
  value: AcceptableValue
  disabled?: boolean
}
```

### GroupOption 接口（分组选项）

```ts
interface GroupOption {
  label: string
  options: Option[]
}
```

## Slots

| 名称 | 说明 |
|------|------|
| `empty` | 自定义空状态内容 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `change` | 选中值变化时触发 | `value: AcceptableValue \| undefined` |
| `clear` | 点击清空按钮时触发 | - |

## 示例

### 基础用法

```vue
<script setup lang="ts">
const value = ref('')

const options = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
]
</script>

<template>
  <FaCombobox v-model="value" :options="options" placeholder="请选择城市" />
</template>
```

### 分组选项

```vue
<script setup lang="ts">
const value = ref('beijing')

const options = [
  {
    label: '热门城市',
    options: [
      { label: '北京', value: 'beijing' },
      { label: '上海', value: 'shanghai' },
    ],
  },
  {
    label: '其他城市',
    options: [
      { label: '广州', value: 'guangzhou' },
      { label: '深圳', value: 'shenzhen' },
      { label: '杭州', value: 'hangzhou' },
    ],
  },
]
</script>

<template>
  <FaCombobox v-model="value" :options="options" placeholder="分组选择" />
</template>
```

### 带清空按钮

```vue
<script setup lang="ts">
const value = ref('shenzhen')

const options = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
]

function handleClear() {
  console.log('已清空')
}
</script>

<template>
  <FaCombobox
    v-model="value"
    clearable
    :options="options"
    placeholder="可清空的选择框"
    @clear="handleClear"
  />
</template>
```

### 虚拟化列表

```vue
<script setup lang="ts">
const value = ref('')

const options = Array.from({ length: 10000 }, (_, index) => ({
  label: `选项 ${index + 1}`,
  value: index + 1,
}))
</script>

<template>
  <FaCombobox
    v-model="value"
    virtual-list
    :options="options"
    placeholder="请选择"
    empty-text="暂无匹配结果"
  />
</template>
```

### 自定义筛选

```vue
<script setup lang="ts">
const value = ref('')

const options = [
  { label: '北京 朝阳', value: 'beijing' },
  { label: '上海 浦东', value: 'shanghai' },
  { label: '广州 天河', value: 'guangzhou' },
  { label: '深圳 南山', value: 'shenzhen' },
]

function filter(searchValue: string, option: { label: string }) {
  const keywords = searchValue
    .toLocaleLowerCase()
    .split(/\s+/)
    .filter(Boolean)

  return keywords.every(keyword => option.label.toLocaleLowerCase().includes(keyword))
}
</script>

<template>
  <FaCombobox
    v-model="value"
    virtual-list
    :options="options"
    :filter="filter"
    placeholder="输入多个关键词搜索"
    empty-text="没有匹配结果"
  />
</template>
```

### 自定义空状态

```vue
<template>
  <FaCombobox v-model="value" :options="[]" placeholder="请选择">
    <template #empty>
      <div class="text-muted-foreground py-2 text-center text-sm">
        没有可选择的数据
      </div>
    </template>
  </FaCombobox>
</template>
```

### 禁用状态

```vue
<template>
  <FaCombobox v-model="value" :options="options" disabled placeholder="禁用状态" />
</template>
```

### 变化事件

```vue
<script setup lang="ts">
const value = ref('')

const options = [
  { label: '选项 1', value: '1' },
  { label: '选项 2', value: '2' },
  { label: '选项 3', value: '3' },
]

function handleChange(value) {
  console.log('选中值变化:', value)
}
</script>

<template>
  <FaCombobox v-model="value" :options="options" placeholder="请选择" @change="handleChange" />
</template>
```

## 注意事项

1. **v-model 绑定**：使用 `v-model` 实现选中值的双向绑定
2. **单选组件**：当前组件仅支持单选，不支持多选
3. **选项数据结构**：`options` 支持普通选项和分组选项两种格式
4. **默认筛选**：未传入 `filter` 时，组件使用不区分大小写的 `label.includes(searchValue)` 匹配
5. **自定义筛选**：`filter` 会同时作用于普通列表和虚拟列表，返回 `true` 时保留该选项，返回 `false` 时隐藏该选项
6. **虚拟化列表**：数据量较大时建议开启 `virtual-list`，减少渲染压力
7. **分组限制**：开启 `virtual-list` 后会按扁平选项渲染，不显示分组标题
8. **清空按钮**：`clearable` 模式下，仅当组件有选中值或输入内容且获得焦点或悬停时显示清空按钮
9. **空状态**：可通过 `emptyText` 设置简单文案，也可以使用 `empty` 插槽自定义内容
10. **z-index**：下拉内容的 z-index 默认为 2000，确保在其他内容上方显示
