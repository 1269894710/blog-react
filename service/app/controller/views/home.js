'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let res = await this.app.mysql.get('blog_content', {})
    console.log(res)
    const { ctx } = this;
    ctx.body = res;
  }
}

module.exports = HomeController;
