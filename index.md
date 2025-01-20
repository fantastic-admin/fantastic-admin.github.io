---
layout: home

title: Fantastic-admin
titleTemplate: 一款 Vue 中后台管理系统框架

hero:
  name: Fantastic-admin
  text: 杰出的管理系统框架
  tagline: 开箱即用，提供舒适开发体验
  image:
    src: /logo.svg
    alt: Fantastic-admin
  actions:
    - theme: brand
      text: 开始
      link: /guide/intro
    - theme: alt
      text: 为什么选我们 ?
      link: /guide/why
    - theme: alt
      text: 更新日志
      link: /guide/changelog
    - theme: cta buy
      text: 免费领取 v1 专业版
      link: /get-v1-pro
    - theme: cta
      text: 演示地址：基础版 ↗
      link: https://fantastic-admin.hurui.me/basic-example
    - theme: cta
      text: 演示地址：专业版 ↗
      link: https://fantastic-admin.hurui.me/pro-example

features:
- icon: 💪
  title: 先进的技术栈
  details: Vite + Vue3 + Vue-router + Pinia + UnoCSS + TypeScript ，采用业内先进的技术栈，使框架始终保持新鲜
- icon: 🎨
  title: 风格百变
  details: 通过布局与主题组合搭配，可实现数百种不同风格的界面
- icon: 🗺️
  title: 多功能导航栏
  details: 配置路由即可自动生成导航栏，轻松实现导航嵌套、图标、外链、徽章、权限等功能
- icon: 🔑
  title: 全场景权限验证
  details: 内置鉴权组件、鉴权指令和鉴权函数，真正实现各种场景下的权限验证
- icon: 🧊
  title: 页面缓存
  details: 支持无限层级的页面缓存，应对各种需求场景，并提供简单易懂的 API 方便开发者快速集成
- icon: 🌐
  title: 面向国际
  details: 内置业内通用国际化解决方案，通过简单配置实现多国语言切换
- icon: 📦
  title: 丰富的组件
  details: 内置常用组件，提高开发效率；同时提供组件快速生成工具
- icon: 📃
  title: 丰富的业务页面
  details: 通过真实场景及真实需求，沉淀出数十个业务应用的静态页面，方便开发人员直接使用
---

<script setup>
import { onMounted } from 'vue'
import { pureFrontendTag } from './.vitepress/utils/pureFrontendTag'
import { fetchReleaseTag } from './.vitepress/utils/fetchReleaseTag'

onMounted(() => {
  pureFrontendTag()
  fetchReleaseTag()
})
</script>
