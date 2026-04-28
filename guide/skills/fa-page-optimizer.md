---
url: /guide/skills/fa-page-optimizer.md
---
# fa-page-optimizer

`fa-page-optimizer` 用来重构已经存在的 Vue 页面。它会优先使用 Fantastic-admin 内建的 `Fa*` 组件和工具函数，替换原生 HTML、重复造轮子的自定义实现，以及风格不统一的页面壳层，在尽量不改业务逻辑的前提下，把页面拉回框架统一的交互和视觉体系。

## 适用场景

* 页面结构太乱、风格不统一
* 页面里有大量原生 HTML 或重复自定义实现
* 希望用框架内建 `Fa*` 组件替换现有实现
* 希望保留现有接口、权限和业务逻辑，只优化视图层与页面结构

## 使用方式

直接说明以下信息即可：

* 目标应用，例如 `example`
* 需要优化的页面文件或目录
* 希望替换或优化的内容，例如搜索区、卡片容器、弹窗、分页、空态、加载状态
* 是否允许顺手拆分子组件或整理模板结构
* 是否要求不改业务逻辑

示例：

```text
在 example 应用里优化用户列表页。
文件是 apps/example/src/views/system/user/index.vue。
把原生按钮、搜索区域、分页和删除确认弹窗替换成 Fa 组件，不要改业务逻辑。
```

## 常见优化内容

* 用 `FaCard` 收敛页面容器、标题区、操作区和底部区域
* 用 `FaSearchBar` 替换手写搜索表单或零散筛选输入
* 用 `FaButton`、`FaButtonGroup` 统一操作按钮的样式、尺寸和状态
* 用 `FaModal`、`FaDrawer`、`useFaModal()` 替换自定义弹层与确认逻辑
* 用 `FaPagination`、`FaEmpty`、`FaLoading`、`useFaLoading()` 统一列表状态
* 用 `faToast()` 替换零散的成功、失败、警告提示调用

## 结果

通常会修改已有页面文件，例如：

* `apps/<app>/src/views/.../*.vue`
* `apps/<app>/src/views/.../components/*.vue`（按需拆分）

常见结果包括：

* 用 `FaButton`、`FaCard`、`FaModal`、`FaPagination` 等替换现有实现
* 优化页面结构与样式
* 保留原有业务逻辑、接口调用和权限判断
* 让页面更贴近 Fantastic-admin 已有页面的交互方式与视觉风格
