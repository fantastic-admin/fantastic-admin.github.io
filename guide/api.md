# 常用 API

## 接口请求

详细可阅读《[与服务端交互 - 接口请求](axios#接口请求)》。

```ts
import api from '@/api'

api.get()
api.post()
```

## 鉴权

详细可阅读《[权限 - 鉴权函数](permission#鉴权函数)》。

```ts
import useAuth from '@/utils/composables/useAuth'

const { auth, authAll } = useAuth()

auth()
authAll()
```

## 主导航

### 切换

切换主导航，`index` 为主导航序列数。

```ts
import useMenu from '@/utils/composables/useMenu'

const { switchTo } = useMenu()

switchTo(index)
```

## 主页面

### 刷新

```ts
import useMainPage from '@/utils/composables/useMainPage'

const { reload } = useMainPage()

reload()
```

### 最大化 <sup class="pro-badge" />

```ts
import useMainPage from '@/utils/composables/useMainPage'

const { maximize } = useMainPage()

// status: true / false
maximize(status)
```

## 标签栏 <sup class="pro-badge" />

### 获取当前标签页 tabId

```ts
import useTabbar from '@/utils/composables/useTabbar'

const { getId } = useTabbar()

getId()
```

### 打开新标签页

该方法接收一个 `to` 参数，该参数与 `router.push(to)` 一致，点击阅读[参数说明](https://next.router.vuejs.org/zh/api/#routelocationraw)。

通过该方式跳转页面，新增的标签页会插入到当前标签页后面，而直接通过路由跳转，新增的标签页会插入到所有标签页的最后。

```ts
import useTabbar from '@/utils/composables/useTabbar'

const { open } = useTabbar()

open(to)
```

### 关闭当前标签页

该方法接收一个 `to` 参数，该参数与 `router.push(to)` 一致，点击阅读[参数说明](https://next.router.vuejs.org/zh/api/#routelocationraw)。

通过该方式跳转页面，同时可以关闭当前标签页，而直接通过路由跳转，当前标签页会被保留。

```ts
import useTabbar from '@/utils/composables/useTabbar'

const { close } = useTabbar()

close(to)
```

### 关闭指定标签页

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
import useTabbar from '@/utils/composables/useTabbar'

const { closeById } = useTabbar()

closeById(tabId)
```

### 关闭两侧标签页

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
import useTabbar from '@/utils/composables/useTabbar'

const { closeOtherSide } = useTabbar()

closeOtherSide(tabId)
```

### 关闭左侧标签页

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
import useTabbar from '@/utils/composables/useTabbar'

const { closeLeftSide } = useTabbar()

closeLeftSide(tabId)
```

### 关闭右侧标签页

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
import useTabbar from '@/utils/composables/useTabbar'

const { closeRightSide } = useTabbar()

closeRightSide(tabId)
```

### 校验指定标签两侧是否有可关闭的标签

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
import useTabbar from '@/utils/composables/useTabbar'

const { checkCloseOtherSide } = useTabbar()

checkCloseOtherSide(tabId)
```

### 校验指定标签左侧是否有可关闭的标签

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
import useTabbar from '@/utils/composables/useTabbar'

const { checkCloseLeftSide } = useTabbar()

checkCloseLeftSide(tabId)
```

### 校验指定标签右侧是否有可关闭的标签

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
import useTabbar from '@/utils/composables/useTabbar'

const { checkCloseRightSide } = useTabbar()

checkCloseRightSide(tabId)
```

## 事件总线

基于 [mitt](https://github.com/developit/mitt) 简单封装，使用方法请查阅官方文档。

```ts
import eventBus from '@/utils/eventBus'

eventBus.on()
eventBus.emit()
eventBus.off()
```

## 日期 <sup class="pro-badge" />

基于 [dayjs](https://day.js.org/zh-CN/) 简单封装，使用方法请查阅官方文档。

```ts
import dayjs from '@/utils/dayjs'

dayjs()
```