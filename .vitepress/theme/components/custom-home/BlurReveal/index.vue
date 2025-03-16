<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Motion } from 'motion-v'
import { onMounted, ref, useSlots, watchEffect } from 'vue'

const props = withDefaults(defineProps<{
  duration?: number
  delay?: number
  blur?: string
  yOffset?: number
  class?: HTMLAttributes['class']
}>(), {
  duration: 1,
  delay: 1,
  blur: '20px',
  yOffset: 20,
})

const slots = useSlots()

const children = ref<any>([])

onMounted(() => {
  // 主动捕获默认槽位中提供的所有内容
  watchEffect(() => {
    children.value = slots.default ? slots.default() : []
  })
})

function getInitial() {
  return {
    opacity: 0,
    filter: `blur(${props.blur})`,
    y: props.yOffset,
  }
}

function getAnimate() {
  return {
    opacity: 1,
    filter: `blur(0px)`,
    y: 0,
  }
}
</script>

<template>
  <div :class="props.class">
    <Motion
      v-for="(child, index) in children"
      :key="index"
      as="div"
      :initial="getInitial()"
      :in-view="getAnimate()"
      :transition="{
        duration: props.duration,
        easing: 'easeInOut',
        delay: props.delay * index,
      }"
    >
      <component :is="child" />
    </Motion>
  </div>
</template>
