---
url: /components/FaCascader.md
---
# FaCascader 级联选择器

级联选择器组件，支持多层级数据导航，默认多列并排（`panelMode="multi"`），也可切换为单列滑动模式（`panelMode="single"`）。

## 使用场景

* 级联选择器组件，支持多层级数据导航，默认多列并排（`panelMode="multi"`），也可切换为单列滑动模式（`panelMode="single"`）。
* 常见用法：clearable + 自定义分隔符、所有节点均可选（leafOnly=false）、单列滑动模式、点击展开子节点。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `options` | `CascaderOption[]` | 必需 | 级联数据 |
| `placeholder` | `string` | - | 占位提示文字 |
| `disabled` | `boolean` | - | 整体禁用 |
| `clearable` | `boolean` | - | 是否显示清除按钮 |
| `leafOnly` | `boolean` | `true` | `true`=只能选叶子节点，`false`=所有节点可选 |
| `separator` | `string` | `' / '` | 路径分隔符 |
| `panelMode` | `'multi' \| 'single'` | `'multi'` | 面板展示模式：多列并排 / 单列滑动 |
| `size` | `'default' \| 'sm'` | `'default'` | 触发器尺寸 |
| `triggerMode` | `'click' \| 'hover'` | `'click'` | 子节点展开方式（仅 `panelMode="multi"` 有效） |
| `columnMaxWidth` | `string` | `'180px'` | 每列最大宽度（仅 `panelMode="multi"` 有效） |
| `class` | `HTMLAttributes['class']` | - | 触发器自定义 CSS 类 |

### CascaderOption 接口

```ts
interface CascaderOption {
  label: string
  value: string | number
  disabled?: boolean
  children?: CascaderOption[]
}
```

### v-model

绑定最终选中节点的 `value`（叶子节点或 `leafOnly=false` 时的任意节点）。

## Events

| 事件 | 说明 | 回调参数 |
|------|------|----------|
| `change` | 选中值变化时触发 | `value: string \| number \| undefined` |

## 示例

### 基础用法

```vue
<script setup lang="ts">
const value = ref()

const options = [
  {
    label: '广东省',
    value: 'guangdong',
    children: [
      { label: '广州市', value: 'guangzhou' },
      { label: '深圳市', value: 'shenzhen' },
    ],
  },
  { label: '北京市', value: 'beijing' },
]
</script>

<template>
  <FaCascader v-model="value" :options placeholder="请选择" />
</template>
```

### clearable + 自定义分隔符

```vue
<FaCascader
  v-model="value"
  :options
  placeholder="请选择地区"
  clearable
  separator=" > "
/>
```

### 所有节点均可选（leafOnly=false）

```vue
<FaCascader
  v-model="value"
  :options
  placeholder="请选择（任意节点）"
  :leaf-only="false"
  clearable
/>
```

### 单列滑动模式

```vue
<FaCascader
  v-model="value"
  :options
  placeholder="请选择"
  panel-mode="single"
/>
```

### 点击展开子节点

```vue
<FaCascader
  v-model="value"
  :options
  placeholder="请选择"
  trigger-mode="click"
/>
```

### 禁用

```vue
<FaCascader v-model="value" :options disabled />
```

## 注意事项

1. 触发器宽度默认 `200px`，通过 `class` prop 自定义（如 `class="w-64"`）
2. `panelMode="multi"`（默认）：多列并排展示，同时可见所有已展开层级
3. `panelMode="single"`：单列展示，层级间通过左右滑动动画切换
4. `leafOnly=false` 时点击父节点会立即更新 `v-model`，面板保持打开供继续深入选择；点击外部关闭面板
5. 重新打开面板时，会自动定位到当前已选值所在的层级
6. z-index 默认为 2000，与 FaSelect 一致
