# 介绍

框架提供一系列的组件方便快速开发。

## 基础组件

基础组件由 [Element Plus](https://element-plus.org/#/zh-CN) 提供，其中包含**按钮**、**文字链接**、**单选框**、**多选框**、**输入框**、**计数器**、**级联选择器**、**开关**、**滑块**等 **50+** 个组件。

阅读并学习请查看 [Element Plus 官方文档](https://element-plus.org/#/zh-CN)。

:::tip
为了统一图标的使用，框架没有采用 Element Plus 官方图标的使用方式，这意味着部分 Element Plus 组件的 icon 属性将无法使用，例如 Button 按钮组件。

```vue-html
<!-- 无法使用 -->
<el-button icon="el-icon-edit">编辑</el-button>

<!-- 可以使用插槽代替 -->
<el-button>
  <template #icon>
    <el-icon>
      <svg-icon name="ep:edit" />
    </el-icon>
  </template>
  编辑
</el-button>
```

如果你习惯 Element Plus 官方图标的使用方式，需执行 `pnpm install @element-plus/icons-vue` 安装依赖，并按照官方的使用方式引入图标，点击[查看](http://element-plus.org/zh-CN/component/icon.html)详细介绍。

:::

## 扩展组件

扩展组件为框架封装的组件，有全新开发的组件，也有在 Element Plus 组件上二次封装的组件，还有一些则是封装了第三方的插件。

组件源码完全开放，如果觉得用着不顺手，可以到 `/src/components/` 目录下找到对应组件自行修改。