# 收藏夹 <sup class="pro-badge" />

用户可将常用的导航菜单添加进收藏夹，方便快速访问。

## 开启

在应用配置中设置：

```ts {2-4}
const globalSettings: Settings.all = {
  favorites: {
    enable: true,
  },
}
```

<ZoomImg src="/favorites.png" />

## 处理请求

收藏夹默认存储在浏览器本地 localStorage 里，如果需要将数据存储到服务器，可以通过 `favorites.storageTo` 配置项来实现，具体配置如下：

```ts {2-4}
const globalSettings: Settings.all = {
  favorites: {
    storageTo: 'server',
  },
}
```

然后到 `/src/store/modules/favorites.ts` 中找到 `updateStorage()` 和 `recoveryStorage()` 这两个函数，分别修改函数内的接口请求部分代码。

:::tip 建议
为减轻后端处理，数据会直接以 JSON 字符串进行存储，建议后端可以在用户表增加相关字段，并将字段类型设为 `lonetext` 。
:::