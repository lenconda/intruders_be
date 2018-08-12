var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ status: 1, message: '请求成功' })
})

module.exports = router
