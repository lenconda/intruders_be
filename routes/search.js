var express = require('express')
var router = express.Router()
var superagent = require('superagent')
var cheerio = require('cheerio')

router.get('/', (req, res, next) => {
  superagent.get('https://www.fastsoso.cn/search/2?k=%E5%88%87%E5%B0%94%E8%AF%BA%E8%B4%9D%E5%88%A90').end((err, data) => {
    if (err) return next(err)
    // console.log(data.text)
    let $ = cheerio.load(data.text)
    let items = []
    let raw = $('.col-md-6.col-md-offset-3')[2].children[1]
    let divs = $(raw).children('div[style="padding-top: 3px;"]')
    console.log($($(divs['9']).children('div[style="color: #105207;"]')).text().split(' ').join('').trim().split('\n').join('').split('|')[0].split('：')[1])
    divs.each((index, item) => {
      let url = $(item).children('div[name="content-title"]').find('a').attr('href')
      let title = $(item).children('div[name="content-title"]').find('a[rel="noreferrer"]').text().trim()
      let encrypt = $(item).children('div[name="content-title"]').find('span.badge').text() == '' ? false : true
      let password = $(item).find('span[style="color: #0000FF;font-size: 18px;"]').text()
      let time = $(item).children('div[style="color: #105207;"]').text().split(' ').join('').trim().split('\n').join('').split('|')[0].split('：')[1]
      let type = $(item).children('div[style="color: #105207;"]').text().split(' ').join('').trim().split('\n').join('').split('|')[1].split('：')[1]
      let size = $(item).children('div[style="color: #105207;"]').text().split(' ').join('').trim().split('\n').join('').split('|')[2].split('：')[1]
      items.push({ url, title, encrypt, password, time, type, size })
    })
    res.send({ status: 1, message: 'OK', data: items })
  })
})

module.exports = router