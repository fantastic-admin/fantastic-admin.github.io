<script setup lang="ts">
import { withBase } from 'vitepress'
import { onMounted, ref } from 'vue'
import mediumZoom from 'medium-zoom'

defineProps({
  src: String,
})

const imgRef = ref(null)

onMounted(() => {
  imgRef.value && mediumZoom(imgRef.value, { background: 'var(--vp-c-bg)' })
})
</script>

<template>
  <p v-if="src">
    <img ref="imgRef" :src="withBase(src)" loading="lazy">
  </p>
</template>
