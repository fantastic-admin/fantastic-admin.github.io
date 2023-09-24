# 工具栏

工具栏主要是红框处各类功能图标。

![](/toolbar.png){data-zoomable}

## 通知中心 <sup class="pro-badge" />

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    enableNotification: true,
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
    enableI18n: true,
  },
}
```

如果设置为不启用，并不代表不支持国际化切换，只是不会在工具栏显示切换语言的图标。

## 浏览器全屏

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    enableFullscreen: true,
  },
}
```

## 页面刷新

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    enablePageReload: true,
  },
}
```

## 颜色主题

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  toolbar: {
    enableColorScheme: true,
  },
}
```

如果设置为不启用，并不代表不支持颜色主题切换，只是不会在工具栏显示切换颜色主题的图标。