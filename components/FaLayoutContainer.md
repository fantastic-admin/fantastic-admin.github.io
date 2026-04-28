---
url: /components/FaLayoutContainer.md
---
# FaLayoutContainer 布局容器组件

灵活的多区域布局容器，支持上下左右四个侧边区域，可折叠和拖拽调整。

## 使用场景

* 后台管理页面布局（左侧菜单 + 主内容）
* 三栏布局（导航 + 内容 + 详情）
* 上下结构页面（工具栏 + 内容 + 状态栏）
* 可折叠面板布局
* IDE 风格的编辑器界面

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `vertical` | `boolean` | `false` | 是否垂直布局模式 |
| `hideLeftSide` | `boolean` | `false` | 隐藏左侧边栏 |
| `hideRightSide` | `boolean` | `false` | 隐藏右侧边栏 |
| `hideTopSide` | `boolean` | `false` | 隐藏顶部边栏 |
| `hideBottomSide` | `boolean` | `false` | 隐藏底部边栏 |
| `hideLeftSideToggle` | `boolean` | `false` | 隐藏左侧切换按钮 |
| `hideRightSideToggle` | `boolean` | `false` | 隐藏右侧切换按钮 |
| `hideTopSideToggle` | `boolean` | `false` | 隐藏顶部切换按钮 |
| `hideBottomSideToggle` | `boolean` | `false` | 隐藏底部切换按钮 |
| `leftSideWidth` | `number \| string` | `300` | 左侧边栏宽度 |
| `rightSideWidth` | `number \| string` | `300` | 右侧边栏宽度 |
| `topSideHeight` | `number \| string` | `200` | 顶部边栏高度 |
| `bottomSideHeight` | `number \| string` | `200` | 底部边栏高度 |
| `class` | `HTMLAttributes['class']` | - | 容器 CSS 类 |
| `leftSideClass` | `HTMLAttributes['class']` | - | 左侧边栏 CSS 类 |
| `rightSideClass` | `HTMLAttributes['class']` | - | 右侧边栏 CSS 类 |
| `topSideClass` | `HTMLAttributes['class']` | - | 顶部边栏 CSS 类 |
| `bottomSideClass` | `HTMLAttributes['class']` | - | 底部边栏 CSS 类 |
| `defaultClass` | `HTMLAttributes['class']` | - | 主内容区 CSS 类 |

### Model

| 名称 | 类型 | 说明 |
|------|------|------|
| `leftSideVisiable` | `boolean` | 左侧边栏显示状态（支持 v-model） |
| `rightSideVisiable` | `boolean` | 右侧边栏显示状态（支持 v-model） |
| `topSideVisiable` | `boolean` | 顶部边栏显示状态（支持 v-model） |
| `bottomSideVisiable` | `boolean` | 底部边栏显示状态（支持 v-model） |

## Slots

| 名称 | 说明 |
|------|------|
| `leftSide` | 左侧边栏内容 |
| `rightSide` | 右侧边栏内容 |
| `topSide` | 顶部边栏内容 |
| `bottomSide` | 底部边栏内容 |
| `default` | 主内容区 |

## 示例

### 基础用法

```vue
<template>
  <FaLayoutContainer>
    <template #leftSide>左侧边栏</template>
    <template #default>主要内容</template>
    <template #rightSide>右侧边栏</template>
  </FaLayoutContainer>
</template>
```

### 左右布局

```vue
<template>
  <FaLayoutContainer>
    <template #leftSide>
      <div class="p-4">左侧菜单</div>
    </template>
    <template #default>
      <div class="p-4">主内容区域</div>
    </template>
  </FaLayoutContainer>
</template>
```

### 三栏布局

```vue
<template>
  <FaLayoutContainer
    :left-side-width="250"
    :right-side-width="300"
  >
    <template #leftSide>导航菜单</template>
    <template #default>主要内容</template>
    <template #rightSide>相关信息</template>
  </FaLayoutContainer>
</template>
```

### 垂直布局（上下结构）

```vue
<template>
  <FaLayoutContainer vertical>
    <template #topSide>
      <div class="p-4">顶部工具栏</div>
    </template>
    <template #default>主内容</template>
    <template #bottomSide>
      <div class="p-4">底部信息</div>
    </template>
  </FaLayoutContainer>
</template>
```

### 自定义边栏尺寸

```vue
<template>
  <FaLayoutContainer
    :left-side-width="'20%'"
    :right-side-width="280"
    :top-side-height="100"
  >
    <template #topSide>顶部</template>
    <template #leftSide>左侧</template>
    <template #default>主内容</template>
    <template #rightSide>右侧</template>
  </FaLayoutContainer>
</template>
```

### 控制边栏折叠

```vue
<script setup lang="ts">
const leftVisible = ref(true)
</script>

<template>
  <FaLayoutContainer v-model:left-side-visiable="leftVisible">
    <template #leftSide>可折叠的左侧栏</template>
    <template #default>主内容</template>
  </FaLayoutContainer>
  
  <FaButton @click="leftVisible = !leftVisible">
    切换左侧栏
  </FaButton>
</template>
```

### 隐藏切换按钮

```vue
<template>
  <FaLayoutContainer :hide-left-side-toggle="true">
    <template #leftSide>无法通过按钮折叠的左侧栏</template>
    <template #default>主内容</template>
  </FaLayoutContainer>
</template>
```

## 注意事项

1. **边栏按需渲染**：只有提供对应 slot 的边栏才会显示
2. **切换按钮**：默认在边栏边缘显示折叠/展开按钮
3. **圆角处理**：边栏折叠时会自动调整主内容区的圆角
4. **响应式**：支持百分比和固定数值两种尺寸设置方式
5. **垂直模式**：设置 `vertical` 后，上下边栏会优先显示
