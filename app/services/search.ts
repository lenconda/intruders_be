import { Service } from 'typedi'
const superagent = require('superagent')
const cheerio = require('cheerio')

@Service()
export default class SearchService {

  async getSearchResults (keyword: string, page: string, tab: string) {
    console.log(keyword)
    const response = await superagent.get(encodeURI(`https://www.fastsoso.cn/search?page=${page}&k=${keyword}&t=${tab || -1}`))
    let $ = cheerio.load(response.text)
    let items = []
    let raw = $('div.container > div.row')[2].children[1].children[1]
    let divs = $(raw).children('div:not([style="clear: both"])')
    divs.each((index, item) => {
      let url = $(item).children('div[name="content-title"]').find('a[rel="noreferrer"]').attr('href')
      let title = $(item).children('div[name="content-title"]').find('a[rel="noreferrer"]').text().trim()
      let encrypt = $(item).children('div[name="content-title"]').find('span.badge').text() == '' ? false : true
      let password = $(item).find('span[style="color: #0000FF;"]').text()
      console.log(password)
      let extraInfo = $(item).children('div[style="color: #105207;"]').text().split(' ').join('').trim().split('\n').join('').split('|')
      let time = extraInfo[0].split('：')[1]
      let type = extraInfo[1].split('：')[1]
      let size = extraInfo[2].split('：')[1]
      items.push({ url, title, encrypt, password, time, type, size })
    })
    return items
  }

}
