'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello';
  }

  async checkLogin() {
    console.log(this.ctx.request.body, '11111')
    let userName = this.ctx.request.body.userName
    let password = this.ctx.request.body.password
    let sql = 'SELECT userName FROM admin_user WHERE userName = "'+ userName +'" AND password = "'+ password
    const res = await this.app.mysql.query(sql)
    console.log(res)
    if (res.length > 0) {
      let openId = new Date().getTime()
      this.ctx.session.openId = {'openId': openId}
      this.ctx.body = {'data': '登录成功', 'openId': openId}
    } else {
      this.ctx.body = {'data': '登录失败'}
    }
  }
}

module.exports = MainController;
