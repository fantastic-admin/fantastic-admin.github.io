---
url: /guide/skills/fa-slot-creator.md
---
# fa-slot-creator

## 适用场景

* 想在头部、侧边栏、工具栏、标签栏增加自定义内容
* 想在 logo 旁边加组织信息、切换器、按钮等
* 想加悬浮组件或自由定位内容

## 使用方式

直接说明以下信息即可：

* 目标应用，例如 `example`
* 想放置的区域或插槽位置
* 要展示的内容
* 是否有样式或交互要求

示例：

```text
在 example 应用里，给 HeaderAfterLogo 插槽加一个组织切换器。
使用框架内建组件实现，风格和顶部导航保持一致。
```

## 结果

通常会新增：

* `apps/<app>/src/slots/<SlotName>/index.vue`

如果是调整已有插槽，也可能会修改现有：

* `apps/<app>/src/slots/<SlotName>/index.vue`
