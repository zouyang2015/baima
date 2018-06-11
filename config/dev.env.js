'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// EVN_CONFIG与API_ROOT为新增加--
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  EVN_CONFIG: '"dev"',
  API_ROOT: '"https://app.ibaodian.com/webh5.shtml"'
})
