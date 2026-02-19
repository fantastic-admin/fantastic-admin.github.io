---
url: /guide/ready.md
---
# 准备工作

## 源码

阅读开发文档前，请确保手上已经有 Fantastic-admin 源码，因为文档中提及的内容，都是需要在本地项目中编写或修改代码并运行才能呈现的。

:::tip 源码分为两种：

* **框架源码** 不含示例代码，可直接用于实际开发
* **演示源码** 同演示站，在框架源码基础上，提供了大量示例代码
  :::

### 基础版

到 [Github Releases](https://github.com/fantastic-admin/basic/releases) 页面下载最新版本的压缩包，如下图所示：

![](/download.png){data-zoomable}

或者也可以从 Github/Gitee 上拉取源码，但需要注意，直接拉取源码可能会包含未发布的内容，最终发布时可能会有变动，请谨慎使用。

::: code-group

```sh [从 Github 拉取]
# 拉取框架源码
git clone https://github.com/fantastic-admin/basic.git
# 拉取演示源码
git clone -b example https://github.com/fantastic-admin/basic.git
```

```sh [从 Gitee 拉取]
# 拉取框架源码
git clone https://gitee.com/fantastic-admin/basic.git
# 拉取演示源码
git clone -b example https://gitee.com/fantastic-admin/basic.git
```

:::

### 专业版

专业版用户会被邀请加入到 [Fantastic-admin](https://github.com/fantastic-admin) Github 官方组织，加入组织后可访问[专业版私有仓库](https://github.com/fantastic-admin/pro)，源码获取方式和基础版无差异，只是源码仓库不同。

如果你想获取专业版源码，可以点[这里](../buy)去购买。

## 开发环境

使用本模板前，需要在本地依次安装好 [Node.js](https://nodejs.org/), [pnpm](https://pnpm.io/zh/), [Git](https://git-scm.com/)(非必须) 和 [Visual Studio Code](https://code.visualstudio.com/)。

::: warning 注意

* 在 [package.json](https://github.com/fantastic-admin/basic/blob/main/package.json#L4-L6) 文件中有限制 node 要求版本，建议使用最新 LTS 版本。
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
* [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) 在代码中高亮颜色
* [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag) 高亮显示匹配的标签
* [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview) 图片预览
* [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) 彩虹缩进提示
  :::

## 技术栈

了解并熟悉框架使用到的技术栈，能让你使用本框架更得心应手。

* [Vite](https://cn.vitejs.dev/)
* [Vue 3](https://cn.vuejs.org/) ([v3 迁移指南](https://v3-migration.vuejs.org/))
* [Vue Router](https://router.vuejs.org/zh/)
* [Pinia](https://pinia.vuejs.org/zh/)
* [UnoCSS](https://unocss.dev/)
