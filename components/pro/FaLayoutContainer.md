---
url: /components/pro/FaLayoutContainer.md
---
# FaLayoutContainer 布局容器

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

## 注意事项

1. **边栏按需渲染**：只有提供对应 slot 的边栏才会显示
2. **切换按钮**：默认在边栏边缘显示折叠/展开按钮
3. **圆角处理**：边栏折叠时会自动调整主内容区的圆角
4. **响应式**：支持百分比和固定数值两种尺寸设置方式
5. **垂直模式**：设置 `vertical` 后，上下边栏会优先显示
