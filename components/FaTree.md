---
url: /components/FaTree.md
---
# FaTree 树形控件组件

树形数据展示组件，支持节点展开/收起、选择、复选框、搜索过滤和自定义节点。

## 使用场景

* 文件/目录树
* 组织架构树
* 分类/标签树
* 权限菜单树
* 树形选择器

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `data` | `TreeNode[]` | **必需** | 树形数据 |
| `checkable` | `boolean` | `false` | 是否显示复选框 |
| `filterable` | `boolean` | `false` | 是否显示搜索框 |
| `filterPlaceholder` | `string` | `'搜索...'` | 搜索框占位文本 |
| `nodeKey` | `string` | - | 节点唯一标识字段名 |
| `defaultExpandAll` | `boolean` | `false` | 是否默认展开所有节点 |
| `filterMethod` | `(query: string, node: TreeNode) => boolean` | - | 自定义过滤方法 |
| `class` | `HTMLAttributes['class']` | - | 自定义 CSS 类 |

### TreeNode 接口

```ts
interface TreeNode extends Record<string, any> {
  label: string
  children?: TreeNode[]
  checked?: boolean
  disabled?: boolean
}
```

## Slots

| 名称 | 说明 | 作用域参数 |
|------|------|------------|
| `default` | 自定义节点内容 | `node: TreeNode` - 当前节点`expanded: boolean` - 是否展开 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|------------|
| `selection-change` | 选中节点变化时触发（非复选模式） | `node: TreeNode \| null` |
| `check-change` | 复选框状态变化时触发 | `nodes: TreeNode[]` - 所有选中节点 |

## Exposed Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| `expand` | 展开节点 | `nodeIds?: string[]` - 节点 ID 数组，不传则展开所有 |
| `collapse` | 收起节点 | `nodeIds?: string[]` - 节点 ID 数组，不传则收起所有 |
| `checkAll` | 全选/取消全选 | `checked: boolean` - 是否全选 |
| `setSelection` | 设置选中节点 | `id: string` - 节点 ID |
| `clearSelection` | 清除选择 | 无 |

## 示例

### 基础用法

```vue
<script setup lang="ts">
import type { TreeNode } from '@/ui/components/tree'

const data = ref<TreeNode[]>([
  {
    label: '根节点',
    children: [
      { label: '子节点 1' },
      { label: '子节点 2' },
    ],
  },
])
</script>

<template>
  <FaTree :data="data" />
</template>
```

### 基础树形结构

```vue
<script setup lang="ts">
import type { TreeNode } from '@/ui/components/tree'

const data = ref<TreeNode[]>([
  {
    id: '1',
    label: '根目录',
    children: [
      {
        id: '1-1',
        label: '文件夹 1',
        children: [
          { id: '1-1-1', label: '文件 1.txt' },
          { id: '1-1-2', label: '文件 2.txt' },
        ],
      },
      {
        id: '1-2',
        label: '文件夹 2',
        children: [
          { id: '1-2-1', label: '文件 3.txt' },
        ],
      },
    ],
  },
])

const selectedNode = ref<TreeNode | null>(null)

function handleSelectionChange(node: TreeNode | null) {
  selectedNode.value = node
}
</script>

<template>
  <FaTree :data="data" @selection-change="handleSelectionChange" />
  <div class="mt-4">
    当前选中：{{ selectedNode?.label }}
  </div>
</template>
```

### 复选框模式

```vue
<script setup lang="ts">
import type { TreeNode } from '@/ui/components/tree'

const data = ref<TreeNode[]>([
  {
    label: '根节点',
    children: [
      { label: '子节点 1' },
      { label: '子节点 2' },
      { label: '子节点 3' },
    ],
  },
])

const checkedNodes = ref<TreeNode[]>([])

function handleCheckChange(nodes: TreeNode[]) {
  checkedNodes.value = nodes
}
</script>

<template>
  <FaTree :data="data" checkable @check-change="handleCheckChange" />
  <div class="mt-4">
    选中节点：
    <div v-for="node in checkedNodes" :key="node.label">
      {{ node.label }}
    </div>
  </div>
</template>
```

### 带搜索过滤

```vue
<template>
  <FaTree :data="data" filterable filter-placeholder="搜索节点..." />
</template>
```

