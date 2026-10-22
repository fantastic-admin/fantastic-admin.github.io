---
url: /guide/skills/fa-crud-page-generator.md
---
# fa-crud-page-generator

## 适用场景

* 需要快速生成一个标准后台 CRUD 模块
* 需要列表、搜索、分页、新增、编辑、删除等基础能力
* 适合商品、订单、用户、角色、文章等管理页面

## 使用方式

直接说明以下信息即可：

* 目标应用，例如 `example`
* 模块名与中文名，例如 `product` / `商品`
* 存放路径，例如 `mall`
* 字段信息
* 详情模式：`router` / `modal` / `drawer`
* 是否生成 Mock
* 是否同时生成路由

示例：

```text
在 example 应用里生成一个商品管理模块。
模块名 product，中文名 商品，放在 mall 目录下。
字段有 name、status、createdAt。
使用 drawer 模式，生成 mock，并同时生成路由。
```

## 结果

通常会新增以下内容：

* `apps/<app>/src/views/{path}/{name}/list.vue`
* `apps/<app>/src/views/{path}/{name}/detail.vue`（仅 router 模式）
* `apps/<app>/src/views/{path}/{name}/components/DetailForm/index.vue`
* `apps/<app>/src/api/modules/{fileName}.ts`
* `apps/<app>/src/api/modules/{fileName}.fake.ts`（可选）
* 路由配置（可选）
