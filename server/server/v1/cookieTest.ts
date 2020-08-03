import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

const jwt = require('jsonwebtoken');

console.log('sdfsdf');
const userInfo = {
  _id: 0,
  userId: 'thereisnotruth',
  userName: '고태진',
  userNumber: 2016920003,
};

router.get('/', (ctx: Koa.Context) => {
  const token = jwt.sign(userInfo, process.env.AccessSecretKey, { expiresIn: '7d' });
  ctx.cookies.set('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });
  ctx.body = 'test';
});

export = router
