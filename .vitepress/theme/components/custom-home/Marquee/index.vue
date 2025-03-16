<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '../utils'

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    reverse?: boolean
    pauseOnHover?: boolean
    vertical?: boolean
    repeat?: number
  }>(),
  {
    reverse: false,
    pauseOnHover: false,
    vertical: false,
    repeat: 4,
  },
)

const gradient = computed(() => props.vertical
  ? [
      'pointer-events-none absolute inset-x-0 top-0 h-1/3 from-white bg-gradient-to-b dark:from-background',
      'pointer-events-none absolute inset-x-0 bottom-0 h-1/3 from-white bg-gradient-to-t dark:from-background',
    ]
  : [
      'pointer-events-none absolute inset-y-0 left-0 w-1/5 from-white bg-gradient-to-r dark:from-background',
      'pointer-events-none absolute inset-y-0 right-0 w-1/5 from-white bg-gradient-to-l dark:from-background',
    ],
)
</script>

<template>
  <div class="relative">
    <div
      :class="cn(
        'group/marquee flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        vertical ? 'flex-col' : 'flex-row',
        props.class,
      )"
    >
      <div
        v-for="index in repeat"
        :key="index"
        :class="cn(
          'flex shrink-0 justify-around [gap:var(--gap)]',
          vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
          pauseOnHover ? 'group-hover/marquee:[animation-play-state:paused]' : '',
        )"
        :style="{
          animationDirection: reverse ? 'reverse' : 'normal',
        }"
      >
        <slot />
      </div>
    </div>
    <div :class="gradient[0]" />
    <div :class="gradient[1]" />
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee var(--duration) linear infinite;
  animation-direction: reverse;
}

.animate-marquee-vertical {
  animation: marquee-vertical var(--duration) linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-vertical {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(calc(-100% - var(--gap)));
  }
}
</style>
