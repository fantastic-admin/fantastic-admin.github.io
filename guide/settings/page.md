---
url: /guide/settings/page.md
---
# 页面

## 切换动画

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  page: {
    transitionMode: '',
  },
})
```

## 载入进度条

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  page: {
    progress: true,
  },
})
```

![](/settings/page-progress.gif){data-zoomable}

## iframe 页面最大保活数量

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  page: {
    iframeKeepAliveMax: 3,
  },
})
```

## 快捷键

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  page: {
    hotkeys: true,
  },
})
```