### 自定义过滤方法

```vue
<script setup lang="ts">
import type { TreeNode } from '@/ui/components/tree'

const data = ref<TreeNode[]>([
  {
    label: '文档',
    type: 'folder',
    children: [
      { label: '需求文档.doc', type: 'file' },
      { label: '设计文档.pdf', type: 'file' },
    ],
  },
  {
    label: '图片',
    type: 'folder',
    children: [
      { label: 'logo.png', type: 'file' },
      { label: 'banner.jpg', type: 'file' },
    ],
  },
])

function customFilter(query: string, node: TreeNode) {
  // 按类型过滤
  if (query === 'file' && node.type === 'file') return true
  if (query === 'folder' && node.type === 'folder') return true
  // 按名称过滤（默认也会执行）
  return node.label.toLowerCase().includes(query.toLowerCase())
}
</script>

<template>
  <FaTree :data="data" filterable :filter-method="customFilter" />
</template>
```

### 默认展开所有节点

```vue
<template>
  <FaTree :data="data" default-expand-all />
</template>
```

### 使用 nodeKey

```vue
<script setup lang="ts">
const data = ref([
  {
    id: 'root',
    label: '根节点',
    children: [
      { id: 'child-1', label: '子节点 1' },
      { id: 'child-2', label: '子节点 2' },
    ],
  },
])

const treeRef = ref<InstanceType<typeof FaTree>>()

function expandChild() {
  treeRef.value?.expand(['child-1'])
}
</script>

<template>
  <FaTree ref="treeRef" :data="data" node-key="id" />
  <FaButton @click="expandChild">展开子节点 1</FaButton>
</template>
```

### 自定义节点内容

```vue
<template>
  <FaTree :data="data">
    <template #default="{ node, expanded }">
      <div class="flex-between w-full">
        <span>{{ node.label }}</span>
        <FaBadge v-if="node.count" :value="node.count" />
      </div>
    </template>
  </FaTree>
</template>
```

### 禁用节点

```vue
<script setup lang="ts">
const data = ref<TreeNode[]>([
  {
    label: '根节点',
    children: [
      { label: '可用节点' },
      { label: '禁用节点', disabled: true },
      { label: '正常节点' },
    ],
  },
])
</script>

<template>
  <FaTree :data="data" checkable />
</template>
```

### 外部控制展开/收起

```vue
<script setup lang="ts">
const treeRef = ref<InstanceType<typeof FaTree>>()

function expandAll() {
  treeRef.value?.expand()
}

function collapseAll() {
  treeRef.value?.collapse()
}

function expandSpecific() {
  treeRef.value?.expand(['node-1', 'node-2'])
}
</script>

<template>
  <div class="flex gap-2 mb-4">
    <FaButton @click="expandAll">展开全部</FaButton>
    <FaButton @click="collapseAll">收起全部</FaButton>
    <FaButton @click="expandSpecific">展开指定</FaButton>
  </div>
  <FaTree ref="treeRef" :data="data" node-key="id" />
</template>
```

### 全选/取消全选

```vue
<script setup lang="ts">
const treeRef = ref<InstanceType<typeof FaTree>>()
const isAllChecked = ref(false)

function toggleCheckAll() {
  treeRef.value?.checkAll(!isAllChecked.value)
  isAllChecked.value = !isAllChecked.value
}
</script>

<template>
  <FaButton @click="toggleCheckAll">
    {{ isAllChecked ? '取消全选' : '全选' }}
  </FaButton>
  <FaTree ref="treeRef" :data="data" checkable />
</template>
```

## 注意事项

1. **数据结构**：树形数据必须有 `label` 字段，子节点通过 `children` 数组表示
2. **唯一标识**：建议使用 `nodeKey` 指定唯一标识字段，便于节点操作
3. **复选模式**：`checkable` 模式下使用 `check-change` 事件，非复选模式使用 `selection-change` 事件
4. **级联选择**：复选框支持父子级联，父节点选中状态会根据子节点自动计算
5. **搜索展开**：搜索时匹配的节点所在父节点会自动展开
6. **自定义过滤**：提供 `filterMethod` 时会优先使用自定义逻辑，同时保留默认 label 查询作为后备
