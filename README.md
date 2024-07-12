# weapp-tailwindcss 的原生 typescript 模板

使用微信开发者工具直接打开即可

## 功能

- `tailwindcss` 支持
- `px` -> `rpx` 可在 `postcss.config.js` 中的 `postcss-pxtransform` 配置
- `rem` -> `rpx` 可在 `weapp-tw.config.js` 中的 `weappTailwindcssOptions#rem2rpx` 配置

另外由于目前默认开启了 `px` 转化 `rpx` 的功能，这在某些场景下面是不适用的，想要禁用某个文件 `px` 转 `rpx` 的行为

你可以在 样式表文件内头部添加 `/*postcss-pxtransform disable*/` 这样的注释来禁用这个转化，详见 [CSS 单位转化](https://weapp-tw.icebreaker.top/docs/quick-start/css-unit-transform) 章节

## 安装

`pnpm i`

## 开发

`pnpm dev`

## 构建

`pnpm build`

## 打开微信开发者工具

`pnpm open`

## 官网

[weapp-tw.icebreaker.top](https://weapp-tw.icebreaker.top)
