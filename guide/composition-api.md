---
url: /guide/composition-api.md
---
# Composition API

如果你还不熟悉 [Composition API](https://cn.vuejs.org/guide/extras/composition-api-faq) ，建议你先阅读 Vue3 官方文档了解；如果你已经熟悉 Composition API ，那么我们建议你在开发的时候，使用 [`<script setup>`](https://v3.cn.vuejs.org/api/sfc-script-setup.html) 语法糖进行开发，它将提高很多开发上的效率。

得益于 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 的特性，在 `<script setup>` 里无需导入相关 API ，该依赖会自动导入（默认支持 vue，vue-router 和 pinia ）。

```vue
<script setup lang="ts">
// 无需手动 import 相关 API
import { computed, ref } from 'vue' // [!code --]
import { useRoute, useRouter } from 'vue-router' // [!code --]

const count = ref(0)
const doubled = computed(() => count.value * 2)

const route = useRoute()
const router = useRouter()
console.log(route.path)
router.push('/dashboard')
</script>
```
