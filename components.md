---
url: /components.md
---
# 介绍

框架提供一系列的组件方便快速开发。

## 基础组件

基础组件由 [Element Plus](https://element-plus.org/#/zh-CN) 提供，其中包含**按钮**、**文字链接**、**单选框**、**多选框**、**输入框**、**计数器**、**级联选择器**、**开关**、**滑块**等 **50+** 个组件。

阅读并学习请查看 [Element Plus 官方文档](https://element-plus.org/#/zh-CN)。

:::tip 说明
为了统一图标的使用，框架没有采用 Element Plus 官方图标的使用方式，这意味着部分 Element Plus 组件的 icon 属性将无法使用，例如 Button 按钮组件。

```vue-html
<!-- 无法使用 -->
<ElButton icon="el-icon-edit">编辑</ElButton>

<!-- 可以使用插槽代替 -->
<ElButton>
  <template #icon>
    <ElIcon>
      <FaIcon name="i-ep:edit" />
    </ElIcon>
  </template>
  编辑
</ElButton>
```

如果你习惯 Element Plus 官方图标的使用方式，需执行 `pnpm install @element-plus/icons-vue` 安装依赖，并按照官方的使用方式引入图标，点击[查看](http://element-plus.org/zh-CN/component/icon.html)详细介绍。

:::

:::warning 替换组件库
如果你不喜欢 Element Plus ，或者你想要将老项目迁移到 Fantastic-admin 上，但老项目里使用的组件库并不是 Element Plus ，框架也提供了组件库替换移方案：

* 《[替换为 Ant Design Vue](/guide/replace-to-antd)》
* 《[替换为 Arco Design Vue](/guide/replace-to-arco)》
* 《[替换为 Naive UI](/guide/replace-to-naive)》
* 《[替换为 TDesign](/guide/replace-to-tdesign)》
* 《[替换为 Vexip UI](/guide/replace-to-vexip)》
* 《[替换为 iDux](/guide/replace-to-idux)》

如果你想使用的组件库不在上述方案中，可以通过参考任何一份方案，理解替换的整理思路，并自行替换，别担心会很复杂，我们已经将大部分工作做好了。
:::

## 内建组件

为满足 UI 组件库可替换的特性，框架提供了一批内建组件。这些组件的设计仅满足于框架自身需求，如果在业务中使用并且无法满足业务需求，建议使用更为专业的 UI 组件库。

内建组件存放在 `/src/ui/components/` 目录下，并配置了使用时自动引入。

:::tip 说明
如果内建组件有提供 `class` 属性，或者类似于 `class` 的属性，例如 `contentClass` ，意味着你可以通过 UnoCSS 提供的原子类来修改组件的默认样式，并且不会产生样式冲突。

其背后的原理是因为框架通过 `cn()` 函数来管理组件的 `class`：

```ts
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

:::

## 扩展组件

扩展组件也就是开发者自定义的组件，存放在 `/src/components/` 目录下，我们也建议开发者将自定义组件存放在该目录下，方便后续框架迁移升级。

框架提供了几个基于 Element Plus 组件上二次封装的组件。
