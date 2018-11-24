import { JsonController, Get } from 'routing-controllers'

@JsonController('/')
export default class IndexController {
  @Get('')
  async hello() {
    return {
      message: 'Hello, Koa2!'
    }
  }

  @Get('string')
  async returnString() {
    return 'this is a string'
  }

  @Get('json')
  async returnJson() {
    return {
      status: 1,
      message: 'OK',
      data: 'koa2 json'
    }
  }
}