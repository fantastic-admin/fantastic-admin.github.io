---
url: /guide/skills/fa-form-builder.md
---
# fa-form-builder

## 适用场景

* 只需要独立表单页，不需要列表页
* 适合设置页、资料页、注册页、独立编辑页
* 希望快速得到一个带校验骨架的表单页面

## 使用方式

直接说明以下信息即可：

* 目标应用，例如 `example`
* 模块名与中文名
* 存放路径
* 字段信息
* 是否希望单列或双列布局

示例：

```text
在 example 应用里生成一个个人资料表单页。
模块名 profile，中文名 个人资料，放在 account 目录下。
字段有 name、mobile、bio。
使用双列布局。
```

## 结果

通常会新增：

* `apps/<app>/src/views/{path}/{name}/index.vue`

页面中通常会包含：

* 表单布局
* 校验骨架
* 初始值
* 提交与取消按钮
