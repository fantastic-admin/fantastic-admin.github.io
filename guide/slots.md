# 预留插槽

框架提供了一些预留插槽，方便开发者在一定限度内满足客制化的需求，并且无需修改框架核心部分源码。

如果要使用预留插槽，需要在 `/src/slots` 目录下创建对应文件夹和文件，格式为 `/src/slots/{插槽名}/index.vue` ，注意必须使用 `index.vue` 文件。

## 插槽名

### HeaderStart

![](/slots-header-start.png){data-zoomable}

### HeaderEnd

![](/slots-header-end.png){data-zoomable}

### HeaderAfterLogo

![](/slots-header-after-logo.png){data-zoomable}

### MainSidebarTop

![](/slots-main-sidebar-top.png){data-zoomable}

### MainSidebarBottom

![](/slots-main-sidebar-bottom.png){data-zoomable}

### MainSidebarAfterLogo

![](/slots-main-sidebar-after-logo.png){data-zoomable}

### SubSidebarTop

![](/slots-sub-sidebar-top.png){data-zoomable}

### SubSidebarBottom

![](/slots-sub-sidebar-bottom.png){data-zoomable}

### SubSidebarAfterLogo

![](/slots-sub-sidebar-after-logo.png){data-zoomable}

### TabbarStart

![](/slots-tabbar-start.png){data-zoomable}

### TabbarEnd

![](/slots-tabbar-end.png){data-zoomable}

### ToolbarStart

![](/slots-toolbar-start.png){data-zoomable}

### ToolbarEnd

![](/slots-toolbar-end.png){data-zoomable}

### FreePosition

![](/slots-free-position.png){data-zoomable}

该插槽需要设置 `position: absolute` 样式并定位到需要的位置，否则无法正确显示。