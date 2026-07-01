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
