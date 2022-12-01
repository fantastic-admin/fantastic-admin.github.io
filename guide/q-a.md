# 常见问题

## 安装依赖时有警告

<ZoomImg src="/qa1.png" />

这是一个可以无视的警告，因为依赖已经安装成功了。

如果对这个问题感兴趣，可以浏览下这个 [issue](https://github.com/pnpm/pnpm/issues/4183) ，里面有给出一个忽略警告的方案，就是在 `package.json` 中添加：

```json
{
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": [
        "postcss",
        "rollup"
      ]
    }
  }
}
```

这样你下次再安装依赖的时候，就不会出现该警告了。

## 为什么本地开发环境首次载入很慢

主要是 Vite 的原因，具体可以阅读这篇文章了解《[为什么有人说 vite 快，有人却说 vite 慢？](https://juejin.cn/post/7129041114174062628)》。

## 项目 URL 里的 # 号能不能去掉

这是因为路由默认使用的是 Hash 模式，你可以在 `/src/router/index.ts` 修改为 HTML5 模式，但需要注意，开启 HTML5 模式，服务器也需要做相应的配置调整，详细可阅读《[Vue-router 不同的历史模式](https://next.router.vuejs.org/zh/guide/essentials/history-mode.html)》。

## 页面切换后显示空白

因为路由切换有使用到 `<transition>` 动画，而 `<transition>` 组件无法处理多个根节点的组件，所以请检查路由对应所有的页面文件的根节点是否均为单个。

错误示例：

```vue
<template>
  <!-- 需要注意，注释也会被视为一个节点 -->
  <h1>text h1</h1>
  <h2>text h2</h2>
</template>

<template>
  没有节点也是不行的
</template>
```

正确示例：

```vue
<template>
  <div>
    <h1>text h1</h1>
    <h2>text h2</h2>
  </div>
</template>

<template>
  <div>
    这样就没问题啦
  <div>
</template>
```

相关 [Issue](https://github.com/vuejs/vue-next/issues/1850) 说明。

## 隐藏次导航区域 <sup class="pro-badge" />

除了可以将导航栏模式设置成精简模式，彻底隐藏次导航区域外，还可以通过配置实现如下的效果：

<ZoomImg src="/qa2.gif" />

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

const Layout = () => import('@/layout/index.vue')

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

最后在应用配置里分别开启 `切换主导航同时跳转页面` 和 `次导航只有一个导航时自动隐藏` 的设置项就可以了。

```ts {2-5}
const globalSettings: Settings.all = {
  menu: {
    switchMainMenuAndPageJump: true,
    subMenuOnylOneHide: true,
  },
}
```

## 构建报错，提示内存溢出

构建时失败并在错误信息里提示 `Reached heap limit Allocation failed - JavaScript heap out of memory` 。

你可以执行 `pnpm add cross-env -D` 安装 cross-env 依赖，并在 `package.json` 里修改构建脚本指令：

```json {4}
{
  ...
  "scripts": {
    "build": "cross-env NODE_OPTIONS=--max-old-space-size=4096 vite build"
  }
  ...
}
```

其中 4096 表示内存空间大小。