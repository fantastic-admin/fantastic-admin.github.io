---
url: /guide/settings/topbar.md
---
# 顶栏

标签栏和工具栏统称为顶栏。

## 标签栏

在应用配置里设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  topbar: {
    tabbar: true,
  },
})
```

标签栏更多配置请点[这里](tabbar)。

## 工具栏

在应用配置里设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  topbar: {
    toolbar: true,
  },
})
```

标签栏更多配置请点[这里](toolbar)。

## 模式

在应用配置里设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  topbar: {
    mode: 'static',
  },
})
```

:::: tabs
::: tab static
![](/settings/topbar-mode-static.gif){data-zoomable}
:::
::: tab fixed
![](/settings/topbar-mode-fixed.gif){data-zoomable}
:::
::: tab sticky
![](/settings/topbar-mode-sticky.gif){data-zoomable}
:::
::::

## 切换显示标签栏和工具栏的显示顺序&#x20;

在应用配置里设置切换：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  topbar: {
    switchTabbarAndToolbar: true,
  },
})
```

![](/settings/topbar-switchTabbarAndToolbar-on.png){data-zoomable}
