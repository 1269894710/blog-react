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
    if (res.length > 0) {
      let openId = new Date().getTime()
      this.ctx.session.openId = {'openId': openId}
      this.ctx.body = {'data': '登录成功', 'openId': openId, 'body': {'status': true}}
    } else {
      this.ctx.body = {'data': '登录失败', 'body': {'status': false}}
    }
  }

  async getTypeInfo() {
    const resType = await this.app.mysql.select('type')
    this.ctx.body = {msg: '', body: resType}
  }

  async saveArticle() {
    let tmpArticle = this.ctx.request.body
    const result = await this.app.mysql.insert('article', tmpArticle) // 添加
    // const result = await this.app.mysql.update('article', tmpArticle) // 更新
    const insertFlag = result.affectedRows === 1
    this.ctx.body = {msg: '', body: insertFlag}
  }

  async getArticleList() {
    let sql = 'SELECT article.id as id ,' +
      'article.title as title ,' +
      'article.des as des ,' +
      'article.updateTime as updateTime ,' +
      'article.count_view as count_view ,' +
      'article.art_content as content ,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'ORDER BY article.id DESC'
    const res = await this.app.mysql.query(sql)
    console.log(res)
    const { ctx } = this;
    ctx.body = {
      body: res
    };
  }

  async deleteArticle() {
    let id = this.ctx.params.id
    const res = await this.app.mysql.delete('article', {'id': id})
    this.ctx.body = {msg: '', body: res}
  }
}

module.exports = MainController;
