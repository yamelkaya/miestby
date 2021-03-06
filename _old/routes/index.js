var express = require('express');
var appUtils = require('../utils/appUtils');
var router = express.Router();
var userController = require('../controllers/user');
var multController = require('../controllers/mult');

var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}

module.exports = function(passport){

    router.use(function(req,res,next){
        res.locals.pageInfo = appUtils.generatePageInfo(req.originalUrl);
        next();
    });

    router.get('/', function(req, res) {
        res.render('index', {
            message: req.flash('message'),
            pageInfo: res.locals.pageInfo,
            user: req.user
        });
    });

    router.get('/news', function(req, res) {
        res.render('news/index', {
            message: req.flash('message'),
            pageInfo: res.locals.pageInfo,
            user: req.user
        });
    });

    router.get('/login', userController.getLogin);
    router.get('/contacts/create', userController.getCreate);
    router.get('/contacts/edit/:id', userController.getEdit);
    router.get('/contacts', userController.getAll);

    router.get('/logout', userController.logout);
    router.post('/login', function(req,res,next){ userController.login(passport,req,res,next); });
    router.post('/contacts/create',userController.create);
    router.post('/contacts/edit/:id', userController.edit);
    router.get('/contacts/delete/:id', userController.delete);


    router.get('/mult/create', multController.getCreate);
    router.get('/mult/edit/:id', multController.getEdit);
    router.get('/mult/:id', multController.getDetails);
    router.get('/mult', multController.getAll);

    router.post('/mult/create',multController.create);
    router.post('/mult/edit/:id', multController.edit);
    router.get('/mult/delete/:id', multController.delete);


    return router;
}