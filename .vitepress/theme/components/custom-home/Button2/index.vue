<template>
  <button
    class="group/button relative inline-flex items-center justify-center overflow-hidden border border-white/20 rounded-md border-solid bg-gray-800/30 px-6 py-2 text-base text-dark/80 font-semibold backdrop-blur-lg transition-all duration-300 ease-in-out dark:text-white hover:shadow-gray-600/50 hover:shadow-xl"
  >
    <span class="text-base">
      <slot />
    </span>
    <div
      class="[transform:skew(-13deg)_translateX(-100%)] absolute inset-0 h-full w-full flex justify-center group-hover/button:[transform:skew(-13deg)_translateX(100%)] group-hover/button:duration-1000"
    >
      <div class="relative h-full w-10 bg-white/20" />
    </div>
  </button>
</template>
