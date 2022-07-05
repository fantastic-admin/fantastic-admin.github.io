# 准备工作

## 源码

阅读开发文档前，请确保手上已经有 Fantastic-admin 源码，因为文档中提及的内容，都是需要在本地项目中编写或修改代码并运行才能呈现的。如果还没有源码，可以通过下面两种方式获取：

### 基础版

:::tip 分支说明
- `master` 框架源码分支，不含示例代码，可直接用于实际开发
- `example` 演示源码分支，同演示站，含有大量示例代码
:::

- 手动下载
  - 去 [Gitee](https://gitee.com/hooray/fantastic-admin) 下载
  - 去 [Github](https://github.com/hooray/fantastic-admin) 下载
- git 克隆

<!-- TODO 等 vitepress 更新后，使用 code group 代替 -->

```bash
# 从 Gitee 克隆

# 拉取框架源码
git clone https://gitee.com/hooray/fantastic-admin.git
# 拉取演示源码
git clone -b example https://gitee.com/hooray/fantastic-admin.git
```

```bash
# 从 Github 克隆

# 拉取框架源码
git clone https://github.com/hooray/fantastic-admin.git
# 拉取演示源码
git clone -b example https://github.com/hooray/fantastic-admin.git
```

### 专业版

[去购买](../buy)

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

除此之外，还需要准备好开发使用的浏览器，推荐使用 [Chrome](https://www.google.cn/chrome/) ，并且在 Chrome 里安装好 [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 扩展，这一步很重要，安装 Vue 官方提供的调试工具将大大提升解决 bug 的效率。

不过由于安装 Vue.js devtools 需要访问 Chrome 应用商店，如果在大陆地区访问，需要自行准备相关**可访问外网**的工具。如果不具备该条件，也可访问 [Vue.js devtools](https://devtools.vuejs.org/) 官网了解本地构建或者下载支持 Firefox 的 Vue.js devtools 。

## 技术栈

了解并熟悉框架使用到的技术栈，能让你使用本框架更得心应手。

- [Vite](https://cn.vitejs.dev/)
- [Vue 3](https://v3.cn.vuejs.org/) ([v3 迁移指南](https://v3.cn.vuejs.org/guide/migration/introduction.html))
- [Vue Router 4](https://next.router.vuejs.org/zh/)
- [Pinia](https://pinia.vuejs.org/)
- [Element Plus](https://element-plus.org/#/zh-CN)
