---
url: /index.md
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
