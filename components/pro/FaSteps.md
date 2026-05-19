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

## 示例

### 基础用法

```vue
<script setup lang="ts">
import type { StepsItem } from '@fantastic-admin/components'

const steps: StepsItem[] = [
  { id: 'account', title: '账号信息', description: '填写登录账号' },
  { id: 'profile', title: '完善资料', description: '补充姓名与部门' },
  { id: 'permission', title: '分配权限', description: '选择角色和菜单' },
  { id: 'done', title: '完成', description: '确认并提交' },
]
</script>

<template>
  <FaSteps :model-value="2" :steps="steps" />
</template>
```

### 双向绑定

```vue
<script setup lang="ts">
import type { StepsItem } from '@fantastic-admin/components'

const currentStep = ref(1)

const steps: StepsItem[] = [
  { id: 'create', title: '创建订单', description: '录入客户和商品' },
  { id: 'payment', title: '支付确认', description: '等待支付结果' },
  { id: 'delivery', title: '安排发货', description: '选择物流渠道' },
  { id: 'finish', title: '订单完成', description: '归档交易记录' },
]

function prevStep() {
  currentStep.value = Math.max(currentStep.value - 1, 0)
}

function nextStep() {
  currentStep.value = Math.min(currentStep.value + 1, steps.length - 1)
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <FaSteps v-model="currentStep" :steps="steps" />
    <FaButtonGroup class="mx-auto">
      <FaButton variant="outline" :disabled="currentStep === 0" @click="prevStep">
        上一步
      </FaButton>
      <FaButton :disabled="currentStep === steps.length - 1" @click="nextStep">
        下一步
      </FaButton>
    </FaButtonGroup>
  </div>
</template>
```

### 设置当前步骤状态

```vue
<script setup lang="ts">
import type { StepsItem, StepsStatus } from '@fantastic-admin/components'

const currentStep = ref(1)
const status = ref<StepsStatus>('wait')

const steps: StepsItem[] = [
  { id: 'draft', title: '提交资料', description: '保存申请表单' },
  { id: 'review', title: '审核中', description: '等待主管确认' },
  { id: 'archive', title: '归档', description: '生成最终记录' },
]
</script>

<template>
  <FaSteps v-model="currentStep" :steps="steps" :status="status" />
</template>
```

### 自定义步骤内容

```vue
<script setup lang="ts">
import type { StepsItem } from '@fantastic-admin/components'

const steps: StepsItem[] = [
  { id: 'prepare', title: '准备', description: '校验订单信息' },
  { id: 'ship', title: '发货', description: '同步物流单号' },
  { id: 'receive', title: '签收', description: '确认客户收货' },
]
</script>

<template>
  <FaSteps :model-value="1" :steps="steps">
    <template #prepare="{ finished }">
      <div v-if="finished" class="text-xs text-green-500">
        商品库存已锁定
      </div>
    </template>
    <template #ship="{ active, status }">
      <div v-if="active" class="text-xs text-muted-foreground">
        当前节点：{{ status }}，物流单待生成
      </div>
    </template>
  </FaSteps>
</template>
```

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
