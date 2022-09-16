# 常用 API

## 接口请求

详细可阅读《[与服务端交互 - 接口请求](axios#接口请求)》。

```js
import api from '@/api'

api.get()
api.post()
```

## 鉴权

详细可阅读《[权限 - 鉴权函数](permission#鉴权函数)》。

```js
import { useAuth } from '@/utils/composables'

const { auth, authAll } = useAuth()

auth()
authAll()
```

## 主导航

### 切换

切换主导航，`index` 为主导航序列数。

```js
import { useMenu } from '@/utils/composables'

useMenu().switchTo(index)
```

## 主页面

### 刷新

```js
import { useMainPage } from '@/utils/composables'

useMainPage().reload()
```

### 最大化 <sup class="pro-badge" />

```js
import { useMainPage } from '@/utils/composables'

// status: true / false
useMainPage().maximize(status)
```

## 标签栏 <sup class="pro-badge" />

### 获取当前标签页 tabId

```js
import { useTabbar } from '@/utils/composables'

const { getId } = useTabbar()

getId()
```

### 关闭指定标签页

该方法接收一个 `tabId` 参数。

```js
import { useTabbar } from '@/utils/composables'

const { closeById } = useTabbar()

closeById(tabId)
```

### 关闭当前标签页

该方法接收一个 `to` 参数，该参数与 `router.push(to)` 一致，表示关闭当前标签页并跳转到指定路由，点击阅读[参数说明](https://next.router.vuejs.org/zh/api/#routelocationraw)。

```js
import { useTabbar } from '@/utils/composables'

const { close } = useTabbar()

close(to)
```

## 事件总线

基于 [mitt](https://github.com/developit/mitt) 简单封装，使用方法请查阅官方文档。

```js
import eventBus from '@/utils/eventBus'

eventBus.on()
eventBus.emit()
eventBus.off()
```

## 日期 <sup class="pro-badge" />

基于 [dayjs](https://day.js.org/zh-CN/) 简单封装，使用方法请查阅官方文档。

```js
import dayjs from '@/utils/dayjs'

dayjs()
```