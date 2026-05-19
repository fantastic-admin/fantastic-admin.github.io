---
url: /guide/skills/fa-route-generator.md
---
# fa-route-generator

## 适用场景

* 新建页面后需要加路由
* 需要调整菜单显示、权限、徽章、面包屑、保活
* 需要让详情页隐藏菜单或与列表页合并标签

## 使用方式

直接说明以下信息即可：

* 目标应用，例如 `example`
* 页面文件位置
* 路由路径
* 页面标题
* 所属主导航分组
* 是否需要权限、保活、隐藏菜单等 meta 配置

示例：

```text
在 example 应用里给商品列表页加路由。
路径用 /mall/product，标题是 商品管理，放到商城主导航下。
详情页不要显示在菜单里，并且返回列表时保留状态。
```

## 结果

根据需求，通常会：

* 新增 `apps/<app>/src/router/modules/*.ts`
* 修改 `apps/<app>/src/router/routes.ts`
* 修改现有路由的 `meta` 配置
* 读取 `apps/<app>/src/settings.ts` 判断路由模式
