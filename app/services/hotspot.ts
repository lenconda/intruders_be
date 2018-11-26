import { Service } from 'typedi'
const superagent = require('superagent')
const cheerio = require('cheerio')
import utils from '../utils'

@Service()
export default class HotspotService {

  async getCategories () {
    let response = await superagent.get('https://www.fastsoso.cn')
    console.log(response.text)
    let $ = cheerio.load(response.text)
    let items = []
    let lis = $('ul.nav.nav-tabs > li')
    lis.each((index, item) => {
      let id = $(item).children('a[data-toggle="tab"]').attr('href').substr(1)
      let name = $(item).text()
      items.push({ id, name })
    })
    return items
  }

  async getLists (id: string) {
    let response = await superagent.get('https://www.fastsoso.cn')
    let $ = cheerio.load(response.text)
    let items = []
    let links = $(`#${id}`).find('a.list-group-item.col-lg-6')
    links.each((index, item) => {
      let tab = utils.parseGetParam($(item).attr('href'), 't')
      let title = $(item).children('span').contents().filter(function () { return this.nodeType == 3 }).text().split(' ').join('').split('\n').join('')
      // let title = raw
      items.push({ tab, title })
    })
    return items
  }

}
