# 准备工作

## 源码

阅读开发文档前，请确保手上已经有 Fantastic-admin 源码，因为文档中提及的内容，都是需要在本地项目中编写或修改代码并运行才能呈现的。如果还没有源码，可以通过下面两种方式获取：

### 基础版

:::tip 分支说明
- `master` 框架源码分支，不含示例代码，可直接用于实际开发
- `example` 演示源码分支，同演示站，在框架源码基础上，提供了大量示例代码
:::

**手动下载（推荐）**

`tags` 下提供每个版本的压缩包下载，仅提供框架源码，不提供演示源码。

- 去 [Gitee](https://gitee.com/hooray/fantastic-admin/tags) 下载
- 去 [Github](https://github.com/hooray/fantastic-admin/tags) 下载

**git 克隆**

<!-- TODO 等 vitepress 更新后，使用 code group 代替 -->

```sh
# 从 Gitee 克隆

# 拉取框架源码
git clone https://gitee.com/hooray/fantastic-admin.git
# 拉取演示源码
git clone -b example https://gitee.com/hooray/fantastic-admin.git
```

```sh
# 从 Github 克隆

# 拉取框架源码
git clone https://github.com/hooray/fantastic-admin.git
# 拉取演示源码
git clone -b example https://github.com/hooray/fantastic-admin.git
```

### 专业版

[去购买](../buy)

### JS 版本

框架目前仅提供 TS 版本，如果需要使用 JS 版本，可以在仓库 tags 或 releases 页面里找到 `v1.0.0` 版本，这个是最后更新的 JS 版本，注意这是框架源码，演示源码只能从 git 提交记录中找了。

## 开发环境

使用本模板前，需要在本地依次安装好 [Node.js](https://nodejs.org/zh-cn/), [pnpm](https://pnpm.io/zh/), [Git](https://git-scm.com/) 和 [Visual Studio Code](https://code.visualstudio.com/)。

::: warning 注意
Node.js 版本需 >= 14.18.0 ，建议为 16.x
:::

然后在 Visual Studio Code 里安装好以下扩展：

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Vue Language Features](https://marketplace.visualstudio.com/items?itemName=vue.volar)

在 Visual Studio Code 里打开源码的文件夹，右下角会自动提示需要安装的依赖，直接点击安装即可。

<ZoomImg src="/vscode.png" />

::: tip 建议
以上 5 个为开发时必备扩展，以下则是作者建议安装的扩展，安装它们将在一定程度上提升开发效率。

- [Chinese (Simplified) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans) 中文语言包
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) 在代码中高亮颜色
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag) 高亮显示匹配的标签
- [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview) 图片预览
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) 彩虹缩进提示
:::

除此之外，还需要准备好开发使用的浏览器，推荐使用 [Chrome](https://www.google.cn/chrome/) ，并且在 Chrome 里安装好 [Vue.js devtools 扩展](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)，安装 Vue 官方提供的调试工具在一定程度上可以提升解决 bug 的效率，当然这个扩展开启后，可能在开发环境操作会有些许卡顿，建议不需要时候可以将扩展禁用。

不过由于安装 Vue.js devtools 需要访问 Chrome 应用商店，如果在大陆地区访问，需要自行准备相关**可访问外网**的工具。如果不具备该条件，也可访问 [Vue.js devtools 官网](https://devtools.vuejs.org/) 了解本地构建或者下载支持 Edge/Firefox 的 Vue.js devtools 。

## 技术栈

了解并熟悉框架使用到的技术栈，能让你使用本框架更得心应手。

- [Vite](https://cn.vitejs.dev/)
- [Vue 3](https://cn.vuejs.org/) ([v3 迁移指南](https://v3-migration.vuejs.org/))
- [Vue Router 4](https://next.router.vuejs.org/zh/)
- [Pinia](https://pinia.vuejs.org/)
- [Element Plus](https://element-plus.org/#/zh-CN)
