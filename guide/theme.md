# 主题

## 框架主题

主题配色存放在 `/themes/index.ts` 文件中，基础版和专业版内容略有不同。

### 基础版

```ts
import { hex2rgba } from '@unocss/preset-mini/utils'

export const lightTheme = {
  'color-scheme': 'light', // 请勿删除，用于判断是否为明亮主题
  // 内置 UI
  '--ui-primary': hex2rgba('#0f0f0f')!.join(' '),
  '--ui-text': hex2rgba('#fcfcfc')!.join(' '),
  // 主体
  '--g-bg': '#f2f2f2',
  '--g-container-bg': '#fff',
  '--g-border-color': '#f2f2f2',
  // 头部
  '--g-header-bg': '#fff',
  '--g-header-color': '#0f0f0f',
  '--g-header-menu-color': '#0f0f0f',
  '--g-header-menu-hover-bg': '#dde1e3',
  '--g-header-menu-hover-color': '#0f0f0f',
  '--g-header-menu-active-bg': '#0f0f0f',
  '--g-header-menu-active-color': '#fff',
  // 主导航
  '--g-main-sidebar-bg': '#f2f2f2',
  '--g-main-sidebar-menu-color': '#0f0f0f',
  '--g-main-sidebar-menu-hover-bg': '#dde1e3',
  '--g-main-sidebar-menu-hover-color': '#0f0f0f',
  '--g-main-sidebar-menu-active-bg': '#0f0f0f',
  '--g-main-sidebar-menu-active-color': '#fff',
  // 次导航
  '--g-sub-sidebar-bg': '#fff',
  '--g-sub-sidebar-logo-bg': '#0f0f0f',
  '--g-sub-sidebar-logo-color': '#fff',
  '--g-sub-sidebar-menu-color': '#0f0f0f',
  '--g-sub-sidebar-menu-hover-bg': '#dde1e3',
  '--g-sub-sidebar-menu-hover-color': '#0f0f0f',
  '--g-sub-sidebar-menu-active-bg': '#0f0f0f',
  '--g-sub-sidebar-menu-active-color': '#fff',
}

export const darkTheme = {
  'color-scheme': 'dark',
  // 内置 UI
  '--ui-primary': hex2rgba('#e5e5e5')!.join(' '),
  '--ui-text': hex2rgba('#0f0f0f')!.join(' '),
  // 主体
  '--g-bg': '#0a0a0a',
  '--g-container-bg': '#141414',
  '--g-border-color': '#15191e',
  // 头部
  '--g-header-bg': '#141414',
  '--g-header-color': '#e5e5e5',
  '--g-header-menu-color': '#a8a29e',
  '--g-header-menu-hover-bg': '#141414',
  '--g-header-menu-hover-color': '#e5e5e5',
  '--g-header-menu-active-bg': '#e5e5e5',
  '--g-header-menu-active-color': '#0a0a0a',
  // 主导航
  '--g-main-sidebar-bg': '#0a0a0a',
  '--g-main-sidebar-menu-color': '#a8a29e',
  '--g-main-sidebar-menu-hover-bg': '#141414',
  '--g-main-sidebar-menu-hover-color': '#e5e5e5',
  '--g-main-sidebar-menu-active-bg': '#e5e5e5',
  '--g-main-sidebar-menu-active-color': '#0a0a0a',
  // 次导航
  '--g-sub-sidebar-bg': '#141414',
  '--g-sub-sidebar-logo-bg': '#0f0f0f',
  '--g-sub-sidebar-logo-color': '#e5e5e5',
  '--g-sub-sidebar-menu-color': '#a8a29e',
  '--g-sub-sidebar-menu-hover-bg': '#0a0a0a',
  '--g-sub-sidebar-menu-hover-color': '#e5e5e5',
  '--g-sub-sidebar-menu-active-bg': '#e5e5e5',
  '--g-sub-sidebar-menu-active-color': '#0a0a0a',
}
```

### 专业版

与基础版不同，专业版默认提供了 12 款主题，明亮和暗黑模式各 6 款，并且主题在运行时共存，可实现动态切换。

