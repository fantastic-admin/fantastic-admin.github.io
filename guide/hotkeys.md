# 快捷键

在用户下拉列表中可查看当前启用的所有快捷键。

![](/hotkeys.gif){data-zoomable}

## 导航搜索

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  navSearch: {
    enableHotkeys: true,
  },
}
```

## 导航

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    enableHotkeys: true,
  },
}
```

## 标签栏 <sup class="pro-badge" />

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  tabbar: {
    enableHotkeys: true,
  },
}
```

## 页面 <sup class="pro-badge" />

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  mainPage: {
    enableHotkeys: true,
  },
}
```