# 主页

主页是框架的欢迎页，即登录后的第一个页面，该页面无需开发者手动配置路由。

主页对应的页面文件为 `/src/views/index.vue`

## 关闭主页

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  home: {
    /**
     * 是否开启主页
     * @默认值 `true`
     */
    enable: false,
  },
}
```

关闭主页后，登录后将直接跳转到次导航下第一个导航对应的页面，效果如下：

![](/home-disable.gif){data-zoomable}

## 标题

如果要更改主页显示的标题，可以在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  home: {
    /**
     * 主页名称，可直接设置名称，专业版支持设置为 i18n 的 key
     * @默认值 基础版为 `'主页'`，专业版为 `'app.route.home'`
     */
    title: '主页',
  },
}
```

但需要注意，专业版里如果框架开启国际化后，在这里修改并不会生效，因此需要在语言包中进行修改，更多请阅读《[国际化 - 语言包](i18n#语言包)》。

## 主页完整路径

可以将其修改为其他路径，例如 `/home` ，在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  home: {
    /**
     * 主页完整路径
     * @默认值 `'/'`
     */
    fullPath: '/home',
  },
}
```

在 `src/router/routes.ts` 中修改：

```ts
// 系统路由
const systemRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    meta: {
      breadcrumb: false,
    },
    children: [
      {
        path: '', // [!code --]
        path: 'home', // [!code ++]
        component: () => import('@/views/index.vue'),
        meta: {
          title: $t(useSettingsStore(pinia).settings.home.title),
          icon: 'i-ant-design:home-twotone',
          breadcrumb: false,
        },
      },
      ...
    ],
  },
]
```

这样就可以通过访问 `http://localhost:9000/#/home` 进入主页。

这么做的好处是可以将网站根路径设置为一个独立的页面，例如门户类网站的首页，方便提供给未登录用户浏览。

下面是一个补充完整的例子：

::: details 基础版

在 `src/router/routes.ts` 中增加：

```ts {3-10}
// 固定路由（默认路由）
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/new_page.vue'), // 记得手动新建这个文件
    meta: {
      title: '首页',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录',
    },
  },
  ...
]
```

然后在 `src/router/index.ts` 中修改：

```ts
router.beforeEach(async (to, from, next) => {
  const settingsStore = useSettingsStore()
  const userStore = useUserStore()
  const routeStore = useRouteStore()
  const menuStore = useMenuStore()
  settingsStore.settings.app.enableProgress && (isLoading.value = true)
  // 是否已登录
  if (userStore.isLogin) {
    ...
  }
  else {
    if (to.name !== 'login') { // [!code --]
    if (to.name !== 'login' && to.name !== 'index') { // [!code ++]
      next({
        name: 'login',
        query: {
          redirect: to.fullPath !== settingsStore.settings.home.fullPath ? to.fullPath : undefined,
        },
      })
    }
    else {
      next()
    }
  }
})
```

现在就可以通过 `http://localhost:9000/#/` 访问新创建的这个页面了，并且无需登录。

:::

::: details 专业版

在 `src/router/routes.ts` 中增加：

```ts {3-11}
// 固定路由（默认路由）
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/new_page.vue'), // 记得手动新建这个文件
    meta: {
      whiteList: true,
      title: '首页',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      whiteList: true,
      title: $t('route.login'),
    },
  },
  ...
]
```

现在就可以通过 `http://localhost:9000/#/` 访问新创建的这个页面了，并且无需登录。

:::