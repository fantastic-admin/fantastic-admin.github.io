---
url: /guide/settings/toolbar.md
---
# 工具栏

## 是否显示

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  topbar: {
    toolbar: false,
  },
})
```

## 收藏夹&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  toolbar: {
    favorites: true,
  },
})
```

开启后可将常用的导航菜单添加进收藏夹，方便快速访问，数据存储在浏览器 `localStorage` 中。

![](/settings/toolbar-favorites.png){data-zoomable}

如果需要改为服务端存储，请到 `apps/<app>/src/store/modules/app/favorites.ts` 中调整 `storageTo` 的值，并在 `apps/<app>/src/api/modules/app.ts` 中实现 `favorites()` 和 `favoritesEdit()` 两个接口。

:::tip 建议
为减轻后端处理，数据会直接以 JSON 字符串进行存储，建议后端可以在用户表增加相关字段，并将字段类型设为 `longtext` 。
:::

## 面包屑导航

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  toolbar: {
    breadcrumb: {
      enable: true,
    },
  },
})
```

移动端访问时，会隐藏面包屑导航。

### 风格&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  toolbar: {
    breadcrumb: {
      style: 'modern',
    },
  },
})
```

:::: tabs
::: tab \[默认]
![](/settings/toolbar-breadcrumb-style-empty.png){data-zoomable}
:::
::: tab modern
![](/settings/toolbar-breadcrumb-style-modern.png){data-zoomable}
:::
::::

### 显示主导航菜单&#x20;

在应用配置里设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  toolbar: {
    breadcrumb: {
      mainMenu: true,
    },
  },
})
```

:::: tabs
::: tab 开启
![](/settings/toolbar-breadcrumb-mainMenu-on.png){data-zoomable}
:::
::: tab 关闭
![](/settings/toolbar-breadcrumb-mainMenu-off.png){data-zoomable}
:::
::::

## 导航搜索

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  toolbar: {
    menuSearch: {
      enable: true,
    },
  },
})
```

## 通知中心&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  toolbar: {
    notification: true,
  },
})
```

通知中心不涉及具体业务，需开发者自行实现，相关文件在 `apps/<app>/src/layouts/components/Topbar/Toolbar/Notification` 目录下。

## 国际化&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  toolbar: {
    i18n: {
      enable: true,
    },
  },
})
```

如果设置为不启用，并不代表不支持国际化切换，只是不会在工具栏显示切换语言的图标。

更多国际化的介绍请点[这里](../i18n)。

### 默认语言

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  toolbar: {
    i18n: {
      defaultLang: '',
    },
  },
})
```

在应用配置中设置默认语言，可选设置的值参考 `apps/<app>/src/locales/lang/` 目录下文件名，留空则会根据浏览器语言自动判断，如果找不到对应的语言则使用 **中文(简体)** 兜底。

## 全屏

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  toolbar: {
    fullscreen: true,
  },
})
```

## 页面刷新

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  toolbar: {
    pageReload: true,
  },
})
```

## 颜色主题

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  toolbar: {
    colorScheme: true,
  },
})
```

## 工具栏布局&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  toolbar: {
    layout: ['favorites', 'breadcrumb', '->', 'menuSearch', 'notification', 'i18n', 'fullscreen', 'pageReload', 'colorScheme'],
  },
})
```
