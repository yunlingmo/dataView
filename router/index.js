var express = require('express')
var router = express.Router()
var home = require('./home')
var water = require('./water')

// 挂载user模块
router.use('/', home)
// 挂载course模块
router.use('/', water)

module.exports = router
