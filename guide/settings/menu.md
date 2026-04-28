---
url: /guide/settings/menu.md
---
# 导航菜单

## 模式

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  menu: {
    mode: 'head',
  },
})
```

:::: tabs
::: tab head
![](/settings/menu-mode-head.png){data-zoomable}
:::
::: tab side
![](/settings/menu-mode-side.png){data-zoomable}
:::
::: tab single
![](/settings/menu-mode-single.png){data-zoomable}
:::
::::

&#x20;扩展了以下 4 个主题：

:::: tabs
::: tab only-side
![](/settings/menu-mode-only-side.png){data-zoomable}
:::
::: tab only-head
![](/settings/menu-mode-only-head.png){data-zoomable}
:::
::: tab side-panel
![](/settings/menu-mode-side-panel.png){data-zoomable}
:::
::: tab head-panel
![](/settings/menu-mode-head-panel.png){data-zoomable}
:::
::::

## 风格&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  menu: {
    style: '',
  },
})
```

:::: tabs
::: tab \[默认]
![](/settings/menu-style-empty.png){data-zoomable}
:::
::: tab arrow
![](/settings/menu-style-arrow.png){data-zoomable}
:::
::: tab line
![](/settings/menu-style-line.png){data-zoomable}
:::
::: tab dot
![](/settings/menu-style-dot.png){data-zoomable}
:::
::::

## 暗黑导航菜单&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  menu: {
    dark: true,
  },
})
```

![](/settings/menu-dark.png){data-zoomable}

## 主导航菜单点击模式

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  menu: {
    mainMenuClickMode: 'jump',
  },
})
```

:::: tabs
::: tab switch
![](/settings/menu-mainMenuClickMode-switch.gif){data-zoomable}
:::
::: tab jump
![](/settings/menu-mainMenuClickMode-jump.gif){data-zoomable}
:::
::: tab smart
![](/settings/menu-mainMenuClickMode-smart.gif){data-zoomable}
:::
::::

当设置成 `'jump'` 或 `'smart'` 时，次导航菜单如果只有一个导航菜单时，点击主导航菜单会跳转并隐藏。

你只需要在某个主导航菜单下只保留一个次导航菜单，并且通过 [`meta.menu`](../router#menu) 将其隐藏，就像这样：

```ts {16-43}
import MultilevelMenuExample from './modules/multilevel.menu.example'
import BreadcrumbExample from './modules/breadcrumb.example'

// 动态路由（异步路由、导航菜单路由）
const asyncRoutes: Route.recordMainRaw[] = [
  {
    meta: {
      title: $t('route.demo'),
      icon: 'menu-default',
    },
    children: [
      MultilevelMenuExample,
      BreadcrumbExample,
    ],
  },
  {
    meta: {
      title: '测试',
    },
    children: [
      {
        path: '/test',
        component: () => import('@/layouts/index.vue'),
        redirect: '/test/page',
        name: 'test',
        meta: {
          title: '演示页面',
          menu: false, // 注意，需要将这个导航菜单隐藏
        },
        children: [
          {
            path: 'page',
            name: 'testPage',
            component: () => import('@/views/test/page.vue'),
            meta: {
              title: '演示页面',
              menu: false,
            },
          },
        ],
      },
    ],
  },
]
```

## 次导航菜单只保持一个子项的展开

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  menu: {
    subMenuUniqueExpand: false,
  },
})
```

![](/settings/menu-subMenuUniqueExpand-off.gif){data-zoomable}

关闭后支持展开多个。

## 次导航菜单收起

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  menu: {
    subMenuCollapse: true,
  },
})
```

![](/settings/menu-subMenuCollapse-on.png){data-zoomable}

## 次导航菜单自动收起&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  menu: {
    subMenuAutoCollapse: true,
  },
})
```

当次导航处于收起状态时可以实现如下的效果：

![](/settings/menu-subMenuAutoCollapse-on.gif){data-zoomable}

## 开启次导航菜单展开/收起按钮

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  menu: {
    subMenuCollapseButton: true,
  },
})
```

![](/settings/menu-subMenuCollapseButton.gif){data-zoomable}

## 快捷键

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  menu: {
    hotkeys: true,
  },
})
```
