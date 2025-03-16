<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, onMounted, ref } from 'vue'
import { cn } from '../utils'

const props = withDefaults(defineProps<{
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
  class?: HTMLAttributes['class']
  slotClass?: HTMLAttributes['class']
}>(), {
  gradientSize: 200,
  gradientColor: 'var(--vp-button-brand-bg)',
  gradientOpacity: 0.1,
})

const mouseX = ref(-props.gradientSize * 10)
const mouseY = ref(-props.gradientSize * 10)

function handleMouseMove(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}

function handleMouseLeave() {
  mouseX.value = -props.gradientSize * 10
  mouseY.value = -props.gradientSize * 10
}

onMounted(() => {
  mouseX.value = -props.gradientSize * 10
  mouseY.value = -props.gradientSize * 10
})

const backgroundStyle = computed(() => {
  return `radial-gradient(
    circle ${props.gradientSize}px at ${mouseX.value}px ${mouseY.value}px,
    ${props.gradientColor} 0%,
    rgba(0, 0, 0, 0) 100%
  )`
})
</script>

<template>
  <div
    :class="cn('group/spotlightCard relative size-full overflow-hidden border border-solid border-[var(--vp-c-divider)] rounded-xl bg-neutral-950/[.012] dark:bg-white/5', props.class)"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div :class="cn('relative z-10', props.slotClass)">
      <slot />
    </div>
    <div
      class="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/spotlightCard:opacity-100"
      :style="{
        background: backgroundStyle,
        opacity: gradientOpacity,
      }"
    />
  </div>
</template>
