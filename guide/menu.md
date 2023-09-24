# 导航菜单

## 切换主导航同时跳转页面

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    switchMainMenuAndPageJump: true,
  },
}
```

![](/menu-switchmainmenuandpagejump.gif){data-zoomable}

## 次导航可同时展开多个子项

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    subMenuUniqueOpened: false,
  },
}
```

![](/menu-submenuuniqueopened.gif){data-zoomable}

## 次导航默认收起

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    subMenuCollapse: true,
  },
}
```

![](/menu-submenucollapse.gif){data-zoomable}

## 开启次导航展开/收起按钮

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    enableSubMenuCollapseButton: true,
  },
}
```

![](/menu-enablesubmenucollapsebutton.gif){data-zoomable}

## 次导航只有一个导航时自动隐藏 <sup class="pro-badge" />

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    subMenuOnlyOneHide: true,
  },
}
```

搭配开启 `menu.switchMainMenuAndPageJump` 可以实现如下的效果：

![](/menu-submenuonlyonehide.gif){data-zoomable}

你只需要在某个主导航下只保留一个次导航，就像这样：

```ts {3,18-26}
import MultilevelMenuExample from './modules/multilevel.menu.example'
import BreadcrumbExample from './modules/breadcrumb.example'
import Test from './modules/test'

// 动态路由（异步路由、导航栏路由）
const asyncRoutes: Route.recordMainRaw[] = [
  {
    meta: {
      title: '演示',
      i18n: 'route.demo',
      icon: 'sidebar-default',
    },
    children: [
      MultilevelMenuExample,
      BreadcrumbExample,
    ],
  },
  {
    meta: {
      title: '无次导航',
      icon: 'sidebar-default',
    },
    children: [
      Test,
    ],
  },
]
```

```ts
import type { RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layouts/index.vue')

const routes: RouteRecordRaw = {
  path: '/test',
  component: Layout,
  redirect: '/test/page',
  name: 'test',
  meta: {
    title: '演示页面',
  },
  children: [
    {
      path: 'page',
      name: 'testPage',
      component: () => import('@/views/test/page.vue'),
      meta: {
        title: '演示页面',
        sidebar: false,
      },
    },
  ],
}

export default routes
```