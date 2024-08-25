# 路由（导航）

默认配置下，导航菜单通过路由数据自动生成。

项目路由存放在 `/src/router/modules/` 目录下，每一个 ts 文件会被视为一个路由模块。所有路由模块最终会在 `/src/router/routes.ts` 文件里引入并放到不同的主导航下。

## 基本配置

### 二级路由

一个最常见的路由模块可参考以下结构：

```ts
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/example',
  component: () => import('@/layouts/index.vue'),
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

:::warning 注意
- 所有路由的 `name` 请确保唯一，不能重复
- 一级路由的 `component` 需设置为 `() => import('@/layouts/index.vue')` ，并且 path 前面需要加 `/`，其余子路由都不要以 `/` 开头
:::

### 多级路由

:::tip 说明
多级路由最终都会转成二级路由并注册，但多级嵌套的层级结构会在导航菜单和面包屑导航中得到保留，其设计原因可阅读《[页面缓存](keep-alive)》。
:::

多级路由的中间层级，无需设置 `component` 。

```ts
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/example',
  component: () => import('@/layouts/index.vue'),
  redirect: '/example/level/index',
  name: 'Example',
  meta: {
    title: '演示',
  },
  children: [
    {
      path: 'level',
      // 无需设置 componment
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

### 主导航

主导航并非路由的一部分，它只是将路由模块进行归类，这么做的目的是方便调整单个路由模块的展示位置，并且不会影响路由路径。

在 `/src/router/routes.ts` 里进行设置：

```ts
const asyncRoutes: Route.recordMainRaw[] = [
  {
    meta: {
      title: '演示',
      icon: 'menu-default',
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
      icon: 'menu-other',
    },
    children: [
      ComponentExample,
      PermissionExample,
    ],
  },
]
```

主导航只需设置 `meta` 和 `children` 两个参数，其中 `meta` 接受 `title`、`i18n`、`icon`、`activeIcon`、`auth` 这 5 个参数，`children` 则是存放不同的路由模块。

## 导航配置

框架的核心是通过路由数据生成导航菜单，所以除了路由的基本配置外，框架还提供了针对导航的自定义配置，这些配置都存放在 `meta` 对象里。

### title

|  类型  | 默认值 | 说明                                 |
| :----: | :----: | :----------------------------------- |
| string |   /    | 导航、面包屑导航以及页面中展示的标题 |

<Badge type="tip" text="v4.8.0" /> 开始，<Badge type="pro" text="专业版" /> 支持设置 i18n 对应的 key 值，详细可阅读《[国际化](i18n)》。

### ~~i18n~~ <Badge type="pro" text="专业版" /> <Badge type="warning" text="v4.8.0 进入弃用过渡期，预计在 v5.0.0 正式移除" />

|  类型  | 默认值 | 说明                    |
| :----: | :----: | :---------------------- |
| string |   /    | 标题国际化对应的 key 值 |

详细可阅读《[国际化](i18n)》。

### icon

|  类型  | 默认值 | 说明             |
| :----: | :----: | :--------------- |
| string |   /    | 导航中显示的图标 |

该项配置最终会通过 `<SvgIcon />` 组件进行展示，意味着你可以使用自定义图标，也可使用 Iconify 提供的图标，详细可阅读《[SVG 图标](./svg-icon)》。

### activeIcon <Badge type="pro" text="专业版" />

|  类型  | 默认值 | 说明                 |
| :----: | :----: | :------------------- |
| string |   /    | 导航激活时显示的图标 |

该项配置最终会通过 `<SvgIcon />` 组件进行展示，意味着你可以使用自定义图标，也可使用 Iconify 提供的图标，详细可阅读《[SVG 图标](./svg-icon)》。

### defaultOpened

|  类型   | 默认值 | 说明                                                                   |
| :-----: | :----: | :--------------------------------------------------------------------- |
| boolean | false  | 次导航是否默认展开，在父级路由上设置后，会默认展开并显示下一级的子路由 |

该特性仅在 `顶部模式` / `侧边栏模式（含主导航）` / `侧边栏模式（无主导航）` 下生效。

使用该特性时，建议在应用配置中关闭 `menu.subMenuUniqueOpened` 设置，否则可能无法看到效果。

### alwaysOpened <Badge type="pro" text="专业版" /> <Badge type="tip" text="v4.7.0 新增" />

|  类型   | 默认值 | 说明                                                                   |
| :-----: | :----: | :--------------------------------------------------------------------- |
| boolean | false  | 次导航是否始终展开，在父级路由上设置后，会始终展开并显示下一级的子路由 |

该特性仅在 `顶部模式` / `侧边栏模式（含主导航）` / `侧边栏模式（无主导航）` 下生效。

### permanent <Badge type="pro" text="专业版" />

|  类型   | 默认值 | 说明           |
| :-----: | :----: | :------------- |
| boolean | false  | 是否常驻标签页 |

使用该特性时，需要在应用配置中开启 `tabbar.enable` 设置，同时需注意，请勿在带有参数的路由上设置该特性。

### auth

|       类型        | 默认值 | 说明                                                     |
| :---------------: | :----: | :------------------------------------------------------- |
| string / string[] |   /    | 该路由访问权限，支持多个权限叠加，只要满足一个，即可进入 |

用户在访问路由时，会判断当前路由是否具备访问权限，不具备访问权限则会显示 403 页面，详细可阅读《[权限 - 路由权限](permission#路由权限)》。

如果在某个多级路由的多个层级上均设置了 `auth` ，则框架会依次判断，必须每一层级都具备访问权限，才能访问该路由。

```ts {13,26}
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/system',
  meta: {
    title: '系统管理',
  },
  children: [
    {
      path: 'department',
      meta: {
        title: '部门管理',
        auth: 'a',
      },
      children: [
        {
          path: 'job',
          meta: {
            title: '职位管理',
          },
          children: [
            {
              path: 'member',
              meta: {
                title: '人员管理',
                auth: 'b', // 只有当用户权限里同时含有 a 和 b 时，才能访问该路由
              },
            },
          ],
        },
      ],
    },
  ],
}

export default routes
```

::: details v4.8.0 之前版本处理逻辑
为避免多级路由同时设置 `auth` 可能会导致逻辑冲突，框架会以最先设置的 `auth` 为准：


```ts {13,26}
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/system',
  meta: {
    title: '系统管理',
  },
  children: [
    {
      path: 'department',
      meta: {
        title: '部门管理',
        auth: 'a',
      },
      children: [
        {
          path: 'job',
          meta: {
            title: '职位管理',
          },
          children: [
            {
              path: 'member',
              meta: {
                title: '人员管理',
                auth: 'b', // 无效设置，该路由的访问权限会以 auth: 'a' 为准
              },
            },
          ],
        },
      ],
    },
  ],
}

export default routes
```
:::

### auths <Badge type="pro" text="专业版" /> <Badge type="tip" text="v4.7.0 新增" />

|                               类型                                | 默认值 | 说明                                                                         |
| :---------------------------------------------------------------: | :----: | :--------------------------------------------------------------------------- |
| <div style="width: 150pt">{ name: string; value: string }[]</div> |   /    | 权限池，对路由本身无实际作用，通常用于角色管理模块，展示路由(导航)可配置权限 |

权限池存放了该路由相关的所有权限，包括但不限于：访问权限、按钮权限、颗粒度更细的权限等。以下是一个示例：

:::tip 注意
- `auths` 里需包含 `auth` 所设置的权限，否则会导致无法设置该路由的访问权限。
- `auths` 的存放位置并不固定，可以放在任意一级路由上，但通常建议放在某个模块的入口路由上，表示该模块下所有子路由具备的可配置权限。
:::

```ts {8-15}
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/news',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '新闻管理',
    auths: [
      { name: '浏览', value: 'browse' },
      { name: '新增', value: 'add' },
      { name: '编辑', value: 'edit' },
      { name: '删除', value: 'delete' },
      { name: '导出', value: 'export' },
      { name: '导入', value: 'import' },
    ],
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/news/list.vue'),
      meta: {
        title: '新闻列表',
        auth: 'browse',
      },
    },
    {
      path: 'detail',
      component: () => import('@/views/news/detail.vue'),
      meta: {
        title: '新闻详情',
        menu: false,
        activeMenu: '/news/list',
        auth: 'browse',
      },
    },
  ],
}

export default routes
```

该配置的具体应用可参考专业版演示站[示例](https://fantastic-admin.hurui.me/pro-example/#/pages_example/general/role)及[源码](https://github.com/fantastic-admin/pro/tree/example/src/views/pages_example/role)。

### ~~sidebar~~ <Badge type="warning" text="v4.7.0 进入弃用过渡期，预计在 v5.0.0 正式移除" />

请使用下方 `menu` 配置项。

### menu <Badge type="tip" text="v4.7.0 新增" />

|  类型   | 默认值 | 说明                       |
| :-----: | :----: | :------------------------- |
| boolean |  true  | 该路由是否在菜单导航中展示 |

当子路由里没有可展示的路由时，在菜单导航中则只会显示父级路由，例如：

```ts {15}
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/permission',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '权限验证',
  },
  children: [
    {
      path: '',
      component: () => import('@/views/permission.vue'),
      meta: {
        title: '权限验证',
        menu: false,
      },
    },
  ],
}

export default routes
```

![](/route-meta-menu.png){data-zoomable}

### activeMenu

|  类型  | 默认值 | 说明                                     |
| :----: | :----: | :--------------------------------------- |
| string |   /    | 指定高亮的菜单导航，需要设置完整路由地址 |

该参数常与 `menu: false` 一起使用，因为路由不在菜单导航显示，会导致进入该路由后，菜单导航高亮效果失效，所以需要手动指定。

```ts {22-23}
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/news',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '新闻管理',
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/news/list.vue'),
      meta: {
        title: '新闻列表',
      },
    },
    {
      path: 'detail',
      component: () => import('@/views/news/detail.vue'),
      meta: {
        title: '新闻详情',
        menu: false,
        activeMenu: '/news/list',
      },
    },
  ],
}

export default routes
```

### singleMenu <Badge type="pro" text="专业版" /> <Badge type="tip" text="v4.6.0 新增" />

|  类型   | 默认值 | 说明                   |
| :-----: | :----: | :--------------------- |
| boolean |   /    | 是否为单个一级导航菜单 |

该配置用于简化只想展示一级，没有二级菜单导航的路由配置。

需注意，该配置只能在一级路由上设置，且只在一级路由上生效。

```ts {9}
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/test',
  name: 'test',
  component: () => import('@/views/test/index.tsx'),
  meta: {
    title: '测试页面',
    singleMenu: true,
  },
}

export default routes
```

以上路由配置等同于以下配置：

```ts
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/test',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '测试页面',
  },
  children: [
    {
      path: '',
      name: 'test',
      component: () => import('@/views/test/index.tsx'),
      meta: {
        title: '测试页面',
        menu: false,
        breadcrumb: false,
      },
    },
  ],
}

export default routes
```

### breadcrumb

|  类型   | 默认值 | 说明                         |
| :-----: | :----: | :--------------------------- |
| boolean |  true  | 该路由是否在面包屑导航中展示 |

### cache

|            类型             | 默认值 | 说明                 |
| :-------------------------: | :----: | :------------------- |
| boolean / string / string[] |   /    | 是否对该页面进行缓存 |

- `boolean` 设置为 true 时，该路由页面会被一直缓存
- `string` 设置某个目标路由的 name ，表示当前路由页面跳转到设置的 name 对应的路由页面时，则将当前路由页面进行缓存，否则不缓存
- `string[]` ，可设置一个目标路由的 name 数组

当类型为 `string` 或 `string[]` 时，可以更精细的去控制页面缓存的逻辑。例如从列表页进入详情页，则需要将列表页进行缓存；而从列表页进入其它页面，则无需将列表页进行缓存。详细可阅读《[页面缓存](keep-alive)》。

### noCache

|       类型        | 默认值 | 说明                                        |
| :---------------: | :----: | :------------------------------------------ |
| string / string[] |   /    | 是否对该页面清除缓存，须设置 cache 才会生效 |

- `string` 设置某个目标路由的 name ，表示当前路由页面跳转到设置的 name 对应的路由页面时，则将当前路由页面清除缓存，否则不清除缓存
- `string[]` ，可设置一个目标路由的 name 数组

该属性通常在启用标签栏合并时会使用到。详细可阅读《[页面缓存 - 标签栏开启且合并](keep-alive#标签栏开启且合并)》。

### badge <Badge type="pro" text="专业版" />

|           类型            | 默认值 | 说明     |
| :-----------------------: | :----: | :------- |
| boolean / number / string |   /    | 导航标记 |

设置不同的类型值，展示效果也会不同。

- `boolean` 展示形式为点，当值为 false 时隐藏
- `number` 展示形式为文本，当值小于等于 0 时隐藏
- `string` 展示形式为文本，当值为空时隐藏

如果标记需要动态更新，请设置为箭头函数形式，并返回外部变量，例如搭配 pinia 一起使用。

```ts
badge: () => globalStore.number
```

### newWindow <Badge type="pro" text="专业版" /> <Badge type="tip" text="v4.2.0 新增" />

|  类型   | 默认值 | 说明             |
| :-----: | :----: | :--------------- |
| boolean | false  | 是否在新窗口打开 |

该设置仅在菜单导航里点击生效。

### link

|  类型  | 默认值 | 说明         |
| :----: | :----: | :----------- |
| string |   /    | 外部网页链接 |

会在新窗口访问该链接。

外部网页无需设置 `component` ，但需设置 `redirect` 和 `name` 属性。

```ts
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/xxx',
  component: () => import('@/layouts/index.vue'),
  redirect: '/xxx/link',
  meta: {
    title: '外部网页',
  },
  children: [
    {
      path: 'link',
      redirect: '',
      name: 'Link',
      meta: {
        title: 'Gitee 仓库',
        link: 'https://gitee.com/fantastic-admin/basic',
      },
    },
  ],
}

export default routes
```

### iframe <Badge type="pro" text="专业版" />

|       类型       | 默认值 | 说明         |
| :--------------: | :----: | :----------- |
| string / boolean |   /    | 内嵌网页链接 |

会启用一个 `<iframe>` 并载入该链接。

内嵌网页无需设置 `component` ，但需设置 `redirect` 和 `name` 属性，如果同时设置了 `meta.link` 则 `meta.link` 优先级更高。

```ts {11-19}
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/xxx',
  component: () => import('@/layouts/index.vue'),
  redirect: '/xxx/iframe',
  meta: {
    title: '内嵌网页',
  },
  children: [
    {
      path: 'iframe',
      redirect: '',
      name: 'Iframe',
      meta: {
        title: 'Gitee 仓库',
        iframe: 'https://gitee.com/fantastic-admin/basic',
      },
    },
  ],
}

export default routes
```

内嵌网页同样支持使用 `meta.cache` 和 `meta.noCache` 属性来开启页面缓存，但考虑到 `<iframe>` 本身的性能问题，框架默认提供最大缓存数量为 3 个，超过 3 个则会自动清除最早的缓存页面。

如果需要修改最大缓存数量，请在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  mainPage: {
    iframeCacheMax: 3,
  },
}
```

<Badge type="tip" text="v4.11.0" /> 开始，增加了动态设置 iframe 链接，只需要配置一份如下路由：

```ts {20-29}
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/xxx',
  component: () => import('@/layouts/index.vue'),
  redirect: '/xxx/iframe',
  meta: {
    title: '内嵌网页',
  },
  children: [
    {
      path: 'iframe',
      redirect: '',
      name: 'Iframe',
      meta: {
        title: 'Gitee 仓库',
        iframe: 'https://gitee.com/fantastic-admin/basic',
      },
    },
    {
      path: 'dynamic',
      redirect: '',
      name: 'Dynamic',
      meta: {
        title: '外部链接',
        menu: false,
        iframe: true,
      },
    },
  ],
}

export default routes
```

然后就可以通过跳转路由的方式动态设置 iframe 链接了：

```ts
const router = useRouter()

router.push({
  name: 'Dynamic',
  // 这里需要使用到 query 参数，且约定参数名为 title 和 iframe
  query: {
    title: '自定义标题', // 非必须，默认使用该路由的 meta.title
    iframe: 'https://fantastic-admin.hurui.me/', // 必须
  },
})
```

### copyright <Badge type="pro" text="专业版" />

|  类型   | 默认值 | 说明                       |
| :-----: | :----: | :------------------------- |
| boolean |   /    | 该路由是否显示底部版权信息 |

该参数比应用配置里的 `copyright.enable` 优先级高，不设置则继承应用配置里的设置。

### paddingBottom <Badge type="pro" text="专业版" />

|  类型  | 默认值 | 说明                           |
| :----: | :----: | :----------------------------- |
| string |   /    | 该路由是否需要空出距离底部距离 |

当使用类似 `<FixedActionBar />` 这类通过 `position: fixed` 固定在底部的组件时，需要手动设置该参数，目的是为了防止页面底部可能被遮挡。

```ts
paddingBottom: '80px'
```

### whiteList <Badge type="pro" text="专业版" />

|  类型   | 默认值 | 说明                                   |
| :-----: | :----: | :------------------------------------- |
| boolean |   /    | 是否开启白名单，开启后无需登录即可访问 |

这个属性比较特殊，因为基于后台框架的页面基本上都是需要登录后才能访问，如果希望增加免登录的页面（白名单页面），也就是脱离框架本身，相对独立的页面，你可以按照下面的方式处理：

首先在 `/src/router/routes.ts` 里 `constantRoutes` 配置免登录页面的路由，然后在 `meta` 对象里设置 `whiteList: true` ，例子如下：

```ts {8}
const constantRoutes: RouteRecordRaw[] = [
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

## 小技巧

通常我们配置的路由都是这样的：

```ts
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/banner',
  component: () => import('@/layouts/index.vue'),
  redirect: '/banner/list',
  name: 'banner',
  meta: {
    title: 'Banner 管理',
  },
  children: [
    {
      path: 'add',
      name: 'bannerAdd',
      component: () => import('@/views/banner/add.vue'),
      meta: {
        title: '新增 banner',
      },
    },
    {
      path: 'list',
      name: 'bannerList',
      component: () => import('@/views/banner/list.vue'),
      meta: {
        title: 'banner 列表',
      },
    },
  ],
}

export default routes
```

对应的展示效果如下：

![](/route-breadcrumb1.gif){data-zoomable}

有时候会遇到这样的需求，要求在不改变菜单导航结构的前提下，面包屑导航展示嵌套的结构：

![](/route-breadcrumb2.gif){data-zoomable}

要实现这个效果也很简单，根据图中的效果，可以确定路由需要有三级。我们只需在二级放置一个重定向的路由，将其重定向到三级里的某个真实路由上，同时将三级路由均设置成不在菜单导航上显示即可，最终实现代码如下：

```ts
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/banner',
  component: () => import('@/layouts/index.vue'),
  redirect: '/banner/list',
  name: 'banner',
  meta: {
    title: 'Banner 管理',
  },
  children: [
    {
      path: 'add',
      redirect: '/banner/list/add',
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
          path: 'add',
          name: 'bannerAdd',
          component: () => import('@/views/banner/add.vue'),
          meta: {
            title: '新增 Banner',
            menu: false,
            activeMenu: '/banner/add',
          }
        },
        {
          path: '',
          name: 'bannerList',
          component: () => import('@/views/banner/list.vue'),
          meta: {
            title: 'Banner 列表',
            menu: false,
            breadcrumb: false,
          }
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

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  app: {
    routeBaseOn: 'backend'
  }
}
```

开启后在 `/src/api/modules/app.ts` 文件里找到 `routeList()` 这个函数，并修改这个函数的请求地址，请求返回的数据就是路由数据，你可以在 `/src/mock/app.ts` 里查看 mock 数据。

开启后端生成后，路由权限有两种做法，第一种是返回全部的路由数据，让框架自行处理（推荐），第二种是后端直接返回用户具备访问权限的路由数据。

两种做法的区别在于第一种做法对后端相对轻松，无需对数据做任何处理，并且对于无权限访问的路由，框架会以 403 页面进行展示；而第二种做法需要后端对处理进行处理，并且无需在 meta 对象里设置 auth 参数，但由于直接在数据源上就过滤掉了无权限的路由，所以在访问没有权限的路由时会直接显示 404 页面。

## 基于文件系统的路由

基于文件系统的路由是除后端生成路由外，另一种路由生成方式。如果你有后端生成路由的需求，不妨先了解下文件系统路由这一特性，它的优势在于将路由和导航菜单进行了解耦，后端无需再关心路由数据，只需提供导航菜单数据即可，详细可阅读《[基于文件系统的路由](file-system-route)》。
