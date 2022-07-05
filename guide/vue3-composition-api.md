# 使用 Composition API 开发

::: tip
Composition API 是 Vue3 全新提供的一种语法，对于从 Vue2 就在使用的开发者，如果一时半会没办法立马上手 Composition API ，你依旧可以在项目中使用 Options API 做开发。当然我们更建议你使用 Composition API 进行开发，它比 Options API 更灵活且易读。
:::

如果你还不熟悉 Composition API ，那么我们建议你阅读 Vue3 [官方文档](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)了解；如果你已经熟悉 Composition API ，那么我们建议你在开发的时候，使用 [`<script setup>`](https://v3.cn.vuejs.org/api/sfc-script-setup.html) 语法糖进行开发，它将提高很多开发上的效率。

同时得益于 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 的特性，在 `<script setup>` 里无需导入相关 API ，该依赖会自动导入（默认支持 vue，vue-router 和 pinia ）。

```vue {3-4}
<script setup>
// 原先需要手动 import 相关 API
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const count = ref(0)
const doubled = computed(() => count.value * 2)

const route = useRoute()
const router = useRouter()
console.log(route.path)
router.push('/dashboard')
</script>
```

```vue
<script setup>
// 现在直接使用即可
const count = ref(0)
const doubled = computed(() => count.value * 2)

const route = useRoute()
const router = useRouter()
console.log(route.path)
router.push('/dashboard')
</script>
```