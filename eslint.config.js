import antfu from '@antfu/eslint-config'

export default await antfu({
  vue: true,
  typescript: true,
  overrides: {
    vue: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
    },
  },
})
