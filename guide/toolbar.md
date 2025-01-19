# 工具栏

工具栏主要是红框处各类功能图标。

![](/toolbar.png){data-zoomable}

## 收藏夹 <Badge type="pro" text="专业版" />

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    favorites: true,
  },
}
```

开启后可将常用的导航菜单添加进收藏夹，方便快速访问。

![](/favorites.png){data-zoomable}

### 数据存储

收藏夹默认存储在浏览器本地 localStorage 里，如果需要将数据存储到服务器，可以通过 `favorites.storageTo` 配置项来实现，具体配置如下：

```ts {2-4}
const globalSettings: Settings.all = {
  favorites: {
    storageTo: 'server',
  },
}
```

然后到 `/src/api/modules/user.ts` 中找到 `favorites()` 和 `favoritesEdit()` 这两个函数，并分别修改这两个函数的请求地址。

:::tip 建议
为减轻后端处理，数据会直接以 JSON 字符串进行存储，建议后端可以在用户表增加相关字段，并将字段类型设为 `lonetext` 。
:::

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

### 风格 <Badge type="pro" text="专业版" />

详细可阅读《[主题 - 面包屑导航风格](theme#面包屑导航风格)》。

### 显示主导航 <Badge type="pro" text="专业版" />

在应用配置里设置：

```ts {2-4}
const globalSettings: Settings.all = {
  breadcrumb: {
    enableMainMenu: true,
  },
}
```

![](/breadcrumb-mainmenu.png){data-zoomable}

## 导航搜索

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    navSearch: true,
  },
}
```

## 通知中心 <Badge type="pro" text="专业版" />

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

## 国际化 <Badge type="pro" text="专业版" />

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

## 布局 <Badge type="pro" text="专业版" />

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    layout: ['favorites', 'breadcrumb', '->', 'navSearch', 'notification', 'i18n', 'fullscreen', 'pageReload', 'colorScheme'],
  },
}
```

可自定义摆放位置和顺序，其中 `->` 为分隔符，用于分隔左右两侧的工具栏。修改时请确保提供的所有值都存在，不可删减。