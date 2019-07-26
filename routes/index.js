const router = require('koa-router')();

const AccountController = require("../controllers/accounts");

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post("/api/accounts", AccountController.create);
router.get("/api/accounts/:id", AccountController.detail);

module.exports = router
