---
url: /guide/jsx.md
---
# JSX

> 如果你不了解 JSX ，甚至没有听说过，可以访问最后推荐的几篇文章，先快速了解熟悉下。

首先说明一点，JSX 并不是 Vue 官方推崇的开发方式，这点从 Vue 官方文档上就可以看来出来。Vue 官方推荐大家使用 SFC(Single File Component) 的方式去编写 Vue 组件，也就是我们熟悉的 `.vue` 文件。

## 开发模式

### 在 tsx 文件中开发

```tsx
// 在 render 中返回
export default defineComponent({
  name: 'Tsx',
  render() {
    return <div>我是一个div</div>
  },
})

// 在 setup 中返回
export default defineComponent({
  name: 'Tsx',
  setup() {
    return () => <div>我是一个div</div>
  },
})
```

以上两种方式均可以，具体看个人开发习惯。其中 setup 中访问不到 `this` ，而在 render 中可以通过 `this` 访问当前 Vue 实例。

### 在 vue 文件中开发

是的，你依旧可以在 `.vue` 文件中以 SFC 的方式去编写开发我们的业务代码，只需要给 `<script>` 标签增加 `lang="tsx"` 的设置即可，同样也支持上面所提到的两种开发方式。

此外，在 `.vue` 文件中开发可直接使用 `<style scoped>` 特性，而在 `.tsx` 文件中开发，则需要使用 [CSS Modules](https://cn.vitejs.dev/guide/features.html#css-modules) 来实现样式隔离。

## 阅读参考

> 由于作者对 JSX 的了解也仅是浅尝辄止，更多的使用技巧可参考下面相关链接，同时也欢迎对 JSX 有深入使用经验的小伙伴加群讨论。

* [JSX 语法](https://github.com/vuejs/babel-plugin-jsx#syntax)
* [在 vue3 中编写 jsx 的两种方式](https://www.jiangweishan.com/article/vuejs20210715a3.html)
* [拥抱 Vue3 系列之 JSX 语法](https://juejin.cn/post/6846687592138670094)
* [为什么我推荐使用 JSX 开发 Vue3](https://juejin.cn/post/6911175470255964174)
* [vue3 下 jsx 教学，保证业务上手无问题！手敲代码，有知识点，附带和 template 对比](https://juejin.cn/post/6911883529098002446)