```ts
import { hex2rgba } from '@unocss/preset-mini/utils'

export default {
  light: {
    // 颜色主题
    'color-scheme': 'light',
    // 内置 UI
    '--ui-primary': hex2rgba('#0f0f0f')!.join(' '),
    '--ui-text': hex2rgba('#fcfcfc')!.join(' '),
    // 主体
    '--g-bg': '#f2f2f2',
    '--g-container-bg': '#fff',
    '--g-border-color': '#f2f2f2',
    // 头部
    '--g-header-bg': '#fff',
    '--g-header-color': '#0f0f0f',
    '--g-header-menu-color': '#0f0f0f',
    '--g-header-menu-hover-bg': '#dde1e3',
    '--g-header-menu-hover-color': '#0f0f0f',
    '--g-header-menu-active-bg': '#0f0f0f',
    '--g-header-menu-active-color': '#fff',
    // 主导航
    '--g-main-sidebar-bg': '#f2f2f2',
    '--g-main-sidebar-menu-color': '#0f0f0f',
    '--g-main-sidebar-menu-hover-bg': '#dde1e3',
    '--g-main-sidebar-menu-hover-color': '#0f0f0f',
    '--g-main-sidebar-menu-active-bg': '#0f0f0f',
    '--g-main-sidebar-menu-active-color': '#fff',
    // 次导航
    '--g-sub-sidebar-bg': '#fff',
    '--g-sub-sidebar-logo-bg': '#0f0f0f',
    '--g-sub-sidebar-logo-color': '#fff',
    '--g-sub-sidebar-menu-color': '#0f0f0f',
    '--g-sub-sidebar-menu-hover-bg': '#dde1e3',
    '--g-sub-sidebar-menu-hover-color': '#0f0f0f',
    '--g-sub-sidebar-menu-active-bg': '#0f0f0f',
    '--g-sub-sidebar-menu-active-color': '#fff',
    // 标签栏
    '--g-tabbar-dividers-bg': '#a3a3a3',
    '--g-tabbar-tab-color': '#a3a3a3',
    '--g-tabbar-tab-hover-bg': '#e5e5e5',
    '--g-tabbar-tab-hover-color': '#0f0f0f',
    '--g-tabbar-tab-active-color': '#0f0f0f',
  },
  ...
  dark: {
    // 颜色主题
    'color-scheme': 'dark',
    // 内置 UI
    '--ui-primary': hex2rgba('#e5e5e5')!.join(' '),
    '--ui-text': hex2rgba('#0f0f0f')!.join(' '),
    // 主体
    '--g-bg': '#0a0a0a',
    '--g-container-bg': '#141414',
    '--g-border-color': '#15191e',
    // 头部
    '--g-header-bg': '#141414',
    '--g-header-color': '#e5e5e5',
    '--g-header-menu-color': '#a8a29e',
    '--g-header-menu-hover-bg': '#141414',
    '--g-header-menu-hover-color': '#e5e5e5',
    '--g-header-menu-active-bg': '#e5e5e5',
    '--g-header-menu-active-color': '#0a0a0a',
    // 主导航
    '--g-main-sidebar-bg': '#0a0a0a',
    '--g-main-sidebar-menu-color': '#a8a29e',
    '--g-main-sidebar-menu-hover-bg': '#141414',
    '--g-main-sidebar-menu-hover-color': '#e5e5e5',
    '--g-main-sidebar-menu-active-bg': '#e5e5e5',
    '--g-main-sidebar-menu-active-color': '#0a0a0a',
    // 次导航
    '--g-sub-sidebar-bg': '#141414',
    '--g-sub-sidebar-logo-bg': '#0f0f0f',
    '--g-sub-sidebar-logo-color': '#e5e5e5',
    '--g-sub-sidebar-menu-color': '#a8a29e',
    '--g-sub-sidebar-menu-hover-bg': '#0a0a0a',
    '--g-sub-sidebar-menu-hover-color': '#e5e5e5',
    '--g-sub-sidebar-menu-active-bg': '#e5e5e5',
    '--g-sub-sidebar-menu-active-color': '#0a0a0a',
    // 标签栏
    '--g-tabbar-dividers-bg': '#a8a29e',
    '--g-tabbar-tab-color': '#a8a29e',
    '--g-tabbar-tab-hover-bg': '#1b1b1b',
    '--g-tabbar-tab-hover-color': '#e5e5e5',
    '--g-tabbar-tab-active-color': '#e5e5e5',
  },
  ...
}
```

![](/theme.gif){data-zoomable}

如果框架提供的主题风格满足不了你的需求，你还可以自定义新的主题。

