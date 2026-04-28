---
url: /components/FaEmpty.md
---
# FaEmpty 空状态组件

用于展示列表/表格/内容为空时的状态提示，支持自定义图标和内容。

## 使用场景

* 表格/列表无数据
* 搜索无结果
* 页面内容为空
* 购物车为空
* 消息列表为空
* 收藏/历史记录为空

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `icon` | `string` | - | 图标名称 |
| `title` | `string` | - | 标题文字 |
| `description` | `string` | - | 描述文字 |
| `class` | `HTMLAttributes['class']` | - | 容器 CSS 类 |

## Slots

| 名称 | 说明 |
|------|------|
| `icon` | 自定义图标 |
| `title` | 自定义标题 |
| `description` | 自定义描述 |
| `default` | 底部操作区内容 |

## 示例

### 基础用法

```vue
<template>
  <FaEmpty icon="i-lucide:inbox" title="暂无数据" description="当前没有任何内容" />
</template>
```

### 基础空状态

```vue
<template>
  <FaEmpty 
    icon="i-lucide:inbox" 
    title="暂无数据" 
    description="当前没有任何内容" 
  />
</template>
```

### 仅图标

```vue
<template>
  <FaEmpty icon="i-lucide:folder-open" />
</template>
```

### 仅标题

```vue
<template>
  <FaEmpty title="空空如也" />
</template>
```

### 自定义图标

```vue
<template>
  <FaEmpty title="暂无数据">
    <template #icon>
      <FaIcon name="i-lucide:database" class="size-12 text-muted-foreground" />
    </template>
  </FaEmpty>
</template>
```

### 带操作按钮

```vue
<template>
  <FaEmpty icon="i-lucide:folder-search" title="没有找到结果" description="试试其他关键词">
    <template #default>
      <FaButton class="mt-4">查看全部</FaButton>
    </template>
  </FaEmpty>
</template>
```

### 表格空状态

```vue
<template>
  <table class="w-full">
    <thead>
      <tr>
        <th>姓名</th>
        <th>邮箱</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="data.length === 0">
        <td :colspan="3" class="p-8">
          <FaEmpty icon="i-lucide:table" title="暂无数据" />
        </td>
      </tr>
      <tr v-else v-for="item in data" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.actions }}</td>
      </tr>
    </tbody>
  </table>
</template>
```

### 列表空状态

```vue
<template>
  <div v-if="list.length === 0">
    <FaEmpty 
      icon="i-lucide:list" 
      title="暂无项目" 
      description="点击右下角按钮创建新项目"
    >
      <template #default>
        <FaButton class="mt-4">
          <FaIcon name="i-lucide:plus" />
          创建项目
        </FaButton>
      </template>
    </FaEmpty>
  </div>
  <div v-else>
    <!-- 列表内容 -->
  </div>
</template>
```

### 搜索无结果

```vue
<template>
  <FaEmpty 
    icon="i-lucide:search-x" 
    title="未找到匹配结果" 
    :description="`没有找到与\"${searchQuery}\"相关的内容`"
  >
    <template #default>
      <FaButton variant="outline" class="mt-4" @click="searchQuery = ''">
        清除搜索
      </FaButton>
    </template>
  </FaEmpty>
</template>
```

### 自定义全部内容

```vue
<template>
  <FaEmpty>
    <template #icon>
      <div class="text-6xl">🎉</div>
    </template>
    <template #title>
      <span class="text-primary font-bold">任务已完成！</span>
    </template>
    <template #description>
      <p class="text-muted-foreground">所有任务都已处理完毕，休息一下~</p>
    </template>
    <template #default>
      <div class="flex gap-2 mt-6">
        <FaButton>创建新任务</FaButton>
        <FaButton variant="outline">查看已完成</FaButton>
      </div>
    </template>
  </FaEmpty>
</template>
```

## 注意事项

1. **区域显示**：只有提供对应内容（props 或 slots）的区域才会显示
2. **slot 优先**：slot 内容会覆盖对应的 props
3. **居中对齐**：内容默认居中对齐
4. **间距适当**：各区域之间有适当的间距
