const routerPublic = require('express').Router();
const routerPrivate = require('express').Router();

/**
 * Public routers
 */
routerPublic.use('/', require('./server'));

/**
 * Private routers
 */
routerPrivate.use('/authorize', require('./auth'));
routerPrivate.use('/user', require('./user'));
routerPrivate.use('/ml', require('./ml'));


module.exports.public = routerPublic;
module.exports.private = routerPrivate;
