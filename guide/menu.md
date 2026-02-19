---
url: /guide/menu.md
---
# 导航菜单

## 模式

提供 7 种导航栏模式，其中后 4 种为  才有，在应用配置中设置：

```ts {2-14}
const globalSettings: Settings.all = {
  menu: {
    /**
     * 导航栏模式
     * @默认值 `'side'` 侧边栏模式（有主导航）
     * @可选值 `'head'` 顶部模式
     * @可选值 `'single'` 侧边栏模式（无主导航）
     * @可选值 `'only-side'` 侧边栏精简模式
     * @可选值 `'only-head'` 顶部精简模式
     * @可选值 `'side-panel'` 侧边栏面板模式
     * @可选值 `'head-panel'` 顶部面板模式
     */
    mode: 'head',
  },
}
```

:::: tabs
::: tab head
![](/menu-mode-head.png){data-zoomable}
:::
::: tab side
![](/menu-mode-side.png){data-zoomable}
:::
::: tab single
![](/menu-mode-single.png){data-zoomable}
:::
::: tab only-side
![](/menu-mode-only-side.png){data-zoomable}
:::
::: tab only-head
![](/menu-mode-only-head.png){data-zoomable}
:::
::: tab side-panel
![](/menu-mode-side-panel.png){data-zoomable}
:::
::: tab head-panel
![](/menu-mode-head-panel.png){data-zoomable}
:::
::::

## 风格&#x20;

在应用配置中设置：

```ts {2-11}
const globalSettings: Settings.all = {
  menu: {
    /**
     * 导航栏风格
     * @默认值 `''`
     * @可选值 `'arrow'` 箭头
     * @可选值 `'line'` 线条
     * @可选值 `'dot'` 圆点
     */
    style: '',
  },
}
```

![](/menu-style.png){data-zoomable}

## 暗黑导航栏 &#x20;

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  menu: {
    /**
     * 是否开启暗色模式，仅在亮色模式下生效
     * @默认值 `false`
     */
    enableDark: true,
  },
}
```

![](/menu-dark.png){data-zoomable}

## 主导航点击模式

在应用配置中设置：

```ts {2-10}
const globalSettings: Settings.all = {
  menu: {
    /**
     * 主导航点击模式
     * @默认值 `'switch'` 切换
     * @可选值 `'jump'` 跳转
     * @可选值 `'smart'` 智能选择，判断次导航是否只有且只有一个可访问的菜单进行切换或跳转操作
     */
    mainMenuClickMode: 'jump',
  },
}
```

![](/menu-mainmenuclickmode.gif){data-zoomable}

当设置成 `'jump'` 或 `'smart'` 时，支持次导航只有一个导航时，点击主导航会跳转并隐藏：

![](/menu-mainmenuclickmodeplus.gif){data-zoomable}

你只需要在某个主导航下只保留一个次导航，并且通过 `meta.menu` 将其隐藏，就像这样：

```ts {16-43}
import MultilevelMenuExample from './modules/multilevel.menu.example'
import BreadcrumbExample from './modules/breadcrumb.example'

// 动态路由（异步路由、导航栏路由）
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
          menu: false, // 注意，需要将这个导航隐藏
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

## 次导航可同时展开多个子项

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  menu: {
    /**
     * 次导航是否只保持一个子项的展开
     * @默认值 `true`
     */
    subMenuUniqueOpened: false,
  },
}
```

![](/menu-submenuuniqueopened.gif){data-zoomable}

## 次导航默认收起

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  menu: {
    /**
     * 次导航是否收起
     * @默认值 `false`
     */
    subMenuCollapse: true,
  },
}
```

![](/menu-submenucollapse.png){data-zoomable}

## 次导航自动收起&#x20;

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  menu: {
    /**
     * 次导航是否自动收起
     * @默认值 `false`
     */
    subMenuAutoCollapse: true,
  },
}
```

当次导航处于收起状态时可以实现如下的效果：

![](/menu-submenuautocollapse.gif){data-zoomable}

## 开启次导航展开/收起按钮

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  menu: {
    /**
     * 是否开启次导航的展开/收起按钮
     * @默认值 `false`
     */
    enableSubMenuCollapseButton: true,
  },
}
```

![](/menu-enablesubmenucollapsebutton.gif){data-zoomable}
