var express = require('express');
var appUtils = require('../utils/app-utils');
var router = express.Router();

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
    router.all('*', function(req,res){
        res.locals.pageInfo = appUtils.generatePageInfo(req.originalUrl);
        next();
    });

    /* GET login page. */
    router.get('/', function(req, res) {
        res.render('index', {
            message: req.flash('message'),
            pageInfo: res.locals.pageInfo
        });
    });

    /* Handle Login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/home',
        failureRedirect: '/',
        failureFlash : true
    }));

    /* Handle Login GET */
    router.get('/login', function(req,res){
        res.render('login');
    });

    /* GET Registration Page */
    router.get('/create', function(req, res){
        res.render('register',{message: req.flash('message')});
    });

    /* Handle Registration POST */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/home',
        failureRedirect: '/signup',
        failureFlash : true
    }));

    /* GET Home Page */
    router.get('/home', isAuthenticated, function(req, res){
        res.render('home', { user: req.user });
    });

    /* Handle Logout */
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;
}