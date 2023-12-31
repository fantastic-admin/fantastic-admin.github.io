# 工具栏

工具栏主要是红框处各类功能图标。

![](/toolbar.png){data-zoomable}

## 收藏夹 <sup class="pro-badge" />

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    favorites: true,
  },
}
```

详细可阅读《[收藏夹](favorites)》。

## 面包屑导航

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    breadcrumb: true,
  },
}
```

移动端访问时，会隐藏面包屑导航。

当使用文件系统路由时，将无法使用面包屑导航，详细可阅读《[基于文件系统的路由](file-system-route)》。

## 导航搜索

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    navSearch: true,
  },
}
```

## 通知中心 <sup class="pro-badge" />

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    notification: true,
  },
}
```

通知中心不涉及具体业务，需开发者自行实现，相关文件在：

- `/src/layouts/components/Tools/Notification/index.vue` 通知中心下拉预览面板
- `/src/views/personal/notification.vue` 通知中心页面

## 国际化 <sup class="pro-badge" />

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    i18n: true,
  },
}
```

如果设置为不启用，并不代表不支持国际化切换，只是不会在工具栏显示切换语言的图标，详细可阅读《[国际化](i18n)》。

## 浏览器全屏

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    fullscreen: true,
  },
}
```

## 页面刷新

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    pageReload: true,
  },
}
```

## 颜色主题

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    colorScheme: true,
  },
}
```

如果设置为不启用，并不代表不支持颜色主题切换，只是不会在工具栏显示切换颜色主题的图标。

## 布局 <sup class="pro-badge" />

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    layout: ['favorites', 'breadcrumb', '->', 'navSearch', 'notification', 'i18n', 'fullscreen', 'pageReload', 'colorScheme'],
  },
}
```

可自定义摆放位置和顺序，其中 `->` 为分隔符，用于分隔左右两侧的工具栏。修改时请确保提供的所有值都存在，不可删减。