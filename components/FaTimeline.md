---
url: /components/FaTimeline.md
---
# FaTimeline 时间轴组件

垂直时间轴组件，支持时间分组显示和滚动激活效果。

## 使用场景

* 订单状态跟踪
* 项目进度展示
* 审批流程记录
* 用户操作日志
* 版本更新历史
* 活动时间线

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `data` | `T[]` | `[]` | 时间轴数据数组 |
| `merge` | `boolean` | `false` | 是否合并相同日期的时间标签 |
| `class` | `HTMLAttributes['class']` | - | 自定义 CSS 类 |

### 泛型约束

```ts
T extends { datetime: string | number | Date }
```

## Slots

| 名称 | 说明 | 作用域参数 |
|------|------|------------|
| `default` | 时间轴内容模板 | `item: T` - 当前时间项数据 |

## 示例

### 基础用法

```vue
<script setup lang="ts">
const data = [
  { datetime: '2025-01-01', content: '项目启动' },
  { datetime: '2025-01-15', content: '需求评审' },
  { datetime: '2025-02-01', content: '开发完成' },
]
</script>

<template>
  <FaTimeline :data="data">
    <template #default="{ item }">
      <FaCard>
        <div>{{ item.content }}</div>
      </FaCard>
    </template>
  </FaTimeline>
</template>
```

### 基础时间轴

```vue
<script setup lang="ts">
const data = [
  { datetime: '2025-03-23', content: '请假申请', name: '张三' },
  { datetime: '2025-03-23', content: '部门主管审批', name: '李四' },
  { datetime: '2025-03-24', content: '人事审批', name: '王五' },
  { datetime: '2025-03-24', content: '完成' },
]
</script>

<template>
  <FaTimeline :data="data">
    <template #default="{ item }">
      <FaCard class="h-full">
        <template #header>
          <div>{{ item.content }}</div>
        </template>
        <template #footer>
          <div v-if="item.name" class="flex-end">
            操作人：{{ item.name }}
          </div>
        </template>
      </FaCard>
    </template>
  </FaTimeline>
</template>
```

### 合并相同时间

```vue
<script setup lang="ts">
const data = [
  { datetime: '2025-03-23 10:00', content: '提交申请' },
  { datetime: '2025-03-23 14:00', content: '初审通过' },
  { datetime: '2025-03-24 09:00', content: '复审开始' },
  { datetime: '2025-03-24 16:00', content: '最终审批' },
]
</script>

<template>
  <FaTimeline :data="data" merge>
    <template #default="{ item }">
      <FaCard>{{ item.content }}</FaCard>
    </template>
  </FaTimeline>
</template>
```

### 设置固定高度

```vue
<script setup lang="ts">
const data = [
  { datetime: '2025-01-01', content: '事件 1' },
  { datetime: '2025-01-02', content: '事件 2' },
  { datetime: '2025-01-03', content: '事件 3' },
  { datetime: '2025-01-04', content: '事件 4' },
  { datetime: '2025-01-05', content: '事件 5' },
]
</script>

<template>
  <FaTimeline :data="data" class="h-400">
    <template #default="{ item }">
      <FaCard>{{ item.content }}</FaCard>
    </template>
  </FaTimeline>
</template>
```

### 订单状态时间轴

```vue
<script setup lang="ts">
const orderTimeline = [
  { datetime: '2025-03-20 10:30', content: '订单已提交', status: 'success' },
  { datetime: '2025-03-20 10:35', content: '商家已接单', status: 'success' },
  { datetime: '2025-03-20 11:00', content: '商品制作中', status: 'success' },
  { datetime: '2025-03-20 11:30', content: '骑手已取货', status: 'active' },
  { datetime: '2025-03-20 12:00', content: '等待送达', status: 'pending' },
]

const statusMap = {
  success: 'text-green-500',
  active: 'text-blue-500',
  pending: 'text-gray-400',
}
</script>

<template>
  <FaTimeline :data="orderTimeline">
    <template #default="{ item }">
      <div :class="['p-4', statusMap[item.status]]">
        <div class="font-medium">{{ item.content }}</div>
        <div class="text-sm opacity-75">{{ item.datetime }}</div>
      </div>
    </template>
  </FaTimeline>
</template>
```

### 项目进度时间轴

```vue
<script setup lang="ts">
const projectMilestones = [
  { datetime: '2025-01-15', content: '项目启动', team: '产品组' },
  { datetime: '2025-02-01', content: '原型设计完成', team: '设计组' },
  { datetime: '2025-03-01', content: '前端开发完成', team: '前端组' },
  { datetime: '2025-03-15', content: '后端开发完成', team: '后端组' },
  { datetime: '2025-04-01', content: '联调测试完成', team: '测试组' },
  { datetime: '2025-04-15', content: '正式上线', team: '运维组' },
]
</script>

<template>
  <FaTimeline :data="projectMilestones">
    <template #default="{ item }">
      <FaCard>
        <template #header>
          <div class="flex-between">
            <span>{{ item.content }}</span>
            <span class="text-sm text-muted-foreground">{{ item.team }}</span>
          </div>
        </template>
      </FaCard>
    </template>
  </FaTimeline>
</template>
```

### 动态时间轴

```vue
<script setup lang="ts">
const activities = ref([
  { datetime: new Date('2025-01-01'), content: '开始活动', user: '管理员' },
])

function addActivity(content: string, user: string) {
  activities.value.push({
    datetime: new Date(),
    content,
    user,
  })
}
</script>

<template>
  <div>
    <FaTimeline :data="activities">
      <template #default="{ item }">
        <div class="p-4">
          <div>{{ item.content }}</div>
          <div class="text-sm text-muted-foreground">
            {{ item.user }} - {{ item.datetime.toLocaleString() }}
          </div>
        </div>
      </template>
    </FaTimeline>
    <FaButton @click="addActivity('新活动', '当前用户')">添加活动</FaButton>
  </div>
</template>
```

## 注意事项

1. **数据格式**：`data` 数组中的每一项必须包含 `datetime` 字段（支持 Date、string、number 类型）
2. **时间格式**：推荐使用 ISO 格式字符串或 Date 对象，确保正确解析
3. **合并模式**：`merge` 为 true 时，相同日期的时间项只显示一个时间标签
4. **滚动效果**：组件会根据滚动位置自动激活对应时间点的年份/月份/日期显示
5. **内容自定义**：通过默认插槽可以完全自定义每个时间项的展示内容
6. **高度设置**：建议设置固定高度或放在可滚动容器中使用
