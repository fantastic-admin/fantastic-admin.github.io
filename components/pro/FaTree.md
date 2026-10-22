---
url: /components/pro/FaTree.md
---
# FaTree 树形控件

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
| `virtualList` | `boolean` | `false` | 是否启用虚拟化列表 |
| `treeClass` | `HTMLAttributes['class']` | - | 树根节点的 class |
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

## 注意事项

1. **数据结构**：树形数据必须有 `label` 字段，子节点通过 `children` 数组表示
2. **唯一标识**：建议使用 `nodeKey` 指定唯一标识字段，便于节点操作
3. **复选模式**：`checkable` 模式下使用 `check-change` 事件，非复选模式使用 `selection-change` 事件
4. **级联选择**：复选框支持父子级联，父节点选中状态会根据子节点自动计算
5. **搜索展开**：搜索时匹配的节点所在父节点会自动展开
6. **自定义过滤**：提供 `filterMethod` 时会优先使用自定义逻辑，同时保留默认 label 查询作为后备
