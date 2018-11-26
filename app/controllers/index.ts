import { JsonController, Get } from 'routing-controllers'

@JsonController('/')
export default class IndexController {
  @Get('')
  async hello() {
    return {
      status: 1,
      message: 'OK'
    }
  }
}