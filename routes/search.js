var express = require('express')
var router = express.Router()
var superagent = require('superagent')
var cheerio = require('cheerio')

router.get('/', (req, res, next) => {
  superagent.get('https://www.fastsoso.cn/search/1?k=%E5%88%87%E5%B0%94%E8%AF%BA%E8%B4%9D%E5%88%A90').end((err, data) => {
    if (err) return next(err)
    // console.log(data.text)
    let $ = cheerio.load(data.text)
    let items = []
    let raw = $('.col-md-6.col-md-offset-3')[2].children[1]
    let results = $(raw).children('div[style="padding-top: 3px;"]')
    // for (let i = 0; i < results.length; i++) {
    //   items.push(results[i])
    // }
    console.log(results)
    res.send({ status: 1, message: 'OK', data: [] })
  })
})

module.exports = router