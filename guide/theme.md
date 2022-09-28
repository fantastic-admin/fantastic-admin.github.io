# 主题

## 框架主题

### 基础版

基础版主题样式存放在 `/src/assets/styles/themes.scss` 文件中，均为 css 变量，修改后即可在页面上查看效果，注意明亮和暗黑模式的区分。

### 专业版

与基础版不同，专业版默认提供了 6 款主题，并且主题在运行时共存，可实现动态切换。

```ts {2-13}
const globalSettings: Settings.all = {
  app: {
    /**
     * 主题
     * default 默认
     * sys_green 绿色
     * sys_orange 橙色
     * sys_pink 粉色
     * sys_grey 灰色
     * sys_yellow 黄色
     */
    theme: 'default',
  },
}
```

如果框架提供的主题风格满足不了你的需求，你还可以自定义新的主题。首先先打开默认主题了解下代码结构 `/src/assets/styles/themes/default.scss` ，主题的样式都存放在 `$theme-default` 这个变量里，注意明亮模式和暗黑模式的区分，两者里面属性名是完全一致的。

```scss
$theme-default: (
  // 明亮模式
  "": (
    ...
  ),
  // 暗黑模式
  "dark": (
    ...
  )
)
```

所以如果要创建一个新主题，例如要增加一个红色主题，可以将 `default.scss` 文件复制一份，并修改文件名为 `red.scss` ，同时将文件里的 `$theme-default` 变量名也修改为 `$theme-red` ，然后在 `/src/assets/styles/resources/themes.scss` 文件中增加以下代码：

```scss {7,16}
@use "../themes/default.scss" as *;
@use "../themes/green.scss" as *;
@use "../themes/orange.scss" as *;
@use "../themes/pink.scss" as *;
@use "../themes/grey.scss" as *;
@use "../themes/yellow.scss" as *;
@use "../themes/red.scss" as *;

$themes: (
  default: $theme-default,
  sys_green: $theme-green,
  sys_orange: $theme-orange,
  sys_pink: $theme-pink,
  sys_grey: $theme-grey,
  sys_yellow: $theme-yellow,
  red: $theme-red
);
```

最后在应用配置里修改主题为 `red` 就可以调用这个我们创建的主题了。

```ts {2-4}
const globalSettings: Settings.all = {
  app: {
    theme: 'red',
  },
}
```

## Element Plus 主题

> 详细可阅读 Element Plus 官方文档《[自定义主题](https://element-plus.gitee.io/zh-CN/guide/theming.html)》。

你可以在 `/src/assets/style/element-plus/index.scss` 和 `/src/assets/style/element-plus/dark.scss` 文件中分别修改 Element Plus 的明亮和暗黑模式下的预设样式。

你可以到 Element Plus 的 [`packages/theme-chalk/src/common/var.scss`](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss) 和 [`packages/theme-chalk/src/dark/var.scss`](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/dark/var.scss) 中查找更多明亮和暗黑模式下的 scss 变量。

## Element Plus 样式

有时候，我们可能需要重写 Element Plus 组件的一些默认样式，除了可以在 SFC 单文件组件里单独重写外，你也可以在 `/src/assets/style/element-plus/override.scss` 文件中进行全局重写。

## 开发注意

如果只在明亮或暗黑模式中，选择其中一种模式进行业务开发，那没有什么需要注意的，你可以按照以往的开发习惯进行开发，这也是框架推荐的方式。

但如果需要让用户可以自己选择明亮或暗黑模式，或者是根据浏览器主题来判断是使用明亮还是暗黑模式。这时候开发则需要注意，业务页面里使用到的颜色将不能写成固定值（例如 color 、background-color 、border-color 、box-shadow 等有涉及到颜色的属性），因为同一个色值是无法顾及到明亮和暗黑两种模式的。

这时候建议使用 Element Plus 原生的 css 变量来代替原有的颜色，你可以在 Element Plus 官网[这里](https://element-plus.org/zh-CN/component/color.html#%E4%B8%BB%E8%89%B2)了解到这些颜色变量。为了方便，我们将这些颜色变量都整理了出来。

```css
/* 主色 primary */
var(--el-color-primary)
var(--el-color-primary-light-3)
var(--el-color-primary-light-5)
var(--el-color-primary-light-7)
var(--el-color-primary-light-9)
var(--el-color-primary-dark-2)
/* 辅助色 success */
var(--el-color-success)
var(--el-color-success-light-3)
var(--el-color-success-light-5)
var(--el-color-success-light-7)
var(--el-color-success-light-9)
var(--el-color-success-dark-2)
/* 辅助色 warning */
var(--el-color-warning)
var(--el-color-warning-light-3)
var(--el-color-warning-light-5)
var(--el-color-warning-light-7)
var(--el-color-warning-light-9)
var(--el-color-warning-dark-2)
/* 辅助色 danger */
var(--el-color-danger)
var(--el-color-danger-light-3)
var(--el-color-danger-light-5)
var(--el-color-danger-light-7)
var(--el-color-danger-light-9)
var(--el-color-danger-dark-2)
/* 辅助色 error */
var(--el-color-error)
var(--el-color-error-light-3)
var(--el-color-error-light-5)
var(--el-color-error-light-7)
var(--el-color-error-light-9)
var(--el-color-error-dark-2)
/* 辅助色 info */
var(--el-color-info)
var(--el-color-info-light-3)
var(--el-color-info-light-5)
var(--el-color-info-light-7)
var(--el-color-info-light-9)
var(--el-color-info-dark-2)
/* 背景 */
var(--el-bg-color)
var(--el-bg-color-page)
var(--el-bg-color-overlay)
/* 文字 */
var(--el-text-color-primary)
var(--el-text-color-regular)
var(--el-text-color-secondary)
var(--el-text-color-placeholder)
var(--el-text-color-disabled)
/* 边框 */
var(--el-border-color)
var(--el-border-color-light)
var(--el-border-color-lighter)
var(--el-border-color-extra-light)
var(--el-border-color-dark)
var(--el-border-color-darker)
/* 填充 */
var(--el-fill-color)
var(--el-fill-color-light)
var(--el-fill-color-lighter)
var(--el-fill-color-extra-light)
var(--el-fill-color-dark)
var(--el-fill-color-darker)
var(--el-fill-color-blank)
/* box-shadow */
var(--el-box-shadow)
var(--el-box-shadow-light)
var(--el-box-shadow-lighter)
var(--el-box-shadow-dark)
/* 禁用 */
var(--el-disabled-bg-color)
var(--el-disabled-text-color)
var(--el-disabled-border-color)
/* 遮罩 */
var(--el-overlay-color)
var(--el-overlay-color-light)
var(--el-overlay-color-lighter)
/* mask */
var(--el-mask-color)
var(--el-mask-color-extra-light)
```

另外，你可能还会用到以下这些 transition 变量，因为在明亮和暗黑模式切换过程中，如果没有 transition 的过渡效果，就会变得很突兀，和框架整体动效风格也不统一。

```css
var(--el-transition-all)
var(--el-transition-fade)
var(--el-transition-fade-linear)
var(--el-transition-md-fade)
var(--el-transition-color)
var(--el-transition-border)
var(--el-transition-box-shadow)
```

除此之外，你还可以使用下面这种方法，在页面中去自定义一些颜色。

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