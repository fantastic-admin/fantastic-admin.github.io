<template>
  <button
    class="group relative h-12 cursor-pointer rounded-full bg-white px-6 py-3 text-sm text-black font-semibold shadow transition-all duration-200 ease-in-out hover:bg-zinc-300 hover:shadow-lg"
  >
    <div class="relative flex items-center justify-center gap-2">
      <span class="relative inline-block overflow-hidden">
        <span
          class="block transition-transform duration-300 group-hover:-translate-y-full"
        >
          <slot />
        </span>
        <span
          class="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
        >
          立即访问
        </span>
      </span>

      <svg
        class="h-4 w-4 transition-transform duration-200 group-hover:rotate-45"
        viewBox="0 0 24 24"
      >
        <circle fill="currentColor" r="11" cy="12" cx="12" />
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="white"
          d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
        />
      </svg>
    </div>
  </button>
</template>
