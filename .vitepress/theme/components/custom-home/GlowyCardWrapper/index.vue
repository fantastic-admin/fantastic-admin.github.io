<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue'

const props = withDefaults(
  defineProps<{
    hue?: number
    saturation?: number
    lightness?: number
    size?: number
    border?: number
    radius?: number
  }>(),
  {
    hue: 210,
    saturation: 100,
    lightness: 50,
    size: 200,
    border: 2,
    radius: 10,
  },
)

const glowCardWrapper = useTemplateRef('glowCardWrapper')

function syncPointer({ x, y }: { x: number, y: number }) {
  if (glowCardWrapper.value) {
    glowCardWrapper.value.style.setProperty('--glowy-card-x', x.toFixed(2))
    glowCardWrapper.value.style.setProperty(
      '--glowy-card-xp',
      (x / window.innerWidth).toFixed(2),
    )

    glowCardWrapper.value.style.setProperty('--glowy-card-y', y.toFixed(2))
    glowCardWrapper.value.style.setProperty(
      '--glowy-card-yp',
      (y / window.innerHeight).toFixed(2),
    )
  }
}

function leaveWrapper() {
  if (glowCardWrapper.value) {
    glowCardWrapper.value.style.setProperty('--glowy-card-x', '0')
    glowCardWrapper.value.style.setProperty('--glowy-card-y', '0')
  }
}

onMounted(() => {
  if (glowCardWrapper.value) {
    glowCardWrapper.value.addEventListener('pointermove', syncPointer)
    glowCardWrapper.value.addEventListener('pointerleave', leaveWrapper)
  }
})
</script>

<template>
  <main
    ref="glowCardWrapper" :style="{
      '--glowy-card-backdrop': 'hsl(0deg 0% 60% / 12%)',
      '--glowy-card-backup-border': 'var(--glowy-card-backdrop)',
      '--glowy-card-hue': props.hue.toString(),
      '--glowy-card-saturation': props.saturation.toString(),
      '--glowy-card-lightness': props.lightness.toString(),
      '--glowy-card-size': props.size.toString(),
      '--glowy-card-border': props.border.toString(),
      '--glowy-card-radius': props.radius.toString(),
    }"
  >
    <slot />
  </main>
</template>
