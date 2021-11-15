const path = require('path')
const {alias, configPaths} = require('react-app-rewire-alias')
const rewireAliases = require('react-app-rewire-aliases')

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@assets': path.resolve(__dirname, './src/assets/'),
    '@components': path.resolve(__dirname, './src/components/'),
    '@translations/*': path.resolve(__dirname, 'src/components/translations'),
    '@constants': path.resolve(__dirname, './src/constants/'),
    '@pages': path.resolve(__dirname, './src/pages/'),
    '@navigation': path.resolve(__dirname, './src/navigation/'),
    '@theme': path.resolve(__dirname, './src/theme/')
  })(config, env)
  return alias(configPaths('./tsconfig.paths.json'))(config)
}
