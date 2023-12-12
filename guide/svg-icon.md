# 图标

框架提供了三种使用图标的方式，你可以根据自己的使用需求自行选择。

## 自定义图标

你可以去[阿里巴巴矢量图标库](https://www.iconfont.cn/)，或者其它支持下载 SVG 图标文件的网站，又或者是设计师绘制的 SVG 文件，将准备好的 SVG 图标文件放到 `/src/assets/icons/` 目录下，然后在页面中就可以通过 SvgIcon 组件使用了，name 就是 svg 的文件名。

```vue-html
<!-- /src/assets/icons/example.svg -->
<svg-icon name="example" />
```

## Iconify 图标

::: tip 说明
[Iconify](https://github.com/iconify/iconify) 提供 100+ 套图标集，有 100,000+ 个图标可以免费使用。
:::

使用方式很简单，你只需进入 [Iconify 官网](https://icon-sets.iconify.design/) 上查找 Iconify 提供的所有图标，然后点击需要使用的图标，复制图标名称，最后通过 Iconify 提供的 Icon 组件就可以使用了。

```vue
<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <Icon icon="ep:arrow-right" />
</template>
```

当然这么使用并没有很方便，依旧还是需要手动导入一个 Icon 组件。如果你也觉得麻烦的话，那么你可以使用 SvgIcon 组件来展示，框架已经帮你做好的所有处理。

```vue-html
<svg-icon name="ep:arrow-right" />
```

除了可以在 Iconify 查找搜需要的图标，你还可以在 [Icônes 网站](https://icones.js.org/) 上查找，这是一个基于 Iconify 的在线图标搜索网站，它比 Iconify 官网的操作更直观。

![](/icones1.png){data-zoomable}

![](/icones2.png){data-zoomable}

### 调用本地 Iconify 图标

由于 Iconify 图标默认是在线的服务，即首次调用会触发一个外部网络请求，去获取 svg 原始数据，并缓存在 localStorage 和 sessionStorage 中，这样下次再调用的时候，则直接从缓存中获取并展示。但如果你开发的后台应用是部署在内部网络，无法访问互联网，那么就需要使用到本地的 Iconify 图标。在使用本地 Iconify 图标时，框架会在首次加载时候将所有图标进行注册，类似于全局引入的概念。

执行 `pnpm run generate:icons` 命令，按照指引选择你需要用到的图标集，并选择使用方式为离线。这样再在框架中使用这些图标，就不会触发外部网络请求了。如果使用选择之外的图标，依旧还是会触发外部网络请求。

## Unocss 图标

:::tip 说明
这是使用 Iconify 图标的另一种方式，框架也更建议使用这种方案。
:::

以上两种方式在使用时都会渲染 `<svg>` 元素并插入到页面中，而这个动作在大量使用时就会对 DOM 渲染造成负担。

为了更极致的开发体验，框架还支持 Unocss 图标方案，它基于 Iconify 图标，采用了 CSS 去处理图标的展示，框架大部分核心模块里采用的是这种方式。如果你对其中的技术细节感兴趣，可以阅读这篇 Unocss 作者的《[聊聊纯 CSS 图标](https://antfu.me/posts/icons-in-pure-css-zh)》这篇文章。

框架已经做好了所有配置，使用方式也极为简单，你可以在任意原生 HTML 标签上通过设置 class 的方式使用，格式为 `i-{集合名}:{图标名}`，例如：

```vue-html
<div class="i-ep:arrow-right" />
<i class="i-ep:search" />
```

当然你同样也可以通过 SvgIcon 使用它。

```vue-html
<svg-icon name="i-ep:arrow-right" />
```

在使用 Unocss 图标时，需要注意以下几点：

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

- Unocss 默认不会扫描 `.ts` 文件，在 `.ts` 文件里使用需要增加 `// @unocss-include` 注释

## 图标选择器 <sup class="pro-badge" />

图标选择器是一个特殊的组件，它需要展示多套图标集内的所有图标。

通过执行 `pnpm run generate:icons` 命令，并按照指引完成操作后，图标选择器就会自动生效了。
