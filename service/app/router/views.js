'use strict';

/**
 * 前台路由
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller} = app
  router.get('/views/index', controller.views.home.index)
}
