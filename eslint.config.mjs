// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/html-self-closing': ['warn', {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
      }],
    },
    ignores: ['*.css', '*.png', '*.ico', '*.txt', 'src/public/'],
  },
)
