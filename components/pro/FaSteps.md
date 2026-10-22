---
url: /components/pro/FaSteps.md
---
# FaSteps 步骤条

步骤条组件，用于展示流程进度、当前步骤状态和每个步骤的扩展内容。

## 使用场景

* 分步表单
* 订单流程跟踪
* 审批流程展示
* 向导式配置流程
* 任务执行进度展示

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `steps` | `StepsItem[]` | - | 步骤列表 |
| `status` | `'error' \| 'process' \| 'wait' \| 'finish'` | `'process'` | 当前步骤状态 |
| `class` | `HTMLAttributes['class']` | - | 自定义 CSS 类 |

### Model

| 名称 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `number` | `0` | 当前步骤下标，从 `0` 开始 |

### StepsItem

| 属性 | 类型 | 说明 |
|------|------|------|
| `id` | `string` | 步骤唯一标识，也是具名插槽名称 |
| `title` | `string` | 步骤标题 |
| `description` | `string` | 步骤描述 |

## Slots

每个步骤都可以通过 `steps.id` 对应的具名插槽扩展内容。

| 名称 | 说明 | 作用域参数 |
|------|------|------------|
| `[steps.id]` | 指定步骤的扩展内容 | `step: StepsItem` - 当前步骤数据`index: number` - 当前步骤下标`status: StepsStatus` - 当前步骤最终状态`active: boolean` - 是否为当前步骤`finished: boolean` - 是否已完成 |

## 注意事项

1. **步骤下标**：`modelValue` 从 `0` 开始，和 `steps` 数组下标保持一致
2. **状态含义**：
   * `process`：当前步骤进行中，显示步骤序号
   * `wait`：当前步骤等待中，显示加载图标和呼吸动效
   * `finish`：当前步骤完成，显示完成图标
   * `error`：当前步骤异常，显示错误图标
3. **完成态判断**：当前步骤之前的步骤会自动视为已完成；当当前步骤 `status` 为 `finish` 时，当前步骤也视为已完成
4. **具名插槽**：插槽名称来自 `steps.id`，请确保每个步骤的 `id` 唯一且适合作为 Vue slot name
5. **样式来源**：组件基于 shadcn-vue Stepper 实现，并保留少量状态色和图标映射
