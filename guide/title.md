# 动态标题

让网页标题显示路由配置的 `meta.title` 字段。

## 使用

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  app: {
    /**
     * 是否开启动态标题
     * @默认值 `false`
     */
    enableDynamicTitle: true,
  },
}
```

效果如下：

![](/dynamic-title.gif){data-zoomable}
