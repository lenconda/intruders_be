var express = require('express')
var router = express.Router()
var superagent = require('superagent')
var cheerio = require('cheerio')

var utils = require('../utils')

router.get('/categories', (req, res, next) => {
  superagent.get('https://www.fastsoso.cn').end((err, data) => {
    if (err) return next(err)
    let $ = cheerio.load(data.text)
    let items = []
    let lis = $('ul.nav.nav-tabs > li')
    lis.each((index, item) => {
      let id = $(item).children('a[data-toggle="tab"]').attr('href').substr(1)
      let name = $(item).text()
      items.push({ id, name })
    })
    res.send({ status: 1, message: 'OK', data: items })
  })
})

router.get('/lists', (req, res, next) => {
  superagent.get('https://www.fastsoso.cn').end((err, data) => {
    if (err) return next(err)
    let $ = cheerio.load(data.text)
    let items = []
    let links = $(`#${req.query.id}`).find('a.list-group-item.col-lg-6')
    links.each((index, item) => {
      let tab = utils.parseGetParam($(item).attr('href'), 't')
      let title = $(item).children('span').contents().filter(function () { return this.nodeType == 3 }).text().split(' ').join('').split('\n').join('')
      // let title = raw
      items.push({ tab, title })
    })
    res.send({ status: 1, message: 'OK', data: items })
  })
})

module.exports = router