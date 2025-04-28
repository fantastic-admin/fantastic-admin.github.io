# 预留插槽

框架提供了一些预留插槽，方便开发者在一定限度内满足客制化的需求，并且无需修改框架核心部分源码。

如果要使用预留插槽，需要在 `/src/slots` 目录下创建对应文件夹和文件，格式为 `/src/slots/{插槽名}/index.vue` ，注意必须使用 `index.vue` 文件。

## 头部

1. `HeaderStart`
2. `HeaderAfterLogo`
3. `HeaderAfterMenu` <Badge text="v5.3.0" />
4. `HeaderEnd`

![](/slots-header.png){data-zoomable}

## 主导航

1. `MainSidebarTop`
2. `MainSidebarAfterLogo`
3. `MainSidebarAfterMenu` <Badge text="v5.3.0" />
4. `MainSidebarBottom`

![](/slots-main-sidebar.png){data-zoomable}

## 次导航

1. `SubSidebarTop`
2. `SubSidebarAfterLogo`
3. `SubSidebarAfterMenu` <Badge text="v5.3.0" />
4. `SubSidebarBottom`

![](/slots-sub-sidebar.png){data-zoomable}

## 顶栏

1. `TabbarStart`
2. `TabbarEnd`
3. `ToolbarStart`
4. `ToolbarEnd`

![](/slots-topbar.png){data-zoomable}

## 自由位置

`FreePosition`

该插槽需要设置 `position: absolute;` 样式并定位到需要的位置，否则无法正确显示。

![](/slots-free-position.png){data-zoomable}