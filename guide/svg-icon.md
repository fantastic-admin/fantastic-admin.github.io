# 图标

:::warning 注意
由于 Element Plus 官方的 SVG 图标暂时不支持自动导入，整体开发体验并不友好，所以框架并没有采用 Element Plus 官方提供的使用方式。

如果你需要使用 Element Plus 的图标，可以参考下面 [Iconify](#iconify-图标) 或 [Unocss](#unocss-图标) 方案。
:::

框架提供了三种使用图标的方式，你可以根据自己的使用需求自行选择。

## 自定义图标

你可以去[阿里巴巴矢量图标库](https://www.iconfont.cn/)，或者其它支持下载 SVG 图标文件的网站，又或者是设计师绘制的 SVG 文件，将准备好的 SVG 图标文件放到 `/src/assets/icons/` 目录下，然后在页面中就可以通过 SvgIcon 组件使用了，name 就是 svg 的文件名。

```vue-html
<!-- /src/assets/icons/example.svg -->
<svg-icon name="example" />
```

因为 SvgIcon 组件只负责渲染 `<svg>` 元素，而下载的 SVG 图标文件的尺寸可能不统一，建议在外层使用 ElIcon 组件进行包裹，对 `<svg>` 元素进行统一处理。

```vue-html
<!-- 同时你还可以使用 el-icon 提供的 color 和 size 属性 -->
<el-icon color="red" size="48px">
  <svg-icon name="example" />
</el-icon>
```

## Iconify 图标

[Iconify](https://github.com/iconify/iconify) 提供 100+ 套图标集，有 100,000+ 个图标可以免费使用。

专业版可以使用任意图标集内的图标，基础版只能使用其中的 Element Plus 图标。

### 使用 Element Plus 图标

使用方式很简单，你只需进入 Iconify 的 [Element Plus 图标](https://icon-sets.iconify.design/ep/) 页面，然后点击需要使用的图标，复制图标名称 `ep:xxx`，最后通过 Iconify 提供的 Icon 组件就可以使用了。

```vue
<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <el-icon>
    <Icon icon="ep:arrow-right" />
  </el-icon>
</template>
```

当然这么使用并没有很方便，依旧还是需要手动导入一个 Icon 组件。如果你也觉得麻烦的话，那么你可以使用 SvgIcon 组件来展示，框架已经帮你做好的所有处理。

```vue-html
<el-icon>
  <svg-icon name="ep:arrow-right" />
</el-icon>
```

### 使用其它图标集的图标 <sup class="pro-badge" />

你可以在 [Iconify 官网](https://icon-sets.iconify.design/) 上查找 Iconify 提供的所有图标，并按照使用 Element Plus 图标的方式去使用。

或者你也可以在 [Icônes 网站](https://icones.js.org/) 上查找你想要的图标，这是一个基于 Iconify 的在线图标搜索网站，它比 Iconify 官网的操作更直观。并且还提供了 VSCode 扩展，安装 [Icônes 扩展](https://marketplace.visualstudio.com/items?itemName=afzalsayed96.icones) 就可以在 VSCode 里进行图标查找。

<ZoomImg src="/icones1.png" />

<ZoomImg src="/icones2.png" />

### 调用本地 Iconify 图标

由于 Iconify 图标默认是在线的服务，即首次调用会触发一个外部网络请求，去获取 svg 原始数据，并缓存在 localStorage 和 sessionStorage 中，这样下次再调用的时候，则直接从缓存中获取并展示。

但如果你开发的后台应用是部署在内部网络，无法访问互联网，那么就需要使用到本地的 Iconify 图标。

使用本地 Iconify 图标时，框架会在首次加载时候将所有图标进行注册，类似于全局引入的概念。

这里基础版和专业版的配置方式不太一样，请自行选择查看。


:::details 基础版
在应用配置里修改 Iconify 图标的使用方式改为离线使用。

```ts {2-4}
const globalSettings: Settings.all = {
  app: {
    iconifyOfflineUse: true,
  },
}
```
:::

:::details 专业版
在框架中执行 `pnpm run generate:icons` 命令后，按照指引选择你需要用到的图标集，并选择使用方式为离线。

这样再在框架中使用这些图标，就不会触发外部网络请求了。如果使用选择之外的图标，依旧还是会触发外部网络请求。
:::

## Unocss 图标 <sup class="pro-badge" />

:::tip
这是使用 Iconify 图标的另一种方式，框架也更建议使用这种方案。
:::

上面介绍的 Iconify 图标，在使用时和自定义图标一样，最终都会渲染出 `<svg>` 元素并插入到页面中，而 `<svg>` 元素就会对 DOM 造成负担。

为了更极致的开发体验，框架引入了 Unocss 图标方案，它基于 Iconify 图标，采用了 CSS 去处理图标的展示，框架大部分核心模块里采用的是这种方式。如果你对其中的技术细节感兴趣，可以阅读这篇 Unocss 作者的文章：《[聊聊纯 CSS 图标](https://antfu.me/posts/icons-in-pure-css-zh)》。

框架已经做好了所有配置，使用方式也极为简单，你可以在任意原生 HTML 标签上通过设置 class 的方式使用，格式为 `i-{集合名}:{图标名}`，例如：

```vue-html
<div class="i-ep:arrow-right" />
<i class="i-ep:search" />
```

当然你同样也可以通过 SvgIcon 使用它。

```vue-html
<svg-icon name="i-ep:arrow-right" />
```

在使用 Unocss 图标时，需要注意以下两点：

- 图标字符串不支持拆分

    ```vue-html
    <!-- 这样不会生效 -->
    <i :class="'i-ep' + ':search'" />
    ```

- 图标字符串不支持异步返回

    ```vue-html
    <!-- 这样不会生效 -->
    <!-- 假设 name 是异步请求返回的数据，name 为 i-ep:search -->
    <i :class="name" />
    ```

    如果确实有这种需求，你可以使用 SvgIcon 组件并设置 runtime 属性，框架会移除 `i-` 前缀并按 Iconify 图标进行处理，并渲染成 `<svg>` 元素。

    ```vue-html
    <!-- 假设 name 是异步请求返回的数据，name 为 i-ep:search -->
    <svg-icon :name="name" runtime />

    <!-- 等同于 -->
    <svg-icon name="ep:search" />
    ```

## 图标选择器 <sup class="pro-badge" />

:::tip
Element Plus 图标集是默认生效的，所以即便执行命令后，不选择任何图标集，框架也会引入 Element Plus 图标集。
:::

图标选择器是一个特殊的组件，它需要展示多套图标集内的所有图标。

通过执行 `pnpm run generate:icons` 命令，并按照指引完成操作后，图标选择器就会自动生效了。