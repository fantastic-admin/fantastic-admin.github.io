---
url: /guide/settings/app.md
---
# 应用

## 账号相关

### 权限验证

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    account: {
      auth: true,
    },
  },
})
```

### 登录过期弹窗&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    account: {
      expiredMode: 'popup',
    },
  },
})
```

![](/settings/app-account-expiredMode.png){data-zoomable}

切换为弹窗模式后，登录过期将不会跳转到登录页，但重新登录表单需要开发者自行扩展，相关文件为 `apps/<app>/src/components/AppAccountForm/login-again.vue` 。

### 多账号管理&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    account: {
      multipleAccounts: true,
    },
  },
})
```

![](/settings/app-account-multipleAccounts.png){data-zoomable}

多账号管理的原理是将已登录账号的 `token` 以相关信息记录在浏览器 `localStorage` 中，从而实现快速切换，可在 `apps/<app>/src/store/modules/app/account.ts` 中修改记录方式。

## 路由模式

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    routeMode: 'html5',
  },
})
```

切换到 HTML5 模式后，服务器也需要做相应的配置调整，详细可阅读《[Vue-router 不同的历史模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html)》。

## 路由数据来源

:::danger 特别注意
“由后端配置导航” 是后台项目中经常被提及的需求，但在基于 Vue 的前端工程体系里，这通常并不能真正降低成本，反而往往会让开发、联调和维护流程变得更复杂。

原因在于：导航本质上是由路由生成的，而路由又直接对应前端页面组件。换句话说，一个路由通常就需要一个实际存在的 `.vue` 页面组件与之匹配。即使路由数据由后端返回，前端仍然必须提前实现并维护这些页面组件，因此**并不是后端新增一条路由，前端就可以立即访问对应页面**。

这也意味着，路由数据并不能在生产环境中随意调整。因为很多路由字段与前端业务逻辑是强耦合的，例如页面跳转依赖的 `name`、`path`，以及必须真实存在的 `component`。一旦后端随意修改这些字段，就可能出现导航异常、页面无法访问，甚至整条业务链路失效的问题。

所以，如果只是为了实现“导航由后端配置”，却额外引入更高的开发和维护成本，通常并不划算。若你仍决定启用该特性，请先充分理解它的适用场景、限制与代价，并谨慎使用。
:::

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    routeBaseOn: 'backend',
  },
})
```

设置后还需要再 `apps/<app>/src/api/modules/app.ts` 文件里找到 `routeList` 这个函数，并修改这个函数的请求地址，请求返回的数据就是路由数据，你可以在 `apps/<app>/src/api/modules/app.fake.ts` 里找到假数据示例。

该模式下路由权限有两种处理方案：

* 返回全部的路由数据，让框架自行处理，即保留路由 `meta.auth` 字段（推荐）
* 后端直接返回用户具备访问权限的路由数据，路由 `meta.auth` 字段将不再需要

推荐采用第一种，无需对数据做任何处理，并且对于无权限访问的路由，框架会以 403 页面进行展示；而第二种需要后端对处理进行处理，并且由于直接在数据源上就过滤掉了无权限的路由，所以在访问没有权限的路由时会直接显示 404 页面。

## 动态标题

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    dynamicTitle: true,
  },
})
```

开启后网页标题将显示路由配置的 `meta.title` 字段。

![](/settings/app-dynamicTitle.gif){data-zoomable}

## 页面水印&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    watermark: true,
  },
})
```

![](/settings/app-watermark.png){data-zoomable}

在 `apps/<app>/src/store/modules/app/watermark.ts` 中可修改水印展示内容，以及其他水印相关配置，并且支持动态更新：

```vue
<script setup lang="ts">
const appWatermarkStore = useAppWatermarkStore()

appWatermarkStore.update({
  text: '设置水印',
  // 更多设置项请查阅官方文档
})

// 重置水印，恢复到默认设置
appWatermarkStore.update()
</script>
```

## 反馈&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    feedback: true,
  },
})
```

![](/settings/app-feedback.gif){data-zoomable}

![](/settings/app-feedback.png){data-zoomable}

改功能通常用于帮助系统管理员更高效的收集使用者的反馈信息。

该模块仅实现了前端逻辑，不涉及后端业务，需开发者自行扩展完善，相关文件为 `apps/<app>/src/components/AccountButton/feedback.vue` 。

## 锁屏&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    lockScreen: true,
  },
})
```

![](/settings/app-lockScreen.gif){data-zoomable}

## 错误日志&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    errorLog: true,
  },
})
```

开启后需要到 `apps/<app>/src/utils/errorLog.ts` 中编写业务代码，框架为方便演示，默认将错误日志记录在 `sessionStorage` 里。

开发者需要根据实际业务情况修改代码，例如将增加上报信息，记录用户账号、token等数据，并且将错误日志进行上报。

由于开启错误日志监控后，Vue 相关的错误将不会在浏览器控制台里显示，所以该配置并不会在开发环境下生效，如果需要开发并调试该功能，请在 `apps/<app>/src/utils/errorLog.ts` 里临时修改开启的条件判断。

## 检查更新&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    checkUpdates: true
  },
})
```

![](/settings/app-checkUpdates.png){data-zoomable}

采用轮询请求 `index.html` 获取响应头中的 `etag` 或 `last-modified` 作为版本标识的方法来判断页面是否有更新。

你也可以修改 `apps/<app>/src/components/AppCheckUpdates/index.vue` 文件中的 `getVersionTag` 函数，实现自定义检查更新。

## 哀悼模式

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    rip: true,
  },
})
```

