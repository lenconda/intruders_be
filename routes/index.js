const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = 'Welcome to Koa2 Lenconda Template!'
})

module.exports = router
