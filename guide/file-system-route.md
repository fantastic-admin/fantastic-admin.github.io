# 基于文件系统的路由

:::info
该特性由 [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) 和 [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) 提供技术支持。
:::

传统使用路由的方式需要手动编写路由，而基于文件系统的路由则会根据 `/src/views/` 下的文件目录结构，自动生成每个 `.vue` 文件对应的路由配置，从而节省手动配置路由的时间。

## 使用介绍

框架默认不启用该特性，如果需要开启，需要到应用配置里修改设置。

```ts {2-4}
const globalSettings: Settings.all = {
  app: {
    routeBaseOn: 'filesystem',
  },
}
```

启用基于文件系统的路由后，`/src/router/modules/` 目录将不再被需要，而 `/src/views/` 目录下的文件会自动被注册成路由。

```
文件系统                       路由地址                       路由 name

views
├─ example
│  ├─ components
│  │  └─ List
│  │     └─ index.vue
│  ├─ params
│  │  └─ [id].vue             /example/params/:id          example-params
│  ├─ axios.vue               /example/axios               example-axios
│  ├─ cookie.vue              /example/cookie              example-cookie
│  └─ svgicon.vue             /example/svgicon             example-svgicon
├─ [...all].vue               /:all(.*)*                   all
├─ index.vue                  /                            index
├─ reload.vue                 /reload                      reload
└─ login.vue                  /login                       login
```

通过上面的示例，可以看出几个特性：

- 使用路由参数需通过 [ ] 将参数名包裹，并设为文件名
- 文件夹不会生成路由，例如 example 文件夹并没有生成 /example 路由
- 路由 name 会根据文件的目录结构自动生成，并用`-`连接，可确保 name 的唯一性
- 所有 `components/` 目录均不会生成路由

## 进阶使用

默认生成的路由均为嵌套路由，父级 component 指向 `/src/layouts/index.vue` 组件，即：

```ts
// 生成的路由
{
  path: '/example/list',
  component: () => import('/src/layouts/index.vue'),
  children: [
    {
      path: '',
      component: () => import('/src/views/example/list.vue'),
      name: 'example-list',
      meta: {
        layout: 'index',
      },
    },
  ],
}
```

你可以在 SFC 单文件组件里将 layout 设置为 false，这样该路由则不会生成嵌套路由：

```vue {1-4}
<route lang="yaml">
meta:
  layout: false
</route>

<template>
  <div>列表页</div>
</template>
```

```ts
// 生成的路由
{
  path: '/example/list',
  component: () => import('/src/views/example/list.vue'),
  name: 'example-list',
  meta: {
    layout: false,
  },
}
```

## 路由参数

你应该已经发现，原先在路由的配置信息被转移到了 SFC 单文件组件里的 `<route></route>` 标签内。

需要注意的是，既然使用了基于文件系统的路由，不建议再手动去设置 `path` 和 `name` ，同时因为路由不再承担生成导航的特性，所以 `meta` 对象的可配置项也有部分调整，保留了以下参数：

- [title](router#title)
- [i18n](router#i18n) <sup class="pro-badge" />
- [icon](router#icon)
- [activeIcon](router#activeicon) <sup class="pro-badge" />
- [permanent](router#permanent) <sup class="pro-badge" />
- [auth](router#auth)
- [activeMenu](router#activemenu)
- [cache](router#cache)
- [noCache](router#nocache) <sup class="pro-badge" />
- [link](router#link) <sup class="pro-badge" />
- [copyright](router#copyright) <sup class="pro-badge" />
- [paddingBottom](router#paddingbottom) <sup class="pro-badge" />

另外还新增了三个特殊参数：

**enabled**

|  类型   | 默认值 | 说明                 |
| :-----: | :----: | :------------------- |
| boolean |  true  | 是否将该文件生成路由 |

如果你想临时取消某个文件路由的生成，可以通过设置 `enabled: false` 来实现，从而不需要通过删除文件来实现。

**layout**

|       类型       | 默认值  | 说明                                   |
| :--------------: | :-----: | :------------------------------------- |
| boolean / string | 'index' | 布局模版名称，对应 layout 目录下文件名 |

**constant**

|  类型   | 默认值 | 说明                           |
| :-----: | :----: | :----------------------------- |
| boolean | false  | 是否为固定路由，默认为动态路由 |

## 导航参数

由于导航无法通过路由自动生成，所以在基于文件系统的路由模式下，我们需要手动配置导航数据。

导航数据存放在 `/menu/` 目录下，和 `/router/` 的目录结构类似， `/menu/modules/` 用于存放每个模块的导航配置，最终在 `/menu/index.ts` 文件里引用并进行归类，即主导航。

导航对象有三个标准参数：

- path 完整路由地址，如果有下级导航，则无需设置
- meta 同路由 `meta` 对象，支持以下参数：
  - [title](router#title)
  - [i18n](router#i18n)
  - [icon](router#icon)
  - [activeIcon](router#activeicon) <sup class="pro-badge" />
  - [auth](router#auth)
  - [badge](router#badge) <sup class="pro-badge" />
- children 下级导航数组

同样的，导航数据也可通过后端进行返回，只需在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    baseOn: 'backend',
  },
}
```

开启后在 `/src/api/modules/app.ts` 文件里找到 `menuList()` 这个函数，并修改这个函数的请求地址，请求返回的数据就是导航数据，你可以在 `/src/mock/app.ts` 里查看 mock 数据。

## 功能取舍

需要注意，使用文件系统的路由后，将无法再使用以下功能或特性：

- 面包屑导航
- 次导航是否默认展开
- JSX