/** @type {import('@weapp-tailwindcss/cli').UserConfig} */
const config = {
  src: './miniprogram',
  preprocessorOptions: {
    // 你可以开启这个选项来打开主动 sass 编译
    // 这可以让你有能力，添加一些额外的 postcss 插件，不打开可能会报错
    sass: true,
  },
  weappTailwindcssOptions: {
    rem2rpx: true,
    // 下方的配置，可用于组件 externalClasses 自定义转译
    // customAttributes: {
    //   '*': ['custom-class'],
    // },
  },
  // 你可以开启这个选项来让 cli 主动编译 typescript
  // 需要先安装 typescript 再开启
  // typescriptOptions: true,

  // 开启后就不需要在 project.config.json 声明
  // "useCompilerPlugins": [
  //   "typescript"
  // ],
}

module.exports = config
