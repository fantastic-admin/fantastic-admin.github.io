---
url: /guide/settings/tabbar.md
---
# 标签栏

## 风格&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  tabbar: {
    style: 'fashion',
  },
})
```

:::: tabs
::: tab \[默认]
![](/settings/tabbar-style-empty.png){data-zoomable}
:::
::: tab fashion
![](/settings/tabbar-style-fashion.png){data-zoomable}
:::
::: tab card
![](/settings/tabbar-style-card.png){data-zoomable}
:::
::: tab square
![](/settings/tabbar-style-square.png){data-zoomable}
:::
::::

## 最小最大宽度&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  tabbar: {
    minMaxWidth: ['unset', 'unset'],
  },
})
```

:::: tabs
::: tab \[150, 150]
![](/settings/tabbar-minMaxWidth-150-150.png){data-zoomable}
:::
::: tab \[150, 'unset']
![](/settings/tabbar-minMaxWidth-150-unset.png){data-zoomable}
:::
::: tab \['unset', 100]
![](/settings/tabbar-minMaxWidth-unset-100.png){data-zoomable}
:::
::: tab \['unset', 'unset']
![](/settings/tabbar-minMaxWidth-unset-unset.png){data-zoomable}
:::
::::

## 图标

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  tabbar: {
    icon: true,
  },
})
```

会根据当前路由配置中的 `meta.icon` 属性来显示图标，如果未设置，则会根据路由嵌套层级，依次向上查找父级路由的 `meta.icon` 属性进行显示。

## 双击执行动作&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  tabbar: {
    dblclickAction: 'close',
  },
})
```

## 记忆功能&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  tabbar: {
    memory: true,
  },
})
```

开启记忆功能后，框架会将当前标签页的状态记录到浏览器 `localStorage` 中，刷新页面或重新登录会自动恢复，效果如下：

![](/settings/tabbar-memory.gif){data-zoomable}

如果需要改为服务端存储，请到 `apps/<app>/src/store/modules/app/tabbar.ts` 中调整 `storageTo` 的值，并在 `apps/<app>/src/api/modules/app.ts` 中实现 `tabbar()` 和 `tabbarEdit()` 两个接口。

:::tip 建议
为减轻后端处理，数据会直接以 JSON 字符串进行存储，建议后端可以在用户表增加相关字段，并将字段类型设为 `longtext` 。
:::

## 快捷键

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  tabbar: {
    hotkeys: true,
  },
})
```
