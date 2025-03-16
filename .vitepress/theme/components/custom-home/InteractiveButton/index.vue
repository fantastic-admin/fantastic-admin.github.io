<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '../utils'

const props = defineProps<{
  text?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button
    :class="cn(
      'group relative cursor-pointer overflow-hidden rounded-full border border-solid border-[var(--vp-c-divider)] bg-light dark:bg-dark p-2 ps-8 pe-6 text-center font-semibold',
      props.class,
    )"
  >
    <span class="inline-block translate-x-1 whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
      {{ text }}
    </span>
    <div class="absolute inset-s-2 top-0 z-10 size-full flex translate-x-12 items-center justify-center gap-1 text-[var(--vp-button-brand-text)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
      <span class="whitespace-nowrap">{{ text }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-arrow-right"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </div>
    <div class="absolute inset-s-5 top-[40%] size-2 scale-100 rounded-lg bg-[var(--vp-button-brand-bg)] transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:size-full group-hover:scale-[1.8] group-hover:bg-[var(--vp-button-brand-bg)]" />
  </button>
</template>
