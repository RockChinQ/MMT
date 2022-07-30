module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // 要发送请求的服务器地址
        target: 'ssss',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false
}