```ts
import { hex2rgba } from '@unocss/preset-mini/utils'

export default {
  newThemeName: { // 主题名称
    // 颜色主题
    'color-scheme': 'light', // 可选值 light/dark ，表示该主题在明亮或暗黑模式下的配色
    // 内置 UI
    '--ui-primary': hex2rgba('#409eff')!.join(' '),
    '--ui-text': hex2rgba('#fcfcfc')!.join(' '),
    // 主体
    '--g-bg': '#f2f2f2',
    '--g-container-bg': '#fff',
    '--g-border-color': '#f2f2f2',
    // 头部
    '--g-header-bg': '#222b45',
    '--g-header-color': '#fff',
    '--g-header-menu-color': '#fff',
    '--g-header-menu-hover-bg': '#334067',
    '--g-header-menu-hover-color': '#fff',
    '--g-header-menu-active-bg': '#334067',
    '--g-header-menu-active-color': '#fff',
    // 主导航
    '--g-main-sidebar-bg': '#222b45',
    '--g-main-sidebar-menu-color': '#fff',
    '--g-main-sidebar-menu-hover-bg': '#334067',
    '--g-main-sidebar-menu-hover-color': '#fff',
    '--g-main-sidebar-menu-active-bg': '#334067',
    '--g-main-sidebar-menu-active-color': '#fff',
    // 次导航
    '--g-sub-sidebar-bg': '#fff',
    '--g-sub-sidebar-logo-bg': '#222b45',
    '--g-sub-sidebar-logo-color': '#fff',
    '--g-sub-sidebar-menu-color': '#0f0f0f',
    '--g-sub-sidebar-menu-hover-bg': '#dde1e3',
    '--g-sub-sidebar-menu-hover-color': '#0f0f0f',
    '--g-sub-sidebar-menu-active-bg': '#409eff',
    '--g-sub-sidebar-menu-active-color': '#fff',
    // 标签栏
    '--g-tabbar-dividers-bg': '#a3a3a3',
    '--g-tabbar-tab-color': '#a3a3a3',
    '--g-tabbar-tab-hover-bg': '#e5e5e5',
    '--g-tabbar-tab-hover-color': '#0f0f0f',
    '--g-tabbar-tab-active-color': '#0f0f0f',
  },
}
```

最后在应用配置中使用该主题：

```ts {2-5}
const globalSettings: Settings.all = {
  app: {
    // 如果主题是暗黑模式下使用的，则 darkTheme: 'newThemeName'
    lightTheme: 'newThemeName',
  },
}
```

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

## 导航栏风格 <sup class="pro-badge" />

### 填充风格

在应用配置中设置：

```ts {2-5}
const globalSettings: Settings.all = {
  menu: {
    // 导航栏是否圆角
    isRounded: true,
  },
}
```

![](/menu-fill-style.png){data-zoomable}

### 激活风格

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
    menuActiveStyle: '',
  },
}
```

![](/menu-active-style.png){data-zoomable}

## 面包屑导航风格 <sup class="pro-badge" />

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

## 标签栏风格 <sup class="pro-badge" />

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  tabbar: {
    /**
     * fashion 时尚
     * card 卡片
     * square 方块
     */
    tabStyle: 'fashion',
  },
}
```

![](/tabbar-style.png){data-zoomable}

## 开发注意

如果只在明亮或暗黑模式中，选择其中一种模式进行业务开发，那没有什么需要注意的，你可以按照以往的开发习惯进行开发，这也是框架推荐的方式。

但如果需要让用户可以自己选择明亮或暗黑模式，或者是根据浏览器主题来判断是使用明亮还是暗黑模式。这时候开发则需要注意，业务页面里使用到的颜色将不能写成固定值（例如 color 、background-color 、border-color 、box-shadow 等有涉及到颜色的属性），因为同一个色值是无法顾及到明亮和暗黑两种模式的。

这时候我们建议使用 UnoCSS 进行样式编写，例如 `text-dark dark:text-white` 、`bg-green dark:bg-red` 。如果你不习惯使用 UnoCSS ，那也可以使用下面这种方法，在页面中去自定义一些颜色。

```scss
html {
  div {
    color: #000;
  }
  &.dark div {
    color: #fff;
  }
}
```

最后分享一篇关于暗黑模式的文章《[教你巧用UI设计中的暗黑模式——Dark Mode](http://www.woshipm.com/pd/4105894.html)》，希望帮助你更好地在暗黑模式下开发出优秀的页面。