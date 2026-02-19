---
url: /guide/hotkeys.md
---
# 快捷键

在用户下拉列表中可查看当前启用的所有快捷键。

![](/hotkeys.gif){data-zoomable}

## 导航搜索

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  navSearch: {
    /**
     * 是否开启导航搜索快捷键
     * @默认值 `true`
     */
    enableHotkeys: true,
  },
}
```

## 导航

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  menu: {
    /**
     * 是否开启主导航切换快捷键
     * @默认值 `false`
     */
    enableHotkeys: true,
  },
}
```

## 标签栏&#x20;

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  tabbar: {
    /**
     * 是否开启标签栏快捷键
     * @默认值 `false`
     */
    enableHotkeys: true,
  },
}
```

## 页面&#x20;

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  mainPage: {
    /**
     * 是否开启页面快捷键
     * @默认值 `true`
     */
    enableHotkeys: true,
  },
}
```
