---
url: /guide/loading.md
---
# 首屏 Loading

:::info
该特性由 [vite-plugin-app-loading](https://github.com/hooray/vite-plugin-app-loading) 提供技术支持。
:::

首屏 Loading 是指首次访问页面，在页面上空白的等待时间时，会展示一个 Loading 动画，直到页面加载完成。

![](/loading.png){data-zoomable}

## 自定义

直接修改根目录下的 `/loading.html` 文件即可，你可以从 [CSS Loaders](https://css-loaders.com/) 网站中找找灵感，它提供了 600+ 个纯 CSS 的加载动画。

## 原理

框架会自动读取 `/loading.html` 文件内容并在 Vite 构建前注入到 `/index.html` 中，所以它也支持 Vite 的 [HTML 环境变量替换](https://cn.vitejs.dev/guide/env-and-mode.html#html-env-replacement)。
