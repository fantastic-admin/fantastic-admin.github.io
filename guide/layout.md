---
url: /guide/layout.md
---
# 布局

## 页宽模式&#x20;

提供 2 种基于页宽(页面宽度)模式，在应用配置中设置：

```ts {2-9}
const globalSettings: Settings.all = {
  layout: {
    /**
     * 页宽模式，当设置为 `'center'` 时，可以去 /src/assets/styles/globals.css 里设置 `--g-app-width` 宽度变量
     * @默认值 `'adaption'` 自适应
     * @可选值 `'center'` 定宽居中
     */
    widthMode: 'adaption',
  },
}
```

:::: tabs
::: tab adaption
![](/layout_width_mode_adaption.gif){data-zoomable}
:::
::: tab center
![](/layout_width_mode_center.gif){data-zoomable}
:::
::::

## 页宽模式应用范围 &#x20;

在应用配置中设置：

```ts {2-9}
const globalSettings: Settings.all = {
  layout: {
    /**
     * 页宽模式作用范围
     * @默认值 `'outer'` 外层
     * @可选值 `'inner'` 内层
     */
    widthModeScope: 'inner',
  },
}
```

## 变量

布局相关的变量存放在 `/src/assets/styles/globals.css` 文件中（注意看注释），均为 CSS 变量。

## 移动端

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  layout: {
    /**
     * 是否开启移动端适配，开启后当页面宽度小于 1024px 时自动切换为移动端展示
     * @默认值 `false`
     */
    enableMobileAdaptation: true,
  },
}
```

开启移动端支持后，当页面宽度小于 `1024px` 时会切换为移动端布局显示，移动端下不支持设置框架布局，以及部分不支持移动端的操作按钮也会进行隐藏，例如“全屏”按钮。

![](/layout-mobile.gif){data-zoomable}

虽然框架本身兼容移动端，但由于后台系统在开发时可能会引用各类第三方插件，这部分的兼容性需要开发者自行适配。

:::tip 建议
由于后台系统属于生产效率工具，而移动端天生不适合复杂的操作，尤其是遇到一些比较复杂的表单，在移动端上操作是极其“恼火”的。

依据作者的开发经验，建议移动端后台可以独立开发一套，在功能上进行删减，保留轻量级的管理操作。

如果打算独立开发一套移动端的系统，建议使用 [Fantastic-mobile](https://fantastic-mobile.hurui.me/)。
:::
