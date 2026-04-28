---
url: /guide/settings/theme.md
---
# 主题

主题配色存放在 `packages/themes` 子包中，基础版仅提供一套明暗风格的默认主题。

&#x20;则分别提供了 **7** 款基础色 和 **18** 款主题色。

![](/settings/theme.gif){data-zoomable}

## 主题同步&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  theme: {
    sync: true,
  },
})
```

:::: tabs
::: tab 开启
![](/settings/theme-sync-on.gif){data-zoomable}
:::
::: tab 关闭
![](/settings/theme-sync-off.gif){data-zoomable}
:::
::::

开启后，切换颜色方案时会共用同一套基础色和主题色；关闭后，亮色和暗色模式可以分别指定不同的基础色与主题色。

## 亮色基础色&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  theme: {
    baseColorLight: 'neutral',
  },
})
```

该配置对应 `packages/themes/index.ts` 中的 `BASE_COLORS`。它主要影响：

* 页面背景与前景文字
* 卡片、弹层、边框、输入框
* `muted`、`accent`、`ring` 等基础 token

## 暗色基础色&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  theme: {
    baseColorDark: 'neutral',
  },
})
```

如果只是想让暗色模式拥有不同的底色风格，通常只需要把 `sync` 设为 `false`，然后单独指定 `baseColorDark`。

## 亮色主题&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  theme: {
    light: 'default',
  },
})
```

该配置对应 `packages/themes/index.ts` 中的 `THEMES`。它主要影响：

* 主按钮、高亮态、激活态的 `primary`
* 次级按钮、辅助块的 `secondary`

## 暗色主题&#x20;

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  theme: {
    dark: 'default',
  },
})
```

## 颜色方案

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  theme: {
    colorScheme: '',
  },
})
```

![](/settings/theme-colorScheme.gif){data-zoomable}

当设置为 `''` 时，将跟随系统。

## 圆角系数

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  theme: {
    radius: 0.5,
  },
})
```

该设置会影响框架中所有圆角组件的圆角系数，例如按钮、卡片、弹窗等。

![](/settings/theme-radius.gif){data-zoomable}

## 色弱模式

在应用配置中设置：

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  theme: {
    colorAmblyopia: true,
  },
})
```

## 常见组合

### 同一套基础色与主题色

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  theme: {
    sync: true,
    baseColorLight: 'neutral',
    baseColorDark: 'neutral',
    light: 'default',
    dark: 'default',
  },
})
```

### 亮暗模式使用不同风格

```ts twoslash
import { setSettings } from '@fantastic-admin/settings'

export default setSettings({
  theme: {
    sync: false,
    baseColorLight: 'stone',
    baseColorDark: 'taupe',
    light: 'blue',
    dark: 'violet',
  },
})
```

## 开发注意

如果只在明亮或暗黑模式中，选择其中一种模式进行业务开发，那没有什么需要注意的，你可以按照以往的开发习惯进行开发，这也是框架推荐的方式。

但如果需要让用户可以自己选择明亮或暗黑模式，或者根据浏览器主题自动切换，则业务页面中涉及颜色的样式不能写成单一固定值，因为同一个色值很难同时兼顾明亮和暗黑两种模式。

优先建议使用 UnoCSS 或 CSS 变量。例如：

```scss
div {
  color: oklch(var(--foreground));
  background-color: oklch(var(--background));
}
```

如果业务需要根据特定主题组合做差异化样式，可以使用当前主题系统的选择器：

```scss
div {
  .dark & {
    box-shadow: 0 0 0 1px rgb(255 255 255 / 10%);
  }

  [data-base-color="stone"] & {
    border-style: dashed;
  }

  [data-theme="blue"] & {
    outline-color: oklch(var(--primary));
  }
}
```

## 扩展主题

基础版可直接修改 `packages/themes/index.ts` ， 主题系统设计为 3 层：

* `BASE_COLORS`：基础色，负责背景、文字、边框、输入框、焦点环等整套基础 token
* `THEMES`：主题色，负责 `primary` / `secondary` 这一层品牌色覆盖
* `FRAMEWORK_COLORS`：框架区域配色，负责顶部、侧边栏、标签栏、主内容区等全局布局颜色

如果希望让 AI 帮你生成这一套结构，建议使用《[fa-theme-customizer](../skills/fa-theme-customizer)》技能。
