# 面包屑导航

## 使用

在应用配置里设置：

```ts {2-4}
const globalSettings: Settings.all = {
  breadcrumb: {
    enable: true,
  },
}
```

当使用文件系统路由时，将无法使用面包屑导航，详细可阅读《[基于文件系统的路由](file-system-route)》。

## 显示主导航

在应用配置里设置：

```ts {2-4}
const globalSettings: Settings.all = {
  breadcrumb: {
    enableMainMenu: true,
  },
}
```

![](/breadcrumb-mainmenu.png){data-zoomable}