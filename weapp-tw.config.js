/** @type {import('@weapp-tailwindcss/cli').UserConfig} */
const config = {
  src: './miniprogram',
  preprocessorOptions: {
    sass: true,
  },
  weappTailwindcssOptions: {
    rem2rpx: true,
  },
}

module.exports = config
