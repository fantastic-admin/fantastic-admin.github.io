import type { Theme } from 'unocss/preset-uno'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWind3,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

export default defineConfig<Theme>({
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'src/**/*.{js,ts}',
      ],
    },
  },
  shortcuts: [
    [/^flex-?(col)?-(start|end|center|baseline|stretch)-?(start|end|center|between|around|evenly|left|right)?$/, ([, col, items, justify]) => {
      const cls = ['flex']
      if (col === 'col') {
        cls.push('flex-col')
      }
      if (items === 'center' && !justify) {
        cls.push('items-center')
        cls.push('justify-center')
      }
      else {
        cls.push(`items-${items}`)
        if (justify) {
          cls.push(`justify-${justify}`)
        }
      }
      return cls.join(' ')
    }],
  ],
  presets: [
    presetWind3(),
    presetAnimations(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
})
