# 代码规范

:::tip 建议
请确保已阅读《[准备工作 - 开发环境](ready#开发环境)》，并且按照文档说明安装好相关软件及扩展。
:::

为保证代码风格统一，请使用 [Visual Studio Code](https://code.visualstudio.com/) 做为开发 IDE ，框架源码里已提供相关配置文件，可直接测试效果：在保存代码时，会自动对当前文件进行代码格式化操作。

## IDE 配置

配置文件为 `.editorconfig` ，通常情况下无需做任何修改。

## ESLint 配置

配置文件为 `.eslintrc` ，框架使用 [antfu/eslint-config](https://github.com/antfu/eslint-config) 做为规范，并无增加其它配置，如果你对默认的规则有异议，可以查阅 [ESLint](https://eslint.org/) 官网规则并在 `.eslintrc` 文件中进行覆盖。

当你对规则进行修改后，原有的代码可能会因为规则的变动导致编辑器大量提示错误，你可以通过运行 `pnpm run lint:eslint` 进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。

## StyleLint 配置

配置文件为 `.stylelintrc` 和 `.stylelintignore` ，如果你对默认的规则有异议，可以查阅 [Stylelint](https://stylelint.io/) 官网规则并在 `.stylelintrc` 文件中进行修改。

当你对规则进行修改后，原有的代码可能会因为规则的变动导致编辑器大量提示错误，你可以通过运行 `pnpm run lint:stylelint` 进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。

## husky & lint-staged

由于 IDE 能做的事比较有限，只能对代码的书写规范进行格式化，对于一些无法自动修复的错误代码，如果没有改正到就被推送到 git 仓库，在多人协作开发时，可能会影响到别人的开发体验。所以框架集成了 [husky](https://github.com/typicode/husky) 和 [lint-staged](https://github.com/okonet/lint-staged) 这两个依赖来解决这一问题。

在提交代码时，husky 会通过 lint-staged 对 `/src` 目录下的 js vue scss 文件进行分别进行 eslint 和 stylelint 检测，如果有报错，则会阻止本次代码提交，直到开发者修改完所有错误代码后，才允许提交到 git 仓库，这样可以确保 git 仓库里的代码不会有语法错误。

::: tip
- 通过修改 `.eslintignore`(需自行新建) 和 `.stylelintignore` 可忽略无需做代码规范校验的文件，例如在项目中导入了一些第三方的插件代码或组件代码，我们就可以将其进行忽略。
- 如果不想使用该特性，你可以在 `.husky/pre-commit` 文件中注释 `pnpm lint-staged` 这行代码。
:::