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

事实也证明 Fantastic-admin 足够易于上手，在使用 Fantastic-admin 的开发者中，**非前端开发者占据了约有一半以上的人数**，它们大部分为后端 PHP/Java/.NET/GO 开发者，以及少部分学生人群。

## 颜值在线

在保证简单易用的基础上，Fantastic-admin 参考了国内外数十款中后台，吸收其优点并进行了融合与统一，细到每一处动画效果的执行时间都经过大量反复的调试。

## 风格可配置

提供明亮和暗黑共计 **12** 款颜色主题，**5** 款导航栏模式，**2** 款导航栏填充风格，**4** 款导航栏激活风格和 **4** 款页宽模式。

通过布局与主题组合搭配，可实现**数百种**不同风格的界面。

![](/intro-1.png){data-zoomable}

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

## 丰富的导航设置

对比同类产品只有几种基础的设置项，Fantastic-admin 提供了**十余种**设置项，可以设置导航的各种展示形态，包括但不限于标题、图标、徽标、外链、权限、缓存等。

详细可阅读《[路由（导航）- 导航配置](router#导航配置)》。

## 导航分组

对比同类产品直接把一级路由当做主导航的方案，Fantastic-admin 则将主导航与路由进行了解耦，实现了**真正意义上的主导航**（即导航分组），这种模式的扩展性和维护性会更强。

## 页面缓存最佳方案

多级路由的页面缓存曾经是在 Vue 后台开发者圈内比较热门的话题，作者也曾参与其中，是第一批提出**将多级路由转成二级路由**方案的人，并在 Fantastic-admin 实践并应用，从而彻底解决多级路由在各种场景下的缓存问题。

## 基于文件系统的路由

摆脱传统 Vue 开发手动配置路由的过程，Fantastic-admin 支持**通过文件的目录结构，自动生成路由配置**，大大提高开发效率。

## 为什么不是它们？

:::tip 作者寄语
以下整理的几款同类产品是我相对比较认可的，它们不管在技术栈上，还是更新维护的频率上，亦或是 star 数上，都是相对可靠的产品。

但从我作为 Fantastic-admin 作者的主观角度来看，它们提供的能力和特性或许和 Fantastic-admin 基础版不相上下，但远远比不上 Fantastic-admin 专业版。
:::

- [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)
  - 优势
    - 示例丰富
    - 开发文档齐全
  - 劣势
    - 原作者已离开项目，目前由社区维护
    - 使用过的开发者普遍反馈封装过度，导致上手成本有点高
- [vue-admin-better](https://github.com/chuzhixin/vue-admin-better)
  - 优势
    - 示例丰富
  - 劣势
    - 开源版本功能较少
    - 开发文档需要付费加群才能查阅
    - 付费版本价格较贵
- [vue-pure-admin](https://github.com/pure-admin/vue-pure-admin)
  - 优势
    - 示例丰富
    - 开发文档齐全
    - 生态丰富，有提供 electron/tauri 支持
  - 劣势
    - 配置项较少，可定制性不高
    - 精简版本与演示版本更新不同步，且精简版本更新较慢
    - 封装的工具函数仅对核心成员开源
- [Naive Admin](https://www.naiveadmin.com/home)
  - 优势
    - 示例丰富
    - 提供多款 UI 组件库的版本，也有提供带后端支持的版本
  - 劣势
    - 没有提供开源版本
    - 不同 UI 组件库的版本需单独购买，且价格较贵
- [EleAdmin](https://eleadmin.com/)
  - 优势
    - 示例丰富
    - 提供 Element Plus 和 Ant Design Vue 两个版本
  - 劣势
    - 没有提供开源版本
    - 不同 UI 组件库的版本需单独购买，且价格较贵