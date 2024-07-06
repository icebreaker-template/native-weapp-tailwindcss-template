const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['miniprogram/**/*.{ts,js,wxml}'],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      // 访问 https://icon-sets.iconify.design/ 获取更多的 icon
      collections: getIconCollections(['mdi']),
    }),
  ],
  corePlugins: {
    preflight: false,
  },
}
