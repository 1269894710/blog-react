'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/views')(app)
  require('./router/admin')(app)
};
