# 顶栏

## 模式

提供了 3 种模式可选择，可以在应用配置里设置：

```ts {2-9}
const globalSettings: Settings.all = {
  topbar: {
    /**
     * static 默认，静止，跟随页面滚动
     * fixed 固定，不跟随页面滚动，始终固定在顶部
     * sticky 粘性，页面往下滚动时隐藏，往上滚动时显示
     */
    mode: 'static',
  },
}
```

![](/topbar.gif){data-zoomable}

## 切换标签栏和工具栏 <sup class="pro-badge" />

默认标签栏在上，工具栏在下，可以在应用配置里设置切换：

```ts {2-4}
const globalSettings: Settings.all = {
  topbar: {
    switchTabbarAndToolbar: true,
  },
}
```

![](/topbar-switchaabbarandtoolbar.gif){data-zoomable}