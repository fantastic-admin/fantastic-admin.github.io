# 路由（导航）

项目路由配置存放在 `/scr/router/modules/` 目录下，每一个 ts 文件会被视为一个路由模块。配置好的路由模块最终会在 `/src/router/routes.ts` 文件里进行引入并放到主导航下。

## 基本配置

### 二级路由

一个路由模块包含以下结构：

```ts
import type { Route } from '@/global'

const Layout = () => import('@/layout/index.vue')

const routes: Route.recordRaw = {
  path: '/example',
  component: Layout,
  redirect: '/example/index',
  name: 'Example',
  meta: {
    title: '演示',
  },
  children: [
    {
      path: 'index',
      name: 'ExampleIndex',
      component: () => import('@/views/example/index.vue'),
      meta: {
        title: '演示页面',
      },
    },
  ],
}

export default routes
```

:::warning 注意事项
- 整个项目所有路由的 `name` 不能重复
- 一级路由的 `component` 需设置为 Layout ，并且 path 前面需要加 `/`，其余子路由都不要以 `/` 开头
:::

### 多级路由

:::tip
多级路由最终都会转成二级路由并注册，但多级嵌套的层级结构会在侧边栏导航和面包屑导航中得到保留，其设计原因可阅读《[页面缓存](keep-alive)》。
:::

多级路由的中间层级，可以无需设置 `component` 。

```ts
import type { Route } from '@/global'

const Layout = () => import('@/layout/index.vue')

const routes: Route.recordRaw = {
  path: '/example',
  component: Layout,
  redirect: '/example/level/index',
  name: 'Example',
  meta: {
    title: '演示',
  },
  children: [
    {
      path: 'level',
      name: 'ExampleLevel',
      meta: {
        title: '中间层级',
      },
      children: [
        {
          path: 'index',
          name: 'ExampleIndex',
          component: () => import('@/views/example/index.vue'),
          meta: {
            title: '演示页面',
          },
        },
      ],
    },
  ],
}

export default routes
```

### 外链

只需要将 `path` 设置为需要跳转的 HTTP 地址即可。

```ts
import type { Route } from '@/global'

const routes: Route.recordRaw = {
  path: 'https://hooray.gitee.io/fantastic-admin/',
  meta: {
    title: '官网'
  }
}

export default routes
```

### 主导航

主导航并非路由的一部分，它只是将我们配置好的路由模块进行归类，在 `/src/router/routes.ts` 里进行设置。

```ts
const asyncRoutes: Route.recordMainRaw[] = [
  {
    meta: {
      title: '演示',
      icon: 'sidebar-default',
    },
    children: [
      MultilevelMenuExample,
      BreadcrumbExample,
      KeepAliveExample,
    ],
  },
  {
    meta: {
      title: '其它',
      icon: 'sidebar-other',
    },
    children: [
      ComponentExample,
      PermissionExample,
    ],
  },
]
```

主导航只需设置 `meta` 和 `children` 两个参数，其中 `meta` 只接受 `title` 和 `icon` 这两个参数，`children` 则是存放我们配置的路由模块数据。

## 导航配置

框架的核心是通过路由的配置生成对应的导航，所以除了路由的基本配置外，框架还提供了针对导航的自定义配置，这些配置都存放在 `meta` 对象里。

### title

|  类型  | 默认值 | 说明                                 |
| :----: | :----: | :----------------------------------- |
| string |   /    | 导航、面包屑导航以及页面中展示的标题 |

### i18n <sup class="pro-badge" />

|  类型  | 默认值 | 说明                    |
| :----: | :----: | :---------------------- |
| string |   /    | 标题国际化对应的 key 值 |

详细可阅读《[国际化](i18n)》。

### icon

|  类型  | 默认值 | 说明             |
| :----: | :----: | :--------------- |
| string |   /    | 导航中显示的图标 |

该项配置最终会通过 `<svg-icon />` 组件进行展示，意味着你可以使用自定义图标，也可使用 Iconify 提供的图标，详细可阅读《[SVG 图标](./svg-icon)》。

### activeIcon <sup class="pro-badge" />

|  类型  | 默认值 | 说明                 |
| :----: | :----: | :------------------- |
| string |   /    | 导航激活时显示的图标 |

