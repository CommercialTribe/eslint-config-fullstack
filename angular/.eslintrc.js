/* eslint-disable */
module.exports = {
  'extends': [
    '@commercial-tribe/eslint-config/browser',
    'plugin:angular/johnpapa'
  ],
  plugins: [
    'angular'
  ],
  globals: {
    angular: true,
    module: true,
    inject: true
  },
  settings: {
    angular: 1
  },
  rules: {
    'no-undef': 1,
    'angular/timeout-service': 1,
    'angular/interval-service': 1,
    'angular/no-run-logic': 1,
    'angular/on-watch': 1,
    'angular/controller-as-route': 1,
    'angular/controller-as-vm': 1,
    'angular/controller-name': 1,
    'angular/function-type': 1,
    'angular/file-name': 1,
    'angular/controller-as': 1,
    'angular/no-service-method': 1,
    'angular/window-service': 1,
    'angular/document-service': 1,
    'angular/module-getter': 1
  }
};
