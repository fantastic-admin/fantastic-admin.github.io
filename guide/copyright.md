# 版权信息

版权信息位于页面底部显示。

![](/copyright.png){data-zoomable}

## 使用

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  copyright: {
    enable: true,
  },
}
```

路由配置中的 `meta.copyright` 优先级会比应用配置更高，意味着你可以在某些页面中单独控制版权信息的显示或隐藏。

## 网站运行日期

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  copyright: {
    dates: '2020-2022',
  },
}
```

## 公司名称

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  copyright: {
    company: 'Fantastic-admin',
  },
}
```

## 网站地址

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  copyright: {
    website: 'https://fantastic-admin.gitee.io',
  },
}
```

如果未设置网站名称，则该设置将被忽略。

## 网站备案号

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  copyright: {
    beian: '',
  },
}
```