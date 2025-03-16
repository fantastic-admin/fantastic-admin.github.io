import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  typescript: true,
  ignores: [
    '**/*.md',
    '.vitepress/cache',
    '.vitepress/dist',
  ],
})
