var User = require('../models/user');

module.exports = new UserController()

function UserController () {
};

UserController.prototype.login = function (passport, req, res, next) {
    passport.authenticate('local',{
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash : 'Нет пользователя с таким адресом и паролем.'
    })(req, res, next);
};

UserController.prototype.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};

UserController.prototype.getAll = function(req, res, next){
    User.find(function(err, result){
        if (err){
            throw new Error(err);        }

        res.render('user/index', {
            message: req.flash('message'),
            pageInfo: res.locals.pageInfo,
            user: req.user,
            contacts: result
        });
    })
}

UserController.prototype.getCreate = function(req, res) {
    res.render('user/form', {
        message: req.flash('message'),
        pageInfo: res.locals.pageInfo,
        user: req.user,
        postAction: 'create'
    });
}

UserController.prototype.getEdit = function(req, res, next){
    User.findOne({_id: req.param('id') },function(err, result){
        if (err){
            throw new Error(err);
        }

        res.render('user/form', {
            message: req.flash('message'),
            pageInfo: res.locals.pageInfo,
            user: req.user,
            contact: result,
            postAction: 'edit'
        });
    })
}

UserController.prototype.getLogin = function(req,res){
    res.render('login',{
        message: req.flash('error'),
        pageInfo: res.locals.pageInfo
    });
}


UserController.prototype.edit = function(req, res, next){

}

UserController.prototype.delete = function(req, res, next){

}

UserController.prototype.create = function(passport, req, res, next){
    passport.authenticate('signup', {
        successRedirect: '/contacts',
        failureRedirect: '/contacts/create',
        failureFlash : true
    })(req, res, next);
}