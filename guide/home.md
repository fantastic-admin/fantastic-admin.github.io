# 主页

主页是框架的欢迎页，即登录后的第一个页面，该页面无需开发者手动配置路由。

主页对应的页面文件为 `/src/views/index.vue` 。

## 关闭主页

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  home: {
    enable: false,
  },
}
```

关闭主页后，登录后将直接跳转到次导航下第一个导航对应的页面，效果如下：

![](/home-disable.gif){data-zoomable}

## 标题

如果要更改主页显示的标题，可以在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  home: {
    title: '主页',
  },
}
```

但需要注意，专业版里如果框架开启国际化后，在这里修改并不会生效，因此需要在语言包中进行修改，更多请阅读《[国际化 - 语言包](i18n#语言包)》。