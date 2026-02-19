---
url: /guide/configure.md
---
# 配置

## 环境配置

默认提供三套环境配置，分别为：

::: code-group

```yaml [.env.development 开发环境]
# 应用配置面板
VITE_APP_SETTING = true
# 页面标题
VITE_APP_TITLE = Fantastic-admin
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =
# 是否禁用开发者工具，可防止被调试
VITE_APP_DISABLE_DEVTOOL = false

# 是否开启代理
VITE_OPEN_PROXY = false
# 是否开启开发者工具
VITE_OPEN_DEVTOOLS = false
```

```yaml [.env.test 测试环境]
# 应用配置面板
VITE_APP_SETTING = false
# 页面标题
VITE_APP_TITLE = Fantastic-admin
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =
# 是否禁用开发者工具，可防止被调试
VITE_APP_DISABLE_DEVTOOL = false

# 是否在打包时启用 Mock
VITE_BUILD_MOCK = true
# 在构建时生成 sourcemap
VITE_BUILD_SOURCEMAP = true
# 在构建时开启压缩，支持 gzip 和 brotli
VITE_BUILD_COMPRESS =
# 是否在打包后生成存档，支持 zip 和 tar
VITE_BUILD_ARCHIVE =
```

```yaml [.env.production 生产环境]
# 应用配置面板
VITE_APP_SETTING = false
# 页面标题
VITE_APP_TITLE = Fantastic-admin
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =
# 是否禁用开发者工具，可防止被调试
VITE_APP_DISABLE_DEVTOOL = false

# 是否在打包时启用 Mock
VITE_BUILD_MOCK = false
# 在构建时生成 sourcemap
VITE_BUILD_SOURCEMAP = false
# 在构建时开启压缩，支持 gzip 和 brotli
VITE_BUILD_COMPRESS = gzip,brotli
# 是否在打包后生成存档，支持 zip 和 tar
VITE_BUILD_ARCHIVE =
```

:::

其中 `VITE_APP_SETTING` `VITE_APP_TITLE` `VITE_APP_API_BASEURL` `VITE_APP_DEBUG_TOOL` `VITE_APP_DISABLE_DEVTOOL` 为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。而其余配置则在不同环境下有不同用途，例如开发环境用于本地开发使用，测试环境和生产环境用于构建使用。

开发者可根据实际业务需求进行扩展，如果对这块不熟悉，请阅读 [Vite - 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html) 章节。

::: warning 注意
`VITE_APP_SETTING` 该变量是开启应用配置面板，目的是方便开发者在开发阶段调试，生产环境下默认关闭，也建议关闭。

如果希望提供用户一些定制化的能力，可以开启偏好设置，详细可阅读《[用户偏好设置](preferences)》。
:::

## 应用配置（框架配置）

请在 `/src/settings.ts` 文件中进行配置，而不是在 `/src/settings.default.ts` 文件中，后者为框架的完整默认配置。

关于配置的类型定义，可以在 `/src/types/globals.d.ts` 文件中查阅。

```ts
// 这是基础版演示源码里的自定义配置示例
const globalSettings: Settings.all = {
  app: {
    enablePermission: true,
    enableDynamicTitle: true,
  },
  layout: {
    enableMobileAdaptation: true,
  },
  menu: {
    enableSubMenuCollapseButton: true,
    enableHotkeys: true,
  },
  topbar: {
    mode: 'fixed',
  },
  toolbar: {
    enableFullscreen: true,
    enablePageReload: true,
    enableColorScheme: true,
  },
}
```

::: warning 注意
文档中提供的配置介绍，如果在本地的开发环境使用中报错或者无法生效，说明你使用的版本不支持或者配置参数有变动，你可以打开 `/src/settings.default.ts` 查看当前版本的完整配置作为参考。

并且如果你使用的是 Visual Studio Code ，鼠标悬浮到属性上时，会有属性的介绍：

![](/settings.png){data-zoomable}
:::
