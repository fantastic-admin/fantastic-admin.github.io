# 布局

通过 5 种导航栏模式和 4 种页宽模式的组合搭配，可实现 20 种布局结构，再搭配默认提供的 6 款主题，**即可实现上百种界面风格**。

## 导航栏模式

在应用配置中设置，可实现 5 种导航栏模式：

- 顶部模式
- 侧边栏模式（含主导航）
- 侧边栏模式（无主导航）
- 侧边栏精简模式 <sup class="pro-badge" />
- 顶部精简模式 <sup class="pro-badge" />

### 顶部模式

![](/menu-mode-head.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    menuMode: 'head',
  },
}
```

### 侧边栏模式（含主导航）

![](/menu-mode-side.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    menuMode: 'side',
  },
}
```

### 侧边栏模式（无主导航）

![](/menu-mode-single.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    menuMode: 'single',
  },
}
```

### 侧边栏精简模式 <sup class="pro-badge" />

![](/menu-mode-only-side.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    menuMode: 'only-side',
  },
}
```

### 顶部精简模式 <sup class="pro-badge" />

![](/menu-mode-only-head.png){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  menu: {
    menuMode: 'only-head',
  },
}
```

## 页宽模式 <sup class="pro-badge" />

在应用配置中设置，可实现 4 种基于页宽(页面宽度)模式：

- 自适应
- 自适应（有最小宽度）
- 定宽居中
- 定宽居中（有最大宽度）

### 自适应

![](/layout_1.gif){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  layout: {
    widthMode: 'adaption',
  },
}
```

### 自适应（有最小宽度）

![](/layout_2.gif){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  layout: {
    widthMode: 'adaption-min-width',
  },
}
```

### 定宽居中

![](/layout_3.gif){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  layout: {
    widthMode: 'center',
  },
}
```

### 定宽居中（有最大宽度）

![](/layout_4.gif){data-zoomable}

```ts {2-4}
const globalSettings: Settings.all = {
  layout: {
    widthMode: 'center-max-width',
  },
}
```

## 变量

布局相关的变量存放在 `/src/assets/styles/globals.scss` 文件中（注意看注释），均为 CSS 变量。

## 移动端

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  layout: {
    enableMobileAdaptation: true,
  },
}
```

开启移动端支持后，当页面宽度小于 `992px` 时会切换为移动端布局显示，移动端下不支持设置框架布局，以及部分不支持移动端的操作按钮也会进行隐藏，例如“全屏”按钮。

虽然框架本身兼容移动端，但由于后台系统在开发时可能会引用各类第三方插件，这部分的兼容性需要开发者自行适配。

:::tip 建议
由于后台系统属于生产效率工具，而移动端天生不适合复杂的操作，尤其是遇到一些比较复杂的表单，在移动端上操作是极其“恼火”的。

依据作者的开发经验，建议移动端后台可以独立开发一套，在功能上进行删减，保留轻量级的管理操作。
:::