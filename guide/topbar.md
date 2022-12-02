# 顶栏

## 固定顶栏

当页面滚动时，顶栏始终固定显示，可以在应用配置里设置关闭：

```ts {2-4}
const globalSettings: Settings.all = {
  topbar: {
    fixed: false,
  },
}
```

<ZoomImg src="/tabbar-fixed.gif" />

## 切换标签栏和工具栏

默认标签栏在上，工具栏在下，可以在应用配置里设置切换：

```ts {2-4}
const globalSettings: Settings.all = {
  topbar: {
    switchTabbarAndToolbar: true,
  },
}
```

<ZoomImg src="/tabbar-switchaabbarandtoolbar.gif" />