import { JsonController, Get, QueryParam } from 'routing-controllers'
import HotspotService from '../services/hotspot'
import { Inject, Service } from 'typedi'

@JsonController('/hotspot')
export default class HotspotController {

  @Inject()
  service: HotspotService

  @Get('/categories')
  async getCategories () {
    const data = await this.service.getCategories()
    return data
  }

  @Get('/lists')
  async getLists (@QueryParam('id') id: string) {
    const data = await this.service.getLists(id)
    return data
  }

}
