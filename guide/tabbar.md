# 标签栏

## 是否启用

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  tabbar: {
    /**
     * 是否开启标签栏
     * @默认值 `false`
     */
    enable: true,
  },
}
```

## 风格 <Badge type="pro" text="专业版" />

在应用配置中设置：

```ts {2-11}
const globalSettings: Settings.all = {
  tabbar: {
    /**
     * 标签栏风格
     * @默认值 `''` 默认
     * @可选值 `'fashion'` 时尚
     * @可选值 `'card'` 卡片
     * @可选值 `'square'` 方块
     */
    style: 'fashion',
  },
}
```

![](/tabbar-style.png){data-zoomable}

## 宽度自适应 <Badge type="pro" text="专业版" />

在 `/src/assets/styles/globals.css` 中设置标签栏中页签的宽度，默认为 `150px` 固定宽度，例如将 2 个变量均设置为 `unset` 时，标签页宽度将随页面标题长度自适应，效果如下：

```scss
:root {
  // 标签页最大最小宽度，两个宽度为同一数值时，则为固定宽度，反之将宽度设置为 unset 则为自适应
  --g-tabbar-tab-max-width: unset;
  --g-tabbar-tab-min-width: unset;
}
```

![](/tabbar-width.png){data-zoomable}

## 右键菜单

其中**固定**、**最大化**、**新窗口打开**为 <Badge type="pro" text="专业版" /> 功能。

![](/tabbar-context.png){data-zoomable}

### 固定 <Badge type="pro" text="专业版" />

固定的标签页无法直接关闭，并且下次访问将保留固定标签页状态。

固定标签页默认存储在浏览器本地 localStorage 里，如果需要将数据存储到服务器，可以通过 `tabbar.storageTo` 配置项来实现，具体配置如下：

```ts {2-9}
const globalSettings: Settings.all = {
  tabbar: {
    /**
     * 固定标签页存储位置
     * @默认值 `'local'` 本地存储
     * @可选值 `'server'` 服务器存储
     */
    storageTo: 'server',
  },
}
```

然后到 `/src/api/modules/user.ts` 中找到 `tabbar()` 和 `tabbarEdit()` 这两个函数，并分别修改这两个函数的请求地址。

:::tip 建议
为减轻后端处理，数据会直接以 JSON 字符串进行存储，建议后端可以在用户表增加相关字段，并将字段类型设为 `longtext` 。
:::

## 拖拽排序 <Badge type="pro" text="专业版" />

![](/tabbar-draggable.gif){data-zoomable}

## 快捷操作 <Badge type="pro" text="专业版" />

![](/tabbar-action.png){data-zoomable}

## 标签栏双击 <Badge type="pro" text="专业版" />

在应用配置中设置：

```ts {2-12}
const globalSettings: Settings.all = {
  tabbar: {
    /**
     * 标签栏双击执行动作
     * @默认值 `'close'` 关闭
     * @可选值 `'reload'` 刷新
     * @可选值 `'pin'` 固定/取消固定
     * @可选值 `'maximize'` 最大化
     * @可选值 `'window'` 新窗口打开
     */
    dblclickAction: 'close',
  },
}
```

## 标签页合并 <Badge type="pro" text="专业版" />

标签页合并功能在一定程度上可以减少标签页的数量，让用户能够准确的找到自己想要的标签页。

在应用配置中设置：

```ts {2-10}
const globalSettings: Settings.all = {
  tabbar: {
    /**
     * 标签页合并规则
     * @默认值 `''` 不合并
     * @可选值 `'routeName'` 根据路由名称，相同路由名称的路由合并
     * @可选值 `'activeMenu'` 根据路由的 `meta.activeMenu` 字段，与指向的目标路由合并
     */
    mergeTabsBy: '',
  },
}
```

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
        menu: false,
        activeMenu: '/manager',
      },
    },
    {
      path: 'detail/:id',
      name: 'ManagerEdit',
      meta: {
        title: '编辑管理员',
        menu: false,
        activeMenu: '/manager',
      },
    },
  ],
}
```

### 不合并

从列表页进入详情页时，框架会新增一个**编辑管理员**的标签页，并且在不关闭详情页时，可打开多个不同的**编辑管理员**标签页，效果如下：

![](/tabbar-no-merge.gif){data-zoomable}

### 根据路由名称合并

从列表页进入详情页时，框架会新增一个**编辑管理员**的标签页，并且在不关闭详情页时，打开多个不同的详情页，只会保持一个**编辑管理员**标签页，效果如下：

![](/tabbar-merge-routename.gif){data-zoomable}

### 根据 `meta.activeMenu` 字段合并

从始至终只会保持一个标签页，其中的关键条件就是 `activeMenu` 这个参数，也就是框架会将设置过 `activeMenu` 的路由与 `activeMenu` 指向的目标路由合并为一个标签页，当在这些路由里相互跳转时，始终只保持一个标签页，效果如下：

![](/tabbar-merge-activemenu.gif){data-zoomable}

## 显示图标

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  tabbar: {
    /**
     * 是否开启标签栏图标显示
     * @默认值 `false`
     */
    enableIcon: true,
  },
}
```

会根据当前路由配置中的 `meta.icon` 和 `meta.activeIcon` 属性来显示图标，如果未设置，则会根据路由嵌套层级，依次向上查找父级路由的 `meta.icon` 和 `meta.activeIcon` 属性进行显示。

## 记忆功能 <Badge type="pro" text="专业版" />

在应用配置中设置：

```ts {2-8}
const globalSettings: Settings.all = {
  tabbar: {
    /**
     * 是否开启标签栏记忆功能
     * @默认值 `false`
     */
    enableMemory: true,
  },
}
```

当开启记忆功能时，框架会将当前标签页的状态记录到浏览器当前会话缓存中，刷新页面或重新登录会自动恢复，效果如下：

![](/tabbar-memory.gif){data-zoomable}
