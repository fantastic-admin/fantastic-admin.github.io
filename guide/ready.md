---
url: /guide/ready.md
---
# 准备工作

## 源码

阅读开发文档前，请确保手上已经有 Fantastic-admin 源码，因为文档中提及的内容，都是需要在本地项目中编写或修改代码并运行才能呈现的。

### 基础版

到 Github [Releases](https://github.com/fantastic-admin/basic/releases) 页面下载最新版本的压缩包，如下图所示：

![](/download.png){data-zoomable}

或者也可以从 Github / Gitee / Gitcode 上拉取源码，但需要注意，直接拉取源码可能会包含未发布的内容，最终发布时可能会有变动，请谨慎使用。

```sh
# 从 Github 拉取
git clone https://github.com/fantastic-admin/basic.git
# 从 Gitee 拉取
git clone https://gitee.com/fantastic-admin/basic.git
# 从 Gitcode 拉取
git clone https://gitcode.com/fantastic-admin/basic.git
```

### 专业版

专业版用户会被邀请加入到 [Fantastic-admin](https://github.com/fantastic-admin) Github 官方组织，加入组织后在专业版仓库 [Releases](https://github.com/fantastic-admin/pro/releases) 页面下载最新版本的压缩包。

购买专业版点[这里](../buy)。

## 开发环境

使用本模板前，需要在本地依次安装好 [Node.js](https://nodejs.org/), [pnpm](https://pnpm.io/zh/), [Git](https://git-scm.com/)(非必须) 和 [Visual Studio Code](https://code.visualstudio.com/)。

::: warning 注意

* 在 [package.json](https://github.com/fantastic-admin/basic/blob/main/package.json#L6-L9) 文件中有限制 node 要求版本，建议使用最新 LTS 版本。
* 如果你不想使用 VSCode ，我们也强烈建议你使用基于 VSCode 内核的 IDE ，如 [Cursor](https://www.cursor.com/) 。
  :::

然后在 Visual Studio Code 里安装好以下扩展：

* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
* [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
* [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

在 Visual Studio Code 里打开源码文件夹，右下角会自动提示需要安装的依赖，直接点击安装即可。

![](/vscode.png){data-zoomable}

::: tip 额外推荐
以上为开发时必备扩展，以下则是作者推荐安装的扩展，安装它们将在一定程度上提升开发效率。

* [Chinese (Simplified) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans) 中文语言包
* [Catalog Lens](https://marketplace.visualstudio.com/items?itemName=antfu.pnpm-catalog-lens) 显示PNPM/Yarn/Bun目录的嵌套版本
* [Goto definition alias](https://marketplace.visualstudio.com/items?itemName=antfu.goto-alias) 转到別名重定向后的定义
* [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) 在代码中预览 iconify 图标
* [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) 在代码中高亮颜色
* [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag) 高亮显示匹配的标签
* [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview) 图片预览
* [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) 彩虹缩进提示
  :::

## 技术栈

了解并熟悉框架使用到的技术栈，能让你使用本框架更得心应手。

* [Vite](https://cn.vitejs.dev/)
* [Vue 3](https://cn.vuejs.org/)
* [Vue Router](https://router.vuejs.org/zh/)
* [Pinia](https://pinia.vuejs.org/zh/)
* [UnoCSS](https://unocss.dev/)
