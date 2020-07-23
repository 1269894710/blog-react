'use strict';

/**
 * 后台路由
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  var adminauth = app.middleware.adminauth()
  router.get('/admin/index', controller.admin.main.index)
  router.post('/admin/checkLogin', controller.admin.main.checkLogin)
  router.get('/admin/getTypeInfo', adminauth, controller.admin.main.getTypeInfo)
  router.post('/admin/saveArticle', adminauth, controller.admin.main.saveArticle)
  router.get('/admin/getArticleList', adminauth, controller.admin.main.getArticleList)
  router.get('/admin/deleteArticle/:id', adminauth, controller.admin.main.deleteArticle)
};
