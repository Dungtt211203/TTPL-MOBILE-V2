// prettier-ignore
module.exports = {
  presets: ['@babel/preset-env'],
env: {
  // production: {
  //   plugins: ['transform-remove-console'],
  // },
},
presets: ['module:metro-react-native-babel-preset'],
plugins: [
  ["babel-plugin-inline-import", {
    "extensions": [
      ".graphql",
      ".txt",
      // Add other extensions you want to inline import
    ]
  }],
  'transform-inline-environment-variables',
      'react-native-reanimated/plugin',
      '@babel/plugin-transform-flow-strip-types',
      ["@babel/plugin-transform-private-methods", 
          {"assumptions": {
                  "privateFieldsAsProperties": true,
                  "setPublicClassFields": true
              },
          loose: true
          }
      ],
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  [
    'module-resolver',
    {
      root: ['./src'],
      alias: {
                  'native-base': './node_custom/native-base/src',
                  '@i18n': './i18n',
                  '@assets': './src/assets',
                  '@app-views': './src/app-views',
                  '@app-navigation': './src/app-navigation',
                  '@app-helper': './src/app-helper',
                  '@app-services': './src/app-services',
                  '@app-uikits': './src/app-uikits',
                  '@app-components': './src/app-components',
                  '@app-database': './src/app-database',
                  '@app-clients': './src/app-clients',
                  '@app-schemas': './src/app-schemas',
                  '@app-hooks': './src/app-hooks',
                  "@app-config":'./src/app-config',
                  '@app-languages': './src/app-languages',
                  '@app-models': './src/app-models',
                  '@realm-db': './src/realm-db',
      },  
    },
  ],
],
};
