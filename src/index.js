const bodyParser = require('koa-bodyparser');
const raw = require('raw-body');
const inflate = require('inflation');

module.exports = (opts) => async (ctx, next) => {
  if (ctx.request.is('application/graphql')) {
    const str = await raw(inflate(ctx.req), { limit: '1mb', encoding: 'utf8', ...opts });
    ctx.request.body = { query: str };
    await next();
  } else {
    await bodyParser(opts)(ctx, next);
  }
};