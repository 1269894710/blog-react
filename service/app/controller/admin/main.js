'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello';
  }

  async checkLogin() {
    let userName = this.ctx.request.body.userName
    let password = this.ctx.request.body.password
    let sql = 'SELECT userName FROM admin_user WHERE userName = "'+ userName +'" AND password = "'+ password + '"'
    const res = await this.app.mysql.query(sql)
    console.log(res)
    let openId = new Date().getTime()
    this.ctx.session.openId = {'openId': openId}
    if (res.length > 0) {
      this.ctx.body = {'msg': '登录成功', 'openId': openId, 'body': {'status': true}}
    } else {
      this.ctx.body = {'msg': '登录失败', 'openId': openId, 'body': {'status': false}}
    }
  }
}

module.exports = MainController;
