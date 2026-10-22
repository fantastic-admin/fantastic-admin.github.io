---
url: /guide/env.md
---
# 环境变量

环境变量配置文件在 `apps/<app>/` 根目录，默认提供三套配置，分别为：

::: code-group

```env \[.env.development 开发环境]
# 应用配置面板
# Application configuration panel
VITE_APP_SETTING = true

# 网站标题
# Website title
VITE_APP_TITLE = Fantastic-admin

# 网络请求地址，应用于 axios 的 baseURL
# Network request address, applied to axios's baseURL
VITE_APP_API_BASEURL = /

# localStorage/sessionStorage 前缀
# localStorage/sessionStorage prefix
VITE_APP_STORAGE_PREFIX = fa_dev_

# 调试工具，可设置 eruda 或 vconsole
# Debugging tool, can set eruda or vconsole
VITE_APP_DEBUG_TOOL =

# ===== 以下配置仅在开发环境生效 =====
# ===== The following configuration is only effective in the development environment. =====

# 启用代理
# Enable proxy
VITE_ENABLE_PROXY = false

# 启用 Vue 开发工具
# Enable Vue DevTools
VITE_ENABLE_VUE_DEVTOOLS = false

# 启用 turbo console
# Enable turbo console
VITE_ENABLE_TURBO_CONSOLE = false

# 启动编辑器，用于 vite-plugin-vue-devtools 和 unplugin-turbo-console
# 支持的编辑器 https://github.com/yyx990803/launch-editor#supported-editors
# Launch the editor for vite-plugin-vue-devtools and unplugin-turbo-console
# Supported editors https://github.com/yyx990803/launch-editor#supported-editors
VITE_LAUNCH_EDITOR = code

```

```env \[.env.test 测试环境]
# 应用配置面板
# Application configuration panel
VITE_APP_SETTING = false

# 网站标题
# Website title
VITE_APP_TITLE = Fantastic-admin

# 网络请求地址，应用于 axios 的 baseURL
# Network request address, applied to axios's baseURL
VITE_APP_API_BASEURL = /

# localStorage/sessionStorage 前缀
# localStorage/sessionStorage prefix
VITE_APP_STORAGE_PREFIX = fa_test_

# 调试工具，可设置 eruda 或 vconsole
# Debugging tool, can set eruda or vconsole
VITE_APP_DEBUG_TOOL =

# ===== 以下配置仅在测试环境生效 =====
# ===== The following configuration is only effective in the test environment. =====

# 禁用浏览器开发者工具
# Disable browser developer tools
VITE_APP_DISABLE_DEVTOOL = false

# 启用假数据
# Enable build fake data
VITE_BUILD_FAKE = true

# 启用 sourcemap
# Enable build sourcemap
VITE_BUILD_SOURCEMAP = true

# 压缩方式，支持 gzip 和 brotli
# Build compression method, supports gzip and brotli
VITE_BUILD_COMPRESS =

# 构建后生成存档，支持 zip 和 tar
# Generate archive after build, supports zip and tar
VITE_BUILD_ARCHIVE =

```

```env \[.env.production 生产环境]
# 应用配置面板
# Application configuration panel
VITE_APP_SETTING = false

# 网站标题
# Website title
VITE_APP_TITLE = Fantastic-admin

# 网络请求地址，应用于 axios 的 baseURL
# Network request address, applied to axios's baseURL
VITE_APP_API_BASEURL = /

# localStorage/sessionStorage 前缀
# localStorage/sessionStorage prefix
VITE_APP_STORAGE_PREFIX = fa_

# 调试工具，可设置 eruda 或 vconsole
# Debugging tool, can set eruda or vconsole
VITE_APP_DEBUG_TOOL =

# ===== 以下配置仅在生产环境生效 =====
# ===== The following configuration is only effective in the production environment. =====

# 禁用浏览器开发者工具
# Disable browser developer tools
VITE_APP_DISABLE_DEVTOOL = false

# 启用假数据
# Enable build fake data
VITE_BUILD_FAKE = false

# 启用 sourcemap
# Enable build sourcemap
VITE_BUILD_SOURCEMAP = false

# 压缩方式，支持 gzip 和 brotli
# Build compression method, supports gzip and brotli
VITE_BUILD_COMPRESS = gzip,brotli

# 构建后生成存档，支持 zip 和 tar
# Generate archive after build, supports zip and tar
VITE_BUILD_ARCHIVE =

```

:::

开发者可根据实际业务需求进行扩展，详细可阅读 [Vite - 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html) 章节。

## 通用配置项

即不管是在开发、测试，还是生产环境都会使用到。

### VITE\_APP\_SETTING

![](/env.VITE_APP_SETTING.gif){data-zoomable}

应用配置面板的目的是方便开发者在开发阶段调试框架提供的各类配置参数，生产环境下默认关闭，也建议关闭。

如果希望提供用户一些个性化的能力，可以开启[用户偏好设置](./settings/app#用户偏好设置)。

### VITE\_APP\_TITLE

网站标题，会在浏览器标题、首屏loading、登录页和导航菜单处显示。

### VITE\_APP\_API\_BASEURL

[扩展阅读](axios)

### VITE\_APP\_STORAGE\_PREFIX&#x20;

[扩展阅读](storage)

### VITE\_APP\_DEBUG\_TOOL

方便在不支持启用浏览器开发者工具的环境，启用一个轻量级的调试工具。

```env
# 调试工具 eruda
VITE_APP_DEBUG_TOOL = eruda

# 调试工具 vconsole
VITE_APP_DEBUG_TOOL = vconsole
```

## 开发环境配置项

### VITE\_ENABLE\_PROXY

[扩展阅读](axios#跨域处理)

### VITE\_ENABLE\_VUE\_DEVTOOLS

[扩展阅读](devtools#vue-开发工具)

### VITE\_ENABLE\_TURBO\_CONSOLE

[扩展阅读](devtools#console-工具)

### VITE\_LAUNCH\_EDITOR

[扩展阅读](devtools#默认启动-ide)

## 测试/生产环境

### VITE\_APP\_DISABLE\_DEVTOOL&#x20;

开启后将禁止通过右键、F12或任意方式打开浏览器开发者工具。

### VITE\_BUILD\_FAKE

[扩展阅读](axios#生产环境)

### VITE\_BUILD\_SOURCEMAP

开启后生成的构建产物里包含 sourcemap 文件

### VITE\_BUILD\_COMPRESS

可在构建时生成 `.gz` 和 `.br` 文件。

```env
# 单独开启 gzip
VITE_BUILD_COMPRESS = gzip

# 单独开启 brotli ，brotli 是比 gzip 压缩率更高的算法
VITE_BUILD_COMPRESS = brotli

# 也可以都开启，会同时生成 .gz 和 .br 文件
VITE_BUILD_COMPRESS = gzip,brotli
```

两者均需要 nginx 安装指定模块并开启后才会生效。

### VITE\_BUILD\_ARCHIVE

在构建完后成生成 `.zip` 或 `.tar.gz` 文件。

```env
# 生成 zip
VITE_BUILD_ARCHIVE = zip

# 生成 tar.gz
VITE_BUILD_ARCHIVE = tar
```
