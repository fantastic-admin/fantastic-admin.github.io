<template>
  <button
    class="group rounded-2xl from-yellow-800 via-yellow-600 to-yellow-800 bg-gradient-to-br p-1 brightness-150 invert transition ease-in-out hover:rotate-2 hover:scale-105 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600 hover:shadow-lg hover:shadow-yellow-700/60 dark:brightness-100"
  >
    <div
      class="h-full w-full rounded-xl bg-black/80 px-6 py-2 font-semibold backdrop-blur-xl"
    >
      <div
        class="flex gap-1 text-yellow-600 group-hover:scale-100 group-hover:text-yellow-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.8"
          class="group-hover:stroke-{1.99} h-6 w-6 stroke-yellow-600 group-hover:stroke-yellow-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
          />
        </svg>
        <slot />
      </div>
    </div>
  </button>
</template>