该项配置最终会通过 `<svg-icon />` 组件进行展示，意味着你可以使用自定义图标，也可使用 Iconify 提供的图标，详细可阅读《[SVG 图标](./svg-icon)》。

### defaultOpened

|  类型   | 默认值 | 说明               |
| :-----: | :----: | :----------------- |
| boolean | false  | 次导航是否默认展开 |

使用该特性时，建议在应用配置里关闭 `menu.subMenuUniqueOpened` 设置。

### permanent <sup class="pro-badge" />

|  类型   | 默认值 | 说明           |
| :-----: | :----: | :------------- |
| boolean | false  | 是否常驻标签页 |

使用该特性时，需要在应用配置里开启 `tabbar.enable` 设置，同时需注意，请勿在带有参数的路由上设置该特性。

### auth

|      类型      | 默认值 | 说明                                                     |
| :------------: | :----: | :------------------------------------------------------- |
| string / array |   /    | 该路由访问权限，支持多个权限叠加，只要满足一个，即可进入 |

用户在登录时，会获取用户权限，根据权限去过滤并动态注册路由。所以没有权限的路由不会被注册，也不会在侧边栏导航里显示，详细可阅读《[权限 - 路由权限](permission#路由权限)》。

### sidebar

|  类型   | 默认值 | 说明                         |
| :-----: | :----: | :--------------------------- |
| boolean |  true  | 该路由是否在侧边栏导航中展示 |

### breadcrumb

|  类型   | 默认值 | 说明                         |
| :-----: | :----: | :--------------------------- |
| boolean |  true  | 该路由是否在面包屑导航中展示 |

### activeMenu

|  类型  | 默认值 | 说明                                     |
| :----: | :----: | :--------------------------------------- |
| string |   /    | 指定高亮侧边栏路由，需要设置完整路由地址 |

该参数常与 `sidebar: false` 一起使用，因为路由不在侧边栏导航显示，会导致进入该路由后，侧边栏导航高亮效果失效，所以需要手动指定。

```ts {19-20}
import type { Route } from '@/global'

const routes: Route.recordRaw = {
  path: '/news',
  meta: {
    title: '新闻管理',
  },
  children: [
    {
      path: 'list',
      meta: {
        title: '新闻列表',
      },
    },
    {
      path: 'detail',
      meta: {
        title: '新闻详情',
        sidebar: false,
        activeMenu: '/news/list',
      },
    },
  ],
}

export default routes
```

### cache

|           类型           | 是否必须 | 默认值 | 说明                 |
| :----------------------: | :------: | :----: | :------------------- |
| boolean / string / array |    ✖️     |   /    | 是否对该页面进行缓存 |

- `boolean` 设置为 true 时，该路由页面会被一直缓存
- `string` 设置某个目标路由的 name ，表示当前路由页面跳转到设置的 name 对应的路由页面时，则将当前路由页面进行缓存，否则不缓存
- `array` 同 `string` ，可设置一个目标路由的 name 数组

当类型为 `string` 或 `array` 时，可以更精细的去控制页面缓存的逻辑。例如从列表页进入详情页，则需要将列表页进行缓存；而从列表页进入其它页面，则无需将列表页进行缓存。详细介绍请移步[页面缓存](keep-alive)

### noCache <sup class="pro-badge" />

|      类型      | 是否必须 | 默认值 | 说明                                        |
| :------------: | :------: | :----: | :------------------------------------------ |
| string / array |    ✖️     |   /    | 是否对该页面清除缓存，须设置 cache 才会生效 |

- `string` 设置某个目标路由的 name ，表示当前路由页面跳转到设置的 name 对应的路由页面时，则将当前路由页面清除缓存，否则不清除缓存
- `array` 同 `string` ，可设置一个目标路由的 name 数组

该属性通常在启用标签栏时会使用到。详细介绍请阅读《[页面缓存 - 标签栏开启时](keep-alive#标签栏开启时)》。

### badge <sup class="pro-badge" />

|           类型            | 是否必须 | 默认值 | 说明     |
| :-----------------------: | :------: | :----: | :------- |
| boolean / number / string |    ✖️     |   /    | 导航标记 |

设置不同的类型值，展示效果也会不同。

- `boolean` 展示形式为点，当值为 false 时隐藏
- `number` 展示形式为文本，当值小于等于 0 时隐藏
- `string` 展示形式为文本，当值为空时隐藏

如果标记需要动态更新，请设置为箭头函数形式，并返回外部变量，例如搭配 pinia 一起使用。

```ts
badge: () => globalStore.number
```

### link <sup class="pro-badge" />

|  类型  | 是否必须 | 默认值 | 说明         |
| :----: | :------: | :----: | :----------- |
| string |    ✖️     |   /    | 内嵌网页链接 |

如果要开启内嵌网页，component 需要设置为框架提供的 layoue/iframe.vue

```ts
import type { Route } from '@/global'

const routes: Route.recordRaw = {
  path: '/link',
  component: () => import('@/layouts/index.vue'),
  redirect: '/link/iframe',
  meta: {
    title: '外链',
  },
  children: [
    {
      path: 'iframe',
      component: () => import('@/layout/iframe.vue'),
      meta: {
        title: 'Gitee 仓库',
        link: 'https://gitee.com/hooray/fantastic-admin',
      },
    },
  ],
}

export default routes
```

### copyright <sup class="pro-badge" />

|  类型   | 是否必须 | 默认值 | 说明                       |
| :-----: | :------: | :----: | :------------------------- |
| boolean |    ✖️     |   /    | 该路由是否显示底部版权信息 |

该参数比应用配置里的 `copyright.enable` 优先级高，不设置则继承应用配置里的设置。

### paddingBottom <sup class="pro-badge" />

|  类型  | 是否必须 | 默认值 | 说明                           |
| :----: | :------: | :----: | :----------------------------- |
| string |    ✖️     |   /    | 该路由是否需要空出距离底部距离 |

当使用类似 `<FixedActionBar />` 这类通过 `position: fixed` 固定在底部的组件时，需要手动设置该参数，目的是为了防止页面底部可能被遮挡。

```ts
paddingBottom: '80px'
```

### whiteList <sup class="pro-badge" />

|  类型   | 是否必须 | 默认值 | 说明                                   |
| :-----: | :------: | :----: | :------------------------------------- |
| boolean |    ✖️     |   /    | 是否开启白名单，开启后无需登录即可访问 |

这个属性比较特殊，请勿在系统路由和动态路由里设置，详细可阅读《[免登录页面](router.md#免登录页面)》。

## 示例

```ts
import type { Route } from '@/global'

const Layout = () => import('@/layout/index.vue')

const routes: Route.recordRaw = {
  path: '/banner',
  component: Layout,
  redirect: '/banner/list',
  name: 'banner',
  meta: {
    title: 'Banner 管理',
    icon: 'banner',
  },
  children: [
    {
      path: 'detail',
      name: 'bannerCreate',
      component: () => import('@/views/banner/detail.vue'),
      meta: {
        title: '新增 Banner',
      },
    },
    {
      path: 'list',
      name: 'bannerList',
      component: () => import('@/views/banner/list.vue'),
      meta: {
        title: 'Banner 列表',
      },
    },
    {
      path: 'detail/:id',
      name: 'bannerEdit',
      component: () => import('@/views/banner/detail.vue'),
      meta: {
        title: '编辑 Banner',
        sidebar: false,
        activeMenu: '/banner/list',
      },
    },
  ],
}

export default routes
```

展示效果如下：

<ZoomImg src="/breadcrumb1.gif" />

## 小技巧

如果需要在不改变侧边栏导航结构的前提下，面包屑导航希望能变成这样：

<ZoomImg src="/breadcrumb2.gif" />

其实根据图中的效果，可以确定路由需要有三层，剩下就是通过配置项去控制侧边栏导航和面包屑导航是否展示。

```ts
import type { Route } from '@/global'

const Layout = () => import('@/layout/index.vue')

const routes: Route.recordRaw = {
  path: '/banner',
  component: Layout,
  redirect: '/banner/list',
  name: 'banner',
  meta: {
    title: 'Banner 管理',
    icon: 'banner',
  },
  children: [
    {
      path: 'detail',
      redirect: '/banner/list/detail',
      meta: {
        title: '新增 Banner',
      },
    },
    {
      path: 'list',
      meta: {
          title: 'Banner 列表'
      },
      children: [
        {
          path: '',
          name: 'bannerList',
          component: () => import('@/views/banner/list.vue'),
          meta: {
            title: 'Banner 列表',
            sidebar: false,
            breadcrumb: false,
          }
        },
        {
          path: 'detail',
          name: 'bannerCreate',
          component: () => import('@/views/banner/detail.vue'),
          meta: {
            title: '新增 Banner',
            sidebar: false,
            activeMenu: '/banner/detail',
          }
        },
        {
          path: 'detail/:id',
          name: 'bannerEdit',
          component: () => import('@/views/banner/detail.vue'),
          meta: {
            title: '编辑 Banner',
            sidebar: false,
            activeMenu: '/banner/list',
          },
        },
      ],
    },
  ],
}

export default routes
```

## 后端生成

:::danger 不推荐！
导航后端配置并生成这个需求，基本上是后端开发者刚接触前端后台项目开发时最常问的一个问题，但当真正做过前端开发并了解 Vue 的开发模式后，会意识到这个需求是多此一举的，并且会导致框架提供的部分导航特性无法使用，是得不偿失的做法。

其根本原因在于，导航是通过路由生成的，而路由是与页面组件直接挂钩，即一个路由则对应着一个 `.vue` 的页面组件文件。即便将路由数据通过后端配置，也要确保路由对应的页面组件在项目中存在，这就导致在开发环境下，通过后端配置好路由数据后，还需要在项目中新增对应的 `.vue` 文件写业务代码，**并不是后端新增一个路由，前端就能直接访问到该路由页面**，这也就意味着在生产环境中不能随意修改路由数据，可能会导致导航无法访问，因为很多路由设置和业务逻辑是高度耦合的，例如页面跳转用到的 `name` 和 `path` 不能随意修改，`component` 不能设置不存在的页面组件。能交给后端动态配置的最多也就只有 `title` 和 `icon` 这两个属性，所以仅仅为了这个需求，而让开发流程复杂化，是得不偿失的一种做法。

如果你执意使用该特性，请确保你了解该特性在上面所说的优缺点，并谨慎使用！
:::

在应用配置里开启：

```ts {2-4}
const globalSettings: Settings.all = {
  app: {
    routeBaseOn: 'backend'
  }
}
```

开启后访问 `/src/store/modules/route.ts` 文件，找到 `generateRoutesAtBack()` 这个 action 方法，你要做的就是修改这个方法里的请求地址，请求返回的数据就是路由数据，你可以在 `/src/mock/route.ts` 里查看 mock 数据。

开启后端生成后，路由权限有两种做法，一种是后端直接返回用户具备访问权限的路由数据，另一种则返回全部的路由的数据，让框架自行处理。两种做法的区别在于第一种返回的路由数据里，无需在 meta 对象里设置 auth 参数。

## 免登录页面 <sup class="pro-badge" />

基于后台框架的页面都是需要登录后才能访问，如果希望增加免登录的页面，也就是脱离框架本身，相对独立的页面，你可以按照下面的方式处理。

首先在 `/src/router/routes.ts` 里 `constantRoutes` 配置免登录页面的路由，然后在 `meta` 对象里设置 `whiteList: true` ，例子如下。

```ts {8}
const constantRoutes: Route.recordRaw[] = [
  {
    path: '/no/login/example',
    name: 'noLoginExample',
    component: () => import('@/views/no-login-example.vue'),
    meta: {
      title: '免登录页面',
      whiteList: true,
    },
  },
]
```

需要注意，请勿在**系统路由**和**动态路由**上设置该属性，因为这里面的路由，它们的一级路由调用的是 Layout 组件，而 Layout 组件是必须登录才能正常使用。

## 导航守卫

导航守卫是框架实现路由相关业务逻辑的核心，在守卫里会处理导航路由生成、页面标题设置、页面缓存设置、无效路由跳转404页面等处理。

所以理解框架的导航守卫处理逻辑，对业务开发或框架二次开发有很大帮助。

### 全局前置守卫

<ZoomImg src="/router1.png" />

### 全局后置钩子

<ZoomImg src="/router2.png" />