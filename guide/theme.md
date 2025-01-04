# 主题

## 框架主题

主题配色存放在 `/themes/index.ts` 文件中，基础版只提供了一套默认主题，在此不做过多介绍。

<Badge type="pro" text="专业版" /> 提供了 8 套主题，每套主题都支持明亮和暗黑两种模式，并且主题支持在运行时共存，可实现动态切换。

![](/theme.gif){data-zoomable}

## 颜色方案

在应用配置中设置：

```ts {2-9}
const globalSettings: Settings.all = {
  app: {
    /**
     * 留空跟随系统
     * light 明亮模式
     * dark 暗黑模式
     */
    colorScheme: '',
  },
}
```

## 主题同步 <Badge type="pro" text="专业版" />

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  app: {
    themeSync: true,
  },
}
```

由于一套主题分别有明亮和暗黑两种模式，开启时将共用一套主题，关闭后可以分别设置明亮和暗黑模式的主题。

## 圆角系数

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  app: {
    radius: 0.5,
  },
}
```

该设置会影响到框架中所有圆角组件的圆角系数，例如按钮、卡片、弹窗等。

## 哀悼模式

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  app: {
    enableMournMode: true,
  },
}
```

## 色弱模式

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  app: {
    enableColorAmblyopiaMode: true,
  },
}
```

## 导航栏风格 <Badge type="pro" text="专业版" />

在应用配置中设置：

```ts {2-10}
const globalSettings: Settings.all = {
  menu: {
    /**
     * 留空默认
     * arrow 箭头
     * line 线条
     * dot 圆点
     */
    style: '',
  },
}
```

![](/menu-style.png){data-zoomable}

## 面包屑导航风格 <Badge type="pro" text="专业版" />

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  breadcrumb: {
    /**
     * 留空默认
     * modern 现代
     */
    style: '',
  },
}
```

![](/breadcrumb-style.png){data-zoomable}

## 标签栏风格 <Badge type="pro" text="专业版" />

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  tabbar: {
    /**
     * fashion 时尚
     * card 卡片
     * square 方块
     */
    style: 'fashion',
  },
}
```

![](/tabbar-style.png){data-zoomable}

同时可以在 `/src/assets/styles/globals.css` 中设置标签栏中页签的宽度，默认为 `150px` 固定宽度：

```scss
:root {
  // 标签页最大最小宽度，两个宽度为同一数值时，则为固定宽度，反之将宽度设置为 unset 则为自适应
  --g-tabbar-tab-max-width: 150px;
  --g-tabbar-tab-min-width: 150px;
}
```

## 开发注意

如果只在明亮或暗黑模式中，选择其中一种模式进行业务开发，那没有什么需要注意的，你可以按照以往的开发习惯进行开发，这也是框架推荐的方式。

但如果需要让用户可以自己选择明亮或暗黑模式，或者是根据浏览器主题来判断是使用明亮还是暗黑模式。这时候开发则需要注意，业务页面里使用到的颜色将不能写成固定值（例如 color 、background-color 、border-color 、box-shadow 等有涉及到颜色的属性），因为同一个色值是无法顾及到明亮和暗黑两种模式的。

这时候我们建议使用 UnoCSS 进行样式编写，例如 `text-dark dark-text-white` 、`bg-green dark-bg-red` 。如果你不习惯使用 UnoCSS ，那也可以使用下面这种方法，在页面中去自定义一些颜色。

```scss
div {
  color: #000;

  [data-theme="dark"] & {
    color: #fff;
  }
}
```

最后分享一篇关于暗黑模式的文章《[教你巧用UI设计中的暗黑模式——Dark Mode](http://www.woshipm.com/pd/4105894.html)》，希望帮助你更好地在暗黑模式下开发出优秀的页面。
