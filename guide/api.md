---
url: /guide/api.md
---
# 内置 API

## 主导航

### 切换

切换主导航，`index` 为主导航序列数。

```ts
const { switchTo } = useMenu()

switchTo(index)
```

## 主页面

### 刷新

```ts
const { reload } = useAppPage()

reload()
```

### 设置自定义标题&#x20;

```ts
const { setCustomTitle } = useAppPage()

setCustomTitle(title)
```

### 重置自定义标题&#x20;

```ts
const { resetCustomTitle } = useAppPage()

resetCustomTitle()
```

### 最大化&#x20;

```ts
const { maximize } = useAppPage()

// status: true / false
maximize(status)
```

## 标签栏

### 获取当前标签页 tabId

```ts
const { getId } = useAppTabbar()

getId()
```

### 打开新标签页

直接使用 `router.push(to)` 即可。

### 后退并关闭标签页

直接使用 `router.go(delta)` 即可。

### 替换当前标签页

直接使用 `router.replace(to)` 即可。

### 关闭当前标签页

直接使用 `router.close(to)` 即可。注意这是框架扩展的 API ，并非 vue-router 原生提供。

### 关闭指定标签页

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
const { closeById } = useAppTabbar()

closeById(tabId)
```

### 关闭两侧标签页

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
const { closeOtherSide } = useAppTabbar()

closeOtherSide(tabId)
```

### 关闭左侧标签页

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
const { closeLeftSide } = useAppTabbar()

closeLeftSide(tabId)
```

### 关闭右侧标签页

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
const { closeRightSide } = useAppTabbar()

closeRightSide(tabId)
```

### 校验指定标签两侧是否有可关闭的标签

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
const { checkCloseOtherSide } = useAppTabbar()

checkCloseOtherSide(tabId)
```

### 校验指定标签左侧是否有可关闭的标签

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
const { checkCloseLeftSide } = useAppTabbar()

checkCloseLeftSide(tabId)
```

### 校验指定标签右侧是否有可关闭的标签

该方法接收一个 `tabId` 参数，如果不传则默认为当前页的 `tabId` 。

```ts
const { checkCloseRightSide } = useAppTabbar()

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

## 日期&#x20;

基于 [dayjs](https://day.js.org/zh-CN/) 简单封装，使用方法请查阅官方文档。

```ts
import dayjs from '@/utils/dayjs'

dayjs()
```
