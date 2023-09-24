# 动态标题

让网页标题显示路由配置的 `meta.title` 字段。

## 使用

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  app: {
    enableDynamicTitle: true,
  },
}
```

效果如下：

![](/dynamic-title.gif){data-zoomable}