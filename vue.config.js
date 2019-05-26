module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Lantern2019/'
      : '/',
    pwa: {
      appleMobileWebAppCapable: 'yes'
    }
};
