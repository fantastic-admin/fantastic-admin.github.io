<script lang="ts" setup>
import { computed, ref } from 'vue'

const fold = ref(true)
const images = computed(() => {
  return fold.value ? 9 : 18
})
</script>

<template>
  <div class="customer-evaluate">
    <div v-for="i in images" :key="i" class="item">
      <ZoomImg :src="`/customer-${i}.png`" />
    </div>
    <div v-if="fold" class="item more" @click="fold = false">
      <p>查看全部</p>
    </div>
  </div>
</template>

<style scoped>
.customer-evaluate {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.customer-evaluate .item {
  width: 100%;
  padding: 8px;
  padding: 8px;
  display: inline-flex;
}

.customer-evaluate .item.more {
  cursor: pointer;
  color: #999;
}

.customer-evaluate .item p {
  width: 100%;
  margin: 0;
  padding: 10px;
  background-color: var(--vp-c-bg-soft);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.customer-evaluate .item p :deep(img) {
  object-fit: contain;
}

@media (min-width: 640px) {
  .customer-evaluate .item {
    width: calc(100% / 3);
  }

  .customer-evaluate .item p :deep(img) {
    max-height: 100px;
  }
}

@media (min-width: 960px) {
  .customer-evaluate .item {
    width: calc(100% / 5);
  }
}
</style>
