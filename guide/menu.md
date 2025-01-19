# 导航菜单

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

该特性支持次导航只有一个导航时自动隐藏：

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

![](/menu-submenucollapse.png){data-zoomable}

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

## 次导航自动收起 <Badge type="pro" text="专业版" />

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    subMenuAutoCollapse: true,
  },
}
```

当次导航处于收起状态时可以实现如下的效果：

![](/menu-submenuautocollapse.gif){data-zoomable}
