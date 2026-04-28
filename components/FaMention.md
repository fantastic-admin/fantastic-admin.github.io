---
url: /components/FaMention.md
---
# FaMention 提及组件

允许通过触发字符提及列表中项目的组件。

## 使用场景

* 允许通过触发字符提及列表中项目的组件。
* 常见用法：单行输入并改成 `#` 触发、自定义候选项外观。

## Props

### 数据模型

* `v-model`：输入框当前文本。
* `v-model:value`：当前已选中的 mention `value[]`。
* `v-model:open`：候选层展开状态。

实际插入到输入框里的文本是 `trigger + label`，而 `v-model:value` 里存的是每个条目的 `value`。

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `items` | `MentionOption[]` | **必填** | 候选项列表 |
| `label` | `string` | - | 输入区域标签 |
| `placeholder` | `string` | `'输入 @ 触发提及'` | 占位符 |
| `rows` | `number` | `4` | 文本域行数 |
| `inputAs` | `'input' \| 'textarea'` | `'textarea'` | 使用单行输入或多行文本域 |
| `trigger` | `string` | `'@'` | 触发提及的字符 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `required` | `boolean` | `false` | 是否必填 |
| `name` | `string` | - | 表单提交字段名 |
| `exactMatch` | `boolean` | `false` | 是否使用精确匹配过滤 |
| `loop` | `boolean` | `false` | 键盘导航是否循环 |
| `modal` | `boolean` | `false` | 候选层是否使用更强的模态关闭行为 |
| `defaultOpen` | `boolean` | `false` | 初始展开状态 |
| `class` | `ClassValue` | - | 根容器类名 |
| `labelClass` | `ClassValue` | - | 标签类名 |
| `inputClass` | `ClassValue` | - | 输入控件类名 |
| `contentClass` | `ClassValue` | - | 候选层类名 |
| `itemClass` | `ClassValue` | - | 候选项类名 |

### MentionOption

```ts
interface MentionOption {
  value: string
  label?: string
  disabled?: boolean
}
```

## Slots

| 名称 | 说明 |
|------|------|
| `label` | 自定义标签内容 |
| `item` | 自定义候选项内容，slot props: `{ item, selected, highlighted, disabled }` |

## API

### Primitive API

如果你不想使用默认封装，可以直接组合这些基础组件：

```ts
import {
  MentionRoot,
  MentionLabel,
  MentionInput,
  MentionPortal,
  MentionContent,
  MentionItem,
} from '@fantastic-admin/components'
```

## 示例

### 基础用法

```vue
<script setup lang="ts">
const text = ref('')
const mentions = ref<string[]>([])

const users = [
  { value: 'linyue', label: '林岳' },
  { value: 'olivia', label: 'Olivia Chen' },
  { value: 'jayden', label: 'Jayden Wu' },
]
</script>

<template>
  <FaMention
    v-model="text"
    v-model:value="mentions"
    label="项目讨论"
    placeholder="输入 @ 选择协作者"
    :items="users"
  />
</template>
```

### 单行输入并改成 `#` 触发

```vue
<script setup lang="ts">
const subject = ref('')
const issueValues = ref<string[]>([])

const issues = [
  { value: 'FE-128', label: 'FE-128 登录页联调' },
  { value: 'OPS-32', label: 'OPS-32 发布流水线巡检' },
]
</script>

<template>
  <FaMention
    v-model="subject"
    v-model:value="issueValues"
    input-as="input"
    trigger="#"
    placeholder="输入 # 关联任务"
    :items="issues"
  />
</template>
```

### 自定义候选项外观

```vue
<script setup lang="ts">
const message = ref('')
const mentions = ref<string[]>([])

const users = [
  { value: 'lucas', label: 'Lucas He' },
  { value: 'nora', label: 'Nora Lin' },
]

const directory: Record<string, { email: string }> = {
  lucas: { email: 'lucas.he@fantastic.dev' },
  nora: { email: 'nora.lin@fantastic.dev' },
}
</script>

<template>
  <FaMention
    v-model="message"
    v-model:value="mentions"
    :items="users"
  >
    <template #item="{ item, selected }">
      <div class="flex w-full items-center justify-between gap-3">
        <div class="min-w-0">
          <div class="truncate font-medium">{{ item.label ?? item.value }}</div>
          <div class="truncate text-xs text-muted-foreground">
            {{ directory[item.value]?.email }}
          </div>
        </div>
        <FaBadge v-if="selected" variant="secondary">
          已选
        </FaBadge>
      </div>
    </template>
  </FaMention>
</template>
```

## 注意事项

### 键盘交互

* `ArrowUp / ArrowDown`：切换高亮项
* `Enter`：插入当前高亮项
* `Escape`：关闭候选层
* `Backspace / Delete`：删除整段 mention，而不是拆碎文本

1. 只支持单个触发字符，例如 `@` 或 `#`。
2. 过滤默认使用模糊匹配；传入 `exactMatch` 或 `onFilter` 可以覆盖。
