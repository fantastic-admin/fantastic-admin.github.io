# 版权信息

版权信息位于页面底部显示。

![](/copyright.png){data-zoomable}

## 使用

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  copyright: {
    /**
     * 是否开启底部版权，同时在路由 meta 对象里可以单独设置某个路由是否显示底部版权信息
     * @默认值 `false`
     */
    enable: true,
  },
}
```

路由配置中的 `meta.copyright` 优先级会比应用配置更高，意味着你可以在某些页面中单独控制版权信息的显示或隐藏。

## 网站运行日期

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  copyright: {
    /**
     * 网站运行日期
     * @默认值 `''`
     */
    dates: '2020-2022',
  },
}
```

## 公司名称

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  copyright: {
    /**
     * 公司名称
     * @默认值 `''`
     */
    company: 'Fantastic-admin',
  },
}
```

## 网站地址

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  copyright: {
    /**
     * 网站地址
     * @默认值 `''`
     */
    website: 'https://fantastic-admin.hurui.me',
  },
}
```

如果未设置公司名称，则该设置将被忽略。

## 备案号

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  copyright: {
    /**
     * 网站备案号
     * @默认值 `''`
     */
    beian: '',
  },
}
```
