import { JsonController, QueryParam, Get } from 'routing-controllers'
import SearchService from '../services/search'
import { Inject } from 'typedi'

@JsonController('/search')
export default class SearchController {

  @Inject()
  service: SearchService

  @Get('')
  async search (
    @QueryParam('keyword') keyword: string,
    @QueryParam('page') page: string,
    @QueryParam('tab') tab: string
  ) {
    const data = await this.service.getSearchResults(keyword, page, tab)
    return data
  }

}
