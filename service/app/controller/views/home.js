'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let res = await this.app.mysql.get('blog_content', {})
    console.log(res)
    const { ctx } = this;
    ctx.body = res;
  }

  async getArticleList() {
    let sql = 'SELECT article.id as id ,' +
              'article.title as title ,' +
              'article.des as des ,' +
              'article.updateTime as updateTime ,' +
              'article.count_view as count_view ,' +
              'article.art_content as content ,' +
              'type.typeName as typeName ' +
              'FROM article LEFT JOIN type ON article.type_id = type.Id'
    const res = await this.app.mysql.query(sql)
    console.log(res)
    const { ctx } = this;
    ctx.body = {
      body: res
    };
  }

  async getArticleById () {
    let id = this.ctx.params.id
    // let sql = 'SELECT article.id as id ,' +
    //   'article.title as title ,' +
    //   'article.des as des ,' +
    //   'article.updateTime as updateTime ,' +
    //   'article.count_view as count_view ,' +
    //   'article.art_content as content ,' +
    //   'type.typeName as typeName ,' +
    //   'type.id as typeId ' +
    //   'FROM article LEFT JOIN type ON article.type_id = type.Id' +
    //   'WHERE article.id=' + id
    // const res = await this.app.mysql.query(sql)
    this.ctx.body = {
      body: '测试' + id
    }
  }
}

module.exports = HomeController;
