# 全局属性

框架将一些常用实例和方法挂载在全局属性上，方便可以直接使用，免去开发时手动引入。

全局属性在 `/src/util/global.properties.js` 文件中配置。

## 框架相关

<!-- TODO 等 vitepress 更新后，使用 code group 代替 -->

### 接口请求

详细可阅读《[与服务端交互 - 接口请求](axios#接口请求)》。

```js
// Composition API
const { proxy } = getCurrentInstance()
proxy.$api
```

```js
// Options API
this.$api
```

### 鉴权

详细可阅读《[权限 - 鉴权函数](permission#鉴权函数)》。

```js
// Composition API
const { proxy } = getCurrentInstance()
proxy.$auth
proxy.$authAll
```

```js
// Options API
this.$auth
this.$authAll
```

### 标签栏 <sup class="pro-badge" />

详细可阅读《[标签栏 - API](tabbar#api)》。

```js
// Composition API
const { proxy } = getCurrentInstance()
proxy.$tabbar
```

```js
// Options API
this.$tabbar
```

### 主页最大化 <sup class="pro-badge" />

```js
// Composition API
const { proxy } = getCurrentInstance()
// status: true / false
proxy.$mainPage.maximize(status)
```

```js
// Options API
// status: true / false
this.$mainPage.maximize(status)
```

## 第三方库

除 vue-router 、pinia 、axios 之外，框架还默认集成了一些常用且成熟的类库或插件，熟悉并熟练使用它们，能让你在开发过程中更得心应手。

### [mitt](https://github.com/developit/mitt)

全局事件总线的库，也是 Vue 3 官方推荐的。

```js
// Composition API
const { proxy } = getCurrentInstance()
proxy.$eventBus
```

```js
// Options API
this.$eventBus
```

### [dayjs](https://day.js.org/zh-CN/)

轻量的处理时间和日期的库。

```js
// Composition API
const { proxy } = getCurrentInstance()
proxy.$dayjs
```

```js
// Options API
this.$dayjs
```

### [vue-cookies](https://github.com/cmp-cc/vue-cookies)

cookies 操作库。

```js
// Composition API
const { proxy } = getCurrentInstance()
proxy.$cookies
```

```js
// Options API
this.$cookies
```

### [HotKey.js](https://wangchujiang.com/hotkeys/)

快捷键监听的库。

```js
// Composition API
const { proxy } = getCurrentInstance()
proxy.$hotkeys
```

```js
// Options API
this.$hotkeys
```

### [QRCode](https://github.com/soldair/node-qrcode) <sup class="pro-badge" />

生成二维码的库，可生成图片或 canvas 二维码。

```js
// Composition API
const { proxy } = getCurrentInstance()
proxy.$qrcode
```

```js
// Options API
this.$qrcode
```

### [iNotify](https://github.com/jaywcjlove/iNotify) <sup class="pro-badge" />

支持 favicon、网页标题、Chrome桌面通知。

```js
// Composition API
const { proxy } = getCurrentInstance()
proxy.$iNotify
```

```js
// Options API
this.$iNotify
```