---
url: /guide/devtools.md
---
# 开发者工具

:::info
该特性由 [Vue DevTools](https://github.com/vuejs/devtools) 提供技术支持。
:::

## 使用介绍

在 `.env.development` 开发环境配置文件中开启：

```yaml
# 是否开启开发者工具
VITE_OPEN_DEVTOOLS = true
```

开启后，在本地运行时，默认会在页面底部中间显示一个开发者工具按钮。

![](/devtools.gif){data-zoomable}

## 默认启动 IDE

Vue DevTools 支持在浏览器中选择组件时，自动在 IDE 中打开相应的源文件。

默认打开 VSCode ，如果你使用其他 IDE ，建议在根目录手动创建 `.env.development.local` 文件并写入：

```yaml
VITE_VUE_DEVTOOLS_LAUNCH_EDITOR = cursor
```

点击查看[支持的 IDE 列表](https://github.com/yyx990803/launch-editor#supported-editors)。
