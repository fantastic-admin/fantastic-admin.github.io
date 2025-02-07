# 常见问题

## 安装依赖时有警告

![](/qa1.png){data-zoomable}

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

Vite 4.3 显著提升了开发服务器的性能，具体可以阅读这篇文章了解《[Vite 4.3 is out!](https://vitejs.dev/blog/announcing-vite4-3.html)》，同时框架 v3.0.0 版本开始，vite 也升级到了 4.3 版本。

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

## 开发环境修改代码后，路由跳转导致页面空白

参考这个 [issue](https://github.com/vuejs/core/issues/7121) ，未来 Vue 官方可能会修复这个问题，目前只能手动刷新浏览器。

## 构建报错，提示内存溢出

构建时失败并在错误信息里提示 `Reached heap limit Allocation failed - JavaScript heap out of memory` 。

你可以执行 `pnpm add cross-env -D` 安装 cross-env 依赖，并在 `package.json` 里修改构建脚本指令：

```json {3}
{
  "scripts": {
    "build": "vue-tsc -b && cross-env NODE_OPTIONS=--max-old-space-size=8192 vite build"
  }
}
```

其中 8192 表示内存空间大小。

## 直接修改构建产物的接口地址

如果你需要将构建产物部署到多台服务器，并且根据不同服务器配置不同的接口地址。这时候如果采用新增环境配置文件的方式，会存在一个弊端，就是不同环境需要分别进行构建。下面的方法可以让你直接修改构建产物的接口地址。

新增 `/public/config.js` 文件：

```js
window.globalConfig = {
  API_BASEURL: '/',
}
```

在 `/index.html` 中引入：

```html
<body>
  ...
  <script src="/config.js"></script> // [!code ++]
  <script type="module" src="/src/main.ts"></script>
</body>
```

修改 `/src/api/index.ts` ，仅在生产环境时使用：

```ts
const api = axios.create({
  baseURL: (import.meta.env.DEV && import.meta.env.VITE_OPEN_PROXY === 'true') ? '/proxy/' : import.meta.env.VITE_APP_API_BASEURL, // [!code --]
  baseURL: (import.meta.env.DEV && import.meta.env.VITE_OPEN_PROXY === 'true') ? '/proxy/' : (import.meta.env.DEV ? import.meta.env.VITE_APP_API_BASEURL : (window as any).globalConfig.API_BASEURL), // [!code ++]
  timeout: 1000 * 60,
  responseType: 'json',
})
```

之后你就可以在构建产物目录下直接修改 `config.js` 文件内的接口地址了，此方法不仅适用于接口地址，可以自行扩展。

## 不会 TypeScript 怎么办

不管个人还是团队、产品或者项目，从长远考虑我们都建议你学习 TypeScript，因为它是未来的趋势，而且大部分框架、库、插件都是用 TypeScript 开发的，足以证明它是构建一款成熟稳健产品的基石。

但考虑到实际情况，会各种客观原因存在，如果必须要用传统 JavaScript 进行开发，你可以在 `tsconfig.json` 里将 `allowJs` 设置为 `true` 即可，框架原有的 TypeScript 代码不会受到影响，并且你也可以在项目中使用 JavaScript 编写代码。
