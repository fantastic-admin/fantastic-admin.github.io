---
url: /guide/devtools.md
---
# 开发工具

### Vue 开发工具

:::info
该特性由 [Vue DevTools](https://github.com/vuejs/devtools) 提供技术支持。
:::

在 `apps/<app>/.env.development` 开发环境配置文件中开启：

```env
# 启用 Vue 开发工具
# Enable Vue DevTools
VITE_ENABLE_VUE_DEVTOOLS = true
```

![](/devtools-vue.gif){data-zoomable}

### Console 工具

:::info
该特性由 [Unplugin Turbo Console](https://github.com/unplugin/unplugin-turbo-console) 提供技术支持。
:::

在 `apps/<app>/.env.development` 开发环境配置文件中开启：

```env
# 启用 turbo console
# Enable turbo console
VITE_ENABLE_TURBO_CONSOLE = true
```

![](/devtools-console.gif){data-zoomable}

### 默认启动 IDE

**Vue 开发工具** 和 **Console 工具** 都支持在浏览器中打开 IDE 并定位到源文件。

默认打开 VSCode ，如果你使用其他 IDE ，建议创建 `apps/<app>/.env.development.local` 文件并写入：

```env
# 启动编辑器，用于 vite-plugin-vue-devtools 和 unplugin-turbo-console
# 支持的编辑器 https://github.com/yyx990803/launch-editor#supported-editors
# Launch the editor for vite-plugin-vue-devtools and unplugin-turbo-console
# Supported editors https://github.com/yyx990803/launch-editor#supported-editors
VITE_LAUNCH_EDITOR = code
```

点击查看[支持的 IDE 列表](https://github.com/yyx990803/launch-editor#supported-editors)。
