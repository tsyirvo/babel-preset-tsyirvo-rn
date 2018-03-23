'use strict';

module.exports = {
  presets: [require('babel-preset-env'), require('babel-preset-react-native')],
  env: {
    production: [require('babel-plugin-transform-remove-console')],
  },
  plugins: [
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-transform-exponentiation-operator'),
    require('babel-plugin-transform-decorators-legacy'),
    [
      require('babel-plugin-transform-es2015-template-literals'),
      {
        spec: true,
      },
    ],
    [
      require('babel-plugin-transform-object-rest-spread'),
      {
        useBuiltIns: true,
      },
    ],
  ].filter(Boolean),
};
