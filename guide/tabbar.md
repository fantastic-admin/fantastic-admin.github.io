# 标签栏 <sup class="pro-badge" />

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  tabbar: {
    enable: true,
  },
}
```

## 功能介绍

### 刷新

对当前标签页进行刷新，非激活的标签页无法刷新，并且刷新操作会强制清除页面缓存数据。

![](/tabbar1.gif){data-zoomable}

### 关闭

关闭标签页分关闭当前、关闭其它、关闭左侧、关闭右侧，当不满足关闭条件时，选项置灰，无法点击。

![](/tabbar2.gif){data-zoomable}

### 固定

将指定标签页设为固定状态，固定的标签页右键无法直接关闭，同时也不会被关闭其它、关闭左侧、关闭右侧标签页操作所关闭，并且下次访问将保留固定标签页状态。

![](/tabbar3.gif){data-zoomable}

固定标签页默认存储在浏览器本地 localStorage 里，如果需要将数据存储到服务器，可以通过 `tabbar.storageTo` 配置项来实现，具体配置如下：

```ts {2-4}
const globalSettings: Settings.all = {
  tabbar: {
    storageTo: 'server',
  },
}
```

然后到 `/src/api/modules/user.ts` 中找到 `tabbar()` 和 `tabbarEdit()` 这两个函数，并分别修改这两个函数的请求地址。

:::tip 建议
为减轻后端处理，数据会直接以 JSON 字符串进行存储，建议后端可以在用户表增加相关字段，并将字段类型设为 `lonetext` 。
:::

### 最大化

通过隐藏导航栏和顶栏，将操作内容区最大化。双击标签页可快速进入最大化。

![](/tabbar4.gif){data-zoomable}

### 拖拽排序

![](/tabbar5.gif){data-zoomable}

### 快捷操作下拉菜单

![](/tabbar6.gif){data-zoomable}

## 标签页合并

标签页合并功能在一定程度上可以减少标签页的数量，让用户能够准确的找到自己想要的标签页。

以下面这段路由配置为例：

```ts
const routes: RouteRecordRaw = {
  path: '/manager',
  meta: {
    title: '管理员管理',
  },
  children: [
    {
      path: '',
      name: 'ManagerList'
      meta: {
        title: '管理员列表',
      },
    },
    {
      path: 'detail',
      name: 'ManagerCreate',
      meta: {
        title: '新增管理员',
        sidebar: false,
        activeMenu: '/manager',
      },
    },
    {
      path: 'detail/:id',
      name: 'ManagerEdit',
      meta: {
        title: '编辑管理员',
        sidebar: false,
        activeMenu: '/manager',
      },
    },
  ],
}
```

### 不合并

```ts {2-4}
const globalSettings: Settings.all = {
  tabbar: {
    mergeTabsBy: '',
  },
}
```

从列表页进入详情页时，框架会新增一个**编辑管理员**的标签页，并且在不关闭详情页时，可打开多个不同的**编辑管理员**标签页，效果如下：

![](/tabbar-no-merge.gif){data-zoomable}

### 根据路由名称进行合并

```ts {2-4}
const globalSettings: Settings.all = {
  tabbar: {
    mergeTabsBy: 'routeName',
  },
}
```

从列表页进入详情页时，框架会新增一个**编辑管理员**的标签页，并且在不关闭详情页时，打开多个不同的详情页，只会保持一个**编辑管理员**标签页，效果如下：

![](/tabbar-merge-routename.gif){data-zoomable}

### 根据 `meta.activeMenu` 进行合并

```ts {2-4}
const globalSettings: Settings.all = {
  tabbar: {
    mergeTabsBy: 'activeMenu',
  },
}
```

从始至终只会保持一个标签页，其中的关键条件就是 `activeMenu` 这个参数，也就是框架会将设置过 `activeMenu` 的路由与 `activeMenu` 指向的目标路由合并为一个标签页，当在这些路由里相互跳转时，始终只保持一个标签页，效果如下：

![](/tabbar-merge-activemenu.gif){data-zoomable}

## 显示图标

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  tabbar: {
    enableIcon: true,
  },
}
```

会根据当前路由配置中的 `meta.icon` 和 `meta.activeIcon` 属性来显示图标，如果未设置，则会根据路由嵌套层级，依次向上查找父级路由的 `meta.icon` 和 `meta.activeIcon` 属性进行显示。

## 记忆功能

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  tabbar: {
    enableMemory: true,
  },
}
```

当开启记忆功能时，框架会将当前标签页的状态记录到浏览器当前会话缓存中，刷新页面或重新登录会自动恢复，效果如下：

![](/tabbar-memory.gif){data-zoomable}