// craco.config.js

const {CracoAliasPlugin, configPaths} = require('react-app-rewire-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@assets': './src/assets/',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@translations': './src/components/translations',
          '@constants': './src/constants',
          '@pages': './src/pages',
          '@navigation': './src/navigation',
          '@theme': './src/theme'
        }
      }
    }
  ]
}
