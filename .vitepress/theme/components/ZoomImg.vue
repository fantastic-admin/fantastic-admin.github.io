<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps({
  src: String,
})
</script>

<template>
  <p v-if="src">
    <img data-zoomable :src="withBase(src)" loading="lazy">
  </p>
</template>
