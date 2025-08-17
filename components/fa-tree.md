# FaTree 树形控件 <Badge type="pro" text="专业版" /> <Badge text="v5.7.0" />

## Props

| 属性名            | 说明                                    | 类型                                         | 默认值      |
| ----------------- | --------------------------------------- | -------------------------------------------- | ----------- |
| data              | 数据                                    | `TreeNode[]`                                 | -           |
| checkable         | 是否可复选                              | `boolean`                                    | `false`     |
| filterable        | 是否可搜索                              | `boolean`                                    | `false`     |
| filterPlaceholder | 搜索输入框占位提示文案                  | `string`                                     | `'搜索...'` |
| filterMethod      | 自定义搜索函数，默认查询节点 label 属性 | `(query: string, node: TreeNode) => boolean` | -           |
| class             | 自定义类名                              | `string`                                     | -           |

```ts
interface TreeNode extends Record<string, any> {
  id: string
  name: string
  children?: TreeNode[]
  checked?: boolean
  disabled?: boolean
}
```

## Expose

| 属性名         | 说明               | 类型                           |
| -------------- | ------------------ | ------------------------------ |
| expand         | 展开指定或全部节点 | `(nodeIds?: string[]) => void` |
| collapse       | 收起指定或全部节点 | `(nodeIds?: string[]) => void` |
| checkAll       | 全选/取消全选      | `(checked: boolean) => void`   |
| setSelection   | 设置选中           | `(id: string) => void`         |
| clearSelection | 清除选择           | `() => void`                   |

## Slots

| 插槽名  | 说明           | 类型                                    |
| ------- | -------------- | --------------------------------------- |
| default | 自定义默认内容 | `{ node: TreeNode, expanded: boolean }` |
