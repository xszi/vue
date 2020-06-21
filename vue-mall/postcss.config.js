module.exports = {
  plugins: {
    autoprefixer: {},
    // viewport适配方案
    // 文档地址 https://github.com/evrone/postcss-px-to-viewport
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      // 黑名单, 带有黑名单类名的元素, px不会被转换
      // van-circle__layer 该项仅在使用 Circle 组件时需要
      // 原因参见 https://github.com/youzan/vant/issues/1948
      selectorBlackList: ['van-circle__layer'],
      // 最小的转换数值, 1px不转换
      minPixelValue: 1
    }
  }
}
