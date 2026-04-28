---
url: /guide/skills.md
---
# AI 技能 (Skills)

这里收录项目内所有 `fa-*` 技能文档。

## 说明

* 大多数技能都会先确认目标应用，也就是 `apps/<app>/`
* 技能会优先遵循 Fantastic-admin 的目录约定和内建能力
* 如果同一目标已经反复修改 3 次及以上仍未达到预期，会自动触发反馈流程

## 技能列表

* [fa-crud-page-generator](./fa-crud-page-generator) - 生成完整 CRUD 模块
* [fa-form-builder](./fa-form-builder) - 生成独立表单页
* [fa-framework-settings](./fa-framework-settings) - 修改框架设置
* [fa-i18n-manager](./fa-i18n-manager) - 管理国际化
* [fa-page-optimizer](./fa-page-optimizer) - 优化页面并替换为 Fa 组件
* [fa-route-generator](./fa-route-generator) - 创建或修改路由
* [fa-slot-creator](./fa-slot-creator) - 创建布局插槽
* [fa-store-generator](./fa-store-generator) - 生成 Store 模块
* [fa-theme-customizer](./fa-theme-customizer) - 定制主题配色

## 使用方式

以 Codex 和 Claude Code 为例：

:::: tabs
::: tab Codex
![](/skills/codex.png){data-zoomable}
:::
::: tab Claude Code
![](/skills/claude-code.png){data-zoomable}
:::
::::

Skill 并不只限于 Codex 和 Claude Code 使用，因为 `SKILL.md` 是一个开放标准，**只要 Agent 工具支持 Agent Skills 标准，通常就可以复用这些 Skill** 。

本框架在 `skills/` 目录下 **统一维护 Skill** ，如果需要使用，可以通过 [skills](https://npmx.dev/package/skills) 包进行安装，在根目录运行下面命令：

```sh
pnpx skills add ./skills --skill '*'
```

:::tip 注意
根目录下有个 [`AGENTS.md`](https://agents.md/) 文件，能帮助 AI 更好的理解整个工程，并且大部分 Agent 都遵循这个文件。

但如果你使用的是 Claude Code，你可能需要将 `AGENTS.md` 更名为 `CLAUDE.md` ，或者给 `AGENTS.md` 做一个软链接映射到 `CLAUDE.md` 文件。
:::
