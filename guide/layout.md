# 布局

通过 7 种导航栏模式和 4 种页宽模式的组合搭配，可实现 28 种布局结构。

## 导航栏

### 模式

提供 7 种导航栏模式，其中后 4 种为 <Badge type="pro" text="专业版" /> 才有，在应用配置中设置：

```ts {2-14}
const globalSettings: Settings.all = {
  menu: {
    /**
     * 导航栏模式
     * @默认值 `'side'` 侧边栏模式（有主导航）
     * @可选值 `'head'` 顶部模式
     * @可选值 `'single'` 侧边栏模式（无主导航）
     * @可选值 `'only-side'` 侧边栏精简模式
     * @可选值 `'only-head'` 顶部精简模式
     * @可选值 `'side-panel'` 侧边栏面板模式
     * @可选值 `'head-panel'` 顶部面板模式
     */
    mode: 'head',
  },
}
```

#### 顶部模式

![](/menu-mode-head.png){data-zoomable}

#### 侧边栏模式（含主导航）

![](/menu-mode-side.png){data-zoomable}

#### 侧边栏模式（无主导航）

![](/menu-mode-single.png){data-zoomable}


#### 侧边栏精简模式 <Badge type="pro" text="专业版" />

![](/menu-mode-only-side.png){data-zoomable}


#### 顶部精简模式 <Badge type="pro" text="专业版" />

![](/menu-mode-only-head.png){data-zoomable}


#### 侧边栏面板模式 <Badge type="pro" text="专业版" />

![](/menu-mode-side-panel.png){data-zoomable}


#### 顶部面板模式 <Badge type="pro" text="专业版" />

![](/menu-mode-head-panel.png){data-zoomable}

### 风格 <Badge type="pro" text="专业版" />

在应用配置中设置：

```ts {2-11}
const globalSettings: Settings.all = {
  menu: {
    /**
     * 导航栏风格
     * @默认值 `''`
     * @可选值 `'arrow'` 箭头
     * @可选值 `'line'` 线条
     * @可选值 `'dot'` 圆点
     */
    style: '',
  },
}
```

![](/menu-style.png){data-zoomable}

## 页宽模式 <Badge type="pro" text="专业版" />

提供 4 种基于页宽(页面宽度)模式，在应用配置中设置：

```ts {2-11}
const globalSettings: Settings.all = {
  layout: {
    /**
     * 页宽模式，当设置为非 `'adaption'` 时，可以去 /src/assets/styles/globals.css 里设置 `--g-app-width` 宽度变量
     * @默认值 `'adaption'` 自适应
     * @可选值 `'adaption-min-width'` 自适应（有最小宽度）
     * @可选值 `'center'` 定宽居中
     * @可选值 `'center-max-width'` 定宽居中（有最大宽度）
     */
    widthMode: 'adaption',
  },
}
```

### 自适应

![](/layout_1.gif){data-zoomable}

### 自适应（有最小宽度）

![](/layout_2.gif){data-zoomable}

### 定宽居中

![](/layout_3.gif){data-zoomable}

### 定宽居中（有最大宽度）

![](/layout_4.gif){data-zoomable}

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

虽然框架本身兼容移动端，但由于后台系统在开发时可能会引用各类第三方插件，这部分的兼容性需要开发者自行适配。

:::tip 建议
由于后台系统属于生产效率工具，而移动端天生不适合复杂的操作，尤其是遇到一些比较复杂的表单，在移动端上操作是极其“恼火”的。

依据作者的开发经验，建议移动端后台可以独立开发一套，在功能上进行删减，保留轻量级的管理操作。

如果打算独立开发一套移动端的系统，建议使用 [Fantastic-mobile](https://fantastic-mobile.hurui.me/)。
:::
