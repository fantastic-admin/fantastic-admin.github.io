# 标签栏 <sup class="pro-badge" />

首先需要在应用配置里开启标签栏功能。

```js
tabbar: {
    enable: true
}
```

## 功能介绍

### 刷新

对当前标签页进行刷新，非激活的标签页无法刷新，并且刷新操作会强制清除页面缓存数据。

<ZoomImg src="/tabbar1.gif" />

### 关闭

关闭标签页分关闭当前、关闭其它、关闭左侧、关闭右侧，当不满足关闭条件时，选项置灰，无法点击。

<ZoomImg src="/tabbar2.gif" />

### 固定

将指定标签页设为固定状态，固定的标签页右键无法直接关闭，同时也不会被关闭其它、关闭左侧、关闭右侧标签页操作所关闭。并且固定的标签页会被记录到浏览器缓存，下次访问将保留固定标签页状态。

<ZoomImg src="/tabbar3.gif" />

### 最大化

通过隐藏导航栏和顶栏，将操作内容区最大化。双击标签页可快速进入最大化。

<ZoomImg src="/tabbar4.gif" />

### 拖拽排序

<ZoomImg src="/tabbar5.gif" />

## 标签页合并

当标签栏开启时，框架还提供一个配置属性，即标签页是否合并，首先先看下面这段路由配置。

```js
{
    path: '/news',
    children: [
        {
            path: 'list',
            name: 'NewsList'
            meta: {
                title: '新闻列表'
            }
        },
        {
            path: 'detail/:id',
            name: 'NewsDetail',
            meta: {
                title: '新闻详情',
                sidebar: false,
                activeMenu: '/news/list'
            }
        },
        {
            path: 'create',
            name: 'NewsCreate',
            meta: {
                title: '新增新闻',
                sidebar: false,
                activeMenu: '/news/list'
            }
        }
    ]
}
```

当设置标签页不合并时，从**新闻列表页**进入**新闻详情页**，框架会新增一个*新闻详情*的标签页，配置如下。

```js
tabbar: {
    mergeTabs: false
}
```

<ZoomImg src="/tabbar-no-merge.gif" />

而设置当标签栏合并时，从**新闻列表页**进入**新闻详情页**，框架会将*新闻列表*的标签页，替换成*新闻详情*的标签页，始终只保持一个标签页，配置如下。

```js
tabbar: {
    mergeTabs: true
}
```

<ZoomImg src="/tabbar-merge.gif" />

这其中的关键条件就是 `activeMenu` 这个参数，也就是框架会将设置过 `activeMenu` 的路由与 `activeMenu` 指向的目标路由合并为一个标签页，当在这些路由里相互跳转时，始终只保持一个标签页。

通常使用场景是将同个模块的路由合并成一个标签页，使标签栏看上去相对简洁明了。