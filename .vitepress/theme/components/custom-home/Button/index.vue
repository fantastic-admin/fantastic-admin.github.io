<template>
  <div class="group relative inline-flex items-center justify-center gap-4">
    <div
      class="transitiona-all absolute inset-0 rounded-xl from-indigo-500 via-pink-500 to-yellow-400 bg-gradient-to-r opacity-60 blur-lg filter duration-1000 group-hover:opacity-100 group-hover:duration-200"
    />
    <a
      role="button"
      class="group relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-3 text-base text-white font-semibold transition-all duration-200 hover:bg-gray-800 hover:shadow-gray-600/30 hover:shadow-lg"
      title="payment"
      href="#"
    >
      <slot />
      <svg
        aria-hidden="true"
        viewBox="0 0 10 10"
        height="10"
        width="10"
        fill="none"
        class="ml-2 stroke-2 stroke-white -mr-1"
      >
        <path
          d="M0 5h7"
          class="opacity-0 transition group-hover:opacity-100"
        />
        <path
          d="M1 1l4 4-4 4"
          class="transition group-hover:translate-x-[3px]"
        />
      </svg>
    </a>
  </div>
</template>
