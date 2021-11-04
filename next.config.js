const withTM = require('next-transpile-modules')([])

module.exports = withTM({
  reactStrictMode: true,
  redirects: async () => [
    // { permanent: true, source: '/home', destination: '/' },
  ],
  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'pt-BR',
  },
})
