import { JsonController, Get } from 'routing-controllers'

@JsonController('/')
export default class IndexController {

  @Get('')
  async hello() {
    return {}
  }

}
