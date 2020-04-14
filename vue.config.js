module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-flip/' : '/',
  css: { extract: false }
}
