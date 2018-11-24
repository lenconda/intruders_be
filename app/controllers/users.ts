import {BodyParam, JsonController, Get, Post, QueryParam} from 'routing-controllers'

@JsonController('/users')
export default class UsersController {
  @Get('')
  async makeGreeting (@QueryParam('username') userName: string) {
    return {
      status: 1,
      message: 'OK',
      data: {
        username: userName
      }
    }
  }

  @Post('/login')
  async userLogin (@BodyParam('username') username: string, @BodyParam('password') password: string) {
    return {
      status: 0,
      message: 'Login failed',
      data: {
        username: username,
        password: password
      }
    }
  }
}