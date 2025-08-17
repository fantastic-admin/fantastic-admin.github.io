# 为什么选择我们 ?

如果你正在做后台框架选型或调研，相信这篇介绍能帮助你快速了解 Fantastic-admin 的亮点，以及与同类型框架对比，又具备哪些优势。

## 长期且稳定

<script setup>
const from = '2020/10/17'
const time = new Date().getTime() / 1000 - new Date(from).getTime() / 1000
const day = parseInt(time / 60 / 60 / 24)
</script>

Fantastic-admin 自 {{ from }} 正式对外发布，截止到今天为止，已持续维护 **{{ day }}** 天。

2021 年底做过一次不精确统计，全网约有数千名开发者，应用在数百个项目/产品中。

## 简单易用

开箱即用，是我们一直在努力的方向。

事实也证明 Fantastic-admin 足够易于上手，在使用 Fantastic-admin 的开发者中，**非前端开发者占据了约有一半以上的人数**，他们大部分为后端 PHP/Java/.NET/GO 开发者，以及少部分学生人群。

## 技术栈先进

先进的技术栈能保证开发者可以使用更新的特性和语法糖去编写业务代码，Fantastic-admin 采用了目前最先进的技术栈，包括但不限于：

Vite + Vue3 + Vue-router + Pinia + UnoCSS + Shadcn-vue + TypeScript

## 颜值在线

在保证简单易用的基础上，Fantastic-admin 参考了国内外数十款中后台，吸收其优点并进行了融合与统一，细到每一处动画效果的执行时间都经过大量反复的调试。

## 风格可配置

提供明亮和暗黑共计 **16** 款颜色主题，**7** 款导航栏模式，**4** 款导航栏激活风格和 **4** 款页宽模式。

通过布局与主题组合搭配，可实现**数百种**不同风格的界面。

## UI 组件库可替换

框架默认使用了 Element Plus 作为 UI 组件库，但你也可以**轻松替换成其它 UI 组件库**，如下：

- 《[替换为 Ant Design Vue](/guide/replace-to-antd)》
- 《[替换为 Arco Design Vue](/guide/replace-to-arco)》
- 《[替换为 Naive UI](/guide/replace-to-naive)》
- 《[替换为 TDesign](/guide/replace-to-tdesign)》
- 《[替换为 Vexip UI](/guide/replace-to-vexip)》
- 《[替换为 iDux](/guide/replace-to-idux)》

<table>
  <tr>
    <th width="33%" style="text-align: center;">Ant Design Vue</th>
    <th width="33%" style="text-align: center;">Arco Design Vue</th>
    <th width="33%" style="text-align: center;">Naive UI</th>
  </tr>
  <tr style="background-color: inherit;">
    <td><ZoomImg src="/ui-antd.png" /></td>
    <td><ZoomImg src="/ui-arco.png" /></td>
    <td><ZoomImg src="/ui-naive.png" /></td>
  </tr>
  <tr>
    <th style="text-align: center;">TDesign</th>
    <th style="text-align: center;">Vexip UI</th>
    <th style="text-align: center;">iDux</th>
  </tr>
  <tr style="background-color: inherit;">
    <td><ZoomImg src="/ui-tdesign.png" /></td>
    <td><ZoomImg src="/ui-vexip.png" /></td>
    <td><ZoomImg src="/ui-idux.png" /></td>
  </tr>
</table>

## 丰富的菜单导航设置

对比同类产品只有几种基础的设置项，Fantastic-admin 提供了**十余种**设置项，可以设置导航的各种展示形态，包括但不限于标题、图标、徽标、外链、权限、缓存等。

## 导航分组

对比同类产品直接把一级路由当做主导航的方案，Fantastic-admin 则将主导航与路由进行了解耦，实现了**真正意义上的主导航**（即导航分组），这种模式的扩展性和维护性会更强。

## 基于文件系统的路由

可通过配置启用，启用后将摆脱传统 Vue 开发手动配置路由的过程，Fantastic-admin 支持**通过文件的目录结构，自动生成路由配置**，大大提高开发效率。

## 为什么不是它们？

欢迎访问 [选择合适的后台管理框架](https://hurui.me/pick-the-right-admin/) 了解同类产品详细对比。

:::tip 作者寄语
整理的几款同类产品，它们不管在技术栈上、功能的丰富度上、更新维护的频率上，亦或是 star 数上，都是相对可靠的产品。

但是可靠并不一定代表适合所有人，同样一个功能的实现，不同的产品会有不同的设计思路，这也是我认为 Fantastic-admin 在一众同类产品中，最有价值的地方。

当然，大家在做技术选型的时候，也需要保持自己的独立思考，这样才能选出真正适合自己的产品。
:::
