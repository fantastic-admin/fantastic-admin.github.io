<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { cn } from '../utils'

const props = withDefaults(defineProps<{
  words: string[]
  duration?: number
  class?: HTMLAttributes['class']
}>(), {
  duration: 3000,
})

defineEmits(['animationStart', 'animationComplete'])

const currentWord = ref(props.words[0])
const isVisible = ref(true)
const timeoutId = ref<number | null>(null)

function startAnimation() {
  isVisible.value = false

  setTimeout(() => {
    const currentIndex = props.words.indexOf(currentWord.value)
    const nextWord = props.words[currentIndex + 1] || props.words[0]
    currentWord.value = nextWord
    isVisible.value = true
  }, 600)
}

const splitWords = computed(() => {
  return currentWord.value.split(' ').map(word => ({
    word,
    letters: word.split(''),
  }))
})

function startTimeout() {
  timeoutId.value = window.setTimeout(() => {
    startAnimation()
  }, props.duration)
}

onMounted(() => {
  startTimeout()
})

onBeforeUnmount(() => {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value)
  }
})

watch(isVisible, (newValue) => {
  if (newValue) {
    startTimeout()
  }
})
</script>

<template>
  <div class="relative inline-block px-2">
    <Transition @after-enter="$emit('animationStart')" @after-leave="$emit('animationComplete')">
      <div v-show="isVisible" :class="cn('relative z-10 inline-block text-left text-neutral-900 dark:text-neutral-100', props.class)">
        <template v-for="(wordObj, wordIndex) in splitWords" :key="wordObj.word + wordIndex">
          <span
            class="inline-block whitespace-nowrap opacity-0"
            :style="{
              animation: `fade-in-word 0.3s ease forwards`,
              animationDelay: `${wordIndex * 0.3}s`,
            }"
          >
            <span
              v-for="(letter, letterIndex) in wordObj.letters"
              :key="wordObj.word + letterIndex"
              class="inline-block opacity-0"
              :style="{
                animation: `fade-in-letter 0.2s ease forwards`,
                animationDelay: `${wordIndex * 0.3 + letterIndex * 0.05}s`,
              }"
            >
              {{ letter }}
            </span>
          </span>
        </template>
      </div>
    </Transition>
  </div>
</template>

<style>
@keyframes fade-in-word {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}

@keyframes fade-in-letter {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}

.v-enter-active {
  animation: enter-word 0.6s ease-in-out forwards;
}

.v-leave-active {
  animation: leave-word 0.6s ease-in-out forwards;
}

@keyframes enter-word {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes leave-word {
  0% {
    opacity: 1;
    filter: blur(0);
    transform: scale(1);
  }

  100% {
    opacity: 0;
    filter: blur(8px);
    transform: scale(2);
  }
}
</style>
