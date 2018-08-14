var express = require('express')
var router = express.Router()
var superagent = require('superagent')
var cheerio = require('cheerio')

router.get('/', (req, res, next) => {
  superagent.get(encodeURI(`https://www.fastsoso.cn/search/${req.query.page}?k=${req.query.keyword}`)).end((err, data) => {
    if (err) return next(err)
    let $ = cheerio.load(data.text)
    let items = []
    let raw = $('.col-md-6.col-md-offset-3')[2].children[1]
    let divs = $(raw).children('div[style="padding-top: 3px;"]')
    divs.each((index, item) => {
      let url = $(item).children('div[name="content-title"]').find('a').attr('href')
      let title = $(item).children('div[name="content-title"]').find('a[rel="noreferrer"]').text().trim()
      let encrypt = $(item).children('div[name="content-title"]').find('span.badge').text() == '' ? false : true
      let password = $(item).find('span[style="color: #0000FF;font-size: 18px;"]').text()
      let extraInfo = $(item).children('div[style="color: #105207;"]').text().split(' ').join('').trim().split('\n').join('').split('|')
      let time = extraInfo[0].split('：')[1]
      let type = extraInfo[1].split('：')[1]
      let size = extraInfo[2].split('：')[1]
      items.push({ url, title, encrypt, password, time, type, size })
    })
    res.send({ status: 1, message: 'OK', data: items })
  })
})

module.exports = router