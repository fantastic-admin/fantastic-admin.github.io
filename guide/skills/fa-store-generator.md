---
url: /guide/skills/fa-store-generator.md
---
# fa-store-generator

## 适用场景

* 需要全局共享数据
* 需要状态持久化
* 适合用户信息、购物车、通知、筛选条件缓存等场景
* 需要在组件外部也能访问状态

## 使用方式

直接说明以下信息即可：

* 目标应用，例如 `example`
* Store 用途
* State 字段与初始值
* 是否需要持久化
* 是否需要异步 action 或 computed

示例：

```text
在 example 应用里生成一个购物车 store。
字段有 items、couponCode、checkedIds。
items 和 couponCode 需要持久化。
还需要拉取购物车的异步 action，以及选中数量的 computed。
```

## 结果

通常会新增：

* `apps/<app>/src/store/modules/<name>.ts`

某些场景下也可能新增到：

* `apps/<app>/src/store/modules/app/<name>.ts`

文件中通常会包含：

* state
* computed
* action
* persist 配置
