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

## 构建报错，提示内存溢出

构建时失败并在错误信息里提示 `Reached heap limit Allocation failed - JavaScript heap out of memory` 。

你可以执行 `pnpm add cross-env -D` 安装 cross-env 依赖，并在 `package.json` 里修改构建脚本指令：

```json {3}
{
  "scripts": {
    "build": "cross-env NODE_OPTIONS=--max-old-space-size=8192 vue-tsc --noEmit && vite build"
  }
}
```

其中 8192 表示内存空间大小。

## 开发环境修改代码后，路由跳转导致页面空白

参考这个 [issue](https://github.com/vuejs/core/issues/7121) ，未来 Vue 官方可能会修复这个问题，目前只能手动刷新浏览器。