## 移动端访问

应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    mobile: false,
  },
})
```

:::: tabs
::: tab 开启
![](/settings/app-mobile-on.png){data-zoomable}
:::
::: tab 关闭
![](/settings/app-mobile-off.png){data-zoomable}
:::
::::

默认情况下，页面宽度小于 `1024px` 时会自动切换为移动端布局。关闭后，移动端访问时会显示不支持访问的提示页。

框架本身兼容移动端，但业务页面的兼容性需要开发者自行适配。

:::tip 建议
由于后台系统属于生产效率工具，而移动端天生不适合复杂的操作，尤其是遇到一些比较复杂的表单，在移动端上操作是极其“恼火”的。

依据作者的开发经验，建议移动端后台可以独立开发一套，在功能上进行删减，保留轻量级的管理操作。

如果打算独立开发一套移动端的系统，建议使用 [Fantastic-mobile](https://fantastic-mobile.hurui.me/)。
:::

## 布局&#x20;

### 居中布局

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    layout: {
      center: true,
    },
  },
})
```

:::: tabs
::: tab 关闭
![](/settings/app-layout-center-off.png){data-zoomable}
:::
::: tab 开启
![](/settings/app-layout-center-on-inner.png){data-zoomable}
:::
::::

### 居中布局应用范围

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    layout: {
      centerScope: 'outer',
    },
  },
})
```

:::: tabs
::: tab 内层
![](/settings/app-layout-center-on-inner.png){data-zoomable}
:::
::: tab 外层
![](/settings/app-layout-center-on-outer.png){data-zoomable}
:::
::::

### 居中布局宽度

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    layout: {
      centerWidth: 1400,
    },
  },
})
```

## 主页

主页是框架的欢迎页，即登录后的第一个页面，该页面无需开发者手动配置路由。

主页对应的页面文件为 `apps/<app>/src/views/index.vue` 。

### 是否开启

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    home: {
      enable: false,
    },
  },
})
```

![](/settings/app-home-enable-off.gif){data-zoomable}

关闭主页，登录后将直接进入到次导航菜单里的第一个导航菜单。

### 标题

如果要更改主页显示的标题，可以在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    home: {
      title: '主页',
    },
  },
})
```

### 主页完整路径

可以将其修改为其他路径，例如 `/home` ，在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    home: {
      fullPath: '/home',
    },
  },
})
```

在 `apps/<app>/src/router/routes.ts` 中修改：

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
          title: $t(useAppSettingsStore(pinia).settings.app.home.title),
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

:::: tabs
::: tab 基础版
在 `apps/<app>/src/router/routes.ts` 中增加：

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

然后在 `apps/<app>/src/router/index.ts` 中修改：

```ts
router.beforeEach(async (to, from, next) => {
  const settingsStore = useAppSettingsStore()
  const userStore = useAppUserStore()
  const routeStore = useAppRouteStore()
  const menuStore = useAppMenuStore()
  settingsStore.settings.page.progress && (isLoading.value = true)
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
          redirect: to.fullPath !== settingsStore.settings.app.home.fullPath ? to.fullPath : undefined,
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
::: tab 专业版
在 `apps/<app>/src/router/routes.ts` 中增加：

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
::::

## 版权信息

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    copyright: {
      enable: true,
    },
  },
})
```

![](/settings/app-copyright.png){data-zoomable}

路由配置中的 [`meta.copyright`](../router#copyright) 优先级会比应用配置更高，意味着你可以给每个页面单独控制版权信息的显示或隐藏。

### 网站运行日期

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    copyright: {
      dates: '2020-present',
    },
  },
})
```

### 公司名称

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    copyright: {
      company: 'Fantastic-admin',
    },
  },
})
```

### 网站地址

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    copyright: {
      website: 'https://fantastic-admin.hurui.me',
    },
  },
})
```

如果未设置公司名称，则该设置将被忽略。

## 用户偏好设置&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    preferences: {
      theme: true,
      menu: true,
      topbar: true,
      tabbar: true,
      toolbar: true,
      page: true,
    },
  },
})
```

![](/settings/app-preferences.gif){data-zoomable}

应用配置中除了 `app` 外的所有配置项都可暴露给用户，让用户可以自行设置，这就是用户偏好设置。

### 细化定制

`app.preferences` 支持布尔值和对象两种写法：

* 设置为 `true`：表示该分组下所有可配置项都允许用户调整
* 设置为对象：可以进一步细化到具体字段

以下是一份细化的偏好配置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  app: {
    preferences: {
      theme: {
        light: true,
        dark: true,
        colorScheme: true,
        sync: true,
        radius: true,
      },
      menu: {
        mode: true,
        style: true,
        dark: true,
      },
      toolbar: {
        breadcrumb: true,
        menuSearch: true,
        i18n: true,
        colorScheme: true,
      },
      page: {
        transitionMode: true,
        progress: true,
      },
    },
  },
})
```

### 数据存储

用户偏好设置默认存储在浏览器 `localStorage` 中，如果需要改为服务端存储，请到 `apps/<app>/src/store/modules/app/preferences.ts` 中调整 `storageTo` 的值，并在 `apps/<app>/src/api/modules/app.ts` 中实现 `preferences()` 和 `preferencesEdit()` 两个接口。

:::tip 建议
为减轻后端处理，数据会直接以 JSON 字符串进行存储，建议后端可以在用户表增加相关字段，并将字段类型设为 `longtext` 。
:::
