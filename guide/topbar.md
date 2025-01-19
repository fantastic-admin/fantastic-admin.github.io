# 顶栏

标签栏和工具栏统称为顶栏。

## 模式

提供了 3 种模式可选择，可以在应用配置里设置：

```ts {2-10}
const globalSettings: Settings.all = {
  topbar: {
    /**
     * 模式
     * @默认值 `'static'` 静止，跟随页面滚动
     * @可选值 `'fixed'` 固定，不跟随页面滚动，始终固定在顶部
     * @可选值 `'sticky'` 粘性，页面往下滚动时隐藏，往上滚动时显示
     */
    mode: 'sticky',
  },
}
```

![](/topbar.gif){data-zoomable}

## 切换标签栏和工具栏 <Badge type="pro" text="专业版" />

默认标签栏在上，工具栏在下，可以在应用配置里设置切换：

```ts {2-9}
const globalSettings: Settings.all = {
  topbar: {
    /**
     * 是否切换显示标签栏和工具栏的显示位置
     * @默认值 `false` 标签栏在工具栏上面
     * @可选值 `true` 工具栏在标签栏上面
     */
    switchTabbarAndToolbar: true,
  },
}
```

![](/topbar-switchaabbarandtoolbar.png){data-zoomable}
