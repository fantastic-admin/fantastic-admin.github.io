<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '../utils'

const props = withDefaults(defineProps<{
  delay?: number
  duration?: number
  textEndColor?: string
  class?: HTMLAttributes['class']
}>(), {
  delay: 0,
  duration: 2000,
  textEndColor: 'inherit',
})

const delayMs = computed(() => `${props.delay}ms`)
const durationMs = computed(() => `${props.duration}ms`)
</script>

<template>
  <span :class="cn('inline-block px-1 pb-1', props.class)"><slot /></span>
</template>

<style scoped>
@keyframes background-expand {
  0% {
    background-size: 0% 100%;
  }

  100% {
    background-size: 100% 100%;
  }
}

@keyframes text-color-change {
  0% {
    color: inherit;
  }

  100% {
    color: v-bind(textEndColor);
  }
}

span {
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 0% 100%;
  animation:
    background-expand v-bind(durationMs) ease-in-out v-bind(delayMs) forwards,
    text-color-change v-bind(durationMs) ease-in-out v-bind(delayMs) forwards;
}
</style>
