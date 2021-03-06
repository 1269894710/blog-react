'use strict';

/**
 * 前台路由
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller} = app
  router.get('/views/index', controller.views.home.index)
  router.get('/views/getArticleList', controller.views.home.getArticleList)
  router.get('/views/getArticleById/:id', controller.views.home.getArticleById)
}
